import { ObjectData } from "../objects";

export const hujanData: ObjectData = {
  slug: "hujan",
  name: { id: "Hujan", en: "Rain" },
  icon: "🌧️",
  category: "alam",
  type: "alam",
  scientificName: "Precipitation",
  surahName: "Ar-Rum",
  surahReference: "30:48",
  unlockedAtPoints: 15,
  kosakata: [
    { arab: "مَطَر", latin: "Matar", arti: "Hujan", artiEn: "Rain", contohAyat: "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًا" }
  ],
  balita: {
    text: { id: "Tik tik tik! Bunyi hujan di atas genting! ☔", en: "Tik tik tik! The sound of rain on the roof! ☔" },
    audioTranscript: { id: "Hujan itu air yang turun dari langit untuk memberi minum bunga-bunga dan pohon biar tumbuh besar.", en: "Rain is water that falls from the sky to give a drink to flowers and trees so they grow big." },
    quiz: {
      question: { id: "Hujan turun dari mana?", en: "Where does rain fall from?" },
      options: [
        { text: { id: "Dari awan", en: "From clouds" } },
        { text: { id: "Dari matahari", en: "From the sun" } },
        { text: { id: "Dari bulan", en: "From the moon" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Hujan terjadi saat air laut memanas, naik menjadi uap berkumpul jadi awan hitam. Lalu turun deh air hujan! Allah menurunkan hujan sebagai rahmat supaya bumi menjadi subur dan ada makanan untuk kita.", en: "Rain happens when seawater heats up, rises into vapor, and gathers into black clouds. Then the rainwater falls! Allah sends down rain as a mercy so the earth becomes fertile and there is food for us." },
    facts: [
      { id: "Tetesan hujan tidak berbentuk seperti air mata, tapi seperti kue hamburger kecil lho!", en: "Raindrops are not shaped like teardrops, but like tiny hamburger buns!" },
      { id: "Bau khas saat hujan turun punya nama keren: Petrichor.", en: "The distinct smell when it rains has a cool name: Petrichor." },
      { id: "Di planet lain seperti Neptunus, hujannya bukan air, tapi berlian!", en: "On other planets like Neptune, the rain is not water, but diamonds!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Siklus hidrologi sangat rumit, melibatkan penguapan, kondensasi angin, dan partikel debu sebagai nukleasi tetes hujan. Hebatnya, Al-Qur'an menjelaskan siklus air ini secara detail; bagaimana angin menggerakkan awan, lalu awan dikumpulkan, dan air keluar dari celah-celahnya!", en: "The hydrological cycle is very complex, involving evaporation, wind condensation, and dust particles as raindrop nucleation. Amazingly, the Quran explains this water cycle in detail; how the wind drives the clouds, then the clouds are gathered, and water emerges from their midst!" },
    quranVerse: {
      arabic: "اللَّهُ الَّذِي يُرْسِلُ الرِّيَاحَ فَتُثِيرُ سَحَابًا فَيَبْسُطُهُ فِي السَّمَاءِ كَيْفَ يَشَاءُ وَيَجْعَلُهُ كِسَفًا فَتَرَى الْوَدْقَ يَخْرُجُ مِنْ خِلَالِهِ",
      transliteration: "Allaahulladzii yursilur-riyaaha fa tuthiiru sahaaban fa yabsutuhuu fis-samaa'i kayfa yasyaa'u wa yaj'aluhuu kisafan fataral-wadqa yakhruju min khilaalih",
      translation: { id: "Allah, Dialah yang mengirim angin, lalu angin itu menggerakkan awan dan Allah membentangkannya di langit menurut yang dikehendaki-Nya, dan menjadikannya bergumpal-gumpal; lalu kamu lihat hujan keluar dari celah-celahnya,", en: "It is Allah who sends the winds, and they stir the clouds and spread them in the sky however He wills, and He makes them fragments so you see the rain emerge from within them." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
