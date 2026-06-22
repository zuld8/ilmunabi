import { ObjectData } from "../objects";

export const lautData: ObjectData = {
  slug: "laut",
  name: {
    id: "Laut",
    en: "Sea",
  },
  scientificName: "Oceanus",
  surahName: "Ar-Rahman",
  surahReference: "55:19-20",
  icon: "🌊",
  category: "alam",
  type: "alam",
  unlockedAtPoints: 120,
  kosakata: [
    { arab: "بَحْرٌ", latin: "Bahr", arti: "Laut", artiEn: "Sea" },
    { arab: "مَوْجٌ", latin: "Mawj", arti: "Ombak", artiEn: "Wave" },
    { arab: "لُجِّيّ", latin: "Lujjiyy", arti: "Lautan Dalam", artiEn: "Deep Ocean" },
    { arab: "بَرْزَخٌ", latin: "Barzakh", arti: "Batas/Pemisah", artiEn: "Barrier" }
  ],
  balita: {
    text: {
      id: "Ini laut yang luas! Ada ikan berenang dan ombak menari-nari. 🌊",
      en: "This is the wide sea! Fishes swim and waves dance around. 🌊",
    },
    audioTranscript: {
      id: "Laut itu sangat luas dan biru. Allah menciptakan lautan sebagai tempat tinggal ikan-ikan yang cantik.",
      en: "The sea is very vast and blue. Allah created the ocean as a home for beautiful fishes.",
    },
    quiz: {
      question: {
        id: "Hewan apa yang tinggal di dalam laut?",
        en: "Which animal lives in the sea?",
      },
      options: [
        { text: { id: "🐟 Ikan", en: "🐟 Fish" } },
        { text: { id: "🐈 Kucing", en: "🐈 Cat" } },
        { text: { id: "🦅 Elang", en: "🦅 Eagle" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Lautan menutupi 70% bumi kita. Di beberapa tempat, dua laut bertemu tetapi airnya tidak bercampur karena adanya batas fisika tak terlihat.",
      en: "Oceans cover 70% of our Earth. In some places, two seas meet but their waters do not mix due to an invisible physical barrier.",
    },
    facts: [
      { id: "Air laut rasanya asin karena kaya akan mineral natrium klorida.", en: "Ocean water tastes salty because it is rich in sodium chloride minerals." },
      { id: "Laut menguap membentuk awan yang menjadi sumber air hujan.", en: "The sea evaporates to form clouds, which are the source of rain." },
      { id: "Ombak terjadi karena gesekan angin di permukaan air.", en: "Waves occur due to the friction of wind on the water surface." },
      { id: "Terumbu karang di laut adalah tempat tinggal ribuan biota laut.", en: "Coral reefs in the sea are home to thousands of marine creatures." },
    ],
    quranVerse: {
      arabic: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ",
      transliteration: "Marajal-bahrayni yaltaqiyān, baynahumā barzakhul-lā yabghiyān",
      translation: {
        id: "Dia membiarkan dua laut mengalir yang (kemudian) keduanya bertemu, di antara keduanya ada batas yang tidak dilampaui oleh masing-masing.",
        en: "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses.",
      },
    },
    quiz: {
      question: {
        id: "Berapa persen permukaan bumi yang ditutupi oleh lautan?",
        en: "What percentage of the Earth's surface is covered by oceans?",
      },
      options: [
        { text: { id: "30%", en: "30%" } },
        { text: { id: "50%", en: "50%" } },
        { text: { id: "70%", en: "70%" } },
      ],
      answerIdx: 2,
    },
  },
  explorer: {
    text: {
      id: "Lautan dalam memiliki lapisan ekologis yang berbeda. Batas air laut (halocline dan thermocline) mencegah percampuran air yang memiliki salinitas dan suhu berbeda secara instan.",
      en: "Deep oceans have distinct ecological zones. Marine water barriers (halocline and thermocline) prevent the instant mixing of waters with different salinities and temperatures.",
    },
    anatomy: [
      {
        part: { id: "Zona Epipelagis", en: "Epipelagic Zone" },
        desc: { id: "Lapisan permukaan atas yang menerima banyak cahaya matahari (zona fotik).", en: "The top surface layer that receives abundant sunlight (photic zone)." },
      },
      {
        part: { id: "Zona Batipelagis", en: "Bathypelagic Zone" },
        desc: { id: "Kedalaman 1000 hingga 4000 meter yang gelap gulita dan bertekanan tinggi.", en: "Depths of 1000 to 4000 meters that are pitch black with extreme pressure." },
      },
      {
        part: { id: "Halocline", en: "Halocline" },
        desc: { id: "Batas gradien kadar garam yang memisahkan massa air laut.", en: "The salinity gradient barrier separating marine water masses." },
      },
    ],
    wowFactor: {
      id: "Sains kelautan modern menemukan fenomena batas pertemuan laut seperti di Selat Gibraltar, di mana air Samudra Atlantik dan Laut Tengah bertemu tetapi tidak bercampur langsung karena perbedaan densitas, salinitas, dan suhu. Batas tak terlihat ini disebut 'Barzakh' di dalam Surah Ar-Rahman.",
      en: "Modern oceanography discovered the sea barrier phenomenon in places like the Strait of Gibraltar, where the Atlantic Ocean and the Mediterranean Sea meet but do not instantly mix due to density, salinity, and temperature gradients. This invisible barrier is called 'Barzakh' in Surah Ar-Rahman.",
    },
    quranVerse: {
      arabic: "أَوْ كَظُلُمَاتٍ فِي بَحْرٍ لُجِّيٍّ يَغْشَاهُ مَوْجٌ مِنْ فَوْقِهِ مَوْجٌ",
      transliteration: "Aw kadhulumātin fī bahrin lujjiyyin yaghsyāhu mawjun min fawqihi mawj",
      translation: {
        id: "Atau (keadaan orang-orang kafir) seperti gelap gulita di lautan yang dalam, yang diliputi oleh ombak, yang di atasnya ada ombak (pula),",
        en: "Or [it is] like darknesses within a deep sea which is covered by a wave, upon which is another wave,",
      },
      context: {
        id: "Surah An-Nur ayat 40 menggambarkan kegelapan lautan dalam dan fenomena ombak internal di dasar laut dalam yang baru dibuktikan oseanografi modern abad ke-20.",
        en: "Surah An-Nur verse 40 describes the darkness of the deep sea and internal waves, a phenomenon oceanographers only proved in the 20th century.",
      },
    },
    quiz: [
      {
        question: {
          id: "Apa nama pembatas kandungan kadar garam air laut yang memisahkan dua perairan laut?",
          en: "What is the name of the salinity gradient barrier separating two sea waters?",
        },
        options: [
          { text: { id: "Thermocline", en: "Thermocline" } },
          { text: { id: "Halocline", en: "Halocline" } },
          { text: { id: "Pycnocline", en: "Pycnocline" } },
        ],
        answerIdx: 1,
      },
    ],
  },
};
