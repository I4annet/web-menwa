import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="py-20 bg-white min-h-[60vh] flex items-center justify-center">
      <Container className="text-center max-w-lg">
        <div className="w-16 h-16 rounded-full bg-primary-light text-brand-red flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-brand-black mb-3">
          404 - Halaman Tidak Ditemukan
        </h1>
        <p className="text-brand-gray-600 text-base mb-8 leading-relaxed">
          Mohon maaf, halaman atau data yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm uppercase px-6 py-3 rounded transition-colors shadow"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </Container>
    </div>
  );
}
