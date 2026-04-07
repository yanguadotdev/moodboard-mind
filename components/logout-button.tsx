'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@spb/client'
import { Button } from '@shadcn/button'

export function LogoutButton() {
  const router = useRouter()
  const supabase = createClient()

  const logout = async () => {
    await supabase.auth.signOut()
    router.refresh()

    router.push('/auth/login')
  }

  return (
    <Button
      variant="ghost"
      onClick={logout}
      className="text-zinc-400 hover:text-white hover:bg-zinc-900 monospaced"
    >
      Logout
    </Button>
  )
}
