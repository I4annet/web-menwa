import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ActivityCard } from '@/components/activities/ActivityCard';
import { activities } from '@/data/activities';

export function FeaturedActivities() {
  const featured = activities.slice(0, 3);

  return (
    <section className="py-14 md:py-20 bg-white border-b border-brand-gray-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div>
            <span className="text-brand-red font-bold text-xs uppercase tracking-wider block mb-1">
              Dokumentasi Resmi
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-black">
              Program Kerja &amp; Kegiatan
            </h2>
            <div className="h-1 w-20 bg-brand-red mt-3 rounded-full" />
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/kegiatan"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-red hover:text-brand-red-dark uppercase tracking-wider group"
            >
              <span>Lihat Seluruh Kegiatan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </Container>
    </section>
  );
}
