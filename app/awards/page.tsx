import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Award, Gift, Sparkles, Check, ArrowRight } from 'lucide-react';
import { prizeCategories, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Awards & Grand Fund Pool · ESSENCE',
  description:
    'Overview of the ₹1.5 Lakh Grand Fund Pool, certificates, founder networks, and validated business models at ESSENCE.',
};

export default function AwardsPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Trophy className="w-3.5 h-3.5" />
            <span>Merit &amp; Recognition</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Grand Fund Pool: <span className="text-[#D4AF5A]">{siteConfig.grandFundPool}</span>
          </h1>
          <div className="text-lg sm:text-xl font-serif text-gradient-gold italic">
            Pitch. Win. Impact.
          </div>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            Rewarding student founders with seed funding, venture validation, founder networks,
            and prestigious institutional recognition at Chetana’s Auditorium.
          </p>
        </div>

        {/* Prize Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prizeCategories.map((prize) => (
            <div
              key={prize.id}
              className="royal-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#18335D]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF5A] px-3 py-1 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30">
                    {prize.badgeText}
                  </span>
                  <Trophy className="w-5 h-5 text-[#D4AF5A]" />
                </div>

                <div className="space-y-1">
                  <h2 className="font-serif text-2xl font-bold text-[#F7F4EC]">
                    {prize.title}
                  </h2>
                  <div className="text-xs font-semibold text-[#F0D99A]">
                    {prize.award}
                  </div>
                </div>

                <p className="text-xs text-[#C4CFDD] leading-relaxed">
                  {prize.description}
                </p>

                <div className="pt-4 border-t border-[#18335D] space-y-2">
                  <span className="text-[11px] font-bold text-[#D4AF5A] uppercase tracking-wider block">
                    Entitlements:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#C4CFDD]">
                    {prize.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D4AF5A] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What You Walk Away With Box (PAGE 4) */}
        <div className="royal-card p-8 sm:p-10 rounded-2xl border-[#D4AF5A]/40 max-w-5xl mx-auto space-y-6 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126] shadow-2xl">
          <div className="flex items-center gap-2.5 text-[#D4AF5A]">
            <Gift className="w-5 h-5" />
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              What You Walk Away With
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
            {siteConfig.walkAwayWith.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#041126]/70 border border-[#18335D] flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-[#102D5C] text-[#D4AF5A] font-serif font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="font-semibold text-[#F7F4EC] leading-snug">
                  {item}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#18335D] text-xs font-serif italic text-gradient-gold text-center">
            ESSENCE · FROM IDEAS TO IMPACT
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
          >
            <Sparkles className="w-4 h-4" />
            <span>Register to Compete for ₹1.5 Lakh Fund Pool</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
