import React from 'react';
import Link from 'next/link';
import { Sparkles, Compass, ShieldCheck, MapPin, Award, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-ambient-hero overflow-hidden border-b border-[#D4AF5A]/15">
      {/* Subtle background ambient ring elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-[#D4AF5A]/10 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border border-[#18335D]/40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow / Presentation */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Chetana&apos;s CiEL Presents</span>
        </div>

        {/* Main Title & Tagline */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#F7F4EC] leading-[1.05]">
            ESSENCE <span className="text-[#D4AF5A] italic">2027</span>
          </h1>

          <div className="font-serif text-xl sm:text-2xl md:text-3xl italic text-gradient-gold font-normal">
            From Ideas to Impact
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#C4CFDD] leading-relaxed pt-2">
            An undergraduate innovation and prototype-development initiative bringing students across
            Maharashtra together to identify real-world challenges, build practical solutions, and present
            their innovations to industry and academic leaders.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 pb-10">
          <Link
            href="/register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] rounded-lg shadow-lg shadow-[#D4AF5A]/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Register for ESSENCE</span>
          </Link>

          <Link
            href="/journey"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F7F4EC] bg-[#0A1E3D]/80 hover:bg-[#102D5C]/80 border border-[#D4AF5A]/30 hover:border-[#D4AF5A] rounded-lg transition-all"
          >
            <Compass className="w-4 h-4 text-[#D4AF5A]" />
            <span>Explore the Competition</span>
          </Link>
        </div>

        {/* Planning Scope Badges */}
        <div className="pt-6 border-t border-[#18335D]/60 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#C4CFDD]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1E3D] border border-[#18335D]">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span>Maharashtra-Wide Outreach</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1E3D] border border-[#18335D]">
            <Users className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span>Undergraduates Across All Streams</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1E3D] border border-[#18335D]">
            <Award className="w-3.5 h-3.5 text-[#D4AF5A]" />
            <span>₹5,00,000 Proposed Prize Pool</span>
          </div>
        </div>
      </div>
    </section>
  );
}
