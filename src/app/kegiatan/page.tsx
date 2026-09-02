import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ActivityCard } from '@/components/activities/ActivityCard';
import { activities } from '@/data/activities';

export const metadata: Metadata = {
  title: 'Program Kerja & Kegiatan | SATMENWA 874 Polinema',
  description:
    'Dokumentasi resmi seluruh program kerja dan kegiatan operasional yang diselenggarakan oleh Resimen Mahasiswa Politeknik Negeri Malang dalam rangka pembinaan, pengabdian, dan peningkatan kedisiplinan.',
};

export default function ActivitiesPage() {
  return (
    <div className="py-12 md:py-16 bg-white min-h-[70vh]">
      <Container>
        {/* Header */}
        <SectionTitle
          title="Program Kerja &amp; Kegiatan"
          subtitle="Dokumentasi resmi seluruh program kerja dan kegiatan operasional yang diselenggarakan oleh Resimen Mahasiswa Politeknik Negeri Malang dalam rangka pembinaan, pengabdian, dan peningkatan kedisiplinan."
        />

        {/* Activities Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </Container>
    </div>
  );
}
