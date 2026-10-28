'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ExternalLink, Building, Tag, ShieldCheck, Filter, ArrowRight } from 'lucide-react';
import { mockShowcaseProjects } from '@/lib/data/mockData';
import { innovationTracks } from '@/config/site';
import { Submission } from '@/types';

export default function ShowcasePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState<Submission | null>(null);

  const filtered = mockShowcaseProjects.filter((p) => {
    const matchesTrack = selectedTrack === 'all' || p.trackId === selectedTrack;
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.institutionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.problemStatement.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTrack && matchesSearch;
  });

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/60 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Approved Innovations</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Prototype <span className="text-[#D4AF5A]">Showcase</span>
          </h1>
          <p className="text-sm sm:text-base text-[#C4CFDD] leading-relaxed">
            Exemplar undergraduate prototypes addressing acute challenges across Maharashtra.
            Published with official vetting and participant consent.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="royal-card p-4 rounded-xl border-[#D4AF5A]/30 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#68758A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by prototype title, college, or technology..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-[#D4AF5A] shrink-0" />
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              className="w-full md:w-64 px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
            >
              <option value="all">All Innovation Tracks</option>
              {innovationTracks.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="col-span-full py-16 text-center space-y-3">
              <p className="text-sm text-[#68758A]">No approved prototypes matched your current search filters.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTrack('all');
                }}
                className="text-xs text-[#D4AF5A] underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filtered.map((project) => (
              <div
                key={project.id}
                className="royal-card rounded-xl p-6 flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all group cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2.5 py-0.5 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30">
                      {project.trackName}
                    </span>
                    <span className="text-[10px] font-mono text-[#68758A]">
                      {project.referenceNumber}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-serif text-lg font-medium text-[#F7F4EC] group-hover:text-[#F0D99A] transition-colors leading-snug">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-1.5 text-xs text-[#D4AF5A]/90 font-medium">
                      <Building className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{project.institutionName}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#C4CFDD] line-clamp-3 leading-relaxed">
                    {project.solutionDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-[#68758A]">
                    <span className="px-2 py-0.5 rounded bg-[#102D5C]/50 border border-[#18335D] text-[#C4CFDD]">
                      Stage: {project.developmentStage}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#102D5C]/50 border border-[#18335D] text-[#C4CFDD]">
                      Team: {project.teamName}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#18335D]/70 mt-6 flex items-center justify-between text-xs">
                  <span className="text-[#D4AF5A] group-hover:underline text-[11px] font-semibold">
                    View Prototype Dossier
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF5A] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal View for Project Dossier */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 bg-[#041126]/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="royal-card bg-[#071A36] border-[#D4AF5A]/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-[#18335D] pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] block">
                    {activeModalProject.trackName} · {activeModalProject.referenceNumber}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#F7F4EC] pt-1">
                    {activeModalProject.title}
                  </h3>
                  <div className="text-xs text-[#F0D99A] pt-1">
                    {activeModalProject.institutionName} · {activeModalProject.teamName}
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="text-[#68758A] hover:text-[#F7F4EC] text-lg font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
                <div>
                  <strong className="text-[#F7F4EC] block text-xs uppercase tracking-wider mb-1">
                    Problem Statement:
                  </strong>
                  <p>{activeModalProject.problemStatement}</p>
                </div>

                <div>
                  <strong className="text-[#F7F4EC] block text-xs uppercase tracking-wider mb-1">
                    Engineered Solution:
                  </strong>
                  <p>{activeModalProject.solutionDescription}</p>
                </div>

                <div>
                  <strong className="text-[#F7F4EC] block text-xs uppercase tracking-wider mb-1">
                    Demonstrable Impact:
                  </strong>
                  <p>{activeModalProject.impactDescription}</p>
                </div>

                <div>
                  <strong className="text-[#F7F4EC] block text-xs uppercase tracking-wider mb-1">
                    Prototype Development Progress:
                  </strong>
                  <p>{activeModalProject.prototypePlan}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#18335D] flex items-center justify-between">
                <span className="text-xs text-[#68758A]">
                  Verified for ESSENCE 2027 Public Showcase
                </span>
                {activeModalProject.prototypeUrl && (
                  <a
                    href={activeModalProject.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A]"
                  >
                    <span>External Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
