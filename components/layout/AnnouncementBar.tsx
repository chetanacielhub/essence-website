'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Megaphone, X, ArrowRight } from 'lucide-react';
import { initialProgrammeSettings } from '@/config/site';

export default function AnnouncementBar() {
  const [isDismissed, setIsDismissed] = useState(false);
  const settings = initialProgrammeSettings;

  if (isDismissed || !settings.isBannerActive || !settings.bannerMessage) {
    return null;
  }

  return (
    <aside
      aria-label="Official Announcement"
      className="bg-gradient-to-r from-[#0B2246] via-[#102D5C] to-[#0B2246] border-b border-[#D4AF5A]/30 text-[#F7F4EC] text-xs sm:text-sm py-2 px-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 justify-center text-center">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#D4AF5A]/20 text-[#D4AF5A] shrink-0">
            <Megaphone className="w-3 h-3" />
          </span>
          <span className="font-medium text-[#F0D99A] tracking-wide">
            {settings.bannerMessage}
          </span>
          {settings.bannerLink && (
            <Link
              href={settings.bannerLink}
              className="inline-flex items-center gap-1 text-[#F7F4EC] underline underline-offset-4 hover:text-[#D4AF5A] transition-colors ml-1 font-semibold shrink-0"
            >
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          aria-label="Dismiss announcement"
          className="text-[#68758A] hover:text-[#F7F4EC] transition-colors p-1 rounded hover:bg-[#18335D]/50 shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
