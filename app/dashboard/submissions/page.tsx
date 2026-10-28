'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Save,
  Send,
  CheckCircle2,
  ArrowLeft,
  Upload,
  Link2,
} from 'lucide-react';
import { suggestedInnovationTracks } from '@/config/site';

export default function SubmissionsPage() {
  const [isSavedDraft, setIsSavedDraft] = useState(false);
  const [isSubmittedFinal, setIsSubmittedFinal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subRef] = useState('ESS-2027-TECH-6821');

  // Form State
  const [formData, setFormData] = useState({
    title: 'Autonomous Solar IoT Telemetry for Precision Irrigation in Drought Belts',
    trackId: 'ai-ml',
    customTrack: '',
    problemStatement:
      'Smallholder farmers in Marathwada face severe groundwater depletion and unpredictable monsoon dry spells, resulting in over-pumping, transformer burnout, and crop desiccation.',
    targetBeneficiaries: 'Marginal farmers holding under 2 hectares; regional water user associations.',
    proposedSolution:
      'A low-power capacitive soil-moisture and ambient weather probe running on ESP32 with LoRaWAN wireless mesh networking, reporting real-time soil moisture to an offline base station without cellular dependence.',
    differentiation:
      'Costs 60% less than imported commercial telemetry systems; operates fully offline over local RF mesh; enclosure is 3D printed with agricultural UV-stabilised biopolymers.',
    impactDescription:
      'Reduces agricultural pumping power consumption by ~30% and conserves critical sub-surface water reserves across semi-arid talukas.',
    developmentStage: 'Working Prototype',
    feasibilityPlan:
      'Fabricated 2 bench prototypes; tested sensor calibration against gravimetric soil samples; bill of materials optimized to sub-₹1,800 per node.',
    demoVideoUrl: 'https://youtube.com/watch?v=sample-prototype-demo',
    prototypeDeckName: 'ESSENCE_AeroInnovators_PitchDeck.pdf (4.2 MB)',
  });

  const handleSaveDraft = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSavedDraft(true);
      setTimeout(() => setIsSavedDraft(false), 3000);
    }, 500);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirm('Are you sure you want to finalize this submission? Final submission locks your entry for formal jury evaluation.')) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmittedFinal(true);
    }, 700);
  };

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs text-[#68758A] hover:text-[#D4AF5A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Dashboard</span>
          </Link>
        </div>

        {/* Top Header Card */}
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2.5 py-0.5 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30">
              Stage 1 &amp; 2 Submission Engine
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              Idea &amp; Prototype Dossier
            </h1>
            <p className="text-xs text-[#C4CFDD]">
              Reference: <span className="font-mono text-[#F0D99A]">{subRef}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              isSubmittedFinal
                ? 'bg-blue-950/60 text-blue-300 border-blue-500/40'
                : 'bg-[#102D5C] text-[#F0D99A] border-[#D4AF5A]/40'
            }`}>
              {isSubmittedFinal ? 'Submitted · Under Review' : 'Draft Mode'}
            </span>
          </div>
        </div>

        {isSubmittedFinal ? (
          <div className="royal-card p-8 sm:p-12 rounded-2xl border-emerald-500/40 text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Official Submission Locked
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
                Your Innovation Dossier Is Finalized!
              </h2>
              <p className="text-xs sm:text-sm text-[#C4CFDD] max-w-md mx-auto">
                Reference ID: <strong className="text-[#F0D99A] font-mono">{subRef}</strong>.
                Your submission has entered the blind peer review queue for Stage 2 screening.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#041126] border border-[#18335D] max-w-md mx-auto text-xs text-[#68758A] leading-relaxed">
              Reviewers from our academic and industry panels evaluate entries against problem significance,
              technical feasibility, and potential impact. Outcome announcements will appear in your dashboard.
            </div>

            <div className="pt-2">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors"
              >
                <span>Return to Overview</span>
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFinalSubmit} className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#C4CFDD]">Innovation Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">Innovation Track *</label>
                  <select
                    value={formData.trackId}
                    onChange={(e) => setFormData({ ...formData, trackId: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  >
                    <optgroup label="15 Suggested Innovation Domains">
                      {suggestedInnovationTracks.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Open Innovation">
                      <option value="other">Other / Interdisciplinary Innovation</option>
                    </optgroup>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">Current Development Stage *</label>
                  <select
                    value={formData.developmentStage}
                    onChange={(e) => setFormData({ ...formData, developmentStage: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  >
                    <option value="Idea">Idea / Conceptual Blueprint</option>
                    <option value="Concept Validation">Concept Validation &amp; Simulations</option>
                    <option value="Working Prototype">Working Hardware / Software Prototype</option>
                    <option value="Lab Tested">Lab Bench Tested</option>
                    <option value="Field Tested">Field Tested with Real Beneficiaries</option>
                  </select>
                </div>
              </div>

              {formData.trackId === 'other' && (
                <div className="space-y-1 p-3.5 rounded-xl bg-[#102D5C]/30 border border-[#D4AF5A]/30">
                  <label className="text-[11px] font-medium text-[#F0D99A]">
                    Describe Your Field / Domain / Interdisciplinary Focus *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.customTrack}
                    onChange={(e) => setFormData({ ...formData, customTrack: e.target.value })}
                    placeholder="e.g. Bio-composites, Spatial AI, Quantum Algorithms, or Interdisciplinary"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#D4AF5A]/40 text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none placeholder-[#68758A]"
                  />
                  <span className="text-[10px] text-[#C4CFDD] block leading-relaxed">
                    ESSENCE 2027 welcomes original ideas from every sector, discipline and industry. Ideas outside predefined tracks receive full and unbiased evaluation under official competition rules.
                  </span>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#C4CFDD]">
                  Problem Statement: Who Experiences It and Why Does It Persist? *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.problemStatement}
                  onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#C4CFDD]">
                  Target Users &amp; Communities in Maharashtra *
                </label>
                <input
                  type="text"
                  required
                  value={formData.targetBeneficiaries}
                  onChange={(e) => setFormData({ ...formData, targetBeneficiaries: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#C4CFDD]">
                  Proposed Engineered Solution &amp; Working Mechanism *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.proposedSolution}
                  onChange={(e) => setFormData({ ...formData, proposedSolution: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">
                    What Makes Your Approach Different / Novel? *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.differentiation}
                    onChange={(e) => setFormData({ ...formData, differentiation: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">
                    Expected Environmental / Socio-Economic Impact *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.impactDescription}
                    onChange={(e) => setFormData({ ...formData, impactDescription: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-medium text-[#C4CFDD]">
                  Feasibility &amp; Prototype Development Progress *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.feasibilityPlan}
                  onChange={(e) => setFormData({ ...formData, feasibilityPlan: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                />
              </div>

              {/* Upload & Demo URLs */}
              <div className="p-4 rounded-xl bg-[#041126]/60 border border-[#18335D] space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD] flex items-center gap-1.5">
                    <Link2 className="w-3.5 h-3.5 text-[#D4AF5A]" />
                    <span>Demo Video URL (YouTube, Vimeo, Google Drive link)</span>
                  </label>
                  <input
                    type="url"
                    value={formData.demoVideoUrl}
                    onChange={(e) => setFormData({ ...formData, demoVideoUrl: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#071A36] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD] flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 text-[#D4AF5A]" />
                    <span>Pitch Deck Document (PDF format, up to 10 MB limit)</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      readOnly
                      value={formData.prototypeDeckName}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#071A36] border border-[#18335D] text-[#F7F4EC]"
                    />
                    <button
                      type="button"
                      className="px-3 py-2 rounded-lg text-xs bg-[#102D5C] hover:bg-[#18335D] text-[#D4AF5A] font-semibold shrink-0"
                    >
                      Browse PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-[#18335D] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  disabled={loading}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold text-[#C4CFDD] bg-[#0A1E3D] border border-[#18335D] hover:text-[#F7F4EC] inline-flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5 text-[#D4AF5A]" />
                  <span>Save Draft</span>
                </button>
                {isSavedDraft && (
                  <span className="text-xs text-emerald-400 font-medium animate-in fade-in">
                    Draft saved to secure store!
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow inline-flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Lock &amp; Submit for Stage 2 Evaluation</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
