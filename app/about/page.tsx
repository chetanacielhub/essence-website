import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ShieldCheck,
  Target,
  Rocket,
  Lightbulb,
  CheckCircle2,
  Building,
  ArrowRight,
  Eye,
  Compass,
  Trophy,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About ESSENCE · Chetana’s',
  description:
    'OUR PURPOSE. OUR FUTURE. Learn about ESSENCE, an entrepreneurial competition by Chetana’s R. K. Institute of Management & Research & Institute of Management & Research.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Chetana’s CiEL Presents</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            About <span className="text-[#D4AF5A]">ESSENCE</span>
          </h1>
          <div className="text-xl sm:text-2xl font-serif text-gradient-gold italic">
            From Ideas to Impact
          </div>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            An entrepreneurial competition where innovative ideas compete to become impactful ventures.
            A startup-building journey for student founders from raw concept to a venture-ready pitch.
          </p>
        </div>

        {/* PAGE 2: OUR PURPOSE. OUR FUTURE. */}
        <div className="royal-card p-8 sm:p-12 rounded-3xl border-[#D4AF5A]/30 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126] space-y-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF5A]">
              PAGE 2 · OUR PURPOSE. OUR FUTURE.
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#F7F4EC]">
              OUR PURPOSE. OUR FUTURE.
            </h2>
            <p className="text-sm font-serif italic text-gradient-gold">
              The vision that drives innovation and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#18335D]">
            {/* Vision */}
            <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#041126]/60 border border-[#18335D] hover:border-[#D4AF5A]/40 transition-colors">
              <div className="flex items-center gap-3 text-[#D4AF5A]">
                <div className="w-10 h-10 rounded-xl bg-[#102D5C] flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-[#F7F4EC]">
                  VISION
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                {siteConfig.purpose.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#041126]/60 border border-[#18335D] hover:border-[#D4AF5A]/40 transition-colors">
              <div className="flex items-center gap-3 text-[#D4AF5A]">
                <div className="w-10 h-10 rounded-xl bg-[#102D5C] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-[#F7F4EC]">
                  MISSION
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                {siteConfig.purpose.mission}
              </p>
            </div>
          </div>

          <div className="text-center pt-2 text-xs font-semibold text-[#D4AF5A] uppercase tracking-wider">
            ESSENCE · FROM IDEAS TO IMPACT
          </div>
        </div>

        {/* PAGE 3: WHAT IS ESSENCE? */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF5A]">
              PAGE 3 · Startup-Building Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#F7F4EC]">
              What is ESSENCE?
            </h2>
            <div className="text-base sm:text-lg font-serif italic text-gradient-gold">
              More than a competition. A real startup-building journey.
            </div>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              A startup-building journey for student founders from raw concept to a venture-ready pitch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.whatIsEssence.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="royal-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#D4AF5A]">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#102D5C] text-[#F0D99A] border border-[#D4AF5A]/30">
                      Phase {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#F7F4EC]">
                    {pillar.heading}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-[#F0D99A] leading-relaxed">
                    {pillar.summary}
                  </p>

                  <p className="text-xs text-[#C4CFDD] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#18335D]/70 text-[11px] text-[#68758A]">
                  ESSENCE · FROM IDEAS TO IMPACT
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Host & Venue */}
        <div className="royal-card p-8 sm:p-10 rounded-2xl border-[#D4AF5A]/30 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#071A36] to-[#041126]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#D4AF5A]">
              <Building className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Host Institutions &amp; Venue</span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#F7F4EC]">
              Chetana’s R. K. Institute of Management &amp; Research &amp; Institute of Management &amp; Research
            </h3>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              Main event will take place on <strong>21–22 December at 10:00 AM</strong> in{' '}
              <strong>Chetana’s Auditorium</strong>, Bandra (East), Mumbai.
            </p>
          </div>
          <Link
            href="/register"
            className="px-8 py-3.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shrink-0 shadow"
          >
            Register Your Team
          </Link>
        </div>
      </div>
    </div>
  );
}
