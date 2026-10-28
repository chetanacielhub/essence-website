'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Cpu,
  Leaf,
  HeartPulse,
  Sprout,
  GraduationCap,
  TrendingUp,
  Building2,
  ArrowRight,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { innovationTracks } from '@/config/site';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Leaf,
  HeartPulse,
  Sprout,
  GraduationCap,
  TrendingUp,
  Building2,
};

export default function TracksSection() {
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  const toggleTrack = (id: string) => {
    setExpandedTrack(expandedTrack === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#071A36] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
            Multidisciplinary Focus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            7 Approved Innovation Tracks
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#C4CFDD] leading-relaxed">
            Designed to address acute industrial, environmental, and civic priorities across Maharashtra.
            Teams select one primary track for evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovationTracks.map((track) => {
            const Icon = iconMap[track.iconName] || Cpu;
            const isExpanded = expandedTrack === track.id;

            return (
              <div
                key={track.id}
                className="royal-card rounded-xl p-6 flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#102D5C]/70 border border-[#D4AF5A]/30 flex items-center justify-center text-[#D4AF5A] group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#102D5C] text-[#F0D99A] border border-[#D4AF5A]/20">
                      Track 0{track.sortOrder}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#F7F4EC] group-hover:text-[#F0D99A] transition-colors">
                    {track.name}
                  </h3>

                  <p className="text-xs text-[#C4CFDD] leading-relaxed pt-2">
                    {track.description}
                  </p>

                  {/* Expandable Problem Examples */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#18335D] space-y-2 animate-in fade-in duration-200">
                      <div className="text-[11px] font-semibold text-[#D4AF5A] uppercase tracking-wider">
                        Sample Problem Prompts:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#68758A]">
                        {track.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#D4AF5A] mt-1">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-[#18335D]/60 mt-6 flex items-center justify-between">
                  <button
                    onClick={() => toggleTrack(track.id)}
                    className="text-xs text-[#C4CFDD] hover:text-[#F7F4EC] inline-flex items-center gap-1 font-medium"
                  >
                    <span>{isExpanded ? 'Hide Prompts' : 'View Prompts'}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#D4AF5A]' : ''
                      }`}
                    />
                  </button>

                  <Link
                    href={`/register?track=${track.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF5A] hover:text-[#F0D99A] group/link"
                  >
                    <span>Submit to Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 8th Card: Interdisciplinary Guidance */}
          <div className="royal-card-static rounded-xl p-6 bg-gradient-to-br from-[#0B2246] to-[#041126] border border-dashed border-[#D4AF5A]/40 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF5A]/20 text-[#D4AF5A] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#F7F4EC]">
                Cross-Track &amp; Interdisciplinary Teams
              </h3>
              <p className="text-xs text-[#C4CFDD] leading-relaxed">
                Does your solution intersect multiple tracks (e.g. Agri-FinTech or Clean Energy Healthcare)?
                Select the primary domain during submission; cross-domain innovations receive dedicated interdisciplinary review.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/tracks"
                className="text-xs font-semibold text-[#D4AF5A] hover:underline underline-offset-4 inline-flex items-center gap-1"
              >
                <span>Read detailed track guidelines &amp; criteria</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
