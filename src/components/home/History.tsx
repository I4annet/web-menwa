import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, History as HistoryIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function History() {
  return (
    <section className="py-14 md:py-20 bg-brand-gray-100 border-b border-brand-gray-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Narrative Col */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider mb-2">
              <HistoryIcon className="w-4 h-4" />
              <span>Jejak Langkah Satuan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-black tracking-tight mb-4">
              Sejarah Menwa Polinema
            </h2>
            <div className="h-1 w-20 bg-brand-red mb-6 rounded-full" />

            <div className="space-y-4 text-sm sm:text-base text-brand-gray-700 leading-relaxed font-normal">
              <p>
                Resimen Mahasiswa Politeknik Negeri Malang didirikan sebagai respons terhadap kebutuhan akan wadah pembinaan kedisiplinan dan kepemimpinan di lingkungan kampus vokasi. Sejak awal pembentukannya, organisasi ini telah berkomitmen untuk mencetak lulusan yang tidak hanya memiliki keahlian teknis, tetapi juga karakter kesatria yang berintegritas.
              </p>
              <p>
                Perjalanan panjang SATMENWA 874 Polinema diwarnai dengan berbagai dinamika dan pengabdian. Dari generasi ke generasi, nilai-nilai kejuangan dan keprajuritan terus diwariskan. Berbagai kegiatan mulai dari pendidikan dasar militer, pengamanan protokoler universitas, hingga tanggap darurat bencana telah menjadi agenda rutin yang mengukuhkan dedikasi kami.
              </p>
              <p>
                Saat ini, SATMENWA 874 Polinema terus beradaptasi dengan perkembangan zaman, memadukan nilai keprajuritan Tri Dharma Perguruan Tinggi dan Panca Dharma Satya dalam semangat semboyan <span className="font-semibold text-brand-black">Satria Cendekia Utama</span>.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/struktur-organisasi"
                className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-dark font-bold text-sm uppercase tracking-wider transition-colors group"
              >
                <span>Lihat Jajaran Pengurus Organisasi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Photo Col */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded overflow-hidden border-2 border-brand-gray-300 shadow-md bg-white">
              <Image
                src="/images/home/history.jpg"
                alt="Dokumentasi Sejarah Resimen Mahasiswa Politeknik Negeri Malang"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-brand-black/80 px-4 py-2 text-xs text-white flex justify-between items-center">
                <span className="font-semibold">SATMENWA 874 POLINEMA</span>
                <span className="text-brand-gold font-bold">18-06-1986</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
