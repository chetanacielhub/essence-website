'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Download, ArrowLeft, Filter, Users, School, CheckCircle2, ShieldAlert } from 'lucide-react';
import { mockInstitutions } from '@/lib/data/mockData';

interface ParticipantRow {
  id: string;
  name: string;
  email: string;
  college: string;
  district: string;
  course: string;
  teamName: string;
  role: string;
  registeredAt: string;
  status: 'verified' | 'pending';
}

const mockParticipantsList: ParticipantRow[] = [
  {
    id: 'p-1',
    name: 'Atharva Kulkarni',
    email: 'atharva.k@vjti.ac.in',
    college: 'Veermata Jijabai Technological Institute (VJTI)',
    district: 'Mumbai City',
    course: 'B.Tech Electronics',
    teamName: 'Team AeroInnovators',
    role: 'Team Leader',
    registeredAt: '2026-10-22',
    status: 'verified',
  },
  {
    id: 'p-2',
    name: 'Aarav Deshmukh',
    email: 'aarav.d@coep.ac.in',
    college: 'College of Engineering Pune (COEP Tech)',
    district: 'Pune',
    course: 'B.Tech Instrumentation',
    teamName: 'Team KrishiSetu',
    role: 'Team Leader',
    registeredAt: '2026-10-21',
    status: 'verified',
  },
  {
    id: 'p-3',
    name: 'Priya Salunke',
    email: 'priya.s@vjti.ac.in',
    college: 'Veermata Jijabai Technological Institute (VJTI)',
    district: 'Mumbai City',
    course: 'B.Tech Computer Engineering',
    teamName: 'Team GramMudra',
    role: 'Team Leader',
    registeredAt: '2026-10-20',
    status: 'verified',
  },
  {
    id: 'p-4',
    name: 'Rohan Kulkarni',
    email: 'rohan.k@walchand.ac.in',
    college: 'Walchand College of Engineering',
    district: 'Sangli',
    course: 'B.Tech Civil & Environmental',
    teamName: 'Team Sugarcane Tech',
    role: 'Team Leader',
    registeredAt: '2026-10-19',
    status: 'verified',
  },
  {
    id: 'p-5',
    name: 'Tanvi Gaikwad',
    email: 'tanvi.g@vnit.ac.in',
    college: 'Visvesvaraya National Institute of Technology (VNIT)',
    district: 'Nagpur',
    course: 'B.Tech Urban Planning',
    teamName: 'Team JalRaksha',
    role: 'Team Leader',
    registeredAt: '2026-10-18',
    status: 'verified',
  },
];

export default function AdminRegistrationsPage() {
  const [search, setSearch] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [participants, setParticipants] = useState(mockParticipantsList);

  const filtered = participants.filter((p) => {
    const matchesDistrict = selectedDistrict === 'all' || p.district === selectedDistrict;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.college.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      p.teamName.toLowerCase().includes(search.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  const exportCSV = () => {
    const headers = ['ID,Name,Email,College,District,Course,Team,Role,Registered Date,Status'];
    const rows = filtered.map(
      (p) =>
        `"${p.id}","${p.name}","${p.email}","${p.college}","${p.district}","${p.course}","${p.teamName}","${p.role}","${p.registeredAt}","${p.status}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `essence_2027_participants_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              Database Records
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              Participant Registrations
            </h1>
            <p className="text-xs text-[#C4CFDD]">
              Managing verified undergraduate innovators representing Maharashtra institutions.
            </p>
          </div>

          <button
            onClick={exportCSV}
            className="px-4 py-2 rounded-lg text-xs font-bold text-[#041126] bg-[#D4AF5A] hover:bg-[#F0D99A] transition-colors inline-flex items-center gap-2 shadow"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Authorised CSV</span>
          </button>
        </div>

        {/* Filters & Search */}
        <div className="royal-card p-4 rounded-xl border-[#D4AF5A]/25 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#68758A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by participant name, email, college, or team..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-[#D4AF5A] shrink-0" />
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full md:w-56 px-3 py-2 text-xs rounded-lg bg-[#041126] border border-[#18335D] text-[#F7F4EC] focus:border-[#D4AF5A] focus:outline-none"
            >
              <option value="all">All Maharashtra Districts</option>
              <option value="Mumbai City">Mumbai City</option>
              <option value="Mumbai Suburban">Mumbai Suburban</option>
              <option value="Pune">Pune</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Sangli">Sangli</option>
            </select>
          </div>
        </div>

        {/* Table of Registrations */}
        <div className="royal-card rounded-2xl border-[#D4AF5A]/25 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0A1E3D] text-[#D4AF5A] font-semibold border-b border-[#18335D]">
                <tr>
                  <th className="p-4">Participant Name</th>
                  <th className="p-4">College &amp; District</th>
                  <th className="p-4">Team</th>
                  <th className="p-4">Course</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#18335D]">
                {filtered.map((row) => (
                  <tr key={row.id} className="hover:bg-[#102D5C]/30 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-[#F7F4EC]">{row.name}</div>
                      <div className="text-[11px] text-[#68758A]">{row.email}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-[#C4CFDD]">{row.college}</div>
                      <div className="text-[11px] text-[#68758A]">{row.district}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-[#F0D99A] font-medium">{row.teamName}</div>
                      <div className="text-[10px] text-[#68758A]">{row.role}</div>
                    </td>
                    <td className="p-4 text-[#C4CFDD]">{row.course}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => alert(`Participant Profile: ${row.name}\nEmail: ${row.email}\nCollege: ${row.college}\nDistrict: ${row.district}`)}
                        className="text-[#D4AF5A] hover:underline font-semibold"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
