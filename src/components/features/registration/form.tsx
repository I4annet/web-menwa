"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ShieldCheck, UserCheck, Activity, Heart, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { submitRegistration } from "@/lib/db";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { RecruitmentFormValues } from "@/types";

const registrationSchema = z.object({
  name: z.string().min(3, "Nama lengkap minimal terdiri dari 3 karakter."),
  email: z.string().email("Format alamat email tidak valid."),
  phone: z.string().min(10, "Nomor WhatsApp aktif minimal 10 digit."),
  nim: z.string().min(7, "NIM Politeknik Negeri Malang minimal 7 karakter."),
  prodi: z.string().min(3, "Program studi / Jurusan wajib ditulis lengkap."),
  gender: z.enum(["Laki-laki", "Perempuan"]),
  birthDate: z.string().min(1, "Tanggal lahir wajib diisi."),
  bloodType: z.string().min(1, "Golongan darah wajib dipilih."),
  height: z.coerce.number().min(140, "Tinggi badan minimal adalah 140 cm.").max(220),
  weight: z.coerce.number().min(35, "Berat badan minimal adalah 35 kg.").max(150),
  program: z.enum(["Pengkaderan", "Latihan", "Operasional", "Pengabdian"]),
  motivation: z.string().min(10, "Motivasi bergabung minimal diisi 10 karakter."),
  diseaseHistory: z.string().optional(),
});

