import { ObjectData } from "../objects";

export const energiGelapData: ObjectData = {
  slug: "energi-gelap",
  name: { id: "Energi Gelap", en: "Dark Energy" },
  icon: "🌌",
  category: "langit",
  type: "langit",
  scientificName: "Dark Energy",
  surahName: "Adz-Dzariyat",
  surahReference: "51:47",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "قُوَّةٌ", latin: "Quwwatun", arti: "Kekuatan/Energi", artiEn: "Power/Energy", contohAyat: "بِأَيْيْدٍ" },
    { arab: "وَسِعَ", latin: "Wasi'a", arti: "Meluaskan/Memperluas", artiEn: "To Expand", contohAyat: "إِنَّا لَمُوسِعُونَ" },
    { arab: "سَمَاءٌ", latin: "Samaa'un", arti: "Langit", artiEn: "Sky", contohAyat: "وَالسَّمَاءَ بَنَيْنَاهَا" },
    { arab: "غَيْبٌ", latin: "Ghaibun", arti: "Tak Terlihat", artiEn: "Unseen", contohAyat: "يُؤْمِنُونَ بِالْغَيْبِ" }
  ],

  balita: {
    text: {
      id: "Tahukah kamu? Luar angkasa itu makin lama makin besar lho! Seperti balon yang terus ditiup membesar. Yang meniupnya adalah energi rahasia yang disebut Energi Gelap. Allah membuat alam semesta semakin luas setiap detik!",
      en: "Did you know? Space gets bigger and bigger over time! Like a balloon being blown up. What blows it is a secret energy called Dark Energy. Allah makes the universe wider every second!"
    },
    audioTranscript: {
      id: "Alam semesta makin besar seperti balon ditiup karena ada energi gelap!",
      en: "The universe gets bigger like a blown balloon because of dark energy!"
    },
    quiz: {
      question: { id: "Alam semesta kita membesar seperti apa?", en: "What does our universe expand like?" },
      options: [
        { text: { id: "Balon yang ditiup", en: "A blown balloon" } },
        { text: { id: "Batu yang mengecil", en: "A shrinking stone" } },
        { text: { id: "Layar TV", en: "TV screen" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Selain Materi Gelap, ada yang lebih misterius lagi: Energi Gelap (Dark Energy). Energi ini bekerja berlawanan dengan gravitasi. Jika gravitasi menarik benda agar menyatu, Energi Gelap justru mendorong galaksi-galaksi agar saling menjauh dengan semakin cepat!",
      en: "Besides Dark Matter, there is something even more mysterious: Dark Energy. This energy works opposite to gravity. If gravity pulls things together, Dark Energy pushes galaxies apart faster and faster!"
    },
    facts: [
      { id: "Energi Gelap mengisi 68% (hampir semuanya) dari alam semesta!", en: "Dark Energy makes up 68% (almost all) of the universe!" },
      { id: "Semakin alam semesta meluas, Energi Gelap bertambah kuat.", en: "As the universe expands, Dark Energy gets stronger." },
      { id: "Ditemukan secara tidak sengaja pada tahun 1998 saat mengamati supernova.", en: "Discovered accidentally in 1998 while observing supernovae." },
      { id: "Energi ini mendorong galaksi menjauh lebih cepat dari kecepatan cahaya.", en: "This energy pushes galaxies away faster than the speed of light." },
      { id: "Alam semesta tidak akan pernah berhenti membesar.", en: "The universe will never stop expanding." }
    ],
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Dan langit itu Kami bangun dengan kekuasaan (Kami) dan sesungguhnya Kami benar-benar meluaskannya. (Adz-Dzariyat: 47)", en: "And the heaven We constructed with strength, and indeed, We are [its] expander. (Adz-Dzariyat: 47)" }
    },
    quiz: {
      question: { id: "Apa yang dilakukan Energi Gelap terhadap galaksi-galaksi?", en: "What does Dark Energy do to galaxies?" },
      options: [
        { text: { id: "Mendorong galaksi saling menjauh dengan cepat", en: "Pushes galaxies apart quickly" } },
        { text: { id: "Menarik mereka bertabrakan", en: "Pulls them to crash" } },
        { text: { id: "Membuat galaksi tidur", en: "Makes galaxies sleep" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Ekspansi Alam Semesta adalah penemuan pemenang Nobel Fisika. Ilmuwan terkejut mendapati laju pemuaian alam semesta malah makin berakselerasi (mengebut), didorong oleh energi anti-gravitasi (Dark Energy). Fakta paling luar biasa: lebih dari 1400 tahun lalu, Al-Qur'an (Adz-Dzariyat: 47) menyebutkan dengan sangat presisi bahwa Allah tidak hanya membangun langit, tapi juga 'lamuusi'uun' (Kamilah yang MELUASKANNYA secara terus-menerus). Sains membuktikan kebenaran ayat ini mutlak adanya!",
      en: "The Expansion of the Universe is a Nobel Prize-winning discovery. Scientists were shocked to find the expansion rate is accelerating, pushed by an anti-gravity energy (Dark Energy). The most amazing fact: over 1400 years ago, the Quran (Adz-Dzariyat: 47) stated with extreme precision that Allah not only built the heaven, but also 'lamuusi'uun' (We are continuously EXPANDING it). Science proves the absolute truth of this verse!"
    },
    anatomy: [
      { part: { id: "Akselerasi Kosmik", en: "Cosmic Acceleration" }, desc: { id: "Alam semesta mengembang yang semakin mengebut.", en: "The expanding universe speeding up." } },
      { part: { id: "Konstanta Kosmologis", en: "Cosmological Constant" }, desc: { id: "Energi hampa ruang yang diprediksi Einstein.", en: "Energy of empty space predicted by Einstein." } }
    ],
    wowFactor: {
      id: "Dalam miliaran tahun ke depan, Energi Gelap akan membuat galaksi lain menjauh begitu cepat sehingga bintang-bintang dari galaksi tetangga akan hilang dari pandangan teleskop kita di Bumi selamanya!",
      en: "In billions of years, Dark Energy will push other galaxies away so fast that stars from neighboring galaxies will disappear from our Earth telescopes forever!"
    },
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Dan langit itu Kami bangun dengan kekuasaan (Kami) dan sesungguhnya Kami benar-benar meluaskannya. (Adz-Dzariyat: 47)", en: "And the heaven We constructed with strength, and indeed, We are [its] expander. (Adz-Dzariyat: 47)" }
    },
    quiz: [
      {
        question: { id: "Apa fakta mengejutkan yang ditemukan ilmuwan tentang perluasan alam semesta?", en: "What shocking fact did scientists find about the expansion of the universe?" },
        options: [
          { text: { id: "Alam semesta berhenti membesar", en: "The universe stopped expanding" } },
          { text: { id: "Perluasannya semakin lama semakin mengebut (akselerasi)", en: "Its expansion is speeding up over time (accelerating)" } },
          { text: { id: "Alam semesta menyusut", en: "The universe is shrinking" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa arti kata 'Lamuusi'uun' dalam surat Adz-Dzariyat ayat 47?", en: "What does 'Lamuusi'uun' mean in Surah Adz-Dzariyat verse 47?" },
        options: [
          { text: { id: "Kami mengecilkan", en: "We shrink" } },
          { text: { id: "Benar-benar Kami meluaskannya terus menerus", en: "Indeed We are continuously expanding it" } },
          { text: { id: "Menyalakan api", en: "Light a fire" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Berapa persen Energi Gelap mendominasi alam semesta kita?", en: "What percentage does Dark Energy dominate our universe?" },
        options: [
          { text: { id: "Hanya 1%", en: "Only 1%" } },
          { text: { id: "Sekitar 68%", en: "About 68%" } },
          { text: { id: "50%", en: "50%" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
