'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  CheckCircle2,
  User,
  Users,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Lightbulb,
  CreditCard,
  FileCheck,
  Building,
  Mail,
  Phone,
  AlertCircle,
  Copy,
  Printer,
  Check,
  UploadCloud,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { suggestedInnovationTracks } from '@/config/site';
import {
  registrationConfig,
  RegistrationFormData,
  initialRegistrationFormData,
} from '@/config/registration';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedRegId, setCopiedRegId] = useState(false);

  // Confirmed Submission Data
  const [submittedData, setSubmittedData] = useState<{
    registrationId: string;
    timestamp: string;
    isSimulation?: boolean;
  } | null>(null);

  // Form State with Lazy Initialization
  const [formData, setFormData] = useState<RegistrationFormData>(() => {
    let initialTrack = 'ai-ml';
    let isOtherTrack = false;

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const trackParam = params.get('track');
      if (trackParam) {
        if (trackParam === 'other') {
          initialTrack = 'other';
          isOtherTrack = true;
        } else {
          initialTrack = trackParam;
        }
      }

      // Restore saved local draft if available
      try {
        const savedDraft = localStorage.getItem('essence_registration_draft');
        if (savedDraft) {
          const parsed = JSON.parse(savedDraft);
          return {
            ...initialRegistrationFormData,
            ...parsed,
            innovationTrack: trackParam ? initialTrack : parsed.innovationTrack || initialTrack,
          };
        }
      } catch {
        // Fall back to defaults on parse failure
      }
    }

    return {
      ...initialRegistrationFormData,
      innovationTrack: initialTrack,
      customTrackName: isOtherTrack ? 'Interdisciplinary' : '',
    };
  });

  // Registration Fee is fixed at ₹500 per team (from official brochure)
  const calculatedFee = registrationConfig.feeStructure.teamFee || 500;

  // Update form data and sync to draft storage
  const updateForm = (fields: Partial<RegistrationFormData>) => {
    setFormData((prev) => {
      const updated = { ...prev, ...fields, registrationFee: calculatedFee };
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('essence_registration_draft', JSON.stringify(updated));
        } catch {
          // ignore quota limits
        }
      }
      return updated;
    });
  };

  // Step Validation Handlers
  const validateStep1 = (): boolean => {
    if (!formData.teamLeaderName.trim()) {
      setErrorMessage('Please provide the full name of the team leader / primary applicant.');
      return false;
    }
    if (!formData.teamLeaderEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.teamLeaderEmail)) {
      setErrorMessage('Please provide a valid email address.');
      return false;
    }
    const cleanPhone = formData.teamLeaderPhone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile contact number.');
      return false;
    }
    if (!formData.participantCategory) {
      setErrorMessage('Please select whether you are a Chetana Institute or Other College student.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const validateStep2 = (): boolean => {
    if (!formData.collegeName.trim()) {
      setErrorMessage('Please enter your college or institution name.');
      return false;
    }
    if (!formData.course.trim()) {
      setErrorMessage('Please specify your current course / degree programme.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const validateStep3 = (): boolean => {
    if (!formData.projectTitle.trim()) {
      setErrorMessage('Please enter your project or idea title.');
      return false;
    }
    if (formData.participationType === 'team') {
      if (!formData.teamName.trim()) {
        setErrorMessage('Please provide a team name.');
        return false;
      }
      if (!formData.teamMember2Name.trim() || !formData.teamMember2Email.trim()) {
        setErrorMessage('Team registration requires at least Team Member 2 details (Name and Email).');
        return false;
      }
    }
    if (formData.innovationTrack === 'other' && !formData.customTrackName?.trim()) {
      setErrorMessage('Please describe your custom innovation domain or field.');
      return false;
    }
    if (!formData.problemStatement.trim() || formData.problemStatement.trim().length < 20) {
      setErrorMessage('Please provide a meaningful problem statement (minimum 20 characters).');
      return false;
    }
    if (!formData.proposedSolution.trim() || formData.proposedSolution.trim().length < 20) {
      setErrorMessage('Please describe your proposed solution (minimum 20 characters).');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const validateStep4 = (): boolean => {
    if (!formData.utrTransactionNumber.trim() || formData.utrTransactionNumber.trim().length < 6) {
      setErrorMessage('Please provide a valid Bank / UPI UTR Transaction Number (minimum 6 digits/characters).');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    if (currentStep === 3 && !validateStep3()) return;
    if (currentStep === 4 && !validateStep4()) return;

    setErrorMessage('');
    setCurrentStep((prev) => Math.min(prev + 1, 5));
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setErrorMessage('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Final Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeRules || !formData.agreeAccurate) {
      setErrorMessage('Please certify that your details are accurate and agree to the ESSENCE 2027 rules.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    // Generate or maintain idempotency key
    const idempotencyKey =
      formData.idempotencyKey ||
      `IDEM-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const submissionPayload = {
      ...formData,
      idempotencyKey,
      registrationFee: calculatedFee,
    };

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionPayload),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit registration. Please check your details and retry.');
      }

      // Success
      setSubmittedData({
        registrationId: result.registrationId,
        timestamp: result.timestamp || new Date().toISOString(),
        isSimulation: result.isSimulation,
      });

      // Clear draft storage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('essence_registration_draft');
        localStorage.setItem(
          'essence_registered_user',
          JSON.stringify({
            registrationId: result.registrationId,
            teamLeaderName: formData.teamLeaderName,
            teamLeaderEmail: formData.teamLeaderEmail,
            teamName: formData.teamName || 'Solo Entry',
            projectTitle: formData.projectTitle,
            feePaid: calculatedFee,
            utr: formData.utrTransactionNumber,
          })
        );
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred during submission.';
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  // Copy UPI helper
  const copyUpi = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(registrationConfig.feeStructure.upiId);
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    }
  };

  // Copy Registration ID helper
  const copyRegId = () => {
    if (submittedData && typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(submittedData.registrationId);
      setCopiedRegId(true);
      setTimeout(() => setCopiedRegId(false), 2000);
    }
  };

  // Print helper
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // ----------------------------------------------------
  // SUBMITTED CONFIRMATION SCREEN
  // ----------------------------------------------------
  if (submittedData) {
    return (
      <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
          {/* Top Badge */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#102D5C] to-[#0A1E3D] border border-[#D4AF5A]/50 flex items-center justify-center text-[#D4AF5A] shadow-xl shadow-[#D4AF5A]/10">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Registration Confirmed</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F7F4EC]">
              Welcome to <span className="text-[#D4AF5A]">ESSENCE</span>
            </h1>

            <div className="text-base sm:text-lg font-serif italic text-gradient-gold">
              From Ideas to Impact
            </div>

            <p className="text-sm sm:text-base text-[#C4CFDD] max-w-xl mx-auto leading-relaxed">
              Congratulations, <strong className="text-[#F7F4EC]">{formData.teamLeaderName}</strong>! Your registration
              and project submission have been successfully logged in the official competition records.
            </p>
          </div>

          {/* Registration Card */}
          <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/40 bg-gradient-to-b from-[#0B2246] via-[#071A36] to-[#041126] space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#18335D] gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF5A]">
                  Official Registration ID
                </span>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#F7F4EC] tracking-wider mt-1 flex items-center gap-2">
                  <span>{submittedData.registrationId}</span>
                  <button
                    onClick={copyRegId}
                    type="button"
                    className="p-1.5 rounded-lg bg-[#102D5C] hover:bg-[#D4AF5A] hover:text-[#041126] text-[#D4AF5A] transition-colors"
                    title="Copy Registration ID"
                  >
                    {copiedRegId ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[11px] font-medium text-[#68758A] block">Payment Status</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Pending UTR Verification</span>
                </span>
              </div>
            </div>

            {/* Key Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-1">
                <span className="text-[#68758A] text-[10px] uppercase font-bold tracking-wider">Project Title</span>
                <div className="font-medium text-[#F7F4EC] text-sm truncate">{formData.projectTitle}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-1">
                <span className="text-[#68758A] text-[10px] uppercase font-bold tracking-wider">Innovation Domain</span>
                <div className="font-medium text-[#D4AF5A] text-sm">
                  {formData.innovationTrack === 'other' ? `Other: ${formData.customTrackName}` : formData.innovationTrack}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-1">
                <span className="text-[#68758A] text-[10px] uppercase font-bold tracking-wider">College / Institution</span>
                <div className="font-medium text-[#F7F4EC] truncate">{formData.collegeName}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-1">
                <span className="text-[#68758A] text-[10px] uppercase font-bold tracking-wider">Fee Reconciled</span>
                <div className="font-medium text-[#F7F4EC]">
                  ₹{calculatedFee} (UTR: <span className="font-mono text-[#D4AF5A]">{formData.utrTransactionNumber}</span>)
                </div>
              </div>
            </div>

            {/* Next Steps Guide */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#102D5C]/30 border border-[#D4AF5A]/25 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF5A]">
                <FileCheck className="w-4 h-4" />
                <span>What Happens Next?</span>
              </div>

              <ul className="text-xs text-[#C4CFDD] space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    <strong>Payment Reconciliation:</strong> The CiEL accounts desk will verify your UTR number within 24–48 hours.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    <strong>Stage 1 Screening:</strong> The faculty evaluation panel reviews problem relevance, novelty, and feasibility.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    <strong>Mentor Matching:</strong> Shortlisted teams will be paired with domain mentors to prepare prototypes for the Grand Finale in Bandra, Mumbai.
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#F7F4EC] bg-[#102D5C] border border-[#18335D] hover:border-[#D4AF5A]/40 transition-colors"
              >
                <Printer className="w-4 h-4 text-[#D4AF5A]" />
                <span>Print Registration Summary</span>
              </button>

              <div className="w-full sm:w-auto flex items-center gap-3">
                <Link
                  href="/tracks"
                  className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg text-xs font-semibold text-[#C4CFDD] hover:text-[#F7F4EC] transition-colors"
                >
                  Explore Tracks
                </Link>
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-lg shadow-[#D4AF5A]/20 transition-all"
                >
                  <span>Return to Home</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // MULTI-STEP REGISTRATION FORM
  // ----------------------------------------------------
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-14 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Competition Portal</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F7F4EC]">
            Register for <span className="text-[#D4AF5A]">ESSENCE</span>
          </h1>

          <div className="text-base sm:text-lg font-serif italic text-gradient-gold">
            From Ideas to Impact
          </div>

          <p className="text-xs sm:text-sm text-[#C4CFDD] max-w-xl mx-auto leading-relaxed">
            An entrepreneurial competition where innovative ideas compete to become impactful ventures.
            Grand Fund Pool of up to ₹1.5 Lakh. Assemble your team of 2–4 members and register below.
          </p>

          {/* Quick Particulars Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] text-[#C4CFDD]">
            <span className="px-3 py-1 rounded-full bg-[#102D5C]/70 border border-[#D4AF5A]/30">
              Team Size: <strong className="text-[#F7F4EC]">2–4 People</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-[#102D5C]/70 border border-[#D4AF5A]/30">
              Fee: <strong className="text-[#D4AF5A]">₹500 / team</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-[#102D5C]/70 border border-[#D4AF5A]/30">
              Last Date: <strong className="text-[#F7F4EC]">26 Nov</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-[#102D5C]/70 border border-[#D4AF5A]/30">
              Bootcamp: <strong className="text-[#F7F4EC]">28 Nov</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-[#102D5C]/70 border border-[#D4AF5A]/30">
              Grand Finale: <strong className="text-[#F7F4EC]">21–22 Dec</strong>
            </span>
          </div>
        </div>

        {/* Multi-Step Progress Indicator */}
        <div className="royal-card p-4 rounded-xl border-[#18335D]/80">
          <div className="grid grid-cols-5 gap-2 text-center">
            {[
              { num: 1, label: 'Applicant', icon: User },
              { num: 2, label: 'Academic', icon: GraduationCap },
              { num: 3, label: 'Innovation', icon: Lightbulb },
              { num: 4, label: 'Payment', icon: CreditCard },
              { num: 5, label: 'Review', icon: FileCheck },
            ].map((s) => {
              const Icon = s.icon;
              const isActive = currentStep === s.num;
              const isDone = currentStep > s.num;

              return (
                <div key={s.num} className="space-y-1">
                  <div
                    className={`w-9 h-9 mx-auto rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-[#D4AF5A] text-[#041126] shadow-md shadow-[#D4AF5A]/30 scale-105'
                        : isDone
                        ? 'bg-[#102D5C] text-[#D4AF5A] border border-[#D4AF5A]/40'
                        : 'bg-[#041126] text-[#68758A] border border-[#18335D]'
                    }`}
                  >
                    {isDone ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <span
                    className={`text-[10px] block font-medium truncate ${
                      isActive ? 'text-[#D4AF5A] font-bold' : isDone ? 'text-[#F7F4EC]' : 'text-[#68758A]'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex items-start gap-3 text-red-200 text-xs animate-shake">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">{errorMessage}</div>
          </div>
        )}

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/25 space-y-6">
          {/* ---------------------------------------------------- */}
          {/* STEP 1: APPLICANT / TEAM LEADER DETAILS */}
          {/* ---------------------------------------------------- */}
          {currentStep === 1 && (
            <div className="space-y-5">
              <div className="border-b border-[#18335D] pb-3">
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">Step 1: Primary Applicant Details</h2>
                <p className="text-xs text-[#68758A] mt-0.5">
                  The primary applicant acts as Team Leader and receives all competition updates.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.teamLeaderName}
                    onChange={(e) => updateForm({ teamLeaderName: e.target.value })}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-[#C4CFDD]">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#68758A] absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={formData.teamLeaderEmail}
                        onChange={(e) => updateForm({ teamLeaderEmail: e.target.value })}
                        placeholder="e.g. aarav.sharma@college.edu"
                        className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-[#C4CFDD]">Mobile Contact Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#68758A] absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={formData.teamLeaderPhone}
                        onChange={(e) => updateForm({ teamLeaderPhone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">Participant Category *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => updateForm({ participantCategory: 'Chetana Institute Student' })}
                      className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                        formData.participantCategory === 'Chetana Institute Student'
                          ? 'bg-[#102D5C] border-[#D4AF5A] text-[#F7F4EC]'
                          : 'bg-[#041126] border-[#18335D] text-[#68758A] hover:border-[#18335D]/90'
                      }`}
                    >
                      <Building className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-xs block text-[#F7F4EC]">Chetana Institute Student</strong>
                        <span className="text-[10px] text-[#C4CFDD]">CIMR / CRKIMR student team (₹500 per team)</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => updateForm({ participantCategory: 'Other Institute Student' })}
                      className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                        formData.participantCategory === 'Other Institute Student'
                          ? 'bg-[#102D5C] border-[#D4AF5A] text-[#F7F4EC]'
                          : 'bg-[#041126] border-[#18335D] text-[#68758A] hover:border-[#18335D]/90'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-xs block text-[#F7F4EC]">Other Institute Student</strong>
                        <span className="text-[10px] text-[#C4CFDD]">All institutions &amp; universities (₹500 per team)</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* STEP 2: ACADEMIC DETAILS */}
          {/* ---------------------------------------------------- */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div className="border-b border-[#18335D] pb-3">
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">Step 2: Academic Affiliation</h2>
                <p className="text-xs text-[#68758A] mt-0.5">
                  Confirm your college and current academic credentials in Maharashtra.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">College / Institute Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.collegeName}
                    onChange={(e) => updateForm({ collegeName: e.target.value })}
                    placeholder="e.g. Veermata Jijabai Technological Institute (VJTI), Mumbai"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-[#C4CFDD]">Course / Programme *</label>
                    <input
                      type="text"
                      required
                      value={formData.course}
                      onChange={(e) => updateForm({ course: e.target.value })}
                      placeholder="e.g. B.Tech / B.E., BMS, B.Sc, BCA"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-[#C4CFDD]">Department / Specialization</label>
                    <input
                      type="text"
                      value={formData.department}
                      onChange={(e) => updateForm({ department: e.target.value })}
                      placeholder="e.g. Computer Science, AI, Mechanical"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-[#C4CFDD]">You are currently Pursuing *</label>
                    <select
                      value={formData.pursuingLevel}
                      onChange={(e) =>
                        updateForm({ pursuingLevel: e.target.value as RegistrationFormData['pursuingLevel'] })
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                    >
                      {registrationConfig.pursuingLevels.map((lvl) => (
                        <option key={lvl} value={lvl}>
                          {lvl}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-[#C4CFDD]">Year of Study *</label>
                    <select
                      value={formData.yearOfStudy}
                      onChange={(e) =>
                        updateForm({ yearOfStudy: e.target.value as RegistrationFormData['yearOfStudy'] })
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                    >
                      {registrationConfig.yearsOfStudy.map((yr) => (
                        <option key={yr} value={yr}>
                          {yr}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* STEP 3: INNOVATION / COMPETITION DETAILS */}
          {/* ---------------------------------------------------- */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <div className="border-b border-[#18335D] pb-3">
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">Step 3: Innovation &amp; Team Details</h2>
                <p className="text-xs text-[#68758A] mt-0.5">
                  Describe your idea. Predefined tracks are inspiration—original ideas from any discipline are welcome.
                </p>
              </div>

              <div className="space-y-4">
                {/* Participation Type */}
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">Team Participation (2–4 Members required) *</label>
                  <div className="p-3.5 rounded-xl border bg-[#102D5C] border-[#D4AF5A] text-[#F7F4EC] flex items-start gap-3">
                    <Users className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs block text-[#F7F4EC]">Team Entry (2–4 Members)</strong>
                      <span className="text-[10px] text-[#C4CFDD]">Cross-college and cross-stream teams are welcome. Assemble your team of 2–4 members.</span>
                    </div>
                  </div>
                </div>

                {/* Team Info if Team */}
                {formData.participationType === 'team' && (
                  <div className="space-y-3 p-4 rounded-xl bg-[#041126]/70 border border-[#18335D]">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">Team Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.teamName}
                        onChange={(e) => updateForm({ teamName: e.target.value })}
                        placeholder="e.g. Team AeroInnovators"
                        className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#071A36] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="space-y-1">
                        <label className="text-[10px] font-medium text-[#C4CFDD]">Team Member 2 – Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.teamMember2Name}
                          onChange={(e) => updateForm({ teamMember2Name: e.target.value })}
                          placeholder="Teammate 2 Name"
                          className="w-full px-3 py-1.5 text-xs rounded bg-[#071A36] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-medium text-[#C4CFDD]">Team Member 2 – Email ID *</label>
                        <input
                          type="email"
                          required
                          value={formData.teamMember2Email}
                          onChange={(e) => updateForm({ teamMember2Email: e.target.value })}
                          placeholder="teammate2@college.edu"
                          className="w-full px-3 py-1.5 text-xs rounded bg-[#071A36] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="space-y-1">
                        <label className="text-[10px] font-medium text-[#68758A]">Team Member 3 – Name (Optional)</label>
                        <input
                          type="text"
                          value={formData.teamMember3Name}
                          onChange={(e) => updateForm({ teamMember3Name: e.target.value })}
                          placeholder="Teammate 3 Name"
                          className="w-full px-3 py-1.5 text-xs rounded bg-[#071A36] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-medium text-[#68758A]">Team Member 3 – Email (Optional)</label>
                        <input
                          type="email"
                          value={formData.teamMember3Email}
                          onChange={(e) => updateForm({ teamMember3Email: e.target.value })}
                          placeholder="teammate3@college.edu"
                          className="w-full px-3 py-1.5 text-xs rounded bg-[#071A36] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="space-y-1">
                        <label className="text-[10px] font-medium text-[#68758A]">Team Member 4 – Name (Optional)</label>
                        <input
                          type="text"
                          value={formData.teamMember4Name}
                          onChange={(e) => updateForm({ teamMember4Name: e.target.value })}
                          placeholder="Teammate 4 Name"
                          className="w-full px-3 py-1.5 text-xs rounded bg-[#071A36] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-medium text-[#68758A]">Team Member 4 – Email (Optional)</label>
                        <input
                          type="email"
                          value={formData.teamMember4Email}
                          onChange={(e) => updateForm({ teamMember4Email: e.target.value })}
                          placeholder="teammate4@college.edu"
                          className="w-full px-3 py-1.5 text-xs rounded bg-[#071A36] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Title */}
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">Project / Idea Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.projectTitle}
                    onChange={(e) => updateForm({ projectTitle: e.target.value })}
                    placeholder="e.g. Autonomous LoRaWAN Telemetry for Precision Drip Irrigation"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  />
                </div>

                {/* Track Selection */}
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">Primary Innovation Track / Domain *</label>
                  <select
                    value={formData.innovationTrack}
                    onChange={(e) => updateForm({ innovationTrack: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  >
                    <optgroup label="15 Suggested Innovation Domains">
                      {suggestedInnovationTracks.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} — {t.description}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Open Innovation">
                      <option value="other">Other / Interdisciplinary Innovation</option>
                    </optgroup>
                  </select>
                </div>

                {formData.innovationTrack === 'other' && (
                  <div className="space-y-1 p-3.5 rounded-xl bg-[#102D5C]/30 border border-[#D4AF5A]/30">
                    <label className="text-[11px] font-medium text-[#F0D99A]">
                      Describe Your Field / Domain *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.customTrackName}
                      onChange={(e) => updateForm({ customTrackName: e.target.value })}
                      placeholder="e.g. Bio-materials, Spatial Computing, Quantum, or Interdisciplinary"
                      className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#041126] border border-[#D4AF5A]/40 text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none placeholder-[#68758A]"
                    />
                    <span className="text-[10px] text-[#C4CFDD] block leading-relaxed">
                      ESSENCE 2027 welcomes original ideas from every sector. Ideas outside predefined tracks receive
                      full and unbiased evaluation under official competition rules.
                    </span>
                  </div>
                )}

                {/* Problem Statement */}
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">
                    Problem Statement: What problem are you solving and who experiences it? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.problemStatement}
                    onChange={(e) => updateForm({ problemStatement: e.target.value })}
                    placeholder="Describe the real-world friction, inefficiency, or challenge..."
                    className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  />
                </div>

                {/* Proposed Solution */}
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">
                    Proposed Solution: How does your product, platform or hardware work? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.proposedSolution}
                    onChange={(e) => updateForm({ proposedSolution: e.target.value })}
                    placeholder="Explain the mechanism, novelty, and practical feasibility..."
                    className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  />
                </div>

                {/* Deck or Presentation Link */}
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">
                    Project / Idea Presentation (Google Slides, Canva, Drive link or Deck Title)
                  </label>
                  <div className="relative">
                    <UploadCloud className="w-4 h-4 text-[#68758A] absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.pptUrlOrFileName}
                      onChange={(e) => updateForm({ pptUrlOrFileName: e.target.value })}
                      placeholder="e.g. https://docs.google.com/presentation/d/... or ESSENCE_Deck.pdf"
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* STEP 4: PAYMENT & UTR VERIFICATION */}
          {/* ---------------------------------------------------- */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <div className="border-b border-[#18335D] pb-3">
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">Step 4: Registration Fee &amp; Payment</h2>
                <p className="text-xs text-[#68758A] mt-0.5">
                  Reconcile your registration fee to lock in your competition entry.
                </p>
              </div>

              {/* Dynamic Fee Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#102D5C] via-[#0A1E3D] to-[#041126] border border-[#D4AF5A]/40 space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                      Registration Fee per Team
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#F7F4EC] mt-0.5">
                      ₹500{' '}
                      <span className="text-xs font-normal text-[#C4CFDD]">
                        (Flat fee for team of 2–4 members)
                      </span>
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#D4AF5A]/10 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-semibold">
                    Fixed Institutional Rate
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#041126]/80 border border-[#18335D] space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#68758A]">Official UPI ID:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[#F7F4EC] font-bold">
                        {registrationConfig.feeStructure.upiId}
                      </span>
                      <button
                        type="button"
                        onClick={copyUpi}
                        className="p-1 rounded bg-[#102D5C] text-[#D4AF5A] hover:bg-[#D4AF5A] hover:text-[#041126] transition-colors"
                        title="Copy UPI ID"
                      >
                        {copiedUpi ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[#C4CFDD] text-[11px] pt-1 border-t border-[#18335D]/60">
                    <span>Beneficiary:</span>
                    <span className="font-medium text-[#F7F4EC]">
                      {registrationConfig.feeStructure.accountName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Fields */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">
                    Registration Fee Payment – UTR / Transaction Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.utrTransactionNumber}
                    onChange={(e) => updateForm({ utrTransactionNumber: e.target.value })}
                    placeholder="e.g. 428910394821 or UPI Ref ID"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none font-mono"
                  />
                  <span className="text-[10px] text-[#68758A] block">
                    Found in your GPay, PhonePe, Paytm, or NetBanking transaction summary.
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">
                    Payment Screenshot / Receipt Link (Google Drive, Imgur, or File Name)
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-[#68758A] absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.paymentReceiptUrlOrFileName}
                      onChange={(e) => updateForm({ paymentReceiptUrlOrFileName: e.target.value })}
                      placeholder="e.g. https://drive.google.com/file/d/... or receipt_screenshot.png"
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------- */}
          {/* STEP 5: REVIEW & FINAL SUBMISSION */}
          {/* ---------------------------------------------------- */}
          {currentStep === 5 && (
            <div className="space-y-5">
              <div className="border-b border-[#18335D] pb-3">
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">Step 5: Review &amp; Submit</h2>
                <p className="text-xs text-[#68758A] mt-0.5">
                  Confirm all details before final transmission to the master registration database.
                </p>
              </div>

              {/* Review Sections */}
              <div className="space-y-3">
                {/* Section A: Leader */}
                <div className="p-3.5 rounded-xl bg-[#041126] border border-[#18335D] flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                      Applicant Details
                    </span>
                    <div className="text-xs font-semibold text-[#F7F4EC]">{formData.teamLeaderName}</div>
                    <div className="text-[11px] text-[#C4CFDD]">
                      {formData.teamLeaderEmail} · {formData.teamLeaderPhone} · {formData.participantCategory}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-[11px] font-semibold text-[#D4AF5A] hover:underline"
                  >
                    Edit
                  </button>
                </div>

                {/* Section B: Academic */}
                <div className="p-3.5 rounded-xl bg-[#041126] border border-[#18335D] flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                      Academic Affiliation
                    </span>
                    <div className="text-xs font-semibold text-[#F7F4EC]">{formData.collegeName}</div>
                    <div className="text-[11px] text-[#C4CFDD]">
                      {formData.course} ({formData.yearOfStudy}, {formData.pursuingLevel})
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-[11px] font-semibold text-[#D4AF5A] hover:underline"
                  >
                    Edit
                  </button>
                </div>

                {/* Section C: Innovation */}
                <div className="p-3.5 rounded-xl bg-[#041126] border border-[#18335D] flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                      Innovation &amp; Team
                    </span>
                    <div className="text-xs font-semibold text-[#F7F4EC]">{formData.projectTitle}</div>
                    <div className="text-[11px] text-[#C4CFDD]">
                      Track:{' '}
                      <strong className="text-[#D4AF5A]">
                        {formData.innovationTrack === 'other' ? `Other: ${formData.customTrackName}` : formData.innovationTrack}
                      </strong>{' '}
                      · Team: {formData.teamName || 'Solo Entry'}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="text-[11px] font-semibold text-[#D4AF5A] hover:underline"
                  >
                    Edit
                  </button>
                </div>

                {/* Section D: Payment */}
                <div className="p-3.5 rounded-xl bg-[#041126] border border-[#18335D] flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                      Fee &amp; UTR Reconciliation
                    </span>
                    <div className="text-xs font-semibold text-[#F7F4EC]">
                      Fee Amount: ₹{calculatedFee}
                    </div>
                    <div className="text-[11px] text-[#C4CFDD]">
                      UTR Number: <span className="font-mono text-[#D4AF5A]">{formData.utrTransactionNumber}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="text-[11px] font-semibold text-[#D4AF5A] hover:underline"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* Consents */}
              <div className="space-y-2.5 pt-3 border-t border-[#18335D]">
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="agree-accurate"
                    required
                    checked={formData.agreeAccurate}
                    onChange={(e) => updateForm({ agreeAccurate: e.target.checked })}
                    className="mt-1 rounded bg-[#041126] border-[#18335D] text-[#D4AF5A] focus:ring-[#D4AF5A]"
                  />
                  <label htmlFor="agree-accurate" className="text-[11px] text-[#C4CFDD] leading-relaxed cursor-pointer">
                    I certify that all details submitted are authentic and that our team members are bona fide
                    students enrolled in an accredited higher education institution in Maharashtra.
                  </label>
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="agree-rules"
                    required
                    checked={formData.agreeRules}
                    onChange={(e) => updateForm({ agreeRules: e.target.checked })}
                    className="mt-1 rounded bg-[#041126] border-[#18335D] text-[#D4AF5A] focus:ring-[#D4AF5A]"
                  />
                  <label htmlFor="agree-rules" className="text-[11px] text-[#C4CFDD] leading-relaxed cursor-pointer">
                    I agree to the official Code of Conduct and competition guidelines of ESSENCE and acknowledge that registration
                    acceptance is subject to UTR payment verification by the CiEL accounts desk.
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Form Actions Navigation */}
          <div className="pt-4 border-t border-[#18335D] flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={loading}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#C4CFDD] hover:text-[#F7F4EC] bg-[#102D5C]/60 hover:bg-[#102D5C] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <Link
                href="/tracks"
                className="text-xs text-[#68758A] hover:text-[#C4CFDD] transition-colors"
              >
                ← Back to Tracks
              </Link>
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-md shadow-[#D4AF5A]/20 transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-lg shadow-[#D4AF5A]/30 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#041126] border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting to Master Records...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Complete &amp; Submit Registration</span>
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
