import { WorkProgram } from "@/types";

export const mockPrograms: WorkProgram[] = [
  {
    id: "prog-ldk",
    title: "LDK (Latihan Dasar Kepemimpinan)",
    category: "Bela Negara",
    description: "Pelatihan kepemimpinan tingkat dasar untuk menanamkan jiwa kemandirian, etika organisasi, tanggung jawab, serta teknik manajemen kepemimpinan bagi calon perwira dan pengurus baru.",
    schedule: "Oktober (Tahunan)",
    icon: "BookOpen",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
  },
  {
    id: "prog-upacara",
    title: "Upacara 17 Agustus",
    category: "Bela Negara",
    description: "Partisipasi aktif personel SATMENWA 874 dalam barisan upacara kehormatan, pengamanan keprotokolan kampus, serta pendampingan pengibaran Bendera Merah Putih dalam rangka HUT Kemerdekaan RI.",
    schedule: "17 Agustus (Tahunan)",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600"
  },
  {
    id: "prog-dipam",
    title: "DIPAM Wisuda Polinema",
    category: "Protokoler",
    description: "Dinas Pengamanan dan Protokol (DIPAM) bertugas untuk menjamin keamanan acara, mengawal jajaran Senat Akademik Polinema, serta mengarahkan alur kedatangan tamu penting/VIP.",
    schedule: "3-4 Kali Setahun (Tiap Wisuda)",
    icon: "Award",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600"
  },
  {
    id: "prog-pradiksar",
    title: "PRADIKSAR (Pra Pendidikan Dasar)",
    category: "Operasional",
    description: "Pembekalan fisik, kesamaptaan jasmani, mental ideologi, tata upacara militer dasar, dan orientasi medan di lingkungan kampus sebagai bekal kesiapan sebelum mengikuti pendidikan militer pusat.",
    schedule: "November (Tahunan)",
    icon: "Activity",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=600"
  },
  {
    id: "prog-diksar",
    title: "DIKSAR (Pendidikan Dasar)",
    category: "Operasional",
    description: "Pendidikan Latihan Dasar militer resmi di bawah komando TNI (Rindam V/Brawijaya) untuk melatih navigasi darat, menembak taktis, taktik pertempuran dasar, pertahanan pangkalan, dan survival hutan.",
    schedule: "Desember - Januari (Tahunan)",
    icon: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1579721591244-607c9bb09825?q=80&w=600"
  }
];
