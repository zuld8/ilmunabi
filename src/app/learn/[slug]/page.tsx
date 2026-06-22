"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { objectsData, ObjectData } from "@/data/objects";
import KosakatArab from "@/components/KosakatArab";
import { 
  ArrowLeft, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Lightbulb, 
  Sparkles,
  Info
} from "lucide-react";

export default function ObjectDetail() {
  const params = useParams();
  const router = useRouter();
  const { activeChild, completeObject, lang } = useApp();

  const slug = params?.slug as string;
  const [object, setObject] = useState<ObjectData | null>(null);
  const [activeTab, setActiveTab] = useState<"sains" | "quran" | "wow" | "kuis">("sains");

  // Audio recitation state
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Quiz progression states
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);

  // Search object and reset quiz states
  useEffect(() => {
    if (!slug) return;
    const found = objectsData.find((o) => o.slug === slug);
    if (found) {
      setObject(found);
      setCurrentQuestionIdx(0);
      setSelectedAnswer(null);
      setQuizSubmitted(false);
      setHasErrors(false);
      setShowRewardModal(false);
    } else {
      router.push("/dashboard");
    }
  }, [slug, router]);

  if (!activeChild || !object) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-charcoal/60 animate-pulse font-medium">Memuat materi belajar...</p>
      </div>
    );
  }

  const zone = activeChild.zone;
  const isBalita = zone === "balita";
  const isAnak = zone === "anak";
  const isExplorer = zone === "explorer";

  // Get active content data based on age zone
  const zoneData = object[zone];
  const quran = object.anak.quranVerse;

  const quizzes = Array.isArray(zoneData.quiz) ? zoneData.quiz : [zoneData.quiz];
  const currentQuiz = quizzes[currentQuestionIdx];

  const handleQuizOptionClick = (idx: number) => {
    if (quizSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleQuizSubmit = () => {
    if (selectedAnswer === null || quizSubmitted || !currentQuiz) return;
    
    const isCorrect = selectedAnswer === currentQuiz.answerIdx;
    if (!isCorrect) {
      setHasErrors(true);
    }
    setQuizSubmitted(true);
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIdx < quizzes.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setQuizSubmitted(false);
    } else {
      // Completed all questions! Claim reward and show modal
      const pointsAwarded = isBalita ? 50 : isAnak ? 75 : 100;
      await completeObject(object.slug, pointsAwarded);
      setShowRewardModal(true);
    }
  };

  const handleRetryQuestion = () => {
    setSelectedAnswer(null);
    setQuizSubmitted(false);
  };

  const speakAudio = (text: string) => {
    if ("speechSynthesis" in window) {
      if (isAudioPlaying) {
        window.speechSynthesis.cancel();
        setIsAudioPlaying(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = activeChild.zone === "balita" ? "id-ID" : "en-US";
        utterance.onend = () => setIsAudioPlaying(false);
        setIsAudioPlaying(true);
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert("Browser Anda tidak mendukung text-to-speech.");
    }
  };

  return (
    <div className="min-h-screen bg-cream pb-16">
      
      {/* Header Bar */}
      <header className="sticky top-0 z-40 border-b border-cream-dark/60 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => router.push("/dashboard")}
            className="inline-flex items-center gap-2 text-sm font-bold text-charcoal/80 hover:text-teal transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Peta</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-teal bg-teal-light px-2.5 py-1 rounded-full uppercase">
              {zone === "balita" && "Zona Balita"}
              {zone === "anak" && "Zona Anak"}
              {zone === "explorer" && "Zona Explorer"}
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-4xl px-6 mt-8">
        
        {/* Object Cover Hero */}
        <div className="rounded-3xl border border-cream-dark bg-white p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="h-28 w-28 shrink-0 rounded-2xl bg-cream border border-cream-dark flex items-center justify-center text-6xl shadow-inner">
            {object.icon}
          </div>
          <div className="text-center md:text-left space-y-1">
            <span className="text-[11px] font-bold text-teal uppercase tracking-widest leading-none">
              Surah {object.surahName}
            </span>
            <h1 className="text-4xl font-extrabold text-charcoal">
              {object.name.id} <span className="text-gold">/</span> {object.name.en}
            </h1>
            <p className="text-sm italic text-charcoal/40 font-medium">
              Nama Ilmiah: {object.scientificName}
            </p>
          </div>
        </div>

        {/* Dynamic Tab Navigation */}
        <div className="mt-10 flex flex-wrap border-b border-cream-dark">
          <button
            onClick={() => setActiveTab("sains")}
            className={`pb-4 px-6 text-sm font-bold border-b-4 transition-all duration-200 ${
              activeTab === "sains"
                ? "border-teal text-teal"
                : "border-transparent text-charcoal/50 hover:text-charcoal"
            }`}
          >
            📚 Fakta Sains
          </button>

          <button
            onClick={() => setActiveTab("quran")}
            className={`pb-4 px-6 text-sm font-bold border-b-4 transition-all duration-200 ${
              activeTab === "quran"
                ? "border-teal text-teal"
                : "border-transparent text-charcoal/50 hover:text-charcoal"
            }`}
          >
            📖 Qur’an & Hadist
          </button>

          {/* WOW Factor (Show for explorer and kids as hook) */}
          <button
            onClick={() => setActiveTab("wow")}
            className={`pb-4 px-6 text-sm font-bold border-b-4 transition-all duration-200 ${
              activeTab === "wow"
                ? "border-teal text-teal"
                : "border-transparent text-charcoal/50 hover:text-charcoal"
            }`}
          >
            💡 WOW Factor
          </button>

          <button
            onClick={() => setActiveTab("kuis")}
            className={`pb-4 px-6 text-sm font-bold border-b-4 transition-all duration-200 ${
              activeTab === "kuis"
                ? "border-teal text-teal"
                : "border-transparent text-charcoal/50 hover:text-charcoal"
            }`}
          >
            🧩 Kuis Detektif
          </button>
        </div>

        {/* Tab Contents */}
        <div className="mt-8 bg-white border border-cream-dark rounded-3xl p-8 shadow-sm min-h-[300px]">
          
          {/* SAINS TAB */}
          {activeTab === "sains" && (
            <div className="space-y-6">
              {/* Balita Layout */}
              {isBalita && (
                <div className="flex flex-col items-center text-center space-y-6 py-6">
                  <p className="text-3xl font-extrabold leading-relaxed text-charcoal max-w-lg">
                    {zoneData.text.id}
                  </p>
                  
                  {/* TTS Voice Narrator button */}
                  <button
                    onClick={() => speakAudio(object.balita.audioTranscript.id)}
                    className={`flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow transition ${
                      isAudioPlaying ? "bg-gold" : "bg-teal hover:bg-teal-dark"
                    }`}
                  >
                    {isAudioPlaying ? <VolumeX className="h-4.5 w-4.5" /> : <Volume2 className="h-4.5 w-4.5" />}
                    <span>{isAudioPlaying ? "Hentikan Suara" : "Dengarkan Suara"}</span>
                  </button>
                </div>
              )}

              {/* Anak Layout */}
              {isAnak && (
                <div className="space-y-6">
                  <p className="text-lg font-bold text-charcoal leading-relaxed">
                    {zoneData.text.id}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {object.anak.facts.map((fact, idx) => (
                      <div key={idx} className="flex gap-3 bg-cream/40 p-4 border border-cream-dark rounded-2xl">
                        <span className="text-xl">✨</span>
                        <p className="text-sm font-medium text-charcoal leading-relaxed">
                          {fact.id}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Explorer Layout */}
              {isExplorer && (
                <div className="space-y-8">
                  <p className="text-lg font-bold text-charcoal leading-relaxed">
                    {zoneData.text.id}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-teal tracking-wider uppercase flex items-center gap-1.5">
                      <Info className="h-4 w-4" />
                      Anatomi & Struktur Ciptaan
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {object.explorer.anatomy.map((item, idx) => (
                        <div key={idx} className="border border-cream-dark p-5 rounded-2xl bg-cream/20">
                          <h4 className="font-extrabold text-sm text-charcoal uppercase tracking-wide">
                            {item.part.id}
                          </h4>
                          <p className="text-xs text-charcoal/70 leading-relaxed mt-2">
                            {item.desc.id}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* QURAN TAB */}
          {activeTab === "quran" && (
            <div className="space-y-8">
              
              {/* Quran Translation box */}
              <div className="text-center p-6 md:p-8 bg-cream/25 border border-cream-dark rounded-3xl space-y-6">
                
                {/* Arabic Script */}
                <p className={`leading-loose text-right text-charcoal select-all ${
                  lang === "ar" ? "text-5xl font-amiri font-bold" : "text-3xl font-serif font-bold"
                } pt-4 px-4`}>
                  {quran.arabic}
                </p>

                {/* Transliteration */}
                <p className="text-xs text-charcoal/50 italic leading-relaxed text-left border-t border-cream-dark pt-4">
                  {quran.transliteration}
                </p>

                {/* Indonesian Translation */}
                <div className="text-left space-y-1.5">
                  <span className="text-[10px] font-bold text-teal tracking-widest uppercase">
                    Terjemahan Indonesia
                  </span>
                  <p className="text-sm text-charcoal/80 leading-relaxed font-medium">
                    {quran.translation.id}
                  </p>
                </div>

                {/* English Translation */}
                <div className="text-left space-y-1.5">
                  <span className="text-[10px] font-bold text-teal tracking-widest uppercase">
                    English Translation
                  </span>
                  <p className="text-sm text-charcoal/80 leading-relaxed font-medium">
                    {quran.translation.en}
                  </p>
                </div>

                {/* Audio read verse trigger */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => speakAudio(quran.arabic)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-teal-light px-4 py-2.5 text-xs font-bold text-teal hover:bg-teal/15 transition"
                  >
                    <Volume2 className="h-4 w-4" />
                    <span>Baca Ayat</span>
                  </button>
                </div>

              </div>

              {/* Context notes (only for explorer) */}
              {isExplorer && object.explorer.quranVerse.context && (
                <div className="rounded-2xl border-l-4 border-gold bg-yellow-50/50 p-5 space-y-2">
                  <h4 className="text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    Konteks & Tafsir Sains
                  </h4>
                  <p className="text-xs leading-relaxed text-charcoal/80 font-medium">
                    {object.explorer.quranVerse.context.id}
                  </p>
                </div>
              )}

            </div>
          )}

          {/* WOW FACTOR TAB */}
          {activeTab === "wow" && (
            <div className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-gold-light border border-yellow-100 mb-2">
                <Lightbulb className="h-6 w-6 text-gold fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">
                Fakta Menakjubkan Ciptaan Allah
              </h3>
              
              <div className="rounded-3xl border border-teal-light bg-teal-light/20 p-6 md:p-8">
                <p className="text-base font-semibold leading-relaxed text-charcoal">
                  {object.explorer.wowFactor.id}
                </p>
              </div>

              <div className="text-xs text-charcoal/40 font-medium flex items-center gap-1">
                <span>* Sains membuktikan kebenaran wahyu Qur&apos;an 1400 tahun kemudian.</span>
              </div>
            </div>
          )}

          {/* QUIZ TAB */}
          {activeTab === "kuis" && currentQuiz && (
            <div className="space-y-6">
              
              {/* Progress indicator for multiple questions */}
              {quizzes.length > 1 && (
                <div className="flex items-center gap-2 text-xs font-bold text-teal bg-teal-light/55 px-3 py-1.5 rounded-full w-fit">
                  <span>📝 Pertanyaan {currentQuestionIdx + 1} dari {quizzes.length}</span>
                </div>
              )}

              {/* Question */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-light text-teal font-bold">
                  ❓
                </div>
                <h3 className="text-xl font-bold text-charcoal">
                  {currentQuiz.question.id}
                </h3>
              </div>

              {/* Grid Options */}
              <div className={`mt-6 grid gap-4 ${isBalita ? "grid-cols-3" : "grid-cols-1"}`}>
                {currentQuiz.options.map((opt, idx) => {
                  const isSelected = selectedAnswer === idx;
                  
                  return (
                    <button
                      key={idx}
                      disabled={quizSubmitted}
                      onClick={() => handleQuizOptionClick(idx)}
                      className={`flex items-center gap-3 p-4 border rounded-2xl text-left transition-all ${
                        isBalita ? "flex-col justify-center text-center p-6" : ""
                      } ${
                        isSelected 
                          ? "border-teal bg-teal-light/40 ring-2 ring-teal"
                          : "border-cream-dark bg-white hover:bg-cream/40"
                      } ${
                        quizSubmitted && idx === currentQuiz.answerIdx
                          ? "bg-green-50 border-green-500 ring-2 ring-green-500/20 text-green-800"
                          : ""
                      } ${
                        quizSubmitted && isSelected && idx !== currentQuiz.answerIdx
                          ? "bg-red-50 border-red-500 text-red-800"
                          : ""
                      }`}
                    >
                      
                      {/* Numeric/Image options indicator */}
                      {!isBalita && (
                        <div className={`h-6 w-6 shrink-0 rounded-lg flex items-center justify-center text-xs font-bold ${
                          isSelected ? "bg-teal text-white" : "bg-cream text-charcoal/50"
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </div>
                      )}

                      <span className={`${isBalita ? "text-lg font-bold" : "text-sm font-semibold"}`}>
                        {opt.text.id}
                      </span>

                    </button>
                  );
                })}
              </div>

              {/* Submit Buttons */}
              <div className="mt-8 border-t border-cream-dark pt-6 flex justify-end">
                {!quizSubmitted ? (
                  <button
                    disabled={selectedAnswer === null}
                    onClick={handleQuizSubmit}
                    className="rounded-xl bg-teal px-6 py-3 text-sm font-bold text-white shadow hover:bg-teal-dark disabled:opacity-50 transition"
                  >
                    Periksa Jawaban
                  </button>
                ) : (
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold ${selectedAnswer === currentQuiz.answerIdx ? "text-green-600" : "text-red-500"}`}>
                      {selectedAnswer === currentQuiz.answerIdx ? "🎉 Luar Biasa! Benar!" : "❌ Kurang Tepat, Coba lagi nanti."}
                    </span>
                    <button
                      onClick={() => {
                        if (selectedAnswer === currentQuiz.answerIdx) {
                          handleNextQuestion();
                        } else {
                          handleRetryQuestion();
                        }
                      }}
                      className={`rounded-xl px-6 py-3 text-sm font-bold text-white shadow transition ${
                        selectedAnswer === currentQuiz.answerIdx ? "bg-gold hover:bg-gold-dark" : "bg-charcoal hover:bg-charcoal-light"
                      }`}
                    >
                      {selectedAnswer === currentQuiz.answerIdx
                        ? currentQuestionIdx < quizzes.length - 1
                          ? "Pertanyaan Selanjutnya →"
                          : "Selesaikan Kuis"
                        : "Coba Lagi"}
                    </button>
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

        {/* Arabic Vocabulary Section */}
        {activeTab !== "kuis" && (
          <KosakatArab object={object} zone={zone} lang={lang} />
        )}

      </main>

      {/* Rewards Congrats Modal */}
      {showRewardModal && (() => {
        const currentIdx = objectsData.findIndex((o) => o.slug === object.slug);
        const nextObject = currentIdx !== -1 && currentIdx < objectsData.length - 1 ? objectsData[currentIdx + 1] : null;
        const points = isBalita ? 50 : isAnak ? 75 : 100;
        
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/60 backdrop-blur-sm p-4">
            
            {/* Confetti Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              {Array.from({ length: 45 }).map((_, i) => {
                const left = Math.random() * 100;
                const delay = Math.random() * 2;
                const duration = Math.random() * 2 + 1.5;
                const size = Math.random() * 8 + 6;
                const colors = ["#EAB308", "#14B8A6", "#F97316", "#EC4899", "#3B82F6"];
                const color = colors[Math.floor(Math.random() * colors.length)];
                return (
                  <div
                    key={i}
                    className="absolute rounded-full animate-fall"
                    style={{
                      left: `${left}%`,
                      top: `-20px`,
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundColor: color,
                      animationDelay: `${delay}s`,
                      animationDuration: `${duration}s`,
                      animationIterationCount: "infinite",
                    }}
                  />
                );
              })}
            </div>

            <div className="w-full max-w-md rounded-3xl bg-white border-4 border-gold p-8 shadow-2xl text-center space-y-6 relative overflow-hidden scale-in-animation z-10">
              
              {/* Sparkles background effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-transparent -z-10" />

              <div className="mx-auto h-16 w-16 bg-gold rounded-full flex items-center justify-center text-3xl shadow-lg border-2 border-white animate-bounce">
                🎖️
              </div>

              {/* Stars */}
              <div className="text-3xl text-gold tracking-widest my-2 select-none">
                {hasErrors ? "⭐⭐" : "⭐⭐⭐"}
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold text-gold uppercase tracking-widest">
                  Objek Selesai Dipelajari
                </span>
                <h3 className="text-2xl font-extrabold text-charcoal">
                  Luar biasa! Kamu sekarang Ahli {object.name.id}!
                </h3>
                <p className="text-xs text-charcoal/60 max-w-xs mx-auto leading-relaxed">
                  Kamu berhasil menjawab kuis dan membuka kartu koleksi ciptaan Allah: **{object.name.id}**.
                </p>
              </div>

              {/* Trading Card Preview */}
              <div className="mx-auto w-40 aspect-[3/4] bg-gradient-to-tr from-teal to-teal-dark border-4 border-gold rounded-2xl shadow-xl flex flex-col justify-between p-3.5 relative">
                <div className="absolute top-2 right-2 text-[10px] font-bold text-gold">
                  ⭐ {points}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-3xl mx-auto mt-2">
                  {object.icon}
                </div>
                <div className="text-center text-white space-y-0.5">
                  <span className="block text-[11px] font-bold leading-tight">{object.name.en}</span>
                  <span className="block text-[7px] text-white/60 font-serif italic leading-none">{object.scientificName}</span>
                </div>
                <div className="text-[8px] text-center text-gold bg-white/10 py-1 rounded-lg uppercase tracking-wider font-bold">
                  {object.surahName}
                </div>
              </div>

              {/* Point badge */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal bg-teal-light px-4 py-2 rounded-full border border-teal/10">
                <Sparkles className="h-4 w-4 text-gold animate-spin" />
                <span>+{points} Poin & Lencana Baru &ldquo;{object.icon} Ahli {object.name.id}&rdquo; Diperoleh</span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={() => {
                    setShowRewardModal(false);
                    router.push("/dashboard");
                  }}
                  className="w-full rounded-2xl bg-teal py-3 text-center text-xs font-bold text-white shadow-md hover:bg-teal-dark transition active:scale-95"
                >
                  Lihat Badge Saya
                </button>
                
                {nextObject && (
                  <button
                    onClick={() => {
                      setShowRewardModal(false);
                      router.push(`/learn/${nextObject.slug}`);
                    }}
                    className="w-full rounded-2xl bg-gold py-3 text-center text-xs font-bold text-white shadow-md hover:bg-gold-dark transition active:scale-95"
                  >
                    Lanjut ke {nextObject.name.id} →
                  </button>
                )}
              </div>

            </div>

            <style>{`
              @keyframes fall {
                0% {
                  transform: translateY(0) rotate(0deg);
                  opacity: 1;
                }
                100% {
                  transform: translateY(100vh) rotate(360deg);
                  opacity: 0;
                }
              }
              .animate-fall {
                animation-name: fall;
                animation-timing-function: linear;
              }
              @keyframes scaleIn {
                0% {
                  transform: scale(0.9);
                  opacity: 0;
                }
                100% {
                  transform: scale(1);
                  opacity: 1;
                }
              }
              .scale-in-animation {
                animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
              }
            `}</style>
          </div>
        );
      })()}

    </div>
  );
}
