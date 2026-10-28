import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = 2027;

  return (
    <footer className="bg-[#041126] border-t border-[#D4AF5A]/20 text-[#C4CFDD] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#18335D]/80">
          {/* Column 1: Brand & Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#D4AF5A] uppercase block">
                Chetana&apos;s CiEL Presents
              </span>
              <div className="font-serif text-3xl font-medium text-[#F7F4EC] tracking-tight">
                ESSENCE <span className="text-[#D4AF5A] italic">2027</span>
              </div>
              <p className="text-xs font-serif italic text-[#F0D99A]">
                From Ideas to Impact
              </p>
            </div>

            <p className="text-xs text-[#C4CFDD] leading-relaxed max-w-sm">
              An undergraduate innovation and prototype-development initiative bringing students
              across Maharashtra together to identify real-world challenges, build practical solutions,
              and present their ideas to expert evaluators.
            </p>

            <div className="pt-2 text-xs text-[#68758A] space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF5A] shrink-0 mt-0.5" />
                <span>{siteConfig.institution.campus}</span>
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
                <Phone className="w-3.5 h-3.5 text-[#D4AF5A] shrink-0" />
                <a
                  href={`tel:${siteConfig.institution.phone}`}
                  className="hover:text-[#F7F4EC] transition-colors"
                >
                  {siteConfig.institution.phone}
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

          {/* Column 4: Institutional Governance */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#F0D99A]">
              Institution & Governance
            </h2>
            <ul className="space-y-2 text-xs">
              {siteConfig.footerLinks.institution.map((link) => (
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
            &copy; {currentYear} Chetana&apos;s CiEL · Centre for Innovation &amp; Entrepreneurship Learning. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="/privacy" className="hover:text-[#C4CFDD] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C4CFDD] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/rules" className="hover:text-[#C4CFDD] transition-colors">
              Competition Rules
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
