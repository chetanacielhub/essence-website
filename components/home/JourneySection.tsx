import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, CheckCircle2, Gift, Sparkles } from 'lucide-react';
import { competitionStages, siteConfig } from '@/config/site';

export default function JourneySection() {
  return (
    <section className="py-20 bg-[#041126] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
            PAGE 4 · THE JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            The Journey
          </h2>
          <p className="text-base sm:text-lg text-gradient-gold italic font-serif">
            From registration to the grand finale. Four stages, one destination.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitionStages.map((stage) => (
            <div
              key={stage.id}
              className="royal-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#18335D]">
                  <span className="font-serif text-3xl font-bold text-[#D4AF5A]">
                    0{stage.stageNumber}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#102D5C] text-[#F0D99A] border border-[#D4AF5A]/30">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF5A]" />
                    <span>{stage.dates}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#F7F4EC] group-hover:text-[#F0D99A] transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#C4CFDD] mt-1 leading-relaxed">
                    {stage.shortDescription}
                  </p>
                </div>

                {stage.bulletPoints && (
                  <ul className="space-y-2 pt-2 text-xs text-[#C4CFDD]">
                    {stage.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF5A] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t border-[#18335D]/70 mt-6 flex items-center justify-between text-[11px] text-[#68758A]">
                <span>Stage 0{stage.stageNumber}</span>
                <span className="text-[#D4AF5A] font-semibold">ESSENCE</span>
              </div>
            </div>
          ))}
        </div>

        {/* What You Walk Away With (PAGE 4) */}
        <div className="royal-card p-8 sm:p-10 rounded-2xl border-[#D4AF5A]/40 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126] shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#18335D]">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102D5C] text-[#D4AF5A] text-xs font-bold uppercase tracking-wider">
                <Gift className="w-3.5 h-3.5" />
                <span>Founder Takeaways</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
                What You Walk Away With
              </h3>
            </div>
            <div className="text-xs font-semibold text-[#D4AF5A] tracking-wider uppercase">
              ESSENCE · FROM IDEAS TO IMPACT
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6">
            {siteConfig.walkAwayWith.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#041126]/70 border border-[#18335D] flex items-start gap-3 hover:border-[#D4AF5A]/40 transition-colors"
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

        {/* CTA */}
        <div className="text-center pt-2">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-lg shadow-[#D4AF5A]/20 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Register Your Team Before 26 November</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
