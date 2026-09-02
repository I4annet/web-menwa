import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  MapPin,
  ChevronRight,
  Target,
  Shield,
  CheckCircle2,
} from 'lucide-react';
import { Activity } from '@/types';
import { Container } from '@/components/ui/Container';
import { ActivityGallery } from '@/components/activities/ActivityGallery';

interface ActivityDetailViewProps {
  activity: Activity;
}

export function ActivityDetailView({ activity }: ActivityDetailViewProps) {
  return (
    <div className="py-8 md:py-12 bg-white">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs text-brand-gray-500 mb-6 font-medium"
        >
          <Link href="/" className="hover:text-brand-red transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/kegiatan" className="hover:text-brand-red transition-colors">
            Program Kerja &amp; Kegiatan
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-red font-bold truncate max-w-[200px] sm:max-w-xs">
            {activity.title}
          </span>
        </nav>

        {/* Activity Header */}
        <header className="mb-8">
          <div className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-3">
            {activity.category}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-black tracking-tight mb-3">
            {activity.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-brand-gray-600">
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-brand-red" />
              <span>{activity.date}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-brand-red" />
              <span>{activity.location}</span>
            </div>
          </div>
        </header>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            {/* Primary Activity Image */}
            <div className="relative w-full aspect-video bg-brand-gray-100 rounded overflow-hidden border border-brand-gray-200 shadow-sm">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Description Section */}
            <section className="bg-white border border-brand-gray-200 rounded p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-brand-black mb-4 border-b border-brand-gray-200 pb-3 flex items-center gap-2">
                <span>Deskripsi Kegiatan</span>
              </h2>
              <div className="space-y-4 text-base text-brand-gray-700 leading-relaxed font-normal">
                {activity.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Documentation Gallery */}
            <ActivityGallery gallery={activity.gallery} />
          </div>

          {/* Sidebar Column (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* Objectives Card */}
            <div className="bg-white border border-brand-gray-200 rounded p-6 shadow-sm">
              <h3 className="text-lg font-bold text-brand-black mb-4 border-b border-brand-gray-200 pb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-brand-red" />
                <span>Tujuan Kegiatan</span>
              </h3>
              <ul className="space-y-3 text-sm text-brand-gray-700">
                {activity.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Role Card */}
            <div className="bg-white border border-brand-gray-200 rounded p-6 shadow-sm">
              <h3 className="text-lg font-bold text-brand-black mb-4 border-b border-brand-gray-200 pb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-red" />
                <span>Peran SATMENWA 874</span>
              </h3>
              <p className="text-sm text-brand-gray-700 leading-relaxed">
                {activity.roleDescription}
              </p>
            </div>

            {/* Quick Contact / Join Banner */}
            <div className="bg-brand-gray-50 border border-brand-gray-200 rounded p-6 text-center">
              <h4 className="font-bold text-brand-black text-base mb-2">
                Tertarik Bergabung?
              </h4>
              <p className="text-xs text-brand-gray-600 mb-4">
                Dapatkan informasi pendaftaran dan jadwal kegiatan terbaru melalui layanan resmi kami.
              </p>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs uppercase py-2.5 px-4 rounded transition-colors shadow"
              >
                <span>Hubungi Kami</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
