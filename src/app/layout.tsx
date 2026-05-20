import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MENWA Polinema | Resimen Mahasiswa Satuan 811 Malang",
  description: "Website resmi pengenalan UKM Resimen Mahasiswa (MENWA) Politeknik Negeri Malang Satuan 811. Disiplin, Kepemimpinan, dan Pengabdian.",
  keywords: ["menwa", "polinema", "resimen mahasiswa", "malang", "pendaftaran menwa", "diklatsar", "bela negara"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
