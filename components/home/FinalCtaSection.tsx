import React from 'react';
import Link from 'next/link';
import { Sparkles, Phone, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function FinalCtaSection() {
  return (
    <section className="py-20 bg-ambient-navy relative overflow-hidden border-b border-[#D4AF5A]/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,90,0.06)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Main Banner: Your Spark. Our Stage. Endless Possibilities. */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D4AF5A] block">
            PAGE 8 · PARTNERSHIP &amp; CONTACT
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-[#F7F4EC] leading-[1.1]">
            Your Spark. Our Stage.{' '}
            <span className="text-gradient-gold italic">Endless Possibilities.</span>
          </h2>

          <p className="max-w-xl mx-auto text-xs sm:text-base text-[#C4CFDD] leading-relaxed">
            Register your team with ESSENCE to back the next generation of founders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] rounded-lg shadow-xl shadow-[#D4AF5A]/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register Your Team (₹500)</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F7F4EC] bg-[#0A1E3D] hover:bg-[#102D5C] border border-[#D4AF5A]/30 hover:border-[#D4AF5A] rounded-lg transition-all"
            >
              <span>Partner with ESSENCE</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF5A]" />
            </Link>
          </div>
        </div>

        {/* 2-Column Grid: Partner with ESSENCE & Let's Connect */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Partner with ESSENCE Box */}
          <div className="lg:col-span-7 royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                  Institutional Collaboration
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F7F4EC]">
                  Partner with ESSENCE
                </h3>
                <p className="text-xs text-[#F0D99A]">
                  Support the next generation of innovators.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-[#F7F4EC] uppercase tracking-wider">
                  Sponsorship Opportunities:
                </div>
                <ul className="space-y-2 text-xs text-[#C4CFDD]">
                  {siteConfig.partnership.sponsorshipOpportunities.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF5A] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#18335D] text-xs font-serif italic text-gradient-gold">
              {siteConfig.partnership.motto}
            </div>
          </div>

          {/* Let's Connect Box */}
          <div className="lg:col-span-5 royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col justify-between space-y-6 bg-gradient-to-br from-[#0B2246] to-[#041126]">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                  Direct Contact Desk
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F7F4EC]">
                  Let&apos;s Connect
                </h3>
                <p className="text-xs text-[#68758A]">
                  Reach out directly to the ESSENCE coordinators.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                {siteConfig.institution.contacts.map((contact, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#041126]/60 border border-[#18335D] flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#68758A] block">
                        Coordinator
                      </span>
                      <strong className="text-[#F7F4EC] font-serif text-sm">
                        {contact.name}
                      </strong>
                    </div>
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF5A] hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                ))}

                <div className="p-3 rounded-xl bg-[#041126]/60 border border-[#18335D] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#C4CFDD]">
                    <InstagramIcon className="w-4 h-4 text-[#D4AF5A]" />
                    <span className="font-medium">Instagram</span>
                  </div>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-semibold text-[#D4AF5A] hover:underline"
                  >
                    {siteConfig.social.instagramHandle}
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-[#041126]/60 border border-[#18335D] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#C4CFDD]">
                    <Globe className="w-4 h-4 text-[#D4AF5A]" />
                    <span className="font-medium">Website</span>
                  </div>
                  <a
                    href={siteConfig.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-semibold text-[#D4AF5A] hover:underline"
                  >
                    {siteConfig.social.websiteDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#68758A] text-center border-t border-[#18335D]">
              ESSENCE · FROM IDEAS TO IMPACT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
