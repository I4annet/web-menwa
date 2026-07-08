import React from "react";
import { Shield, BookOpen, Clock, CheckCircle, Navigation, Award, Compass, HeartPulse } from "lucide-react";
import { Card } from "@/components/ui/card";
import { mockEducationSteps } from "@/data/education";

const skills = [
  { name: "Navigasi Darat & Kompas", icon: Compass, desc: "Keahlian membaca peta topografi, kontur bumi, dan navigasi malam menggunakan rasi bintang/kompas." },
  { name: "Pertolongan Pertama (Keslap)", icon: HeartPulse, desc: "Kecakapan penanganan medis lapangan, resusitasi jantung paru (RJP), pembalutan luka, dan evakuasi korban." },
  { name: "Kedisiplinan & PBB", icon: Shield, desc: "Pembentukan sikap mental tegak, baris-berbaris tingkat mahir, kepatuhan hierarki komando, dan tanggung jawab penuh." },
  { name: "Survival Hutan & SAR", icon: Navigation, desc: "Keterampilan bertahan hidup di kondisi darurat alam bebas, pemanfaatan botani-zoologi, dan teknik pencarian korban bencana." }
];

export default function Pendidikan() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 space-y-24">
      {/* 1. Header Section */}
      <section className="space-y-4 text-center max-w-3xl mx-auto pt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-[#7a1c1c] uppercase">
          Kurikulum & Pelatihan
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl heading-gradient">
          Pendidikan Menwa Satuan 811
        </h1>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">
          Sistem pembinaan bertahap yang mengombinasikan ketahanan fisik prima, keahlian bertahan hidup, disiplin taktis, serta integritas kepemimpinan akademis.
        </p>
      </section>

      {/* 2. Filosofi Pendidikan */}
      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md animate-float">
          <img
            src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=800"
            alt="Latihan Navigasi Lapangan"
            className="h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880] block mb-1">DOKUMENTASI DIKLATSAR</span>
            <h3 className="text-base font-bold text-white">Latihan Kepemimpinan & Peta Navigasi Hutan</h3>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">
            Keseimbangan Widya dan Dharma Siddha
          </h2>
          <p className="text-xs leading-relaxed text-slate-605 font-medium">
            Pendidikan di Resimen Mahasiswa dirancang agar tidak mengganggu perkuliahan resmi mahasiswa di Politeknik Negeri Malang. Sebaliknya, pembinaan kedisiplinan Menwa terbukti mendongkrak motivasi belajar, manajemen waktu mahasiswa, dan pencapaian akademis yang unggul.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2 hover:border-[#7a1c1c]/35 transition duration-300">
              <BookOpen className="h-5 w-5 text-[#7a1c1c]" />
              <h4 className="text-xs font-bold text-slate-900">Prestasi Akademis</h4>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Staf Menwa wajib memantau IPK anggotanya agar tetap berada di atas standar kelulusan terbaik.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2 hover:border-[#7a1c1c]/35 transition duration-300">
              <Award className="h-5 w-5 text-[#7a1c1c]" />
              <h4 className="text-xs font-bold text-slate-900">Kredensial Sertifikasi</h4>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Sertifikat DIKLATSAR diterbitkan resmi oleh Kodam / Kemenhan RI sebagai bukti kompetensi Bela Negara.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vertical Timeline */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h3 className="text-2xl font-bold text-slate-900">Jenjang Karir Pendidikan Menwa</h3>
          <p className="text-xs text-slate-500 font-medium">Empat tahapan terstruktur pembentukan prajurit dari tingkat calon hingga spesialisasi.</p>
        </div>

        {/* Timeline connector grid */}
        <div className="relative max-w-4xl mx-auto space-y-12 before:absolute before:inset-y-0 before:left-4 sm:before:left-1/2 before:w-[2px] before:bg-gradient-to-b before:from-red-100 before:via-[#7a1c1c]/30 before:to-slate-200 pointer-events-none">
          {mockEducationSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={step.id} className="relative flex flex-col sm:flex-row items-start sm:justify-between pointer-events-auto">
                
                {/* Visual Bullet Connector */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-[15px] sm:-translate-x-[15px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#7a1c1c]/45 text-[#7a1c1c] text-xs font-bold shadow-md z-10">
                  {idx + 1}
                </div>

                {/* Card Container left/right alignment */}
                <div className={`w-full sm:w-[45%] pl-12 sm:pl-0 ${isEven ? "sm:order-first sm:text-right" : "sm:order-last sm:text-left"}`}>
                  <Card className="p-6 space-y-4 border-slate-200/80 bg-white hover:border-[#7a1c1c]/45 hover:shadow-lg transition duration-300">
                    <div className="space-y-1.5">
                      <div className={`flex items-center gap-2 text-[10px] font-bold text-[#7a1c1c] uppercase tracking-wider ${isEven ? "sm:justify-end" : "sm:justify-start"}`}>
                        <Clock className="h-3.5 w-3.5" />
                        <span>{step.duration}</span>
                        <span>•</span>
                        <span>{step.phase}</span>
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                        {step.title}
                      </h4>
                    </div>
                    
                    <p className="text-xs leading-relaxed text-slate-600 font-medium">
                      {step.description}
                    </p>

                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">Kompetensi Inti:</p>
                      <ul className={`text-[11px] text-slate-600 font-medium space-y-1 ${isEven ? "sm:text-right" : "sm:text-left"}`}>
                        {step.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex gap-2 items-center sm:inline-flex">
                            <CheckCircle className="h-3 w-3 text-[#7a1c1c] shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>

                {/* Empty spacer for grid alignment */}
                <div className="hidden sm:block sm:w-[45%]" />
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Spesialisasi Terlatih */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h3 className="text-2xl font-bold text-slate-900">Kemampuan Khusus yang Dikuasai</h3>
          <p className="text-xs text-slate-500 font-medium">Setiap personel dibekali dengan berbagai keterampilan khusus penunjang aksi sosial dan pertahanan sipil.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.name} className="p-6 border-slate-200/80 bg-white flex gap-4 items-start group hover:border-[#7a1c1c]/45 hover:shadow-lg transition duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 border border-red-100 text-[#7a1c1c] shrink-0 mt-0.5 group-hover:scale-105 transition duration-300">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#7a1c1c] transition">
                    {skill.name}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">
                    {skill.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

    </div>
  );
}
