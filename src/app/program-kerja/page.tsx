"use client";

import React, { useState } from "react";
import { ShieldAlert, Award, BookOpen, Activity, Heart, Sparkles, Calendar, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockPrograms } from "@/data/programs";

// Helper to map icon names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldAlert: ShieldAlert,
  Award: Award,
  BookOpen: BookOpen,
  Activity: Activity,
  Heart: Heart,
  Sparkles: Sparkles,
};

const categories = ["Semua", "Operasional", "Bela Negara", "Protokoler"];

export default function ProgramKerja() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = mockPrograms.filter((prog) => {
    const matchesCategory =
      selectedCategory === "Semua" || prog.category === selectedCategory;
    const matchesSearch =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 space-y-16 pt-28">
      {/* 1. Header Section */}
      <section className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-[#945f36] uppercase">
          Agenda Utama
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl heading-gradient">
          Program Kerja SATMENWA 874
        </h1>
        <p className="text-sm text-slate-505 font-medium leading-relaxed">
          Rencana kegiatan pembinaan mental, kepemimpinan, keprotokolan wisuda, serta pendidikan militer dasar resmi di Politeknik Negeri Malang.
        </p>
      </section>

      {/* 2. Controls (Category filters & Search) */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-xl transition duration-300 border cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#945f36] border-[#945f36] text-white shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box input */}
          <div className="relative max-w-xs w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Cari agenda kegiatan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl py-2.5 pl-10 pr-4 text-xs placeholder-slate-400 focus:outline-none focus:border-[#945f36]/50 focus:ring-1 focus:ring-[#945f36]/50 transition duration-300 shadow-sm"
            />
          </div>

        </div>
      </section>

      {/* 3. Programs Grid list */}
      <section className="max-w-6xl mx-auto">
        {filteredPrograms.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((prog) => {
              const IconComp = iconMap[prog.icon] || ShieldAlert;
              return (
                <Card
                  key={prog.id}
                  className="p-0 overflow-hidden flex flex-col justify-between border-slate-200/80 bg-white hover:border-[#945f36]/45 hover:shadow-lg transition duration-300 group"
                >
                  <div className="space-y-4 flex flex-col">
                    {/* Image / Documentation */}
                    {prog.image && (
                      <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-100">
                        <img
                          src={prog.image}
                          alt={prog.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-85" />
                        <span className="absolute right-4 top-4 rounded-lg bg-[#945f36] px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                          {prog.category}
                        </span>
                      </div>
                    )}

                    <div className="px-6 pb-2 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-amber-50 border border-amber-200/60 text-[#945f36] flex items-center justify-center shrink-0">
                          <IconComp className="h-4.5 w-4.5" />
                        </div>
                        <h3 className="text-base font-black text-slate-900 group-hover:text-[#945f36] transition duration-200 leading-tight">
                          {prog.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed min-h-[72px]">
                        {prog.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer schedule */}
                  <div className="mx-6 mb-6 mt-4 border-t border-slate-100 pt-4 flex items-center gap-2.5 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    <Calendar className="h-3.5 w-3.5 text-[#945f36]" />
                    <span className="text-slate-550 font-medium">Jadwal: {prog.schedule}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 rounded-3xl bg-white border border-slate-200 max-w-xl mx-auto space-y-2 shadow-sm">
            <ShieldAlert className="h-8 w-8 text-slate-450 mx-auto" />
            <h3 className="text-sm font-bold text-slate-900">Program tidak ditemukan</h3>
            <p className="text-xs text-slate-500">Coba ubah filter kategori atau kata kunci pencarian Anda.</p>
          </div>
        )}
      </section>

      {/* 4. Support banner */}
      <section className="max-w-4xl mx-auto rounded-3xl bg-[#945f36]/5 border border-[#945f36]/20 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 md:max-w-xl text-center md:text-left">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Ingin Berkolaborasi Bersama SATMENWA 874?</h4>
          <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
            Kami menerima kemitraan kegiatan pembinaan disiplin sekolah, kepramukaan, pengamanan seminar/acara besar, donor darah, hingga edukasi kebencanaan.
          </p>
        </div>
        <Button variant="accent" size="sm" className="uppercase tracking-wider text-xs font-bold shrink-0 bg-[#945f36] hover:bg-[#744520] text-white border border-[#945f36] transition-all duration-300 shadow-sm">
          Ajukan Kemitraan
        </Button>
      </section>

    </div>
  );
}
