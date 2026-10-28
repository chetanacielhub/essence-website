import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Compass, CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { competitionStages } from '@/config/site';

export const metadata: Metadata = {
  title: 'Competition Journey & Stages',
  description:
    'Comprehensive stage-by-stage journey of ESSENCE 2027: from registration and idea screening to prototype bootcamps and the Grand Finale.',
};

export default function JourneyPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Progression</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            The Competition <span className="text-[#D4AF5A]">Journey</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            ESSENCE 2027 guides participants through an 8-stage innovation lifecycle designed to
            cultivate practical engineering, customer validation, and presentation skills.
          </p>
        </div>

        {/* Detailed Timeline Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {competitionStages.map((stage) => (
            <div
              key={stage.id}
              className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/25 relative flex flex-col md:flex-row gap-6 items-start justify-between"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-bold text-[#D4AF5A]">
                    Stage 0{stage.stageNumber}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#102D5C] text-[#F0D99A] border border-[#D4AF5A]/30">
                    {stage.dates}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-medium text-[#F7F4EC]">
                  {stage.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                  {stage.longDescription}
                </p>

                <div className="pt-2 p-3.5 rounded-xl bg-[#041126]/80 border border-[#18335D] space-y-1">
                  <span className="text-[11px] font-bold text-[#D4AF5A] uppercase tracking-wider block">
                    Expected Participant Action:
                  </span>
                  <p className="text-xs text-[#C4CFDD] leading-relaxed">
                    {stage.participantAction}
                  </p>
                </div>
              </div>

              <div className="md:w-56 shrink-0 flex flex-col gap-3 justify-between h-full pt-2">
                <div className="text-[11px] text-[#68758A] space-y-1">
                  <div>Status: <strong className="text-[#F7F4EC] capitalize">{stage.status.replace('_', ' ')}</strong></div>
                  <div>Scheduling: <span className="text-[#F0D99A]">{stage.isDateConfirmed ? 'Confirmed' : 'Provisional Target'}</span></div>
                </div>

                {stage.status === 'in_progress' || stage.status === 'open' ? (
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
                  >
                    <span>Take Action Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2.5 rounded-lg text-xs font-medium text-[#68758A] bg-[#18335D]/30 border border-[#18335D]/50 cursor-not-allowed text-center"
                  >
                    {stage.status === 'completed' ? 'Stage Concluded' : 'Pending Milestone'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-lg transition-all"
          >
            <span>Begin Your Registration &amp; Form Your Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
