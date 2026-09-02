import React from 'react';
import { Hero } from '@/components/home/Hero';
import { VisionMission } from '@/components/home/VisionMission';
import { History } from '@/components/home/History';
import { FeaturedActivities } from '@/components/home/FeaturedActivities';
import { CtaSection } from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Visi & Misi Section */}
      <VisionMission />

      {/* 3. Sejarah Menwa Polinema */}
      <History />

      {/* 4. Highlight Program Kerja & Kegiatan */}
      <FeaturedActivities />

      {/* 5. Call To Action (CTA) */}
      <CtaSection />
    </>
  );
}
