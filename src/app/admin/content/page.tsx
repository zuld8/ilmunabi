import { objectsData } from "@/data/objects"
import { CheckCircle, Eye } from "lucide-react"

export default function ContentMonitorPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-charcoal">Monitor Konten</h1>
        <p className="text-xs text-charcoal/60 mt-1">Daftar objek edukasi ciptaan Allah yang aktif di IlmuNabi</p>
      </div>

      {/* Grid of Objects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectsData.map((obj) => (
          <div key={obj.slug} className="bg-white rounded-3xl border border-cream-dark shadow-sm p-6 hover:shadow-md transition">
            
            {/* Top header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-cream border border-cream-dark flex items-center justify-center text-3xl">
                  {obj.icon}
                </div>
                <div>
                  <h3 className="font-bold text-charcoal text-base leading-tight">
                    {obj.name.id} <span className="text-charcoal/30">/</span> {obj.name.en}
                  </h3>
                  <span className="text-[10px] text-charcoal/40 font-medium italic mt-0.5 block">
                    {obj.scientificName}
                  </span>
                </div>
              </div>
              
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                obj.type === 'hewan'
                  ? 'bg-teal-light text-teal'
                  : 'bg-green-50 text-green-700 border border-green-100'
              }`}>
                {obj.type === 'hewan' ? '🐾 Hewan' : '🌿 Tumbuhan'}
              </span>
            </div>

            {/* Content Details */}
            <div className="mt-6 border-t border-cream-dark/60 pt-4 space-y-3 text-xs">
              <div className="flex justify-between items-center text-charcoal/60">
                <span className="font-semibold">Rujukan Al-Qur&apos;an:</span>
                <span className="font-bold text-teal">{obj.surahName}</span>
              </div>
              <div className="flex justify-between items-center text-charcoal/60">
                <span className="font-semibold">Batas Buka Poin (Lock):</span>
                <span className="font-bold text-gold">{obj.unlockedAtPoints} Pts</span>
              </div>
              <div className="flex justify-between items-center text-charcoal/60">
                <span className="font-semibold">Status Kuis:</span>
                <span className="font-bold text-green-600 flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5 fill-current text-green-500 text-white" />
                  <span>Aktif ({Array.isArray(obj.anak.quiz) ? obj.anak.quiz.length : 1} Soal)</span>
                </span>
              </div>
            </div>

            {/* Quick Preview Links */}
            <div className="mt-6 pt-4 border-t border-cream-dark/50 flex gap-2">
              <a
                href={`/learn/${obj.slug}`}
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold text-teal bg-teal-light hover:bg-teal/15 transition"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Pratinjau Materi</span>
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
