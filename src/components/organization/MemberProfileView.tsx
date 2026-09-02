import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  FileText,
  GraduationCap,
  Shield,
  User,
} from 'lucide-react';
import { Member } from '@/types';
import { Container } from '@/components/ui/Container';

interface MemberProfileViewProps {
  member: Member;
}

export function MemberProfileView({ member }: MemberProfileViewProps) {
  return (
    <div className="py-8 md:py-12 bg-white">
      <Container>
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/struktur-organisasi"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red-dark transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Struktur Organisasi</span>
          </Link>
        </div>

        {/* 1. TOP SECTION: [ FOTO ANGGOTA ] [ INFORMASI BIODATA ] */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-8">
          {/* Left Column: Formal Photo Card */}
          <div className="md:col-span-4 bg-white border border-brand-gray-200 rounded p-4 sm:p-5 flex flex-col items-center text-center shadow-sm">
            <div className="w-full aspect-[3/4] relative bg-brand-gray-100 rounded overflow-hidden mb-4 border border-brand-gray-200">
              <Image
                src={member.fullPhoto || member.photo}
                alt={`Foto formal ${member.name}`}
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <div className="w-full space-y-2">
              <div className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {member.position}
              </div>
              <div className="text-xs text-brand-gray-600 font-medium pt-1">
                NIM: {member.nim || '[NIM Terdaftar]'}
              </div>
            </div>
          </div>

          {/* Right Column: Biodata Information Card */}
          <div className="md:col-span-8 bg-white border border-brand-gray-200 rounded p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="border-b border-brand-gray-200 pb-4 mb-5">
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                  Profil Kepengurusan
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-black tracking-tight mt-1">
                  {member.name}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-brand-gray-700 mt-1">
                  Jurusan {member.department}
                </p>
                <p className="text-xs sm:text-sm text-brand-gray-500 mt-0.5">
                  {member.generation}
                </p>
              </div>

              {/* Biodata Key-Value Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
                <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                  <span className="text-[11px] font-bold text-brand-gray-500 uppercase block mb-1">
                    Status Satuan
                  </span>
                  <span className="text-sm font-bold text-brand-black flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                    {member.status}
                  </span>
                </div>

                <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                  <span className="text-[11px] font-bold text-brand-gray-500 uppercase block mb-1">
                    Gol. Darah
                  </span>
                  <span className="text-sm font-bold text-brand-black">
                    {member.bloodType || '-'}
                  </span>
                </div>

                <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                  <span className="text-[11px] font-bold text-brand-gray-500 uppercase block mb-1">
                    Tahun Masuk
                  </span>
                  <span className="text-sm font-bold text-brand-black">
                    {member.entryYear || '-'}
                  </span>
                </div>

                <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                  <span className="text-[11px] font-bold text-brand-gray-500 uppercase block mb-1">
                    Domisili
                  </span>
                  <span className="text-sm font-bold text-brand-black">
                    {member.domicile || 'Malang'}
                  </span>
                </div>
              </div>
            </div>

            {/* Satuan Identity Footer */}
            <div className="mt-6 pt-4 border-t border-brand-gray-200 flex items-center justify-between text-xs text-brand-gray-500">
              <span>SATMENWA 874 POLITEKNIK NEGERI MALANG</span>
              <span className="font-semibold text-brand-red">Satria Cendekia Utama</span>
            </div>
          </div>
        </div>

        {/* 2. BIOGRAFI SECTION */}
        <div className="bg-white border border-brand-gray-200 rounded p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-brand-gray-200 pb-3">
            <FileText className="w-5 h-5 text-brand-red" />
            <h2 className="text-xl font-bold text-brand-black tracking-tight">
              Biografi
            </h2>
          </div>
          <p className="text-base text-brand-gray-700 leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* 3. EXPERIENCE & CONTRIBUTIONS (2 Columns on Desktop, 1 Column on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Pengalaman Organisasi */}
          <div className="bg-white border border-brand-gray-200 rounded p-6 sm:p-8 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 mb-4 border-b border-brand-gray-200 pb-3">
              <Shield className="w-5 h-5 text-brand-red" />
              <h2 className="text-xl font-bold text-brand-black tracking-tight">
                Pengalaman Organisasi
              </h2>
            </div>
            <ul className="space-y-4 flex-grow">
              {member.experiences.map((exp, idx) => (
                <li
                  key={idx}
                  className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:bg-brand-red before:rounded-full"
                >
                  <div className="font-bold text-sm text-brand-black">
                    {exp.role}
                  </div>
                  <div className="text-xs text-brand-gray-600 font-medium">
                    {exp.organization} ({exp.period})
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontribusi & Riwayat Kegiatan */}
          <div className="bg-white border border-brand-gray-200 rounded p-6 sm:p-8 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 mb-4 border-b border-brand-gray-200 pb-3">
              <Award className="w-5 h-5 text-brand-red" />
              <h2 className="text-xl font-bold text-brand-black tracking-tight">
                Kontribusi &amp; Riwayat Kegiatan
              </h2>
            </div>
            <ul className="space-y-4 flex-grow">
              {member.contributions.map((item, idx) => (
                <li key={idx} className="flex gap-3.5 items-start">
                  <div className="bg-brand-black text-white text-xs font-bold px-2.5 py-1 rounded shrink-0">
                    {item.year}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-brand-black">
                      {item.title}
                    </div>
                    <div className="text-xs text-brand-gray-600 mt-0.5 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
