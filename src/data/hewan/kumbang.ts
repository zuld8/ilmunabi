import { ObjectData } from "../objects";

export const kumbangData: ObjectData = {
  slug: "kumbang",
  name: { id: "Kumbang", en: "Beetle" },
  scientificName: "Coleoptera",
  surahName: "Al-An'am",
  surahReference: "6:38",
  icon: "🪲",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "دَابَّةٍ", latin: "Daabbatin", arti: "Hewan melata", artiEn: "Crawling creature", contohAyat: "Al-An'am 6:38" },
    { arab: "قَوِيٌّ", latin: "Qawiyyun", arti: "Kuat", artiEn: "Strong", contohAyat: "Al-Qasas 28:26" },
    { arab: "غِطَاءٌ", latin: "Ghitaa'un", arti: "Penutup (sayap keras)", artiEn: "Covering", contohAyat: "Al-Kahfi 18:90" },
    { arab: "أَرْضٌ", latin: "Ardhun", arti: "Bumi/Tanah", artiEn: "Earth", contohAyat: "Al-Baqarah 2:22" }
  ],
  balita: {
    text: {
      id: "Halo kumbang! Kumbang punya cangkang yang keras di punggungnya untuk berlindung. 🪲",
      en: "Hello beetle! Beetles have a hard shell on their back for protection. 🪲"
    },
    audioTranscript: {
      id: "Kumbang itu serangga yang kuat. Kulit kerasnya melindunginya seperti tameng.",
      en: "The beetle is a strong insect. Its hard skin protects it like a shield."
    },
    quiz: {
      question: { id: "Apa yang membuat kumbang aman dari bahaya?", en: "What keeps the beetle safe from danger?" },
      options: [
        { text: { id: "Bulu yang lembut", en: "Soft fur" } },
        { text: { id: "Cangkang keras di punggung", en: "Hard shell on the back" } },
        { text: { id: "Suara keras", en: "Loud voice" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: {
      id: "Kumbang adalah salah satu serangga terkuat di dunia! Allah menciptakannya dengan baju zirah (sayap keras) bernama elytra agar aman.",
      en: "Beetles are one of the strongest insects in the world! Allah created them with an armor (hard wings) called elytra to keep them safe."
    },
    facts: [
      { id: "Satu dari empat hewan di Bumi adalah jenis kumbang!", en: "One in four animals on Earth is a type of beetle!" },
      { id: "Sayap keras kumbang (Elytra) melindungi sayap terbang yang rapuh di bawahnya.", en: "The hard wings (Elytra) protect the fragile flying wings underneath." },
      { id: "Kumbang badak bisa mengangkat beban 850 kali berat badannya sendiri!", en: "Rhinoceros beetles can lift 850 times their own body weight!" },
      { id: "Mereka bisa hidup di air, tanah, gurun, atau pepohonan.", en: "They can live in water, soil, deserts, or trees." },
      { id: "Kumbang punya rahang kuat yang bisa memotong kayu.", en: "Beetles have strong jaws that can cut wood." }
    ],
    quranVerse: {
      arabic: "وَمَا مِن دَابَّةٍ فِي الْأَرْضِ وَلَا طَائِرٍ يَطِيرُ بِجَنَاحَيْهِ إِلَّا أُمَمٌ أَمْثَالُكُم",
      transliteration: "Wa mā min dābbatin fil-arḍi wa lā ṭā'iriy yaṭīru bijanāḥaihi illā umamun amsālukum",
      translation: {
        id: "Dan tiadalah binatang-binatang yang ada di bumi dan burung-burung yang terbang dengan kedua sayapnya, melainkan umat-umat (juga) seperti kamu.",
        en: "And there is no creature on [or within] the earth or bird that flies with its wings except [that they are] communities like you."
      }
    },
    quiz: {
      question: { id: "Berapa banyak beban yang bisa diangkat Kumbang Badak?", en: "How much weight can a Rhinoceros Beetle lift?" },
      options: [
        { text: { id: "Hanya 2 kali lipat", en: "Only 2 times" } },
        { text: { id: "850 kali lipat berat badannya", en: "850 times its body weight" } },
        { text: { id: "10 kali lipat", en: "10 times" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: {
      id: "Sistem mekanik cangkang kumbang sungguh menakjubkan. Para ilmuwan meniru material 'Elytra' (sayap keras) kumbang untuk merancang pelindung tahan banting untuk pesawat antariksa!",
      en: "The mechanical system of beetle shells is amazing. Scientists mimic the beetle's 'Elytra' (hard wings) material to design impact-resistant shielding for spacecraft!"
    },
    anatomy: [
      { part: { id: "Elytra", en: "Elytra" }, desc: { id: "Sayap depan yang mengeras menjadi pelindung.", en: "Forewings that hardened into a shield." } },
      { part: { id: "Mandibula", en: "Mandibles" }, desc: { id: "Rahang kuat seperti gunting penghancur.", en: "Strong jaws like crushing scissors." } }
    ],
    wowFactor: {
      id: "Kumbang 'Ironclad' memiliki cangkang yang sangat keras hingga tak bisa dihancurkan bahkan saat dilindas mobil seberat 2 ton. Subhanallah!",
      en: "The 'Ironclad' beetle has a shell so hard it cannot be crushed even when run over by a 2-ton car. Subhanallah!"
    },
    quranVerse: {
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      transliteration: "Laqad khalaqnal-insāna fī aḥsani taqwīm",
      translation: { id: "Sesungguhnya Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya.", en: "We have certainly created man in the best of stature." },
      context: { id: "Seperti halnya kumbang yang diberi pertahanan sempurna, segala ciptaan Allah punya kehebatan rancangan masing-masing.", en: "Just as beetles are given perfect defense, all of Allah's creations have their own design greatness." }
    },
    quiz: [
      {
        question: { id: "Apa fungsi sayap depan (Elytra) yang keras pada kumbang?", en: "What is the function of the hard forewings (Elytra) on a beetle?" },
        options: [
          { text: { id: "Untuk menyanyi", en: "To sing" } },
          { text: { id: "Untuk melindungi sayap tipis di baliknya", en: "To protect the thin wings underneath" } },
          { text: { id: "Untuk menarik perhatian paus", en: "To attract whales" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Teknologi apa yang meniru cangkang kumbang?", en: "What technology mimics the beetle's shell?" },
        options: [
          { text: { id: "Baju renang", en: "Swimsuits" } },
          { text: { id: "Material pelindung / anti peluru", en: "Shielding / bulletproof material" } },
          { text: { id: "Layar TV", en: "TV screens" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Apa yang membuktikan ketangguhan cangkang kumbang Ironclad?", en: "What proves the toughness of the Ironclad beetle's shell?" },
        options: [
          { text: { id: "Tidak hancur saat dilindas mobil!", en: "Doesn't crush when run over by a car!" } },
          { text: { id: "Bisa berenang cepat", en: "Can swim fast" } },
          { text: { id: "Warnanya transparan", en: "Its color is transparent" } }
        ],
        answerIdx: 0
      }
    ]
  }
};
