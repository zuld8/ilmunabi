import { objectsData, ObjectData, NabiData, AsmaulHusnaData } from "@/data/objects"
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
        {objectsData.map((obj) => {
          const isScientific = obj.type !== "nabi" && obj.type !== "asmaul-husna";
          const isNabi = obj.type === "nabi";

          // Determine label and color for category badge
          let typeLabel = "";
          let typeColor = "";
          switch (obj.type) {
            case "hewan":
              typeLabel = "🐾 Hewan";
              typeColor = "bg-teal-light text-teal border border-teal/15";
              break;
            case "tumbuhan":
              typeLabel = "🌿 Tumbuhan";
              typeColor = "bg-green-50 text-green-700 border border-green-100";
              break;
            case "alam":
              typeLabel = "🌍 Alam";
              typeColor = "bg-blue-50 text-blue-700 border border-blue-100";
              break;
            case "tubuh":
              typeLabel = "🫀 Tubuh";
              typeColor = "bg-red-50 text-red-700 border border-red-100";
              break;
            case "langit":
              typeLabel = "🌌 Langit";
              typeColor = "bg-indigo-50 text-indigo-700 border border-indigo-100";
              break;
            case "nabi":
              typeLabel = "🕌 Nabi";
              typeColor = "bg-amber-50 text-amber-700 border border-amber-100";
              break;
            case "asmaul-husna":
              typeLabel = "🌟 Asmaul Husna";
              typeColor = "bg-yellow-50 text-yellow-700 border border-yellow-100";
              break;
          }

          // Determine subtitle
          const subtitle = isScientific
            ? (obj as ObjectData).scientificName
            : isNabi
            ? "Kisah Nabi & Rasul"
            : (obj as AsmaulHusnaData).arabicWithHarakat;

          // Determine reference
          const reference = isScientific
            ? (obj as ObjectData).surahName
            : isNabi
            ? (obj as NabiData).surahReference
            : "Asmaul Husna";

          // Determine quiz/status description
          let statusDesc = "";
          if (isScientific) {
            const scientificObj = obj as ObjectData;
            const quizLength = Array.isArray(scientificObj.anak.quiz) ? scientificObj.anak.quiz.length : 1;
            statusDesc = `Aktif (${quizLength} Soal)`;
          } else if (isNabi) {
            statusDesc = "Aktif (Kisah & Timeline)";
          } else {
            statusDesc = "Aktif (Flashcard & Makna)";
          }

          return (
            <div key={obj.slug} className="bg-white rounded-3xl border border-cream-dark shadow-sm p-6 hover:shadow-md transition flex flex-col justify-between min-h-[260px]">
              <div>
                {/* Top header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-cream border border-cream-dark flex items-center justify-center text-3xl shrink-0">
                      {obj.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal text-sm md:text-base leading-tight">
                        {obj.name.id} <span className="text-charcoal/30">/</span> {obj.name.en}
                      </h3>
                      <span className="text-[10px] text-charcoal/40 font-medium italic mt-0.5 block">
                        {subtitle}
                      </span>
                    </div>
                  </div>
                  
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shrink-0 ${typeColor}`}>
                    {typeLabel}
                  </span>
                </div>

                {/* Content Details */}
                <div className="mt-6 border-t border-cream-dark/60 pt-4 space-y-3 text-xs">
                  <div className="flex justify-between items-center text-charcoal/60">
                    <span className="font-semibold">Rujukan:</span>
                    <span className="font-bold text-teal">{reference}</span>
                  </div>
                  <div className="flex justify-between items-center text-charcoal/60">
                    <span className="font-semibold">Batas Buka Poin (Lock):</span>
                    <span className="font-bold text-gold">{obj.unlockedAtPoints} Pts</span>
                  </div>
                  <div className="flex justify-between items-center text-charcoal/60">
                    <span className="font-semibold">Status Kuis:</span>
                    <span className="font-bold text-green-600 flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5 fill-current text-green-500 text-white" />
                      <span>{statusDesc}</span>
                    </span>
                  </div>
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
          );
        })}
      </div>

    </div>
  )
}
