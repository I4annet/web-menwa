import Link from "next/link";
import { Shield, Award, Users, Flame, BookOpen, ArrowRight, ChevronRight, Calendar } from "lucide-react";
import { getBlogPosts } from "@/lib/db";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "Disiplin Tinggi",
    desc: "Menanamkan karakter ketepatan waktu, ketaatan aturan, dan loyalitas penuh terhadap kehormatan korps.",
    icon: Shield,
    color: "from-red-800 to-red-950",
  },
  {
    title: "Kepemimpinan Taktis",
    desc: "Mengasah mental kepemimpinan yang bijaksana, solutif, dan mampu mengoordinasikan tim di bawah tekanan.",
    icon: Award,
    color: "from-amber-700 to-amber-900",
  },
  {
    title: "Bela Negara",
    desc: "Membangun rasa patriotisme yang kuat dan kesiapan membela keutuhan NKRI melalui kancah akademis.",
    icon: Flame,
    color: "from-red-950 to-slate-950",
  },
  {
    title: "Pengabdian Masyarakat",
    desc: "Aksi nyata kemanusiaan, tanggap darurat bencana, dan bakti sosial yang terintegrasi di Malang Raya.",
    icon: Users,
    color: "from-[#C5A880] to-[#AA7C11]",
  },
];

