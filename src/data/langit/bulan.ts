import { ObjectData } from "../objects";

export const bulanData: ObjectData = {
  slug: "bulan",
  name: {
    id: "Bulan",
    en: "Moon",
  },
  scientificName: "Luna",
  surahName: "Al-Qamar",
  surahReference: "54:1",
  icon: "🌙",
  category: "langit",
  type: "langit",
  unlockedAtPoints: 80,
  kosakata: [
    { arab: "قَمَرٌ", latin: "Qamar", arti: "Bulan", artiEn: "Moon" },
    { arab: "نُورٌ", latin: "Nur", arti: "Cahaya (Pantulan)", artiEn: "Light" },
    { arab: "مَنَازِلَ", latin: "Manazil", arti: "Fase/Garis Edar", artiEn: "Phases/Mansions" },
    { arab: "هِلاَلٌ", latin: "Hilal", arti: "Bulan Sabit", artiEn: "Crescent" }
  ],
  balita: {
    text: {
      id: "Ini bulan! Bulan bersinar indah di malam hari yang gelap. 🌙",
      en: "This is the moon! It shines beautifully in the dark night. 🌙",
    },
    audioTranscript: {
      id: "Bulan mendampingi bumi di malam hari. Bentuk bulan berubah-ubah dengan sangat cantik, ciptaan Allah.",
      en: "The moon accompanies the earth at night. The shape of the moon changes beautifully, a creation of Allah.",
    },
    quiz: {
      question: {
        id: "Kapan kita bisa melihat bulan bersinar di langit?",
        en: "When can we see the moon shining in the sky?",
      },
      options: [
        { text: { id: "Pagi hari", en: "In the morning" } },
        { text: { id: "Siang hari", en: "At noon" } },
        { text: { id: "Malam hari", en: "At night" } },
      ],
      answerIdx: 2,
    },
  },
  anak: {
    text: {
      id: "Bulan adalah satelit bumi. Bulan tidak menghasilkan cahaya sendiri, ia hanya memantulkan cahaya matahari, persis seperti yang dijelaskan Al-Qur'an.",
      en: "The moon is Earth's satellite. The moon does not emit its own light, it only reflects the sun's light, exactly as described in the Quran.",
    },
    facts: [
      { id: "Bulan mengelilingi bumi dalam waktu sekitar 29,5 hari.", en: "The moon orbits the Earth in about 29.5 days." },
      { id: "Bulan memantulkan cahaya matahari ke bumi pada malam hari.", en: "The moon reflects sunlight to the Earth at night." },
      { id: "Gaya tarik bulan menyebabkan pasang surut air laut.", en: "The moon's gravitational pull causes ocean tides." },
      { id: "Bulan memiliki kawah-kawah besar akibat benturan meteor.", en: "The moon has large craters caused by meteor impacts." },
    ],
    quranVerse: {
      arabic: "تَبَارَكَ الَّذِي جَعَلَ فِي السَّمَاءِ بُرُوجًا وَجَعَلَ فِيهَا سِرَاجًا وَقَمَرًا مُنِيرًا",
      transliteration: "Tabārakal-ladhī ja'ala fis-samā'i burūjaw wa ja'ala fīhā sirājaw wa qamaramm munīrā",
      translation: {
        id: "Mahasuci Allah yang menjadikan di langit gugusan bintang-bintang dan Dia juga menjadikan padanya matahari dan bulan yang bersinar.",
        en: "Blessed is He who has placed in the sky constellations and has placed therein a burning lamp and a luminous moon.",
      },
    },
    quiz: {
      question: {
        id: "Berapa lama bulan mengelilingi bumi penuh satu putaran?",
        en: "How long does it take for the moon to complete one orbit around Earth?",
      },
      options: [
        { text: { id: "7 hari", en: "7 days" } },
        { text: { id: "29,5 hari", en: "29.5 days" } },
        { text: { id: "365 hari", en: "365 days" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Bulan mengorbit bumi secara pasang surut terkunci (tidally locked), sehingga sisi bulan yang menghadap bumi selalu sama.",
      en: "The moon orbits the Earth in a tidally locked state, meaning the same side of the moon always faces the Earth.",
    },
    anatomy: [
      {
        part: { id: "Kerak Bulan", en: "Crust" },
        desc: { id: "Lapisan permukaan luar berbatu dan berdebu tebal.", en: "The rocky and dusty outer surface layer." },
      },
      {
        part: { id: "Maria", en: "Maria" },
        desc: { id: "Dataran basalt gelap luas hasil aktivitas vulkanik purba.", en: "Large dark basaltic plains formed by ancient volcanic activity." },
      },
      {
        part: { id: "Regolit", en: "Regolith" },
        desc: { id: "Debu halus dan serpihan batu menutupi seluruh permukaan.", en: "Fine dust and rocky debris covering the entire surface." },
      },
    ],
    wowFactor: {
      id: "Al-Qur'an membedakan istilah cahaya matahari dan bulan. Matahari disebut 'Dhiya' / 'Siraj' (sumber cahaya/pelita), sedangkan bulan disebut 'Nur' / 'Munir' (cahaya pantulan/bercahaya). Pemilihan kata ilmiah yang presisi ini mendahului penemuan astronomi modern berabad-abad.",
      en: "The Quran distinguishes between sunlight and moonlight terms. The sun is called 'Dhiya' / 'Siraj' (source of light/lamp) while the moon is called 'Nur' / 'Munir' (reflected light/luminous). This precise scientific word choice preceded modern astronomical discoveries by centuries.",
    },
    quranVerse: {
      arabic: "اقْتَرَبَتِ السَّاعَةُ وَانْشَقَّ الْقَمَرُ",
      transliteration: "Iqtarabatis-sā'atu wan-syaqqal qamar",
      translation: {
        id: "Saat (hari Kiamat) semakin dekat dan bulan telah terbelah.",
        en: "The Hour has come near, and the moon has split [in two].",
      },
      context: {
        id: "Surah Al-Qamar ayat 1 menceritakan mukjizat pembelahan bulan oleh Nabi Muhammad ﷺ sebagai bukti kenabian atas izin Allah.",
        en: "Surah Al-Qamar verse 1 recounts the miracle of the splitting of the moon by Prophet Muhammad ﷺ as proof of his prophethood.",
      },
    },
    quiz: [
      {
        question: {
          id: "Apa istilah bahasa Arab untuk bulan sabit yang menandai pergantian bulan Hijriah?",
          en: "What is the Arabic term for the crescent moon marking the start of a Hijri month?",
        },
        options: [
          { text: { id: "Qamar", en: "Qamar" } },
          { text: { id: "Hilal", en: "Hilal" } },
          { text: { id: "Badr", en: "Badr" } },
        ],
        answerIdx: 1,
      },
    ],
  },
};
