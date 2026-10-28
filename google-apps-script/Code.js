/* eslint-disable */
/**
 * ESSENCE 2027 — Official Registration Google Apps Script API
 * Chetana's Centre for Innovation & Entrepreneurship Learning (CiEL)
 * 
 * Features:
 * - Server-side validation of required fields
 * - Anti-formula injection protection (neutralizes =, +, -, @)
 * - Idempotency & duplicate detection by UTR and submission key
 * - Automatic sheet initialization and formatting (setupSheet)
 * - Safe error handling with structured JSON responses
 */

var CONFIG = {
  SHEET_NAME: 'Registrations',
  DRIVE_FOLDER_NAME: 'ESSENCE_2027_Uploads',
  ALLOWED_ORIGINS: '*', // Configured for CORS web app calls
  ADMIN_EMAIL: 'ciel@chetana.org.in'
};

/**
 * Handle POST request from Next.js backend or frontend
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for concurrent requests
  try {
    lock.waitLock(30000);
  } catch (err) {
    return createJsonResponse({
      success: false,
      error: 'Server is busy processing concurrent registrations. Please retry shortly.'
    }, 429);
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({
        success: false,
        error: 'Missing payload in request body.'
      }, 400);
    }

    var payload = JSON.parse(e.postData.contents);

    // 1. Basic validation
    var validationError = validatePayload(payload);
    if (validationError) {
      return createJsonResponse({
        success: false,
        error: validationError
      }, 400);
    }

    var sheet = getOrCreateRegistrationSheet();

    // 2. Duplicate Detection (by Idempotency Key or UTR)
    var utr = sanitizeText(payload.utrTransactionNumber || '');
    var idempotencyKey = sanitizeText(payload.idempotencyKey || '');
    
    if (utr || idempotencyKey) {
      var existingRow = findDuplicateRegistration(sheet, utr, idempotencyKey);
      if (existingRow) {
        return createJsonResponse({
          success: true,
          isDuplicate: true,
          registrationId: existingRow.registrationId,
          message: 'Registration was previously processed.',
          timestamp: existingRow.timestamp
        }, 200);
      }
    }

    // 3. Generate Unique Registration ID if not provided
    var registrationId = payload.registrationId ? sanitizeText(payload.registrationId) : generateRegistrationId();
    var submissionTimestamp = new Date().toISOString();

    // 4. Handle optional base64 attachments to Drive
    var pptDriveUrl = payload.pptUrlOrFileName || '';
    if (payload.pptBase64 && payload.pptBase64.indexOf('base64,') !== -1) {
      pptDriveUrl = saveBase64ToDrive(payload.pptBase64, registrationId + '_PPT', CONFIG.DRIVE_FOLDER_NAME) || pptDriveUrl;
    }

    var receiptDriveUrl = payload.paymentReceiptUrlOrFileName || '';
    if (payload.paymentReceiptBase64 && payload.paymentReceiptBase64.indexOf('base64,') !== -1) {
      receiptDriveUrl = saveBase64ToDrive(payload.paymentReceiptBase64, registrationId + '_Receipt', CONFIG.DRIVE_FOLDER_NAME) || receiptDriveUrl;
    }

    // 5. Build Row Data (28 Columns)
    var row = [
      registrationId,                                           // Col A: Registration ID
      submissionTimestamp,                                      // Col B: Timestamp (ISO)
      'Pending UTR Verification',                                // Col C: Payment Status
      'Under Review',                                           // Col D: Review Status
      sanitizeText(payload.teamLeaderName),                     // Col E: Team Leader Name
      sanitizeText(payload.teamLeaderEmail),                    // Col F: Team Leader Email
      sanitizeText(payload.teamLeaderPhone),                    // Col G: Team Leader Contact
      sanitizeText(payload.participantCategory),                // Col H: Participant Category
      sanitizeText(payload.collegeName),                        // Col I: College / Institute
      sanitizeText(payload.course),                             // Col J: Course / Programme
      sanitizeText(payload.pursuingLevel),                      // Col K: Pursuing Level
      sanitizeText(payload.yearOfStudy),                        // Col L: Year of Study
      sanitizeText(payload.department || ''),                   // Col M: Department
      sanitizeText(payload.teamName || 'Solo Entry'),           // Col N: Team Name
      sanitizeText(payload.participationType || 'team'),        // Col O: Participation Type
      sanitizeText(payload.teamMember2Name || ''),              // Col P: Member 2 Name
      sanitizeText(payload.teamMember2Email || ''),             // Col Q: Member 2 Email
      sanitizeText(payload.teamMember3Name || ''),              // Col R: Member 3 Name
      sanitizeText(payload.teamMember3Email || ''),             // Col R: Member 3 Email
      sanitizeText(payload.teamMember4Name || ''),              // Col T: Member 4 Name
      sanitizeText(payload.teamMember4Email || ''),              // Col U: Member 4 Email
      sanitizeText(payload.projectTitle),                       // Col V: Project Title
      sanitizeText(payload.innovationTrack),                    // Col W: Track / Domain
      sanitizeText(payload.problemStatement),                   // Col X: Problem Statement
      sanitizeText(payload.proposedSolution),                   // Col Y: Proposed Solution
      sanitizeText(payload.projectSummary),                     // Col Z: Summary
      pptDriveUrl,                                              // Col AA: Pitch Deck / PPT Link
      Number(payload.registrationFee) || 0,                     // Col AB: Fee Amount (INR)
      utr,                                                      // Col AC: UTR / Transaction No.
      receiptDriveUrl,                                          // Col AD: Receipt Link
      idempotencyKey                                            // Col AE: Idempotency Key
    ];

    sheet.appendRow(row);
    var newRowIndex = sheet.getLastRow();

    return createJsonResponse({
      success: true,
      registrationId: registrationId,
      rowIndex: newRowIndex,
      timestamp: submissionTimestamp,
      message: 'Registration successfully recorded.'
    }, 200);

  } catch (err) {
    return createJsonResponse({
      success: false,
      error: 'Internal Script Error: ' + err.toString()
    }, 500);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Handle GET request (Health check & version)
 */
