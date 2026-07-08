import React from "react";
import { Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e130c] border-t border-[#caa472]/15 text-amber-100/60 text-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2">

          {/* Left Column: Slogan Menwa */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#caa472]">
              Slogan Menwa
            </h3>
            <div className="border-l-4 border-[#caa472]/60 pl-4 space-y-2 bg-[#945f36]/10 p-4 rounded-r-2xl border-y border-r border-white/5">
              <p className="text-lg font-black tracking-wide text-[#fdfbf7] uppercase italic">
                WIDYA CASTRENA DHARMA SIDDHA
              </p>
              <p className="text-xs font-semibold text-amber-105/80 leading-relaxed">
                "Penyempurnaan Pengabdian Dengan Ilmu Pengetahuan dan Olah Keprajuritan."
              </p>
            </div>
          </div>

          {/* Right Column: Alamat & Kontak */}
          <div className="space-y-4 md:pl-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#caa472]">
              Markas Satuan & Kontak
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start text-xs">
                <MapPin className="h-4.5 w-4.5 text-[#caa472] shrink-0 mt-0.5" />
                <div className="text-amber-100/80 font-medium leading-relaxed">
                  <p className="font-bold text-white">Markas Komando Satmenwa 874</p>
                  <p>Gedung AS Lantai 1, Politeknik Negeri Malang</p>
                  <p>Jl. Soekarno-Hatta No.9, Lowokwaru, Malang, Jawa Timur 65141</p>
                </div>
              </div>
              <div className="flex gap-3 items-center text-xs">
                <Mail className="h-4.5 w-4.5 text-[#caa472] shrink-0" />
                <a href="mailto:menwa@polinema.ac.id" className="text-amber-100/80 hover:text-white font-semibold underline transition duration-200">
                  menwa@polinema.ac.id
                </a>
              </div>
              <div className="flex gap-3 items-center text-xs">
                <Globe className="h-4.5 w-4.5 text-[#caa472] shrink-0" />
                <a href="https://spm.polinema.ac.id" target="_blank" rel="noopener noreferrer" className="text-amber-100/80 hover:text-white font-semibold underline transition duration-200">
                  spm.polinema.ac.id
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold">
          <p className="text-center text-amber-100/40">
            &copy; {new Date().getFullYear()} SATMENWA 874 POLITEKNIK NEGERI MALANG. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 uppercase tracking-widest text-[#caa472]">
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
