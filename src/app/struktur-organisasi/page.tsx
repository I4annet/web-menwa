import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { OrganizationCard } from '@/components/organization/OrganizationCard';
import { members } from '@/data/members';

export const metadata: Metadata = {
  title: 'Struktur Organisasi | SATMENWA 874 Polinema',
  description:
    'Mengenal jajaran kepengurusan Resimen Mahasiswa Politeknik Negeri Malang periode berjalan. Dedikasi dan integritas dalam menjalankan tugas institusi.',
};

export default function OrganizationPage() {
  const commander = members.find((m) => m.position.includes('Komandan')) || members[0];
  const staffMembers = members.filter((m) => m.slug !== commander.slug);

  return (
    <div className="py-12 md:py-16 bg-white min-h-[70vh]">
      <Container>
        {/* Page Header */}
        <SectionTitle
          title="Struktur Organisasi"
          subtitle="Mengenal jajaran kepengurusan Resimen Mahasiswa Politeknik Negeri Malang periode berjalan. Dedikasi dan integritas dalam menjalankan tugas institusi."
          centered
        />

        {/* 1. Commander Card (Centered Top) */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="w-full max-w-md">
            <OrganizationCard member={commander} isLeader={true} />
          </div>
        </div>

        {/* 2. Core Staff Team Grid (4 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div>
          <div className="text-center mb-6">
            <h3 className="text-sm font-bold text-brand-red uppercase tracking-wider">
              Staf Kepengurusan Inti
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
            {staffMembers.map((member) => (
              <OrganizationCard key={member.slug} member={member} isLeader={false} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
