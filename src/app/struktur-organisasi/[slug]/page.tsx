import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { members, getMemberBySlug } from '@/data/members';
import { MemberProfileView } from '@/components/organization/MemberProfileView';

interface MemberPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return members.map((member) => ({
    slug: member.slug,
  }));
}

export function generateMetadata({ params }: MemberPageProps): Metadata {
  const member = getMemberBySlug(params.slug);
  if (!member) {
    return {
      title: 'Anggota Tidak Ditemukan | SATMENWA 874 Polinema',
    };
  }

  return {
    title: `${member.name} - ${member.position} | SATMENWA 874 Polinema`,
    description: `Biodata resmi ${member.name}, ${member.position} SATMENWA 874 Politeknik Negeri Malang. ${member.bio.substring(0, 150)}...`,
  };
}

export default function MemberDetailPage({ params }: MemberPageProps) {
  const member = getMemberBySlug(params.slug);

  if (!member) {
    notFound();
  }

  return <MemberProfileView member={member} />;
}
