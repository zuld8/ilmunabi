import { ObjectData } from "../objects";

export const belalangData: ObjectData = {
  slug: "belalang",
  name: { id: "Belalang", en: "Grasshopper" },
  scientificName: "Caelifera",
  surahName: "Al-A'raf",
  surahReference: "7:133",
  icon: "🦗",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "جَرَادٌ", latin: "Jaraadun", arti: "Belalang", artiEn: "Locust/Grasshopper", contohAyat: "Al-A'raf 7:133" },
    { arab: "قَفَزَ", latin: "Qafaza", arti: "Melompat", artiEn: "Jumps", contohAyat: "-" },
    { arab: "آيَةٌ", latin: "Aayatun", arti: "Tanda/Mukjizat", artiEn: "Sign/Miracle", contohAyat: "Al-A'raf 7:133" },
    { arab: "عَذَابٌ", latin: "Azaabun", arti: "Azab", artiEn: "Punishment", contohAyat: "Al-A'raf 7:134" }
  ],
  balita: {
    text: {
      id: "Boing! Belalang bisa melompat saaaangat tinggi dengan kaki belakangnya. 🦗",
      en: "Boing! The grasshopper can jump soooo high with its hind legs. 🦗"
    },
    audioTranscript: {
      id: "Belalang itu pelompat yang hebat. Kakinya diciptakan Allah sangat kuat seperti pegas.",
      en: "The grasshopper is a great jumper. Allah created its legs super strong like springs."
    },
    quiz: {
      question: { id: "Apa yang membuat belalang bisa melompat tinggi?", en: "What makes the grasshopper jump high?" },
      options: [
        { text: { id: "Sayapnya", en: "Its wings" } },
        { text: { id: "Kaki belakangnya", en: "Its hind legs" } },
        { text: { id: "Telinganya", en: "Its ears" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: {
      id: "Belalang adalah pelompat juara! Tahukah kamu? Allah pernah mengirimkan pasukan belalang sebagai teguran untuk Raja Firaun yang sombong di zaman Nabi Musa.",
      en: "Grasshoppers are champion jumpers! Did you know? Allah once sent an army of locusts as a warning to the arrogant Pharaoh in the time of Prophet Musa."
    },
    facts: [
      { id: "Belalang bisa melompat 20 kali lipat dari panjang tubuhnya!", en: "Grasshoppers can jump 20 times their body length!" },
      { id: "Belalang bernapas menggunakan lubang-lubang kecil di perutnya.", en: "Grasshoppers breathe through small holes in their abdomen." },
      { id: "Telinga belalang tidak ada di kepala, tapi ada di perutnya!", en: "A grasshopper's ears are not on its head, but on its belly!" },
      { id: "Saat berkumpul, jutaan belalang bisa menghabiskan panen manusia dalam sehari.", en: "When gathered, millions of locusts can eat human crops in a day." },
      { id: "Belalang (dan ikan) adalah hewan yang halal dimakan walau sudah jadi bangkai.", en: "Grasshoppers (and fish) are halal to eat even if they are already dead." }
    ],
    quranVerse: {
      arabic: "فَأَرْسَلْنَا عَلَيْهِمُ الطُّوفَانَ وَالْجَرَادَ وَالْقُمَّلَ وَالضَّفَادِعَ وَالدَّمَ آيَاتٍ مُّفَصَّلَاتٍ",
      transliteration: "Fa arsalnā ‘alaihimuṭ-ṭūfāna wal-jarāda wal-qummala waḍ-ḍafādi‘a wad-dama āyātim mufaṣṣalāt",
      translation: {
        id: "Maka Kami kirimkan kepada mereka topan, belalang, kutu, katak dan darah (air minum berubah menjadi darah) sebagai bukti-bukti yang jelas,",
        en: "So We sent upon them the flood and locusts and lice and frogs and blood as distinct signs,"
      }
    },
    quiz: {
      question: { id: "Telinga belalang terletak di bagian mana?", en: "Where are a grasshopper's ears located?" },
      options: [
        { text: { id: "Di kepalanya", en: "On its head" } },
        { text: { id: "Di kakinya", en: "On its legs" } },
        { text: { id: "Di perutnya", en: "On its belly" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: {
      id: "Otot kaki belakang belalang berfungsi seperti ketapel biologis ganda! Energi elastis disimpan di sendi mereka dan dilepaskan seketika untuk lompatan eksplosif.",
      en: "A grasshopper's hind leg muscles act like a double biological catapult! Elastic energy is stored in their joints and released instantly for an explosive jump."
    },
    anatomy: [
      { part: { id: "Femur", en: "Femur" }, desc: { id: "Paha kaki belakang tempat otot besar berada.", en: "Hind thigh where the large muscles are located." } },
      { part: { id: "Tympanum", en: "Tympanum" }, desc: { id: "Organ pendengaran di perut bagian pertama.", en: "Hearing organ on the first abdominal segment." } }
    ],
    wowFactor: {
      id: "Wabah kawanan belalang gurun (Locust) bisa berjumlah puluhan miliar dan menutupi matahari! Ini menunjukkan betapa mudahnya Allah mengatur alam untuk menegur manusia yang sombong.",
      en: "A plague of desert locust swarms can number in the tens of billions and blot out the sun! This shows how easily Allah commands nature to warn arrogant humans."
    },
    quranVerse: {
      arabic: "يَخْرُجُونَ مِنَ الْأَجْدَاثِ كَأَنَّهُمْ جَرَادٌ مُّنتَشِرٌ",
      transliteration: "Yakhrujūna minal-ajdāsi ka'annahum jarādum muntasyir",
      translation: { id: "Mereka keluar dari kuburan dengan pandangan tertunduk, seakan-akan mereka belalang yang beterbangan,", en: "Emerging from the graves with downcast eyes, as if they were swarming locusts," },
      context: { id: "Manusia di padang mahsyar kelak diumpamakan seperti kawanan belalang yang sangat banyak dan kebingungan.", en: "Humans on the day of resurrection are likened to a massive, confused swarm of locusts." }
    },
    quiz: [
      {
        question: { id: "Hewan apa yang halal dimakan bangkainya menurut hadits Rasulullah?", en: "Which animals are halal to eat when dead according to the Prophet's hadith?" },
        options: [
          { text: { id: "Kucing dan Burung", en: "Cats and Birds" } },
          { text: { id: "Ikan dan Belalang", en: "Fish and Grasshoppers" } },
          { text: { id: "Sapi dan Kambing", en: "Cows and Goats" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Otot kaki belalang diibaratkan seperti alat apa dalam ilmu fisika?", en: "Grasshopper leg muscles are compared to what tool in physics?" },
        options: [
          { text: { id: "Ketapel elastis (penyimpan energi)", en: "Elastic catapult (energy storage)" } },
          { text: { id: "Magnet besi", en: "Iron magnet" } },
          { text: { id: "Dinamo listrik", en: "Electric dynamo" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Kepada kaum siapakah Allah mengirim kawanan belalang sebagai azab?", en: "To which people did Allah send locust swarms as a punishment?" },
        options: [
          { text: { id: "Kaum Firaun (Mesir)", en: "The people of Pharaoh (Egypt)" } },
          { text: { id: "Kaum Tsamud", en: "The people of Thamud" } },
          { text: { id: "Kaum Luth", en: "The people of Lot" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
