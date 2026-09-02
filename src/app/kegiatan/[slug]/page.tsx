import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { activities, getActivityBySlug } from '@/data/activities';
import { ActivityDetailView } from '@/components/activities/ActivityDetailView';

interface ActivityDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return activities.map((activity) => ({
    slug: activity.slug,
  }));
}

export function generateMetadata({ params }: ActivityDetailPageProps): Metadata {
  const activity = getActivityBySlug(params.slug);
  if (!activity) {
    return {
      title: 'Kegiatan Tidak Ditemukan | SATMENWA 874 Polinema',
    };
  }

  return {
    title: `${activity.title} | SATMENWA 874 Polinema`,
    description: activity.shortDescription,
  };
}

export default function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const activity = getActivityBySlug(params.slug);

  if (!activity) {
    notFound();
  }

  return <ActivityDetailView activity={activity} />;
}
