import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: {
    default: 'Mymind — Tu segundo cerebro visual',
    template: '%s | Mymind'
  },
  description: 'Organiza tus referencias visuales e ideas de forma minimalista y rápida.',
  keywords: ['SaaS', 'Design', 'Moodboard', 'Productivity'],
  authors: [{ name: 'Samir Yangua' }, { name: 'Gael Segura' }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>{children}</body>
    </html>
  );
}
