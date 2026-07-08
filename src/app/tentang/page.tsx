import React from "react";
import { Shield, BookOpen, Target, Award, CheckSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

const pancaDharmaSatya = [
  "Mahasiswa yang sadar akan hak dan kewajiban bela negara serta kehormatan korps.",
  "Mahasiswa yang setia kepada Pancasila, UUD 1945, dan cita-cita proklamasi kemerdekaan.",
  "Prajurit yang menjunjung tinggi kebenaran, keadilan, disiplin, dan rasa tanggung jawab.",
  "Prajurit yang mengutamakan kepentingan nasional di atas kepentingan pribadi atau golongan.",
  "Rekan seperjuangan yang menjalin erat tali kekeluargaan, tolong-menolong, dan persatuan korps."
];

const officers = [
  { name: "Natan Gamaliel", role: "Komandan Satuan (Dansat)", prodi: "D-III Teknik Listrik", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150" },
  { name: "Dega Cahya Maulana ", role: "Wakil Komandan Satuan", prodi: "D-IV Keuangan", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" },
  { name: "Putri Bunga Lestar", role: "Kepala Staf Urusan Administrasi", prodi: "D-III Teknik Mesin", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150" },
  { name: "Micahel Zenterra Mahdi", role: "Staf Operasional & Diklat", prodi: "D-IV Teknologi Kimia Industri", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150" },
  { name: "Neuvlin Hanny Malikaroyan", role: "Staf Logistik & Peralatan", prodi: "D-III Teknologi Pemeliharaan Pesawat Udara", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150" },
]
export default function Tentang() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 space-y-24">
      {/* 1. Header Section */}
      <section className="space-y-4 text-center max-w-3xl mx-auto pt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-[#945f36] uppercase">
          Profil Korps
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl heading-gradient">
          Mengenal Lebih Dekat Satuan 811
        </h1>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">
          Membina jasmani, rohani, ketangkasan taktis, dan jiwa patriotisme kepemimpinan di Politeknik Negeri Malang sejak puluhan tahun silam.
        </p>
      </section>

      {/* 2. Sejarah & Filosofi */}
      <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-200/60 text-[#945f36]">
            <BookOpen className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Sejarah Singkat & Landasan Berdiri
          </h2>
          <div className="text-xs leading-relaxed text-slate-600 font-medium space-y-4">
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
          <Card className="p-8 space-y-6 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#945f36]" />
              Fokus Utama Kami
            </h3>
            <p className="text-xs leading-relaxed text-slate-500 font-medium">
              Satuan 811 menyelaraskan pembinaan akademis mahasiswa dengan latihan kepemimpinan keras untuk mencetak kader bangsa yang siap bersaing secara moral, intelektual, dan mental.
            </p>
            <ul className="space-y-4 text-xs">
              <li className="flex gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#945f36] shrink-0 text-[10px] font-black">1</div>
                <div>
                  <p className="font-bold text-slate-900">Olah Kepemimpinan</p>
                  <p className="text-slate-500 font-medium">Mempelajari cara memimpin tim di lapangan and membuat keputusan cepat.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#945f36] shrink-0 text-[10px] font-black">2</div>
                <div>
                  <p className="font-bold text-slate-900">Ketahanan Fisik & Mental</p>
                  <p className="text-slate-500 font-medium">Pelatihan fisik berkala untuk menjamin kesamaptaan jasmani yang prima.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center text-[#945f36] shrink-0 text-[10px] font-black">3</div>
                <div>
                  <p className="font-bold text-slate-900">Aksi Kemanusiaan (SAR)</p>
                  <p className="text-slate-500 font-medium">Kesiapan diterjunkan langsung saat bencana alam dan operasi pencarian korban.</p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* 3. Visi & Misi */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card className="p-8 space-y-4 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition duration-300">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#945f36] border border-amber-200/60">
            <Target className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-black text-slate-900">Visi Satuan</h3>
          <p className="text-xs leading-relaxed text-slate-600 font-medium">
            Menjadi unit pembinaan mahasiswa terkemuka yang melahirkan lulusan berkarakter tangguh, berdisiplin tinggi, berjiwa patriotik, serta berwawasan bela negara kuat guna mendukung Politeknik Negeri Malang sebagai kampus unggul.
          </p>
        </Card>

        <Card className="p-8 space-y-4 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition duration-300">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#945f36] border border-amber-200/60">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-black text-slate-900">Misi Satuan</h3>
          <ul className="text-xs text-slate-600 font-medium space-y-2 list-disc pl-4 leading-relaxed">
            <li>Menyelenggarakan latihan kepemimpinan dan bela negara terstruktur dan aplikatif.</li>
            <li>Membina kepribadian yang jujur, bertanggung jawab, disiplin, serta menjunjung tinggi kode etik mahasiswa.</li>
            <li>Mempersiapkan personel terampil tanggap darurat bencana (SAR) dan pengamanan logistik protokoler kampus.</li>
            <li>Mengabdi aktif dalam kegiatan bakti sosial kemasyarakatan demi mewujudkan ketahanan sipil nasional.</li>
          </ul>
        </Card>
      </section>

      {/* 4. Panca Dharma Satya (Sumpah Menwa) */}
      <section className="rounded-[2.2rem] bg-[#945f36]/5 border border-[#945f36]/20 p-8 md:p-12 space-y-8 relative overflow-hidden shadow-sm">
        <div className="absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle_at_top_right,rgba(148,95,54,0.02),transparent_70%)] pointer-events-none" />

        <div className="text-center max-w-xl mx-auto space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#945f36]">Sumpah Kehormatan</p>
          <h3 className="text-2xl font-black text-slate-900">Panca Dharma Satya Resimen Mahasiswa</h3>
          <p className="text-xs text-slate-500 font-medium">Lima janji suci pengabdian yang diikrarkan oleh setiap prajurit Korps Menwa Indonesia.</p>
        </div>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {pancaDharmaSatya.map((dharma, idx) => (
            <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 items-start shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 border border-amber-200/60 text-[#945f36] text-xs font-black shrink-0 mt-0.5 shadow-sm">
                {idx + 1}
              </span>
              <p className="text-xs leading-relaxed text-slate-650 font-medium pt-1">
                {dharma}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Struktur Organisasi / Jajaran Pengurus */}
      <section className="space-y-12">
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-3.5 py-1 text-xs font-bold tracking-wider text-[#945f36] uppercase">
            Jajaran Perwira & Pengurus
          </div>
          <h3 className="text-3xl font-black text-slate-900 leading-tight">
            Struktur Komando Satuan 811
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Dikelola secara dinamis oleh jajaran perwira mahasiswa di bawah naungan Pembina Teknis dan Komandan Satuan Senior.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {officers.map((officer) => (
            <Card key={officer.name} className="p-6 border-slate-200/80 bg-white flex gap-4 items-center group hover:border-[#945f36]/45 hover:shadow-lg transition duration-300">
              <div className="relative shrink-0 overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 h-16 w-16 group-hover:scale-105 transition duration-300">
                <img
                  src={officer.avatar}
                  alt={officer.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <span className="text-[9px] uppercase tracking-wider font-bold text-amber-855 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-lg">
                  {officer.prodi}
                </span>
                <h4 className="text-sm font-black text-slate-900 group-hover:text-[#945f36] transition leading-tight">
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
