'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { School, CheckCircle2, Send, ArrowRight } from 'lucide-react';

export default function CollegesSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: '',
    city: '',
    district: '',
    coordinatorName: '',
    coordinatorDesignation: '',
    email: '',
    phone: '',
    estimatedParticipants: '20',
    areaOfInterest: '',
    consent: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate safe recording into administrative pipeline
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="py-20 bg-[#041126] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context for Colleges & Faculty */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
                Institutional Engagement
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC] leading-tight">
                Empower Your College Innovators
              </h2>
            </div>

            <p className="text-sm text-[#C4CFDD] leading-relaxed">
              Chetana’s CiEL invites undergraduate engineering, arts, science, pharmacy, and commerce
              institutions across Maharashtra to register as participating college hubs for ESSENCE 2027.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#F7F4EC]">Official Faculty Coordinator Kit</h4>
                  <p className="text-xs text-[#68758A]">Dedicated orientation webinars and mentorship guides for college faculty.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#F7F4EC]">Institutional Participation Analytics</h4>
                  <p className="text-xs text-[#68758A]">Tracking reports of student submissions and finalists representing your college.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#F7F4EC]">State Innovation Showcase Feature</h4>
                  <p className="text-xs text-[#68758A]">Allocated prototype stalls at the 100-stall grand finale for qualifying colleges.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/colleges"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF5A] hover:underline underline-offset-4"
              >
                <span>Learn more about institutional partnership terms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: College Interest Form */}
          <div className="lg:col-span-7">
            <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#F7F4EC]">
                    Expression of Interest Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4CFDD] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F7F4EC]">{formData.coordinatorName}</strong>.
                    Our institutional coordinator desk at Chetana’s CiEL will contact you at{' '}
                    <span className="text-[#D4AF5A]">{formData.email}</span> within 2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        collegeName: '',
                        city: '',
                        district: '',
                        coordinatorName: '',
                        coordinatorDesignation: '',
                        email: '',
                        phone: '',
                        estimatedParticipants: '20',
                        areaOfInterest: '',
                        consent: true,
                      });
                    }}
                    className="text-xs text-[#68758A] hover:text-[#C4CFDD] underline pt-2"
                  >
                    Submit another college registration
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#18335D]/70">
                    <div className="flex items-center gap-2">
                      <School className="w-5 h-5 text-[#D4AF5A]" />
                      <h3 className="font-serif text-lg font-medium text-[#F7F4EC]">
                        College Expression of Interest
                      </h3>
                    </div>
                    <span className="text-[10px] text-[#68758A] uppercase font-mono">
                      Faculty / Head Desk
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        College / Institution Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.collegeName}
                        onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                        placeholder="e.g. Government College of Engineering, Pune"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        City / Town *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Pune / Nagpur / Nashik"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        District (Maharashtra) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        placeholder="e.g. Chhatrapati Sambhajinagar"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        Faculty Coordinator Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.coordinatorName}
                        onChange={(e) => setFormData({ ...formData, coordinatorName: e.target.value })}
                        placeholder="e.g. Prof. Rajesh Shinde"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        Designation / Department
                      </label>
                      <input
                        type="text"
                        value={formData.coordinatorDesignation}
                        onChange={(e) => setFormData({ ...formData, coordinatorDesignation: e.target.value })}
                        placeholder="e.g. Head, IIC / Dept of IT"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="coordinator@college.ac.in"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98000 00000"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-[11px] font-medium text-[#C4CFDD]">
                        Areas of Innovation Interest
                      </label>
                      <input
                        type="text"
                        value={formData.areaOfInterest}
                        onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                        placeholder="e.g. Embedded hardware, sustainable materials, healthcare"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="college-consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 rounded bg-[#041126] border-[#18335D] text-[#D4AF5A] focus:ring-[#D4AF5A]"
                    />
                    <label htmlFor="college-consent" className="text-[11px] text-[#68758A] leading-relaxed">
                      I confirm that I represent this institution and agree to receive official competition communication and outreach resources from Chetana’s CiEL.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 rounded-lg text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-md shadow-[#D4AF5A]/15 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Recording Interest...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit College Expression of Interest</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
