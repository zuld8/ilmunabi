"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { objectsData, ObjectData, NabiData, AsmaulHusnaData, LearningObject } from "@/data/objects";
import KosakatArab from "@/components/KosakatArab";
import { 
  ArrowLeft, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Lightbulb, 
  Sparkles,
  Info,
  Compass,
  CheckCircle2,
  RefreshCw
} from "lucide-react";

export default function ObjectDetail() {
  const params = useParams();
  const router = useRouter();
  const { activeChild, completeObject, lang } = useApp();

  const slug = params?.slug as string;
  const [object, setObject] = useState<LearningObject | null>(null);
  const [activeTab, setActiveTab] = useState<"sains" | "quran" | "wow" | "kuis">("sains");

  // Nabi storytelling active tab
  const [activeNabiTab, setActiveNabiTab] = useState<"cerita" | "mukjizat" | "karakter" | "timeline" | "harian">("cerita");

  // Asmaul Husna flashcard state
  const [isFlipped, setIsFlipped] = useState(false);

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
      setIsFlipped(false);
      setActiveNabiTab("cerita");
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

  // Check object types
  const isScientific = object.type !== "nabi" && object.type !== "asmaul-husna";
  const isNabi = object.type === "nabi";
  const isAsmaulHusna = object.type === "asmaul-husna";

  // Conditionally extract Scientific fields
  const scientificObj = isScientific ? (object as ObjectData) : null;
  const zoneData = scientificObj ? scientificObj[zone] : null;
  const quran = scientificObj ? scientificObj.anak.quranVerse : null;

  const quizzes = zoneData ? (Array.isArray(zoneData.quiz) ? zoneData.quiz : [zoneData.quiz]) : [];
  const currentQuiz = quizzes.length > 0 ? quizzes[currentQuestionIdx] : null;

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

  const handleCompleteNonScientific = async () => {
    const pointsAwarded = object.type === "nabi" ? 100 : 50;
    await completeObject(object.slug, pointsAwarded);
    setShowRewardModal(true);
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
        utterance.lang = "id-ID";
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
              {isScientific && (
                <>
                  {zone === "balita" && "Zona Balita"}
                  {zone === "anak" && "Zona Anak"}
                  {zone === "explorer" && "Zona Explorer"}
                </>
              )}
              {isNabi && "Kisah Nabi"}
              {isAsmaulHusna && "Asmaul Husna"}
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
              {isScientific
                ? `Surah ${(object as ObjectData).surahName}`
                : isNabi
                ? `Kisah Nabi & Rasul`
                : `99 Nama Allah`}
            </span>
            <h1 className="text-4xl font-extrabold text-charcoal">
              {isAsmaulHusna
                ? `${(object as AsmaulHusnaData).arabicWithHarakat} — ${object.name.id}`
                : object.name.id === object.name.en
                ? object.name.id
                : `${object.name.id} / ${object.name.en}`}
            </h1>
            <p className="text-sm italic text-charcoal/40 font-medium">
              {isScientific
                ? `Nama Ilmiah: ${(object as ObjectData).scientificName}`
                : isNabi
                ? `Referensi: ${(object as NabiData).surahReference}`
                : `Pelafalan: ${(object as AsmaulHusnaData).transliteration}`}
            </p>
          </div>
        </div>

        {/* ========================================================
            1. SCIENTIFIC OBJECT LAYOUT
           ======================================================== */}
        {isScientific && scientificObj && zoneData && quran && (
          <>
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
                      
                      <button
                        onClick={() => speakAudio(scientificObj.balita.audioTranscript.id)}
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
                        {scientificObj.anak.facts.map((fact, idx) => (
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
                          {scientificObj.explorer.anatomy.map((item, idx) => (
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
                  <div className="text-center p-6 md:p-8 bg-cream/25 border border-cream-dark rounded-3xl space-y-6">
                    
                    <p className="leading-loose text-right text-charcoal select-all text-3xl font-serif font-bold pt-4 px-4">
                      {quran.arabic}
                    </p>

                    <p className="text-xs text-charcoal/50 italic leading-relaxed text-left border-t border-cream-dark pt-4">
                      {quran.transliteration}
                    </p>

                    <div className="text-left space-y-1.5">
                      <span className="text-[10px] font-bold text-teal tracking-widest uppercase">
                        Terjemahan Indonesia
                      </span>
                      <p className="text-sm text-charcoal/80 leading-relaxed font-medium">
                        {quran.translation.id}
                      </p>
                    </div>

                    <div className="text-left space-y-1.5">
                      <span className="text-[10px] font-bold text-teal tracking-widest uppercase">
                        English Translation
                      </span>
                      <p className="text-sm text-charcoal/80 leading-relaxed font-medium">
                        {quran.translation.en}
                      </p>
                    </div>

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

                  {isExplorer && scientificObj.explorer.quranVerse.context && (
                    <div className="rounded-2xl border-l-4 border-gold bg-yellow-50/50 p-5 space-y-2">
                      <h4 className="text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="h-4 w-4" />
                        Konteks & Tafsir Sains
                      </h4>
                      <p className="text-xs leading-relaxed text-charcoal/80 font-medium">
                        {scientificObj.explorer.quranVerse.context.id}
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
                      {scientificObj.explorer.wowFactor.id}
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
                  
                  {quizzes.length > 1 && (
                    <div className="flex items-center gap-2 text-xs font-bold text-teal bg-teal-light/55 px-3 py-1.5 rounded-full w-fit">
                      <span>📝 Pertanyaan {currentQuestionIdx + 1} dari {quizzes.length}</span>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-light text-teal font-bold">
                      ❓
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">
                      {currentQuiz.question.id}
                    </h3>
                  </div>

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
              <KosakatArab object={object as ObjectData} zone={zone} lang={lang} />
            )}
          </>
        )}

        {/* ========================================================
            2. KISAH NABI STORYTELLING LAYOUT
           ======================================================== */}
        {isNabi && (
          (() => {
            const nabi = object as NabiData;
            return (
              <>
                {/* Nabi Tab Navigation */}
                <div className="mt-10 flex flex-wrap border-b border-cream-dark">
                  <button
                    onClick={() => setActiveNabiTab("cerita")}
                    className={`pb-4 px-5 text-sm font-bold border-b-4 transition-all duration-200 ${
                      activeNabiTab === "cerita"
                        ? "border-teal text-teal"
                        : "border-transparent text-charcoal/50 hover:text-charcoal"
                    }`}
                  >
                    📖 Kisah Nabi
                  </button>

                  <button
                    onClick={() => setActiveNabiTab("mukjizat")}
                    className={`pb-4 px-5 text-sm font-bold border-b-4 transition-all duration-200 ${
                      activeNabiTab === "mukjizat"
                        ? "border-teal text-teal"
                        : "border-transparent text-charcoal/50 hover:text-charcoal"
                    }`}
                  >
                    ⚡ Mukjizat
                  </button>

                  <button
                    onClick={() => setActiveNabiTab("karakter")}
                    className={`pb-4 px-5 text-sm font-bold border-b-4 transition-all duration-200 ${
                      activeNabiTab === "karakter"
                        ? "border-teal text-teal"
                        : "border-transparent text-charcoal/50 hover:text-charcoal"
                    }`}
                  >
                    🌟 Karakter Sifat
                  </button>

                  <button
                    onClick={() => setActiveNabiTab("timeline")}
                    className={`pb-4 px-5 text-sm font-bold border-b-4 transition-all duration-200 ${
                      activeNabiTab === "timeline"
                        ? "border-teal text-teal"
                        : "border-transparent text-charcoal/50 hover:text-charcoal"
                    }`}
                  >
                    📅 Garis Waktu
                  </button>

                  <button
                    onClick={() => setActiveNabiTab("harian")}
                    className={`pb-4 px-5 text-sm font-bold border-b-4 transition-all duration-200 ${
                      activeNabiTab === "harian"
                        ? "border-teal text-teal"
                        : "border-transparent text-charcoal/50 hover:text-charcoal"
                    }`}
                  >
                    🏡 Aplikasi Harian
                  </button>
                </div>

                {/* Nabi Content Block */}
                <div className="mt-8 bg-white border border-cream-dark rounded-3xl p-8 shadow-sm min-h-[300px]">
                  
                  {/* STORY TAB */}
                  {activeNabiTab === "cerita" && (
                    <div className="space-y-6">
                      <div className="border-l-4 border-teal pl-4 italic text-charcoal/80 text-base font-semibold bg-cream/20 p-4 rounded-r-2xl">
                        &ldquo;{nabi.storyShort.id}&rdquo;
                      </div>

                      <div className="space-y-4 text-charcoal text-sm leading-relaxed font-sans font-medium text-justify">
                        <p>{nabi.storyFull.id}</p>
                      </div>

                      <div className="flex justify-end pt-4 border-t border-cream-dark/60">
                        <button
                          onClick={() => speakAudio(nabi.storyFull.id)}
                          className={`flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-white shadow transition ${
                            isAudioPlaying ? "bg-gold" : "bg-teal hover:bg-teal-dark"
                          }`}
                        >
                          {isAudioPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                          <span>{isAudioPlaying ? "Hentikan Narasi" : "Dengarkan Kisah"}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* MIRACLES TAB */}
                  {activeNabiTab === "mukjizat" && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-charcoal">Mukjizat Luar Biasa Nabi</h3>
                      <p className="text-xs text-charcoal/60 mt-1.5">
                        Tanda-tanda kebesaran Allah yang dianugerahkan kepada utusan-Nya sebagai bukti kebenaran dakwah.
                      </p>

                      <div className="grid grid-cols-1 gap-4 mt-6">
                        {nabi.miracles.map((miracle, idx) => (
                          <div key={idx} className="flex gap-4 border border-cream-dark rounded-2xl p-5 bg-gradient-to-r from-cream-dark/10 to-white shadow-sm hover:shadow transition">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold text-xl font-bold">
                              ⚡
                            </div>
                            <div>
                              <h4 className="font-extrabold text-sm text-teal">Mukjizat #{idx + 1}</h4>
                              <p className="text-xs text-charcoal mt-1.5 leading-relaxed font-medium">
                                {miracle.id}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CHARACTER TRAITS TAB */}
                  {activeNabiTab === "karakter" && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-charcoal">Sifat Karakter Utama</h3>
                      <p className="text-xs text-charcoal/60">
                        Sikap luhur keteladanan yang wajib kita tiru untuk membentuk akhlak mulia anak Muslim.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {nabi.characterTraits.map((item, idx) => (
                          <div key={idx} className="border border-cream-dark rounded-2xl p-5 bg-cream/10 flex flex-col justify-between shadow-sm">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xl">🌟</span>
                                <h4 className="font-extrabold text-sm text-charcoal uppercase tracking-wider">{item.trait.id}</h4>
                              </div>
                              <p className="text-xs text-charcoal/70 leading-relaxed mt-3 font-medium">
                                {item.desc.id}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TIMELINE TAB */}
                  {activeNabiTab === "timeline" && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-charcoal">Perjalanan Garis Waktu</h3>
                      
                      <div className="relative border-l-2 border-teal/40 ml-4 pl-6 space-y-8 mt-8">
                        {nabi.timeline.map((event, idx) => (
                          <div key={idx} className="relative">
                            <span className="absolute -left-10 top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-white border-2 border-white shadow-sm font-bold text-[10px]">
                              {idx + 1}
                            </span>
                            <div>
                              <span className="inline-block text-[9px] font-bold text-teal bg-teal-light px-2 py-0.5 rounded-full uppercase tracking-wider">
                                {event.yearOrAge}
                              </span>
                              <h4 className="font-extrabold text-sm text-charcoal mt-1.5">
                                {event.title.id}
                              </h4>
                              <p className="text-xs text-charcoal/70 mt-1 leading-relaxed font-medium">
                                {event.desc.id}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* DAILY APPLICATION TAB */}
                  {activeNabiTab === "harian" && (
                    <div className="space-y-6 text-center py-6">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-gold text-3xl border border-yellow-100 mb-4 animate-pulse">
                        🏡
                      </div>
                      <h3 className="text-xl font-extrabold text-charcoal">Teladan di Kehidupan Nyata</h3>
                      <p className="text-sm font-medium text-charcoal/80 max-w-lg mx-auto leading-relaxed mt-2 bg-cream/40 p-5 rounded-2xl border border-cream-dark/50">
                        {nabi.dailyLifeConnection.id}
                      </p>

                      <div className="pt-8 flex justify-center">
                        <button
                          onClick={handleCompleteNonScientific}
                          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal to-teal-dark hover:from-teal-dark hover:to-teal px-8 py-4 text-sm font-bold text-white shadow-lg active:scale-95 transition-all animate-bounce"
                        >
                          <CheckCircle2 className="h-4.5 w-4.5 text-gold" />
                          <span>Tandai Selesai & Dapatkan Poin! (+100 Poin)</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })()
        )}

        {/* ========================================================
            3. ASMAUL HUSNA FLASHCARD LAYOUT
           ======================================================== */}
        {isAsmaulHusna && (
          (() => {
            const asma = object as AsmaulHusnaData;
            return (
              <>
                {/* Flipcard Perspective Area */}
                <div className="flex flex-col items-center justify-center my-10" style={{ perspective: "1000px" }}>
                  <div 
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-full max-w-lg aspect-[1.7/1] sm:aspect-[2/1] rounded-3xl cursor-pointer relative shadow-2xl"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    
                    {/* Front Side */}
                    <div 
                      className="bg-gradient-to-tr from-teal to-teal-dark border-4 border-gold rounded-3xl p-8 flex flex-col justify-between text-white"
                      style={{
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        inset: 0,
                      }}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="text-xs font-bold tracking-widest text-gold uppercase">Asmaul Husna</span>
                        <span className="text-xs font-semibold text-white/60">Klik untuk balik 🔄</span>
                      </div>
                      
                      <div className="text-center py-4 space-y-2">
                        <span className="block font-serif text-6xl font-bold tracking-wide select-none leading-relaxed text-gold">
                          {asma.arabicWithHarakat}
                        </span>
                        <span className="block text-2xl font-extrabold uppercase tracking-widest mt-1">
                          {asma.transliteration}
                        </span>
                      </div>

                      <div className="text-center border-t border-white/20 pt-4">
                        <span className="block text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none">Arti Nama</span>
                        <span className="block text-lg font-extrabold text-gold mt-1.5 leading-none">{asma.meaning.id}</span>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div 
                      className="bg-white border-4 border-teal rounded-3xl p-6 md:p-8 flex flex-col justify-between text-charcoal"
                      style={{
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        inset: 0,
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="text-xs font-bold text-teal uppercase tracking-widest">Makna Untuk Anak</span>
                        <span className="text-xs font-semibold text-charcoal/40">Klik untuk balik 🔄</span>
                      </div>

                      <div className="my-auto space-y-3">
                        <p className="text-xs leading-relaxed font-semibold text-charcoal/80">
                          {asma.explanationForKids.id}
                        </p>
                        
                        <div className="p-3.5 bg-yellow-50/50 border border-yellow-100 rounded-xl flex gap-2">
                          <span className="text-lg">💡</span>
                          <p className="text-[11px] text-charcoal/70 leading-normal font-medium">
                            <strong className="text-charcoal">Contoh:</strong> {asma.realLifeExample.id}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-end gap-2 border-t border-cream-dark/60 pt-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakAudio(`${asma.transliteration}. Artinya, ${asma.meaning.id}. ${asma.explanationForKids.id}`);
                          }}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-bold text-white transition ${
                            isAudioPlaying ? "bg-gold" : "bg-teal hover:bg-teal-dark"
                          }`}
                        >
                          {isAudioPlaying ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                          <span>{isAudioPlaying ? "Hentikan Suara" : "Dengar Penjelasan"}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flip Instruction Hint */}
                <div className="text-center -mt-4 text-xs font-semibold text-charcoal/40 flex justify-center items-center gap-1.5 select-none">
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  <span>Tekan kartu di atas untuk membalik dan melihat maknanya!</span>
                </div>

                {/* Connected Objects Links */}
                {asma.connectedObjectSlugs && asma.connectedObjectSlugs.length > 0 && (
                  <div className="mt-12 space-y-4">
                    <h3 className="text-xs font-bold text-charcoal/50 uppercase tracking-widest flex items-center gap-2">
                      <Compass className="h-4 w-4" />
                      Terhubung dengan Objek Ciptaan Allah
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {asma.connectedObjectSlugs.map((slug) => {
                        const related = objectsData.find((o) => o.slug === slug);
                        if (!related) return null;
                        return (
                          <button
                            key={slug}
                            onClick={() => router.push(`/learn/${slug}`)}
                            className="flex items-center gap-4 text-left border border-cream-dark bg-white rounded-2xl p-4 hover:-translate-y-0.5 hover:shadow-md transition active:scale-[0.98]"
                          >
                            <span className="text-3xl flex items-center justify-center h-12 w-12 bg-cream rounded-xl border border-cream-dark">
                              {related.icon}
                            </span>
                            <div>
                              <span className="block text-[9px] font-bold text-teal uppercase tracking-wide leading-none">Materi Terkait</span>
                              <h4 className="font-extrabold text-sm text-charcoal mt-1 leading-none">{related.name.id}</h4>
                              <p className="text-[10px] text-charcoal/50 mt-1 leading-none italic font-serif">
                                {related.type === "hewan" || related.type === "tumbuhan" || related.type === "alam" || related.type === "tubuh" || related.type === "langit"
                                  ? (related as ObjectData).scientificName
                                  : "Ciptaan Allah"}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Complete Button */}
                <div className="mt-12 flex justify-center border-t border-cream-dark pt-8">
                  <button
                    onClick={handleCompleteNonScientific}
                    className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal to-teal-dark hover:from-teal-dark hover:to-teal px-8 py-4 text-sm font-bold text-white shadow-lg active:scale-95 transition-all animate-bounce"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-gold" />
                    <span>Tandai Selesai & Dapatkan Poin! (+50 Poin)</span>
                  </button>
                </div>
              </>
            );
          })()
        )}
      </main>

      {/* Rewards Congrats Modal */}
      {showRewardModal && (() => {
        const currentIdx = objectsData.findIndex((o) => o.slug === object.slug);
        const nextObject = currentIdx !== -1 && currentIdx < objectsData.length - 1 ? objectsData[currentIdx + 1] : null;
        const points = object.type === "nabi" ? 100 : object.type === "asmaul-husna" ? 50 : (isBalita ? 50 : isAnak ? 75 : 100);
        
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
              
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-transparent -z-10" />

              <div className="mx-auto h-16 w-16 bg-gold rounded-full flex items-center justify-center text-3xl shadow-lg border-2 border-white animate-bounce">
                🎖️
              </div>

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
                  Kamu berhasil mempelajari materi dan membuka kartu koleksi ciptaan Allah: **{object.name.id}**.
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
                  <span className="block text-[11px] font-bold leading-tight">
                    {object.type === "asmaul-husna" ? (object as AsmaulHusnaData).transliteration : object.name.en}
                  </span>
                  <span className="block text-[7px] text-white/60 font-serif italic leading-none">
                    {object.type === "hewan" || object.type === "tumbuhan" || object.type === "alam" || object.type === "tubuh" || object.type === "langit"
                      ? (object as ObjectData).scientificName
                      : object.type === "nabi"
                      ? "Kisah Nabi & Rasul"
                      : (object as AsmaulHusnaData).arabicWithHarakat}
                  </span>
                </div>
                <div className="text-[8px] text-center text-gold bg-white/10 py-1 rounded-lg uppercase tracking-wider font-bold">
                  {object.type === "hewan" || object.type === "tumbuhan" || object.type === "alam" || object.type === "tubuh" || object.type === "langit"
                    ? (object as ObjectData).surahName
                    : object.type === "nabi"
                    ? (object as NabiData).surahReference
                    : "Asmaul Husna"}
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
