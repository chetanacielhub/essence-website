import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, CheckCircle2, ArrowRight, MapPin, Clock } from 'lucide-react';
import { competitionStages, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Official Timeline · ESSENCE',
  description:
    'Key milestones, schedule, and dates for ESSENCE: Register by 26 November, Bootcamp 28 November, Grand Finale 21–22 December.',
};

export default function TimelinePage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Official Event Schedule</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Official <span className="text-[#D4AF5A]">Timeline</span>
          </h1>
          <p className="text-base sm:text-xl font-serif text-gradient-gold italic">
            From registration to the grand finale. Four stages, one destination.
          </p>
          <p className="text-xs sm:text-sm text-[#C4CFDD] max-w-xl mx-auto leading-relaxed">
            Follow the key milestones leading to the Grand Finale on 21–22 December at Chetana’s Auditorium.
          </p>
        </div>

        {/* Timeline Schedule Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {competitionStages.map((stage) => (
            <div
              key={stage.id}
              className="royal-card p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-[#D4AF5A]/50 transition-all"
            >
              <div className="flex items-start gap-5">
                <span className="font-serif text-3xl font-bold text-[#D4AF5A] shrink-0 w-12">
                  0{stage.stageNumber}
                </span>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-serif text-xl font-bold text-[#F7F4EC]">
                      {stage.title}
                    </h2>
                    <span className="text-[10px] font-bold text-[#D4AF5A] bg-[#102D5C] border border-[#D4AF5A]/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Confirmed Date
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#C4CFDD]">
                    {stage.shortDescription}
                  </p>
                  {stage.bulletPoints && (
                    <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#F0D99A]">
                      {stage.bulletPoints.map((pt, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#D4AF5A]" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="sm:text-right shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#18335D]">
                <div className="text-sm font-bold text-[#D4AF5A] whitespace-nowrap">
                  {stage.dates}
                </div>
                {stage.stageNumber === 4 && (
                  <div className="text-[11px] text-[#C4CFDD] flex items-center sm:justify-end gap-1 mt-1">
                    <Clock className="w-3 h-3 text-[#D4AF5A]" />
                    <span>10:00 AM IST</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Venue & Details Summary */}
        <div className="max-w-4xl mx-auto royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gradient-to-r from-[#0B2246] to-[#041126]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF5A]">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Grand Finale Location</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#F7F4EC]">
              {siteConfig.institution.auditorium}
            </h3>
            <p className="text-xs text-[#C4CFDD]">
              {siteConfig.institution.campus}
            </p>
          </div>

          <Link
            href="/register"
            className="px-6 py-3 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shrink-0 shadow"
          >
            Register by 26 November
          </Link>
        </div>
      </div>
    </div>
  );
}
