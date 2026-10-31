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
  AlertCircle,
  Lightbulb,
} from 'lucide-react';
import { suggestedInnovationTracks } from '@/config/site';

export const metadata: Metadata = {
  title: 'Recommended Discovery Domains | Explore the Innovation Landscape',
  description:
    'Explore the 15 recommended innovation tracks for ESSENCE 2027. Open Innovation Principle: You are free to work on ANY idea from ANY sector, discipline, or industry. Tracks are for inspiration, not extra advantage.',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section 1: Page Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Layers className="w-3.5 h-3.5" />
            <span>Recommended Discovery Domains</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#F7F4EC]">
            Explore the <span className="text-[#D4AF5A]">Innovation Landscape</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#C4CFDD] leading-relaxed">
            From intelligent technologies and digital businesses to sustainable solutions, advanced engineering,
            and entirely new ideas, <strong className="text-[#F7F4EC]">ESSENCE 2027</strong> is a platform for
            students who want to turn possibilities into practical impact.
          </p>

          <p className="text-xs sm:text-sm text-[#F0D99A] font-medium tracking-wide">
            Not sure where your idea belongs? That&apos;s completely fine. These tracks are here to inspire you, not limit you.
          </p>
        </div>

        {/* Section 2: Open Innovation Principle Card */}
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126] max-w-5xl mx-auto text-left relative overflow-hidden shadow-lg">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#102D5C] border border-[#D4AF5A]/30 flex items-center justify-center text-[#D4AF5A] shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                Open Innovation Principle
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
                Explore These Tracks. Or Create Your Own.
              </h2>
              <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                The suggested innovation domains are intended to help participants discover opportunities, identify
                potential problem areas, and explore new possibilities.
              </p>
              <div className="p-4 rounded-xl bg-[#041126]/80 border border-[#D4AF5A]/30 text-xs sm:text-sm leading-relaxed text-[#F7F4EC]">
                <strong className="text-[#F0D99A]">
                  You are free to work on ANY idea, from ANY sector, discipline, or industry. There are no restrictions
                  on your innovation simply because it does not fit within the suggested tracks.
                </strong>{' '}
                Original, interdisciplinary, and unconventional ideas are equally welcome, subject to the official
                competition rules.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Prominent Highlighted Warning / Important Note Card */}
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-amber-500/40 bg-gradient-to-br from-[#1A1A0B] via-[#0F1E38] to-[#041126] max-w-5xl mx-auto text-left relative overflow-hidden shadow-2xl space-y-4">
          <div className="flex items-center gap-2.5 text-amber-400">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.18em]">
              Important Note · Evaluation Criteria
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#F7F4EC]">
              The Tracks Are for Inspiration, <span className="text-amber-400">Not Extra Advantage.</span>
            </h3>

            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              Choosing a suggested track does not provide any additional consideration or preferential treatment during
              evaluation. Every submission will be assessed on its own merits, based on the{' '}
              <strong className="text-[#F7F4EC]">
                originality of the idea, problem-solving approach, feasibility, practical viability, scalability, and potential impact.
              </strong>
            </p>

            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              If you are unsure what to work on, use these tracks as a starting point to explore problems and discover
              opportunities. You can also develop an entirely different idea that addresses a meaningful challenge.
            </p>

            <div className="pt-2">
              <div className="inline-block px-4 py-2 rounded-xl bg-[#041126] border border-[#D4AF5A]/40 font-serif text-sm sm:text-base font-bold text-gradient-gold tracking-wide">
                Think Beyond the Tracks. Innovate Without Boundaries. Build for Impact.
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: 15 Suggested Tracks Grid */}
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
                  className="royal-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all duration-300 group min-h-[200px]"
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 5: Visually Distinct Card: Have an Idea Beyond These Tracks? */}
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
            introduces a new approach, or creates a new opportunity, we encourage you to explore and submit it.
          </p>

          <div className="font-serif text-base sm:text-lg font-semibold text-gradient-gold">
            Think Beyond the Tracks. Innovate Without Boundaries. Build for Impact.
          </div>

          <div className="pt-3">
            <Link
              href="/register?track=other"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-xl shadow-[#D4AF5A]/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF5A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#041126]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register Your Idea</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
