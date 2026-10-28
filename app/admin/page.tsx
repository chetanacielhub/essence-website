'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  FileText,
  School,
  CheckCircle2,
  Clock,
  Settings,
  ShieldCheck,
  TrendingUp,
  Download,
  Award,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { mockShowcaseProjects, mockInstitutions } from '@/lib/data/mockData';
import { siteConfig } from '@/config/site';

export default function AdminDashboardPage() {
  const metrics = [
    { label: 'Registered Participants', value: '412', icon: Users, sub: 'Undergraduates enrolled', delta: '+28 today' },
    { label: 'Institutions Engaged', value: '38', icon: School, sub: 'Across 16 districts', delta: 'Target: 100+' },
    { label: 'Submissions Received', value: '184', icon: FileText, sub: 'Idea stage proposals', delta: '52 in review' },
    { label: 'Shortlisted for Bootcamp', value: '46', icon: CheckCircle2, sub: 'Target capacity: 500', delta: 'Stage 2' },
    { label: 'Prototype Submissions', value: '18', icon: Layers, sub: 'Working models uploaded', delta: 'Target: 300' },
    { label: 'Finalists Capacity', value: '50', icon: Award, sub: '100 Exhibition Stalls', delta: '₹5,00,000 Pool' },
  ];

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Admin Header */}
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2.5 py-0.5 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30">
                Organiser Command Portal
              </span>
              <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                Super Admin Access
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              ESSENCE 2027 Operations Console
            </h1>
            <p className="text-xs text-[#C4CFDD]">
              Presented by Chetana’s Centre for Innovation &amp; Entrepreneurship Learning (CiEL)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admin/submissions"
              className="px-4 py-2 text-xs font-bold rounded-lg text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
            >
              Review Submissions
            </Link>
            <Link
              href="/admin/settings"
              className="px-4 py-2 text-xs font-semibold rounded-lg text-[#C4CFDD] bg-[#0A1E3D] border border-[#18335D] hover:text-[#F7F4EC] transition-colors flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5 text-[#D4AF5A]" />
              <span>Programme Settings</span>
            </Link>
          </div>
        </div>

        {/* Operational KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="royal-card p-4 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between pb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">{m.delta}</span>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EC]">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-[#D4AF5A] pt-0.5 truncate">
                    {m.label}
                  </div>
                  <div className="text-[10px] text-[#68758A] pt-0.5 truncate">{m.sub}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Modules Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Link
            href="/admin/registrations"
            className="royal-card p-6 rounded-2xl hover:border-[#D4AF5A]/50 transition-all space-y-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC] group-hover:text-[#F0D99A]">
              Participant Database
            </h2>
            <p className="text-xs text-[#C4CFDD]">
              Search, filter by college or district, inspect verified credentials, and export authorised CSV datasets.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs text-[#D4AF5A] font-semibold">
              <span>Manage Registrations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/admin/submissions"
            className="royal-card p-6 rounded-2xl hover:border-[#D4AF5A]/50 transition-all space-y-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC] group-hover:text-[#F0D99A]">
              Submission Review
            </h2>
            <p className="text-xs text-[#C4CFDD]">
              Workflow pipeline for Stage 1 Ideas and Stage 3 Prototypes. Assign reviewers and advance finalists.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs text-[#D4AF5A] font-semibold">
              <span>View Submissions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/admin/reviewers"
            className="royal-card p-6 rounded-2xl hover:border-[#D4AF5A]/50 transition-all space-y-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC] group-hover:text-[#F0D99A]">
              Reviewers &amp; Scoring
            </h2>
            <p className="text-xs text-[#C4CFDD]">
              Assign submissions to evaluators, declare conflicts of interest, and track scoring completion rubrics.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs text-[#D4AF5A] font-semibold">
              <span>Manage Evaluators</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/admin/settings"
            className="royal-card p-6 rounded-2xl hover:border-[#D4AF5A]/50 transition-all space-y-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#102D5C] text-[#D4AF5A] flex items-center justify-center group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
              <Settings className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC] group-hover:text-[#F0D99A]">
              Programme Controls
            </h2>
            <p className="text-xs text-[#C4CFDD]">
              Toggle registration state, update announcement banners, edit team size limits, and control results publication.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs text-[#D4AF5A] font-semibold">
              <span>Configure Settings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>

        {/* Recent Submissions Queue */}
        <div className="royal-card p-6 rounded-2xl border-[#D4AF5A]/25 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#18335D]">
            <h2 className="font-serif text-lg font-medium text-[#F7F4EC]">
              Recent Submissions Awaiting Operational Review
            </h2>
            <Link href="/admin/submissions" className="text-xs text-[#D4AF5A] hover:underline">
              View all ({mockShowcaseProjects.length})
            </Link>
          </div>

          <div className="space-y-3">
            {mockShowcaseProjects.slice(0, 3).map((sub) => (
              <div
                key={sub.id}
                className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#D4AF5A]">{sub.referenceNumber}</span>
                    <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-[#102D5C] text-[#F0D99A]">
                      {sub.trackName}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#F7F4EC] pt-1">
                    {sub.title}
                  </h3>
                  <div className="text-[11px] text-[#68758A]">
                    {sub.institutionName} · Leader: {sub.submitterName}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#102D5C] text-[#F0D99A] border border-[#D4AF5A]/30 capitalize">
                    {sub.status.replace('_', ' ')}
                  </span>
                  <Link
                    href={`/admin/submissions?ref=${sub.referenceNumber}`}
                    className="text-xs font-semibold text-[#D4AF5A] hover:underline"
                  >
                    Review Dossier
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
