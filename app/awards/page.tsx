import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Award, Gift, Sparkles, Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

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

        {/* What You Walk Away With Box (PAGE 4) */}
        <div className="royal-card p-8 sm:p-10 rounded-2xl border-[#D4AF5A]/40 max-w-5xl mx-auto space-y-8 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126] shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-[#D4AF5A]">
              <Gift className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Official Competition Entitlements</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#F7F4EC]">
              What You Walk Away With
            </h2>
            <p className="text-xs sm:text-sm text-[#C4CFDD]">
              Every team that embarks on the ESSENCE journey gains tangible entrepreneurial assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
            {siteConfig.walkAwayWith.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#041126]/70 border border-[#18335D] flex flex-col justify-between space-y-3 hover:border-[#D4AF5A]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#102D5C] text-[#D4AF5A] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  0{idx + 1}
                </div>
                <div className="font-serif text-sm font-semibold text-[#F7F4EC] leading-snug">
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
