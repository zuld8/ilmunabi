import { ObjectData } from "../objects";

export const untaData: ObjectData = {
  slug: "unta",
  name: { id: "Unta", en: "Camel" },
  icon: "🐪",
  category: "hewan",
  type: "hewan",
  scientificName: "Camelus dromedarius",
  surahName: "Al-Ghashiyah",
  surahReference: "88:17",
  unlockedAtPoints: 40,
  kosakata: [
    { arab: "جَمَلٌ / إِبِلٌ", latin: "jamalun / ibilun", arti: "Unta", artiEn: "Camel", contohAyat: "أَفَلَا يَنْظُرُونَ إِلَى الْإِبِلِ (Maka tidakkah mereka memperhatikan unta?)" }
  ],
  balita: {
    text: { id: "Uhuuk... 🐪 Unta punya punuk di punggungnya seperti gunung kecil. Dia suka berjalan di gurun pasir!", en: "Grunt... 🐪 Camels have a hump on their back like a small mountain. They love walking in the desert!" },
    audioTranscript: { id: "Halo teman! Aku Unta. Aku bisa berjalan di pasir yang sangat panas berhari-hari tanpa minum air lho!", en: "Hello friend! I am a Camel. I can walk on very hot sand for days without drinking water!" },
    quiz: {
      question: { id: "Di mana letak punuk (gunungan) pada tubuh unta?", en: "Where is the hump located on a camel's body?" },
      options: [
        { text: { id: "Di atas kepalanya", en: "On its head" } },
        { text: { id: "Di punggungnya", en: "On its back" } },
        { text: { id: "Di ekornya", en: "On its tail" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Banyak yang mengira punuk unta berisi air, padahal sebenarnya punuk itu berisi lemak cadangan makanan! Kalau unta kehabisan makanan di gurun pasir, lemak itu yang memberinya energi. Keren ya!", en: "Many think a camel's hump is full of water, but it actually contains fat as food reserves! When a camel runs out of food in the desert, that fat gives it energy. So cool!" },
    facts: [
      { id: "Unta punya 3 lapis kelopak mata dan bulu mata panjang untuk menahan badai pasir! 🐪", en: "Camels have 3 layers of eyelids and long eyelashes to keep out sandstorms! 🐪" },
      { id: "Bibir unta sangat tebal sehingga dia bisa makan kaktus berduri tanpa terluka! 🌵", en: "A camel's lips are so thick it can eat thorny cactus without getting hurt! 🌵" },
      { id: "Sekali minum, unta bisa menghabiskan 100 liter air dalam 10 menit! 💧", en: "In one drink, a camel can finish 100 liters of water in 10 minutes! 💧" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Unta adalah keajaiban penciptaan! Allah secara khusus menyuruh kita memperhatikan penciptaan unta dalam Surah Al-Ghashiyah. Selain itu, Nabi Saleh AS juga diberikan mukjizat berupa Unta Betina raksasa yang keluar dari batu karang, sebagai bukti nyata kebesaran Allah kepada kaum Tsamud.", en: "Camels are a miracle of creation! Allah specifically tells us to observe the creation of camels in Surah Al-Ghashiyah. Besides that, Prophet Saleh AS was also given a miracle of a giant female Camel emerging from a rock, as clear proof of Allah's greatness to the people of Thamud." },
    quranVerse: {
      arabic: "أَفَلَا يَنْظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ",
      transliteration: "Afalaa yandhuruuna ilal ibili kayfa khuliqat",
      translation: { id: "Maka tidakkah mereka memperhatikan unta, bagaimana dia diciptakan?", en: "Then do they not look at the camels - how they are created?" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
