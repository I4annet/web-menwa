import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, MessageSquare } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="bg-brand-black text-white border-t border-brand-gray-800 mt-auto">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white/10 rounded p-1">
                <Image
                  src="/images/logo/satmenwa-874-badge.png"
                  alt="Badge SATMENWA 874 Polinema"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white tracking-tight">
                  SATMENWA 874
                </h3>
                <p className="text-xs text-brand-gray-400 font-medium">
                  Politeknik Negeri Malang
                </p>
              </div>
            </div>
            <p className="text-sm text-brand-gray-300 leading-relaxed max-w-sm">
              Membentuk kader pemimpin bangsa yang disiplin, tangguh, dan berwawasan kebangsaan berlandaskan Tri Dharma Perguruan Tinggi dan Panca Dharma Satya.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-brand-red text-white text-xs font-semibold px-3 py-1 rounded-sm uppercase tracking-wider">
                Satria Cendekia Utama
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-brand-red pl-2">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-red transition-colors duration-150 inline-block"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/struktur-organisasi"
                  className="hover:text-brand-red transition-colors duration-150 inline-block"
                >
                  Struktur Organisasi
                </Link>
              </li>
              <li>
                <Link
                  href="/kegiatan"
                  className="hover:text-brand-red transition-colors duration-150 inline-block"
                >
                  Program Kerja &amp; Kegiatan
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-brand-red transition-colors duration-150 inline-block"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-brand-red pl-2">
              Markas Komando (Mako)
            </h4>
            <address className="not-italic text-sm text-brand-gray-300 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>
                  Gedung Pusat Kegiatan Mahasiswa (Graha Polinema), Jl. Soekarno Hatta No.9, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <a
                  href="mailto:menwa@polinema.ac.id"
                  className="hover:text-white transition-colors"
                >
                  menwa@polinema.ac.id
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-brand-red shrink-0" />
                <Link href="/kontak" className="text-brand-gold hover:underline">
                  Layanan Komunikasi WhatsApp Resmi
                </Link>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-gray-800 mt-12 pt-6 text-center text-xs text-brand-gray-400">
          <p>© 2024 Resimen Mahasiswa Satuan 874 Politeknik Negeri Malang. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
