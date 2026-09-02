import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Users, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center py-16 md:py-24 bg-brand-black">
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/home/hero-bg.jpg"
          alt="Apel Pasukan Resimen Mahasiswa Politeknik Negeri Malang"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/80" />
      </div>

      {/* Hero Content */}
      <Container className="relative z-10 text-center flex flex-col items-center max-w-4xl">
        {/* Emblem Logo */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 mb-6 relative bg-white rounded-full p-2.5 shadow-xl border-2 border-brand-red">
          <Image
            src="/images/logo/satmenwa-874-badge.png"
            alt="Logo SATMENWA 874 Polinema"
            fill
            className="object-contain p-1"
            priority
          />
        </div>

        {/* Small Tag */}
        <div className="inline-flex items-center gap-1.5 bg-brand-red/90 text-white text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 border border-brand-red">
          <Shield className="w-3.5 h-3.5 text-brand-gold" />
          <span>SATMENWA 874</span>
        </div>

        {/* Titles */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
          Resimen Mahasiswa
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95 mb-6">
          Politeknik Negeri Malang
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-brand-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Membentuk kader pemimpin bangsa yang disiplin, tangguh, dan berwawasan kebangsaan berlandaskan Tri Dharma Perguruan Tinggi dan Panca Dharma Satya.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            href="/struktur-organisasi"
            className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded transition-colors shadow-md"
          >
            <Users className="w-4 h-4" />
            <span>Struktur Organisasi</span>
          </Link>
          <Link
            href="/kegiatan"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/40 font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded transition-colors"
          >
            <span>Program Kerja &amp; Kegiatan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
