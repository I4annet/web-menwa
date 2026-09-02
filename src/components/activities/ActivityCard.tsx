import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { Activity } from '@/types';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const isPendidikan = activity.category.toUpperCase() === 'PENDIDIKAN';
  const isRutin = activity.category.toUpperCase() === 'RUTIN';

  return (
    <article className="bg-white border border-brand-gray-200 rounded overflow-hidden flex flex-col hover:border-brand-red hover:shadow-md transition-all duration-200 group">
      {/* Media Box */}
      <div className="relative w-full h-52 sm:h-56 bg-brand-gray-100 overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div
          className={`absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm ${
            isPendidikan
              ? 'bg-brand-red text-white'
              : isRutin
              ? 'bg-brand-black text-brand-gold'
              : 'bg-brand-black text-white'
          }`}
        >
          {activity.category}
        </div>
      </div>

      {/* Content Box */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors">
          {activity.title}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-brand-gray-500 font-medium mb-3">
          <Calendar className="w-3.5 h-3.5 text-brand-red" />
          <span>{activity.date}</span>
        </div>

        <p className="text-sm text-brand-gray-600 line-clamp-3 mb-5 flex-grow leading-relaxed">
          {activity.shortDescription}
        </p>

        <div className="mt-auto pt-2">
          <Link
            href={`/kegiatan/${activity.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded transition-colors"
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
