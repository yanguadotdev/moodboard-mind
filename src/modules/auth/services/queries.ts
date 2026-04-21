import { createClient } from '@spb/server'

export async function getUserProfile() {
  const supabase = await createClient()

  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (!user) return null

  const { data: profile } = await supabase.from('profiles').select('display_name').eq('id', user.id).single()
  return profile?.display_name.split(' ')[0] || 'Usuario'
}
