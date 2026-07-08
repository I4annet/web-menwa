"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ShieldCheck, ArrowLeft, ArrowRight, Check } from "lucide-react";
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
    <Card className="p-8 max-w-2xl mx-auto bg-white border-slate-200/80 shadow-sm hover:shadow-md transition duration-300">
      {/* 1. Step Progress indicator */}
      {status !== "success" && (
        <div className="mb-10">
          <div className="flex justify-between items-center relative after:absolute after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:h-[2px] after:bg-slate-200 after:-z-10 z-10">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition duration-300 ${
                  step > s
                    ? "bg-amber-50 border-amber-200/60 text-[#945f36] font-black"
                    : step === s
                    ? "bg-[#945f36] border-[#945f36] text-white font-bold shadow-md shadow-[#945f36]/20"
                    : "bg-white border-slate-200 text-slate-400"
                }`}
              >
                {step > s ? <Check className="h-4 w-4" /> : s}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] uppercase font-bold tracking-wider text-slate-400">
            <span className={step >= 1 ? "text-[#945f36]" : ""}>Data Diri</span>
            <span className={step >= 2 ? "text-[#945f36]" : ""}>Fisik & Prodi</span>
            <span className={step >= 3 ? "text-[#945f36]" : ""}>Motivasi</span>
          </div>
        </div>
      )}

      {/* 2. Success screen */}
      {status === "success" ? (
        <div className="text-center py-8 space-y-6">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 border border-amber-200/60 text-[#945f36] shadow-md">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-slate-900">Pendaftaran Berhasil!</h3>
            <p className="text-xs text-slate-550 font-medium max-w-md mx-auto leading-relaxed">
              {feedbackMsg}
            </p>
          </div>
          <Button
            onClick={() => {
              setStatus("idle");
              setStep(1);
            }}
            className="bg-[#945f36] hover:bg-[#744520] text-white uppercase tracking-widest text-xs font-bold rounded-full px-6 py-2.5 shadow-sm transition"
          >
            Daftar Kembali
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* STEP 1: Personal Profile details */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">Langkah 1: Identitas Pribadi</h3>
              
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Contoh: Pratama Dewa"
                  {...register("name")}
                  className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                />
                {errors.name && <p className="text-[10px] text-red-500 font-bold">{errors.name.message}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Email Aktif</label>
                  <input
                    type="email"
                    placeholder="nama@domain.com"
                    {...register("email")}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold">{errors.email.message}</p>}
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Nomor WhatsApp</label>
                  <input
                    type="text"
                    placeholder="Contoh: 081234567890"
                    {...register("phone")}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 font-bold">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Jenis Kelamin</label>
                  <select
                    {...register("gender")}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Tanggal Lahir</label>
                  <input
                    type="date"
                    {...register("birthDate")}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                  />
                  {errors.birthDate && <p className="text-[10px] text-red-500 font-bold">{errors.birthDate.message}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Physical & Academic details */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">Langkah 2: Data Akademis & Fisik</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">NIM (Nomor Induk Mahasiswa)</label>
                  <input
                    type="text"
                    placeholder="Contoh: 2341720001"
                    {...register("nim")}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                  />
                  {errors.nim && <p className="text-[10px] text-red-500 font-bold">{errors.nim.message}</p>}
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Program Studi / Kelas</label>
                  <input
                    type="text"
                    placeholder="Contoh: D4 Teknik Informatika / TI-2A"
                    {...register("prodi")}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                  />
                  {errors.prodi && <p className="text-[10px] text-red-500 font-bold">{errors.prodi.message}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Golongan Darah</label>
                  <select
                    {...register("bloodType")}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Tinggi Badan (cm)</label>
                  <input
                    type="number"
                    placeholder="170"
                    {...register("height")}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                  />
                  {errors.height && <p className="text-[10px] text-red-500 font-bold">{errors.height.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Berat Badan (kg)</label>
                  <input
                    type="number"
                    placeholder="60"
                    {...register("weight")}
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                  />
                  {errors.weight && <p className="text-[10px] text-red-500 font-bold">{errors.weight.message}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Motivation & medical details */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">Langkah 3: Minat & Motivasi</h3>
              
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Program Persiapan Pilihan</label>
                <select
                  {...register("program")}
                  className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                >
                  <option value="Pengkaderan">Pembinaan & Pengkaderan Karakter</option>
                  <option value="Latihan">Pelatihan Jasmani & Kesamaptaan</option>
                  <option value="Operasional">Pengamanan & Operasional Lapangan</option>
                  <option value="Pengabdian">Pengabdian & Pengabdian Sosial</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Motivasi Bergabung</label>
                <textarea
                  placeholder="Ceritakan mengapa Anda ingin bergabung dengan MENWA Satuan 811..."
                  rows={4}
                  {...register("motivation")}
                  className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs placeholder-slate-405 focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                />
                {errors.motivation && <p className="text-[10px] text-red-500 font-bold">{errors.motivation.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Riwayat Penyakit (Bila Ada)</label>
                <input
                  type="text"
                  placeholder="Misalnya: Asma (bila tidak ada, kosongi saja)"
                  {...register("diseaseHistory")}
                  className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:border-[#7a1c1c]/50 focus:ring-1 focus:ring-[#7a1c1c]/50 transition duration-300 shadow-sm"
                />
              </div>
            </div>
          )}

          {/* Form Actions (Navigation triggers) */}
          <div className="flex justify-between items-center border-t border-slate-100 pt-6 mt-8">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 uppercase tracking-wider cursor-pointer transition"
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
                className="uppercase tracking-widest text-xs font-bold gap-2 border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                Lanjut <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <button
                type="submit"
                disabled={status === "pending"}
                className="bg-[#945f36] hover:bg-[#744520] text-white uppercase tracking-widest text-xs font-bold rounded-full px-6 py-2.5 shadow-sm transition disabled:opacity-50"
              >
                {status === "pending" ? "Mengirim..." : "Kirim Pendaftaran"}
              </button>
            )}
          </div>

          {feedbackMsg && status === "error" && (
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-[#945f36] text-center font-bold">
              {feedbackMsg}
            </p>
          )}

        </form>
      )}
    </Card>
  );
}
