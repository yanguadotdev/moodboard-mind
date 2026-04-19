import type { Metadata } from 'next';
import { MindStoreProvider } from '@/providers/mind-store-provider';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Gestiona tus ideas y referencias visuales'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MindStoreProvider>{children}</MindStoreProvider>;
}
