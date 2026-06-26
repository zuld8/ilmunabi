import { ObjectData } from "../objects";

export const bebekData: ObjectData = {
  slug: "bebek",
  name: { id: "Bebek", en: "Duck" },
  icon: "🦆",
  category: "hewan",
  type: "hewan",
  scientificName: "Anas platyrhynchos domesticus",
  surahName: "An-Nur",
  surahReference: "24:41",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "بَطَّةٌ", latin: "battah", arti: "Bebek", artiEn: "Duck", contohAyat: "Bebek berenang di air dengan izin Allah." }
  ],
  balita: {
    text: { id: "Kwek kwek! 🦆 Bebek suka berenang di kolam. Kakinya lucu seperti dayung!", en: "Quack quack! 🦆 Ducks love swimming in ponds. Their feet are cute like paddles!" },
    audioTranscript: { id: "Hai! Aku bebek. Kakiku punya selaput supaya aku bisa berenang dengan cepat. Wush!", en: "Hi! I am a duck. My feet have webs so I can swim really fast. Whoosh!" },
    quiz: {
      question: { id: "Kenapa bebek pintar berenang di air?", en: "Why are ducks so good at swimming in water?" },
      options: [
        { text: { id: "Karena pakai pelampung", en: "Because they use a floatie" } },
        { text: { id: "Karena punya baling-baling", en: "Because they have a propeller" } },
        { text: { id: "Karena kakinya berselaput", en: "Because they have webbed feet" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Bulu bebek itu anti-air lho! Mereka punya kelenjar minyak khusus di ekornya. Saat merapikan bulu, mereka meratakan minyak itu, jadi mereka tidak basah meski berenang lama di air. Canggih kan ciptaan Allah?!", en: "Duck feathers are waterproof! They have a special oil gland at their tail. When preening, they spread this oil, so they never get wet even after swimming for a long time. Isn't Allah's creation amazing?!" },
    facts: [
      { id: "Bebek bisa tidur dengan satu mata terbuka untuk mengawasi musuh! 👁️", en: "Ducks can sleep with one eye open to watch for predators! 👁️" },
      { id: "Mata bebek ada di samping kepala, jadi mereka bisa melihat hampir 360 derajat! 🔄", en: "Duck eyes are on the side of their heads, so they can see almost 360 degrees! 🔄" },
      { id: "Anak bebek akan mengikuti benda bergerak pertama yang mereka lihat saat menetas, ini disebut 'imprinting'! 🦆🐣", en: "Ducklings will follow the first moving object they see when hatching, this is called 'imprinting'! 🦆🐣" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Allah melengkapi burung air seperti bebek dengan sistem tahan air alami, jauh sebelum manusia menciptakan jas hujan! Al-Qur'an mengingatkan kita untuk selalu memperhatikan burung yang terbang dan bergerak di alam karena mereka semua bertasbih kepada Allah.", en: "Allah equipped water birds like ducks with a natural waterproof system, long before humans invented raincoats! The Qur'an reminds us to always observe birds flying and moving in nature because they all glorify Allah." },
    quranVerse: {
      arabic: "أَلَمْ تَرَ أَنَّ اللَّهَ يُسَبِّحُ لَهُ مَنْ فِي السَّمَاوَاتِ وَالْأَرْضِ وَالطَّيْرُ صَافَّاتٍ",
      transliteration: "Alam tara annallaha yusabbihu lahu man fis-samawati wal-ardi wat-tairu saffat",
      translation: { id: "Tidakkah kamu tahu bahwa bertasbih kepada Allah siapa yang ada di langit dan di bumi dan (juga) burung dengan mengembangkan sayapnya.", en: "Do you not see that Allah is exalted by whomever is within the heavens and the earth and by the birds with wings spread?" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
