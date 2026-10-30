import React from 'react';
import Link from 'next/link';
import { Trophy, Sparkles, Check, ArrowRight } from 'lucide-react';
import { prizeCategories, siteConfig } from '@/config/site';

export default function AwardsSection() {
  return (
    <section className="py-20 bg-[#071A36] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
            Recognition &amp; Rewards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            Grand Fund Pool: <span className="text-gradient-gold">{siteConfig.grandFundPool}</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#C4CFDD] leading-relaxed">
            ESSENCE backs student founders with funding grants from up to ₹1.5 Lakh, expert founder networks,
            validated business models, and formal institutional recognition.
          </p>
        </div>

        {/* Prize Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prizeCategories.map((prize) => (
            <div
              key={prize.id}
              className="royal-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#18335D]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF5A] px-3 py-1 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30">
                    {prize.badgeText}
                  </span>
                  <Trophy className="w-5 h-5 text-[#D4AF5A] group-hover:scale-110 transition-transform" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#F7F4EC]">
                    {prize.title}
                  </h3>
                  <div className="text-xs text-[#F0D99A] font-semibold">
                    {prize.award}
                  </div>
                </div>

                <p className="text-xs text-[#C4CFDD] leading-relaxed">
                  {prize.description}
                </p>

                <div className="pt-4 border-t border-[#18335D]/70 space-y-2">
                  <div className="text-[11px] font-bold text-[#D4AF5A] uppercase tracking-wider">
                    Associated Benefits:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#C4CFDD]">
                    {prize.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D4AF5A] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#18335D]/60 mt-6 text-center">
                <Link
                  href="/register"
                  className="text-xs font-bold text-[#D4AF5A] hover:underline inline-flex items-center gap-1"
                >
                  <span>Compete for this award</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* What You Walk Away With Callout */}
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 bg-gradient-to-r from-[#0B2246] to-[#041126] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF5A]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">The Complete Package</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#F7F4EC]">
              More Than Just Cash Grants
            </h3>
            <p className="text-xs text-[#C4CFDD] max-w-2xl leading-relaxed">
              Every participating team gains access to structured mentorship, rapid prototyping clinics,
              and networking with seasoned entrepreneurs across institutions.
            </p>
          </div>
          <Link
            href="/awards"
            className="px-6 py-3 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shrink-0 shadow"
          >
            Detailed Awards &amp; Benefits Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
