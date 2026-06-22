import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = cookies()
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Safe fallbacks for build phase when variables are not configured yet
  const isDummy = !url || !url.startsWith("http") || !anonKey
  const finalUrl = isDummy ? "https://placeholder.supabase.co" : url
  const finalKey = isDummy ? "placeholder-anon-key" : anonKey

  return createServerClient(
    finalUrl,
    finalKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Safe to ignore in server components if middleware handles it
          }
        },
      },
    }
  )
}
