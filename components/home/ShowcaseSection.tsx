'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Building, ArrowRight } from 'lucide-react';
import { mockShowcaseProjects } from '@/lib/data/mockData';
import { innovationTracks } from '@/config/site';

export default function ShowcaseSection() {
  const [selectedTrack, setSelectedTrack] = useState<string>('all');

  const filteredProjects = selectedTrack === 'all'
    ? mockShowcaseProjects
    : mockShowcaseProjects.filter((p) => p.trackId === selectedTrack);

  return (
    <section className="py-20 bg-[#041126] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
              Undergraduate Engineering in Action
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
              Approved Prototype Showcase
            </h2>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              Explore exemplar student solutions tackling regional challenges across Maharashtra.
              Displayed with participant consent and official vetting.
            </p>
          </div>

          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D4AF5A] hover:text-[#F0D99A] group shrink-0"
          >
            <span>Explore all approved prototypes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Track Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedTrack('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedTrack === 'all'
                ? 'bg-[#D4AF5A] text-[#041126] font-bold shadow'
                : 'bg-[#0A1E3D] text-[#C4CFDD] hover:text-[#F7F4EC] border border-[#18335D]'
            }`}
          >
            All Tracks ({mockShowcaseProjects.length})
          </button>
          {innovationTracks.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTrack(t.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                selectedTrack === t.id
                  ? 'bg-[#D4AF5A] text-[#041126] font-bold shadow'
                  : 'bg-[#0A1E3D] text-[#C4CFDD] hover:text-[#F7F4EC] border border-[#18335D]'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="royal-card rounded-xl p-6 flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all group"
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
                  <h3 className="font-serif text-lg font-medium text-[#F7F4EC] group-hover:text-[#F0D99A] transition-colors leading-snug">
                    {project.title}
                  </h3>
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
                <div className="text-[11px] text-[#68758A]">
                  Impact: <span className="text-[#C4CFDD] font-medium">{project.impactDescription.slice(0, 48)}...</span>
                </div>
                {project.prototypeUrl && (
                  <a
                    href={project.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#D4AF5A] hover:text-[#F0D99A] font-semibold shrink-0"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
