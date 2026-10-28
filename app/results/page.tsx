import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Award, ArrowRight, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Official Competition Results & Winners Portal',
  description:
    'Official announcement portal for the winners, citations, and cash grant recipients of ESSENCE 2027.',
};

export default function ResultsPage() {
  const areResultsPublished = false; // Managed by organiser admin

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Award className="w-3.5 h-3.5" />
            <span>Official Awards Portal</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Official <span className="text-[#D4AF5A]">Results</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            The validated results and official cash grant recipients for ESSENCE 2027 will be announced
            and published here following the Grand Finale on Chetana’s campus.
          </p>
        </div>

        {/* Results State */}
        {areResultsPublished ? (
          <div className="text-center py-12">
            <p className="text-sm text-[#C4CFDD]">Published winners will appear here.</p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto royal-card p-8 sm:p-12 rounded-2xl border-[#D4AF5A]/30 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30 flex items-center justify-center mx-auto text-[#D4AF5A]">
              <Trophy className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
                Post-Grand Finale Publication
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
                Results Will Be Declared Post-Finale
              </h2>
              <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                Official declarations across the State Grand Champion, First Runner-Up, Second Runner-Up,
                and 7 Track Champion categories will be released immediately after the Grand Jury deliberations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] text-xs text-[#68758A] leading-relaxed">
              In accordance with Section 2.1 and Section 8.4 of the governance policy, results remain strictly
              confidential until authorized by the Super Admin council.
            </div>

            <div className="pt-2">
              <Link
                href="/awards"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors"
              >
                <span>Review Proposed Prize Structure &amp; Grants</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
