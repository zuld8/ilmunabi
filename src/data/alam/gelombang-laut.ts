import { ObjectData } from "../objects";

export const gelombangLautData: ObjectData = {
  slug: "gelombang-laut",
  name: { id: "Gelombang Laut", en: "Ocean Waves" },
  icon: "🌊",
  category: "alam",
  type: "alam",
  scientificName: "Ocean Waves / Swells",
  surahName: "An-Nur",
  surahReference: "An-Nur:40",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "مَوْجٌ", latin: "Mawj", arti: "Gelombang", artiEn: "Wave" },
    { arab: "بَحْرٌ", latin: "Bahr", arti: "Laut", artiEn: "Sea" },
    { arab: "عَمِيقٌ", latin: "Amiiq", arti: "Dalam", artiEn: "Deep" },
    { arab: "ظُلْمَةٌ", latin: "Zulmah", arti: "Kegelapan", artiEn: "Darkness" }
  ],
  balita: {
    text: { id: "Byuur! Siapa yang suka main air laut di pantai? Air laut itu tidak diam lho, dia selalu bergerak maju mundur membawa buih putih. Itulah gelombang ombak! Anginlah yang meniup air laut jadi bergelombang.", en: "Splash! Who likes playing in the seawater at the beach? Seawater is not still, it always moves back and forth carrying white foam. Those are ocean waves! The wind blows the seawater to make waves." },
    audioTranscript: { id: "Gelombang laut terjadi karena angin meniup air di lautan luas.", en: "Ocean waves happen because the wind blows the water in the vast ocean." },
    quiz: {
      question: { id: "Siapa yang membuat air laut jadi ombak yang menabrak pantai?", en: "Who makes the seawater turn into waves hitting the beach?" },
      options: [
        { text: { id: "Ikan paus", en: "Whales" } },
        { text: { id: "Tiupan angin", en: "Blowing wind" } },
        { text: { id: "Batu karang", en: "Coral rocks" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Gelombang laut yang kita lihat di pantai itu energinya berasal dari angin yang bertiup di tengah samudra yang jauh! Tapi tahukah kamu, bukan cuma di atas, di kedalaman laut yang gelap gulita juga ada gelombang ombak besar lho. Allah menyebutkan adanya 'ombak di atas ombak' di dalam Al-Qur'an.", en: "The ocean waves we see at the beach get their energy from wind blowing in the deep ocean far away! But did you know, not only on the surface, in the pitch black deep sea there are also giant waves. Allah mentioned 'waves upon waves' in the Quran." },
    facts: [
      { id: "Ombak bergerak karena perpindahan energi dari angin ke air.", en: "Waves move due to the transfer of energy from wind to water." },
      { id: "Air laut di ombak sebenarnya hanya berputar di tempat.", en: "The seawater in waves actually just rolls in place." },
      { id: "Semakin kencang anginnya, semakin besar ombak lautnya.", en: "The stronger the wind, the bigger the ocean waves." },
      { id: "Bulan juga bisa menarik air laut menjadi pasang surut.", en: "The moon can also pull seawater into high and low tides." },
      { id: "Di laut dalam, suasananya sangat gelap gulita.", en: "In the deep sea, the atmosphere is pitch black." }
    ],
    quranVerse: {
      arabic: "أَوْ كَظُلُمَٰتٍ فِى بَحْرٍ لُّجِّىٍّ يَغْشَىٰهُ مَوْجٌ مِّن فَوْقِهِۦ مَوْجٌ",
      transliteration: "Aw kathulumaatin fii bahril lujjiyyi yaghshaahu mawjum mim fawqihii mawj",
      translation: { id: "Atau seperti gelap gulita di lautan yang dalam, yang diliputi oleh ombak, yang di atasnya ombak (pula).", en: "Or [they are] like darknesses within an unfathomable sea which is covered by waves, upon which are waves." }
    },
    quiz: {
      question: { id: "Gelombang laut mendapat energinya dari apa?", en: "Where do ocean waves get their energy from?" },
      options: [
        { text: { id: "Cahaya bintang", en: "Starlight" } },
        { text: { id: "Angin", en: "Wind" } },
        { text: { id: "Pasir pantai", en: "Beach sand" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Ilmu oseanografi modern baru saja menemukan fenomena 'Internal Waves' (Gelombang Internal)—yakni gelombang raksasa yang terjadi di bawah permukaan laut akibat perbedaan kepadatan air (suhu & kadar garam)! Dulu manusia mengira ombak cuma ada di permukaan. Luar biasanya, Surat An-Nur ayat 40 sangat spesifik mendeskripsikan: 'lautan dalam yang diliputi ombak, yang di atasnya ada ombak lagi'.", en: "Modern oceanography recently discovered the phenomenon of 'Internal Waves'—giant waves occurring below the sea surface due to differences in water density (temperature & salinity)! Previously humans thought waves were only on the surface. Amazingly, Surah An-Nur verse 40 specifically describes: 'a deep sea covered by waves, upon which are waves'." },
    anatomy: [
      { part: { id: "Surface Waves", en: "Surface Waves" }, desc: { id: "Ombak di atas yang digerakkan oleh angin.", en: "Top waves driven by the wind." } },
      { part: { id: "Internal Waves", en: "Internal Waves" }, desc: { id: "Ombak raksasa tersembunyi di laut dalam karena beda massa jenis air.", en: "Hidden giant waves in the deep sea due to water density differences." } }
    ],
    wowFactor: { id: "Hah?! Gelombang internal di bawah laut bisa setinggi ratusan meter, jauh lebih besar dari ombak tsunami terburuk sekalipun di permukaan, tapi kita yang berlayar di atas perahu sama sekali tidak akan merasakannya!", en: "What?! Internal waves underwater can be hundreds of meters high, much larger than even the worst surface tsunami waves, but we sailing on boats wouldn't feel them at all!" },
    quranVerse: {
      arabic: "مَوْجٌ مِّن فَوْقِهِۦ مَوْجٌ مِّن فَوْقِهِۦ سَحَابٌ ۚ ظُلُمَٰتٌۢ بَعْضُهَا فَوْقَ بَعْضٍ",
      transliteration: "Mawjum mim fawqihii mawjum mim fawqihii sahaab. Thulumaatum ba'dhuhaa fawqa ba'dh",
      translation: { id: "Ombak yang di atasnya ada ombak (pula), di atasnya (lagi) awan; gelap gulita yang tindih-bertindih.", en: "Waves upon which are waves, over which are clouds - darknesses, some of them upon others." }
    },
    quiz: [
      {
        question: { id: "Apa itu fenomena 'Internal Waves' yang baru ditemukan para ilmuwan?", en: "What is the 'Internal Waves' phenomenon recently discovered by scientists?" },
        options: [
          { text: { id: "Ombak panas di atas pasir", en: "Hot waves on the sand" } },
          { text: { id: "Ombak tersembunyi berukuran raksasa di kedalaman laut", en: "Giant hidden waves in the ocean depths" } },
          { text: { id: "Ombak yang membeku di kutub utara", en: "Waves that freeze at the north pole" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Surat An-Nur ayat 40 menggambarkan lautan yang dalam itu kondisinya seperti apa?", en: "How does Surah An-Nur verse 40 describe the deep ocean?" },
        options: [
          { text: { id: "Sangat terang benderang", en: "Very brightly lit" } },
          { text: { id: "Penuh dengan ikan", en: "Full of fish" } },
          { text: { id: "Gelap gulita yang tindih bertindih", en: "Darknesses layered upon darknesses" } }
        ],
        answerIdx: 2
      },
      {
        question: { id: "Faktor utama penyebab terjadinya ombak besar di permukaan laut adalah?", en: "The main factor causing large waves on the sea surface is?" },
        options: [
          { text: { id: "Angin laut yang kuat", en: "Strong sea winds" } },
          { text: { id: "Gunung es yang mencair", en: "Melting icebergs" } },
          { text: { id: "Paus yang berenang cepat", en: "Fast swimming whales" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
