import React from 'react';
import Image from 'next/image';

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ActivityGalleryProps {
  gallery: GalleryItem[];
}

export function ActivityGallery({ gallery }: ActivityGalleryProps) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2 border-b border-brand-gray-200 pb-2">
        <span>Dokumentasi Kegiatan</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white border border-brand-gray-200 rounded overflow-hidden shadow-sm hover:border-brand-red transition-all"
          >
            <div className="relative aspect-[4/3] bg-brand-gray-100 overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {item.caption && (
              <div className="p-2.5 text-xs text-brand-gray-600 bg-white">
                {item.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
