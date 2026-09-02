import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  MessageSquare,
  Mail,
  Instagram,
  MapPin,
  Clock,
  ExternalLink,
  Shield,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Hubungi Kami | SATMENWA 874 Polinema',
  description:
    'Informasi resmi, pendaftaran, dan layanan komunikasi Resimen Mahasiswa Politeknik Negeri Malang.',
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-[70vh]">
      {/* 1. Hero Section */}
      <section className="relative bg-brand-black text-white py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact/mako-bg.jpg"
            alt="Markas Komando SATMENWA 874 Polinema"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/80" />
        </div>

        <Container className="relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-brand-red text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5 text-brand-gold" />
            <span>Layanan Komunikasi Resmi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hubungi Kami
          </h1>
          <p className="text-base sm:text-lg text-brand-gray-200 leading-relaxed font-normal">
            Informasi resmi, pendaftaran kader baru, serta koordinasi kelembagaan Resimen Mahasiswa Satuan 874 Politeknik Negeri Malang.
          </p>
        </Container>
      </section>

      {/* 2. Contact Cards Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left: Main WhatsApp Communication Card (5 Cols) */}
            <div className="lg:col-span-5 bg-white border border-brand-gray-200 rounded p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-brand-red transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded bg-primary-light flex items-center justify-center text-brand-red">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-brand-black tracking-tight">
                      Layanan Informasi
                    </h2>
                    <span className="text-xs text-brand-gray-500 font-semibold uppercase">
                      WhatsApp Resmi
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-brand-gray-700 leading-relaxed mb-6">
                  Untuk informasi pendaftaran calon anggota baru, koordinasi protokoler upacara, kerja sama kegiatan, dan korespondensi satuan, silakan menghubungi narahubung resmi kami.
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-brand-gray-100 space-y-3">
                {/* Official WhatsApp Link with Placeholder */}
                <a
                  href="https://wa.me/[ISI_NOMOR_WHATSAPP_RESMI]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm uppercase tracking-wider py-3.5 px-6 rounded transition-colors shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hubungi via WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center justify-center gap-1.5 text-xs text-brand-gray-500 text-center font-medium">
                  <Clock className="w-3.5 h-3.5 text-brand-red shrink-0" />
                  <span>Jam Pelayanan: Senin - Jumat, 08.00 - 16.00 WIB</span>
                </div>
              </div>
            </div>

            {/* Right: Secondary Cards (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Card */}
              <div className="bg-white border border-brand-gray-200 rounded p-6 shadow-sm flex flex-col justify-between hover:border-brand-red transition-colors">
                <div>
                  <div className="w-10 h-10 rounded bg-primary-light flex items-center justify-center text-brand-red mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-black mb-1">
                    Email Resmi
                  </h3>
                  <p className="text-xs text-brand-gray-600 mb-4 leading-relaxed">
                    Surat menyurat kedinasan dan proposal kerja sama institusi.
                  </p>
                </div>
                <div className="pt-2 border-t border-brand-gray-100">
                  <a
                    href="mailto:menwa@polinema.ac.id"
                    className="text-sm font-bold text-brand-red hover:underline break-all"
                  >
                    menwa@polinema.ac.id
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="bg-white border border-brand-gray-200 rounded p-6 shadow-sm flex flex-col justify-between hover:border-brand-red transition-colors">
                <div>
                  <div className="w-10 h-10 rounded bg-primary-light flex items-center justify-center text-brand-red mb-4">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-black mb-1">
                    Media Sosial
                  </h3>
                  <p className="text-xs text-brand-gray-600 mb-4 leading-relaxed">
                    Dokumentasi kegiatan, publikasi, dan berita terbaru satuan.
                  </p>
                </div>
                <div className="pt-2 border-t border-brand-gray-100">
                  <a
                    href="https://instagram.com/menwapolinema"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-brand-red hover:underline inline-flex items-center gap-1"
                  >
                    <span>@menwapolinema</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Address / Headquarters Card (Full Width on SM) */}
              <div className="sm:col-span-2 bg-white border border-brand-gray-200 rounded p-6 shadow-sm flex flex-col sm:flex-row gap-4 items-start hover:border-brand-red transition-colors">
                <div className="w-10 h-10 rounded bg-primary-light flex items-center justify-center text-brand-red shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-black mb-1">
                    Markas Komando (Mako SATMENWA 874)
                  </h3>
                  <p className="text-sm text-brand-gray-700 leading-relaxed">
                    Gedung Pusat Kegiatan Mahasiswa (Graha Polinema Lantai 1)
                    <br />
                    Politeknik Negeri Malang, Jl. Soekarno Hatta No.9, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Location Map Preview Section */}
      <section className="pb-14 md:pb-20">
        <Container>
          <div className="border border-brand-gray-200 rounded overflow-hidden shadow-sm bg-brand-gray-50">
            <div className="bg-brand-black text-white px-4 sm:px-6 py-3 flex items-center justify-between text-xs sm:text-sm font-semibold">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span>Peta Lokasi Markas Komando SATMENWA 874 Polinema</span>
              </span>
              <span className="text-brand-gray-400 text-xs hidden sm:inline">
                Kampus Utama Politeknik Negeri Malang
              </span>
            </div>
            <div className="relative w-full h-72 sm:h-96 bg-brand-gray-100">
              <Image
                src="/images/contact/map.jpg"
                alt="Peta Lokasi Markas Komando Menwa Polinema"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
