"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Tentang", path: "/tentang" },
  { label: "Pendidikan", path: "/pendidikan" },
  { label: "Program Kerja", path: "/program-kerja" },
  { label: "Blog", path: "/blog" },
  { label: "Kontak", path: "/kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full",
        scrolled
          ? "bg-slate-950/80 border-b border-white/10 backdrop-blur-md py-3"
          : "bg-slate-950/40 border-b border-transparent backdrop-blur-sm py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-800 to-red-950 text-[#C5A880] shadow-md shadow-red-950/40 transition group-hover:scale-105 border border-[#C5A880]/30">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <span className="text-base font-bold tracking-wider text-white uppercase block">
              MENWA POLINEMA
            </span>
            <span className="text-[9px] tracking-[0.2em] font-medium text-[#C5A880] uppercase block -mt-1">
              Satuan 811 • Malang
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.path ||
              (item.path !== "/" && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "transition-all duration-200 py-1 relative hover:text-white uppercase tracking-wider text-xs",
                  isActive
                    ? "text-[#C5A880] font-semibold"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-red-700 to-[#C5A880]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link href="/pendaftaran">
            <Button variant="accent" size="sm" className="uppercase tracking-wider text-xs font-bold">
              Gabung Sekarang
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition md:hidden cursor-pointer"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[69px] z-40 bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-6 md:hidden transition-all duration-300 transform shadow-2xl",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive =
              pathname === item.path ||
              (item.path !== "/" && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium py-2 px-4 rounded-xl transition uppercase tracking-wider text-xs",
                  isActive
                    ? "bg-red-950/50 text-[#C5A880] border-l-2 border-[#C5A880] font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/pendaftaran" onClick={() => setIsOpen(false)} className="w-full">
          <Button variant="accent" className="w-full uppercase tracking-wider text-xs font-bold py-3">
            Gabung Sekarang
          </Button>
        </Link>
      </div>
    </header>
  );
}
