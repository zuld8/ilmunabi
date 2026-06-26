import { ObjectData } from "../objects";

export const lalatData: ObjectData = {
  slug: "lalat",
  name: { id: "Lalat", en: "Fly" },
  icon: "🪰",
  category: "serangga",
  type: "hewan",
  scientificName: "Musca domestica",
  surahName: "Al-Hajj",
  surahReference: "22:73",
  unlockedAtPoints: 55,
  kosakata: [
    { arab: "ذُبَاب", latin: "Dhubab", arti: "Lalat", artiEn: "Fly", contohAyat: "Sesungguhnya segala yang kamu seru selain Allah tidak dapat menciptakan seekor lalat pun." }
  ],
  balita: {
    text: { id: "Ngung! Ngung! Aku lalat kecil yang suka terbang cepat! Aku bisa hinggap di langit-langit tanpa jatuh! 🪰", en: "Buzz! Buzz! I am a little fly who loves to fly fast! I can land on the ceiling without falling! 🪰" },
    audioTranscript: { id: "Buzzz! Mataku besar sekali dan aku bisa melihat ke semua arah!", en: "Buzzz! My eyes are huge and I can see in all directions!" },
    quiz: {
      question: { id: "Suara apa yang dihasilkan sayap lalat saat terbang?", en: "What sound do a fly's wings make when flying?" },
      options: [
        { text: { id: "Tik-tok", en: "Tick-tock" } },
        { text: { id: "Buzzz ngung ngung", en: "Buzzz" } },
        { text: { id: "Miaw", en: "Meow" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Allah menantang semua manusia dalam Al-Qur'an untuk menciptakan satu ekor lalat. Tentu saja, tidak ada manusia yang bisa membuatnya! Lalat terlihat kecil, tapi ciptaannya sangat rumit.", en: "Did you know? Allah challenges all humans in the Quran to create a single fly. Of course, no human can make one! A fly looks small, but its creation is very complex." },
    facts: [
      { id: "Lalat mencicipi makanan menggunakan kaki mereka, bukan mulut!", en: "Flies taste food using their feet, not their mouths!" },
      { id: "Lalat rumah mengepakkan sayapnya hingga 200 kali per detik.", en: "Houseflies flap their wings up to 200 times per second." },
      { id: "Mata lalat terbuat dari 4.000 lensa kecil yang disatukan.", en: "A fly's eye is made of 4,000 tiny lenses put together." }
    ],
    quranVerse: {
      arabic: "إِنَّ الَّذِينَ تَدْعُونَ مِنْ دُونِ اللَّهِ لَنْ يَخْلُقُوا ذُبَابًا وَلَوِ اجْتَمَعُوا لَهُ",
      transliteration: "Innal-ladhina tad'una min dunillahi lan yakhluqu dhubaban walawij-tama'u lah.",
      translation: { id: "Sesungguhnya segala yang kamu seru selain Allah tidak dapat menciptakan seekor lalat pun, walaupun mereka bersatu untuk menciptakannya.", en: "Indeed, those you invoke besides Allah will never create [as much as] a fly, even if they gathered together for it." },
      context: { id: "Allah menegaskan betapa lemahnya sesuatu yang disembah selain Allah, bahkan lalat pun tidak bisa mereka ciptakan.", en: "Allah asserts how weak anything worshipped besides Allah is, they cannot even create a fly." }
    },
    quiz: {
      question: { id: "Bagian tubuh mana yang lalat gunakan untuk mencicipi makanan?", en: "Which body part does a fly use to taste food?" },
      options: [
        { text: { id: "Hidung", en: "Nose" } },
        { text: { id: "Kaki", en: "Feet" } },
        { text: { id: "Sayap", en: "Wings" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Lalat terbang dengan manuver seperti jet tempur yang paling canggih. Mereka punya sepasang 'sayap' kecil tambahan di belakang bernama halter yang bekerja seperti giroskop, memberikan keseimbangan luar biasa di udara!", en: "Flies fly with maneuvers like the most advanced fighter jets. They have an extra tiny pair of 'wings' in the back called halteres that work like a gyroscope, providing incredible balance in the air!" },
    anatomy: [
      { part: { id: "Mata Majemuk (Compound Eye)", en: "Compound Eye" }, desc: { id: "Memungkinkan lalat melihat gerakan dengan sangat cepat seolah dalam slow-motion.", en: "Allows the fly to see movement extremely fast as if in slow-motion." } },
      { part: { id: "Halter (Halteres)", en: "Halteres" }, desc: { id: "Organ keseimbangan kecil di belakang sayap utama untuk manuver akrobatik di udara.", en: "Small balancing organs behind the main wings for aerial acrobatic maneuvers." } }
    ],
    wowFactor: { id: "Saat kita mencoba memukul lalat, lalat memproses informasi visual 7 kali lebih cepat dari manusia. Jadi bagi lalat, tangan kita terlihat bergerak sangat lambat, makanya mereka mudah menghindar!", en: "When we try to swat a fly, the fly processes visual information 7 times faster than humans. So to a fly, our hand looks like it's moving very slowly, which is why they easily dodge it!" },
    quranVerse: {
      arabic: "وَإِنْ يَسْلُبْهُمُ الذُّبَابُ شَيْئًا لَا يَسْتَنْقِذُوهُ مِنْهُ ۚ ضَعُفَ الطَّالِبُ وَالْمَطْلُوبُ",
      transliteration: "Wa in yaslubhumudh-dhubabu shay'an la yastanqidhuhu minh. Da'ufat-talibu wal-matlub.",
      translation: { id: "Dan jika lalat itu merampas sesuatu dari mereka, mereka tidak akan dapat merebutnya kembali dari lalat itu. Amat lemahlah yang menyembah dan amat lemah (pulalah) yang disembah.", en: "And if the fly should steal away from them a [tiny] thing, they could not recover it from him. Weak are the pursuer and pursued." }
    },
    quiz: [
      {
        question: { id: "Mengapa lalat sangat susah untuk dipukul manusia?", en: "Why is a fly so hard for humans to swat?" },
        options: [
          { text: { id: "Karena mereka melihat tangan kita seperti bergerak lambat (slow-motion)", en: "Because they see our hands moving in slow-motion" } },
          { text: { id: "Karena sayapnya dilapisi besi", en: "Because their wings are coated with iron" } },
          { text: { id: "Karena mereka menghilang secara sihir", en: "Because they magically disappear" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
