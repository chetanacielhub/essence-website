import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Scale, FileText, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions of Participation',
  description: 'Official terms and conditions governing participation in ESSENCE 2027 by Chetana’s CiEL.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Scale className="w-3.5 h-3.5" />
            <span>Participation Charter</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            Terms &amp; <span className="text-[#D4AF5A]">Conditions</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#68758A]">
            Applicable to all participating students, teams, and institutions across Maharashtra
          </p>
        </div>

        <div className="royal-card p-8 rounded-2xl border-[#D4AF5A]/30 space-y-8 text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              1. Acceptance of Terms
            </h2>
            <p>
              By registering an individual or team account on this website, submitting an idea, or participating
              in any stage of ESSENCE 2027, you agree to be legally bound by these Terms and Conditions, the Official
              Competition Rules, and the Institutional Guidelines established by Chetana’s Centre for Innovation &amp;
              Entrepreneurship Learning (CiEL).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              2. Student Eligibility Verification
            </h2>
            <p>
              Registration is restricted to bona fide undergraduate students currently enrolled in recognised colleges,
              universities, or polytechnic institutions within the state of Maharashtra. Chetana’s CiEL reserves the
              right to request verifiable college identity cards or official institutional bonafide letters at any
              stage of the competition. Failure to furnish authentic proof will result in forfeiture of qualification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              3. Original Work &amp; Intellectual Property
            </h2>
            <p>
              Participants affirm that all submissions constitute original work. Participants retain 100% intellectual
              property ownership over their innovations. By submitting non-confidential media for public showcase,
              participants grant Chetana’s CiEL a non-exclusive, royalty-free license to display project summaries,
              photographs, and team credentials solely for non-commercial educational and archival purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              4. Evaluation &amp; Prize Discretion
            </h2>
            <p>
              All evaluations are conducted by independent academic and industry panels based on objective criteria.
              The decisions of the Grand Jury in selecting finalists, track winners, and cash grant recipients are final.
              Proposed prize figures and planning targets are subject to operational conditions and formal verification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Republic of India.
              Any legal dispute or claim arising out of participation in ESSENCE 2027 shall be subject to the
              exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
