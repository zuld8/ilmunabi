import { ObjectData } from "../objects";

export const pausData: ObjectData = {
  slug: "paus",
  name: { id: "Paus", en: "Whale" },
  icon: "🐋",
  category: "mamalia",
  type: "hewan",
  scientificName: "Cetacea",
  surahName: "As-Saffat",
  surahReference: "37:142",
  unlockedAtPoints: 70,
  kosakata: [
    { arab: "حُوت", latin: "Huut", arti: "Paus / Ikan Besar", artiEn: "Whale / Large Fish", contohAyat: "Maka ia ditelan oleh ikan besar dalam keadaan tercela." }
  ],
  balita: {
    text: { id: "Byuuur! Halo, aku paus besar yang berenang di lautan luas! Aku bisa menyemburkan air dari kepalaku lho! 🌊🐋", en: "Splash! Hello, I am a big whale swimming in the vast ocean! I can spout water from my head! 🌊🐋" },
    audioTranscript: { id: "Byuur! Lihat air mancur dari atas kepalaku, tinggi sekali kan?", en: "Splash! Look at the fountain from the top of my head, very high right?" },
    quiz: {
      question: { id: "Apa yang bisa disemburkan paus dari kepalanya?", en: "What can a whale spout from its head?" },
      options: [
        { text: { id: "Api", en: "Fire" } },
        { text: { id: "Angin dan Air", en: "Air and Water" } },
        { text: { id: "Gelembung Sabun", en: "Soap Bubbles" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Paus adalah hewan terbesar di bumi yang diciptakan Allah! Ingatkah kamu kisah Nabi Yunus AS? Beliau pernah ditelan oleh ikan paus raksasa dan diselamatkan oleh Allah karena terus berdoa di dalam perutnya.", en: "Whales are the largest animals on earth created by Allah! Do you remember the story of Prophet Yunus AS? He was once swallowed by a giant whale and saved by Allah because he kept praying inside its belly." },
    facts: [
      { id: "Paus bukanlah ikan, mereka adalah mamalia laut yang harus naik ke permukaan untuk bernapas.", en: "Whales are not fish, they are marine mammals that must come to the surface to breathe." },
      { id: "Jantung paus biru berukuran sebesar sebuah mobil kecil!", en: "A blue whale's heart is the size of a small car!" },
      { id: "Paus 'bernyanyi' untuk berbicara dengan paus lain di lautan sejauh ribuan kilometer.", en: "Whales 'sing' to talk to other whales in the ocean thousands of kilometers away." }
    ],
    quranVerse: {
      arabic: "فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ",
      transliteration: "Faltaqamahul hutu wahuwa mulim.",
      translation: { id: "Maka ia ditelan oleh ikan besar (paus) dalam keadaan tercela (karena meninggalkan kaumnya).", en: "Then the great fish swallowed him, while he was blameworthy." },
      context: { id: "Kisah Nabi Yunus AS yang ditelan paus atas perintah Allah.", en: "The story of Prophet Yunus AS being swallowed by a whale by Allah's command." }
    },
    quiz: {
      question: { id: "Nabi siapa yang pernah tinggal di dalam perut ikan paus?", en: "Which Prophet once lived inside the belly of a whale?" },
      options: [
        { text: { id: "Nabi Musa AS", en: "Prophet Musa AS" } },
        { text: { id: "Nabi Yunus AS", en: "Prophet Yunus AS" } },
        { text: { id: "Nabi Ibrahim AS", en: "Prophet Ibrahim AS" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Paus baleen tidak punya gigi tajam! Mereka punya semacam sikat saringan raksasa di mulutnya yang disebut 'Baleen'. Mereka menelan bergalon-galon air laut, lalu menyaringnya untuk makan jutaan udang super kecil (krill). Ciptaan Allah memang tiada duanya!", en: "Baleen whales don't have sharp teeth! They have a kind of giant strainer brush in their mouths called 'Baleen'. They swallow gallons of seawater, then filter it to eat millions of super tiny shrimp (krill). Allah's creation is truly unmatched!" },
    anatomy: [
      { part: { id: "Lubang Tiup (Blowhole)", en: "Blowhole" }, desc: { id: "Lubang hidung di atas kepala paus untuk bernapas. Udara yang dihembuskan tampak seperti semburan air.", en: "The nostril on top of the whale's head for breathing. The exhaled air looks like a water spout." } },
      { part: { id: "Lapisan Lemak (Blubber)", en: "Blubber" }, desc: { id: "Lemak super tebal yang menjaga tubuh paus tetap hangat meski berenang di kutub sedingin es.", en: "Super thick fat that keeps the whale's body warm even when swimming in freezing poles." } }
    ],
    wowFactor: { id: "Paus Sperma bisa menyelam sedalam 3.000 meter ke dasar lautan yang gelap gulita untuk berburu cumi-cumi raksasa! Mereka menahan napas selama lebih dari 90 menit!", en: "Sperm Whales can dive as deep as 3,000 meters into the pitch-black ocean floor to hunt giant squid! They hold their breath for over 90 minutes!" },
    quranVerse: {
      arabic: "فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ ۝ لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ",
      transliteration: "Falawla annahu kana minal-musabbihin. Lalabitha fi batnihi ila yawmi yub'athun.",
      translation: { id: "Maka kalau sekiranya dia tidak termasuk orang-orang yang banyak mengingat Allah, niscaya ia akan tetap tinggal di perut ikan itu sampai hari berbangkit.", en: "And had he not been of those who exalt Allah, he would have remained inside its belly until the Day they are resurrected." }
    },
    quiz: [
      {
        question: { id: "Paus bernapas menggunakan organ apa di bagian atas kepalanya?", en: "What organ does a whale use to breathe on top of its head?" },
        options: [
          { text: { id: "Sirip", en: "Fins" } },
          { text: { id: "Lubang Tiup (Blowhole)", en: "Blowhole" } },
          { text: { id: "Mulut lebar", en: "Wide mouth" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
