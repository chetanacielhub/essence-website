import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Target, Award, Rocket, CheckCircle2, Building, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About ESSENCE 2027 & Chetana’s CiEL',
  description:
    'Learn about ESSENCE 2027, an initiative by Chetana’s Centre for Innovation & Entrepreneurship Learning (CiEL) fostering undergraduate innovation across Maharashtra.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Institutional Background</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            About <span className="text-[#D4AF5A]">ESSENCE 2027</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            Organised by Chetana’s Centre for Innovation &amp; Entrepreneurship Learning (CiEL) to empower
            undergraduate students across Maharashtra to transform classroom ingenuity into validated,
            working prototypes.
          </p>
        </div>

        {/* Section 1: The CiEL Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF5A]">
              Our Foundation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              Chetana’s Centre for Innovation &amp; Entrepreneurship Learning
            </h2>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              Chetana’s CiEL is an academic innovation incubator established within Chetana’s Trust in Bandra (East),
              Mumbai. Founded with the mission to cultivate a culture of experiential learning, research-backed innovation,
              and ethical venture creation, CiEL provides students and young professionals with mentorship, prototyping facilities,
              and ecosystem linkages.
            </p>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              With decades of institutional excellence in management, research, and community service, Chetana’s Trust
              has envisioned ESSENCE as a premier state-level vehicle for nurturing grassroots undergraduate problem solvers.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.institution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF5A] hover:underline underline-offset-4"
              >
                <span>Visit CiEL Institutional Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 royal-card p-8 rounded-2xl border-[#D4AF5A]/30 space-y-6">
            <h3 className="font-serif text-xl font-medium text-[#F0D99A] border-b border-[#18335D] pb-3">
              Institutional Positioning Principles
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-[#C4CFDD]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
                <span>
                  <strong>Strictly Undergraduate Focus:</strong> Exclusively dedicated to students enrolled in degree, diploma, and polytechnic programmes across Maharashtra.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
                <span>
                  <strong>Non-Commercial, Merit-Driven:</strong> Free registration with zero equity claims on student intellectual property.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
                <span>
                  <strong>Regional Inclusivity:</strong> Equitable outreach spanning urban centres (Mumbai, Pune, Nagpur) and rural districts across Marathwada, Vidarbha, and Konkan.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
                <span>
                  <strong>Prototypes Over Presentations:</strong> A dedicated focus on functional models, physical or software evidence, and real user testing.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Why ESSENCE Matters */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF5A]">
              The Core Problem
            </span>
            <h2 className="font-serif text-3xl font-medium text-[#F7F4EC]">
              Why ESSENCE 2027 Was Conceived
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="royal-card p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#F7F4EC]">The Ideation-Implementation Chasm</h3>
              <p className="text-xs text-[#C4CFDD] leading-relaxed">
                Many student projects conclude as theoretical reports submitted for final-semester marks.
                ESSENCE provides the impetus and structured feedback to translate these ideas into working models.
              </p>
            </div>

            <div className="royal-card p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#F7F4EC]">Multidisciplinary Team Dynamics</h3>
              <p className="text-xs text-[#C4CFDD] leading-relaxed">
                Engineering students build technology; management and design students understand market viability and user empathy.
                ESSENCE fosters cross-disciplinary collaboration.
              </p>
            </div>

            <div className="royal-card p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#F7F4EC]">Post-Competition Incubation</h3>
              <p className="text-xs text-[#C4CFDD] leading-relaxed">
                Unlike short hackathons that end at prize distribution, ESSENCE finalists gain direct access
                to Chetana’s CiEL incubation mentorship, patent advisory, and seed progression reviews.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Campus Host & Location */}
        <div className="royal-card p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#D4AF5A]">
              <Building className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Host Campus &amp; Finale Venue</span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#F7F4EC]">
              Chetana’s Campus, Bandra (East), Mumbai
            </h3>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              Centrally situated in Mumbai’s prominent educational and institutional corridor, Chetana’s campus
              features modern auditoriums, innovation lab spaces, and the open central plaza that will house
              the 100-stall Maharashtra Innovation Exhibition during the Grand Finale.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shrink-0 shadow"
          >
            Contact Organisers &amp; Campus Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
