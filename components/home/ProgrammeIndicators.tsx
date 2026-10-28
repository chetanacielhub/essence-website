import React from 'react';
import { School, Users, FileText, Wrench, Trophy, Store, Info } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function ProgrammeIndicators() {
  const indicators = [
    {
      label: 'College Outreach Target',
      target: siteConfig.planningTargets.collegeOutreach,
      unit: 'Colleges',
      icon: School,
      subtext: 'Across Maharashtra districts',
    },
    {
      label: 'Student Outreach Target',
      target: siteConfig.planningTargets.studentOutreach,
      unit: 'Students',
      icon: Users,
      subtext: 'Undergraduate innovators',
    },
    {
      label: 'Idea Submissions Target',
      target: siteConfig.planningTargets.applicationTarget,
      unit: 'Proposals',
      icon: FileText,
      subtext: 'Multi-disciplinary solutions',
    },
    {
      label: 'Prototype Target',
      target: siteConfig.planningTargets.prototypeTarget,
      unit: 'Prototypes',
      icon: Wrench,
      subtext: 'Lab & field-tested models',
    },
    {
      label: 'Finalists Capacity',
      target: siteConfig.planningTargets.finalistTarget,
      unit: 'Teams',
      icon: Trophy,
      subtext: 'State showcase finalists',
    },
    {
      label: 'Proposed Prize Pool',
      target: '₹5,00,000',
      unit: 'Grants & Awards',
      icon: Store,
      subtext: 'Within ₹22,13,000 proposed budget',
    },
  ];

  return (
    <section className="py-14 bg-[#071A36] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#18335D]/70 gap-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF5A]">
              Scope &amp; Ambition
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              Key Programme Planning Indicators
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#F0D99A] bg-[#102D5C]/60 px-3 py-1.5 rounded-full border border-[#D4AF5A]/20">
            <Info className="w-3.5 h-3.5" />
            <span>Figures represent proposed programme planning targets</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="royal-card p-4 rounded-xl flex flex-col justify-between group hover:border-[#D4AF5A]/50 transition-all"
              >
                <div className="flex items-center justify-between pb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#102D5C]/60 border border-[#D4AF5A]/20 flex items-center justify-center text-[#D4AF5A] group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-[#68758A] tracking-wider">
                    Target
                  </span>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EC] tracking-tight group-hover:text-[#F0D99A] transition-colors">
                    {item.target}
                  </div>
                  <div className="text-xs font-semibold text-[#D4AF5A] pt-0.5">
                    {item.label}
                  </div>
                  <p className="text-[10px] text-[#68758A] pt-1">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
