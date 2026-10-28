import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, Clock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { competitionStages } from '@/config/site';

export const metadata: Metadata = {
  title: 'Official Programme Schedule & Key Deadlines',
  description:
    'Key milestones, opening and closing dates, and provisional planning schedule for ESSENCE 2027.',
};

export default function TimelinePage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Programme Calendar</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Official <span className="text-[#D4AF5A]">Timeline</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            Track key milestones, submission windows, screening stages, and the Grand Finale exhibition.
            Confirmed dates are indicated alongside provisional planning windows.
          </p>
        </div>

        {/* Schedule Transparency Banner */}
        <div className="p-4 rounded-xl bg-[#0A1E3D] border border-[#D4AF5A]/25 max-w-4xl mx-auto flex items-start gap-3 text-xs text-[#C4CFDD]">
          <AlertCircle className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#F7F4EC]">Scheduling Notice:</strong> Stages designated as &quot;Confirmed&quot;
            are locked for public submission. Dates marked as &quot;Provisional Target&quot; represent planning
            windows calibrated with the academic semester calendars of participating Maharashtra universities.
          </p>
        </div>

        {/* Timeline Table / Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {competitionStages.map((stage) => (
            <div
              key={stage.id}
              className="royal-card p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D4AF5A]/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="font-serif text-2xl font-bold text-[#D4AF5A] shrink-0 w-10">
                  0{stage.stageNumber}
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="font-serif text-lg font-medium text-[#F7F4EC]">
                      {stage.title}
                    </h2>
                    {stage.isDateConfirmed ? (
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        Confirmed
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-[#F0D99A] bg-[#102D5C] px-2 py-0.5 rounded-full border border-[#D4AF5A]/20">
                        Provisional Target
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#C4CFDD]">
                    {stage.shortDescription}
                  </p>
                </div>
              </div>

              <div className="sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-[#18335D]">
                <div className="text-xs font-semibold text-[#D4AF5A]">
                  {stage.dates}
                </div>
                <div className="text-[11px] text-[#68758A] capitalize">
                  {stage.status.replace('_', ' ')}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
          >
            <span>Register for the Current Stage</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
