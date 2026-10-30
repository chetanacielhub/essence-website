'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { faqList } from '@/config/site';

const categories = [
  'All',
  'Eligibility',
  'Teams & Registration',
  'Submissions & Prototype',
  'Mentorship & Judging',
  'Awards & Venue',
] as const;

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'faq-1': true, 'faq-3': true });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqList.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Official Information Desk</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Frequently Asked <span className="text-[#D4AF5A]">Questions</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            Everything you need to know about participating in ESSENCE: from eligibility and team
            guidelines to bootcamp schedules and the Grand Finale.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="relative">
            <Search className="w-4 h-4 text-[#68758A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by topic, keyword, or rule..."
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm rounded-xl bg-[#071A36] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#D4AF5A] text-[#041126] font-bold shadow'
                    : 'bg-[#0A1E3D] text-[#C4CFDD] hover:text-[#F7F4EC] border border-[#18335D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#68758A] royal-card rounded-xl p-8">
              No answers matched your query. Contact our coordinator desk directly.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="royal-card rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#102D5C]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2 py-0.5 rounded bg-[#102D5C] border border-[#D4AF5A]/20 shrink-0">
                        {faq.category}
                      </span>
                      <span className="font-serif text-base sm:text-lg font-medium text-[#F7F4EC]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D4AF5A] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#C4CFDD] leading-relaxed border-t border-[#18335D]/50 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="royal-card-static p-8 rounded-2xl border-[#D4AF5A]/30 max-w-4xl mx-auto text-center space-y-3">
          <h3 className="font-serif text-xl font-medium text-[#F7F4EC]">
            Still Have an Unanswered Question?
          </h3>
          <p className="text-xs text-[#C4CFDD] max-w-md mx-auto">
            Our student coordinator desk is available to assist you with registration queries,
            team eligibility, and submission guidance.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors"
            >
              <span>Contact Organiser Helpdesk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
