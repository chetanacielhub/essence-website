'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';

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
            <Mail className="w-3.5 h-3.5" />
            <span>Official Communications</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Contact <span className="text-[#D4AF5A]">CiEL</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            Get in touch with the organising committee at Chetana’s Centre for Innovation &amp;
            Entrepreneurship Learning (CiEL) in Bandra (East), Mumbai.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* Institutional Address & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
                  Organising Secretariat
                </span>
                <h2 className="font-serif text-2xl font-medium text-[#F7F4EC] pt-1">
                  Chetana’s CiEL
                </h2>
                <p className="text-xs text-[#68758A] pt-1">
                  Centre for Innovation &amp; Entrepreneurship Learning
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#C4CFDD]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F4EC] block">Campus Address:</strong>
                    <span className="text-xs text-[#C4CFDD] leading-relaxed">
                      {siteConfig.institution.campus}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F4EC] block">Competition Support Desk:</strong>
                    <a
                      href={`mailto:${siteConfig.institution.supportEmail}`}
                      className="text-xs text-[#D4AF5A] hover:underline"
                    >
                      {siteConfig.institution.supportEmail}
                    </a>
                    <div className="text-[11px] text-[#68758A]">
                      Institutional: {siteConfig.institution.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F4EC] block">Central Reception:</strong>
                    <a
                      href={`tel:${siteConfig.institution.phone}`}
                      className="text-xs text-[#C4CFDD] hover:text-[#F7F4EC]"
                    >
                      {siteConfig.institution.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF5A] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#F7F4EC] block">Operating Hours:</strong>
                    <span className="text-xs text-[#68758A]">
                      Monday – Saturday, 9:30 AM to 5:30 PM IST
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#F7F4EC]">
                    Message Successfully Dispatched
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4CFDD] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F7F4EC]">{form.name}</strong>.
                    Your query has been logged with reference to our student support desk.
                    We will respond to <span className="text-[#D4AF5A]">{form.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        college: '',
                        subject: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="text-xs text-[#68758A] hover:text-[#C4CFDD] underline pt-2"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#18335D]/70">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-[#D4AF5A]" />
                      <h3 className="font-serif text-lg font-medium text-[#F7F4EC]">
                        Direct Inquiry Portal
                      </h3>
                    </div>
                    <span className="text-[10px] text-[#68758A] uppercase font-mono">
                      Official Helpdesk
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Sanjana Patil"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="sanjana@college.ac.in"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        Mobile Contact
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98000 00000"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        College / Institution
                      </label>
                      <input
                        type="text"
                        value={form.college}
                        onChange={(e) => setForm({ ...form, college: e.target.value })}
                        placeholder="e.g. VJTI Mumbai"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        Subject / Topic *
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      >
                        <option value="General Inquiry">General Competition Inquiry</option>
                        <option value="Registration & Eligibility">Registration &amp; Eligibility</option>
                        <option value="Team Management">Team Code &amp; Membership</option>
                        <option value="Idea Submission Technicalities">Idea Submission Technicalities</option>
                        <option value="College Partnership">College Partnership &amp; Coordinator Deck</option>
                        <option value="Other">Other Institutional Matter</option>
                      </select>
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        Your Inquiry / Question *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe your question or requirement clearly..."
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    {loading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Official Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
