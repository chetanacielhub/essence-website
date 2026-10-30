import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProgrammeIndicators from '@/components/home/ProgrammeIndicators';
import AboutSection from '@/components/home/AboutSection';
import TracksSection from '@/components/home/TracksSection';
import JourneySection from '@/components/home/JourneySection';
import AwardsSection from '@/components/home/AwardsSection';
import WhyParticipateSection from '@/components/home/WhyParticipateSection';
import ShowcaseSection from '@/components/home/ShowcaseSection';
import MentorshipModelSection from '@/components/home/MentorshipModelSection';
import CollegesSection from '@/components/home/CollegesSection';
import FaqPreviewSection from '@/components/home/FaqPreviewSection';
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
      <ShowcaseSection />
      <MentorshipModelSection />
      <CollegesSection />
      <FaqPreviewSection />
      <FinalCtaSection />
    </div>
  );
}
