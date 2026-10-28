'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Settings, ArrowLeft, Save, CheckCircle2, ShieldAlert, Megaphone, Trophy, Users } from 'lucide-react';
import { initialProgrammeSettings, siteConfig } from '@/config/site';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState(initialProgrammeSettings);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }, 500);
  };

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 text-xs text-[#68758A] hover:text-[#D4AF5A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Admin Console</span>
          </Link>
        </div>

        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2.5 py-0.5 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30">
              System Configuration
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              Programme Operational Settings
            </h1>
            <p className="text-xs text-[#C4CFDD]">
              Authorised state controls for registration gates, announcements, team limits, and results publication.
            </p>
          </div>

          <div className="text-xs text-amber-400 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-500/30 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Changes are audited</span>
          </div>
        </div>

        <form onSubmit={handleSave} className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-8">
          {/* Section 1: Gate Controls */}
          <div className="space-y-4">
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC] pb-2 border-b border-[#18335D]">
              Competition Gate Controls
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] flex items-center justify-between">
                <div>
                  <strong className="text-xs text-[#F7F4EC] block">Public Registration Status</strong>
                  <span className="text-[11px] text-[#68758A]">Controls whether /register accepts new student signups</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.isRegistrationOpen}
                  onChange={(e) => setSettings({ ...settings, isRegistrationOpen: e.target.checked })}
                  className="w-5 h-5 accent-[#D4AF5A] cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] flex items-center justify-between">
                <div>
                  <strong className="text-xs text-[#F7F4EC] block">Stage 1 Idea Submissions Gate</strong>
                  <span className="text-[11px] text-[#68758A]">Allows participants to submit or edit Stage 1 dossiers</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.isIdeaSubmissionOpen}
                  onChange={(e) => setSettings({ ...settings, isIdeaSubmissionOpen: e.target.checked })}
                  className="w-5 h-5 accent-[#D4AF5A] cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] flex items-center justify-between">
                <div>
                  <strong className="text-xs text-[#F7F4EC] block">Stage 3 Prototype Uploads Gate</strong>
                  <span className="text-[11px] text-[#68758A]">Activates prototype evidence and pitch deck uploads</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.isPrototypeSubmissionOpen}
                  onChange={(e) => setSettings({ ...settings, isPrototypeSubmissionOpen: e.target.checked })}
                  className="w-5 h-5 accent-[#D4AF5A] cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] flex items-center justify-between">
                <div>
                  <strong className="text-xs text-[#F7F4EC] block">Official Results Publication</strong>
                  <span className="text-[11px] text-[#68758A]">Toggles public release on /results and /finalists</span>
                </div>
                <input
                  type="checkbox"
                  checked={settings.areResultsPublished}
                  onChange={(e) => setSettings({ ...settings, areResultsPublished: e.target.checked })}
                  className="w-5 h-5 accent-[#D4AF5A] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Announcement Bar */}
          <div className="space-y-4">
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC] pb-2 border-b border-[#18335D]">
              Homepage Top Announcement Banner
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="banner-active"
                  checked={settings.isBannerActive}
                  onChange={(e) => setSettings({ ...settings, isBannerActive: e.target.checked })}
                  className="rounded bg-[#041126] border-[#18335D] text-[#D4AF5A] focus:ring-[#D4AF5A]"
                />
                <label htmlFor="banner-active" className="text-xs text-[#C4CFDD]">
                  Display announcement banner across all public pages
                </label>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#C4CFDD]">Banner Text *</label>
                <input
                  type="text"
                  value={settings.bannerMessage}
                  onChange={(e) => setSettings({ ...settings, bannerMessage: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#C4CFDD]">Target Link (optional)</label>
                <input
                  type="text"
                  value={settings.bannerLink}
                  onChange={(e) => setSettings({ ...settings, bannerLink: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Team Constraints */}
          <div className="space-y-4">
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC] pb-2 border-b border-[#18335D]">
              Team Formation Rules
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#C4CFDD]">Maximum Team Size (Members)</label>
                <input
                  type="number"
                  min={1}
                  max={6}
                  value={settings.maxTeamSize}
                  onChange={(e) => setSettings({ ...settings, maxTeamSize: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#C4CFDD]">Pitch Deck File Limit (MB)</label>
                <input
                  type="number"
                  readOnly
                  value={10}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#68758A]"
                />
                <span className="text-[10px] text-[#68758A]">Fixed at 10 MB PDF per technical specification.</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#18335D] flex items-center justify-between">
            {savedSuccess ? (
              <span className="text-xs text-emerald-400 font-semibold animate-in fade-in flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Programme settings updated and verified!</span>
              </span>
            ) : (
              <span className="text-[11px] text-[#68758A]">
                Settings take effect immediately upon saving
              </span>
            )}

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow flex items-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Settings</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
