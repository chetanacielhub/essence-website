'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Star, AlertTriangle, CheckCircle2, UserCheck, Layers } from 'lucide-react';
import { mockShowcaseProjects } from '@/lib/data/mockData';

export default function AdminReviewersPage() {
  const [selectedSub, setSelectedSub] = useState(mockShowcaseProjects[0]);
  const [scores, setScores] = useState<Record<string, number>>({
    'Problem Significance': 9,
    'Innovation & Originality': 9,
    'Technical Feasibility': 8,
    'Potential Impact': 9,
    'Prototype Execution': 9,
  });
  const [comments, setComments] = useState('Excellent hardware architecture with robust low-power telemetry. Verified against local soil dynamics in Parbhani.');
  const [hasConflict, setHasConflict] = useState(false);
  const [evaluationSubmitted, setEvaluationSubmitted] = useState(false);

  const criteria = [
    { name: 'Problem Significance', max: 10, weight: '1.0x', desc: 'Acuteness of problem and evidence of beneficiary pain.' },
    { name: 'Innovation & Originality', max: 10, weight: '1.2x', desc: 'Novel approach, distinct mechanism, or architectural improvement.' },
    { name: 'Technical Feasibility', max: 10, weight: '1.0x', desc: 'Engineering soundness, realistic BOM, accessibility of parts.' },
    { name: 'Potential Impact', max: 10, weight: '1.0x', desc: 'Demonstrable economic or social value for Maharashtra communities.' },
    { name: 'Prototype Execution', max: 10, weight: '1.3x', desc: 'Working model quality, field test results, demonstration evidence.' },
  ];

  const handleScoreChange = (critName: string, val: number) => {
    setScores((prev) => ({ ...prev, [critName]: val }));
  };

  const handleSaveEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasConflict) {
      alert('Conflict of interest recorded. Submission will be reassigned to an alternate reviewer per Section 8.3.');
      return;
    }
    setEvaluationSubmitted(true);
    setTimeout(() => setEvaluationSubmitted(false), 3000);
  };

  const totalWeighted = (
    scores['Problem Significance'] * 1.0 +
    scores['Innovation & Originality'] * 1.2 +
    scores['Technical Feasibility'] * 1.0 +
    scores['Potential Impact'] * 1.0 +
    scores['Prototype Execution'] * 1.3
  ).toFixed(1);

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
              Jury &amp; Evaluation Desk
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              Reviewer Scoring Console
            </h1>
            <p className="text-xs text-[#C4CFDD]">
              Confidential, rubric-based evaluation rubrics for Stage 2 screening and Stage 4 finalists.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#041126] border border-[#18335D] text-xs">
            <span className="text-[#68758A] block text-[10px]">Active Evaluator ID:</span>
            <strong className="text-[#F0D99A]">REV-MAH-018 (Academic Jury)</strong>
          </div>
        </div>

        {/* Evaluation Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Submission Select & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="royal-card p-6 rounded-2xl border-[#D4AF5A]/25 space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#C4CFDD]">Select Assigned Submission:</label>
                <select
                  value={selectedSub.id}
                  onChange={(e) => {
                    const found = mockShowcaseProjects.find((s) => s.id === e.target.value);
                    if (found) setSelectedSub(found);
                  }}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                >
                  {mockShowcaseProjects.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.referenceNumber} - {s.title.slice(0, 38)}...
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-3 text-xs">
                <div>
                  <span className="font-mono text-[10px] text-[#D4AF5A]">{selectedSub.referenceNumber}</span>
                  <h3 className="font-serif text-base font-medium text-[#F7F4EC] pt-0.5">
                    {selectedSub.title}
                  </h3>
                  <div className="text-[11px] text-[#F0D99A] pt-0.5">
                    {selectedSub.institutionName}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#18335D] text-[#C4CFDD]">
                  <div>
                    <strong className="text-[#F7F4EC] block text-[10px] uppercase">Problem:</strong>
                    <p className="text-[11px] leading-relaxed">{selectedSub.problemStatement}</p>
                  </div>
                  <div>
                    <strong className="text-[#F7F4EC] block text-[10px] uppercase">Solution:</strong>
                    <p className="text-[11px] leading-relaxed">{selectedSub.solutionDescription}</p>
                  </div>
                  <div>
                    <strong className="text-[#F7F4EC] block text-[10px] uppercase">Prototype Progress:</strong>
                    <p className="text-[11px] leading-relaxed">{selectedSub.prototypePlan}</p>
                  </div>
                </div>
              </div>

              {/* Conflict of interest toggle */}
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Conflict of Interest Check</span>
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="conflict-check"
                    checked={hasConflict}
                    onChange={(e) => setHasConflict(e.target.checked)}
                    className="mt-0.5 rounded bg-[#041126] border-[#18335D] text-amber-400 focus:ring-amber-400"
                  />
                  <label htmlFor="conflict-check" className="text-[11px] text-[#C4CFDD] leading-relaxed">
                    I declare an institutional or personal affiliation with this applicant college/team and request reassignment.
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Scoring Rubric (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSaveEvaluation} className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#18335D]">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#D4AF5A]" />
                  <h2 className="font-serif text-lg font-medium text-[#F7F4EC]">
                    Approved Evaluation Rubric
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#68758A] block uppercase font-mono">Weighted Score</span>
                  <span className="font-mono text-base font-bold text-[#D4AF5A]">
                    {totalWeighted} / 55.0
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {criteria.map((crit) => (
                  <div key={crit.name} className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <strong className="text-xs text-[#F7F4EC]">{crit.name}</strong>
                        <span className="text-[10px] text-[#D4AF5A] ml-2 font-mono">({crit.weight})</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-bold text-[#F0D99A]">
                          {scores[crit.name] || 0}
                        </span>
                        <span className="text-[10px] text-[#68758A]">/ {crit.max}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#68758A]">{crit.desc}</p>
                    <input
                      type="range"
                      min={1}
                      max={crit.max}
                      value={scores[crit.name] || 0}
                      onChange={(e) => handleScoreChange(crit.name, Number(e.target.value))}
                      className="w-full accent-[#D4AF5A] cursor-pointer"
                    />
                  </div>
                ))}

                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">
                    Confidential Reviewer Feedback &amp; Recommendations:
                  </label>
                  <textarea
                    rows={3}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  />
                  <span className="text-[10px] text-[#68758A]">
                    Internal notes remain strictly private and are not revealed to participants without admin clearance.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#18335D] flex items-center justify-between">
                {evaluationSubmitted ? (
                  <span className="text-xs text-emerald-400 font-semibold animate-in fade-in flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Evaluation locked and recorded!</span>
                  </span>
                ) : (
                  <span className="text-[11px] text-[#68758A]">
                    One permitted evaluation per assigned reviewer
                  </span>
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors shadow"
                >
                  Submit Official Evaluation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
