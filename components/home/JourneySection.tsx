import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { competitionStages } from '@/config/site';
import { ProgrammeTimelineEvent } from '@/types';

function getStatusBadge(status: ProgrammeTimelineEvent['status']) {
  switch (status) {
    case 'completed':
      return {
        label: 'Completed',
        bg: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40',
        icon: CheckCircle2,
      };
    case 'in_progress':
      return {
        label: 'In Progress',
        bg: 'bg-[#D4AF5A]/20 text-[#F0D99A] border-[#D4AF5A]/50 animate-pulse',
        icon: Clock,
      };
    case 'open':
      return {
        label: 'Open Now',
        bg: 'bg-blue-950/60 text-blue-300 border-blue-500/40',
        icon: Calendar,
      };
    default:
      return {
        label: 'Upcoming',
        bg: 'bg-[#18335D]/50 text-[#68758A] border-[#18335D]',
        icon: Clock,
      };
  }
}

export default function JourneySection() {
  return (
    <section className="py-20 bg-[#041126] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
            Structured Progression
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            The Participant Competition Journey
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#C4CFDD] leading-relaxed">
            Follow the 8 official milestones: from campus discovery and team formation to prototype
            fabrication, mentorship bootcamps, and live demonstration at the grand finale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitionStages.map((stage) => {
            const badge = getStatusBadge(stage.status);
            const BadgeIcon = badge.icon;

            return (
              <div
                key={stage.id}
                className="royal-card rounded-xl p-6 flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all relative group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3">
                    <span className="font-serif text-2xl font-bold text-[#D4AF5A]">
                      0{stage.stageNumber}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${badge.bg}`}
                    >
                      <BadgeIcon className="w-3 h-3" />
                      <span>{badge.label}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#F7F4EC] group-hover:text-[#F0D99A] transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-[#C4CFDD] leading-relaxed pt-2">
                    {stage.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#18335D]/70 space-y-1">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF5A]">
                      Participant Action:
                    </div>
                    <p className="text-[11px] text-[#68758A] leading-relaxed">
                      {stage.participantAction}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#18335D]/60 mt-4 flex items-center justify-between text-xs text-[#68758A]">
                  <span>{stage.dates}</span>
                  {!stage.isDateConfirmed && (
                    <span className="text-[9px] uppercase tracking-wide text-[#F0D99A]/80 font-mono">
                      (Provisional)
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/journey"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-md shadow-[#D4AF5A]/15 transition-all"
          >
            <span>Explore Complete Stage Guidelines &amp; Deadlines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
