"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { ArrowLeft, Search, Calendar, Shield } from "lucide-react"

export function ExtendTrialButton({ userId }: { userId: string }) {
  const supabase = createClient()

  const extendTrial = async () => {
    const { error } = await supabase
      .from('profiles')
      .update({
        trial_ends_at: new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1000
        ).toISOString(),
        subscription_status: 'trial'
      })
      .eq('id', userId)
    
    if (error) {
      alert('Gagal memperpanjang trial: ' + error.message)
    } else {
      alert('Trial diperpanjang 30 hari!')
      window.location.reload()
    }
  }

  const activateUser = async () => {
    const { error } = await supabase
      .from('profiles')
      .update({ subscription_status: 'active' })
      .eq('id', userId)
    
    if (error) {
      alert('Gagal mengaktifkan user: ' + error.message)
    } else {
      alert('User diaktifkan!')
      window.location.reload()
    }
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={extendTrial}
        className="px-3 py-1.5 text-xs font-bold bg-teal-light text-teal rounded-lg hover:bg-teal/15 transition active:scale-95"
      >
        +30 Hari
      </button>
      <button
        onClick={activateUser}
        className="px-3 py-1.5 text-xs font-bold bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition active:scale-95 border border-green-100"
      >
        Aktifkan
      </button>
    </div>
  )
}

interface UserProfile {
  id: string
  email: string
  full_name: string | null
  role: string
  subscription_status: string
  trial_ends_at: string
  created_at: string
}

export default function UsersManagementPage() {
  const [users, setUsers] = useState<UserProfile[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [supabase] = useState(() => createClient())

  useEffect(() => {
    async function fetchUsers() {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (!error && data) {
        setUsers(data)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [supabase])

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.full_name && user.full_name.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="p-2 hover:bg-cream-dark rounded-xl transition text-charcoal/60 hover:text-charcoal">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-charcoal">Kelola Pengguna</h1>
            <p className="text-xs text-charcoal/60 mt-1">Daftar lengkap akun orang tua terdaftar di IlmuNabi</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-cream-dark shadow-sm">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal/40" />
          <input
            type="text"
            placeholder="Cari email atau nama lengkap..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cream-dark focus:border-teal focus:ring-2 focus:ring-teal/10 outline-none text-sm text-charcoal transition-all font-medium"
          />
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-3xl border border-cream-dark shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-charcoal/60 font-medium animate-pulse">
            Memuat data pengguna...
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="p-12 text-center text-charcoal/60 font-medium">
            Tidak ada pengguna ditemukan.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-cream border-b border-cream-dark text-xs font-bold text-charcoal/60 uppercase">
                  <th className="p-4 pl-6">Pengguna</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Status Langganan</th>
                  <th className="p-4">Uji Coba Berakhir</th>
                  <th className="p-4 pr-6 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-dark text-sm text-charcoal">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-cream/20 transition-colors">
                    <td className="p-4 pl-6 font-bold flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-teal/10 text-teal flex items-center justify-center font-bold text-xs shrink-0">
                        {user.full_name ? user.full_name.substring(0, 2).toUpperCase() : "U"}
                      </div>
                      <div>
                        <span className="block">{user.full_name || "Tanpa Nama"}</span>
                        <span className="text-[10px] font-semibold text-charcoal/40 uppercase">
                          Terdaftar: {new Date(user.created_at).toLocaleDateString('id-ID')}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-charcoal/60 font-medium">{user.email}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                        user.role === 'admin'
                          ? 'bg-purple-50 text-purple-700 border border-purple-100'
                          : 'bg-cream-dark text-charcoal/70'
                      }`}>
                        {user.role === 'admin' && <Shield className="h-3 w-3" />}
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                        ${user.subscription_status === 'trial' 
                          ? 'bg-yellow-50 text-yellow-700 border border-yellow-100'
                          : user.subscription_status === 'active'
                          ? 'bg-green-50 text-green-700 border border-green-100'
                          : 'bg-red-50 text-red-700 border border-red-100'
                        }`}>
                        {user.subscription_status}
                      </span>
                    </td>
                    <td className="p-4 text-charcoal/60 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-charcoal/30" />
                        <span>{new Date(user.trial_ends_at).toLocaleDateString('id-ID')}</span>
                      </div>
                    </td>
                    <td className="p-4 pr-6">
                      <div className="flex justify-center">
                        <ExtendTrialButton userId={user.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  )
}
