import type { Metadata } from "next";
import "./globals.css";

import Header from "@/layout/header";
import Footer from "@/layout/footer";

export const metadata: Metadata = {
  title: "Menwa Polinema",
  description: "Website Resimen Mahasiswa Polinema",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}