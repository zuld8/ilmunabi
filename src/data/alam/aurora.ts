import { ObjectData } from "../objects";

export const auroraData: ObjectData = {
  slug: "aurora",
  name: { id: "Cahaya Aurora", en: "Aurora Lights" },
  icon: "🌌",
  category: "alam",
  type: "alam",
  scientificName: "Aurora Borealis / Australis",
  surahName: "An-Nur",
  surahReference: "An-Nur:35",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "نُورٌ", latin: "Nuur", arti: "Cahaya", artiEn: "Light" },
    { arab: "جَمَالٌ", latin: "Jamaal", arti: "Keindahan", artiEn: "Beauty" },
    { arab: "سَمَاءٌ", latin: "Samaa'", arti: "Langit", artiEn: "Sky" },
    { arab: "شِمَالٌ", latin: "Syimaal", arti: "Utara", artiEn: "North" }
  ],
  balita: {
    text: { id: "Wah, langitnya menari! Kadang di daerah bersalju, langit malam berubah warna jadi hijau dan ungu yang indah sekali. Namanya cahaya Aurora. Allah adalah pelukis terhebat yang menghias langit!", en: "Wow, the sky is dancing! Sometimes in snowy areas, the night sky changes into beautiful green and purple colors. It's called Aurora lights. Allah is the greatest painter who decorates the sky!" },
    audioTranscript: { id: "Aurora adalah cahaya menari berwarna-warni di langit malam.", en: "Aurora is colorful dancing light in the night sky." },
    quiz: {
      question: { id: "Warna apa yang sering muncul saat Aurora menari?", en: "What color often appears when the Aurora dances?" },
      options: [
        { text: { id: "Hitam gelap", en: "Dark black" } },
        { text: { id: "Hijau bersinar", en: "Glowing green" } },
        { text: { id: "Abu-abu", en: "Gray" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Cahaya Aurora terjadi ketika partikel angin matahari masuk menabrak udara di bumi kita. Bertabrakannya itu menghasilkan cahaya yang meliuk-liuk di kutub utara dan selatan! Allah itu Cahaya bagi langit dan bumi, dan ciptaan-Nya sangat memukau mata.", en: "Aurora lights happen when solar wind particles crash into the air in our earth. The collision produces curving lights at the north and south poles! Allah is the Light of the heavens and the earth, and His creations are mesmerising." },
    facts: [
      { id: "Aurora di kutub utara disebut Aurora Borealis.", en: "Aurora at the north pole is called Aurora Borealis." },
      { id: "Aurora di kutub selatan disebut Aurora Australis.", en: "Aurora at the south pole is called Aurora Australis." },
      { id: "Warna Aurora paling sering adalah hijau terang.", en: "The most common Aurora color is bright green." },
      { id: "Gas Oksigen di atas sana yang membuat warna hijaunya.", en: "Oxygen gas high up there makes the green color." },
      { id: "Astronot bisa melihat Aurora dari luar angkasa lho!", en: "Astronauts can see Auroras from space!" }
    ],
    quranVerse: {
      arabic: "ٱللَّهُ نُورُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ",
      transliteration: "Allaahu nuurus-samaawaati wal-ardh",
      translation: { id: "Allah (Pemberi) cahaya (kepada) langit dan bumi.", en: "Allah is the Light of the heavens and the earth." }
    },
    quiz: {
      question: { id: "Di mana kita paling mudah melihat Aurora?", en: "Where is it easiest to see Auroras?" },
      options: [
        { text: { id: "Di gurun pasir", en: "In the desert" } },
        { text: { id: "Di sekitar Kutub Utara dan Selatan", en: "Around the North and South Poles" } },
        { text: { id: "Di tengah hutan hujan", en: "In the middle of the rainforest" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Aurora adalah fenomena fluoresensi kosmik! Ketika angin matahari menembus kelemahan magnetosfer di area kutub, elektron bertumbukan dengan atom Oksigen dan Nitrogen di atmosfer. Atom-atom ini 'bersemangat' lalu memancarkan foton cahaya! Allah menjadikan langit bukan hanya sebagai pelindung, tapi menunjukkannya dengan tontonan cahaya yang megah, mengingatkan kita pada ayat 'Allah adalah Cahaya langit dan bumi'.", en: "Aurora is a cosmic fluorescence phenomenon! When solar wind penetrates the magnetosphere's weakness at the poles, electrons collide with Oxygen and Nitrogen atoms in the atmosphere. These atoms get 'excited' and emit light photons! Allah made the sky not only a protector, but displays it with a magnificent light show, reminding us of the verse 'Allah is the Light of the heavens and the earth'." },
    anatomy: [
      { part: { id: "Eksitasi Atom", en: "Atomic Excitation" }, desc: { id: "Proses dimana atom mendapat energi lebih lalu melepaskannya sebagai cahaya.", en: "The process where atoms get extra energy then release it as light." } },
      { part: { id: "Foton Oksigen", en: "Oxygen Photon" }, desc: { id: "Atom oksigen pada ketinggian tertentu melepaskan cahaya hijau atau merah.", en: "Oxygen atoms at a certain height emit green or red light." } }
    ],
    wowFactor: { id: "Hah?! Ternyata bukan cuma bumi yang punya Aurora! Jupiter dan Saturnus juga punya Aurora super besar berwarna biru dan ungu karena medan magnet mereka sangat raksasa!", en: "What?! It turns out not only earth has Auroras! Jupiter and Saturn also have super large blue and purple Auroras because their magnetic fields are gigantic!" },
    quranVerse: {
      arabic: "مَثَلُ نُورِهِۦ كَمِشْكَوٰةٍ فِيهَا مِصْبَاحٌ",
      transliteration: "Mathalu nuurihii kamishkaatin fiihaa misbaah",
      translation: { id: "Perumpamaan cahaya Allah, adalah seperti sebuah lubang yang tak tembus, yang di dalamnya ada pelita besar.", en: "The example of His light is like a niche within which is a lamp." }
    },
    quiz: [
      {
        question: { id: "Apa yang membuat warna Aurora bisa berbeda-beda (hijau, merah, ungu)?", en: "What makes Aurora colors different (green, red, purple)?" },
        options: [
          { text: { id: "Tergantung posisi bulan", en: "Depends on the moon's position" } },
          { text: { id: "Tergantung jenis gas di atmosfer yang ditabrak", en: "Depends on the type of gas in the atmosphere being hit" } },
          { text: { id: "Tergantung seberapa dingin udaranya", en: "Depends on how cold the air is" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Gas apa yang paling sering menghasilkan warna hijau khas Aurora?", en: "Which gas most often produces the typical green color of Aurora?" },
        options: [
          { text: { id: "Oksigen", en: "Oxygen" } },
          { text: { id: "Helium", en: "Helium" } },
          { text: { id: "Hidrogen", en: "Hydrogen" } }
        ],
        answerIdx: 0
      },
      {
        question: { id: "Planet lain mana yang diketahui memiliki Aurora yang sangat besar?", en: "Which other planet is known to have very large Auroras?" },
        options: [
          { text: { id: "Bulan", en: "Moon" } },
          { text: { id: "Merkurius", en: "Mercury" } },
          { text: { id: "Jupiter", en: "Jupiter" } }
        ],
        answerIdx: 2
      }
    ]
  }
};
