import Link from 'next/link'
import { getAuthContext } from '../services/session'

export async function AuthButton() {
  const { isAuthenticated } = await getAuthContext()

  const config = isAuthenticated
    ? { href: '/dashboard', label: 'Ingresar a mi Vault' }
    : { href: '/auth/login', label: 'Join the mind' }

  return (
    <Link
      href={config.href}
      className='px-8 py-4 bg-white text-black font-mono font-bold rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105'
    >
      {config.label}
    </Link>
  )
}

export function AuthButtonSkeleton() {
  return (
    <div className='px-8 py-4 bg-zinc-800 text-transparent font-mono font-bold rounded-full animate-pulse'>
      Cargando...
    </div>
  )
}
