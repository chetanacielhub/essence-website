'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, ShieldCheck, User } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleMode, setRoleMode] = useState<'participant' | 'admin'>('participant');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (roleMode === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
    }, 600);
  };

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-20 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Lock className="w-3.5 h-3.5" />
            <span>Secure Authentication</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
            Sign In to <span className="text-[#D4AF5A]">ESSENCE</span>
          </h1>
          <p className="text-xs text-[#C4CFDD]">
            Access your competition dashboard, team management, and idea submissions.
          </p>
        </div>

        {/* Login Card */}
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-6">
          {/* Role Mode Selector */}
          <div className="grid grid-cols-2 gap-2 p-1 rounded-lg bg-[#041126] border border-[#18335D]">
            <button
              type="button"
              onClick={() => setRoleMode('participant')}
              className={`py-1.5 text-xs font-semibold rounded-md transition-colors ${
                roleMode === 'participant'
                  ? 'bg-[#102D5C] text-[#F0D99A] border border-[#D4AF5A]/30 shadow'
                  : 'text-[#68758A] hover:text-[#C4CFDD]'
              }`}
            >
              Participant Portal
            </button>
            <button
              type="button"
              onClick={() => setRoleMode('admin')}
              className={`py-1.5 text-xs font-semibold rounded-md transition-colors ${
                roleMode === 'admin'
                  ? 'bg-[#102D5C] text-[#F0D99A] border border-[#D4AF5A]/30 shadow'
                  : 'text-[#68758A] hover:text-[#C4CFDD]'
              }`}
            >
              Organiser Desk
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-[#C4CFDD]">Email Address *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#68758A] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={roleMode === 'admin' ? 'admin@cielhub.org' : 'student@college.ac.in'}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-medium text-[#C4CFDD]">Password *</label>
                <a href="#" className="text-[10px] text-[#D4AF5A] hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#68758A] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors flex items-center justify-center gap-2 shadow mt-2"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In as {roleMode === 'admin' ? 'Organiser' : 'Participant'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          <div className="pt-4 border-t border-[#18335D] text-center text-xs text-[#68758A]">
            Don&apos;t have an account yet?{' '}
            <Link href="/register" className="text-[#D4AF5A] font-semibold hover:underline">
              Register for ESSENCE 2027
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
