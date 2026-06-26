import { ObjectData } from "../objects";

export const ulatSutraData: ObjectData = {
  slug: "ulat-sutra",
  name: { id: "Ulat Sutra", en: "Silkworm" },
  scientificName: "Bombyx mori",
  surahName: "Al-Insan",
  surahReference: "76:21",
  icon: "🐛",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "حَرِيرٌ", latin: "Hariirun", arti: "Sutra", artiEn: "Silk", contohAyat: "Al-Insan 76:21" },
    { arab: "لِبَاسٌ", latin: "Libaasun", arti: "Pakaian", artiEn: "Clothing", contohAyat: "Al-A'raf 7:26" },
    { arab: "دُودَةٌ", latin: "Duudatun", arti: "Ulat", artiEn: "Worm", contohAyat: "Tidak ada di Quran, tp kata ganti serangga ada" },
    { arab: "نَافِعٌ", latin: "Naafi'un", arti: "Bermanfaat", artiEn: "Useful", contohAyat: "Al-Baqarah 2:164" }
  ],
  balita: {
    text: {
      id: "Ulat sutra makan daun murbei yang banyaaaak. Lalu dia membuat benang super lembut. 🐛",
      en: "Silkworms eat a loooot of mulberry leaves. Then they make super soft threads. 🐛"
    },
    audioTranscript: {
      id: "Ulat sutra itu sangat berguna. Allah mengajarinya cara membuat benang sutra yang halus.",
      en: "The silkworm is very useful. Allah taught it how to make fine silk thread."
    },
    quiz: {
      question: { id: "Apa yang dimakan oleh ulat sutra?", en: "What does the silkworm eat?" },
      options: [
        { text: { id: "Batu", en: "Rocks" } },
        { text: { id: "Daun murbei", en: "Mulberry leaves" } },
        { text: { id: "Pasir", en: "Sand" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: {
      id: "Ulat sutra adalah pembuat pakaian paling mewah! Benang yang dihasilkan ulat sutra menjadi kain yang dipakai di Surga.",
      en: "The silkworm is the most luxurious clothing maker! The thread produced by silkworms becomes the fabric worn in Paradise."
    },
    facts: [
      { id: "Ulat sutra memakan daun pohon murbei tanpa henti siang dan malam.", en: "Silkworms eat mulberry leaves non-stop day and night." },
      { id: "Saat menjadi kepompong, ia mengeluarkan benang dari mulutnya.", en: "When turning into a cocoon, it releases thread from its mouth." },
      { id: "Satu kepompong bisa menghasilkan benang sepanjang 1 kilometer!", en: "One cocoon can produce a thread 1 kilometer long!" },
      { id: "Kain sutra sangat lembut tapi lebih kuat dari kawat baja dengan ukuran yang sama.", en: "Silk fabric is very soft but stronger than steel wire of the same size." },
      { id: "Kain sutra menjadi pakaian para penghuni Surga.", en: "Silk fabric becomes the clothing of the inhabitants of Paradise." }
    ],
    quranVerse: {
      arabic: "عَالِيَهُمْ ثِيَابُ سُندُسٍ خُضْرٌ وَإِسْتَبْرَقٌ",
      transliteration: "‘Āliyahum siyābu sundusin khuḍruw wa istabraq",
      translation: {
        id: "Mereka memakai pakaian sutra halus yang hijau dan sutra tebal.",
        en: "Upon the inhabitants will be green garments of fine silk and brocade."
      }
    },
    quiz: {
      question: { id: "Berapa panjang benang yang dihasilkan 1 kepompong ulat sutra?", en: "How long is the thread produced by 1 silkworm cocoon?" },
      options: [
        { text: { id: "Hanya 10 cm", en: "Only 10 cm" } },
        { text: { id: "Sekitar 1 meter", en: "About 1 meter" } },
        { text: { id: "Bisa mencapai 1 Kilometer", en: "Can reach 1 Kilometer" } }
      ],
      answerIdx: 2
    }
  },
  explorer: {
    text: {
      id: "Rahasia benang sutra ada pada protein cair 'fibroin' yang mengeras saat terkena udara. Ini adalah pabrik biokimia mutakhir ciptaan Allah di dalam tubuh hewan kecil!",
      en: "The secret of silk thread lies in the liquid protein 'fibroin' which hardens when exposed to air. This is an advanced biochemical factory created by Allah inside a tiny animal's body!"
    },
    anatomy: [
      { part: { id: "Kelenjar Sutra", en: "Silk Gland" }, desc: { id: "Organ memanjang pembentuk protein sutra.", en: "Elongated organ that forms silk protein." } },
      { part: { id: "Spinneret", en: "Spinneret" }, desc: { id: "Lubang kecil di mulut tempat benang disemprotkan keluar.", en: "Small hole in the mouth where thread is sprayed out." } }
    ],
    wowFactor: {
      id: "Benang sutra tahan terhadap mikroba dan jamur. Ilmuwan medis menggunakannya untuk menjahit organ jantung dan mata karena tidak memicu alergi!",
      en: "Silk thread is resistant to microbes and fungi. Medical scientists use it to stitch the heart and eyes because it doesn't trigger allergies!"
    },
    quranVerse: {
      arabic: "يَلْبَسُونَ مِن سُندُسٍ وَإِسْتَبْرَقٍ مُّتَقَابِلِينَ",
      transliteration: "Yalbasūna min sundusiw wa istabraqim mutaqābilīn",
      translation: { id: "Mereka memakai sutra yang halus dan sutra yang tebal, (duduk) berhadap-hadapan.", en: "They will wear fine silk and heavy brocade, facing each other." },
      context: { id: "Sutra yang dihasilkan ulat kecil di dunia mengingatkan kita pada janji Allah akan kemewahan pakaian Surga.", en: "The silk produced by tiny worms in this world reminds us of Allah's promise of luxurious heavenly garments." }
    },
    quiz: [
      {
        question: { id: "Protein cair di dalam ulat sutra akan mengeras menjadi benang saat terkena apa?", en: "The liquid protein inside the silkworm hardens into thread when exposed to what?" },
        options: [
          { text: { id: "Saat direbus air", en: "When boiled in water" } },
          { text: { id: "Saat terkena Udara", en: "When exposed to Air" } },
          { text: { id: "Saat diberi makan", en: "When fed" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Mengapa benang sutra dipakai ilmuwan untuk menjahit jantung saat operasi?", en: "Why is silk thread used by scientists to stitch hearts during surgery?" },
        options: [
          { text: { id: "Karena sangat tajam", en: "Because it's very sharp" } },
          { text: { id: "Karena lembut, kuat, dan tidak bikin alergi", en: "Because it's soft, strong, and hypoallergenic" } },
          { text: { id: "Karena harganya mahal", en: "Because it's expensive" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Pakaian apa yang akan dipakai oleh penghuni Surga menurut Al-Qur'an?", en: "What clothing will the inhabitants of Paradise wear according to the Qur'an?" },
        options: [
          { text: { id: "Sutra halus (Sundus) dan sutra tebal (Istabraq)", en: "Fine silk (Sundus) and thick silk (Istabraq)" } },
          { text: { id: "Kain katun", en: "Cotton fabric" } },
          { text: { id: "Kain wol domba", en: "Sheep wool fabric" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
