import React from 'react';
import Link from 'next/link';
import { UserCheck, MessageSquare } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function CtaSection() {
  return (
    <section className="py-14 md:py-18 bg-brand-black text-white relative overflow-hidden">
      <Container className="text-center relative z-10 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Bergabunglah Bersama Kami
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-brand-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Temukan potensi kepemimpinan terbaikmu, latih ketangguhan fisik dan mental, serta jadilah bagian dari keluarga besar Resimen Mahasiswa Satuan 874 Politeknik Negeri Malang.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/kontak"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-colors shadow-lg"
          >
            <UserCheck className="w-4 h-4" />
            <span>Info Pendaftaran &amp; Kontak</span>
          </Link>
          <Link
            href="/struktur-organisasi"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-colors"
          >
            <span>Kenali Struktur Pengurus</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
