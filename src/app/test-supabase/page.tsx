"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function TestSupabasePage() {
  const [status, setStatus] = useState<string>("Initializing test...")
  const [envVars, setEnvVars] = useState<any>({})

  useEffect(() => {
    async function runTest() {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      setEnvVars({
        url: url || "UNDEFINED",
        urlValid: url?.startsWith("http") ? "YES" : "NO",
        keyLength: key ? key.length : 0,
        keySample: key ? `${key.substring(0, 15)}...` : "UNDEFINED",
      })

      try {
        setStatus("Creating client...")
        const supabase = createClient()
        
        setStatus("Fetching session...")
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          setStatus(`Error fetching session: ${error.message}`)
        } else {
          setStatus(`Success! Connection established. Session: ${data.session ? "Active" : "None"}`)
        }
      } catch (err: any) {
        setStatus(`Runtime exception: ${err.message || err}`)
      }
    }

    runTest()
  }, [])

  return (
    <div className="min-h-screen bg-cream p-8 text-charcoal font-sans">
      <div className="max-w-xl mx-auto bg-white rounded-3xl border border-cream-dark p-8 shadow-xl space-y-6">
        <h1 className="text-xl font-bold text-teal">Supabase Diagnostics</h1>
        
        <div className="space-y-2 border-t border-cream-dark pt-4">
          <h2 className="text-sm font-bold text-charcoal/60 uppercase">Environment Variables (Client-Side)</h2>
          <pre className="bg-cream p-4 rounded-xl text-xs overflow-x-auto text-charcoal/80 font-mono">
            {JSON.stringify(envVars, null, 2)}
          </pre>
        </div>

        <div className="space-y-2 border-t border-cream-dark pt-4">
          <h2 className="text-sm font-bold text-charcoal/60 uppercase">Test Status</h2>
          <div className="p-4 rounded-xl bg-teal-light text-teal font-bold text-sm">
            {status}
          </div>
        </div>

        <div className="pt-4 text-center">
          <a href="/dashboard" className="text-xs font-bold text-teal hover:underline">
            Go back to Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}
