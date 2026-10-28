import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Award, Gift, Sparkles, Check, ShieldAlert, ArrowRight } from 'lucide-react';
import { prizeCategories } from '@/config/site';

export const metadata: Metadata = {
  title: 'Awards, Prizes & Incubation Opportunities',
  description:
    'Overview of the proposed ₹5,00,000 prize pool, category grants, institutional citations, and incubation opportunities at ESSENCE 2027.',
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
            Awards &amp; <span className="text-[#D4AF5A]">Opportunities</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            Rewarding undergraduate ingenuity across Maharashtra with cash grants, exhibition stalls,
            mentorship, and direct incubation progression at Chetana’s CiEL.
          </p>
        </div>

        {/* Budget Notice */}
        <div className="p-4 rounded-xl bg-[#0A1E3D] border border-[#D4AF5A]/30 max-w-4xl mx-auto flex items-start gap-3 text-xs text-[#C4CFDD]">
          <ShieldAlert className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#F7F4EC]">Financial Notice:</strong> The proposed ₹5,00,000 prize pool forms
            an integral part of the total proposed programme planning budget of ₹22,13,000. Public allocations
            represent proposed planning targets subject to formal institutional confirmation.
          </p>
        </div>

        {/* Prize Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prizeCategories.map((prize) => (
            <div
              key={prize.id}
              className="royal-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#18335D]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2.5 py-0.5 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30">
                    {prize.badgeText}
                  </span>
                  <Trophy className="w-5 h-5 text-[#D4AF5A]" />
                </div>

                <div className="space-y-1">
                  <h2 className="font-serif text-2xl font-medium text-[#F7F4EC]">
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

        {/* Non-Monetary Opportunities */}
        <div className="royal-card-static p-8 rounded-2xl border-[#D4AF5A]/30 max-w-5xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-[#D4AF5A]">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-serif text-2xl font-medium text-[#F7F4EC]">
              Holistic Ecosystem Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#C4CFDD]">
            <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-2">
              <strong className="text-[#F7F4EC] text-sm block">100-Stall State Exhibition</strong>
              <p className="leading-relaxed">
                50 finalist teams receive allocated physical exhibition stalls on Chetana’s campus to present prototypes directly to industry visitors and venture scouts.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-2">
              <strong className="text-[#F7F4EC] text-sm block">CiEL Incubation Fast-Track</strong>
              <p className="leading-relaxed">
                Winners and standout teams enter the formal incubation pipeline with access to prototype testing labs, seed grant advisement, and legal IP support.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-2">
              <strong className="text-[#F7F4EC] text-sm block">Official Institutional Citations</strong>
              <p className="leading-relaxed">
                All finalists receive verified State Innovation Certificates endorsed by Chetana’s CiEL and participating evaluation dignitaries.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
          >
            <span>Register to Compete for ESSENCE Awards</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
