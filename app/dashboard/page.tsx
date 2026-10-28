'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  FileText,
  Clock,
  CheckCircle2,
  ChevronRight,
  Megaphone,
} from 'lucide-react';
import { mockAnnouncements } from '@/lib/data/mockData';

export default function DashboardPage() {
  const [user] = useState<{
    fullName: string;
    collegeName: string;
    teamName: string;
    referenceNumber: string;
  }>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('essence_current_user');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          return {
            fullName: parsed.fullName || 'Atharva Kulkarni',
            collegeName: parsed.collegeName || 'VJTI Mumbai',
            teamName: parsed.teamName || 'Team AeroInnovators',
            referenceNumber: parsed.referenceNumber || 'ESS-2027-642190',
          };
        } catch {
          // Keep defaults
        }
      }
    }
    return {
      fullName: 'Atharva Kulkarni',
      collegeName: 'Veermata Jijabai Technological Institute (VJTI)',
      teamName: 'Team AeroInnovators',
      referenceNumber: 'ESS-2027-642190',
    };
  });

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Card */}
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2.5 py-0.5 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30">
                Participant Portal
              </span>
              <span className="font-mono text-xs text-[#68758A]">
                Ref: {user.referenceNumber}
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              Welcome, {user.fullName}
            </h1>
            <p className="text-xs text-[#C4CFDD]">
              {user.collegeName} · {user.teamName}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/dashboard/submissions"
              className="px-4 py-2 text-xs font-bold rounded-lg text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Submit Stage 1 Idea</span>
            </Link>

            <Link
              href="/dashboard/team"
              className="px-4 py-2 text-xs font-semibold rounded-lg text-[#C4CFDD] bg-[#0A1E3D] border border-[#18335D] hover:text-[#F7F4EC] transition-colors flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5 text-[#D4AF5A]" />
              <span>Manage Team</span>
            </Link>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Status Timeline Card */}
            <div className="royal-card p-6 rounded-2xl border-[#D4AF5A]/25 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#18335D]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF5A]" />
                  <h2 className="font-serif text-lg font-medium text-[#F7F4EC]">
                    Your Competition Progression
                  </h2>
                </div>
                <span className="text-xs text-[#F0D99A] font-semibold bg-[#102D5C] px-2.5 py-0.5 rounded-full border border-[#D4AF5A]/30">
                  Stage 2 Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#041126]/60 border border-emerald-500/30 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">Stage 1: Registration</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <strong className="text-[#F7F4EC] block">Verified</strong>
                  <p className="text-[#68758A] text-[11px]">Participant and team credentials confirmed.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#D4AF5A]/50 space-y-1.5 shadow-sm shadow-[#D4AF5A]/10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#D4AF5A] uppercase">Stage 2: Idea Submission</span>
                    <Clock className="w-4 h-4 text-[#D4AF5A] animate-pulse" />
                  </div>
                  <strong className="text-[#F7F4EC] block">Draft in Progress</strong>
                  <p className="text-[#C4CFDD] text-[11px]">Submit before the closing date.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-1.5 text-[#68758A]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase">Stage 3: Prototype</span>
                    <span className="text-[10px] font-mono">Upcoming</span>
                  </div>
                  <strong className="text-[#68758A] block">Pending Shortlist</strong>
                  <p className="text-[#68758A] text-[11px]">Subject to Stage 2 review outcome.</p>
                </div>
              </div>
            </div>

            {/* Quick Actions & Submission Banner */}
            <div className="royal-card p-6 rounded-2xl border-[#D4AF5A]/25 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#071A36] to-[#0A1E3D]">
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-medium text-[#F7F4EC]">
                  Stage 1 Idea Submission Form
                </h3>
                <p className="text-xs text-[#C4CFDD]">
                  Document problem context, proposed technical solution, and initial prototype plan.
                </p>
              </div>
              <Link
                href="/dashboard/submissions"
                className="px-5 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shrink-0 shadow"
              >
                Open Submission Form
              </Link>
            </div>

            {/* Announcements Card */}
            <div className="royal-card p-6 rounded-2xl border-[#D4AF5A]/25 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#18335D]">
                <div className="flex items-center gap-2">
                  <Megaphone className="w-4 h-4 text-[#D4AF5A]" />
                  <h2 className="font-serif text-lg font-medium text-[#F7F4EC]">
                    Official Competition Updates
                  </h2>
                </div>
                <Link
                  href="/dashboard/announcements"
                  className="text-xs text-[#D4AF5A] hover:underline"
                >
                  View all ({mockAnnouncements.length})
                </Link>
              </div>

              <div className="space-y-3">
                {mockAnnouncements.slice(0, 2).map((ann) => (
                  <div
                    key={ann.id}
                    className="p-3.5 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-[#D4AF5A]">
                        {ann.category}
                      </span>
                      <span className="text-[10px] text-[#68758A]">
                        {new Date(ann.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xs font-semibold text-[#F7F4EC]">
                      {ann.title}
                    </h3>
                    <p className="text-[11px] text-[#C4CFDD]">
                      {ann.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Team Snapshot Card */}
            <div className="royal-card p-6 rounded-2xl border-[#D4AF5A]/25 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#18335D]">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D4AF5A]" />
                  <h3 className="font-serif text-base font-medium text-[#F7F4EC]">
                    My Team Roster
                  </h3>
                </div>
                <span className="text-[10px] text-[#D4AF5A] font-bold bg-[#102D5C] px-2 py-0.5 rounded border border-[#D4AF5A]/30">
                  2/4 Members
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-[#041126]/60 border border-[#18335D] flex items-center justify-between">
                  <div>
                    <strong className="text-[#F7F4EC] block">{user.fullName}</strong>
                    <span className="text-[10px] text-[#68758A]">Team Leader</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Leader
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#041126]/60 border border-[#18335D] flex items-center justify-between">
                  <div>
                    <strong className="text-[#F7F4EC] block">Rohit Deshmukh</strong>
                    <span className="text-[10px] text-[#68758A]">Member · Electronics</span>
                  </div>
                  <span className="text-[10px] text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                    Active
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/dashboard/team"
                  className="w-full py-2 rounded-lg text-xs font-semibold text-[#D4AF5A] bg-[#0A1E3D] border border-[#D4AF5A]/20 hover:border-[#D4AF5A] transition-colors flex items-center justify-center gap-1"
                >
                  <span>Invite Teammates via Code</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Deadlines Widget */}
            <div className="royal-card p-6 rounded-2xl border-[#D4AF5A]/25 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#18335D]">
                <Clock className="w-4 h-4 text-[#D4AF5A]" />
                <h3 className="font-serif text-base font-medium text-[#F7F4EC]">
                  Upcoming Milestones
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#F7F4EC]">Stage 1 Idea Deadline</span>
                    <span className="text-[10px] text-[#D4AF5A] font-mono">Phase 1 Target</span>
                  </div>
                  <p className="text-[11px] text-[#68758A]">All draft submissions must be marked final.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#F7F4EC]">Screening Results Release</span>
                    <span className="text-[10px] text-[#68758A] font-mono">Phase 2 Target</span>
                  </div>
                  <p className="text-[11px] text-[#68758A]">Shortlist of 500 bootcamp qualifiers announced.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
