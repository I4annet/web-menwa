import React from "react";
import { ShieldAlert, CheckCircle, FileText, Calendar } from "lucide-react";
import RegistrationForm from "@/components/features/registration/form";
import { Card } from "@/components/ui/card";

const requirements = [
  "Mahasiswa aktif Politeknik Negeri Malang (Semester 1 atau Semester 3).",
  "Indeks Prestasi Kumulatif (IPK) minimal 2.75.",
  "Sehat jasmani dan rohani (tidak memiliki riwayat penyakit kronis berat).",
  "Memiliki komitmen tinggi terhadap kedisiplinan dan bersedia mengikuti diklat dasar.",
  "Mendapatkan persetujuan tertulis dari orang tua/wali."
];

const documents = [
  "Pas Foto ukuran 3x4 berlatar belakang merah (2 lembar).",
  "Fotokopi KTM (Kartu Tanda Mahasiswa) atau KSM.",
  "Surat Keterangan Sehat dari klinik Polinema / puskesmas terdekat.",
  "Surat pernyataan persetujuan orang tua (template dapat diunduh di Markas)."
];

export default function Pendaftaran() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 space-y-16">
      
      {/* 1. Header Section */}
      <section className="space-y-4 text-center max-w-3xl mx-auto pt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/30 bg-slate-900/40 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#C5A880] uppercase">
          Open Recruitment
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl heading-gradient">
          Pendaftaran Anggota Baru Satuan 811
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Bergabunglah bersama Korps Resimen Mahasiswa Politeknik Negeri Malang. Tempa kepemimpinan Anda, bangun jaringan luas, dan raih prestasi membela kehormatan bangsa.
        </p>
      </section>

      {/* 2. Grid split: Left (Requirements), Right (Form) */}
      <section className="grid gap-12 lg:grid-cols-12 max-w-6xl mx-auto items-start">
        
        {/* Left Side: Requirements & checklist */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Eligibility Requirements Card */}
          <Card variant="gold-border" className="p-6 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-[#C5A880]" />
              Persyaratan Calon Anggota
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="h-4 w-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Document Checklist Card */}
          <Card className="p-6 border-slate-800 bg-slate-900/10 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-red-800" />
              Berkas yang Wajib Disiapkan
            </h3>
            <p className="text-[11px] text-slate-500">
              Semua berkas fisik dikumpulkan ke Markas Satuan 811 (Gedung UKM Lantai 1) setelah mengisi formulir online di sebelah kanan.
            </p>
            <ul className="space-y-3 text-xs text-slate-400">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-800 shrink-0 mt-2" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Timeline info card */}
          <Card className="p-6 border-slate-800 bg-slate-900/10 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#C5A880]" />
              Alur Seleksi Recruitment
            </h3>
            <ol className="text-xs text-slate-400 space-y-3 list-decimal pl-4">
              <li>Pendaftaran online & Penyerahan berkas fisik.</li>
              <li>Tes Kesamaptaan Jasmani (Lari, Push-up, Sit-up).</li>
              <li>Wawancara Motivasi & Tes Mental Ideologi.</li>
              <li>Masa Pembekalan & Pra-Pendidikan Latihan Dasar (Pra-Diksar).</li>
              <li>Pemberangkatan Pendidikan Latihan Dasar (DIKLATSAR) Korps.</li>
            </ol>
          </Card>

        </div>

        {/* Right Side: The Multi-Step Registration Form */}
        <div className="lg:col-span-7">
          <RegistrationForm />
        </div>

      </section>

    </div>
  );
}
