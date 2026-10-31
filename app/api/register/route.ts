import { NextRequest, NextResponse } from 'next/server';

// In-memory idempotency cache for duplicate request suppression (10-minute window)
const processedKeys = new Map<string, { registrationId: string; timestamp: number }>();

function cleanOldKeys() {
  const now = Date.now();
  const TEN_MINUTES = 10 * 60 * 1000;
  for (const [key, val] of processedKeys.entries()) {
    if (now - val.timestamp > TEN_MINUTES) {
      processedKeys.delete(key);
    }
  }
}

/**
 * Sanitize untrusted user input to protect against spreadsheet formula injection (=, +, -, @)
 */
function sanitizeInput(val: unknown): string {
  if (val === null || val === undefined) return '';
  const str = String(val).trim();
  if (/^[=+\-@]/.test(str)) {
    return `'${str}`;
  }
  return str;
}

/**
 * Generate cryptographically random registration ID: ESS-2027-XXXXXX
 */
function generateRegistrationId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `ESS-2027-${code}`;
}

export async function POST(req: NextRequest) {
  cleanOldKeys();

  try {
    const body = await req.json();

    // 1. Mandatory server-side field validation
    if (!body.teamLeaderName || typeof body.teamLeaderName !== 'string' || body.teamLeaderName.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Team leader full name is required.' }, { status: 400 });
    }

    if (!body.teamLeaderEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.teamLeaderEmail)) {
      return NextResponse.json({ success: false, error: 'A valid email address is required.' }, { status: 400 });
    }

    const phoneClean = String(body.teamLeaderPhone || '').replace(/\D/g, '');
    if (phoneClean.length < 10) {
      return NextResponse.json({ success: false, error: 'A valid 10-digit mobile number is required.' }, { status: 400 });
    }

    if (!body.collegeName || typeof body.collegeName !== 'string' || body.collegeName.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'College / Institute name is required.' }, { status: 400 });
    }

    if (!body.projectTitle || typeof body.projectTitle !== 'string' || body.projectTitle.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Project / Idea title is required.' }, { status: 400 });
    }

    if (!body.problemStatement || typeof body.problemStatement !== 'string' || body.problemStatement.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Problem statement is required.' }, { status: 400 });
    }

    if (!body.proposedSolution || typeof body.proposedSolution !== 'string' || body.proposedSolution.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Proposed solution is required.' }, { status: 400 });
    }

    if (!body.utrTransactionNumber || typeof body.utrTransactionNumber !== 'string' || body.utrTransactionNumber.trim().length === 0) {
      return NextResponse.json({ success: false, error: 'Registration fee UTR / Transaction number is required.' }, { status: 400 });
    }

    if (!body.agreeRules || !body.agreeAccurate) {
      return NextResponse.json({ success: false, error: 'You must confirm the accuracy of information and agree to competition rules.' }, { status: 400 });
    }

    // 2. Check Idempotency Key & Duplicate UTR
    const idempotencyKey = String(body.idempotencyKey || body.utrTransactionNumber).trim();
    if (processedKeys.has(idempotencyKey)) {
      const cached = processedKeys.get(idempotencyKey)!;
      return NextResponse.json({
        success: true,
        registrationId: cached.registrationId,
        isDuplicate: true,
        message: 'Your registration was previously submitted and processed.',
      });
    }

    // 3. Prepare Normalized Payload
    const registrationId = generateRegistrationId();
    const normalizedPayload = {
      registrationId,
      teamLeaderName: sanitizeInput(body.teamLeaderName),
      teamLeaderEmail: sanitizeInput(body.teamLeaderEmail).toLowerCase(),
      teamLeaderPhone: sanitizeInput(phoneClean),
      participantCategory: sanitizeInput(body.participantCategory || 'Other Institute Student'),
      collegeName: sanitizeInput(body.collegeName),
      course: sanitizeInput(body.course || 'Undergraduate'),
      pursuingLevel: sanitizeInput(body.pursuingLevel || 'Under-Graduate'),
      yearOfStudy: sanitizeInput(body.yearOfStudy || '3rd Year'),
      department: sanitizeInput(body.department || ''),
      teamName: sanitizeInput(body.teamName || `${body.teamLeaderName}'s Team`),
      participationType: sanitizeInput(body.participationType || 'team'),
      teamMember2Name: sanitizeInput(body.teamMember2Name || ''),
      teamMember2Email: sanitizeInput(body.teamMember2Email || ''),
      teamMember3Name: sanitizeInput(body.teamMember3Name || ''),
      teamMember3Email: sanitizeInput(body.teamMember3Email || ''),
      teamMember4Name: sanitizeInput(body.teamMember4Name || ''),
      teamMember4Email: sanitizeInput(body.teamMember4Email || ''),
      projectTitle: sanitizeInput(body.projectTitle),
      innovationTrack: sanitizeInput(body.customTrackName ? `Other: ${body.customTrackName}` : body.innovationTrack || 'AI / ML'),
      problemStatement: sanitizeInput(body.problemStatement),
      proposedSolution: sanitizeInput(body.proposedSolution),
      projectSummary: sanitizeInput(body.projectSummary || body.problemStatement),
      pptUrlOrFileName: sanitizeInput(body.pptUrlOrFileName || ''),
      pptBase64: body.pptBase64 || '',
      registrationFee: Number(body.registrationFee) || 500,
      utrTransactionNumber: sanitizeInput(body.utrTransactionNumber),
      paymentReceiptUrlOrFileName: sanitizeInput(body.paymentReceiptUrlOrFileName || ''),
      paymentReceiptBase64: body.paymentReceiptBase64 || '',
      idempotencyKey,
    };

    // 4. Send to Google Apps Script Web App (if configured)
    const googleAppsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (googleAppsScriptUrl && googleAppsScriptUrl.startsWith('http')) {
      try {
        const gasResponse = await fetch(googleAppsScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(normalizedPayload),
          redirect: 'follow',
          // 15s timeout
          signal: AbortSignal.timeout(15000),
        });

        if (!gasResponse.ok) {
          const errText = await gasResponse.text();
          console.error('[Google Apps Script Error]:', errText);
          return NextResponse.json({
            success: false,
            error: 'Google Sheets integration encountered a server error. Please retry shortly.',
          }, { status: 502 });
        }

        const gasData = await gasResponse.json();
        if (gasData && gasData.success === false) {
          return NextResponse.json({
            success: false,
            error: gasData.error || 'Registration failed at Google Sheets endpoint.',
          }, { status: 400 });
        }

        // Cache the successful registration
        processedKeys.set(idempotencyKey, { registrationId, timestamp: Date.now() });

        return NextResponse.json({
          success: true,
          registrationId,
          timestamp: new Date().toISOString(),
          message: 'Registration successfully submitted to ESSENCE 2027.',
        });
      } catch (gasErr: unknown) {
        console.error('[Google Apps Script Fetch Failed]:', gasErr);
        return NextResponse.json({
          success: false,
          error: 'Could not connect to Google Sheets API. Please check your connection and retry.',
        }, { status: 504 });
      }
    }

    // 5. Fallback Simulation Mode (when GOOGLE_APPS_SCRIPT_URL is not yet deployed)
    console.warn('[ESSENCE Registration]: GOOGLE_APPS_SCRIPT_URL not configured. Recording in test mode.');
    processedKeys.set(idempotencyKey, { registrationId, timestamp: Date.now() });

    return NextResponse.json({
      success: true,
      registrationId,
      timestamp: new Date().toISOString(),
      isSimulation: true,
      message: 'Registration recorded (simulation mode). Configure GOOGLE_APPS_SCRIPT_URL in .env.local to stream directly to live Google Sheets.',
    });
  } catch (err: unknown) {
    console.error('[Registration API Handler Error]:', err);
    return NextResponse.json({
      success: false,
      error: 'Invalid request body or malformed JSON payload.',
    }, { status: 400 });
  }
}
