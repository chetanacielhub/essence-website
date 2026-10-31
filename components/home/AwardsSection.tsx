import React from 'react';
import Link from 'next/link';
import { Trophy, Sparkles, Gift, Target, Network, Award, Coins, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function AwardsSection() {
  const walkAwayHighlights = [
    {
      num: '01',
      title: 'Validated Business Model',
      description: 'Test, refine and structure your assumptions into an economically viable startup venture.',
      icon: Target,
    },
    {
      num: '02',
      title: 'Prototype and GTM Plan',
      description: 'Build a tangible working solution coupled with a concrete go-to-market execution strategy.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Mentor and Founder Network',
      description: 'Connect with seasoned entrepreneurs, industry leaders, and ambitious peer founders.',
      icon: Network,
    },
    {
      num: '04',
      title: 'Certificates and Recognition',
      description: 'Gain prestigious institutional credentials and high visibility for your venture.',
      icon: Award,
    },
    {
      num: '05',
      title: 'Funding Opportunity up to ₹1.5 Lakh',
      description: 'Compete for funding from the Grand Fund Pool to accelerate your venture to the next stage.',
      icon: Coins,
    },
  ];

  return (
    <section className="py-20 bg-[#071A36] border-b border-[#D4AF5A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102D5C]/70 border border-[#D4AF5A]/30 text-[#D4AF5A] text-xs font-bold uppercase tracking-[0.2em]">
            <Trophy className="w-3.5 h-3.5" />
            <span>Grand Fund Pool</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#F7F4EC]">
            Grand Fund Pool: <span className="text-gradient-gold">{siteConfig.grandFundPool}</span>
          </h2>
          <div className="text-base sm:text-lg font-serif italic text-gradient-gold">
            From Ideas to Impact
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#C4CFDD] leading-relaxed">
            An entrepreneurial competition where innovative ideas compete to become impactful ventures.
            Recognition and funding from a pool of up to ₹1.5 Lakh.
          </p>
        </div>

        {/* 5 Walk Away Pillars */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#18335D]">
            <div className="flex items-center gap-2 text-[#D4AF5A]">
              <Gift className="w-5 h-5" />
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#F7F4EC]">
                What You Walk Away With
              </h3>
            </div>
            <span className="text-xs text-[#F0D99A] font-medium hidden sm:inline-block">
              5 Core Takeaways for Every Participant
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {walkAwayHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="royal-card p-6 rounded-2xl flex flex-col justify-between hover:border-[#D4AF5A]/50 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#102D5C]/70 border border-[#D4AF5A]/30 flex items-center justify-center text-[#D4AF5A] group-hover:bg-[#D4AF5A] group-hover:text-[#041126] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#D4AF5A]">
                        {item.num}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-serif text-base font-bold text-[#F7F4EC] group-hover:text-[#F0D99A] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#C4CFDD] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grand Finale Pitch Info Callout */}
        <div className="royal-card p-8 sm:p-10 rounded-2xl border-[#D4AF5A]/40 bg-gradient-to-br from-[#0B2246] via-[#071A36] to-[#041126] shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#D4AF5A]">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Stage 04 · Grand Finale
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F7F4EC]">
              Pitch. Win. Impact.
            </h3>
            <p className="text-xs sm:text-sm text-[#C4CFDD] leading-relaxed">
              Final pitches start at <strong>10:00 AM on 21–22 December</strong> at <strong>Chetana’s Auditorium</strong>,
              Bandra (East), Mumbai. Compete for recognition and funding from a pool of up to ₹1.5 Lakh.
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-bold text-[#041126] bg-gradient-to-r from-[#F0D99A] via-[#D4AF5A] to-[#B8923F] hover:opacity-95 shadow-lg shadow-[#D4AF5A]/20 transition-all shrink-0"
          >
            <span>Register Your Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