type FormData = z.infer<typeof registrationSchema>;

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(registrationSchema) as any,
    defaultValues: {
      gender: "Laki-laki",
      bloodType: "O",
      program: "Pengkaderan",
    },
    mode: "onBlur",
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) {
      fieldsToValidate = ["name", "email", "phone", "gender", "birthDate"];
    } else if (step === 2) {
      fieldsToValidate = ["nim", "prodi", "bloodType", "height", "weight"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: FormData) => {
    setStatus("pending");
    try {
      const response = await submitRegistration(data as RecruitmentFormValues);
      if (response.success) {
        setStatus("success");
        setFeedbackMsg(response.message);
        reset();
      } else {
        setStatus("error");
        setFeedbackMsg(response.message || "Terjadi kesalahan saat memproses pendaftaran.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setFeedbackMsg("Terjadi kegagalan koneksi database. Silakan coba sesaat lagi.");
    }
  };

  return (
    <Card variant="gold-border" className="p-8 max-w-2xl mx-auto bg-slate-900/30">
      {/* 1. Step Progress indicator */}
      {status !== "success" && (
        <div className="mb-10">
          <div className="flex justify-between items-center relative after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:h-[2px] after:bg-slate-800 after:-z-10 z-10">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition duration-300 ${
                  step > s
                    ? "bg-[#C5A880] border-[#C5A880] text-slate-950 font-bold"
                    : step === s
                    ? "bg-red-950 border-red-800 text-white font-bold shadow-lg shadow-red-900/30"
                    : "bg-slate-950 border-slate-800 text-slate-500"
                }`}
              >
                {step > s ? <Check className="h-4.5 w-4.5" /> : s}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] uppercase font-bold tracking-wider text-slate-500">
            <span className={step >= 1 ? "text-white" : ""}>Data Diri</span>
            <span className={step >= 2 ? "text-white" : ""}>Fisik & Prodi</span>
            <span className={step >= 3 ? "text-white" : ""}>Motivasi</span>
          </div>
        </div>
      )}

      {/* 2. Success screen */}
      {status === "success" ? (
        <div className="text-center py-8 space-y-6">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-amber-700 via-[#C5A880] to-[#AA7C11] text-slate-950 shadow-lg shadow-amber-900/20">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-white">Pendaftaran Berhasil!</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              {feedbackMsg}
            </p>
          </div>
          <Button
            variant="accent"
            size="sm"
            onClick={() => {
              setStatus("idle");
              setStep(1);
            }}
            className="uppercase tracking-widest text-xs font-bold"
          >
            Daftar Kembali
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* STEP 1: Personal Profile details */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white border-b border-white/5 pb-2">Langkah 1: Identitas Pribadi</h3>
              
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Contoh: Pratama Dewa"
                  {...register("name")}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                />
                {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name.message}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Aktif</label>
                  <input
                    type="email"
                    placeholder="nama@domain.com"
                    {...register("email")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email.message}</p>}
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Nomor WhatsApp</label>
                  <input
                    type="text"
                    placeholder="Contoh: 081234567890"
                    {...register("phone")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Jenis Kelamin</label>
                  <select
                    {...register("gender")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Tanggal Lahir</label>
                  <input
                    type="date"
                    {...register("birthDate")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                  />
                  {errors.birthDate && <p className="text-[10px] text-red-500 font-bold">{errors.birthDate.message}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Physical & Academic details */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white border-b border-white/5 pb-2">Langkah 2: Data Akademis & Fisik</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">NIM (Nomor Induk Mahasiswa)</label>
                  <input
                    type="text"
                    placeholder="Contoh: 2341720001"
                    {...register("nim")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                  />
                  {errors.nim && <p className="text-[10px] text-red-500 font-bold">{errors.nim.message}</p>}
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Program Studi / Kelas</label>
                  <input
                    type="text"
                    placeholder="Contoh: D4 Teknik Informatika / TI-2A"
                    {...register("prodi")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                  />
                  {errors.prodi && <p className="text-[10px] text-red-500 font-bold">{errors.prodi.message}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Golongan Darah</label>
                  <select
                    {...register("bloodType")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Tinggi Badan (cm)</label>
                  <input
                    type="number"
                    placeholder="170"
                    {...register("height")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                  />
                  {errors.height && <p className="text-[10px] text-red-500 font-bold">{errors.height.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Berat Badan (kg)</label>
                  <input
                    type="number"
                    placeholder="60"
                    {...register("weight")}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                  />
                  {errors.weight && <p className="text-[10px] text-red-500 font-bold">{errors.weight.message}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Motivation & medical details */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white border-b border-white/5 pb-2">Langkah 3: Minat & Motivasi</h3>
              
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Program Persiapan Pilihan</label>
                <select
                  {...register("program")}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                >
                  <option value="Pengkaderan">Pembinaan & Pengkaderan Karakter</option>
                  <option value="Latihan">Pelatihan Jasmani & Kesamaptaan</option>
                  <option value="Operasional">Pengamanan & Operasional Lapangan</option>
                  <option value="Pengabdian">Pengabdian & Pengabdian Sosial</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Motivasi Bergabung</label>
                <textarea
                  placeholder="Ceritakan mengapa Anda ingin bergabung dengan MENWA Satuan 811..."
                  rows={4}
                  {...register("motivation")}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                />
                {errors.motivation && <p className="text-[10px] text-red-500 font-bold">{errors.motivation.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Riwayat Penyakit (Bila Ada)</label>
                <input
                  type="text"
                  placeholder="Misalnya: Asma (bila tidak ada, kosongi saja)"
                  {...register("diseaseHistory")}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#C5A880]/50 transition duration-300"
                />
              </div>
            </div>
          )}

          {/* Form Actions (Navigation triggers) */}
          <div className="flex justify-between items-center border-t border-white/5 pt-6 mt-8">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider cursor-pointer transition"
              >
                <ArrowLeft className="h-4 w-4" /> Kembali
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                variant="outline"
                size="sm"
                className="uppercase tracking-widest text-xs font-bold gap-2"
              >
                Lanjut <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                variant="accent"
                size="sm"
                disabled={status === "pending"}
                className="uppercase tracking-widest text-xs font-bold"
              >
                {status === "pending" ? "Mengirim..." : "Kirim Pendaftaran"}
              </Button>
            )}
          </div>

          {feedbackMsg && status === "error" && (
            <p className="mt-4 rounded-xl border border-red-900/60 bg-red-950/20 px-4 py-3 text-xs text-red-400 text-center font-bold">
              {feedbackMsg}
            </p>
          )}

        </form>
      )}
    </Card>
  );
}
