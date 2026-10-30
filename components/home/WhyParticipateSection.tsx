import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Users2,
  Wrench,
  Trophy,
  Mic,
  Share2,
  Award,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const icons = [
  Compass,
  Users2,
  Wrench,
  Trophy,
  Mic,
  Share2,
  Award,
  Globe2,
];

export default function WhyParticipateSection() {
  return (
    <section className="py-20 bg-[#041126] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Why Participate Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
            PAGE 6 · VALUE PROPOSITION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            Why Participate?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#C4CFDD] leading-relaxed">
            Eight reasons why ESSENCE is the ideal launchpad for student innovators and aspiring founders.
          </p>
        </div>

        {/* 8 Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.whyParticipate.map((item, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div
                key={item.id}
                className="royal-card p-6 rounded-2xl flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#102D5C]/70 border border-[#D4AF5A]/30 flex items-center justify-center text-[#D4AF5A] group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#68758A]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#F7F4EC] group-hover:text-[#F0D99A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#C4CFDD] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#18335D]/70 mt-4 flex items-center gap-1.5 text-[10px] text-[#D4AF5A] font-semibold uppercase tracking-wider">
                  <span>Advantage {item.number}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Who Can Join Box (PAGE 6) */}
        <div className="royal-card p-8 sm:p-10 rounded-2xl border-[#D4AF5A]/40 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126] shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#18335D]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A] block">
                Eligibility &amp; Criteria
              </span>
              <h3 className="font-serif text-3xl font-medium text-[#F7F4EC] pt-1">
                Who Can Join?
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102D5C] border border-[#D4AF5A]/40 text-[#F0D99A] text-xs font-serif italic">
              {siteConfig.whoCanJoin.tagline}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.whoCanJoin.points.map((pt, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#041126]/70 border border-[#18335D] space-y-2 hover:border-[#D4AF5A]/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-[#D4AF5A]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <h4 className="font-serif text-base font-bold text-[#F7F4EC]">
                    {pt.title}
                  </h4>
                </div>
                <p className="text-xs text-[#C4CFDD] leading-relaxed">
                  {pt.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#18335D]">
            <div className="text-xs text-[#C4CFDD]">
              Registration is live · Details and registration available online.
            </div>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow transition-all"
            >
              <span>Register by 26 November</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
