'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Search,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  CreditCard,
  Calendar,
  Users,
  Trophy,
  ArrowRight,
  Mail,
} from 'lucide-react';
import { faqList } from '@/config/site';

const categories = [
  { id: 'All', label: 'All Questions', icon: HelpCircle },
  { id: 'Teams & Registration', label: 'Registration & Fees', icon: CreditCard },
  { id: 'Eligibility', label: 'Eligibility & Rules', icon: Users },
  { id: 'Submissions & Prototype', label: 'Stages & Bootcamp', icon: Calendar },
  { id: 'Awards & Venue', label: 'Awards & Finale', icon: Trophy },
  { id: 'Mentorship & Judging', label: 'Mentorship & Impact', icon: Sparkles },
];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqList.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq-section" className="py-20 bg-[#071A36] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/80 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            Frequently Asked <span className="text-[#D4AF5A]">Questions</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#C4CFDD] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about participating in ESSENCE: eligibility criteria, registration fees,
            payment confirmation, key deadlines, bootcamp details, and the Grand Finale.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="relative">
            <Search className="w-4 h-4 text-[#68758A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by keyword, fee, date, eligibility, or rule..."
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm rounded-xl bg-[#041126] border border-[#18335D] text-[#F7F4EC] placeholder-[#68758A] focus:border-[#D4AF5A] focus:outline-none transition-colors"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#D4AF5A] text-[#041126] font-bold shadow-md shadow-[#D4AF5A]/20 scale-105'
                      : 'bg-[#041126] text-[#C4CFDD] hover:text-[#F7F4EC] border border-[#18335D] hover:border-[#D4AF5A]/30'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Payment Confirmation Highlight Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#102D5C]/40 border border-[#D4AF5A]/30 max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#D4AF5A]/15 text-[#D4AF5A] border border-[#D4AF5A]/30 flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div className="space-y-0.5 text-xs text-[#C4CFDD] leading-relaxed">
            <strong className="text-[#F0D99A] block font-semibold">Payment Confirmation Guarantee:</strong>
            <span>
              A confirmation email will be sent once your payment has been successfully verified by our accounts desk.
            </span>
          </div>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="py-10 text-center text-xs text-[#68758A] royal-card rounded-xl p-8">
              No matching questions found for &ldquo;{search}&rdquo;. Try another search term or explore all categories.
            </div>
          ) : (
            filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="royal-card rounded-xl overflow-hidden transition-all duration-200 border-[#18335D]/80 hover:border-[#D4AF5A]/40"
                >
                  <button
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#102D5C]/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2 py-0.5 rounded bg-[#102D5C] border border-[#D4AF5A]/20 shrink-0 hidden sm:inline-block">
                        {item.category}
                      </span>
                      <span className="font-serif text-sm sm:text-base font-medium text-[#F7F4EC]">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D4AF5A] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#C4CFDD] leading-relaxed border-t border-[#18335D]/50 animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA Help */}
        <div className="pt-4 text-center max-w-md mx-auto space-y-3">
          <p className="text-xs text-[#68758A]">
            Have an unanswered question? Contact our event coordinators Prem Sharma (+91 9833883098) or Akshay Dubey (+91 8451942277).
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Register Your Team</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF5A] hover:text-[#F0D99A] transition-colors"
            >
              <span>Contact Organisers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
