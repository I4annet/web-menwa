import React from "react";
import Link from "next/link";
import { Shield, Mail, MapPin, Camera, Video, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Info/About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-950 text-[#C5A880] border border-[#C5A880]/20 shadow-inner">
                <Shield className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                MENWA POLINEMA
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Unit Kegiatan Mahasiswa Resimen Mahasiswa Politeknik Negeri Malang
              merupakan wadah pembentukan disiplin, kepemimpinan, kesiapsiagaan, dan cinta tanah air bagi civitas akademika.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/menwapolinema"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#C5A880] hover:bg-white/10 transition duration-300"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#C5A880] hover:bg-white/10 transition duration-300"
              >
                <Video className="h-4 w-4" />
              </a>
              <a
                href="mailto:menwa@polinema.ac.id"
                className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-[#C5A880] hover:bg-white/10 transition duration-300"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Tautan Cepat
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition">
                  Beranda (Home)
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-white hover:underline transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/pendidikan" className="hover:text-white hover:underline transition">
                  Pendidikan Dasar
                </Link>
              </li>
              <li>
                <Link href="/program-kerja" className="hover:text-white hover:underline transition">
                  Program Kerja
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white hover:underline transition">
                  Blogger & Berita
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Philosophy */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Widya Castrena Dharma Siddha
            </h3>
            <blockquote className="border-l-2 border-[#C5A880]/40 pl-3 text-xs leading-relaxed text-slate-500 italic">
              "Penyempurnaan Pengabdian Dengan Ilmu Pengetahuan dan Olah Keprajuritan."
              <span className="block mt-1 font-semibold text-slate-400 not-italic uppercase tracking-wider text-[9px]">
                — Semboyan Korps Menwa
              </span>
            </blockquote>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Markas Satuan
            </h3>
            <div className="flex gap-3 items-start text-xs">
              <MapPin className="h-4 w-4 text-[#C5A880] shrink-0 mt-0.5" />
              <p className="text-slate-500 leading-relaxed">
                Gedung UKM Polinema, Lantai 1<br />
                Jl. Soekarno-Hatta No.9, Malang, Jawa Timur, 65141
              </p>
            </div>
            <div className="flex gap-3 items-center text-xs">
              <Mail className="h-4 w-4 text-[#C5A880]" />
              <span className="text-slate-500">menwa@polinema.ac.id</span>
            </div>
            <div className="flex gap-3 items-center text-xs">
              <Globe className="h-4 w-4 text-[#C5A880]" />
              <span className="text-slate-500">spm.polinema.ac.id</span>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Resimen Mahasiswa Politeknik Negeri Malang Satuan 811. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-wider text-slate-700">
            <span>Disiplin</span>
            <span>•</span>
            <span>Dedikasi</span>
            <span>•</span>
            <span>Pengabdian</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
