import { createClient } from '@spb/server'

export async function getUserProfile() {
  const { user, supabase } = await getAuthContext()
  if (!user) return null

  const { data: profile } = await supabase.from('profiles').select('display_name').eq('id', user.id).single()
  return profile?.display_name.split(' ')[0] || 'Usuario'
}

export async function getAuthContext() {
  const supabase = await createClient()
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()

  return {
    user: error ? null : user,
    supabase
  }
}
