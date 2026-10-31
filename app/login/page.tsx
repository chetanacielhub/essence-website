'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ExternalLink, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://forms.gle/yc2N7X9JAfCUsGeB6';

export default function LoginPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-20 flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(212,175,90,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-md w-full mx-auto px-4 space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESSENCE · Registration Notice</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            Registration &amp; <span className="text-[#D4AF5A]">Access</span>
          </h1>
          <p className="text-xs text-[#C4CFDD] leading-relaxed">
            ESSENCE is hosted by Chetana&apos;s Centre for Innovation &amp; Entrepreneurship Learning (CiEL).
          </p>
        </div>

        {/* Notice Card */}
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-6 text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#102D5C] border border-[#D4AF5A]/40 flex items-center justify-center text-[#D4AF5A] shadow-lg shadow-[#D4AF5A]/10">
            <FileText className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              Account Login Not Required
            </h2>
            <p className="text-xs text-[#C4CFDD] leading-relaxed">
              Participant registration and team entries are handled exclusively via our verified Google Form.
              You do not need to create an account or sign in to participate in ESSENCE.
            </p>
          </div>

          <div className="pt-2 space-y-3">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-lg shadow-[#D4AF5A]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Go to Google Registration Form</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/"
              className="w-full py-2.5 rounded-xl text-xs font-medium text-[#C4CFDD] bg-[#0A1E3D] hover:bg-[#102D5C] border border-[#18335D] hover:text-[#F7F4EC] transition-colors flex items-center justify-center gap-2"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF5A]" />
            </Link>
          </div>

          <div className="pt-4 border-t border-[#18335D] flex items-center justify-center gap-1.5 text-[11px] text-[#68758A]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span>Need organizer access? Contact CiEL Administration.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
