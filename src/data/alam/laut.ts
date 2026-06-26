import { ObjectData } from "../objects";

export const lautData: ObjectData = {
  slug: "laut",
  name: { id: "Laut", en: "Sea" },
  icon: "🌊",
  category: "alam",
  type: "alam",
  scientificName: "Oceanus",
  surahName: "Ar-Rahman",
  surahReference: "55:19",
  unlockedAtPoints: 50,

  kosakata: [
    { arab: "بَحْرٌ", latin: "Bahrun", arti: "Laut", artiEn: "Sea", contohAyat: "Wa huwal-ladzii sakhkhorol-bahra (Dan Dialah yang menundukkan lautan)" },
    { arab: "مَاءٌ", latin: "Ma'un", arti: "Air", artiEn: "Water", contohAyat: "Wa ja'alnaa minal-maa'i kulla syai'in hayy (Dan Kami jadikan dari air segala sesuatu yang hidup)" },
    { arab: "مَوْجٌ", latin: "Mauj", arti: "Ombak", artiEn: "Wave", contohAyat: "Fii bahrin lujjiyyiw yaghsyaahu mauj (Di lautan yang dalam yang ditutupi oleh ombak)" },
    { arab: "سَمَكٌ", latin: "Samak", arti: "Ikan", artiEn: "Fish", contohAyat: "Ikan-ikan hidup bebas di lautan" }
  ],

  balita: {
    text: { id: "Ini laut yang luas sekali! Airnya asin lho. Di dalam laut ada banyak ikan, penyu, dan lumba-lumba yang berenang. 🌊", en: "This is the very vast sea! The water is salty. Inside the sea there are many fishes, turtles, and dolphins swimming. 🌊" },
    audioTranscript: { id: "Byuur! Dengar suara ombak? Itu laut! Di laut airnya asin. Banyak ikan lucu berenang di sana. Allah Maha Kuasa menciptakan laut yang besaaar! 🌊", en: "Splash! Hear the sound of the waves? That's the sea! Seawater is salty. Many cute fish swim there. Allah is All-Powerful for creating the huuge sea! 🌊" },
    quiz: {
      question: { id: "Siapa yang hidup di laut?", en: "Who lives in the sea?" },
      options: [
        { text: { id: "🐠 Ikan dan Lumba-lumba", en: "🐠 Fish and Dolphins" } },
        { text: { id: "🐪 Unta", en: "🐪 Camel" } },
        { text: { id: "🐈 Kucing", en: "🐈 Cat" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Laut menutupi sebagian besar planet Bumi kita! Karena itu, dari luar angkasa, Bumi kita terlihat berwarna biru terang seperti kelereng air raksasa.", en: "The sea covers most of our Earth! Because of that, from outer space, our Earth looks bright blue like a giant water marble." },
    facts: [
      { id: "Lebih dari 70% permukaan Bumi ditutupi oleh air laut.", en: "More than 70% of Earth's surface is covered by seawater." },
      { id: "Air laut rasanya asin karena mengandung banyak garam yang larut dari bebatuan.", en: "Seawater tastes salty because it contains a lot of dissolved salt from rocks." },
      { id: "Paus Biru adalah hewan terbesar di dunia yang hidup di lautan.", en: "The Blue Whale is the largest animal in the world that lives in the ocean." },
      { id: "Dasar laut sangat dalam, tempat terdalam namanya Palung Mariana, jauh lebih dalam dari tinggi Gunung Everest!", en: "The ocean floor is very deep, the deepest place is called the Mariana Trench, much deeper than Mount Everest is high!" },
      { id: "Terumbu karang di laut sering disebut 'hutan hujan lautan' karena jadi rumah bagi jutaan makhluk hidup.", en: "Coral reefs are often called the 'rainforests of the sea' because they are home to millions of living creatures." }
    ],
    quranVerse: {
      arabic: "وَهُوَ ٱلَّذِى سَخَّرَ ٱلْبَحْرَ لِتَأْكُلُوا۟ مِنْهُ لَحْمًا طَرِيًّا",
      transliteration: "Wa huwal-ladzii sakhkhorol-bahra lita'kuluu minhu lahman tariyyaa",
      translation: { id: "Dan Dialah yang menundukkan lautan (untukmu), agar kamu dapat memakan daripadanya daging yang segar (ikan).", en: "And it is He who subjected the sea for you to eat from it tender meat (fish)." },
      context: { id: "Tau nggak? Allah sengaja bikin laut penuh dengan ikan agar nelayan bisa menangkapnya dan kita bisa makan seafood lezat yang bergizi! Alhamdulillah!", en: "Did you know? Allah intentionally made the sea full of fish so fishermen can catch them and we can eat delicious nutritious seafood! Alhamdulillah!" }
    },
    quiz: {
      question: { id: "Kenapa air laut rasanya asin?", en: "Why does seawater taste salty?" },
      options: [
        { text: { id: "Karena ada garam dari bebatuan yang terlarut", en: "Because there is salt dissolved from rocks" } },
        { text: { id: "Karena ikan menangis", en: "Because fish cry" } },
        { text: { id: "Karena nelayan membuang gula", en: "Because fishermen throw away sugar" } },
        { text: { id: "Karena air hujan rasanya asam", en: "Because rain water tastes sour" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: { id: "Lautan dunia bukan sekadar genangan air besar, tetapi mesin iklim yang menjaga kehidupan di Bumi. Arus laut mengedarkan panas dari khatulistiwa ke kutub, mencegah Bumi menjadi terlalu dingin atau terlalu panas!\n\nDi lautan dalam, di mana cahaya matahari sama sekali tidak bisa tembus, tekanannya begitu luar biasa hingga bisa menghancurkan kapal selam biasa. Namun, Allah menciptakan makhluk laut dalam dengan anatomi khusus, bahkan beberapa ikan punya lampu di tubuhnya sendiri (Bioluminescence)!\n\nFenomena lautan sangat kompleks, termasuk zona-zona pertemuan dua arus laut atau pertemuan laut asin dan sungai tawar yang tidak saling bercampur, karena adanya perbedaan densitas (kepadatan air) dan tegangan permukaan.", en: "The world's oceans are not just large pools of water, but a climate engine that sustains life on Earth. Ocean currents circulate heat from the equator to the poles, preventing the Earth from becoming too cold or too hot!\n\nIn the deep ocean, where sunlight cannot penetrate at all, the pressure is so immense it could crush normal submarines. However, Allah created deep-sea creatures with special anatomy, some fish even have lights on their own bodies (Bioluminescence)!\n\nOcean phenomena are very complex, including zones where two ocean currents meet or where salty sea meets fresh river water without mixing, due to differences in density and surface tension." },
    anatomy: [
      { part: { id: "Zona Pelagik", en: "Pelagic Zone" }, desc: { id: "Bagian perairan laut terbuka tempat hiu, paus, dan ikan tuna berenang bebas.", en: "The open ocean water area where sharks, whales, and tuna swim freely." } },
      { part: { id: "Zona Abisal", en: "Abyssal Zone" }, desc: { id: "Dasar laut yang sangat dalam, gelap gulita, dan bertekanan super tinggi.", en: "The very deep ocean floor, pitch black, and with super high pressure." } }
    ],
    wowFactor: { id: "Sains Oseanografi modern menemukan fakta menakjubkan tentang pertemuan dua jenis lautan (seperti di Selat Gibraltar, atau pertemuan laut dan sungai lepas). Air tersebut saling bertemu tapi tidak menyatu sepenuhnya seolah ada tirai transparan (halocline) yang memisahkan karena beda suhu dan kadar garam.\n\nFakta luar biasa ini sudah dituliskan di Al-Qur'an Surat Ar-Rahman ribuan tahun yang lalu! 'Dia membiarkan dua lautan mengalir yang keduanya kemudian bertemu. Antara keduanya ada batas yang tidak dilampaui masing-masing.' Bagaimana Nabi Muhammad bisa tahu tentang fenomena bawah laut ini tanpa alat selam?", en: "Modern Oceanography found amazing facts about the meeting of two types of seas (like in the Strait of Gibraltar, or meeting of sea and open river). The waters meet but do not mix completely as if there is a transparent curtain (halocline) separating them due to different temperatures and salinity.\n\nThis incredible fact was written in the Qur'an Surah Ar-Rahman thousands of years ago! 'He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses.' How could Prophet Muhammad know about this underwater phenomenon without diving equipment?" },
    quranVerse: {
      arabic: "مَرَجَ ٱلْبَحْرَيْنِ يَلْتَقِيَانِ ۝ بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ",
      transliteration: "Marajal-bahrayni yaltaqiyaan. Baynahumaa barzakhul laa yabghiyaan.",
      translation: { id: "Dia membiarkan dua lautan mengalir yang keduanya kemudian bertemu, antara keduanya ada batas yang tidak dilampaui masing-masing.", en: "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses." }
    },
    quiz: [
      {
        question: { id: "Apa yang menyebabkan air laut asin dan air tawar sungai tidak langsung bercampur saat bertemu?", en: "What causes salty seawater and fresh river water to not immediately mix when they meet?" },
        options: [{ text: { id: "Perbedaan kepadatan (densitas) dan suhu air", en: "Difference in density and water temperature" } }, { text: { id: "Dibatasi jaring nelayan", en: "Separated by fishing nets" } }, { text: { id: "Angin laut meniupnya", en: "Sea wind blows it" } }, { text: { id: "Batu karang yang menghalangi", en: "Coral rocks blocking it" } }],
        answerIdx: 0
      },
      {
        question: { id: "Kemampuan hewan laut dalam menghasilkan cahayanya sendiri disebut?", en: "The ability of deep-sea animals to produce their own light is called?" },
        options: [{ text: { id: "Bioluminescence", en: "Bioluminescence" } }, { text: { id: "Fotosintesis", en: "Photosynthesis" } }, { text: { id: "Elektrifikasi", en: "Electrification" } }, { text: { id: "Fusi Nuklir", en: "Nuclear Fusion" } }],
        answerIdx: 0
      },
      {
        question: { id: "Sifat lautan yang mengalir namun terpisah oleh 'batas tak terlihat' tertulis di Surah apa?", en: "The nature of seas flowing yet separated by an 'invisible barrier' is written in which Surah?" },
        options: [{ text: { id: "Surah Ar-Rahman", en: "Surah Ar-Rahman" } }, { text: { id: "Surah Al-Fiil", en: "Surah Al-Fiil" } }, { text: { id: "Surah An-Naas", en: "Surah An-Naas" } }, { text: { id: "Surah Al-Lahab", en: "Surah Al-Lahab" } }],
        answerIdx: 0
      }
    ]
  }
};
