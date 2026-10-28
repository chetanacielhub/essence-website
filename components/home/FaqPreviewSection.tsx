'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { faqList } from '@/config/site';

export default function FaqPreviewSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const previewItems = faqList.slice(0, 5);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#071A36] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
            Clear Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
            Essential information regarding eligibility, team formation, intellectual property rights,
            and prototype submissions.
          </p>
        </div>

        <div className="space-y-3">
          {previewItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="royal-card rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#102D5C]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2 py-0.5 rounded bg-[#102D5C] border border-[#D4AF5A]/20">
                      {item.category}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-medium text-[#F7F4EC]">
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
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#C4CFDD] leading-relaxed border-t border-[#18335D]/50 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D4AF5A] hover:text-[#F0D99A] group"
          >
            <span>View all questions &amp; complete competition rules</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
