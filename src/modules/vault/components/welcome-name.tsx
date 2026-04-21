import { getUserProfile } from '@auth/services/session'

export async function WelcomeName() {
  const firstName = await getUserProfile()

  return <span className='text-foreground ml-2'>{firstName}</span>
}

export function WelcomeFallback() {
  return <span className='ml-2 text-base w-28 h-6 bg-zinc-800 animate-pulse rounded-md inline-block align-middle' />
}
