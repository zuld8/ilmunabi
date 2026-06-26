import { ObjectData } from "../objects";

export const bintangData: ObjectData = {
  slug: "bintang",
  name: { id: "Bintang", en: "Star" },
  icon: "⭐",
  category: "alam",
  type: "alam",
  scientificName: "Stella / Astrum",
  surahName: "An-Najm",
  surahReference: "53:1",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "نَجْمٌ", latin: "Najmun", arti: "Bintang", artiEn: "Star", contohAyat: "Wan-najmi idzaa hawaa (Demi bintang ketika terbenam)" },
    { arab: "سَمَاءٌ", latin: "Sama'", arti: "Langit", artiEn: "Sky", contohAyat: "Fis-samaa'i buruujan (Di langit gugusan bintang)" },
    { arab: "كَوْكَبٌ", latin: "Kaukab", arti: "Planet/Bintang yang bersinar", artiEn: "Planet/Shining Star", contohAyat: "Idzal kawaakibun-tatsarat (Apabila bintang-bintang jatuh berserakan)" },
    { arab: "طَارِقٌ", latin: "Tariq", arti: "Bintang yang datang di malam hari", artiEn: "The Night Visitant", contohAyat: "Was-samaa'i wat-taariq (Demi langit dan yang datang pada malam hari)" }
  ],

  balita: {
    text: { id: "Kelap-kelip di langit malam... itu bintang! Jumlahnya baaaanyak sekali seperti titik terang di angkasa. ⭐", en: "Twinkle twinkle in the night sky... those are stars! There are so many of them like bright dots in space. ⭐" },
    audioTranscript: { id: "Lihat ke langit! Wah, ada banyak titik bercahaya! Itu bintang kelap-kelip. Allah hebat ya, menciptakan lampu sebanyak itu di langit! ⭐", en: "Look at the sky! Wow, there are many glowing dots! Those are twinkling stars. Allah is so great, creating so many lights in the sky! ⭐" },
    quiz: {
      question: { id: "Bintang terlihat paling jelas saat?", en: "When are stars seen most clearly?" },
      options: [
        { text: { id: "🌌 Malam hari yang gelap", en: "🌌 Dark night time" } },
        { text: { id: "🌅 Pagi hari yang terang", en: "🌅 Bright morning" } },
        { text: { id: "🌧️ Saat hujan", en: "🌧️ During rain" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Bintang sebenarnya adalah bola gas panas yang sangaaaaat besar, sama seperti Matahari! Tapi karena jaraknya sangat jauh, bintang terlihat kecil seperti titik cahaya.", en: "Stars are actually very, veeery huge balls of hot gas, just like the Sun! But because they are so far away, stars look tiny like dots of light." },
    facts: [
      { id: "Matahari kita sebenarnya adalah sebuah bintang!", en: "Our Sun is actually a star!" },
      { id: "Warna bintang ada yang merah, kuning, putih, dan biru, tergantung seberapa panas suhunya.", en: "Star colors can be red, yellow, white, and blue, depending on how hot they are." },
      { id: "Bintang yang berwarna biru lebih panas daripada bintang berwarna merah.", en: "Blue stars are hotter than red stars." },
      { id: "Ada miliaran bintang di galaksi kita, Bima Sakti.", en: "There are billions of stars in our galaxy, the Milky Way." },
      { id: "Orang zaman dulu menggunakan rasi bintang sebagai kompas untuk menunjuk arah di malam hari.", en: "People in the past used constellations as compasses to show direction at night." }
    ],
    quranVerse: {
      arabic: "وَبِٱلنَّجْمِ هُمْ يَهْتَدُونَ",
      transliteration: "Wa bin-najmi hum yahtaduun",
      translation: { id: "Dan (Ia menciptakan) tanda-tanda (penunjuk jalan). Dan dengan bintang-bintang itulah mereka mendapat petunjuk.", en: "And landmarks. And by the stars they are [also] guided." },
      context: { id: "Tau nggak? Sebelum ada kompas atau GPS, Allah menciptakan gugusan bintang untuk membantu nelayan dan penjelajah menemukan arah saat di tengah laut yang gelap gulita. Allah sayang banget sama kita!", en: "Did you know? Before compasses or GPS, Allah created star constellations to help fishermen and explorers find direction in the dark open sea. Allah loves us so much!" }
    },
    quiz: {
      question: { id: "Apa fungsi bintang bagi orang zaman dulu yang berlayar?", en: "What was the function of stars for people who sailed in the past?" },
      options: [
        { text: { id: "Sebagai petunjuk arah / kompas", en: "As a direction guide / compass" } },
        { text: { id: "Sebagai lampu tidur", en: "As a night light" } },
        { text: { id: "Untuk menangkap ikan", en: "To catch fish" } },
        { text: { id: "Untuk menurunkan hujan", en: "To make rain fall" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Bintang adalah reaktor fusi nuklir alami yang sangat besar di luar angkasa. Mereka terbuat dari hidrogen dan helium yang sangat padat dan panas. Tekanan luar biasa di inti bintang memaksa atom-atom bergabung (fusi), melepaskan cahaya dan panas yang kita lihat dari Bumi.\n\nSiklus hidup sebuah bintang sangat panjang, bisa mencapai miliaran tahun! Bintang lahir dari awan debu dan gas yang disebut nebula. Saat bahan bakarnya habis, bintang kecil akan menjadi katai putih, sementara bintang raksasa bisa meledak dalam peristiwa kosmik luar biasa yang disebut Supernova.\n\nBeberapa bintang sangat masif sehingga ketika mereka meledak dan inti mereka runtuh, mereka membentuk Lubang Hitam (Black Hole) yang gravitasinya begitu kuat sehingga bahkan cahaya pun tidak bisa lepas darinya.", en: "Stars are massive natural nuclear fusion reactors in space. They are made of incredibly dense and hot hydrogen and helium. Immense pressure in a star's core forces atoms to fuse together, releasing the light and heat we see from Earth.\n\nThe life cycle of a star is extremely long, potentially reaching billions of years! Stars are born from clouds of dust and gas called nebulas. When their fuel runs out, small stars become white dwarfs, while giant stars can explode in an incredible cosmic event called a Supernova.\n\nSome stars are so massive that when they explode and their cores collapse, they form a Black Hole whose gravity is so strong that not even light can escape from it." },
    anatomy: [
      { part: { id: "Nebula", en: "Nebula" }, desc: { id: "Awan debu kosmik tempat bintang-bintang baru dilahirkan.", en: "A cosmic dust cloud where new stars are born." } },
      { part: { id: "Inti Bintang", en: "Star Core" }, desc: { id: "Bagian super panas di mana reaksi nuklir terjadi memancarkan energi.", en: "The super hot part where nuclear reactions occur emitting energy." } }
    ],
    wowFactor: { id: "Sains menemukan bahwa ada jenis bintang neutron yang berputar sangat cepat dan memancarkan gelombang radio bersuara seperti ketukan (pulsar). Bintang ini benar-benar menembus kegelapan angkasa dengan radiasinya.\n\nSangat menakjubkan bahwa Al-Qur'an memiliki Surah At-Tariq, yang namanya bermakna 'yang mengetuk di malam hari', lalu Allah menjelaskannya sebagai 'An-najmu as-tsaaqib' yang artinya Bintang yang menembus (kegelapan). Kecocokan antara sifat pulsar yang seperti mengetuk-ngetuk dan menembus ruang angkasa dengan ayat ini sungguh mencengangkan!", en: "Science discovered that there are neutron stars spinning very fast emitting radio waves sounding like knocks (pulsars). These stars literally pierce the darkness of space with their radiation.\n\nIt is incredibly amazing that the Qur'an has Surah At-Tariq, whose name means 'the knocker at night', and then Allah explains it as 'An-najmu as-tsaaqib' meaning the piercing Star. The correlation between the knocking nature of pulsars and piercing space with this verse is mind-blowing!" },
    quranVerse: {
      arabic: "وَٱلسَّمَآءِ وَٱلطَّارِقِ ۝ وَمَآ أَدْرَىٰكَ مَا ٱلطَّارِقُ ۝ ٱلنَّجْمُ ٱلثَّاقِبُ",
      transliteration: "Was-samaa'i wat-taariq. Wa maa adraaka mat-taariq. An-najmuts-tsaaqib.",
      translation: { id: "Demi langit dan yang datang pada malam hari. Tahukah kamu apakah yang datang pada malam hari itu? (yaitu) bintang yang cahayanya menembus.", en: "By the sky and the night comer. And what can make you know what is the night comer? It is the piercing star." }
    },
    quiz: [
      {
        question: { id: "Bintang lahir dari awan debu dan gas yang disebut apa?", en: "Stars are born from clouds of dust and gas called what?" },
        options: [{ text: { id: "Nebula", en: "Nebula" } }, { text: { id: "Supernova", en: "Supernova" } }, { text: { id: "Galaksi", en: "Galaxy" } }, { text: { id: "Meteorit", en: "Meteorite" } }],
        answerIdx: 0
      },
      {
        question: { id: "Peristiwa ledakan dahsyat sebuah bintang raksasa yang kehabisan energi disebut?", en: "The massive explosion of a giant star running out of energy is called?" },
        options: [{ text: { id: "Supernova", en: "Supernova" } }, { text: { id: "Aurora", en: "Aurora" } }, { text: { id: "Gerhana", en: "Eclipse" } }, { text: { id: "Tsunami", en: "Tsunami" } }],
        answerIdx: 0
      },
      {
        question: { id: "Apa makna dari 'An-Najmu Ats-Tsaaqib' dalam Surah At-Tariq?", en: "What does 'An-Najmu Ats-Tsaaqib' mean in Surah At-Tariq?" },
        options: [{ text: { id: "Bintang yang cahayanya menembus", en: "The piercing star" } }, { text: { id: "Bintang jatuh", en: "Falling star" } }, { text: { id: "Bulan sabit", en: "Crescent moon" } }, { text: { id: "Matahari pagi", en: "Morning sun" } }],
        answerIdx: 0
      }
    ]
  }
};
