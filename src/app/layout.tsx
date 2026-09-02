import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-public-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SATMENWA 874 | Politeknik Negeri Malang',
  description:
    'Website resmi SATMENWA 874 Politeknik Negeri Malang. Membentuk kader pemimpin bangsa yang disiplin, tangguh, dan berwawasan kebangsaan berlandaskan Tri Dharma Perguruan Tinggi dan Panca Dharma Satya.',
  keywords: [
    'SATMENWA 874',
    'Menwa Polinema',
    'Resimen Mahasiswa',
    'Politeknik Negeri Malang',
    'Satria Cendekia Utama',
    'Bela Negara',
  ],
  authors: [{ name: 'SATMENWA 874 Politeknik Negeri Malang' }],
  openGraph: {
    title: 'SATMENWA 874 | Politeknik Negeri Malang',
    description:
      'Website resmi SATMENWA 874 Politeknik Negeri Malang. Membentuk kader pimpinan bangsa yang disiplin, berdedikasi, dan berwawasan kebangsaan.',
    siteName: 'SATMENWA 874 Polinema',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={publicSans.variable}>
      <body className="flex flex-col min-h-screen font-sans bg-white text-brand-black antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
