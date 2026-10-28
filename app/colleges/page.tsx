import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { School, Download, CheckCircle2, Users, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import CollegesSection from '@/components/home/CollegesSection';
import { mockInstitutions } from '@/lib/data/mockData';

export const metadata: Metadata = {
  title: 'Institutional Engagement & College Partners',
  description:
    'Dedicated portal for undergraduate colleges, universities, and faculty coordinators across Maharashtra participating in ESSENCE 2027.',
};

export default function CollegesPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <School className="w-3.5 h-3.5" />
            <span>State-Wide Institutional Network</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Colleges &amp; <span className="text-[#D4AF5A]">Faculty Coordinators</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            Partnering with 100+ undergraduate colleges across Maharashtra to identify, mentor,
            and showcase student innovation on a premier state stage.
          </p>
        </div>

        {/* Benefits Grid for Colleges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="royal-card p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
              <School className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC]">Institutional Visibility</h2>
            <p className="text-xs text-[#C4CFDD] leading-relaxed">
              Showcase your institution&apos;s technical calibre. Selected college prototypes are featured in
              the official ESSENCE 2027 Annual Compendium shared with industry and funding bodies.
            </p>
          </div>

          <div className="royal-card p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC]">Faculty Coordinator Citations</h2>
            <p className="text-xs text-[#C4CFDD] leading-relaxed">
              Designated faculty coordinators receive official recognition certificates from Chetana’s CiEL,
              documenting institutional innovation facilitation for NAAC and NBA accreditation portfolios.
            </p>
          </div>

          <div className="royal-card p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC]">Incubation Linkages</h2>
            <p className="text-xs text-[#C4CFDD] leading-relaxed">
              Establish direct pipeline linkages between your campus innovation cell (IIC / EDC) and
              Chetana’s CiEL incubation programmes, prototype fabrication labs, and seed grants.
            </p>
          </div>
        </div>

        {/* Participating Colleges Directory Sample */}
        <div className="royal-card p-8 rounded-2xl border-[#D4AF5A]/30 max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#18335D] gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                Institutional Outreach Roster
              </span>
              <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
                Sample Participating Maharashtra Institutions
              </h2>
            </div>
            <span className="text-xs text-[#68758A]">
              Target: 100+ Colleges Across 36 Districts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#C4CFDD]">
            {mockInstitutions.map((inst) => (
              <div
                key={inst.id}
                className="p-3.5 rounded-lg bg-[#041126]/60 border border-[#18335D] flex items-center justify-between gap-3"
              >
                <div>
                  <div className="font-semibold text-[#F7F4EC]">{inst.name}</div>
                  <div className="text-[11px] text-[#68758A]">{inst.city}, {inst.district}</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                  Verified
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded College Expression of Interest Form */}
        <CollegesSection />
      </div>
    </div>
  );
}
