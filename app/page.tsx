import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProgrammeIndicators from '@/components/home/ProgrammeIndicators';
import AboutSection from '@/components/home/AboutSection';
import TracksSection from '@/components/home/TracksSection';
import JourneySection from '@/components/home/JourneySection';
import AwardsSection from '@/components/home/AwardsSection';
import WhyParticipateSection from '@/components/home/WhyParticipateSection';
import MentorshipModelSection from '@/components/home/MentorshipModelSection';
import FaqSection from '@/components/home/FaqSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProgrammeIndicators />
      <AboutSection />
      <TracksSection />
      <JourneySection />
      <AwardsSection />
      <WhyParticipateSection />
      <MentorshipModelSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
