"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Organisasi", path: "/organisasi" },
  { label: "Program Kerja", path: "/program-kerja" },
  { label: "Pendidikan", path: "/pendidikan" },
  { label: "Tentang", path: "/tentang" },
  { label: "Blog", path: "/blog" },
  { label: "Kontak", path: "/kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function NavLink({ item }: { item: { label: string; path: string } }) {
    const active =
      pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
    return (
      <Link
        href={item.path}
        className={`transition-all duration-200 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider ${
          active
            ? "bg-[#744520] text-white shadow-sm"
            : "text-[#e7e0d5] hover:bg-white/5 hover:text-white"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#945f36] h-20 shadow-md border-b border-white/10">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20 shadow-inner bg-white flex items-center justify-center shrink-0">
            <img
              src="/logo-menwa.jpg"
              alt="Logo Satmenwa 874"
              className="h-[90%] w-[90%] rounded-full object-cover"
            />
          </div>
          <div>
            <span className="text-base font-black tracking-wider text-white uppercase block group-hover:text-[#e7e0d5] transition-colors duration-200">
              SATMENWA 874
            </span>
            <span className="text-[9px] tracking-[0.15em] font-semibold text-[#e7e0d5] uppercase block -mt-1">
              POLITEKNIK NEGERI MALANG
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link href="/pendaftaran">
            <Button
              variant="accent"
              size="sm"
              className="uppercase tracking-wider text-[10px] font-extrabold border border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-lg shadow-sm"
            >
              Gabung Sekarang
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-[#e7e0d5] hover:bg-white/10 transition md:hidden cursor-pointer"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-x-0 top-20 z-40 bg-[#945f36] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden transition-all duration-300 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active =
                pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-bold py-2.5 px-4 rounded-lg transition-all duration-200 uppercase tracking-wider ${
                    active
                      ? "bg-[#744520] text-white"
                      : "text-[#e7e0d5] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/pendaftaran" onClick={() => setIsOpen(false)} className="w-full">
            <Button
              variant="accent"
              className="w-full uppercase tracking-wider text-xs font-bold py-3 border border-white/20 bg-white/10 text-white"
            >
              Gabung Sekarang
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
