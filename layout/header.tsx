"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Struktur Organisasi", href: "/organisasi" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 shadow-sm"
          : "bg-white dark:bg-stone-950 border-b border-stone-100 dark:border-stone-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full border border-stone-200 dark:border-stone-800 group-hover:border-amber-500 transition-all duration-300 bg-white p-1 flex items-center justify-center">
              <Image
                src="/logo-menwa.png"
                alt="Logo Menwa"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-200">
                SATMENWA 874
              </span>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 tracking-widest font-semibold">
                Politeknik Negeri Malang
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${isActive
                      ? "text-amber-600 dark:text-amber-500 bg-stone-100 dark:bg-stone-900/60"
                      : "text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 hover:bg-stone-50 dark:hover:bg-stone-900/30"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 focus:outline-none p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900/50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out border-t border-stone-200/50 dark:border-stone-800/80 bg-white dark:bg-stone-950 overflow-hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-semibold tracking-wide transition-all duration-200 ${isActive
                    ? "text-amber-600 dark:text-amber-500 bg-stone-100 dark:bg-stone-900"
                    : "text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-500 hover:bg-stone-50 dark:hover:bg-stone-900/50"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

