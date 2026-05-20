export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Kegiatan' | 'Opini' | 'Panduan' | 'Berita';
  readTime: string;
  date: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export interface WorkProgram {
  id: string;
  title: string;
  category: 'Operasional' | 'Bela Negara' | 'Pengabdian' | 'Protokoler';
  description: string;
  schedule: string;
  icon: string;
}

export interface EducationStep {
  id: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
}

export interface RecruitmentFormValues {
  name: string;
  email: string;
  phone: string;
  nim: string;
  prodi: string;
  gender: 'Laki-laki' | 'Perempuan';
  birthDate: string;
  bloodType: string;
  height: number;
  weight: number;
  program: 'Pengkaderan' | 'Latihan' | 'Operasional' | 'Pengabdian';
  motivation: string;
  diseaseHistory?: string;
}
