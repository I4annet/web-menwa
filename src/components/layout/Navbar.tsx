'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const navItems = [
  { name: 'BERANDA', href: '/' },
  { name: 'STRUKTUR ORGANISASI', href: '/struktur-organisasi' },
  { name: 'PROGRAM KERJA & KEGIATAN', href: '/kegiatan' },
  { name: 'KONTAK', href: '/kontak' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white border-b border-brand-gray-200 sticky top-0 z-50 shadow-sm transition-colors">
      <Container className="flex justify-between items-center h-20">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-red rounded"
        >
          <div className="relative w-10 h-10 shrink-0">
            <Image
              src="/images/logo/satmenwa-874-badge.png"
              alt="Logo SATMENWA 874 Polinema"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-brand-black group-hover:text-brand-red transition-colors">
              MENWA POLINEMA
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-brand-gray-500 uppercase">
              SATMENWA 874
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-1 lg:gap-6 items-center h-full ml-auto">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold text-xs lg:text-sm uppercase tracking-wider h-full flex items-center px-3 transition-colors duration-200 ${active
                    ? 'text-brand-red border-b-2 border-brand-red font-bold'
                    : 'text-brand-gray-700 hover:text-brand-red hover:bg-brand-gray-50'
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-black hover:text-brand-red rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
          aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-gray-200 px-4 pt-2 pb-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded text-sm font-semibold tracking-wider uppercase transition-colors flex items-center justify-between ${active
                      ? 'bg-primary-light text-brand-red border-l-4 border-brand-red font-bold'
                      : 'text-brand-gray-700 hover:bg-brand-gray-100 hover:text-brand-black'
                    }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
