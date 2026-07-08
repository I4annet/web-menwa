import Link from "next/link";
import { Shield, Award, Users, Calendar, ArrowRight, Flame, ShieldCheck } from "lucide-react";
import { getBlogPosts } from "@/lib/db";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroSlideshow from "@/components/ui/hero-slideshow";

export default async function Home() {
  const posts = await getBlogPosts();
  const recentPosts = posts.slice(0, 3); // Get top 3 recent posts

  return (
    <div className="space-y-28 pb-28 pt-32">
      {/* 1. Split Hero Section (Jumbotron Modern) */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline and text */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#945f36] bg-[#945f36]/10 border border-[#945f36]/20 uppercase">
              <Shield className="h-3.5 w-3.5" /> Resimen Mahasiswa Satmenwa 874
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-none uppercase">
                Pendidikan Karakter <br />
                <span className="heading-gradient">& Pengabdian</span> <br />
                Bela Negara
              </h1>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed max-w-md">
                Membentuk mahasiswa Politeknik Negeri Malang yang tangguh, disiplin, berkarakter kepemimpinan kuat, serta berdedikasi tinggi terhadap tanah air melalui olah keprajuritan dan ilmu pengetahuan.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/pendaftaran">
                <Button className="bg-[#945f36] hover:bg-[#744520] text-white px-6 py-5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#945f36]/25 transition duration-300">
                  Daftar Anggota Baru
                </Button>
              </Link>
              <Link href="/tentang">
                <Button variant="outline" className="border-slate-200 text-slate-700 hover:text-[#945f36] hover:border-[#945f36] px-6 py-5 rounded-xl font-bold uppercase tracking-wider text-xs transition duration-300">
                  Pelajari Kegiatan
                </Button>
              </Link>
            </div>

            {/* Verification/Trust Badge */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-4 text-slate-500">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-[#945f36]/10 flex items-center justify-center border-2 border-white text-[10px] font-bold text-[#945f36]">811</div>
                <div className="h-8 w-8 rounded-full bg-[#744520]/10 flex items-center justify-center border-2 border-white text-[10px] font-bold text-[#744520]">POL</div>
                <div className="h-8 w-8 rounded-full bg-[#caa472]/10 flex items-center justify-center border-2 border-white text-[10px] font-bold text-[#caa472]">MLG</div>
              </div>
              <div className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                Unit Kegiatan Mahasiswa Polinema Resmi
              </div>
            </div>
          </div>

          {/* Right Column: Hero Slideshow */}
          <div className="lg:col-span-7 w-full">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 shadow-2xl p-2 bg-white/40 backdrop-blur-md">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section (Stats Counter Banner) */}
      <section className="bg-[#1e130c] py-16 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#945f36]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#caa472]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black text-[#caa472] tracking-tight">45+</p>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#e7e0d5]">Tahun Pengabdian</p>
              <p className="text-[10px] text-slate-400 font-medium">Bela negara sejak pendirian pertama satuan.</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black text-[#caa472] tracking-tight">500+</p>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#e7e0d5]">Alumni Tangguh</p>
              <p className="text-[10px] text-slate-400 font-medium">Lulusan berkarakter di instansi sipil & militer.</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black text-[#caa472] tracking-tight">50+</p>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#e7e0d5]">Anggota Aktif</p>
              <p className="text-[10px] text-slate-400 font-medium">Kader mahasiswa berdedikasi tinggi.</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-black text-[#caa472] tracking-tight">15+</p>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#e7e0d5]">Kegiatan & Pelatihan</p>
              <p className="text-[10px] text-slate-400 font-medium">Pendidikan fisik, mental, dan SAR tahunan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visi Misi Section (Modern Split Layout) */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Heading & Visi */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#945f36]">
                Arah Juang & Komitmen
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 heading-gradient sm:text-4xl">
                Visi & Misi Satuan
              </h2>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Nilai-nilai luhur yang memandu setiap derap langkah pengabdian Resimen Mahasiswa Satmenwa 874 Politeknik Negeri Malang.
              </p>
            </div>
            
            <Card className="p-8 border-slate-200/80 bg-white group hover:border-[#945f36]/45 hover:shadow-lg transition duration-300 relative overflow-hidden flex-grow flex flex-col justify-between mt-6 lg:mt-0">
              <div className="absolute top-0 right-0 h-32 w-32 bg-[radial-gradient(circle_at_top_right,rgba(148,95,54,0.03),transparent_70%)] pointer-events-none" />
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-[#945f36]/10 border border-[#945f36]/20 flex items-center justify-center text-[#945f36]">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#945f36] transition duration-200 uppercase tracking-wide">
                  Visi Satuan
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-slate-600 font-medium">
                  Menjadi Unit Kegiatan Mahasiswa yang handal dan profesional dalam melaksanakan kegiatan-kegiatan khususnya dalam bidang Pertahanan dan Keamanan yang berlandaskan Pancasila, UUD 1945, Panca Dharma Satya, dan Tri Dharma Perguruan Tinggi.
                </p>
              </div>
              <div className="mt-8 border-t border-slate-100 pt-4 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                Landasan Utama Pengabdian
              </div>
            </Card>
          </div>

          {/* Right Column: Misi Details */}
          <div className="lg:col-span-7 flex">
            <Card className="p-8 md:p-10 border-slate-200/80 bg-white group hover:border-[#945f36]/45 hover:shadow-lg transition duration-300 relative overflow-hidden flex flex-col justify-between w-full">
              <div className="absolute top-0 right-0 h-32 w-32 bg-[radial-gradient(circle_at_top_right,rgba(148,95,54,0.03),transparent_70%)] pointer-events-none" />
              <div className="space-y-6">
                <div className="h-12 w-12 rounded-2xl bg-[#caa472]/10 border border-[#caa472]/20 flex items-center justify-center text-[#945f36]">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#945f36] transition duration-200 uppercase tracking-wide">
                  Misi Satuan
                </h3>
                <ul className="text-xs md:text-sm leading-relaxed text-slate-600 font-medium space-y-4 list-none pl-0">
                  <li className="flex gap-4">
                    <span className="h-6 w-6 rounded-full bg-[#945f36]/10 text-[#945f36] font-bold shrink-0 flex items-center justify-center text-xs">1</span>
                    <span>Menghasilkan SDM yang unggul dalam bidang Pertahanan dan Keamanan, bertaqwa kepada Tuhan Yang Maha Esa, berakhlak tinggi, dan berbudaya Indonesia.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="h-6 w-6 rounded-full bg-[#945f36]/10 text-[#945f36] font-bold shrink-0 flex items-center justify-center text-xs">2</span>
                    <span>Mempersiapkan mahasiswa yang memiliki pengetahuan, sikap disiplin, fisik dan mental serta berwawasan kebangsaan agar mampu melaksanakan Tri Dharma Perguruan Tinggi dan menanamkan dasar-dasar kepemimpinan dengan tetap mengacu pada tujuan pendidikan nasional.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="h-6 w-6 rounded-full bg-[#945f36]/10 text-[#945f36] font-bold shrink-0 flex items-center justify-center text-xs">3</span>
                    <span>Merencanakan, mempersiapkan dan menyusun seluruh potensi mahasiswa untuk memantapkan ketahanan nasional, dengan melaksanakan usaha dan atau kegiatan Bela Negara.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="h-6 w-6 rounded-full bg-[#945f36]/10 text-[#945f36] font-bold shrink-0 flex items-center justify-center text-xs">4</span>
                    <span>Menjalin dan membina hubungan kerja sama yang baik dengan berbagai pihak demi tercapainya persatuan dan kesatuan bangsa.</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Program Kerja Utama Section */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#945f36]">
            Derap Langkah Kegiatan
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">
            Pilar Kegiatan Utama
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Program pembinaan kepemimpinan dan bela negara rutin yang dilakukan oleh Anggota Satuan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <Card className="p-8 border-slate-200/80 bg-white group hover:border-[#945f36]/45 hover:shadow-lg transition duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#945f36]/10 border border-[#945f36]/20 flex items-center justify-center text-[#945f36] transition duration-300 group-hover:bg-[#945f36] group-hover:text-white">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#945f36] transition duration-200 uppercase tracking-wide">
                Pendidikan Dasar (Diklatsar)
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Pendidikan dasar kemiliteran dan pembinaan jasmani untuk menggembleng mental, kedisiplinan, dan jiwa korsa calon anggota baru.
              </p>
            </div>
            <Link href="/program-kerja" className="mt-6 inline-flex items-center gap-1 text-[11px] font-bold text-[#945f36] hover:text-[#744520] uppercase tracking-wider">
              Selengkapnya <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>

          {/* Card 2 */}
          <Card className="p-8 border-slate-200/80 bg-white group hover:border-[#945f36]/45 hover:shadow-lg transition duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#caa472]/10 border border-[#caa472]/20 flex items-center justify-center text-[#caa472] transition duration-300 group-hover:bg-[#caa472] group-hover:text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#945f36] transition duration-200 uppercase tracking-wide">
                Pengamanan & Protokoler
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Pengawalan pejabat kampus, pengamanan upacara akademik, serta penertiban lalu lintas dan keamanan lingkungan kampus.
              </p>
            </div>
            <Link href="/program-kerja" className="mt-6 inline-flex items-center gap-1 text-[11px] font-bold text-[#945f36] hover:text-[#744520] uppercase tracking-wider">
              Selengkapnya <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>

          {/* Card 3 */}
          <Card className="p-8 border-slate-200/80 bg-white group hover:border-[#945f36]/45 hover:shadow-lg transition duration-300 relative overflow-hidden flex-col justify-between flex">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-[#945f36]/10 border border-[#945f36]/20 flex items-center justify-center text-[#945f36] transition duration-300 group-hover:bg-[#945f36] group-hover:text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#945f36] transition duration-200 uppercase tracking-wide">
                Sosial & SAR (Search & Rescue)
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Tanggap darurat bencana alam, bakti sosial kemasyarakatan, serta edukasi penanggulangan bencana di lingkungan sivitas akademika.
              </p>
            </div>
            <Link href="/program-kerja" className="mt-6 inline-flex items-center gap-1 text-[11px] font-bold text-[#945f36] hover:text-[#744520] uppercase tracking-wider">
              Selengkapnya <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Card>
        </div>
      </section>

      {/* 5. News Portal Section */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#945f36]">
              Portal Berita & Informasi
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">
              Kabar Satuan Terbaru
            </h2>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-slate-350 text-slate-700 hover:text-[#945f36] hover:border-[#945f36] hover:bg-slate-50 uppercase tracking-wider text-[11px] font-bold py-5 px-6 rounded-xl transition duration-350">
              Lihat Semua Berita
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col">
              <Card className="flex flex-col h-full p-0 overflow-hidden border-slate-200/80 bg-white hover:border-[#945f36]/45 hover:shadow-lg transition duration-300 hover:-translate-y-1">
                {/* Image panel */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-80" />

                  {/* Category Tag */}
                  <span className="absolute left-4 top-4 rounded-lg bg-[#945f36] px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4 text-slate-900">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                      <Calendar className="h-3.5 w-3.5 text-[#945f36]" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} Baca</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#945f36] transition leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author panel */}
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-8 w-8 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <p className="text-[11px] font-bold text-slate-900 leading-tight">
                        {post.author.name}
                      </p>
                      <p className="text-[9px] text-slate-500 leading-tight font-medium">
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

      {/* 6. Recruitment CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8">
        <Card className="relative p-8 md:p-14 overflow-hidden border border-[#caa472]/20 bg-[#945f36] text-center space-y-8 shadow-xl text-white rounded-[2rem]">
          {/* Ambient background glows */}
          <div className="absolute right-0 bottom-0 h-64 w-64 bg-[#744520]/15 blur-3xl rounded-full -z-10" />
          <div className="absolute left-0 top-0 h-64 w-64 bg-[#caa472]/10 blur-3xl rounded-full -z-10" />

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e7e0d5]">
              Pendaftaran Calon Anggota Baru
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl leading-tight text-white uppercase">
              Siap Mengukir Sejarah & Mengabdi Bersama SATMENWA 874?
            </h2>
            <p className="text-xs md:text-sm text-slate-100 leading-relaxed font-medium">
              Jadilah bagian dari garda kepemimpinan mahasiswa. Daftarkan diri Anda sekarang untuk mengikuti seleksi kesamaptaan dan pembinaan karakter unggul di Politeknik Negeri Malang.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pendaftaran">
              <Button size="lg" className="w-full sm:w-auto uppercase tracking-wider text-xs font-bold gap-2 bg-[#744520] hover:bg-[#5f3616] text-white border border-[#744520] shadow-md shadow-[#744520]/25 transition duration-300 py-6 px-8 rounded-xl cursor-pointer">
                Daftar Recruitment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/kontak">
              <Button variant="outline" size="lg" className="w-full sm:w-auto uppercase tracking-wider text-xs font-bold border-white/20 text-white hover:bg-white/10 hover:border-white py-6 px-8 rounded-xl cursor-pointer">
                Hubungi Markas
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
