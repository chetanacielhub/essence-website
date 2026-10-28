'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft, Filter, Search, ShieldCheck, CheckCircle2, UserCheck, Eye, Layers } from 'lucide-react';
import { mockShowcaseProjects } from '@/lib/data/mockData';
import { innovationTracks } from '@/config/site';
import { Submission, SubmissionStatus } from '@/types';

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>(mockShowcaseProjects);
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [search, setSearch] = useState('');
  const [inspectingSub, setInspectingSub] = useState<Submission | null>(null);

  const filtered = submissions.filter((s) => {
    const matchesTrack = selectedTrack === 'all' || s.trackId === selectedTrack;
    const matchesStatus = selectedStatus === 'all' || s.status === selectedStatus;
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.referenceNumber.toLowerCase().includes(search.toLowerCase()) ||
      s.institutionName.toLowerCase().includes(search.toLowerCase()) ||
      s.teamName?.toLowerCase().includes(search.toLowerCase());
    return matchesTrack && matchesStatus && matchesSearch;
  });

  const updateStatus = (id: string, newStatus: SubmissionStatus) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
    );
    if (inspectingSub && inspectingSub.id === id) {
      setInspectingSub({ ...inspectingSub, status: newStatus });
    }
  };

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
              Evaluation Workflow
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              Idea &amp; Prototype Submissions
            </h1>
            <p className="text-xs text-[#C4CFDD]">
              Managing proposal lifecycles, reviewer allocations, and state advancement decisions.
            </p>
          </div>

          <div className="text-xs text-[#F0D99A] font-semibold bg-[#102D5C] px-3 py-1.5 rounded-lg border border-[#D4AF5A]/30">
            {submissions.length} Total Submissions in Pipeline
          </div>
        </div>

        {/* Filters */}
        <div className="royal-card p-4 rounded-xl border-[#D4AF5A]/25 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#68758A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, reference number, college, or team..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              className="w-full md:w-48 px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
            >
              <option value="all">All Tracks</option>
              {innovationTracks.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full md:w-40 px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="submitted">Submitted</option>
              <option value="under_review">Under Review</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="finalist">Finalist</option>
              <option value="winner">Winner</option>
            </select>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="royal-card rounded-2xl border-[#D4AF5A]/25 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0A1E3D] text-[#D4AF5A] font-semibold border-b border-[#18335D]">
                <tr>
                  <th className="p-4">Submission Ref &amp; Title</th>
                  <th className="p-4">Track</th>
                  <th className="p-4">Institution &amp; Team</th>
                  <th className="p-4">Stage</th>
                  <th className="p-4">Current Status</th>
                  <th className="p-4 text-right">Workflow Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#18335D]">
                {filtered.map((sub) => (
                  <tr key={sub.id} className="hover:bg-[#102D5C]/30 transition-colors">
                    <td className="p-4 max-w-xs">
                      <div className="font-mono text-[10px] text-[#D4AF5A] font-bold">
                        {sub.referenceNumber}
                      </div>
                      <div className="font-semibold text-[#F7F4EC] line-clamp-1 pt-0.5">
                        {sub.title}
                      </div>
                    </td>
                    <td className="p-4 text-[#C4CFDD]">{sub.trackName}</td>
                    <td className="p-4">
                      <div className="text-[#F7F4EC]">{sub.institutionName}</div>
                      <div className="text-[10px] text-[#68758A]">{sub.teamName}</div>
                    </td>
                    <td className="p-4 text-[#C4CFDD]">{sub.developmentStage}</td>
                    <td className="p-4">
                      <select
                        value={sub.status}
                        onChange={(e) => updateStatus(sub.id, e.target.value as SubmissionStatus)}
                        className="px-2 py-1 text-[11px] rounded bg-[#0A1E3D] border border-[#D4AF5A]/40 text-[#F0D99A] font-semibold focus:outline-none"
                      >
                        <option value="submitted">Submitted</option>
                        <option value="under_review">Under Review</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="prototype_stage">Prototype Stage</option>
                        <option value="finalist">Finalist</option>
                        <option value="winner">Winner</option>
                        <option value="not_selected">Not Selected</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => setInspectingSub(sub)}
                        className="inline-flex items-center gap-1 text-[#D4AF5A] hover:underline font-semibold"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Dossier</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Inspector */}
        {inspectingSub && (
          <div
            className="fixed inset-0 z-50 bg-[#041126]/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setInspectingSub(null)}
          >
            <div
              className="royal-card bg-[#071A36] border-[#D4AF5A]/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-[#18335D] pb-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#D4AF5A]">
                    {inspectingSub.referenceNumber}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#F7F4EC] pt-1">
                    {inspectingSub.title}
                  </h3>
                  <div className="text-xs text-[#F0D99A] pt-1">
                    {inspectingSub.institutionName} · {inspectingSub.teamName}
                  </div>
                </div>
                <button
                  onClick={() => setInspectingSub(null)}
                  className="text-[#68758A] hover:text-[#F7F4EC] text-lg font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#C4CFDD]">
                <div>
                  <strong className="text-[#F7F4EC] block text-xs uppercase mb-1">Problem Statement:</strong>
                  <p>{inspectingSub.problemStatement}</p>
                </div>
                <div>
                  <strong className="text-[#F7F4EC] block text-xs uppercase mb-1">Proposed Solution:</strong>
                  <p>{inspectingSub.solutionDescription}</p>
                </div>
                <div>
                  <strong className="text-[#F7F4EC] block text-xs uppercase mb-1">Impact Description:</strong>
                  <p>{inspectingSub.impactDescription}</p>
                </div>
                <div>
                  <strong className="text-[#F7F4EC] block text-xs uppercase mb-1">Prototype Progress:</strong>
                  <p>{inspectingSub.prototypePlan}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#18335D] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#68758A]">Status:</span>
                  <span className="text-xs font-bold text-[#F0D99A] capitalize">
                    {inspectingSub.status.replace('_', ' ')}
                  </span>
                </div>
                <button
                  onClick={() => {
                    updateStatus(inspectingSub.id, 'shortlisted');
                    alert(`Submission ${inspectingSub.referenceNumber} marked as Shortlisted.`);
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A]"
                >
                  Advance to Shortlist
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
