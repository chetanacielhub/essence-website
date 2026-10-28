import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Scale, FileText, AlertTriangle, Lock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Official Competition Rules & Submission Guidelines',
  description:
    'Code of conduct, intellectual property protection, evaluation rubrics, and disqualification policies for ESSENCE 2027.',
};

export default function RulesPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Scale className="w-3.5 h-3.5" />
            <span>Governance &amp; Terms</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Rules &amp; <span className="text-[#D4AF5A]">Submission Guidelines</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            ESSENCE 2027 operates under strict academic integrity, fair play, and transparent evaluation.
            All participants and institutional coordinators are bound by these rules.
          </p>
        </div>

        {/* Rules Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section 1: Intellectual Property Ownership */}
          <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#18335D]">
              <div className="w-9 h-9 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                  Section 1
                </span>
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
                  Intellectual Property (IP) Protection &amp; Ownership
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              <strong>100% Student &amp; Institutional Ownership:</strong> Chetana’s CiEL, Chetana’s Trust, and the
              competition evaluators claim zero equity, ownership, or patent rights over ideas and prototypes submitted
              to ESSENCE 2027. All foreground intellectual property remains solely with the participating students and
              their parent academic institutions.
            </p>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              <strong>Public Disclosure Advisory:</strong> Submitting non-confidential summaries for public exhibition
              or media coverage is subject to participant consent. Teams intending to file provisional patents are strongly
              advised to submit patent applications prior to public prototype demonstrations.
            </p>
          </div>

          {/* Section 2: Originality & Academic Integrity */}
          <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#18335D]">
              <div className="w-9 h-9 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                  Section 2
                </span>
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
                  Originality, Plagiarism &amp; Verification
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              Every submission must represent original work conceived and engineered by the registered undergraduate team.
              Direct duplication or rebranding of commercially available off-the-shelf consumer devices without significant
              novel engineering, software integration, or mechanical adaptation will result in immediate disqualification.
            </p>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              <strong>Open Source Usage:</strong> Teams may utilize open-source software libraries, standard microcontrollers
              (e.g., Arduino, ESP32, Raspberry Pi), and open CAD models provided the underlying source licenses permit
              and proper citations are documented in the technical annexure.
            </p>
          </div>

          {/* Section 3: Prototype Safety & Laboratory Compliance */}
          <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#18335D]">
              <div className="w-9 h-9 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  Section 3
                </span>
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
                  Safety, Hazardous Materials &amp; Public Demonstrations
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              Prototypes involving high-voltage electrical circuits (&gt;48V DC or 230V mains), volatile chemical reagents,
              pressurized vessels, radioactive materials, or open flames must comply with Indian Safety Standards. Live
              demonstrations involving hazards require advance safety clearance from the CiEL exhibition safety officer.
            </p>
          </div>

          {/* Section 4: Evaluation and Appeals */}
          <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-[#18335D]">
              <div className="w-9 h-9 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                  Section 4
                </span>
                <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
                  Jury Decisions &amp; Appeals Process
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              All evaluations are conducted blindly and independently across predetermined rubrics by qualified academic
              and industry reviewers. Internal scoring sheets, reviewer identities, and confidential reviewer annotations
              are non-public. Decisions of the Grand Jury in selecting finalists and awarding grants are final and binding.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
          >
            <span>Agree to Guidelines &amp; Register</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
