import { ObjectData } from "../objects";

export const magnetosferData: ObjectData = {
  slug: "magnetosfer",
  name: { id: "Magnetosfer", en: "Magnetosphere" },
  icon: "🛡️",
  category: "alam",
  type: "alam",
  scientificName: "Magnetosphere",
  surahName: "Al-Anbiya",
  surahReference: "Al-Anbiya:32",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "مِغْنَاطِيسٌ", latin: "Mignatis", arti: "Magnet", artiEn: "Magnet" },
    { arab: "دِرْعٌ", latin: "Dir'un", arti: "Perisai", artiEn: "Shield" },
    { arab: "شَمْسٌ", latin: "Syams", arti: "Matahari", artiEn: "Sun" },
    { arab: "حِمَايَةٌ", latin: "Himayah", arti: "Perlindungan", artiEn: "Protection" }
  ],
  balita: {
    text: { id: "Wusss! Ada angin panas dari matahari yang mau menabrak bumi! Tapi tenang, bumi kita punya perisai tak terlihat bernama Magnetosfer. Perisai ini menangkis angin panas itu supaya kita aman.", en: "Whoosh! There's a hot wind from the sun trying to hit earth! But don't worry, our earth has an invisible shield called the Magnetosphere. It blocks the hot wind so we stay safe." },
    audioTranscript: { id: "Bumi punya perisai besar yang menahan angin berbahaya dari matahari.", en: "Earth has a large shield blocking dangerous winds from the sun." },
    quiz: {
      question: { id: "Siapa yang menangkis angin panas matahari?", en: "Who blocks the hot solar wind?" },
      options: [
        { text: { id: "Magnetosfer", en: "Magnetosphere" } },
        { text: { id: "Awan", en: "Clouds" } },
        { text: { id: "Bintang", en: "Stars" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Magnetosfer adalah benteng luar bumi dari bahaya luar angkasa. Matahari terus-menerus menyemburkan partikel berbahaya. Jika tidak ada Magnetosfer, bumi akan menjadi kering seperti planet Mars! Allah telah berjanji menjaga langit kita seperti atap yang kuat.", en: "The Magnetosphere is earth's outer fortress against space dangers. The sun constantly shoots out harmful particles. If there were no Magnetosphere, earth would become dry like Mars! Allah promised to protect our sky like a strong roof." },
    facts: [
      { id: "Magnetosfer dibentuk oleh medan magnet bumi.", en: "The Magnetosphere is formed by the earth's magnetic field." },
      { id: "Bentuk Magnetosfer seperti komet, berekor panjang menjauhi matahari.", en: "The Magnetosphere is shaped like a comet, with a long tail pointing away from the sun." },
      { id: "Partikel matahari yang terjebak di sini menghasilkan Aurora.", en: "Solar particles trapped here create the Aurora." },
      { id: "Tanpa perisai ini, air di laut bisa menguap habis.", en: "Without this shield, the ocean water could boil away." },
      { id: "Astronot di luar angkasa jauh tidak terlindungi oleh Magnetosfer ini.", en: "Astronauts in deep space are not protected by this Magnetosphere." }
    ],
    quranVerse: {
      arabic: "وَجَعَلْنَا ٱلسَّمَآءَ سَقْفًا مَّحْفُوظًا",
      transliteration: "Wa ja'alnas-samaaa'a saqfam mahfuuthaa",
      translation: { id: "Dan Kami menjadikan langit itu sebagai atap yang terpelihara.", en: "And We made the sky a protected ceiling." }
    },
    quiz: {
      question: { id: "Bentuk Magnetosfer mirip seperti apa saat ditiup angin matahari?", en: "What does the Magnetosphere look like when blown by solar wind?" },
      options: [
        { text: { id: "Seperti bola bulat", en: "Like a round ball" } },
        { text: { id: "Seperti komet berekor panjang", en: "Like a comet with a long tail" } },
        { text: { id: "Seperti kubus", en: "Like a cube" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Angin Matahari (Solar Wind) bergerak dengan kecepatan jutaan kilometer per jam. Saat menabrak Magnetosfer bumi, terbentuklah gelombang kejut yang disebut 'Bow Shock'. Magnetosfer akan melendut dan melindungi atmosfer kita agar tidak terkikis. Ini sangat persis dengan deskripsi 'Atap yang Terpelihara/Menjaga' (Saqfan Mahfuzha) yang disebut dalam surat Al-Anbiya!", en: "Solar wind travels at millions of kilometers per hour. When it hits earth's Magnetosphere, a shockwave called 'Bow Shock' forms. The Magnetosphere bends and protects our atmosphere from being stripped away. This precisely matches the description of a 'Protected/Protecting Roof' (Saqfan Mahfuzha) mentioned in Surah Al-Anbiya!" },
    anatomy: [
      { part: { id: "Bow Shock", en: "Bow Shock" }, desc: { id: "Lapisan terdepan tempat angin matahari bertabrakan dengan medan magnet bumi.", en: "The front layer where solar wind collides with earth's magnetic field." } },
      { part: { id: "Sabuk Van Allen", en: "Van Allen Belts" }, desc: { id: "Dua cincin radiasi tempat partikel berbahaya terjebak oleh magnetosfer.", en: "Two radiation rings where harmful particles are trapped by the magnetosphere." } }
    ],
    wowFactor: { id: "Hah?! Magnetosfer bagian belakang bumi (yang menjauhi matahari) membentang sangaaaat panjang, bisa melebihi orbit Bulan! Ini disebut Magnetotail.", en: "What?! The earth's night-side Magnetosphere (pointing away from the sun) stretches sooo long, it goes past the Moon's orbit! This is called the Magnetotail." },
    quranVerse: {
      arabic: "وَجَعَلْنَا ٱلسَّمَآءَ سَقْفًا مَّحْفُوظًا",
      transliteration: "Wa ja'alnas-samaaa'a saqfam mahfuuthaa",
      translation: { id: "Dan Kami menjadikan langit itu sebagai atap yang terpelihara.", en: "And We made the sky a protected ceiling." }
    },
    quiz: [
      {
        question: { id: "Apa nama gelombang kejut tempat bertabrakannya angin matahari dengan magnet bumi?", en: "What is the shockwave called where solar wind collides with the earth's magnet?" },
        options: [
          { text: { id: "Bow Shock", en: "Bow Shock" } },
          { text: { id: "Thunder Strike", en: "Thunder Strike" } },
          { text: { id: "Ionosphere", en: "Ionosphere" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Di mana partikel radiasi berbahaya ditahan dan dijebak oleh bumi?", en: "Where are dangerous radiation particles held and trapped by the earth?" },
        options: [
          { text: { id: "Di dasar laut", en: "At the bottom of the sea" } },
          { text: { id: "Di Sabuk Van Allen", en: "In the Van Allen Belts" } },
          { text: { id: "Di dalam gunung berapi", en: "Inside volcanoes" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa yang mungkin terjadi pada bumi jika tidak ada Magnetosfer?", en: "What might happen to earth if there was no Magnetosphere?" },
        options: [
          { text: { id: "Bumi akan sangat dingin", en: "Earth would be very cold" } },
          { text: { id: "Air laut akan terkikis habis ke angkasa", en: "Ocean water would be stripped away into space" } },
          { text: { id: "Siang hari akan lebih gelap", en: "Daytime would be darker" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
