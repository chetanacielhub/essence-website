import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Lock, FileText } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Official data protection and privacy policy for ESSENCE 2027 by Chetana’s CiEL.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Lock className="w-3.5 h-3.5" />
            <span>Institutional Governance</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight">
            Privacy <span className="text-[#D4AF5A]">Policy</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#68758A]">
            Effective Date: October 2026 · Chetana’s Centre for Innovation &amp; Entrepreneurship Learning
          </p>
        </div>

        <div className="royal-card p-8 rounded-2xl border-[#D4AF5A]/30 space-y-8 text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              1. Institutional Commitment to Student Data Privacy
            </h2>
            <p>
              Chetana’s Centre for Innovation &amp; Entrepreneurship Learning (CiEL), operating under Chetana’s Trust,
              respects the confidentiality and privacy of every participating student, faculty coordinator, and reviewer.
              This Privacy Policy explains how participant data is collected, stored, processed, and safeguarded during
              ESSENCE 2027.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              2. Information We Collect
            </h2>
            <p>We collect only the minimum information necessary to administer the competition:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#C4CFDD]">
              <li><strong>Personal Identifiers:</strong> Full legal name, institutional email address, mobile phone number, academic roll or ID number.</li>
              <li><strong>Institutional Affiliation:</strong> Parent college name, district, enrolled degree or diploma course, and academic year.</li>
              <li><strong>Submission Data:</strong> Idea narratives, prototype descriptions, circuit diagrams, testing evidence, and uploaded pitch documents.</li>
              <li><strong>Consent Records:</strong> Formal acceptance of competition terms and public showcase permissions.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              3. Purpose &amp; Processing of Data
            </h2>
            <p>Participant information is processed strictly for:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#C4CFDD]">
              <li>Verifying undergraduate eligibility and authentic college affiliation.</li>
              <li>Facilitating blind and independent peer review by authorized evaluators.</li>
              <li>Transmitting competition milestone announcements and evaluation outcomes.</li>
              <li>Allocating physical exhibition stalls and administering institutional prize grants.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              4. Security &amp; Storage Architecture
            </h2>
            <p>
              All participant records, draft proposals, and technical uploads are stored in secured database environments
              enforcing PostgreSQL Row Level Security (RLS). File uploads are held in encrypted private storage buckets
              accessible exclusively to assigned reviewers through time-limited authorized tokens.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              5. Non-Disclosure &amp; Third-Party Sharing
            </h2>
            <p>
              Chetana’s CiEL does not sell, rent, commercialize, or share student contact information with external marketing
              firms. Student records are shared only with designated institutional reviewers and accreditation auditors
              subject to strict non-disclosure obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-[#F7F4EC]">
              6. Data Rights &amp; Rectification
            </h2>
            <p>
              Participants may review, modify, or request the correction of inaccurate registration data through their
              authenticated dashboard or by contacting <a href={`mailto:${siteConfig.institution.supportEmail}`} className="text-[#D4AF5A] underline">{siteConfig.institution.supportEmail}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
