import React from 'react';
import Link from 'next/link';
import { Users2, GraduationCap, Wrench, Briefcase, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';

export default function MentorshipModelSection() {
  const models = [
    {
      role: 'Academic Research Evaluators',
      category: 'Stage 1 & 2 Evaluation',
      description: 'Senior professors and department heads from engineering, sciences, and commerce colleges across Maharashtra assessing problem clarity and scientific validity.',
      icon: GraduationCap,
    },
    {
      role: 'Prototype Technical Mentors',
      category: 'Stage 3 Bootcamp Guidance',
      description: 'Hands-on embedded systems architects, cloud engineers, and industrial designers conducting rapid prototyping clinics for the 500 bootcamp participants.',
      icon: Wrench,
    },
    {
      role: 'Domain Industry Practitioners',
      category: 'Stage 4 Feasibility Review',
      description: 'Leaders from agriculture, healthcare, manufacturing, and logistics evaluating supply-chain economics, regional compliance, and grassroots usability.',
      icon: Briefcase,
    },
    {
      role: 'Incubation & Venture Advisors',
      category: 'Grand Finale Evaluation',
      description: 'Chetana’s CiEL incubation committee and ecosystem investors reviewing the top 50 finalists for prototype commercialisation and seed incubation support.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 bg-[#071A36] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
            Mentorship &amp; Evaluation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            Planned Expert-Engagement Model
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#C4CFDD] leading-relaxed">
            ESSENCE 2027 operates a 4-tier mentorship and evaluation architecture to ensure that every
            qualifying undergraduate team receives constructive, multi-dimensional feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="royal-card rounded-xl p-6 flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#102D5C]/70 border border-[#D4AF5A]/30 flex items-center justify-center text-[#D4AF5A]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] block">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-[#F7F4EC] pt-1">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-xs text-[#C4CFDD] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#18335D]/70 mt-4 flex items-center gap-1.5 text-[11px] text-[#68758A]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF5A]" />
                  <span>Structured Review Rubric</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Transparency Notice */}
        <div className="mt-12 p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] max-w-2xl mx-auto text-center text-xs text-[#68758A] space-y-2">
          <p>
            <strong className="text-[#C4CFDD]">Transparency Policy:</strong> Individual jury rosters, visiting
            speakers, and institutional mentors are published exclusively upon formal appointment confirmation.
          </p>
          <Link
            href="/mentorship"
            className="text-[#D4AF5A] hover:underline underline-offset-4 inline-flex items-center gap-1 font-medium"
          >
            <span>Learn more about the mentorship and bootcamp curriculum</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