function doGet(e) {
  return createJsonResponse({
    status: 'online',
    service: 'ESSENCE 2027 Registration API',
    organization: "Chetana's CiEL",
    version: '1.0.0',
    timestamp: new Date().toISOString()
  }, 200);
}

/**
 * Validate incoming payload
 */
function validatePayload(p) {
  if (!p.teamLeaderName || p.teamLeaderName.trim().length === 0) return 'Team leader name is required.';
  if (!p.teamLeaderEmail || p.teamLeaderEmail.indexOf('@') === -1) return 'Valid team leader email is required.';
  if (!p.teamLeaderPhone || p.teamLeaderPhone.trim().length < 10) return 'Valid 10-digit mobile number is required.';
  if (!p.collegeName || p.collegeName.trim().length === 0) return 'College / institution name is required.';
  if (!p.projectTitle || p.projectTitle.trim().length === 0) return 'Project title is required.';
  if (!p.problemStatement || p.problemStatement.trim().length === 0) return 'Problem statement is required.';
  if (!p.proposedSolution || p.proposedSolution.trim().length === 0) return 'Proposed solution is required.';
  if (!p.utrTransactionNumber || p.utrTransactionNumber.trim().length === 0) return 'UTR / Transaction number is required.';
  return null;
}

/**
 * Sanitize text to prevent Spreadsheet Formula Injection (=, +, -, @)
 */
function sanitizeText(value) {
  if (value === null || value === undefined) return '';
  var str = String(value).trim();
  if (/^[=+\-@]/.test(str)) {
    return "'" + str;
  }
  return str;
}

/**
 * Find existing registration by UTR or idempotency key
 */
function findDuplicateRegistration(sheet, utr, idempotencyKey) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return null;

  var utrCol = 29; // AC
  var keyCol = 31; // AE
  var regIdCol = 1; // A
  var timeCol = 2; // B

  var data = sheet.getRange(2, 1, lastRow - 1, 31).getValues();
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var rowUtr = String(row[utrCol - 1] || '').trim();
    var rowKey = String(row[keyCol - 1] || '').trim();

    if ((utr && rowUtr && utr.toLowerCase() === rowUtr.toLowerCase()) ||
        (idempotencyKey && rowKey && idempotencyKey === rowKey)) {
      return {
        registrationId: row[regIdCol - 1],
        timestamp: row[timeCol - 1]
      };
    }
  }
  return null;
}

/**
 * Generate unique registration ID
 */
function generateRegistrationId() {
  var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var code = '';
  for (var i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return 'ESS-2027-' + code;
}

/**
 * Save Base64 file into a Google Drive folder
 */
function saveBase64ToDrive(base64Data, filename, folderName) {
  try {
    var parts = base64Data.split('base64,');
    var contentType = parts[0].split(';')[0].replace('data:', '');
    var decoded = Utilities.base64Decode(parts[1]);
    var blob = Utilities.newBlob(decoded, contentType, filename);

    var folders = DriveApp.getFoldersByName(folderName);
    var folder;
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
    }

    var file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return file.getUrl();
  } catch (err) {
    Logger.log('Drive upload error: ' + err.toString());
    return '';
  }
}

/**
 * Helper to return CORS-compliant JSON response
 */
function createJsonResponse(obj, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(obj));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

/**
 * One-click Setup: Run this function in Apps Script to initialize headers & styling
 */
function setupSheet() {
  var sheet = getOrCreateRegistrationSheet();
  
  var headers = [
    'Registration ID',
    'Submission Timestamp',
    'Payment Status',
    'Review Status',
    'Team Leader Name',
    'Team Leader Email',
    'Team Leader Contact',
    'Participant Category',
    'College / Institute',
    'Course / Programme',
    'Pursuing Level',
    'Year of Study',
    'Department',
    'Team Name',
    'Participation Type',
    'Member 2 Name',
    'Member 2 Email',
    'Member 3 Name',
    'Member 3 Email',
    'Member 4 Name',
    'Member 4 Email',
    'Project Title',
    'Innovation Track',
    'Problem Statement',
    'Proposed Solution',
    'Project Summary',
    'Pitch Deck / PPT Link',
    'Fee Paid (INR)',
    'UTR / Transaction No.',
    'Payment Receipt Link',
    'Idempotency Key'
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Style Header Row: Royal Navy background (#0A1E3D), Gold text (#D4AF5A)
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#0A1E3D');
  headerRange.setFontColor('#D4AF5A');
  headerRange.setFontWeight('bold');
  headerRange.setFontFamily('Arial');
  headerRange.setFontSize(10);
  
  // Freeze header row
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);

  // Add dropdown validation for Payment Status (Col C)
  var paymentRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Pending UTR Verification', 'Payment Verified', 'Payment Failed / Mismatched'], true)
    .build();
  sheet.getRange('C2:C5000').setDataValidation(paymentRule);

  // Add dropdown validation for Review Status (Col D)
  var reviewRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Under Review', 'Screened In', 'Shortlisted for Mentorship', 'Finalist', 'Not Selected'], true)
    .build();
  sheet.getRange('D2:D5000').setDataValidation(reviewRule);

  Logger.log('ESSENCE 2027 Registration Sheet successfully initialized!');
}

/**
 * Get or create the designated registration sheet
 */
function getOrCreateRegistrationSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    setupSheet();
  }
  return sheet;
}
