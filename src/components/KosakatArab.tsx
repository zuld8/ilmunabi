"use client";

import React, { useState, useEffect } from "react";
import { Volume2, CheckCircle2, AlertCircle } from "lucide-react";
import { ObjectData, KosakataItem } from "@/data/objects";

interface KosakatArabProps {
  object: ObjectData;
  zone: "balita" | "anak" | "explorer";
  lang: "id" | "en" | "ar";
}

export default function KosakatArab({ object, zone, lang }: KosakatArabProps) {
  // Speech synthesis function
  const speakArabic = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ar-SA";
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Browser Anda tidak mendukung text-to-speech.");
    }
  };

  // Balita Autoplay after 1 second
  useEffect(() => {
    const words = object.kosakata || [];
    if (zone === "balita" && words.length > 0) {
      const timer = setTimeout(() => {
        speakArabic(words[0].arab);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [zone, object]);

  // Explorer mini-quiz states
  const [quizTarget, setQuizTarget] = useState<KosakataItem | null>(null);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    const words = object.kosakata || [];
    if (zone === "explorer" && words.length > 0) {
      const target = words[0]; // target first word
      setQuizTarget(target);
      const correctText = `${target.arti} / ${target.artiEn}`;
      const distractors = words.slice(1).map((w) => `${w.arti} / ${w.artiEn}`);
      
      // Shuffle correct + distractors
      const shuffled = [correctText, ...distractors].sort(() => Math.random() - 0.5);
      setQuizOptions(shuffled);
      setUserAnswer(null);
      setIsAnswerCorrect(null);
    }
  }, [zone, object]);

  const handleQuizAnswer = (option: string) => {
    if (!quizTarget || isAnswerCorrect) return; // Locked once correct
    setUserAnswer(option);
    const correctText = `${quizTarget.arti} / ${quizTarget.artiEn}`;
    if (option === correctText) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const words = object.kosakata || [];
  if (words.length === 0) return null;

  const isArabicProminent = lang === "ar";

  return (
    <div 
      className={`mt-10 p-6 md:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden bg-white ${
        isArabicProminent 
          ? "border-gold ring-4 ring-gold/10 shadow-md bg-gradient-to-br from-gold-light/20 to-white" 
          : "border-cream-dark shadow-sm bg-cream/10"
      }`}
    >
      {/* Background Decorative Element for Arabic Toggle */}
      {isArabicProminent && (
        <div className="absolute -top-10 -right-10 text-gold/10 text-9xl font-amiri font-bold select-none pointer-events-none">
          عربي
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between border-b border-cream-dark/60 pb-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-charcoal flex items-center gap-2">
            <span>📖</span>
            <span className="font-sans">Kata dalam Al-Qur&apos;an</span>
          </h3>
          <p className="text-[11px] text-charcoal/50 mt-1">
            {zone === "balita" && "Sentuh untuk mendengar sebutan kata Al-Qur'an."}
            {zone === "anak" && "Kosakata Qur'an organik yang berkaitan dengan materi hari ini."}
            {zone === "explorer" && "Eksplorasi makna bahasa Arab dan konteks penggunaannya dalam ayat."}
          </p>
        </div>
        {isArabicProminent && (
          <span className="text-[10px] font-bold text-gold bg-gold-light/40 border border-gold/30 px-2.5 py-1 rounded-full uppercase">
            Fokus Arab Aktif
          </span>
        )}
      </div>

      {/* ZONA BALITA LAYOUT */}
      {zone === "balita" && (
        <div className="flex flex-col items-center py-6 text-center space-y-6">
          {/* Big Single Card */}
          <div 
            onClick={() => speakArabic(words[0].arab)}
            className="group cursor-pointer border border-cream-dark bg-white hover:border-teal rounded-3xl p-8 max-w-sm w-full shadow-sm hover:shadow-md transition-all active:scale-[0.98] duration-200"
          >
            <span className="block text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {words[0].icon}
            </span>
            <span className="block font-amiri text-5xl font-bold text-charcoal tracking-wide mb-2 select-all leading-loose">
              {words[0].arab}
            </span>
            <span className="block text-lg font-bold text-teal">
              {words[0].arti}
            </span>
            
            <button className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-teal-light text-teal px-4 py-2 text-xs font-bold hover:bg-teal hover:text-white transition-all">
              <Volume2 className="h-3.5 w-3.5" />
              <span>Dengarkan</span>
            </button>
          </div>
        </div>
      )}

      {/* ZONA ANAK LAYOUT */}
      {zone === "anak" && (
        <div className="flex overflow-x-auto gap-4 pb-4 select-none scrollbar-thin scrollbar-thumb-cream-dark">
          {words.slice(0, 3).map((w, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-60 border border-cream-dark bg-white rounded-2xl p-5 shadow-inner flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl">{w.icon}</span>
                <span className="block font-amiri text-3xl font-bold text-charcoal tracking-wide mt-3 leading-loose select-all">
                  {w.arab}
                </span>
                <span className="block text-xs font-bold text-charcoal/40 uppercase tracking-wider mt-1">
                  {w.latin}
                </span>
                <span className="block text-sm font-semibold text-teal mt-2">
                  {w.arti}
                </span>
              </div>

              <button
                onClick={() => speakArabic(w.arab)}
                className="mt-6 flex items-center justify-center gap-1.5 w-full rounded-xl bg-teal-light text-teal py-2.5 text-xs font-bold hover:bg-teal hover:text-white transition-all"
              >
                <Volume2 className="h-3.5 w-3.5" />
                <span>Pelafalan</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ZONA EXPLORER LAYOUT */}
      {zone === "explorer" && (
        <div className="space-y-8">
          {/* Scrollable list of 4 cards */}
          <div className="flex overflow-x-auto gap-4 pb-4 select-none scrollbar-thin scrollbar-thumb-cream-dark">
            {words.map((w, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-64 border border-cream-dark bg-white rounded-2xl p-5 shadow-inner flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-3xl">{w.icon}</span>
                    <button
                      onClick={() => speakArabic(w.arab)}
                      className="p-1.5 rounded-lg bg-cream hover:bg-teal-light text-charcoal hover:text-teal transition-all"
                      title="Pelafalan Arab"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  
                  <span className="block font-amiri text-3xl font-bold text-charcoal tracking-wide mt-3 leading-loose select-all">
                    {w.arab}
                  </span>
                  
                  <span className="block text-[10px] font-bold text-charcoal/40 uppercase tracking-wider mt-1">
                    {w.latin}
                  </span>

                  <div className="mt-3 space-y-1">
                    <span className="block text-xs text-charcoal/70 leading-normal">
                      🇮🇩 <span className="font-semibold text-teal">{w.arti}</span>
                    </span>
                    <span className="block text-xs text-charcoal/50 leading-normal">
                      🇬🇧 <span className="italic font-medium">{w.artiEn}</span>
                    </span>
                  </div>
                </div>

                <div className="mt-6 border-t border-cream-dark/60 pt-3">
                  <span className="text-[9px] font-extrabold text-teal bg-teal-light px-2 py-0.5 rounded uppercase font-sans">
                    Ayat: {w.contohAyat}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mini Quiz Area */}
          {quizTarget && (
            <div className="border-t border-cream-dark/60 pt-6 mt-6">
              <h4 className="text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-3 font-sans">
                🧩 Kuis Mini Kosakata
              </h4>
              <p className="text-sm font-bold text-charcoal mb-4 font-sans">
                Apa arti dari kata bahasa Arab <span className="font-amiri text-2xl font-bold px-2 py-0.5 border border-cream-dark/60 bg-cream/40 rounded-lg align-middle leading-loose mx-1">{quizTarget.arab}</span>?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {quizOptions.map((opt, idx) => {
                  const isSelected = userAnswer === opt;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(opt)}
                      disabled={isAnswerCorrect === true}
                      className={`text-left p-4 rounded-xl border-2 text-xs font-semibold transition-all font-sans ${
                        isSelected
                          ? isAnswerCorrect
                            ? "border-green-500 bg-green-50 text-green-800"
                            : "border-red-500 bg-red-50 text-red-800"
                          : "border-cream-dark bg-white hover:border-teal hover:bg-cream-dark/10"
                      } ${isAnswerCorrect && !isSelected ? "opacity-60 cursor-default" : ""}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Message */}
              {userAnswer && (
                <div className="mt-4 font-sans">
                  {isAnswerCorrect ? (
                    <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 px-4 py-3 rounded-xl text-xs font-bold animate-pulse">
                      <CheckCircle2 className="h-4.5 w-4.5 text-green-600 shrink-0" />
                      <span>✨ Hebat! Jawabanmu benar! Kamu menguasai kata Al-Qur&apos;an.</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-xl text-xs font-bold">
                      <AlertCircle className="h-4.5 w-4.5 text-red-600 shrink-0" />
                      <span>Oops! Jawaban kurang tepat. Coba lagi tebak artinya!</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
