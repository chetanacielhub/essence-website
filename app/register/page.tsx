'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ExternalLink,
  Users,
  Calendar,
  Award,
  CheckCircle2,
  HelpCircle,
  FileText,
  CreditCard,
  Building,
  Phone,
  Mail,
  ArrowRight,
  Compass,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const GOOGLE_FORM_URL = 'https://forms.gle/yc2N7X9JAfCUsGeB6';

export default function RegisterPage() {
  const handleDirectRedirect = () => {
    window.location.href = GOOGLE_FORM_URL;
  };

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-14 sm:py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(212,175,90,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Team Registration</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#F7F4EC]">
            Register for <span className="text-[#D4AF5A]">ESSENCE</span>
          </h1>

          <div className="text-base sm:text-xl font-serif italic text-gradient-gold">
            From Ideas to Impact
          </div>

          <p className="text-sm sm:text-base text-[#C4CFDD] max-w-2xl mx-auto leading-relaxed">
            An entrepreneurial competition where innovative ideas compete to become impactful ventures.
            Registration and project submissions are officially hosted on our verified Google Form.
          </p>
        </div>

        {/* Key Event Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-4 rounded-xl bg-[#071A36]/80 border border-[#18335D] space-y-1">
            <Users className="w-5 h-5 text-[#D4AF5A] mx-auto mb-1" />
            <div className="text-[10px] uppercase font-bold text-[#68758A] tracking-wider">Team Size</div>
            <div className="text-xs sm:text-sm font-semibold text-[#F7F4EC]">2–4 Members</div>
          </div>

          <div className="p-4 rounded-xl bg-[#071A36]/80 border border-[#18335D] space-y-1">
            <CreditCard className="w-5 h-5 text-[#D4AF5A] mx-auto mb-1" />
            <div className="text-[10px] uppercase font-bold text-[#68758A] tracking-wider">Registration Fee</div>
            <div className="text-xs sm:text-sm font-semibold text-[#D4AF5A]">₹500 / Team</div>
          </div>

          <div className="p-4 rounded-xl bg-[#071A36]/80 border border-[#18335D] space-y-1">
            <Calendar className="w-5 h-5 text-[#D4AF5A] mx-auto mb-1" />
            <div className="text-[10px] uppercase font-bold text-[#68758A] tracking-wider">Last Date</div>
            <div className="text-xs sm:text-sm font-semibold text-[#F7F4EC]">26 November</div>
          </div>

          <div className="p-4 rounded-xl bg-[#071A36]/80 border border-[#18335D] space-y-1">
            <Award className="w-5 h-5 text-[#D4AF5A] mx-auto mb-1" />
            <div className="text-[10px] uppercase font-bold text-[#68758A] tracking-wider">Fund Pool</div>
            <div className="text-xs sm:text-sm font-semibold text-gradient-gold">₹1.5 Lakh</div>
          </div>
        </div>

        {/* Central Google Form Redirection Card */}
        <div className="royal-card p-8 sm:p-12 rounded-3xl border-[#D4AF5A]/40 bg-gradient-to-b from-[#0B2246] via-[#071A36] to-[#041126] shadow-2xl relative overflow-hidden space-y-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#102D5C] to-[#0A1E3D] border border-[#D4AF5A]/50 flex items-center justify-center text-[#D4AF5A] shadow-xl shadow-[#D4AF5A]/15">
            <FileText className="w-8 h-8" />
          </div>

          <div className="space-y-3 max-w-xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF5A]">
              Google Forms · Official Submission Link
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-medium text-[#F7F4EC]">
              Submit Your Team via Google Form
            </h2>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              Click the button below to be redirected directly to the official Google Form application.
              Fill in your team credentials, problem statement, and fee reconciliation reference.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-xl shadow-[#D4AF5A]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Fill Google Registration Form</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>

            <button
              onClick={handleDirectRedirect}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-semibold text-[#F7F4EC] bg-[#102D5C]/70 hover:bg-[#102D5C] border border-[#D4AF5A]/30 hover:border-[#D4AF5A] transition-all cursor-pointer"
            >
              <span>Redirect In This Tab</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF5A]" />
            </button>
          </div>

          {/* Form URL helper info */}
          <div className="pt-2 text-[11px] text-[#68758A] font-mono break-all">
            Direct Link:{' '}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF5A] hover:underline"
            >
              {GOOGLE_FORM_URL}
            </a>
          </div>
        </div>

        {/* Pre-Submission Checklist */}
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#18335D] space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-[#18335D]">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF5A]" />
            <h3 className="font-serif text-lg font-medium text-[#F7F4EC]">
              Checklist: What You Will Need Before Filling
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#C4CFDD]">
            <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D]/80 space-y-1.5">
              <div className="flex items-center gap-2 text-[#F7F4EC] font-semibold text-sm">
                <Users className="w-4 h-4 text-[#D4AF5A]" />
                <span>1. Team Member Details</span>
              </div>
              <p className="text-[#A0AEC0] leading-relaxed">
                Full names, email addresses, and mobile numbers for your team of 2 to 4 members. Cross-college teams are welcome.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D]/80 space-y-1.5">
              <div className="flex items-center gap-2 text-[#F7F4EC] font-semibold text-sm">
                <Building className="w-4 h-4 text-[#D4AF5A]" />
                <span>2. Academic Affiliation</span>
              </div>
              <p className="text-[#A0AEC0] leading-relaxed">
                Institution / college name, current course / degree programme, and current year of study.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D]/80 space-y-1.5">
              <div className="flex items-center gap-2 text-[#F7F4EC] font-semibold text-sm">
                <FileText className="w-4 h-4 text-[#D4AF5A]" />
                <span>3. Project &amp; Idea Overview</span>
              </div>
              <p className="text-[#A0AEC0] leading-relaxed">
                Project title, relevant innovation domain / track, a clear problem statement, and your proposed solution.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D]/80 space-y-1.5">
              <div className="flex items-center gap-2 text-[#F7F4EC] font-semibold text-sm">
                <CreditCard className="w-4 h-4 text-[#D4AF5A]" />
                <span>4. Fee Payment &amp; UTR</span>
              </div>
              <p className="text-[#A0AEC0] leading-relaxed">
                ₹500 per team. Have your Bank / UPI Transaction Reference (UTR) number ready to input into the Google Form.
              </p>
            </div>
          </div>
        </div>

        {/* Organiser Support Contacts */}
        <div className="p-6 rounded-2xl bg-[#071A36]/60 border border-[#D4AF5A]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF5A]">
              <HelpCircle className="w-4 h-4" />
              <span>Need Help With Your Application?</span>
            </div>
            <p className="text-xs text-[#C4CFDD]">
              Reach out to our student convenors or CiEL organizing desk for questions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a
              href="tel:+919833883098"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#102D5C] text-[#F7F4EC] hover:text-[#D4AF5A] border border-[#18335D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF5A]" />
              <span>Prem: +91 9833883098</span>
            </a>
            <a
              href="tel:+918451942277"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#102D5C] text-[#F7F4EC] hover:text-[#D4AF5A] border border-[#18335D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF5A]" />
              <span>Akshay: +91 8451942277</span>
            </a>
            <a
              href="mailto:essence@cielhub.org"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#102D5C] text-[#F7F4EC] hover:text-[#D4AF5A] border border-[#18335D] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF5A]" />
              <span>essence@cielhub.org</span>
            </a>
          </div>
        </div>

        {/* Bottom Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#C4CFDD] pt-4">
          <Link
            href="/"
            className="hover:text-[#D4AF5A] transition-colors flex items-center gap-1"
          >
            <span>← Return to Home</span>
          </Link>
          <span className="text-[#18335D]">•</span>
          <Link
            href="/tracks"
            className="hover:text-[#D4AF5A] transition-colors flex items-center gap-1"
          >
            <span>Explore Discovery Domains</span>
          </Link>
          <span className="text-[#18335D]">•</span>
          <Link
            href="/journey"
            className="hover:text-[#D4AF5A] transition-colors flex items-center gap-1"
          >
            <Compass className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span>The 4-Stage Journey</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
