import type { Metadata } from 'next';
import { Exo } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

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
    <html lang="pt-BR">
      <body className={`${exo.variable} antialiased max-w-[1440px]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
