import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Compass, Calendar, CheckCircle2, ArrowRight, Gift, Sparkles } from 'lucide-react';
import { competitionStages, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'The Journey · ESSENCE',
  description:
    'From registration to the grand finale. Four stages, one destination. Explore the startup-building journey of ESSENCE.',
};

export default function JourneyPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Compass className="w-3.5 h-3.5" />
            <span>PAGE 4 · THE JOURNEY</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            The <span className="text-[#D4AF5A]">Journey</span>
          </h1>
          <p className="text-base sm:text-xl font-serif text-gradient-gold italic">
            From registration to the grand finale. Four stages, one destination.
          </p>
          <p className="text-xs sm:text-sm text-[#C4CFDD] max-w-2xl mx-auto leading-relaxed">
            A startup-building journey for student founders from raw concept to a venture-ready pitch.
          </p>
        </div>

        {/* 4 Stages Detailed Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {competitionStages.map((stage) => (
            <div
              key={stage.id}
              className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 relative flex flex-col md:flex-row gap-6 items-start justify-between hover:border-[#D4AF5A]/60 transition-all"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-bold text-[#D4AF5A]">
                    0{stage.stageNumber}.
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#F7F4EC]">
                    {stage.title}
                  </h2>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#102D5C] text-[#F0D99A] border border-[#D4AF5A]/30">
                    {stage.dates}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                  {stage.longDescription}
                </p>

                {stage.bulletPoints && (
                  <div className="pt-2 p-4 rounded-xl bg-[#041126]/80 border border-[#18335D] space-y-2">
                    <span className="text-[10px] font-bold text-[#D4AF5A] uppercase tracking-wider block">
                      Stage Focus &amp; Requirements:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#C4CFDD]">
                      {stage.bulletPoints.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF5A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="md:w-56 shrink-0 flex flex-col gap-3 justify-between h-full pt-2">
                <div className="text-[11px] text-[#68758A] space-y-1">
                  <div>Milestone: <strong className="text-[#F7F4EC]">Stage 0{stage.stageNumber}</strong></div>
                  <div>Schedule: <span className="text-[#F0D99A]">{stage.dates}</span></div>
                </div>

                {stage.status === 'in_progress' ? (
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <div className="px-4 py-2.5 rounded-lg text-xs font-medium text-[#C4CFDD] bg-[#18335D]/30 border border-[#18335D]/50 text-center">
                    Upcoming Milestone
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* What You Walk Away With */}
        <div className="royal-card p-8 sm:p-10 rounded-2xl border-[#D4AF5A]/40 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126] max-w-4xl mx-auto shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#18335D]">
            <div className="flex items-center gap-2.5 text-[#D4AF5A]">
              <Gift className="w-5 h-5" />
              <h3 className="font-serif text-2xl font-medium text-[#F7F4EC]">
                What You Walk Away With
              </h3>
            </div>
            <span className="text-xs font-serif italic text-gradient-gold">
              ESSENCE · FROM IDEAS TO IMPACT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteConfig.walkAwayWith.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#041126]/70 border border-[#18335D] flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-[#102D5C] text-[#D4AF5A] font-serif font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#F7F4EC] leading-snug">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-lg transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Assemble Your Team (2–4 Members) &amp; Register</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
