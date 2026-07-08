"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Mail, Phone, Clock, MessageSquare, Send, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(3, "Nama wajib diisi minimal 3 karakter."),
  email: z.string().email("Format alamat email tidak valid."),
  subject: z.string().min(4, "Subjek pesan minimal terdiri dari 4 karakter."),
  message: z.string().min(10, "Pesan wajib diisi minimal 10 karakter."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Kontak() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    // Simulate API call for message sending
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 space-y-16">
      
      {/* 1. Header Section */}
      <section className="space-y-4 text-center max-w-3xl mx-auto pt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-[#945f36] uppercase">
          Hubungi Kami
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl heading-gradient text-slate-900">
          Hubungi Markas Satuan 811
        </h1>
        <p className="text-sm text-slate-555 font-medium leading-relaxed">
          Punya pertanyaan seputar jadwal open recruitment, kemitraan latihan kedisiplinan, atau kegiatan sosial? Silakan hubungi kami melalui media di bawah ini.
        </p>
      </section>

      {/* 2. Grid Info Columns */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        
        {/* Tile 1: Map location */}
        <Card className="p-6 border-slate-200/80 bg-white space-y-3 hover:border-[#945f36]/35 transition duration-350 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200/60 text-[#945f36] flex items-center justify-center">
            <MapPin className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Lokasi Markas</h3>
          <p className="text-xs text-slate-650 font-medium leading-relaxed">
            Gedung UKM Polinema, Lantai 1<br />
            Jl. Soekarno-Hatta No.9, Malang, 65141
          </p>
        </Card>

        {/* Tile 2: Hotlines */}
        <Card className="p-6 border-slate-200/80 bg-white space-y-3 hover:border-[#945f36]/35 transition duration-350 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200/60 text-[#945f36] flex items-center justify-center">
            <Phone className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Kontak WA</h3>
          <p className="text-xs text-slate-650 font-medium leading-relaxed">
            Dansat: +62 812-3456-7890<br />
            Humas: +62 898-7654-3210
          </p>
        </Card>

        {/* Tile 3: Mail info */}
        <Card className="p-6 border-slate-200/80 bg-white space-y-3 hover:border-[#945f36]/35 transition duration-350 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200/60 text-[#945f36] flex items-center justify-center">
            <Mail className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email Resmi</h3>
          <p className="text-xs text-slate-650 font-medium leading-relaxed">
            menwa@polinema.ac.id<br />
            satuan811@polinema.ac.id
          </p>
        </Card>

        {/* Tile 4: Service hours */}
        <Card className="p-6 border-slate-200/80 bg-white space-y-3 hover:border-[#945f36]/35 transition duration-350 shadow-sm">
          <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200/60 text-[#945f36] flex items-center justify-center">
            <Clock className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Jam Piket Markas</h3>
          <p className="text-xs text-slate-650 font-medium leading-relaxed">
            Senin - Jumat: 08.00 - 16.00 WIB<br />
            Sabtu (Latihan): 07.00 - selesai
          </p>
        </Card>

      </section>

      {/* 3. Grid split: Left Form, Right Google Map */}
      <section className="grid gap-12 lg:grid-cols-12 max-w-6xl mx-auto items-start">
        
        {/* Left: Message Inquiry Form */}
        <div className="lg:col-span-6">
          <Card className="p-8 bg-white border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600">
                  <Check className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">Pesan Terkirim!</h3>
                  <p className="text-xs text-slate-650 font-medium">Terima kasih atas pesan Anda. Staf Humas Satuan 811 akan merespons melalui email segera.</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                  className="uppercase tracking-wider text-xs border-slate-200 text-slate-600 hover:text-slate-900"
                >
                  Kirim Pesan Lain
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <MessageSquare className="h-4.5 w-4.5 text-[#945f36]" />
                  Hubungi Melalui Formulir
                </h3>
                
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Nama Anda</label>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    {...register("name")}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#945f36] focus:ring-1 focus:ring-[#945f36] transition duration-300"
                  />
                  {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Alamat Email</label>
                  <input
                    type="email"
                    placeholder="nama@domain.com"
                    {...register("email")}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#945f36] focus:ring-1 focus:ring-[#945f36] transition duration-300"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Subjek Pesan</label>
                  <input
                    type="text"
                    placeholder="Misalnya: Kemitraan Pelatihan / Tanya Diksar"
                    {...register("subject")}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#945f36] focus:ring-1 focus:ring-[#945f36] transition duration-300"
                  />
                  {errors.subject && <p className="text-[10px] text-red-500 font-bold">{errors.subject.message}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Isi Pesan Singkat</label>
                  <textarea
                    placeholder="Tuliskan pertanyaan atau detail kolaborasi Anda secara lengkap..."
                    rows={4}
                    {...register("message")}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#945f36] focus:ring-1 focus:ring-[#945f36] transition duration-300"
                  />
                  {errors.message && <p className="text-[10px] text-red-500 font-bold">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#945f36] text-white hover:bg-[#744520] uppercase tracking-widest text-xs font-bold gap-2 mt-2"
                >
                  {loading ? "Mengirim..." : (
                    <>
                      Kirim Pesan <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* Right: Embedded Google Maps */}
        <div className="lg:col-span-6 h-full min-h-[400px] relative">
          <div className="absolute -inset-2 bg-gradient-to-tr from-amber-100/50 to-orange-100/30 rounded-[2.2rem] opacity-35 blur-xl -z-10" />
          <div className="w-full h-full rounded-[2.2rem] overflow-hidden border border-slate-200 shadow-lg bg-white min-h-[400px]">
            <iframe
              title="Peta Politeknik Negeri Malang"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1i1020!2i768!4f13.1!3m3!1m2!1s0x2e78827f29f0e1cf%3A0x647e30d220970a2d!2sState%20Polytechnic%20of%20Malang!5e0!3m2!1sen!2sid!4v1716180000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-95 contrast-100 hover:opacity-100 transition duration-500"
            />
          </div>
        </div>

      </section>

    </div>
  );
}
