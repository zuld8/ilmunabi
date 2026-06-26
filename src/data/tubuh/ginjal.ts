import { ObjectData } from "../objects";

export const ginjalData: ObjectData = {
  slug: "ginjal",
  name: { id: "Ginjal", en: "Kidney" },
  icon: "🫘",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Ren",
  surahName: "At-Tin",
  surahReference: "95:4",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "كُلْيَةٌ", latin: "Kulyatun", arti: "Ginjal", artiEn: "Kidney", contohAyat: "Laqad khalaqnal-insaana fee ahsani taqweem (Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya)." }
  ],
  balita: {
    text: { id: "Bentuknya seperti kacang merah kecil, tapi tugasnya hebat! Dia menyaring sampah dari tubuh kita supaya kita jadi bersih dan sehat. Ayo minum air yang cukup! 💧😊", en: "It looks like a small red bean, but its job is amazing! It filters garbage out of our body so we stay clean and healthy. Let's drink enough water! 💧😊" },
    audioTranscript: { id: "Ginjal itu saringan pintar. Dia membuang kotoran lewat pipis kita.", en: "The kidney is a smart filter. It throws away dirt through our pee." },
    quiz: {
      question: { id: "Bentuk ginjal kita mirip seperti apa?", en: "What does our kidney look like?" },
      options: [
        { text: { id: "Bintang", en: "Star" } },
        { text: { id: "Kacang", en: "Bean" } },
        { text: { id: "Kotak", en: "Box" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Ginjal itu seperti mesin cuci di dalam perut kita! Setiap hari, ia mencuci darah kita dari kotoran. Kotorannya dibuang menjadi air seni (pipis). Masya Allah, Allah kasih kita 2 ginjal yang bekerja non-stop agar kita tidak sakit. Jaga ginjal dengan banyak minum air putih! 🚰💖", en: "The kidneys are like washing machines in our belly! Every day, they wash our blood from dirt. The dirt is thrown out as urine (pee). Masya Allah, Allah gave us 2 kidneys working non-stop so we don't get sick. Take care of your kidneys by drinking lots of water! 🚰💖" },
    facts: [
      { id: "Satu ginjal berisi lebih dari sejuta saringan super kecil yang disebut nefron! 🔬", en: "One kidney contains more than a million super tiny filters called nephrons! 🔬" },
      { id: "Ginjal menyaring sekitar setengah cangkir darah setiap menit. 🏎️", en: "Kidneys filter about a half cup of blood every minute. 🏎️" },
      { id: "Letak ginjal ada di punggung bagian bawah kita.", en: "Kidneys are located in our lower back." }
    ],
    quranVerse: {
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      transliteration: "Laqad khalaqnal-insaana fee ahsani taqweem",
      translation: { id: "Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.", en: "We have certainly created man in the best of stature." },
      context: { id: "Sistem filter (penyaringan) yang ada di ginjal adalah bukti ciptaan Allah yang paling baik.", en: "The filter system in the kidneys is proof of Allah's best creation." }
    },
    quiz: {
      question: { id: "Minuman apa yang paling baik untuk menjaga kesehatan ginjal?", en: "What drink is the best to maintain kidney health?" },
      options: [
        { text: { id: "Sirup manis", en: "Sweet syrup" } },
        { text: { id: "Air putih", en: "Plain water" } },
        { text: { id: "Es krim cair", en: "Melted ice cream" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Bayangkan kamu punya mesin yang bisa mengenali mana kotoran berbahaya, dan mana nutrisi penting, lalu hanya membuang kotorannya! Itulah ginjalmu. Proses ini terjadi secara mikroskopis di jutaan tabung bernama Nefron. Subhanallah! Tidak ada manusia yang bisa membuat alat pencuci darah secanggih, sekecil, dan seefisien buatan Allah. Kita patut bersyukur memiliki ginjal yang sehat. ✨", en: "Imagine having a machine that can recognize what is dangerous dirt and what are important nutrients, and then only throws away the dirt! That's your kidney. This process happens microscopically in millions of tubes called Nephrons. Subhanallah! No human could make a blood washing machine as advanced, small, and efficient as Allah's creation. We should be grateful to have healthy kidneys. ✨" },
    anatomy: [
      { part: { id: "Korteks Renal", en: "Renal Cortex" }, desc: { id: "Bagian luar ginjal, tempat jutaan saringan (nefron) berada.", en: "The outer part of the kidney, where millions of filters (nephrons) are located." } },
      { part: { id: "Medula Renal", en: "Renal Medulla" }, desc: { id: "Bagian dalam yang berbentuk seperti piramida kecil, menyalurkan urine.", en: "The inner part shaped like tiny pyramids, channeling urine." } },
      { part: { id: "Ureter", en: "Ureter" }, desc: { id: "Pipa panjang yang mengalirkan air kotor (urine) ke kantung kemih.", en: "A long pipe that flows dirty water (urine) to the bladder." } }
    ],
    wowFactor: { id: "Jika salah satu ginjal rusak, ginjal yang satunya bisa membesar untuk mengambil alih tugas menyaring darah sendirian! 🦸‍♂️", en: "If one kidney fails, the other kidney can grow bigger to take over the job of filtering blood all by itself! 🦸‍♂️" },
    quranVerse: {
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      transliteration: "Laqad khalaqnal-insaana fee ahsani taqweem",
      translation: { id: "Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.", en: "We have certainly created man in the best of stature." }
    },
    quiz: [
      {
        question: { id: "Saringan super kecil di dalam ginjal disebut apa?", en: "What are the super tiny filters inside the kidney called?" },
        options: [
          { text: { id: "Alveolus", en: "Alveoli" } },
          { text: { id: "Nefron", en: "Nephron" } },
          { text: { id: "Eritrosit", en: "Erythrocyte" } }
        ],
        answerIdx: 1
      }
    ]
  }
};