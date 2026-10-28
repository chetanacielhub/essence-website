import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Brain,
  Cloud,
  TrendingUp,
  GraduationCap,
  HeartPulse,
  Stethoscope,
  Sprout,
  Utensils,
  CloudRain,
  Leaf,
  Zap,
  Bot,
  Plane,
  ShieldCheck,
  Atom,
  ArrowRight,
  Compass,
  Sparkles,
  Layers,
} from 'lucide-react';
import { suggestedInnovationTracks } from '@/config/site';

export const metadata: Metadata = {
  title: 'Innovation Tracks | Explore the Innovation Landscape',
  description:
    'Explore the 15 recommended innovation tracks for ESSENCE 2027: AI / ML, SaaS, FinTech, EdTech, HealthTech, MedTech, AgriTech, FoodTech, ClimateTech, CleanTech, EV / Mobility, Robotics, Drones, DefenceTech, and DeepTech. Open to all original ideas from any discipline.',
};

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Cloud,
  TrendingUp,
  GraduationCap,
  HeartPulse,
  Stethoscope,
  Sprout,
  Utensils,
  CloudRain,
  Leaf,
  Zap,
  Bot,
  Plane,
  ShieldCheck,
  Atom,
};

export default function TracksPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Layers className="w-3.5 h-3.5" />
            <span>Recommended Discovery Domains</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#F7F4EC]">
            Explore the <span className="text-[#D4AF5A]">Innovation Landscape</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#C4CFDD] leading-relaxed">
            From intelligent technologies and digital businesses to sustainable solutions, advanced engineering
            and entirely new ideas, ESSENCE 2027 is a platform for students who want to turn possibilities
            into practical impact.
          </p>

          <p className="text-xs sm:text-sm text-[#F0D99A] font-medium tracking-wide">
            Not sure where your idea belongs? That&apos;s completely fine. These tracks are inspiration, not boundaries.
          </p>
        </div>

        {/* Essential Clarification Banner — Open Innovation */}
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126] max-w-5xl mx-auto text-left relative overflow-hidden shadow-lg">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#102D5C] border border-[#D4AF5A]/30 flex items-center justify-center text-[#D4AF5A] shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                Open Innovation Principle
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
                Explore These Tracks. Or Create Your Own.
              </h2>
              <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                These are suggested innovation domains to help you discover opportunities and explore potential
                problem areas. ESSENCE 2027 welcomes original ideas from every sector, discipline and industry.
                Your idea does not need to fit into any of these tracks to be eligible for consideration.
                Interdisciplinary innovations and entirely new problem-solving areas are equally welcome,
                subject to the official competition rules.
              </p>
            </div>
          </div>
        </div>

        {/* 15 Recommended Tracks Grid (3 Columns on Desktop, 5 Rows) */}
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-[#18335D]/70">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F0D99A]">
              15 Suggested Exploration Tracks
            </span>
            <span className="text-[11px] text-[#68758A] font-mono">
              3 Columns × 5 Rows · Non-Restricted
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedInnovationTracks.map((track, index) => {
              const Icon = iconMap[track.iconName] || Brain;
              return (
                <div
                  key={track.id}
                  id={track.id}
                  className="royal-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all duration-300 group min-h-[220px]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#102D5C]/70 border border-[#D4AF5A]/25 flex items-center justify-center text-[#D4AF5A] group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#68758A] px-2 py-0.5 rounded bg-[#041126] border border-[#18335D]">
                        Track {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-serif text-xl font-medium text-[#F7F4EC] group-hover:text-[#F0D99A] transition-colors">
                        {track.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                        {track.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#18335D]/60 mt-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-semibold text-[#68758A] tracking-wider">
                      Suggested Domain
                    </span>
                    <Link
                      href={`/register?track=${track.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF5A] hover:text-[#F0D99A] group/link focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF5A] rounded px-1 -mx-1"
                      aria-label={`Submit an idea in ${track.name}`}
                    >
                      <span>Explore &amp; Submit</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visually Distinct Card: Have an Idea Beyond These Tracks? */}
        <div className="royal-card p-8 sm:p-12 rounded-2xl border-[#D4AF5A]/40 bg-gradient-to-r from-[#071A36] via-[#102D5C] to-[#071A36] max-w-5xl mx-auto text-center space-y-5 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#041126]/70 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open &amp; Interdisciplinary Innovation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            Have an Idea Beyond These Tracks?
          </h2>

          <p className="text-xs sm:text-base text-[#C4CFDD] max-w-2xl mx-auto leading-relaxed">
            Don&apos;t limit your thinking to a predefined category. If your idea solves a meaningful problem,
            introduces a new approach or creates a new opportunity, we encourage you to explore and submit it.
          </p>

          <div className="pt-3">
            <Link
              href="/register?track=other"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-xl shadow-[#D4AF5A]/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF5A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#041126]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Your Idea</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
