import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Users2, Wrench, GraduationCap, Briefcase, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mentorship & Prototype Bootcamps',
  description:
    'Overview of the 4-tier expert mentorship model, 500-participant bootcamp curriculum, and prototyping clinics at ESSENCE 2027.',
};

export default function MentorshipPage() {
  const tiers = [
    {
      title: 'Tier 1: Academic Research Guidance',
      focus: 'Stage 1 & 2 Concept Validation',
      description: 'Senior professors and department chairs evaluate scientific rigor, problem literature, and baseline engineering feasibility.',
      deliverables: 'Written rubric feedback, literature gap analysis, and methodology recommendations.',
      icon: GraduationCap,
    },
    {
      title: 'Tier 2: Prototype Fabrication Clinics',
      focus: 'Stage 5 Bootcamps (500 Participants Target)',
      description: 'Embedded systems engineers, CAD modelers, and full-stack developers guide teams through rapid prototyping, breadboard testing, and BOM budgeting.',
      deliverables: 'Hands-on clinics on circuit debugging, microcontroller selection, and lightweight cloud deployments.',
      icon: Wrench,
    },
    {
      title: 'Tier 3: Domain & Grassroots Validation',
      focus: 'Stage 6 Prototype Refinement',
      description: 'Sector specialists in agriculture, sustainable packaging, civic sanitation, and medical technology assess real-world durability in Maharashtra conditions.',
      deliverables: 'Field validation checklists, user interview guidance, and regulatory awareness reviews.',
      icon: Briefcase,
    },
    {
      title: 'Tier 4: Incubation & Investor Pitching',
      focus: 'Stage 7 Grand Finale Preparation',
      description: 'CiEL incubation mentors and angel investors train finalist teams in concise technical storytelling, commercial viability, and demonstration poise.',
      deliverables: 'Pitch deck coaching, financial unit economics critique, and investor Q&A rehearsals.',
      icon: Rocket,
    },
  ];

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Users2 className="w-3.5 h-3.5" />
            <span>Capability Building</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Mentorship &amp; <span className="text-[#D4AF5A]">Prototype Bootcamps</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            ESSENCE 2027 couples competition with intensive capability building. Shortlisted participants
            gain direct access to seasoned academic, technical, and venture practitioners.
          </p>
        </div>

        {/* 4 Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className="royal-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#D4AF5A]/40 transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#102D5C] border border-[#D4AF5A]/30 flex items-center justify-center text-[#D4AF5A]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] block">
                      {tier.focus}
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-[#F7F4EC] pt-1">
                      {tier.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] text-xs space-y-1">
                  <strong className="text-[#F0D99A] block uppercase text-[10px] tracking-wider">
                    Core Deliverables:
                  </strong>
                  <span className="text-[#C4CFDD]">{tier.deliverables}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Planned Jury Transparency Statement */}
        <div className="royal-card-static p-8 rounded-2xl border-[#D4AF5A]/30 max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#D4AF5A]">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-serif text-xl font-medium text-[#F7F4EC]">
              Official Jury &amp; Mentor Appointments
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#C4CFDD] max-w-2xl mx-auto leading-relaxed">
            In compliance with our institutional governance charter, individual reviewer profiles,
            visiting keynote speakers, and jury rosters are released exclusively following formal institutional
            appointment confirmations. No unconfirmed affiliations or surrogate names are used.
          </p>
          <div className="pt-2">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors"
            >
              <span>Apply for Stage 1 Evaluation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
