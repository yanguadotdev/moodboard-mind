'use client'

import { Logout } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from '@ui/button'
import { signOut } from '../services/actions'

export function LogoutButton() {
  return (
    <Button variant='outline' onClick={signOut} className='text-zinc-400 hover:text-white hover:bg-zinc-900 monospaced'>
      <HugeiconsIcon icon={Logout} size={24} color='currentColor' strokeWidth={1.5} />
      Logout
    </Button>
  )
}
