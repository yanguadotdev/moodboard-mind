import { createClient } from '@spb/server'

export async function getUserProfile() {
  const user = await getAuthenticatedUser()
  if (!user) return null

  const supabase = await createClient()
  const { data: profile } = await supabase.from('profiles').select('display_name').eq('id', user.id).single()
  return profile?.display_name.split(' ')[0] || 'Usuario'
}

export async function getAuthenticatedUser() {
  const supabase = await createClient()
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()

  if (error || !user) {
    return null
  }

  return user
}
