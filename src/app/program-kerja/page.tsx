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

const categories = ["Semua", "Operasional", "Bela Negara", "Pengabdian", "Protokoler"];

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
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 space-y-16">
      {/* 1. Header Section */}
      <section className="space-y-4 text-center max-w-3xl mx-auto pt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/30 bg-slate-900/40 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#C5A880] uppercase">
          Agenda Tahunan
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl heading-gradient">
          Program Kerja Satuan 811
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Rencana kegiatan rutin dan strategis yang dijalankan demi kedisiplinan sivitas akademika, pengamanan kegiatan kampus, serta bakti sosial kemasyarakatan.
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
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition duration-300 border cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-red-950/60 border-red-900 text-[#C5A880] shadow-inner"
                    : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box input */}
          <div className="relative max-w-xs w-full">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Cari program kerja..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/40 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
            />
          </div>

        </div>
      </section>

      {/* 3. Programs Grid list */}
      <section className="max-w-6xl mx-auto">
        {filteredPrograms.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((prog) => {
              const IconComp = iconMap[prog.icon] || ShieldAlert;
              return (
                <Card
                  key={prog.id}
                  variant="gold-border"
                  className="p-6 flex flex-col justify-between hover:border-[#C5A880]/40 transition duration-300"
                >
                  <div className="space-y-4">
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="h-10 w-10 rounded-xl bg-slate-950 border border-slate-800 text-[#C5A880] flex items-center justify-center shrink-0">
                        <IconComp className="h-4 w-4" />
                      </div>
                      <span className="rounded-lg bg-slate-900 border border-slate-850 px-2.5 py-1 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        {prog.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-white leading-tight">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed min-h-[72px]">
                        {prog.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer schedule */}
                  <div className="mt-6 border-t border-white/5 pt-4 flex items-center gap-2.5 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    <Calendar className="h-3.5 w-3.5 text-[#C5A880]" />
                    <span>Jadwal: {prog.schedule}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 rounded-3xl bg-slate-900/10 border border-slate-800/80 max-w-xl mx-auto space-y-2">
            <ShieldAlert className="h-8 w-8 text-slate-500 mx-auto" />
            <h3 className="text-sm font-bold text-white">Program tidak ditemukan</h3>
            <p className="text-xs text-slate-500">Coba ubah filter kategori atau kata kunci pencarian Anda.</p>
          </div>
        )}
      </section>

      {/* 4. Support banner */}
      <section className="max-w-4xl mx-auto rounded-3xl bg-red-950/20 border border-red-900/40 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 md:max-w-xl text-center md:text-left">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Ingin Berkolaborasi Bersama MENWA Satuan 811?</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Kami menerima kemitraan kegiatan pembinaan disiplin sekolah, kepramukaan, pengamanan seminar/acara besar, donor darah, hingga edukasi kebencanaan.
          </p>
        </div>
        <Button variant="accent" size="sm" className="uppercase tracking-wider text-xs font-bold shrink-0">
          Ajukan Kemitraan
        </Button>
      </section>

    </div>
  );
}
