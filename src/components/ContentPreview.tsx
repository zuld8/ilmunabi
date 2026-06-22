"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Sparkles, BookOpen, Compass } from "lucide-react";

interface ContentPreviewProps {
  lang: "id" | "en";
}

type ZoneKey = "balita" | "anak" | "explorer";

export default function ContentPreview({ lang }: ContentPreviewProps) {
  const [activeZone, setActiveZone] = useState<ZoneKey>("balita");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isFlapping, setIsFlapping] = useState(true);

  // Sync flapping animation state with audio state for Balita, or keep it responsive.
  useEffect(() => {
    if (activeZone !== "balita") {
      setIsPlayingAudio(false);
    }
  }, [activeZone]);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  const content = {
    id: {
      title: "Preview Materi: Lebah (An-Nahl)",
      subtitle: "Alami sendiri bagaimana metode belajar IlmuNabi menyesuaikan tingkat perkembangan kognitif anak.",
      tabs: {
        balita: "Zona Balita (2-5)",
        anak: "Zona Anak (6-8)",
        explorer: "Zona Explorer (9-12)",
      },
      previewLabel: "Simulasi Tampilan Aplikasi",
      narrationBtn: isPlayingAudio ? "Jeda Narasi" : "Putar Narasi",
      narrationPlaying: "🔊 Narasi sedang diputar: 'Ini lebah! Lebah suka bunga...'",
      narrationPaused: "Narasi dihentikan. Klik putar untuk mendengar suara ramah anak.",
      beeAlt: "Animasi Lebah Madu",
      balitaTxt: "Ini lebah! Lebah suka bunga. Lebah bikin madu yang manis. 🐝",
      anakTxt: "Lebah bisa terbang sejauh 800 km hanya untuk membuat satu sendok madu. Lebah berkomunikasi dengan cara... menari! Mereka goyang-goyang badan untuk kasih tahu teman-temannya di mana ada bunga.",
      explorerTxt: "Lebah menggunakan 'waggle dance' — sistem komunikasi yang baru dipahami ilmuwan di tahun 1973 oleh Karl von Frisch, yang kemudian menang Nobel. Tapi 14 abad sebelumnya, Al-Qur'an sudah menyebut lebah diperintah Allah untuk membuat sarang dan menghasilkan minuman yang menyembuhkan. Surah An-Nahl, ayat 68–69.",
      explorerQTitle: "Fakta Quranic",
      explorerQBody: "Surah An-Nahl:69 — 'Kemudian makanlah dari segala (macam) buah-buahan lalu tempuhlah jalan Tuhanmu yang telah dimudahkan...' Dari perutnya keluar minuman (madu) yang bermacam-macam warnanya, di dalamnya terdapat obat yang menyembuhkan bagi manusia.",
      wowFactorTitle: "Fakta WOW yang Menjembatani Sains ke Islam",
    },
    en: {
      title: "Preview Material: Honeybee (An-Nahl)",
      subtitle: "Experience firsthand how IlmuNabi tailors learning methods to match each child's cognitive development.",
      tabs: {
        balita: "Toddler Zone (2-5)",
        anak: "Kids Zone (6-8)",
        explorer: "Explorer Zone (9-12)",
      },
      previewLabel: "App Interface Simulation",
      narrationBtn: isPlayingAudio ? "Pause Narration" : "Play Narration",
      narrationPlaying: "🔊 Narration playing: 'This is a bee! Bees love flowers...'",
      narrationPaused: "Narration paused. Click play to listen to child-friendly voiceover.",
      beeAlt: "Animated Honeybee",
      balitaTxt: "This is a bee! Bees love flowers. Bees make sweet honey. 🐝",
      anakTxt: "A honeybee flies up to 800 km just to produce a single spoonful of honey. Bees communicate by... dancing! They waggle their bodies to show their friends where the best flowers are.",
      explorerTxt: "Bees communicate using a 'waggle dance' — a system scientists only understood in 1973 through Karl von Frisch (which won a Nobel Prize). Yet 14 centuries ago, the Qur'an already mentioned that bees are commanded by Allah to build hives and produce a healing drink. Surah An-Nahl, verses 68–69.",
      explorerQTitle: "Quranic Connection",
      explorerQBody: "Surah An-Nahl:69 — 'Then eat from all the fruits and follow the ways of your Lord made easy for you.' There emerges from their bellies a drink, varying in colors, in which there is healing for people.",
      wowFactorTitle: "WOW Factor Bridging Science to Islam",
    },
  };

  const t = content[lang];

  return (
    <section className="bg-cream py-20">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flap-left {
          0%, 100% { transform: rotate(0deg) scaleY(1); }
          50% { transform: rotate(-35deg) scaleY(0.7); }
        }
        @keyframes flap-right {
          0%, 100% { transform: rotate(0deg) scaleY(1); }
          50% { transform: rotate(35deg) scaleY(0.7); }
        }
        @keyframes waggle {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5px, -5px) rotate(5deg); }
          50% { transform: translate(0, 0) rotate(-5deg); }
          75% { transform: translate(-5px, 5px) rotate(5deg); }
        }
        .animate-wing-left {
          animation: flap-left 0.15s infinite ease-in-out;
          transform-origin: right bottom;
        }
        .animate-wing-right {
          animation: flap-right 0.15s infinite ease-in-out;
          transform-origin: left bottom;
        }
        .animate-waggle-bee {
          animation: waggle 0.6s infinite ease-in-out;
        }
      `}} />

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-charcoal/80">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Tab Selectors */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {(["balita", "anak", "explorer"] as ZoneKey[]).map((zone) => (
            <button
              key={zone}
              onClick={() => setActiveZone(zone)}
              className={`rounded-2xl px-6 py-3.5 text-sm font-bold shadow-sm transition-all duration-200 ${
                activeZone === zone
                  ? "bg-teal text-white ring-4 ring-teal/10"
                  : "bg-white text-charcoal/70 border border-cream-dark hover:bg-cream-dark/40"
              }`}
            >
              {t.tabs[zone]}
            </button>
          ))}
        </div>

        {/* Interactive Mockup Box */}
        <div className="mt-8 overflow-hidden rounded-3xl border-4 border-teal/10 bg-white shadow-xl">
          {/* Mockup Header */}
          <div className="flex items-center justify-between border-b border-cream-dark bg-cream-dark/20 px-6 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs font-semibold text-charcoal/50">
              {t.previewLabel}
            </span>
            <div className="w-12" /> {/* Spacer */}
          </div>

          {/* Mockup Content Body */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Box: Content Text */}
            <div className="flex flex-col justify-center p-8 md:p-12 border-r border-cream-dark/40">
              
              {/* Zone Tag */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal tracking-wider uppercase mb-4">
                {activeZone === "balita" && <Sparkles className="h-4 w-4 text-gold" />}
                {activeZone === "anak" && <BookOpen className="h-4 w-4 text-teal-medium" />}
                {activeZone === "explorer" && <Compass className="h-4 w-4 text-gold" />}
                {t.tabs[activeZone]}
              </div>

              {/* Dynamic Text Content */}
              {activeZone === "balita" && (
                <div>
                  <p className="text-2xl font-bold leading-relaxed text-charcoal">
                    {t.balitaTxt}
                  </p>
                  
                  {/* Interactive Audio Narration Control */}
                  <div className="mt-8 rounded-2xl bg-cream p-4 border border-cream-dark/50">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={toggleAudio}
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow transition-all active:scale-95 ${
                          isPlayingAudio ? "bg-gold" : "bg-teal hover:bg-teal-dark"
                        }`}
                      >
                        {isPlayingAudio ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                      </button>
                      <div>
                        <p className="text-sm font-bold text-charcoal">
                          {t.narrationBtn}
                        </p>
                        <p className="text-xs text-charcoal/60 mt-0.5">
                          {isPlayingAudio ? t.narrationPlaying : t.narrationPaused}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeZone === "anak" && (
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-charcoal font-medium">
                    {t.anakTxt}
                  </p>
                  <div className="rounded-2xl border border-teal/10 bg-teal-light/30 p-4">
                    <span className="text-xs font-bold text-teal uppercase tracking-wider">
                      Fakta Sains Menarik
                    </span>
                    <ul className="mt-2 space-y-1.5 text-sm text-charcoal/80">
                      <li>• Komunikasi lebah adalah satu-satunya tarian yang mengekspresikan data geospasial presisi.</li>
                      <li>• Lebah menggerakkan badannya membentuk sudut relatif terhadap posisi matahari.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeZone === "explorer" && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-teal tracking-wider uppercase">
                      {t.wowFactorTitle}
                    </h4>
                    <p className="text-base leading-relaxed text-charcoal font-medium">
                      {t.explorerTxt}
                    </p>
                  </div>

                  <div className="rounded-2xl border-l-4 border-gold bg-gold/5 p-4 space-y-2">
                    <h5 className="text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      {t.explorerQTitle}
                    </h5>
                    <p className="text-xs italic leading-relaxed text-charcoal/80">
                      {t.explorerQBody}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Box: Live Visual Simulation */}
            <div className="flex items-center justify-center p-12 bg-cream-dark/20 min-h-[350px]">
              
              {/* Toddler Visual (Animated bee flapping wings) */}
              {activeZone === "balita" && (
                <div className="relative flex flex-col items-center gap-6">
                  <div className="relative h-44 w-44 flex items-center justify-center">
                    {/* Glowing pulse behind bee */}
                    {isPlayingAudio && (
                      <div className="absolute inset-0 rounded-full bg-gold/10 animate-ping" />
                    )}
                    
                    {/* Cute Bee SVG */}
                    <svg viewBox="0 0 100 100" className="h-36 w-36 relative z-10 cursor-pointer" onClick={() => setIsFlapping(!isFlapping)}>
                      {/* Wings */}
                      <g className={isFlapping || isPlayingAudio ? "animate-wing-left" : ""}>
                        <ellipse cx="38" cy="30" rx="10" ry="16" fill="#EAF2F4" stroke="#1E5F74" strokeWidth="2.5" transform="rotate(-30 38 30)" />
                      </g>
                      <g className={isFlapping || isPlayingAudio ? "animate-wing-right" : ""}>
                        <ellipse cx="62" cy="30" rx="10" ry="16" fill="#EAF2F4" stroke="#1E5F74" strokeWidth="2.5" transform="rotate(30 62 30)" />
                      </g>
                      
                      {/* Body */}
                      <ellipse cx="50" cy="55" rx="22" ry="26" fill="#F3B759" stroke="#2D3748" strokeWidth="3" />
                      
                      {/* Stripes */}
                      <path d="M31 46 C38 41, 62 41, 69 46" fill="none" stroke="#2D3748" strokeWidth="3" />
                      <path d="M28 55 C36 50, 64 50, 72 55" fill="none" stroke="#2D3748" strokeWidth="4" />
                      <path d="M30 64 C38 59, 62 59, 70 64" fill="none" stroke="#2D3748" strokeWidth="3" />
                      
                      {/* Eyes */}
                      <circle cx="42" cy="45" r="3" fill="#2D3748" />
                      <circle cx="58" cy="45" r="3" fill="#2D3748" />
                      
                      {/* Smile */}
                      <path d="M46 51 Q50 54 54 51" fill="none" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />
                      
                      {/* Antennae */}
                      <path d="M45 29 Q42 20 36 22" fill="none" stroke="#2D3748" strokeWidth="2" />
                      <path d="M55 29 Q58 20 64 22" fill="none" stroke="#2D3748" strokeWidth="2" />
                      <circle cx="36" cy="22" r="2" fill="#2D3748" />
                      <circle cx="64" cy="22" r="2" fill="#2D3748" />
                    </svg>
                  </div>
                  
                  {/* Tap prompt */}
                  <span className="text-xs font-semibold text-charcoal/40 animate-bounce">
                    {lang === "id" ? "Sentuh lebah untuk kepakkan sayap!" : "Tap the bee to flap its wings!"}
                  </span>
                </div>
              )}

              {/* Kids Visual (Waggle Dance / infinity path animation) */}
              {activeZone === "anak" && (
                <div className="relative flex flex-col items-center w-full">
                  
                  {/* Path Background SVG */}
                  <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 200 200" fill="none">
                    <path
                      d="M 60,100 C 60,130 90,130 100,100 C 110,70 140,70 140,100 C 140,130 110,130 100,100 C 90,70 60,70 60,100 Z"
                      stroke="#E8A038"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                    />
                  </svg>
                  
                  {/* Dancing Bee */}
                  <div className="relative h-44 w-full flex items-center justify-center">
                    <div className="absolute animate-waggle-bee flex flex-col items-center">
                      
                      {/* Little Bee Icon */}
                      <div className="h-16 w-16 bg-gold rounded-full border-2 border-charcoal flex items-center justify-center relative shadow-md">
                        <span className="absolute -top-1 -left-1 text-xs">🐝</span>
                        <div className="flex gap-2">
                          <span className="w-1.5 h-1.5 bg-charcoal rounded-full" />
                          <span className="w-1.5 h-1.5 bg-charcoal rounded-full" />
                        </div>
                        {/* Wiggle motion visual rings */}
                        <span className="absolute inset-0 rounded-full border border-gold-dark animate-ping" />
                      </div>
                      
                      <span className="mt-2 text-[10px] font-bold text-gold bg-charcoal text-white px-2 py-0.5 rounded-full uppercase tracking-widest">
                        Waggle!
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-charcoal/40 text-center max-w-[200px] mt-4">
                    {lang === "id" ? "Lebah bergerak maju-mundur membentuk angka 8 untuk mengirim koordinat bunga." : "The bee wiggles in a figure-8 loop to relay flower coordinates."}
                  </span>
                </div>
              )}

              {/* Explorer Visual (Anatomy overview or science connections) */}
              {activeZone === "explorer" && (
                <div className="relative flex flex-col items-center gap-6 w-full">
                  
                  {/* Honeycomb diagram style structure */}
                  <div className="grid grid-cols-3 gap-2 w-full max-w-[280px]">
                    <div className="rounded-2xl border border-gold/40 bg-gold/5 p-3 text-center flex flex-col justify-center items-center h-24">
                      <span className="text-[10px] font-bold text-teal uppercase">1. Sun Angle</span>
                      <span className="text-xs font-semibold text-charcoal/80 mt-1">Azimuth navigation</span>
                    </div>
                    <div className="rounded-2xl border border-teal-medium/40 bg-teal-light/20 p-3 text-center flex flex-col justify-center items-center h-24 col-span-2">
                      <span className="text-[10px] font-bold text-teal uppercase">2. Honey Quality</span>
                      <span className="text-xs font-semibold text-charcoal/80 mt-1">pH 3.2-4.5 (Prevents bacterial growth)</span>
                    </div>
                    <div className="rounded-2xl border border-teal-medium/40 bg-teal-light/20 p-3 text-center flex flex-col justify-center items-center h-24 col-span-2">
                      <span className="text-[10px] font-bold text-teal uppercase">3. An-Nahl (The Bee)</span>
                      <span className="text-xs font-semibold text-charcoal/80 mt-1">Named specifically in Qur&apos;an as a sign for thinkers</span>
                    </div>
                    <div className="rounded-2xl border border-gold/40 bg-gold/5 p-3 text-center flex flex-col justify-center items-center h-24">
                      <span className="text-[10px] font-bold text-teal uppercase">4. Nobel 1973</span>
                      <span className="text-xs font-semibold text-charcoal/80 mt-1">Empirical validation</span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-charcoal/40 text-center max-w-[240px]">
                    {lang === "id" ? "Integrasi ilmu sains empiris & ayat Al-Qur'an secara padu." : "Seamless integration of empirical science and Quranic revelation."}
                  </span>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
