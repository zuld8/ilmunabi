import { ObjectData } from "../objects";

export const pausData: ObjectData = {
  slug: "paus",
  name: { id: "Ikan Paus", en: "Whale" },
  scientificName: "Cetacea",
  surahName: "As-Saffat (142)",
  surahReference: "37:142",
  icon: "🐋",
  category: "Hewan Air",
  type: "hewan",
  unlockedAtPoints: 400,
  kosakata: [
    {
      arab: "حُوتٌ",
      latin: "Huut",
      arti: "Ikan besar/Paus",
      artiEn: "Big fish/Whale",
      contohAyat: "As-Saffat 37:142",
      icon: "🐋"
    },
    {
      arab: "فَالْتَقَمَ",
      latin: "Faltaqama",
      arti: "Menelan",
      artiEn: "Swallowed",
      contohAyat: "As-Saffat 37:142",
      icon: "👄"
    },
    {
      arab: "مُلِيمٌ",
      latin: "Muliim",
      arti: "Tercela",
      artiEn: "Blameworthy",
      contohAyat: "As-Saffat 37:142",
      icon: "😔"
    }
  ],
  balita: {
    text: {
      id: "Ini paus! Tubuhnya sangat besar seperti pulau. Paus tinggal di laut dalam dan suka menyemburkan air. 🐋",
      en: "This is a whale! It is as big as an island. It lives in the deep blue sea and spouts water. 🐋",
    },
    audioTranscript: {
      id: "Ini paus! Tubuhnya sangat besar seperti pulau. Paus tinggal di laut dalam dan suka menyemburkan air.",
      en: "This is a whale! It is as big as an island. It lives in the deep blue sea and spouts water.",
    },
    quiz: {
      question: {
        id: "Di manakah paus tinggal?",
        en: "Where do whales live?",
      },
      options: [
        { text: { id: "🌊 Laut", en: "🌊 Ocean" }, isImage: true },
        { text: { id: "🌲 Hutan", en: "🌲 Forest" }, isImage: true },
        { text: { id: "🏙️ Kota", en: "🏙️ City" }, isImage: true },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Paus bukan ikan biasa, mereka adalah mamalia raksasa yang bernapas dengan paru-paru.",
      en: "Whales are not actual fish; they are giant mammals that breathe using lungs.",
    },
    facts: [
      {
        id: "Paus Biru adalah hewan terbesar di bumi, lidahnya saja seberat seekor gajah.",
        en: "The Blue Whale is the largest animal ever, with a tongue weighing as much as an elephant.",
      },
      {
        id: "Paus bernapas melalui lubang sembur (blowhole) di atas kepala mereka.",
        en: "Whales breathe through blowholes located on top of their heads.",
      },
      {
        id: "Paus bernyanyi dengan melodi indah untuk berkomunikasi sejauh ribuan kilometer.",
        en: "Whales sing complex melodies to communicate across thousands of kilometers.",
      },
    ],
    quranVerse: {
      arabic: "فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ",
      transliteration: "Faltaqamahul hootu wa huwa muleem",
      translation: {
        id: "Maka dia ditelan oleh ikan besar (paus) dalam keadaan tercela.",
        en: "Then the fish (whale) swallowed him while he was blameworthy.",
      },
    },
    quiz: {
      question: {
        id: "Bagaimana cara paus menghirup udara bersih?",
        en: "How do whales breathe clean air?",
      },
      options: [
        { text: { id: "Menggunakan insang", en: "Using gills" } },
        { text: { id: "Lewat lubang sembur (blowhole) di atas kepala", en: "Through a blowhole on top of their head" } },
        { text: { id: "Menggunakan sisik", en: "Through scales" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Paus memiliki adaptasi fisiologis laut dalam yang menakjubkan untuk menyelam berjam-jam.",
      en: "Whales have stunning physiological adaptations for deep-diving without getting decompression sickness.",
    },
    anatomy: [
      {
        part: { id: "Baleen", en: "Baleen Plates" },
        desc: { id: "Struktur penyaring mirip sapu untuk menyaring udang kecil (krill) dari air.", en: "Broom-like filter structures to trap krill while flushing out seawater." },
      },
      {
        part: { id: "Lapisan Blubber", en: "Blubber Layer" },
        desc: { id: "Lapisan lemak tebal di bawah kulit untuk menahan kehangatan di air es kutub.", en: "Thick fat layer underneath the skin protecting internal organs from freezing arctic temperatures." },
      },
    ],
    wowFactor: {
      id: "Nabi Yunus AS ditelan hidup-hidup oleh ikan paus ('Al-Hut') dan bertahan hidup berhari-hari di dalam perutnya. Secara medis, paus sperma memiliki lambung tiga bilik raksasa. Bilik pertama tidak memproduksi asam pencernaan, melainkan hanya wadah mekanis beroksigen tempat mangsa disimpan sementara sebelum dicerna, memungkinkan Yunus bertahan hidup.",
      en: "Prophet Jonah (Yunus) was swallowed alive by a whale ('Al-Hut') and survived inside its belly. Specially, Sperm Whales possess a three-chambered stomach. The first chamber acts as an oxygenated container, functioning without digestive acids, allowing Jonah to survive.",
    },
    quranVerse: {
      arabic: "فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ",
      transliteration: "Falaw laaa anna hoo kaana minal musabbiheena Lalabitha fee batnihiii ilaa yawmi yub'athoon",
      translation: {
        id: "Maka sekiranya dia tidak termasuk orang yang banyak berdzikir (mengingat Allah), niscaya dia akan tetap tinggal di dalam perut (paus) itu sampai hari kebangkitan.",
        en: "And had he not been of those who exalt Allah, he would have remained inside its belly until the Day they are resurrected.",
      },
      context: {
        id: "Doa Nabi Yunus di dalam kegelapan perut paus ('La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimin') adalah salah satu doa terkuat untuk memohon keselamatan dari kesempitan hidup.",
        en: "Prophet Jonah's prayer inside the whale's belly ('There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers') remains a powerful invocation for relief.",
      },
    },
    quiz: {
      question: {
        id: "Mengapa Nabi Yunus secara anatomis dimungkinkan bertahan hidup di lambung pertama paus sperma?",
        en: "Why was it anatomically possible for Prophet Jonah to survive in a sperm whale's first stomach chamber?",
      },
      options: [
        { text: { id: "Karena lambung paus sangat dingin", en: "Because the stomach is cold" } },
        { text: { id: "Bilik pertama tidak menghasilkan asam pencernaan dan beroksigen", en: "The first chamber lacks digestive acids and holds oxygen" } },
        { text: { id: "Paus tidak memakan daging", en: "Whales do not eat meat" } },
      ],
      answerIdx: 1,
    },
  },
};