export default async function Home() {
  const posts = await getBlogPosts();
  const recentPosts = posts.slice(0, 3); // Get top 3 recent posts

  return (
    <div className="space-y-24 pb-24">
      {/* 1. Hero Section */}
      <section className="relative pt-16 md:pt-24 lg:pt-32 overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Headline info */}
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-900/40 bg-red-950/20 px-4 py-2 text-xs font-semibold tracking-wider text-[#C5A880] uppercase backdrop-blur-sm shadow-inner shadow-red-950/50">
              <Shield className="h-3.5 w-3.5" />
              Open Recruitment Mahasiswa Baru 2026
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
                Membentuk Pemimpin Tangguh, <br />
                <span className="gold-gradient-text">Berkarakter & Mengabdi</span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Selamat datang di portal resmi Resimen Mahasiswa Politeknik Negeri Malang Satuan 811. Wadah pembinaan karakter, olah keprajuritan, dan pengabdian masyarakat.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/pendaftaran">
                <Button variant="accent" size="lg" className="w-full sm:w-auto uppercase tracking-wider text-xs font-bold gap-2">
                  Daftar Sekarang <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tentang">
                <Button variant="glass" size="lg" className="w-full sm:w-auto uppercase tracking-wider text-xs">
                  Pelajari Profil
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Graphic Panel */}
          <div className="lg:col-span-5 relative lg:block">
            {/* Ambient gold glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-red-950 to-[#C5A880]/20 rounded-[2.5rem] opacity-30 blur-2xl -z-10" />
            
            <Card variant="gold-border" className="p-8 space-y-6 border-[#C5A880]/20 relative overflow-hidden animate-float">
              {/* Gold Grid Overlay */}
              <div className="absolute right-0 top-0 h-32 w-32 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.1),transparent_70%)]" />
              
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-bold">
                  Semboyan Resmi
                </p>
                <h2 className="text-2xl font-bold leading-tight">
                  Widya Castrena Dharma Siddha
                </h2>
                <p className="text-xs leading-relaxed text-slate-400 italic">
                  &quot;Penyempurnaan pengabdian dengan ilmu pengetahuan dan olah keprajuritan.&quot;
                </p>
              </div>

              <div className="border-t border-white/5 pt-6 space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-red-950/40 border border-red-900/40 flex items-center justify-center text-[#C5A880]">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Disiplin & Loyalitas</p>
                    <p className="text-slate-500">Membentuk mental baja anti-menyerah</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-slate-800/40 border border-slate-700/40 flex items-center justify-center text-[#C5A880]">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Wawasan Luas</p>
                    <p className="text-slate-500">Keseimbangan antara akademis & kemiliteran</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-red-950/30 border border-red-900/30 p-4 text-center">
                <span className="text-[10px] text-slate-400 block mb-1">
                  Masa Pendaftaran Berakhir
                </span>
                <span className="text-sm font-bold text-white tracking-widest uppercase">
                  30 September 2026
                </span>
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* 2. Quick Stats Banner */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="rounded-[2.2rem] bg-slate-900/30 border border-white/5 p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-red-950/10 via-transparent to-red-950/10 pointer-events-none" />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center divide-y sm:divide-y-0 lg:divide-x divide-white/5">
            <div className="space-y-1 py-4 sm:py-0">
              <p className="text-4xl font-extrabold text-[#C5A880] tracking-tight">45+</p>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Tahun Pengabdian</p>
            </div>
            <div className="space-y-1 py-4 sm:py-0 lg:pl-6">
              <p className="text-4xl font-extrabold text-[#C5A880] tracking-tight">1,200+</p>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Alumni Aktif</p>
            </div>
            <div className="space-y-1 py-4 sm:py-0 lg:pl-6">
              <p className="text-4xl font-extrabold text-[#C5A880] tracking-tight">100%</p>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Karakter & Kepemimpinan</p>
            </div>
            <div className="space-y-1 py-4 sm:py-0 lg:pl-6">
              <p className="text-4xl font-extrabold text-[#C5A880] tracking-tight">15+</p>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Spesialisasi Diklat</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 space-y-12">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880]">
            Pilar Nilai Korps
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl heading-gradient">
            Empat Karakter Utama Resimen Mahasiswa
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Menwa Polinema membentuk karakter mahasiswa agar memiliki kepribadian seimbang antara akademis tinggi, ketahanan fisik, disiplin mental, dan cinta tanah air.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-8 border-slate-800/80 bg-slate-900/20 group hover:border-[#C5A880]/30 transition duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 border border-slate-800 text-[#C5A880] transition group-hover:bg-gradient-to-r group-hover:from-red-800 group-hover:to-red-950 group-hover:text-white group-hover:border-transparent group-hover:scale-105 duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white transition group-hover:text-[#C5A880] duration-200">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-[#C5A880] transition duration-200">
                  Selengkapnya <ChevronRight className="h-3.5 w-3.5 ml-1 transition duration-200 group-hover:translate-x-1" />
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 4. Recent Blogger / News */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880]">
              Portal Informasi
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl heading-gradient">
              Artikel & Berita Terbaru
            </h2>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-slate-800 text-slate-300 hover:text-white uppercase tracking-wider text-xs">
              Lihat Semua Artikel
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col">
              <Card className="flex flex-col h-full p-0 overflow-hidden border-slate-800/80 bg-slate-900/20 hover:border-[#C5A880]/30 transition duration-300 hover:-translate-y-1">
                {/* Image panel */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  {/* Category Tag */}
                  <span className="absolute left-4 top-4 rounded-lg bg-red-950/80 border border-red-900/60 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} Baca</span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#C5A880] transition leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {/* Author panel */}
                  <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-8 w-8 rounded-full object-cover border border-slate-700"
                    />
                    <div>
                      <p className="text-[11px] font-bold text-white leading-tight">
                        {post.author.name}
                      </p>
                      <p className="text-[9px] text-slate-500 leading-tight">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Glowing Recruitment CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <Card variant="dark" className="relative p-8 md:p-14 overflow-hidden border-red-900/40 bg-gradient-to-br from-slate-950 via-slate-950 to-red-950/40 text-center space-y-8 shadow-[0_40px_120px_-80px_rgba(122,28,28,0.5)]">
          {/* Ambient background glows */}
          <div className="absolute right-0 bottom-0 h-64 w-64 bg-red-900/10 blur-3xl rounded-full -z-10" />
          <div className="absolute left-0 top-0 h-64 w-64 bg-[#C5A880]/5 blur-3xl rounded-full -z-10" />
          
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880]">
              Pendaftaran Calon Anggota Baru
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl leading-tight">
              Siap Mengukir Sejarah & Mengabdi Bersama MENWA Satuan 811?
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Jadilah bagian dari garda kepemimpinan mahasiswa. Daftarkan diri Anda sekarang untuk mengikuti seleksi kesamaptaan dan pembinaan karakter unggul di Politeknik Negeri Malang.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pendaftaran">
              <Button variant="accent" size="lg" className="w-full sm:w-auto uppercase tracking-wider text-xs font-bold gap-2">
                Daftar Recruitment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/kontak">
              <Button variant="glass" size="lg" className="w-full sm:w-auto uppercase tracking-wider text-xs">
                Hubungi Markas
              </Button>
            </Link>
          </div>
        </Card>
      </section>

    </div>
  );
}
