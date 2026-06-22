import React from "react"
import Link from "next/link"
import { LayoutDashboard, Users, ArrowLeft, Shield } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      
      {/* Admin Navbar */}
      <header className="sticky top-0 z-40 border-b border-cream-dark/60 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Logo & Role Badge */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight text-teal">
              Ilmu<span className="text-gold">Nabi</span> <span className="text-charcoal/40 font-medium text-sm">Admin</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100 uppercase">
              <Shield className="h-3 w-3" />
              Kontrol Panel
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-charcoal/80 hover:text-teal transition"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/admin/users"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-charcoal/80 hover:text-teal transition"
            >
              <Users className="h-4 w-4" />
              <span>Pengguna</span>
            </Link>
          </nav>

          {/* Back to App */}
          <div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 text-xs font-bold text-teal bg-teal-light px-3 py-2 rounded-xl hover:bg-teal/10 transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Belajar Anak</span>
            </Link>
          </div>

        </div>
      </header>

      {/* Admin Content Area */}
      <main className="flex-grow">
        {children}
      </main>

    </div>
  )
}
