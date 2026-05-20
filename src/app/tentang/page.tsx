import React from "react";
import { Shield, BookOpen, Target, Award, Users, CheckSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

const pancaDharmaSatya = [
  "Mahasiswa yang sadar akan hak dan kewajiban bela negara serta kehormatan korps.",
  "Mahasiswa yang setia kepada Pancasila, UUD 1945, dan cita-cita proklamasi kemerdekaan.",
  "Prajurit yang menjunjung tinggi kebenaran, keadilan, disiplin, dan rasa tanggung jawab.",
  "Prajurit yang mengutamakan kepentingan nasional di atas kepentingan pribadi atau golongan.",
  "Rekan seperjuangan yang menjalin erat tali kekeluargaan, tolong-menolong, dan persatuan korps."
];

const officers = [
  { name: "Muhammad Zaki Kurniawan", role: "Komandan Satuan (Dansat)", rank: "Letda (Menwa)", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150" },
  { name: "Farhan Adi Pratama", role: "Wakil Komandan Satuan", rank: "Letda (Menwa)", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" },
  { name: "Amelia Safitri", role: "Kepala Staf Urusan Administrasi", rank: "Sertu (Menwa)", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150" },
  { name: "Bagus Setiawan", role: "Staf Operasional & Diklat", rank: "Sersan (Menwa)", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150" },
  { name: "Dewi Lestari", role: "Staf Logistik & Peralatan", rank: "Sersan (Menwa)", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150" },
  { name: "Rizky Dwi Cahyo", role: "Staf Humas & Pengabdian", rank: "Kopral (Menwa)", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150" }
];

export default function Tentang() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 space-y-24">
      {/* 1. Header Section */}
      <section className="space-y-4 text-center max-w-3xl mx-auto pt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/30 bg-slate-900/40 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#C5A880] uppercase">
          Profil Korps
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl heading-gradient">
          Mengenal Lebih Dekat Satuan 811
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Membina jasmani, rohani, ketangkasan taktis, dan jiwa patriotisme kepemimpinan di Politeknik Negeri Malang sejak puluhan tahun silam.
        </p>
      </section>

      {/* 2. Sejarah & Filosofi */}
      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-950 border border-red-900 text-[#C5A880]">
            <BookOpen className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white leading-tight">
            Sejarah Singkat & Landasan Berdiri
          </h2>
          <div className="text-xs leading-relaxed text-slate-400 space-y-4">
            <p>
              Resimen Mahasiswa (MENWA) Politeknik Negeri Malang Satuan 811 didirikan sebagai wadah terorganisir untuk memfasilitasi mahasiswa yang memiliki tekad bela negara yang kuat serta minat dalam kedisiplinan semi-militer. Menwa merupakan salah satu unsur kekuatan sipil yang dilatih khusus untuk pertahanan negara dan pengabdian masyarakat.
            </p>
            <p>
              Kami mengintegrasikan nilai-nilai kepemimpinan taktis, ketahanan fisik, dan solidaritas persaudaraan (jiwa korsa) dengan disiplin ilmu pengetahuan akademis. Sejak berdirinya, Satuan 811 telah melahirkan ribuan alumni tangguh yang kini berkarier sukses di berbagai sektor militer, pemerintahan, BUMN, hingga swasta multinasional.
            </p>
            <p>
              Widya Castrena Dharma Siddha menjadi semboyan abadi kami. Ini berarti penyempurnaan pengabdian diwujudkan dengan penguasaan ilmu pengetahuan (Widya) dan kemantapan keterampilan olah keprajuritan (Dharma Siddha).
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-tr from-red-950 to-amber-950 rounded-[2.2rem] opacity-35 blur-xl -z-10" />
          <Card variant="gold-border" className="p-8 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#C5A880]" />
              Fokus Utama Kami
            </h3>
            <p className="text-xs leading-relaxed text-slate-400">
              Satuan 811 menyelaraskan pembinaan akademis mahasiswa dengan latihan kepemimpinan keras untuk mencetak kader bangsa yang siap bersaing secara moral, intelektual, dan mental.
            </p>
            <ul className="space-y-4 text-xs">
              <li className="flex gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-red-950/60 border border-red-900/40 flex items-center justify-center text-[#C5A880] shrink-0 text-[10px] font-bold">1</div>
                <div>
                  <p className="font-semibold text-white">Olah Kepemimpinan</p>
                  <p className="text-slate-500">Mempelajari cara memimpin tim di lapangan and membuat keputusan cepat.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-red-950/60 border border-red-900/40 flex items-center justify-center text-[#C5A880] shrink-0 text-[10px] font-bold">2</div>
                <div>
                  <p className="font-semibold text-white">Ketahanan Fisik & Mental</p>
                  <p className="text-slate-500">Pelatihan fisik berkala untuk menjamin kesamaptaan jasmani yang prima.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-red-950/60 border border-red-900/40 flex items-center justify-center text-[#C5A880] shrink-0 text-[10px] font-bold">3</div>
                <div>
                  <p className="font-semibold text-white">Aksi Kemanusiaan (SAR)</p>
                  <p className="text-slate-500">Kesiapan diterjunkan langsung saat bencana alam dan operasi pencarian korban.</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 3. Visi & Misi */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card variant="glass" className="p-8 space-y-4 border-slate-800 bg-slate-900/20">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-950/55 text-[#C5A880] border border-red-900/30">
            <Target className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Visi Satuan</h3>
          <p className="text-xs leading-relaxed text-slate-400">
            Menjadi unit pembinaan mahasiswa terkemuka yang melahirkan lulusan berkarakter tangguh, berdisiplin tinggi, berjiwa patriotik, serta berwawasan bela negara kuat guna mendukung Politeknik Negeri Malang sebagai kampus unggul.
          </p>
        </Card>

        <Card variant="glass" className="p-8 space-y-4 border-slate-800 bg-slate-900/20">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-950/55 text-[#C5A880] border border-red-900/30">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Misi Satuan</h3>
          <ul className="text-xs text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
            <li>Menyelenggarakan latihan kepemimpinan dan bela negara terstruktur dan aplikatif.</li>
            <li>Membina kepribadian yang jujur, bertanggung jawab, disiplin, serta menjunjung tinggi kode etik mahasiswa.</li>
            <li>Mempersiapkan personel terampil tanggap darurat bencana (SAR) dan pengamanan logistik protokoler kampus.</li>
            <li>Mengabdi aktif dalam kegiatan bakti sosial kemasyarakatan demi mewujudkan ketahanan sipil nasional.</li>
          </ul>
        </Card>
      </section>

      {/* 4. Panca Dharma Satya (Sumpah Menwa) */}
      <section className="rounded-[2.2rem] bg-slate-900/30 border border-slate-800 p-8 md:p-12 space-y-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.06),transparent_70%)] pointer-events-none" />
        
        <div className="text-center max-w-xl mx-auto space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#C5A880]">Sumpah Kehormatan</p>
          <h3 className="text-2xl font-bold text-white">Panca Dharma Satya Resimen Mahasiswa</h3>
          <p className="text-xs text-slate-400">Lima janji suci pengabdian yang diikrarkan oleh setiap prajurit Korps Menwa Indonesia.</p>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {pancaDharmaSatya.map((dharma, idx) => (
            <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-950/60 border border-white/5 items-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-950/60 border border-red-900/50 text-[#C5A880] text-xs font-bold shrink-0 mt-0.5 shadow-inner">
                {idx + 1}
              </span>
              <p className="text-xs leading-relaxed text-slate-300 pt-1">
                {dharma}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Struktur Organisasi / Jajaran Pengurus */}
      <section className="space-y-12">
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/30 bg-slate-900/40 px-3.5 py-1 px-3 text-xs font-semibold tracking-wider text-[#C5A880] uppercase">
            Jajaran Perwira & Pengurus
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-white leading-tight">
            Struktur Komando Satuan 811
          </h3>
          <p className="text-xs text-slate-400">
            Dikelola secara dinamis oleh jajaran perwira mahasiswa di bawah naungan Pembina Teknis dan Komandan Satuan Senior.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {officers.map((officer) => (
            <Card key={officer.name} className="p-6 border-slate-800 bg-slate-900/20 flex gap-4 items-center group hover:border-[#C5A880]/30 transition duration-300">
              <div className="relative shrink-0 overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 h-16 w-16 group-hover:scale-105 transition duration-300">
                <img
                  src={officer.avatar}
                  alt={officer.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-[9px] uppercase tracking-wider font-bold text-[#C5A880] bg-amber-950/40 border border-amber-900/30 px-2 py-0.5 rounded-lg">
                  {officer.rank}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-[#C5A880] transition leading-tight">
                  {officer.name}
                </h4>
                <p className="text-[10px] text-slate-500 font-medium leading-none">
                  {officer.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}
