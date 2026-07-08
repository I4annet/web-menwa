"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1579721591244-607c9bb09825?q=80&w=1200",
    title: "DISIPLIN & TANGGUNG JAWAB",
    subtitle: "Membentuk pribadi mahasiswa yang tangguh, berkarakter kepemimpinan kuat, dan memiliki jiwa korsa tinggi."
  },
  {
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200",
    title: "PENGABDIAN NEGARA & BANGSA",
    subtitle: "Widya Castrena Dharma Siddha - Penyempurnaan Pengabdian dengan Ilmu Pengetahuan dan Olah Keprajuritan."
  },
  {
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200",
    title: "PELATIHAN TINGKAT TINGGI",
    subtitle: "Pembinaan kesamaptaan jasmani, wawasan kebangsaan, pertahanan sipil, dan operasi tanggap bencana (SAR)."
  }
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[550px] md:h-[600px] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 shadow-2xl">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-[0.35]"
          />
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#945f36] bg-amber-50 border border-amber-200/60 uppercase">
                SATMENWA 874 POLINEMA
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base text-slate-350 font-medium leading-relaxed max-w-xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-950/60 border border-white/10 text-white hover:bg-[#945f36] hover:border-[#caa472]/50 transition duration-300 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-950/60 border border-white/10 text-white hover:bg-[#945f36] hover:border-[#caa472]/50 transition duration-300 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === current ? "w-8 bg-[#caa472]" : "w-2.5 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
