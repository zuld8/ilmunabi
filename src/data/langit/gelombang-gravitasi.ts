import { ObjectData } from "../objects";

export const gelombangGravitasiData: ObjectData = {
  slug: "gelombang-gravitasi",
  name: { id: "Gelombang Gravitasi", en: "Gravitational Waves" },
  icon: "🌊",
  category: "langit",
  type: "langit",
  scientificName: "Gravitational Waves",
  surahName: "Al-Ambiya",
  surahReference: "21:33",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "مَوْجٌ", latin: "Mawjun", arti: "Gelombang", artiEn: "Wave", contohAyat: "وَهِيَ تَجْرِي بِهِمْ فِي مَوْجٍ كَالْجِبَالِ" },
    { arab: "فَلَكٌ", latin: "Falakun", arti: "Orbit/Garis Edar", artiEn: "Orbit", contohAyat: "كُلٌّ فِي فَلَكٍ يَسْبَحُونَ" },
    { arab: "سَمَاءٌ", latin: "Samaa'un", arti: "Langit", artiEn: "Sky", contohAyat: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ" },
    { arab: "سَمِيعٌ", latin: "Samii'un", arti: "Maha Mendengar", artiEn: "All-Hearing", contohAyat: "وَهُوَ السَّمِيعُ الْعَلِيمُ" }
  ],

  balita: {
    text: {
      id: "Pernahkah kamu melempar batu ke kolam air? Ada riak-riak gelombang, kan? Nah, di luar angkasa juga ada gelombang raksasa yang tidak terlihat! Namanya Gelombang Gravitasi. Terjadi kalau ada bintang besar yang bertabrakan. Allah menciptakan alam semesta sangat dinamis!",
      en: "Have you ever thrown a stone into a pond? There are ripples, right? Well, in space there are also giant invisible waves! They are called Gravitational Waves. They happen when big stars crash. Allah created a very dynamic universe!"
    },
    audioTranscript: {
      id: "Gelombang gravitasi itu seperti riak air di luar angkasa! Keren ya!",
      en: "Gravitational waves are like water ripples in space! So cool!"
    },
    quiz: {
      question: { id: "Gelombang gravitasi itu mirip seperti apa?", en: "What are gravitational waves like?" },
      options: [
        { text: { id: "Riak air di kolam", en: "Water ripples in a pond" } },
        { text: { id: "Pohon bergoyang", en: "Swaying tree" } },
        { text: { id: "Hujan salju", en: "Snow falling" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: {
      id: "Gelombang gravitasi adalah riakan kain ruang dan waktu! Bayangkan kasur empuk yang diinjak orang berat, lalu kasurnya bergoyang. Begitulah luar angkasa saat dua Lubang Hitam bertabrakan. Goyangannya menyebar ke seluruh alam semesta dengan kecepatan cahaya!",
      en: "Gravitational waves are ripples in the fabric of space and time! Imagine a soft mattress stepped on by a heavy person, then the mattress shakes. That's space when two Black Holes collide. The shake spreads across the universe at the speed of light!"
    },
    facts: [
      { id: "Einstein sudah menebak ada gelombang ini 100 tahun sebelum ditemukan!", en: "Einstein guessed these waves existed 100 years before they were found!" },
      { id: "Baru benar-benar dideteksi manusia pertama kali pada tahun 2015.", en: "First truly detected by humans in 2015." },
      { id: "Gelombang ini merenggangkan dan memendekkan bumi kita saat lewat (tapi sangaaaat kecil).", en: "This wave stretches and squeezes our earth when passing by (but veeeeery slightly)." },
      { id: "Suara tabrakan lubang hitam ini bisa diubah jadi suara 'chirp' yang bisa kita dengar.", en: "The sound of crashing black holes can be turned into a 'chirp' we can hear." },
      { id: "Alat pengukurnya bernama LIGO, punya lengan laser panjangnya 4 kilometer!", en: "The measuring tool is called LIGO, it has 4-kilometer long laser arms!" }
    ],
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Dan Dialah yang telah menciptakan malam dan siang, matahari dan bulan. Masing-masing dari keduanya itu beredar di dalam garis edarnya. (Al-Ambiya: 33)", en: "And it is He who created the night and the day and the sun and the moon; all [heavenly bodies] in an orbit are swimming. (Al-Ambiya: 33)" }
    },
    quiz: {
      question: { id: "Peristiwa apa yang bisa membuat gelombang gravitasi sangat besar?", en: "What event can make very large gravitational waves?" },
      options: [
        { text: { id: "Dua Lubang Hitam bertabrakan", en: "Two Black Holes colliding" } },
        { text: { id: "Bintang jatuh ke laut", en: "Star falling into the sea" } },
        { text: { id: "Angin tornado", en: "Tornado wind" } }
      ],
      answerIdx: 0
    }
  },

  explorer: {
    text: {
      id: "Selama ini manusia 'melihat' alam semesta lewat cahaya (teleskop). Sejak 2015, Gelombang Gravitasi membuat manusia punya 'telinga' kosmik untuk 'mendengar' alam semesta. Al-Qur'an secara konstan menyebut sifat Allah 'As-Sami (Maha Mendengar)' berdampingan dengan 'Al-Bashir (Maha Melihat)'. Penemuan ini bagai pencerahan bahwa alam semesta tidak statis, melainkan bagai lautan luas tempat benda langit bertasbih dan 'berenang' (yasbahun), merambatkan energi di seluruh penjuru ruang waktu.",
      en: "All this time humans 'saw' the universe through light (telescopes). Since 2015, Gravitational Waves gave humans cosmic 'ears' to 'hear' the universe. The Quran constantly mentions Allah's attributes 'As-Sami (All-Hearing)' alongside 'Al-Bashir (All-Seeing)'. This discovery is an epiphany that the universe is not static, but like a vast ocean where celestial bodies glorify Allah and 'swim' (yasbahun), propagating energy across spacetime."
    },
    anatomy: [
      { part: { id: "Spacetime Fabric", en: "Kain Ruang-Waktu" }, desc: { id: "Medium alam semesta yang melengkung dan beriak.", en: "The universe's medium that bends and ripples." } },
      { part: { id: "Interferometer (LIGO)", en: "Interferometer" }, desc: { id: "Alat laser pemburu gelombang mikroskopis.", en: "Laser device hunting for microscopic waves." } }
    ],
    wowFactor: {
      id: "Daya ledakan dari tabrakan Black Hole yang menghasilkan gelombang gravitasi itu 50 kali lebih besar dari kekuatan seluruh bintang di alam semesta disatukan!",
      en: "The explosive power from the Black Hole collision that made the gravitational waves was 50 times greater than the power of all stars in the universe combined!"
    },
    quranVerse: {
      arabic: "...",
      transliteration: "...",
      translation: { id: "Masing-masing dari keduanya itu beredar (berenang/yasbahun) di dalam garis edarnya. (Al-Ambiya: 33)", en: "All [heavenly bodies] in an orbit are swimming (yasbahun). (Al-Ambiya: 33)" }
    },
    quiz: [
      {
        question: { id: "Gelombang gravitasi diibaratkan sebagai riakan di atas apa?", en: "Gravitational waves are likened to ripples on what?" },
        options: [
          { text: { id: "Permukaan air kopi", en: "Surface of coffee water" } },
          { text: { id: "Kain ruang dan waktu (Spacetime)", en: "Fabric of space and time (Spacetime)" } },
          { text: { id: "Lantai keramik", en: "Ceramic floor" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa nama alat canggih yang berhasil mendeteksi gelombang ini?", en: "What is the name of the advanced machine that successfully detected this wave?" },
        options: [
          { text: { id: "Mikroskop", en: "Microscope" } },
          { text: { id: "LIGO (Laser Interferometer Gravitational-Wave Observatory)", en: "LIGO" } },
          { text: { id: "Termometer", en: "Thermometer" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Kata 'Yasbahun' dalam Al-Qur'an untuk orbit benda langit memiliki arti harafiah apa?", en: "What is the literal meaning of the word 'Yasbahun' in the Quran for orbiting celestial bodies?" },
        options: [
          { text: { id: "Berjalan kaki", en: "Walking" } },
          { text: { id: "Berenang / Melayang bebas", en: "Swimming / Floating freely" } },
          { text: { id: "Terbang pakai sayap", en: "Flying with wings" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
