import { ObjectData } from "../objects";

export const hudhudData: ObjectData = {
  slug: "hudhud",
  name: { id: "Burung Hudhud", en: "Hoopoe Bird" },
  scientificName: "Upupa epops",
  surahName: "An-Naml (20-22)",
  surahReference: "27:20-22",
  icon: "🐦",
  category: "Burung",
  type: "hewan",
  unlockedAtPoints: 350,
  kosakata: [
    {
      arab: "هُدْهُدٌ",
      latin: "Hudhud",
      arti: "Burung Hudhud",
      artiEn: "Hoopoe Bird",
      contohAyat: "An-Naml 27:20",
      icon: "🐦"
    },
    {
      arab: "طَيْرٌ",
      latin: "Thayr",
      arti: "Burung",
      artiEn: "Bird",
      contohAyat: "An-Naml 27:20",
      icon: "🦅"
    },
    {
      arab: "غَائِبِينَ",
      latin: "Ghaa'ibiin",
      arti: "Tidak hadir",
      artiEn: "Absent",
      contohAyat: "An-Naml 27:20",
      icon: "🚫"
    },
    {
      arab: "نَبَأٌ",
      latin: "Naba'",
      arti: "Kabar/Berita",
      artiEn: "News",
      contohAyat: "An-Naml 27:22",
      icon: "✉️"
    }
  ],
  balita: {
    text: {
      id: "Ini burung Hudhud! Bulunya cantik dengan mahkota indah di atas kepalanya. 🐦",
      en: "This is a Hoopoe bird! It has beautiful feathers and a lovely crown on its head. 🐦",
    },
    audioTranscript: {
      id: "Ini burung Hudhud! Bulunya cantik dengan mahkota indah di atas kepalanya.",
      en: "This is a Hoopoe bird! It has beautiful feathers and a lovely crown on its head.",
    },
    quiz: {
      question: {
        id: "Apa yang ada di atas kepala burung Hudhud?",
        en: "What is on top of the Hoopoe bird's head?",
      },
      options: [
        { text: { id: "👑 Mahkota Bulu", en: "👑 Feather Crown" }, isImage: true },
        { text: { id: "🎩 Topi Hitam", en: "🎩 Black Hat" }, isImage: true },
        { text: { id: "👓 Kacamata", en: "👓 Glasses" }, isImage: true },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Burung Hudhud adalah utusan cerdas dalam kisah Nabi Sulaiman yang membawa kabar penting.",
      en: "The Hoopoe bird is a smart messenger in King Solomon's story, carrying important news.",
    },
    facts: [
      {
        id: "Hudhud memiliki paruh panjang melengkung untuk berburu serangga di dalam tanah.",
        en: "Hopoes have a long curved bill to hunt for insects deep inside the soil.",
      },
      {
        id: "Mereka memiliki navigasi udara luar biasa untuk mendeteksi sumber air bawah tanah.",
        en: "They possess extraordinary spatial navigation and can locate underground water sources.",
      },
      {
        id: "Hudhud bisa mengepakkan sayapnya menyerupai gerakan kupu-kupu besar.",
        en: "They fly with a distinctive undulating motion resembling a giant butterfly.",
      },
    ],
    quranVerse: {
      arabic: "وَتَفَقَّدَ الطَّيْرَ فَقَالَ مَا لِيَ لَا أَرَى الْهُدْهُدَ أَمْ كَانَ مِنَ الْغَائِبِينَ",
      transliteration: "Wa tafaqqadat taira faqaala maa liya laa aral hudhuda am kaana minal ghaaa'ibeen",
      translation: {
        id: "Dan dia (Sulaiman) memeriksa burung-burung lalu berkata, 'Mengapa aku tidak melihat Hudhud, atau apakah ia termasuk yang tidak hadir?'",
        en: "And he took attendance of the birds and said, 'Why do I not see the hoopoe - or is he among the absent?'",
      },
    },
    quiz: {
      question: {
        id: "Nabi siapakah yang mengutus burung Hudhud sebagai pembawa surat?",
        en: "Which Prophet sent the Hoopoe bird as a letter messenger?",
      },
      options: [
        { text: { id: "Nabi Nuh", en: "Prophet Noah" } },
        { text: { id: "Nabi Sulaiman", en: "Prophet Solomon" } },
        { text: { id: "Nabi Ibrahim", en: "Prophet Abraham" } },
      ],
      answerIdx: 1,
    },
  },
  explorer: {
    text: {
      id: "Hudhud dibekali kemampuan navigasi canggih untuk perjalanan migrasi ribuan kilometer.",
      en: "Hoopoes are equipped with advanced navigation mechanisms for long-distance migration.",
    },
    anatomy: [
      {
        part: { id: "Jambul (Crest)", en: "Crest" },
        desc: { id: "Bulu di kepala yang bisa mengembang saat mendeteksi bahaya atau bersosialisasi.", en: "Head feathers that expand when sensing danger or during social display." },
      },
      {
        part: { id: "Paruh Sensorik", en: "Sensory Beak" },
        desc: { id: "Paruh sensitif getaran untuk mendeteksi pergerakan cacing di dalam tanah gelap.", en: "Vibration-sensitive beak designed to feel moving grubs inside dark soil." },
      },
    ],
    wowFactor: {
      id: "Nabi Sulaiman menggunakan burung Hudhud sebagai pencari informasi geografi dan mata-mata militer. Hudhud melaporkan peradaban Negeri Saba yang menyembah matahari. Studi ornitologi membuktikan burung Hudhud memiliki kompas magnetik alami di kepalanya untuk navigasi lintas samudera yang sangat presisi.",
      en: "King Solomon deployed the Hoopoe as a geographic scout. The hoopoe reported on the Kingdom of Sheba. Ornithology confirms hoopoes contain natural biomagnetic compasses in their heads, enabling highly precise transcontinental navigation.",
    },
    quranVerse: {
      arabic: "فَمَكَثَ غَيْرَ بَعِيدٍ فَقَالَ أَحَطتُ بِمَا لَمْ تُحِطْ بِهِ وَجِئْتُكَ مِن سَبَإٍ بِنَبَإٍ يَقِينٍ",
      transliteration: "Famakatha ghaira ba'eedin faqaala ahattu bimaa lam tuhit bihee wa ji'tuka min Saba'im binaba'iny yaqeen",
      translation: {
        id: "Maka tidak lama kemudian (datanglah Hudhud), lalu ia berkata, 'Aku telah mengetahui sesuatu yang belum engkau ketahui; dan aku bawa kepadamu dari negeri Saba suatu berita yang meyakinkan.'",
        en: "But the hoopoe stayed not long and said, 'I have encompassed [in knowledge] that which you have not encompassed, and I have come to you from Sheba with certain news.'",
      },
      context: {
        id: "Keberanian burung Hudhud membuktikan kecerdasan kognitifnya. Ia berani berargumen di hadapan raja besar Sulaiman karena membawa fakta kebenaran ilmiah lapangan.",
        en: "The hoopoe's bold response highlights its cognitive sophistication, defending itself with factual findings before King Solomon.",
      },
    },
    quiz: {
      question: {
        id: "Kemampuan navigasi alami apakah yang dimiliki kepala burung Hudhud?",
        en: "What natural navigation system does a hoopoe have in its head?",
      },
      options: [
        { text: { id: "Indra pendengar sonar", en: "Sonar sound detection" } },
        { text: { id: "Kompas biomagnetik alami untuk membaca medan magnet bumi", en: "Biomagnetic compass that reads the Earth's magnetic fields" } },
        { text: { id: "Penglihatan infra merah", en: "Infrared heat vision" } },
      ],
      answerIdx: 1,
    },
  },
};
