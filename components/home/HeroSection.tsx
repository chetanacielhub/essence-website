import React from 'react';
import Link from 'next/link';
import { Sparkles, Compass, ShieldCheck, MapPin, Award, Users, Calendar, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-ambient-hero overflow-hidden border-b border-[#D4AF5A]/15">
      {/* Subtle background ambient ring elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-[#D4AF5A]/10 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border border-[#18335D]/40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow / Presentation */}
        <div className="space-y-1.5 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Chetana’s</span>
          </div>
          <div className="text-xs sm:text-sm font-serif tracking-wider text-[#C4CFDD]">
            R. K. Institute of Management &amp; Research &amp; Institute of Management &amp; Research
          </div>
        </div>

        {/* Main Title & Tagline */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-[#F7F4EC] leading-[1.05]">
            ESSENCE
          </h1>

          <div className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-gradient-gold font-normal">
            From Ideas to Impact
          </div>

          {/* Grand Fund Pool Callout Banner */}
          <div className="pt-2">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#102D5C]/80 via-[#0A1E3D] to-[#102D5C]/80 border border-[#D4AF5A]/40 shadow-xl shadow-[#D4AF5A]/10">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C4CFDD]">
                GRAND FUND POOL
              </span>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gradient-gold tracking-tight">
                {siteConfig.grandFundPool}
              </div>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#C4CFDD] leading-relaxed pt-2">
            An entrepreneurial competition where innovative ideas compete to become impactful ventures.
            A startup-building journey for student founders from raw concept to a venture-ready pitch.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 pb-10">
          <Link
            href="/register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] rounded-lg shadow-lg shadow-[#D4AF5A]/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Register Your Team (₹500)</span>
          </Link>

          <Link
            href="/journey"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F7F4EC] bg-[#0A1E3D]/80 hover:bg-[#102D5C]/80 border border-[#D4AF5A]/30 hover:border-[#D4AF5A] rounded-lg transition-all"
          >
            <Compass className="w-4 h-4 text-[#D4AF5A]" />
            <span>Explore The 4 Stages</span>
          </Link>
        </div>

        {/* Key Event Badges */}
        <div className="pt-6 border-t border-[#18335D]/60 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#C4CFDD]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A1E3D] border border-[#18335D]">
            <Users className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span>Team Size: <strong>2–4 People</strong></span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A1E3D] border border-[#18335D]">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span>Last Date: <strong>26 November</strong></span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A1E3D] border border-[#18335D]">
            <Clock className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span>Bootcamp: <strong>28 November</strong></span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A1E3D] border border-[#18335D]">
            <Award className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span>Main Event: <strong>21–22 December (10:00 AM)</strong></span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A1E3D] border border-[#18335D]">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span>Venue: <strong>Chetana’s Auditorium</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
