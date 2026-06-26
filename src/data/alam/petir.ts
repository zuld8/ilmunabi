import { ObjectData } from "../objects";

export const petirData: ObjectData = {
  slug: "petir",
  name: { id: "Petir", en: "Lightning" },
  icon: "⚡",
  category: "alam",
  type: "alam",
  scientificName: "Fulgur",
  surahName: "Ar-Ra'd",
  surahReference: "13:12",
  unlockedAtPoints: 40,
  kosakata: [
    { arab: "بَرْق", latin: "Barq", arti: "Kilat", artiEn: "Lightning", contohAyat: "يَكَادُ سَنَا بَرْقِهِ يَذْهَبُ بِالْأَبْصَارِ" }
  ],
  balita: {
    text: { id: "JDER! Wah, langitnya kaget ada kilat terang! 🫣", en: "BOOM! Wow, the sky is shocked by bright lightning! 🫣" },
    audioTranscript: { id: "Waktu hujan turun deras, kadang ada kilat putih bercahaya dan suara guruh yang kencang. Jangan takut ya, itu cuma awan yang sedang bersentuhan.", en: "When it rains heavily, sometimes there is a bright white flash and a loud thunder sound. Don't be afraid, it's just clouds touching each other." },
    quiz: {
      question: { id: "Suara keras setelah kilat disebut apa?", en: "What is the loud sound after lightning called?" },
      options: [
        { text: { id: "Guntur", en: "Thunder" } },
        { text: { id: "Gitar", en: "Guitar" } },
        { text: { id: "Motor", en: "Motorcycle" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Petir itu seperti listrik raksasa yang melompat dari awan ke tanah! Panasnya melebihi permukaan matahari lho! Petir terjadi karena ada gesekan es di dalam awan badai.", en: "Lightning is like giant electricity jumping from the cloud to the ground! Its heat exceeds the surface of the sun! Lightning happens because there is ice friction inside storm clouds." },
    facts: [
      { id: "Satu sambaran petir punya energi untuk menyalakan lampu selama sebulan!", en: "One lightning strike has enough energy to power a light bulb for a month!" },
      { id: "Kaca bisa terbentuk secara alami kalau petir menyambar pasir di pantai.", en: "Glass can form naturally when lightning strikes sand on the beach." },
      { id: "Kita melihat kilat lebih dulu sebelum mendengar guntur karena cahaya lebih cepat dari suara.", en: "We see the flash first before hearing the thunder because light travels faster than sound." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Kilat petir sangat menakjubkan, suhunya bisa mencapai 30.000 derajat Celcius! Al-Qur'an menggambarkan kilat yang menyambar-nyambar ini bisa membuat orang ketakutan sekaligus penuh harap akan turunnya hujan yang menyuburkan. Sains membuktikan petir memang memecah molekul nitrogen di udara menjadi pupuk alami penyubur tanah!", en: "Lightning flashes are amazing, their temperature can reach 30,000 degrees Celsius! The Quran describes this flashing lightning can make people feel fear and hope for the rain that fertilizes. Science proves that lightning breaks down nitrogen molecules in the air into natural soil fertilizer!" },
    quranVerse: {
      arabic: "هُوَ الَّذِي يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا وَيُنْشِئُ السَّحَابَ الثِّقَالَ",
      transliteration: "Huwalladzii yuriikumul-barqa khawfan wa tama'an wa yunnyi'us-sahaabath-thiqaal",
      translation: { id: "Dialah Tuhan yang memperlihatkan kilat kepadamu untuk menimbulkan ketakutan dan harapan, dan Dia mengadakan awan mendung.", en: "It is He who shows you lightening, [causing] fear and aspiration, and generates the heavy clouds." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
