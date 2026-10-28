'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Copy, Check, UserPlus, ShieldAlert, ArrowLeft, Mail, School } from 'lucide-react';

export default function TeamManagementPage() {
  const [copied, setCopied] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [invitedSuccess, setInvitedSuccess] = useState(false);

  const teamCode = 'ESS-AERO-7721';
  const [members, setMembers] = useState([
    {
      id: 'm-1',
      fullName: 'Atharva Kulkarni',
      email: 'atharva.k@vjti.ac.in',
      college: 'Veermata Jijabai Technological Institute (VJTI)',
      role: 'Team Leader',
      status: 'active',
    },
    {
      id: 'm-2',
      fullName: 'Rohit Deshmukh',
      email: 'rohit.d@vjti.ac.in',
      college: 'Veermata Jijabai Technological Institute (VJTI)',
      role: 'Member · Electronics',
      status: 'active',
    },
  ]);

  const copyCode = () => {
    navigator.clipboard.writeText(teamCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail) return;
    if (members.length >= 4) {
      alert('Team capacity reached (Maximum 4 members allowed).');
      return;
    }

    setMembers([
      ...members,
      {
        id: `m-${members.length + 1}`,
        fullName: inviteEmail.split('@')[0],
        email: inviteEmail,
        college: 'Pending Affiliation',
        role: 'Invited Teammate',
        status: 'invited',
      },
    ]);
    setInviteEmail('');
    setInvitedSuccess(true);
    setTimeout(() => setInvitedSuccess(false), 3000);
  };

  return (
    <div className="bg-[#041126] text-[#F7F4EC] min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
        <div className="royal-card p-6 sm:p-8 rounded-2xl border-[#D4AF5A]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF5A] px-2.5 py-0.5 rounded-full bg-[#102D5C] border border-[#D4AF5A]/30">
              Team Management
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              Team AeroInnovators
            </h1>
            <p className="text-xs text-[#C4CFDD]">
              Registered Primary College: Veermata Jijabai Technological Institute (VJTI)
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#041126] border border-[#18335D] flex items-center gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#68758A] block">Team Share Code</span>
              <span className="font-mono text-sm font-bold text-[#D4AF5A]">{teamCode}</span>
            </div>
            <button
              onClick={copyCode}
              aria-label="Copy team code"
              className="p-2 rounded-lg bg-[#102D5C] hover:bg-[#D4AF5A] hover:text-[#041126] text-[#D4AF5A] transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Members List (8 cols) */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#18335D]">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D4AF5A]" />
                <h2 className="font-serif text-lg font-medium text-[#F7F4EC]">
                  Registered Members ({members.length}/4)
                </h2>
              </div>
              <span className="text-xs text-[#68758A]">
                Max limit: 4 students
              </span>
            </div>

            <div className="space-y-3">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="royal-card p-4 rounded-xl flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <strong className="text-xs sm:text-sm text-[#F7F4EC]">
                        {member.fullName}
                      </strong>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                        member.role === 'Team Leader'
                          ? 'bg-[#102D5C] text-[#F0D99A] border-[#D4AF5A]/30'
                          : 'bg-[#041126] text-[#C4CFDD] border-[#18335D]'
                      }`}>
                        {member.role}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#68758A] flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-[#D4AF5A]" />
                        {member.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <School className="w-3 h-3 text-[#D4AF5A]" />
                        {member.college}
                      </span>
                    </div>
                  </div>

                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                    member.status === 'active'
                      ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/30'
                      : 'text-amber-400 bg-amber-950/60 border border-amber-500/30'
                  }`}>
                    {member.status === 'active' ? 'Active' : 'Invited'}
                  </span>
                </div>
              ))}
            </div>

            {/* Capacity notice */}
            {members.length < 4 && (
              <div className="p-4 rounded-xl bg-[#041126]/60 border border-dashed border-[#D4AF5A]/40 text-center space-y-1">
                <span className="text-xs font-semibold text-[#F0D99A]">
                  You can invite {4 - members.length} more undergraduate teammate(s).
                </span>
                <p className="text-[11px] text-[#68758A]">
                  Cross-college interdisciplinary teams across Maharashtra are permitted and encouraged.
                </p>
              </div>
            )}
          </div>

          {/* Invite Widget (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="royal-card p-6 rounded-2xl border-[#D4AF5A]/25 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#18335D]">
                <UserPlus className="w-4 h-4 text-[#D4AF5A]" />
                <h3 className="font-serif text-base font-medium text-[#F7F4EC]">
                  Invite a Teammate
                </h3>
              </div>

              <form onSubmit={handleInvite} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-[#C4CFDD]">Teammate Institutional Email *</label>
                  <input
                    type="email"
                    required
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    placeholder="teammate@college.ac.in"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={members.length >= 4}
                  className="w-full py-2.5 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors disabled:opacity-50"
                >
                  Send Team Invitation
                </button>
              </form>

              {invitedSuccess && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs">
                  Invitation recorded for {inviteEmail}.
                </div>
              )}
            </div>

            <div className="royal-card-static p-4 rounded-xl border-[#18335D] text-[11px] text-[#68758A] space-y-2">
              <div className="flex items-center gap-1.5 text-[#F0D99A] font-semibold">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Governance Rule</span>
              </div>
              <p>
                Each registered student may belong to only one competing team. Team leaders have primary
                authority over final submission dispatch and prize grant communications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
