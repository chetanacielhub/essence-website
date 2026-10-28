import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2, XCircle, Users, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eligibility Criteria & Team Guidelines',
  description:
    'Detailed eligibility rules for ESSENCE 2027: undergraduate status, institutional qualification across Maharashtra, and team composition limits.',
};

export default function EligibilityPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Participation Standards</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Who Can <span className="text-[#D4AF5A]">Participate</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            ESSENCE 2027 is structured exclusively to empower undergraduate students across
            Maharashtra’s educational ecosystem. Review the official eligibility guidelines below.
          </p>
        </div>

        {/* Eligibility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Eligible Section */}
          <div className="royal-card p-8 rounded-2xl border-emerald-500/30 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#18335D]">
              <div className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  Approved Criteria
                </span>
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
                  Eligible to Register
                </h2>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-[#C4CFDD]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Bona Fide Undergraduates:</strong> Currently enrolled in any accredited undergraduate degree, diploma, or polytechnic programme in Maharashtra.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>All Academic Disciplines:</strong> Engineering, technology, arts, commerce, sciences, management, pharmacy, architecture, and vocational studies.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Individual or Team Participation:</strong> Register as a solo innovator or form an interdisciplinary team of 2 to 4 members.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Cross-Institutional Collaboration:</strong> Teammates may belong to different colleges within Maharashtra (the team leader’s institution is designated primary).
                </span>
              </li>
            </ul>
          </div>

          {/* Ineligible Section */}
          <div className="royal-card p-8 rounded-2xl border-rose-500/30 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#18335D]">
              <div className="w-10 h-10 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-400 flex items-center justify-center">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                  Restricted Categories
                </span>
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
                  Not Eligible for Awards
                </h2>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-[#C4CFDD]">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Post-Graduate &amp; Doctoral Students:</strong> Masters, MBA, M.Tech, and PhD scholars cannot participate as competing team members.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Commercial Startups:</strong> Incorporated entities with external venture capital funding prior to competition registration.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Alumni &amp; Working Professionals:</strong> Graduated alumni cannot submit entries (faculty and alumni may serve as mentors).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Out-of-State Institutions:</strong> Submissions where all team members are enrolled in colleges located outside the state of Maharashtra.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Team Rules Summary Box */}
        <div className="royal-card-static p-8 rounded-2xl border-[#D4AF5A]/30 max-w-5xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-[#D4AF5A]">
            <Users className="w-5 h-5" />
            <h3 className="font-serif text-xl font-medium text-[#F7F4EC]">
              Team Formation Rules &amp; Limits
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#C4CFDD]">
            <div className="p-4 rounded-lg bg-[#041126]/60 border border-[#18335D] space-y-1">
              <strong className="text-[#F7F4EC] block">Team Size</strong>
              <span>Minimum 1 (Solo) to Maximum 4 undergraduate members per team.</span>
            </div>
            <div className="p-4 rounded-lg bg-[#041126]/60 border border-[#18335D] space-y-1">
              <strong className="text-[#F7F4EC] block">Single Membership</strong>
              <span>A participant may not be registered in more than one competing team simultaneously.</span>
            </div>
            <div className="p-4 rounded-lg bg-[#041126]/60 border border-[#18335D] space-y-1">
              <strong className="text-[#F7F4EC] block">Primary Team Leader</strong>
              <span>The designated leader serves as the official recipient of notifications and award grants.</span>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
          >
            <span>Proceed to Registration Portal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
