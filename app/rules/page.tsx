import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Scale, ShieldCheck, AlertCircle, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Code of Conduct · ESSENCE',
  description:
    'Official Code of Conduct for ESSENCE: Respect, non-disruption, confidentiality, and event governance.',
};

export default function RulesPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Scale className="w-3.5 h-3.5" />
            <span>PAGE 7 · CODE OF CONDUCT</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Code of <span className="text-[#D4AF5A]">Conduct</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            ESSENCE operates under strict standards of respect, integrity, and fair play.
            All participants, faculty coordinators, and attendees are expected to uphold these principles.
          </p>
        </div>

        {/* 5 Code of Conduct Rules (PAGE 7) */}
        <div className="max-w-4xl mx-auto space-y-6">
          {siteConfig.codeOfConduct.map((item) => (
            <div
              key={item.number}
              className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-3 hover:border-[#D4AF5A]/60 transition-all"
            >
              <div className="flex items-center gap-4 pb-2 border-b border-[#18335D]">
                <span className="font-serif text-3xl font-bold text-[#D4AF5A]">
                  {item.number}.
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#F7F4EC]">
                  {item.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Motto Callout */}
        <div className="royal-card p-6 rounded-xl border-[#D4AF5A]/30 max-w-4xl mx-auto text-center space-y-2 bg-gradient-to-r from-[#0B2246] to-[#041126]">
          <div className="font-serif text-lg text-gradient-gold italic">
            ESSENCE · FROM IDEAS TO IMPACT
          </div>
          <p className="text-xs text-[#68758A]">
            Questions or clarifications? Reach out to the organizing desk at Chetana’s CiEL.
          </p>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
          >
            <span>Agree to Guidelines &amp; Register</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
