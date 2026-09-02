import React from 'react';
import { Eye, Target } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function VisionMission() {
  return (
    <section className="py-10 md:py-12 bg-white border-b border-brand-gray-200">
      <Container>
        {/* Section label — compact, tidak menambah tinggi berlebihan */}
        <div className="text-center mb-6 md:mb-7">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.14em] uppercase text-brand-red bg-primary-light px-3 py-1 rounded-full">
            Visi &amp; Misi
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-6 items-stretch">
          {/* Visi Card — ringkas, col 2/5 */}
          <div className="lg:col-span-2 bg-white p-5 sm:p-6 border border-brand-gray-200 rounded-lg shadow-sm hover:border-brand-red/30 hover:shadow transition-all flex flex-col">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-md bg-primary-light flex items-center justify-center text-brand-red shrink-0">
                <Eye className="w-[18px] h-[18px]" />
              </div>
              <h3 className="text-lg font-bold text-brand-black tracking-tight">Visi</h3>
              <span className="ml-auto h-px flex-1 bg-brand-gray-100 hidden sm:block" />
            </div>
            <p className="text-[13.5px] sm:text-sm text-brand-gray-700 leading-[1.7]">
              Menjadi Unit Kegiatan Mahasiswa yang handal dan profesional dalam melaksanakan kegiatan-kegiatan khususnya dalam
              bidang Pertahanan dan Keamanan yang berlandaskan <span className="font-semibold text-brand-black">Pancasila, UUD 1945, Panca Dharma Satya,</span> dan Tri Dharma Perguruan Tinggi.
            </p>
            <div className="mt-4 h-1 w-12 bg-brand-red rounded-full" />
          </div>

          {/* Misi Card — col 3/5, list dibuat 2-kolom di >=sm agar tidak overflow vertikal */}
          <div className="lg:col-span-3 bg-brand-gray-50/60 p-5 sm:p-6 border border-brand-gray-200 rounded-lg shadow-sm hover:border-brand-red/30 hover:shadow transition-all flex flex-col">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-9 h-9 rounded-md bg-white border border-brand-gray-200 flex items-center justify-center text-brand-red shrink-0">
                <Target className="w-[18px] h-[18px]" />
              </div>
              <h3 className="text-lg font-bold text-brand-black tracking-tight">Misi</h3>
              <span className="ml-auto h-px flex-1 bg-brand-gray-200 hidden sm:block" />
            </div>

            {/* Grid 2 kolom untuk hemat tinggi vertikal — single col di mobile */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
              {[
                'Menghasilkan SDM unggul bidang Pertahanan & Keamanan yang bertaqwa, berakhlak tinggi, dan berbudaya Indonesia.',
                'Mempersiapkan mahasiswa berdisiplin, tangguh fisik-mental, dan berwawasan kebangsaan untuk Tri Dharma Perguruan Tinggi & kepemimpinan.',
                'Menyusun dan menggerakkan potensi mahasiswa untuk memantapkan ketahanan nasional melalui kegiatan Bela Negara.',
                'Menjalin kerja sama strategis dengan berbagai pihak demi persatuan dan kesatuan bangsa.',
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 text-[13.5px] sm:text-sm text-brand-gray-700 leading-[1.6]">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
