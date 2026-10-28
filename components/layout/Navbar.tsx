'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, User, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#041126]/95 backdrop-blur-md border-b border-[#D4AF5A]/25 shadow-lg shadow-[#041126]/80'
          : 'bg-[#041126]/80 backdrop-blur-sm border-b border-[#D4AF5A]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo / Text Treatment */}
          <Link
            href="/"
            className="flex flex-col group transition-transform duration-200"
            aria-label="ESSENCE 2027 Homepage - Chetana's CiEL"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#D4AF5A] uppercase">
                Chetana&apos;s CiEL Presents
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#F7F4EC] group-hover:text-[#F0D99A] transition-colors">
                ESSENCE <span className="text-[#D4AF5A] italic">2027</span>
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-wider text-[#68758A] uppercase font-medium">
              From Ideas to Impact
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? 'text-[#F0D99A] font-semibold'
                      : 'text-[#C4CFDD] hover:text-[#F7F4EC] hover:bg-[#102D5C]/30'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D4AF5A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right-Side Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#C4CFDD] hover:text-[#F7F4EC] transition-colors rounded-md hover:bg-[#102D5C]/30 border border-transparent hover:border-[#D4AF5A]/20"
            >
              <User className="w-3.5 h-3.5 text-[#D4AF5A]" />
              <span>Login</span>
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-md shadow-[#D4AF5A]/15 transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Register Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/register"
              className="px-3 py-1.5 text-xs font-semibold rounded text-[#041126] bg-[#D4AF5A]"
            >
              Register
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={isOpen}
              className="p-2 rounded-md text-[#C4CFDD] hover:text-[#F7F4EC] hover:bg-[#102D5C]/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF5A]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#041126]/98 border-b border-[#D4AF5A]/20 px-4 pt-3 pb-6 space-y-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-1 pb-3 border-b border-[#18335D]/60">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 text-xs font-medium rounded-md ${
                    isActive
                      ? 'text-[#F0D99A] bg-[#102D5C]/50 font-semibold border-l-2 border-[#D4AF5A]'
                      : 'text-[#C4CFDD] hover:bg-[#102D5C]/30 hover:text-[#F7F4EC]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <div className="flex gap-2">
              <Link
                href="/login"
                className="flex-1 text-center py-2 text-xs font-medium text-[#C4CFDD] bg-[#0A1E3D] border border-[#D4AF5A]/20 rounded-md hover:bg-[#102D5C]/40"
              >
                Sign In
              </Link>
              <Link
                href="/admin"
                className="px-3 py-2 text-xs font-medium text-[#D4AF5A] bg-[#0A1E3D] border border-[#D4AF5A]/20 rounded-md hover:bg-[#102D5C]/40 flex items-center justify-center gap-1"
                title="Admin Portal"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin</span>
              </Link>
            </div>
            <Link
              href="/register"
              className="text-center py-2.5 text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] rounded-md shadow"
            >
              Register for ESSENCE 2027
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
