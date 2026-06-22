"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: "", email: "", password: "", confirmPassword: ""
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const supabase = createClient()

  const handleRegister = async () => {
    if (!form.fullName.trim()) {
      setError("Nama lengkap harus diisi")
      return
    }
    if (form.password.length < 8) {
      setError("Password minimal 8 karakter")
      return
    }
    if (form.password !== form.confirmPassword) {
      setError("Password tidak cocok")
      return
    }
    setLoading(true)
    setError("")

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { full_name: form.fullName }
      }
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      window.location.href = '/onboarding'
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md border border-cream-dark shadow-xl">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-teal">
            Ilmu<span className="text-gold">Nabi</span>
          </h1>
          <p className="text-charcoal/60 mt-2 text-sm">Daftar akun orang tua</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-charcoal block mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Contoh: Budi Santoso"
              className="w-full px-4 py-3 rounded-xl border border-cream-dark 
                         focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 outline-none transition-all text-sm text-charcoal font-medium"
              value={form.fullName}
              onChange={e => setForm({...form, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="text-xs font-bold text-charcoal block mb-1">Email</label>
            <input
              type="email"
              placeholder="email@contoh.com"
              className="w-full px-4 py-3 rounded-xl border border-cream-dark 
                         focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 outline-none transition-all text-sm text-charcoal font-medium"
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
            />
          </div>

          <div>
            <label className="text-xs font-bold text-charcoal block mb-1">Password</label>
            <input
              type="password"
              placeholder="Minimal 8 karakter"
              className="w-full px-4 py-3 rounded-xl border border-cream-dark 
                         focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 outline-none transition-all text-sm text-charcoal font-medium"
              value={form.password}
              onChange={e => setForm({...form, password: e.target.value})}
            />
          </div>

          <div>
            <label className="text-xs font-bold text-charcoal block mb-1">
              Konfirmasi Password
            </label>
            <input
              type="password"
              placeholder="Ulangi password"
              className="w-full px-4 py-3 rounded-xl border border-cream-dark 
                         focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10 outline-none transition-all text-sm text-charcoal font-medium"
              value={form.confirmPassword}
              onChange={e => setForm({...form, confirmPassword: e.target.value})}
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs font-bold text-center bg-red-50 py-2.5 px-3 rounded-xl border border-red-100">{error}</p>
          )}

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full py-3.5 bg-teal text-white rounded-xl 
                       font-bold hover:bg-teal-dark disabled:opacity-50 transition active:scale-[0.98] shadow-md text-sm mt-2"
          >
            {loading ? "Mendaftar..." : "Daftar Sekarang"}
          </button>
        </div>

        <p className="text-center text-xs text-charcoal/60 mt-6">
          Sudah punya akun?{" "}
          <a href="/auth/login" className="text-teal font-bold hover:underline">
            Masuk di sini
          </a>
        </p>

        <p className="text-center text-[10px] text-charcoal/40 mt-4 leading-relaxed border-t border-cream-dark/50 pt-4">
          Dengan mendaftar, Anda mendapat akses free trial 7 hari penuh.<br/>
          Tanpa kartu kredit.
        </p>
      </div>
    </div>
  )
}
