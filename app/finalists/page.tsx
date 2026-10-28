import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Trophy, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Official Finalists Roster',
  description:
    'Official announcement portal for the 50 finalist teams qualified for the ESSENCE 2027 Grand Finale and Exhibition.',
};

export default function FinalistsPage() {
  const isFinalistsPublished = false; // Admin controlled state

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Trophy className="w-3.5 h-3.5" />
            <span>State Innovation Showcase</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Official <span className="text-[#D4AF5A]">Finalists</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            The 50 highest-scoring undergraduate teams qualified to present live prototypes at the
            100-stall Maharashtra Innovation Exhibition on Chetana’s campus.
          </p>
        </div>

        {/* State Container */}
        {isFinalistsPublished ? (
          <div className="text-center py-12">
            {/* Dynamic Finalists List Rendered When Published */}
            <p className="text-sm text-[#C4CFDD]">Published finalists will appear here.</p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto royal-card p-8 sm:p-12 rounded-2xl border-[#D4AF5A]/30 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30 flex items-center justify-center mx-auto text-[#D4AF5A]">
              <Clock className="w-8 h-8 animate-pulse" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
                Stage 4 Evaluation Underway
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
                Finalist Roster Under Review
              </h2>
              <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                The official list of 50 qualified finalist teams is pending conclusion of the Stage 4
                expert evaluation and prototype verification round. No unverified names are published.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] text-xs text-[#68758A] leading-relaxed">
              Finalists will be notified via their registered institutional email and participant dashboard.
              Official notifications will be signed and sealed by Chetana’s CiEL.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/login"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors"
              >
                <span>Check Your Submission Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/showcase"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-medium text-[#C4CFDD] bg-[#0A1E3D] border border-[#18335D] hover:text-[#F7F4EC]"
              >
                <span>Browse Approved Showcase</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
