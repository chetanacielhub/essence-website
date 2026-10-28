'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log non-sensitive error metadata in development
    console.error('Handled application error:', error.message);
  }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh] px-4 py-16 bg-ambient-navy text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-950/40 border border-red-500/30 flex items-center justify-center mx-auto text-red-400">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
            Application Notice
          </span>
          <h2 className="font-serif text-3xl font-medium text-[#F7F4EC]">
            An Unexpected Problem Occurred
          </h2>
          <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
            The requested operation could not be completed. Your data has not been lost. Please attempt to reload the view or return to the main portal.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-md shadow-[#D4AF5A]/15 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-medium text-[#C4CFDD] hover:text-[#F7F4EC] bg-[#0A1E3D] border border-[#D4AF5A]/20 hover:border-[#D4AF5A]/40 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
