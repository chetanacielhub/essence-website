import React from 'react';
import Link from 'next/link';
import { Sparkles, FileText } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-24 bg-ambient-navy relative overflow-hidden text-center border-b border-[#D4AF5A]/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,90,0.06)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF5A] block">
          Chetana&apos;s Centre for Innovation &amp; Entrepreneurship Learning
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-[#F7F4EC] leading-[1.1]">
          Your Idea Could Be the Beginning of{' '}
          <span className="text-gradient-gold italic">Something Bigger</span>.
        </h2>

        <p className="max-w-xl mx-auto text-xs sm:text-base text-[#C4CFDD] leading-relaxed">
          Join hundreds of student teams across Maharashtra. Turn your problem statement
          into an engineered prototype with expert mentorship, state citations, and incubation support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] rounded-lg shadow-xl shadow-[#D4AF5A]/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Register for ESSENCE 2027</span>
          </Link>

          <Link
            href="/rules"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F7F4EC] bg-[#0A1E3D] hover:bg-[#102D5C] border border-[#D4AF5A]/30 hover:border-[#D4AF5A] rounded-lg transition-all"
          >
            <FileText className="w-4 h-4 text-[#D4AF5A]" />
            <span>Explore Competition Rules</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
