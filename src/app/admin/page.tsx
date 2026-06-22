import { createClient } from "@/lib/supabase/server"
import { ExtendTrialButton } from "./users/page"
import { Users, Timer, Baby, ArrowRight } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  // Fetch total users count
  const { count: totalUsers } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true })

  // Fetch active trials count
  const { count: activeTrials } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true })
    .eq('subscription_status', 'trial')
    .gt('trial_ends_at', new Date().toISOString())

  // Fetch total children count
  const { count: totalChildren } = await supabase
    .from('children')
    .select('*', { count: 'exact', head: true })

  // Fetch recent 10 users
  const { data: recentUsers } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-charcoal">
          Admin Dashboard — IlmuNabi
        </h1>
        <p className="text-xs text-charcoal/60 mt-1">Pusat statistik dan aktivasi akun uji coba orang tua</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Total Parents */}
        <div className="bg-white rounded-3xl p-6 border border-cream-dark shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-teal-light text-teal flex items-center justify-center">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-charcoal/40 text-xs font-bold uppercase">Total Orang Tua</p>
            <p className="text-3xl font-extrabold text-teal mt-1">
              {totalUsers ?? 0}
            </p>
          </div>
        </div>

        {/* Active Trials */}
        <div className="bg-white rounded-3xl p-6 border border-cream-dark shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-yellow-50 text-gold flex items-center justify-center">
            <Timer className="h-6 w-6" />
          </div>
          <div>
            <p className="text-charcoal/40 text-xs font-bold uppercase">Sedang Trial</p>
            <p className="text-3xl font-extrabold text-gold mt-1">
              {activeTrials ?? 0}
            </p>
          </div>
        </div>

        {/* Total Kids */}
        <div className="bg-white rounded-3xl p-6 border border-cream-dark shadow-sm flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <Baby className="h-6 w-6" />
          </div>
          <div>
            <p className="text-charcoal/40 text-xs font-bold uppercase">Total Anak</p>
            <p className="text-3xl font-extrabold text-purple-700 mt-1">
              {totalChildren ?? 0}
            </p>
          </div>
        </div>

      </div>

      {/* Recent Users Table */}
      <div className="bg-white rounded-3xl border border-cream-dark shadow-sm overflow-hidden">
        <div className="p-6 border-b border-cream-dark flex items-center justify-between">
          <h2 className="font-bold text-charcoal">
            User Terbaru
          </h2>
          <Link href="/admin/users" className="text-xs font-bold text-teal hover:underline inline-flex items-center gap-1">
            <span>Lihat Semua</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cream border-b border-cream-dark text-xs font-bold text-charcoal/60 uppercase">
                <th className="p-4 pl-6">Nama</th>
                <th className="p-4">Email</th>
                <th className="p-4">Status</th>
                <th className="p-4">Trial Berakhir</th>
                <th className="p-4 pr-6 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cream-dark text-sm text-charcoal">
              {recentUsers?.map(user => (
                <tr key={user.id} className="hover:bg-cream/10 transition-colors">
                  <td className="p-4 pl-6 font-bold flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-teal/10 text-teal flex items-center justify-center font-bold text-xs shrink-0">
                      {user.full_name ? user.full_name.substring(0, 2).toUpperCase() : "U"}
                    </div>
                    <span>{user.full_name || "Tanpa Nama"}</span>
                  </td>
                  <td className="p-4 text-charcoal/60 font-medium">{user.email}</td>
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
                    {new Date(user.trial_ends_at).toLocaleDateString('id-ID')}
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
      </div>

    </div>
  )
}
