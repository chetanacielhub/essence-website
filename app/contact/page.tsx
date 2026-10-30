'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Globe, Sparkles } from 'lucide-react';
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PAGE 8 · PARTNERSHIP &amp; CONTACT</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Your Spark. Our Stage.{' '}
            <span className="text-gradient-gold italic">Endless Possibilities.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            Register your team with ESSENCE to back the next generation of founders.
          </p>
        </div>

        {/* 2-Column Section: Let's Connect & Partner with ESSENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Let's Connect */}
          <div className="lg:col-span-5 royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col justify-between space-y-6 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126]">
            <div className="space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                  Direct Contact
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#F7F4EC] pt-1">
                  Let&apos;s Connect
                </h2>
                <p className="text-xs text-[#C4CFDD] pt-1">
                  Connect with the ESSENCE leadership and organizing committee.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {siteConfig.institution.contacts.map((contact, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#041126]/80 border border-[#18335D] flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#68758A] block">
                        Lead Coordinator
                      </span>
                      <strong className="text-[#F7F4EC] font-serif text-base">
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

                <div className="p-4 rounded-xl bg-[#041126]/80 border border-[#18335D] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5 text-[#C4CFDD]">
                    <InstagramIcon className="w-4 h-4 text-[#D4AF5A]" />
                    <span className="font-semibold">Instagram</span>
                  </div>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold text-[#D4AF5A] hover:underline"
                  >
                    {siteConfig.social.instagramHandle}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[#041126]/80 border border-[#18335D] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5 text-[#C4CFDD]">
                    <Globe className="w-4 h-4 text-[#D4AF5A]" />
                    <span className="font-semibold">Website</span>
                  </div>
                  <a
                    href={siteConfig.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold text-[#D4AF5A] hover:underline"
                  >
                    {siteConfig.social.websiteDisplay}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[#041126]/80 border border-[#18335D] flex items-start gap-2.5 text-xs">
                  <MapPin className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-[#68758A] uppercase font-bold block">Venue &amp; Campus</span>
                    <strong className="text-[#F7F4EC]">{siteConfig.institution.auditorium}</strong>
                    <div className="text-[11px] text-[#C4CFDD] pt-0.5">{siteConfig.institution.campus}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#18335D] text-xs font-serif italic text-gradient-gold text-center">
              {siteConfig.partnership.motto}
            </div>
          </div>

          {/* Partner with ESSENCE (Sponsorship Opportunities) */}
          <div className="lg:col-span-7 royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                  Sponsorship &amp; Alliances
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#F7F4EC] pt-1">
                  Partner with ESSENCE
                </h2>
                <p className="text-sm font-serif italic text-gradient-gold pt-0.5">
                  Support the next generation of innovators.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#102D5C]/30 border border-[#D4AF5A]/30 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F0D99A] block">
                  Sponsorship Opportunities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#C4CFDD]">
                  {siteConfig.partnership.sponsorshipOpportunities.map((opp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-[#041126]/50">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-0.5" />
                      <span>{opp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="pt-2">
                {submitted ? (
                  <div className="py-8 text-center space-y-3 animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#F7F4EC]">
                      Message Successfully Sent
                    </h3>
                    <p className="text-xs text-[#C4CFDD]">
                      Thank you! Our coordinators will get in touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex items-center gap-2 pb-1 border-b border-[#18335D]">
                      <MessageSquare className="w-4 h-4 text-[#D4AF5A]" />
                      <h4 className="font-serif text-sm font-semibold text-[#F7F4EC]">
                        Send an Inquiry or Partnership Proposal
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your Full Name *"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />

                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Your Email Address *"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />

                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Mobile Number"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />

                      <input
                        type="text"
                        value={form.college}
                        onChange={(e) => setForm({ ...form, college: e.target.value })}
                        placeholder="Organization / Institution"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <textarea
                      required
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Your Message, Inquiry, or Sponsorship Interest..."
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-2.5 px-4 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors flex items-center justify-center gap-2 shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{loading ? 'Submitting...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="pt-2 text-center text-xs text-[#68758A]">
              ESSENCE · FROM IDEAS TO IMPACT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
