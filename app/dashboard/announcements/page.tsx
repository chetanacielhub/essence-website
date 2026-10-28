'use client';

import React from 'react';
import Link from 'next/link';
import { Megaphone, ArrowLeft, Calendar, Pin, ShieldCheck } from 'lucide-react';
import { mockAnnouncements } from '@/lib/data/mockData';

export default function ParticipantAnnouncementsPage() {
  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs text-[#68758A] hover:text-[#D4AF5A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Dashboard</span>
          </Link>
        </div>

        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-2">
          <div className="flex items-center gap-2">
            <Megaphone className="w-4 h-4 text-[#D4AF5A]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A]">
              Official Circulars &amp; Alerts
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
            Participant Announcements
          </h1>
          <p className="text-xs text-[#C4CFDD]">
            Broadcast updates from Chetana’s CiEL regarding submission deadlines, mentor bootcamps, and screening releases.
          </p>
        </div>

        <div className="space-y-4">
          {mockAnnouncements.map((ann) => (
            <div
              key={ann.id}
              className="royal-card p-6 rounded-2xl border-[#D4AF5A]/25 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {ann.isPinned && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#102D5C] text-[#F0D99A] border border-[#D4AF5A]/30">
                      <Pin className="w-3 h-3 text-[#D4AF5A]" />
                      Pinned
                    </span>
                  )}
                  <span className="text-[10px] uppercase font-bold text-[#D4AF5A] bg-[#041126] px-2 py-0.5 rounded border border-[#18335D]">
                    {ann.category}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#68758A]">
                  <Calendar className="w-3 h-3 text-[#D4AF5A]" />
                  <span>{new Date(ann.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>

              <h2 className="font-serif text-lg font-medium text-[#F7F4EC]">
                {ann.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                {ann.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
