import React from 'react';
import Link from 'next/link';
import { Lightbulb, Rocket, Target, ArrowRight, Eye, Compass, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function AboutSection() {
  const pillars = [
    {
      step: '01',
      title: 'IDEATE',
      sub: 'IDEATE – 01',
      headline: 'Begin with a raw concept and shape it into a problem worth solving.',
      description: 'Turn your imagination into innovative ideas that inspire change.',
      icon: Lightbulb,
    },
    {
      step: '02',
      title: 'INNOVATE',
      sub: 'INNOVATE – 02',
      headline: 'Test, refine and build your idea into a real, workable venture.',
      description: 'Prototype solutions, validate business assumptions, and engineer functional execution.',
      icon: Target,
    },
    {
      step: '03',
      title: 'CREATE IMPACT',
      sub: 'CREATE IMPACT – 03',
      headline: 'Pitch with confidence and turn your venture into real-world impact.',
      description: 'Present before industry leaders and investors to secure funding from up to ₹1.5 Lakh.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 bg-[#041126] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Part: PAGE 2 – OUR PURPOSE. OUR FUTURE. */}
        <div className="royal-card p-8 sm:p-10 rounded-2xl border-[#D4AF5A]/30 relative overflow-hidden bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126]">
          <div className="max-w-3xl space-y-3 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102D5C] border border-[#D4AF5A]/40 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chetana’s CiEL Presents</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102D5C]/70 border border-[#D4AF5A]/30 text-[#F0D99A] text-xs font-bold uppercase tracking-[0.2em]">
                <span>{siteConfig.purpose.title}</span>
              </div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
              {siteConfig.purpose.subtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#18335D]/70">
            {/* Vision */}
            <div className="space-y-3 p-6 rounded-xl bg-[#041126]/60 border border-[#18335D] hover:border-[#D4AF5A]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-[#D4AF5A]">
                <Eye className="w-5 h-5" />
                <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-[#F7F4EC]">
                  Vision
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                {siteConfig.purpose.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-3 p-6 rounded-xl bg-[#041126]/60 border border-[#18335D] hover:border-[#D4AF5A]/40 transition-colors">
              <div className="flex items-center gap-2.5 text-[#D4AF5A]">
                <Compass className="w-5 h-5" />
                <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-[#F7F4EC]">
                  Mission
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                {siteConfig.purpose.mission}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Part: PAGE 3 – WHAT IS ESSENCE? */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
              PAGE 3 · Startup-Building Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
              {siteConfig.whatIsEssence.title}
            </h2>
            <div className="text-lg sm:text-xl font-serif text-gradient-gold italic">
              {siteConfig.whatIsEssence.subtitle}
            </div>
            <p className="text-xs sm:text-sm md:text-base text-[#C4CFDD] leading-relaxed max-w-2xl mx-auto">
              {siteConfig.whatIsEssence.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.step}
                  className="royal-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all group relative"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#102D5C]/70 border border-[#D4AF5A]/30 flex items-center justify-center text-[#D4AF5A] group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-serif text-3xl font-bold text-[#D4AF5A]/50 group-hover:text-[#D4AF5A] transition-colors">
                        {pillar.step}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A] block">
                        {pillar.sub}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#F7F4EC] pt-1">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#F0D99A] leading-relaxed">
                      {pillar.headline}
                    </p>

                    <p className="text-xs text-[#C4CFDD] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#18335D]/70 mt-6 flex items-center gap-1.5 text-xs text-[#D4AF5A] font-medium">
                    <span>ESSENCE · FROM IDEAS TO IMPACT</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D4AF5A] hover:text-[#F0D99A] group transition-colors"
            >
              <span>Explore full institutional vision &amp; leadership details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
