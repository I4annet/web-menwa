export interface OrganizationExperience {
  role: string;
  period: string;
  organization: string;
}

export interface ContributionRecord {
  year: string;
  title: string;
  description: string;
}

export interface Member {
  slug: string;
  name: string;
  position: string;
  department: string; // Jurusan
  generation: string; // Angkatan / Yudha
  photo: string;
  fullPhoto?: string;
  status: string;
  bloodType?: string;
  nim?: string;
  entryYear?: string;
  domicile?: string;
  bio: string;
  experiences: OrganizationExperience[];
  contributions: ContributionRecord[];
}

export interface Activity {
  slug: string;
  title: string;
  category: string; // e.g. "2023/2024", "RUTIN", "PENDIDIKAN"
  date: string;
  location: string;
  image: string;
  shortDescription: string;
  description: string[];
  objectives: string[];
  roleDescription: string;
  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}
