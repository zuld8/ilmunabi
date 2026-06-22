"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async () => {
    setLoading(true)
    setError("")
    
    const { error } = await supabase.auth.signInWithPassword({
      email, password
    })
    
    if (error) {
      setError("Email atau password salah")
    } else {
      router.push('/dashboard')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md border border-cream-dark shadow-xl">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-teal">
            Ilmu<span className="text-gold">Nabi</span>
          </h1>
          <p className="text-charcoal/60 mt-2 text-sm">Masuk ke akun Anda</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-charcoal block mb-1">Email</label>
            <input
              type="email"
              placeholder="email@contoh.com"
              className="w-full px-4 py-3 rounded-xl border border-cream-dark 
                         focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 outline-none transition-all text-sm text-charcoal font-medium"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs font-bold text-charcoal block mb-1">Password</label>
            <input
              type="password"
              placeholder="Password Anda"
              className="w-full px-4 py-3 rounded-xl border border-cream-dark 
                         focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 outline-none transition-all text-sm text-charcoal font-medium"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs font-bold text-center bg-red-50 py-2.5 px-3 rounded-xl border border-red-100">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3.5 bg-teal text-white rounded-xl 
                       font-bold hover:bg-teal-dark disabled:opacity-50 transition active:scale-[0.98] shadow-md text-sm mt-2"
          >
            {loading ? "Masuk..." : "Masuk"}
          </button>
        </div>

        <p className="text-center text-xs text-charcoal/60 mt-6">
          Belum punya akun?{" "}
          <a href="/auth/register" className="text-teal font-bold hover:underline">
            Daftar gratis
          </a>
        </p>
      </div>
    </div>
  )
}
