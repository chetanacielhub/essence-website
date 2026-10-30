import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2, Users, ArrowRight, ShieldCheck, Sparkles, Building, Calendar, Award } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Who Can Join · ESSENCE',
  description:
    'Fewer rules. More founders. Open to all students and aspiring founders from any institution. Team of 2–4 members.',
};

export default function EligibilityPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PAGE 6 · WHO CAN JOIN?</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Who Can <span className="text-[#D4AF5A]">Join?</span>
          </h1>
          <div className="text-xl sm:text-2xl font-serif text-gradient-gold italic">
            {siteConfig.whoCanJoin.tagline}
          </div>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            ESSENCE is built to support the next generation of student founders and innovators without unnecessary barriers.
          </p>
        </div>

        {/* 4 Pillars of Who Can Join (PAGE 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {siteConfig.whoCanJoin.points.map((point, idx) => (
            <div
              key={idx}
              className="royal-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all space-y-4 group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#F7F4EC]">
                  {point.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#18335D]/70 text-[10px] text-[#D4AF5A] font-bold uppercase tracking-wider">
                Founder Rule 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Table: Registration Particulars */}
        <div className="royal-card p-8 sm:p-10 rounded-2xl border-[#D4AF5A]/30 max-w-4xl mx-auto space-y-6 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#18335D] gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                PAGE 5 · REGISTRATION DETAILS
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F7F4EC]">
                Your Journey Starts Here
              </h3>
            </div>
            <div className="font-serif text-lg text-gradient-gold italic">
              GRAND FUND POOL: {siteConfig.grandFundPool}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#18335D] text-[#D4AF5A] text-[11px] font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Particulars</th>
                  <th className="py-3 px-4">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#18335D]/60 text-[#C4CFDD]">
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#F7F4EC]">Team Size</td>
                  <td className="py-3 px-4">{siteConfig.registrationDetails.teamSize}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#F7F4EC]">Registration Fee</td>
                  <td className="py-3 px-4 font-bold text-[#D4AF5A]">{siteConfig.registrationDetails.registrationFee}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#F7F4EC]">Last Date</td>
                  <td className="py-3 px-4">{siteConfig.registrationDetails.lastDate}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#F7F4EC]">Bootcamp</td>
                  <td className="py-3 px-4">{siteConfig.registrationDetails.bootcampDate}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#F7F4EC]">Main Event</td>
                  <td className="py-3 px-4">{siteConfig.registrationDetails.mainEventDate}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#F7F4EC]">Time</td>
                  <td className="py-3 px-4">{siteConfig.registrationDetails.time}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-[#F7F4EC]">Venue</td>
                  <td className="py-3 px-4">{siteConfig.registrationDetails.venue}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-xs sm:text-sm font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
          >
            <Sparkles className="w-4 h-4" />
            <span>Register Your Team Online (₹500)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
