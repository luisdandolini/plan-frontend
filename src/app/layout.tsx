import type { Metadata } from 'next';
import { Exo } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-exo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Plan Frontend',
  description: 'Plan Frontend - Countrys',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="flex flex-col items-center justify-center">
      <body className={`${exo.variable} antialiased w-full`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
