import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react';
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

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#041126] border-t border-[#D4AF5A]/20 text-[#C4CFDD] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#18335D]/80">
          {/* Column 1: Brand & Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF5A] uppercase block">
                Chetana’s
              </span>
              <div className="text-xs text-[#C4CFDD] font-serif">
                R. K. Institute of Management &amp; Research &amp; Institute of Management &amp; Research
              </div>
              <div className="font-serif text-3xl font-medium text-[#F7F4EC] tracking-tight pt-1">
                ESSENCE
              </div>
              <p className="text-xs font-serif italic text-gradient-gold">
                From Ideas to Impact
              </p>
            </div>

            <p className="text-xs text-[#C4CFDD] leading-relaxed max-w-sm">
              An entrepreneurial competition where innovative ideas compete to become impactful ventures.
              Grand Fund Pool of up to ₹1.5 Lakh.
            </p>

            <div className="pt-2 text-xs text-[#68758A] space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF5A] shrink-0 mt-0.5" />
                <span>{siteConfig.institution.auditorium}, {siteConfig.institution.campus}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF5A] shrink-0" />
                <a
                  href={`mailto:${siteConfig.institution.supportEmail}`}
                  className="hover:text-[#F7F4EC] transition-colors"
                >
                  {siteConfig.institution.supportEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-3.5 h-3.5 text-[#D4AF5A] shrink-0" />
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7F4EC] transition-colors"
                >
                  {siteConfig.social.instagramHandle}
                </a>
                <span className="text-[#18335D]">|</span>
                <Globe className="w-3.5 h-3.5 text-[#D4AF5A] shrink-0" />
                <a
                  href={siteConfig.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7F4EC] transition-colors"
                >
                  {siteConfig.social.websiteDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Competition */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#F0D99A]">
              Competition
            </h2>
            <ul className="space-y-2 text-xs">
              {siteConfig.footerLinks.competition.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F7F4EC] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Participate */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#F0D99A]">
              Participate
            </h2>
            <ul className="space-y-2 text-xs">
              {siteConfig.footerLinks.participate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F7F4EC] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Let's Connect */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#F0D99A]">
              Let&apos;s Connect
            </h2>
            <div className="space-y-2 text-xs text-[#C4CFDD]">
              {siteConfig.institution.contacts.map((contact, i) => (
                <div key={i} className="space-y-0.5">
                  <span className="text-[10px] text-[#68758A] uppercase font-bold block">
                    {contact.name}
                  </span>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="text-[#D4AF5A] hover:underline block font-mono text-[11px]"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-medium text-[#D4AF5A] bg-[#0A1E3D] border border-[#D4AF5A]/30 hover:border-[#D4AF5A] transition-colors"
              >
                <span>Organiser Portal</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#68758A] gap-4">
          <p>
            &copy; {currentYear} Chetana&apos;s · R. K. Institute of Management &amp; Research &amp; Institute of Management &amp; Research. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="/privacy" className="hover:text-[#C4CFDD] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C4CFDD] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/rules" className="hover:text-[#C4CFDD] transition-colors">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
