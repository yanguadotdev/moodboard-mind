'use client';

import { Logout } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@shadcn/button';
import { createClient } from '@spb/client';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const logout = async () => {
    await supabase.auth.signOut();
    router.refresh();

    router.push('/auth/login');
  };

  return (
    <Button variant='outline' onClick={logout} className='text-zinc-400 hover:text-white hover:bg-zinc-900 monospaced'>
      <HugeiconsIcon icon={Logout} size={24} color='currentColor' strokeWidth={1.5} />
      Logout
    </Button>
  );
}
