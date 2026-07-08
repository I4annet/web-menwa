import React from "react";
import { Shield, Users, FileText, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const officers = [
  { name: "Natan Gamaliel", role: "Komandan Satuan (Dansat)", prodi: "D-III Teknik Listrik", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150" },
  { name: "Dega Cahya Maulana ", role: "Bendahara Umum", prodi: "D-IV Keuangan", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" },
  { name: "Putri Bunga Lestar", role: "Sekretaris Umum", prodi: "D-III Teknik Mesin", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150" },
  { name: "Micahel Zenterra Mahdi", role: "Kepala Urusan Operasional", prodi: "D-IV Teknologi Kimia Industri", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150" },
  { name: "Neuvlin Hanny Malikaroyan", role: "Kepala Urusan Diklat ", prodi: "D-III Teknologi Pemeliharaan Pesawat Udara", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150" },
]

export default function Organisasi() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 space-y-20 pt-28">
      {/* 1. Header Section */}
      <section className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-[#945f36] uppercase">
          STRUKTUR ORGANISASI
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl heading-gradient">
          Struktur Komando & Anggota
        </h1>
        <p className="text-sm text-slate-505 font-medium leading-relaxed">
          SATMENWA 874 Politeknik Negeri Malang dikelola secara terstruktur, tertib, dan disiplin di bawah koordinasi jajaran perwira mahasiswa dan staf ahli.
        </p>
      </section>

      {/* 2. Bagan Struktur Organisasi */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-[#945f36]" />
            Bagan Alur Struktur Anggota
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-1">Garis komando dan koordinasi staf komando SATMENWA 874.</p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-4 md:p-8 flex justify-center items-center shadow-sm">
          <img
            src="/struktur-organisasi.png"
            alt="Struktur Organisasi SATMENWA 874"
            className="max-w-full h-auto rounded-2xl border border-slate-100 shadow-md transition duration-500 hover:scale-[1.01]"
          />
        </div>
      </section>

      {/* 3. Detail Tugas Struktur Anggota */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wider">
            Rincian Jabatan & Tugas Pokok
          </h2>
          <p className="text-xs text-slate-505 font-medium">
            Penjelasan fungsi dan uraian tugas wewenang bagi setiap jajaran pengurus SATMENWA 874.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {officers.map((officer) => (
            <Card
              key={officer.name}
              className="p-6 border-slate-200/80 bg-white flex flex-col justify-between group hover:border-[#945f36]/45 hover:shadow-lg transition duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-24 w-24 bg-[radial-gradient(circle_at_top_right,rgba(148,95,54,0.03),transparent_70%)] pointer-events-none" />

              <div className="space-y-6">
                {/* Profile Panel */}
                <div className="flex gap-4 items-center border-b border-slate-100 pb-4">
                  <div className="relative shrink-0 overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 h-16 w-16 group-hover:scale-105 transition duration-300">
                    <img
                      src={officer.avatar}
                      alt={officer.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#945f36] bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-lg">
                      {officer.prodi}
                    </span>
                    <h4 className="text-sm font-black text-slate-900 group-hover:text-[#945f36] transition leading-tight">
                      {officer.name}
                    </h4>
                    <p className="text-[10px] text-slate-550 font-bold uppercase tracking-wide leading-none">
                      {officer.role}
                    </p>
                  </div>
                </div>

                {/* Duties list */}
                <div className="space-y-3">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#945f36] flex items-center gap-1.5">
                    <FileText className="h-3 w-3" />
                    Tugas & Wewenang
                  </h5>
                  {/* <ul className="space-y-2">
                    {officer.duties.map((duty, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs leading-relaxed text-slate-650 font-medium">
                        <CheckCircle className="h-3.5 w-3.5 text-[#7a1c1c] shrink-0 mt-0.5" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
