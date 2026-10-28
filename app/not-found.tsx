import Link from 'next/link';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[65vh] px-4 py-16 bg-ambient-navy text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 flex items-center justify-center mx-auto text-[#D4AF5A]">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
            Page Not Found · 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#F7F4EC]">
            Lost in the Innovation Journey?
          </h1>
          <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
            The page or official announcement you are looking for does not exist, has been archived, or may be undergoing administrative review.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-md shadow-[#D4AF5A]/15 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-medium text-[#C4CFDD] hover:text-[#F7F4EC] bg-[#0A1E3D] border border-[#D4AF5A]/20 hover:border-[#D4AF5A]/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse FAQs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
