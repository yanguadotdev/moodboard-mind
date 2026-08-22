import { VaultProvider } from '@vault/providers/vault-provider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Gestiona tus ideas y referencias visuales'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <VaultProvider>{children}</VaultProvider>
}
