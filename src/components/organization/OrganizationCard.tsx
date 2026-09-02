import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, User } from 'lucide-react';
import { Member } from '@/types';

interface OrganizationCardProps {
  member: Member;
  isLeader?: boolean;
}

export function OrganizationCard({ member, isLeader = false }: OrganizationCardProps) {
  return (
    <div className="bg-white border border-brand-gray-200 rounded overflow-hidden flex flex-col group hover:border-brand-red hover:shadow-md transition-all duration-300">
      {/* Photo Container */}
      <div
        className={`w-full relative bg-brand-gray-100 overflow-hidden ${
          isLeader ? 'h-72 sm:h-80' : 'h-60 sm:h-64'
        }`}
      >
        <Image
          src={member.photo}
          alt={`Foto formal ${member.position} - ${member.name}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />

        {/* Hover Overlay on Desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-end justify-center pb-4">
          <Link
            href={`/struktur-organisasi/${member.slug}`}
            className="text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 bg-brand-red px-4 py-2 rounded hover:bg-brand-red-dark transition-colors shadow"
          >
            <span>Lihat Biodata</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Info Container */}
      <div className={`p-5 text-center flex-grow flex flex-col justify-between`}>
        <div>
          {/* Position Badge */}
          <div
            className={`text-xs font-bold py-1 px-3 rounded-full inline-block mx-auto mb-2 uppercase tracking-wide ${
              isLeader
                ? 'bg-brand-red text-white'
                : 'bg-brand-black text-white'
            }`}
          >
            {member.position}
          </div>

          {/* Member Name */}
          <h3 className="text-lg font-bold text-brand-black mb-1 group-hover:text-brand-red transition-colors">
            {member.name}
          </h3>

          {/* Department / Major */}
          <p className="text-sm font-medium text-brand-gray-600">
            {member.department}
          </p>

          <p className="text-xs text-brand-gray-400 mt-1">
            {member.generation}
          </p>
        </div>

        {/* Action Link for Mobile */}
        <div className="mt-4 pt-3 border-t border-brand-gray-100 md:hidden">
          <Link
            href={`/struktur-organisasi/${member.slug}`}
            className="w-full inline-flex items-center justify-center gap-1.5 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold text-xs uppercase py-2 px-3 rounded transition-colors"
          >
            <span>Lihat Biodata</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
