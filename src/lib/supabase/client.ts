import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Safe fallbacks for build phase when variables are not configured yet
  const isDummy = !url || !url.startsWith("http") || !anonKey
  const finalUrl = isDummy ? "https://placeholder.supabase.co" : url
  const finalKey = isDummy ? "placeholder-anon-key" : anonKey

  return createBrowserClient(finalUrl, finalKey)
}
