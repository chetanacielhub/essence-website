import React from 'react';
import Link from 'next/link';
import { Trophy, Sparkles, Check, ArrowRight, ShieldAlert } from 'lucide-react';
import { prizeCategories } from '@/config/site';

export default function AwardsSection() {
  return (
    <section className="py-20 bg-[#071A36] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
            Recognition &amp; Rewards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            Proposed ₹5,00,000 Prize Pool &amp; Opportunities
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#C4CFDD] leading-relaxed">
            ESSENCE 2027 recognises engineering rigor and grassroots impact through cash grants,
            incubation pathways at Chetana’s CiEL, and dedicated exhibition stalls at the State Finale.
          </p>
        </div>

        {/* Prize Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prizeCategories.map((prize) => (
            <div
              key={prize.id}
              className="royal-card rounded-xl p-6 flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2.5 py-0.5 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30">
                    {prize.badgeText}
                  </span>
                  <Trophy className="w-5 h-5 text-[#D4AF5A] group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-serif text-xl font-medium text-[#F7F4EC] pt-2">
                  {prize.title}
                </h3>
                <div className="text-xs text-[#F0D99A] font-semibold pt-1">
                  {prize.award}
                </div>

                <p className="text-xs text-[#C4CFDD] leading-relaxed pt-3">
                  {prize.description}
                </p>

                <div className="mt-5 pt-4 border-t border-[#18335D]/70 space-y-2">
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
            </div>
          ))}

          {/* Incubation & Mentorship Progression Card */}
          <div className="royal-card-static rounded-xl p-6 bg-gradient-to-br from-[#0B2246] to-[#041126] border border-[#D4AF5A]/30 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#D4AF5A]">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Beyond Cash Grants</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-[#F7F4EC]">
                Incubation &amp; Startup Progression
              </h3>
              <p className="text-xs text-[#C4CFDD] leading-relaxed">
                Promising prototypes are evaluated for formal incubation at Chetana&apos;s CiEL.
                Selected teams receive fabrication lab access, legal/IP advisory, company incorporation
                guidance, and direct investor showcase sessions.
              </p>
              <div className="p-3 rounded-lg bg-[#041126]/60 border border-[#18335D] text-[11px] text-[#68758A]">
                Incubation progression is merit-based upon final prototype review by the CiEL investment committee.
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/awards"
                className="text-xs font-semibold text-[#D4AF5A] hover:underline underline-offset-4 inline-flex items-center gap-1"
              >
                <span>Read detailed awards policy &amp; terms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Budget Notice */}
        <div className="mt-10 p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] max-w-3xl mx-auto flex items-start gap-3 text-xs text-[#68758A]">
          <ShieldAlert className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#C4CFDD]">Financial Architecture Notice:</strong> The ₹5,00,000 proposed
            prize pool forms part of the overall ₹22,13,000 proposed programme planning budget. Prize allocations
            represent proposed institutional grants and are subject to final organiser approval.
          </p>
        </div>
      </div>
    </section>
  );
}
