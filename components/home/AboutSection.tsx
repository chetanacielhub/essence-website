import React from 'react';
import Link from 'next/link';
import { Lightbulb, Wrench, Target, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Bridging the Classroom Gap',
      description: 'Moving beyond theoretical assignments to build tangible, functional solutions solving real problems faced by Maharashtra’s industries and communities.',
      icon: Lightbulb,
    },
    {
      title: 'Rigorous Prototype Validation',
      description: 'Cultivating engineering discipline through iterative testing, bill of materials optimisation, and user feedback rather than polished slides alone.',
      icon: Wrench,
    },
    {
      title: 'State-Wide Student Engagement',
      description: 'Creating an equitable platform uniting undergraduates from Mumbai, Pune, Vidarbha, Marathwada, and Konkan across engineering, commerce, arts, and sciences.',
      icon: Target,
    },
    {
      title: 'Incubation & Progression Pathway',
      description: 'Connecting promising prototypes with Chetana’s CiEL incubation mentorship, seed validation grants, and institutional ecosystem partners.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 bg-[#041126] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
                The ESSENCE Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC] leading-tight">
                From Classroom Concepts to <span className="text-gradient-gold italic">Tangible Impact</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
              In academic institutions across Maharashtra, undergraduate students generate hundreds
              of brilliant ideas. Yet, the journey from an initial concept to a validated, working prototype
              often falters due to a lack of prototyping mentorship, fabrication resources, and industry review.
            </p>

            <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
              <strong className="text-[#F7F4EC]">ESSENCE 2027</strong> is Chetana’s institutional response:
              a structured, supportive ecosystem that takes student innovators through discovery, rigorous design,
              prototype fabrication, expert evaluation, and live demonstration at a 100-stall state showcase.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D4AF5A] hover:text-[#F0D99A] group transition-colors"
              >
                <span>Read more about CiEL’s vision &amp; leadership</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="royal-card p-6 rounded-xl space-y-3 hover:border-[#D4AF5A]/40 transition-all flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#102D5C]/70 border border-[#D4AF5A]/30 flex items-center justify-center text-[#D4AF5A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-lg font-medium text-[#F7F4EC]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#68758A] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#D4AF5A]/80 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF5A]" />
                    <span>Core Objective</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
