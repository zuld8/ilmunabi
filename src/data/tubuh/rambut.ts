import { ObjectData } from "../objects";

export const rambutData: ObjectData = {
  slug: "rambut",
  name: { id: "Rambut", en: "Hair" },
  icon: "💇",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Capillus",
  surahName: "Al-Hajj",
  surahReference: "22:5",
  unlockedAtPoints: 130,
  kosakata: [
    { arab: "شَعْرٌ", latin: "Sha'run", arti: "Rambut", artiEn: "Hair", contohAyat: "Wamin aswaafihaa wa awbaarihaa wa ash'aarihaa (Dan dari bulu domba, bulu unta dan bulu kambing - An-Nahl:80)." }
  ],
  balita: {
    text: { id: "Sisir rambutmu pelan-pelan. Wah, rapi sekali! Rambut itu seperti topi pelindung kepala kita supaya tidak kepanasan saat bermain di luar. ☀️👦", en: "Comb your hair gently. Wow, so neat! Hair is like a protective hat for our head so it doesn't get too hot playing outside. ☀️👦" },
    audioTranscript: { id: "Rambut kita bisa panjang lho! Jangan lupa disisir supaya tidak kusut.", en: "Our hair can grow long, you know! Don't forget to comb it so it doesn't get tangled." },
    quiz: {
      question: { id: "Apa yang kita gunakan untuk merapikan rambut?", en: "What do we use to tidy our hair?" },
      options: [
        { text: { id: "Sikat gigi", en: "Toothbrush" } },
        { text: { id: "Sisir", en: "Comb" } },
        { text: { id: "Sendok", en: "Spoon" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Rambut itu seperti mahkota alami! Rambut melindungi kulit kepala kita dari sinar matahari yang terik dan menjaga kepala tetap hangat saat cuaca dingin. Rasulullah ﷺ sangat suka menjaga kebersihan rambutnya dan meminyakinya agar selalu rapi. Ayo jaga kebersihan rambut dengan keramas teratur! 🧴🚿", en: "Hair is like a natural crown! Hair protects our scalp from the hot sun and keeps the head warm in cold weather. The Prophet ﷺ really loved keeping his hair clean and oiling it to always stay neat. Let's keep our hair clean by washing it regularly! 🧴🚿" },
    facts: [
      { id: "Satu helai rambut manusia cukup kuat untuk menahan berat sebuah apel kecil! 🍎", en: "A single strand of human hair is strong enough to hold the weight of a small apple! 🍎" },
      { id: "Rambut adalah jaringan yang tumbuh paling cepat kedua di tubuh, setelah sumsum tulang. 🏃‍♂️", en: "Hair is the second fastest-growing tissue in the body, after bone marrow. 🏃‍♂️" },
      { id: "Warna rambut berasal dari zat yang sama dengan penentu warna kulit, yaitu melanin. 🎨", en: "Hair color comes from the same substance that determines skin color, melanin. 🎨" }
    ],
    quranVerse: {
      arabic: "يَا بَنِي آدَمَ خُذُوا زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ",
      transliteration: "Yaa banee Aadama khuthoo zeenatakum 'inda kulli masjid",
      translation: { id: "Hai anak Adam, pakailah pakaianmu yang indah di setiap (memasuki) mesjid.", en: "O children of Adam, take your adornment at every masjid." },
      context: { id: "Menjaga kerapian tubuh (termasuk rambut) adalah sunnah dan dianjurkan saat beribadah.", en: "Keeping the body neat (including hair) is sunnah and recommended when worshiping." }
    },
    quiz: {
      question: { id: "Apa fungsi rambut untuk kepala kita saat cuaca sedang panas terik?", en: "What is the function of hair for our head when the weather is scorching hot?" },
      options: [
        { text: { id: "Membuat kepala semakin panas", en: "Makes the head hotter" } },
        { text: { id: "Sebagai pelindung dari sinar matahari", en: "As protection from the sun's rays" } },
        { text: { id: "Menyerap air hujan", en: "Absorbing rainwater" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Setiap helai rambut di kepalamu memiliki siklus hidupnya sendiri! Rambut tumbuh dari akar (folikel) yang tersembunyi di bawah kulit kepala. Ada fase tumbuh (selama beberapa tahun), fase istirahat, dan fase rontok. Itulah mengapa normal jika ada puluhan helai rambutmu yang rontok setiap hari. Hebatnya, Allah menciptakan bentuk folikel yang berbeda-beda: folikel bundar menghasilkan rambut lurus, folikel oval menghasilkan rambut bergelombang, dan folikel pipih menghasilkan rambut keriting! Keberagaman bentuk ini sangat indah. 🧬👩‍𱁱", en: "Every strand of hair on your head has its own life cycle! Hair grows from roots (follicles) hidden under the scalp. There is a growing phase (for several years), a resting phase, and a shedding phase. That's why it's normal for dozens of hairs to fall out every day. Amazingly, Allah created different follicle shapes: round follicles produce straight hair, oval follicles produce wavy hair, and flat follicles produce curly hair! This diversity in shape is very beautiful. 🧬👩‍𱁱" },
    anatomy: [
      { part: { id: "Batang Rambut", en: "Hair Shaft" }, desc: { id: "Bagian rambut yang terlihat di luar, terbuat dari protein sel mati bernama keratin.", en: "The visible part of the hair outside, made of dead cell protein called keratin." } },
      { part: { id: "Folikel", en: "Follicle" }, desc: { id: "Kantung kecil di bawah kulit tempat rambut tumbuh.", en: "A tiny sac under the skin where the hair grows." } },
      { part: { id: "Kelenjar Sebasea", en: "Sebaceous Gland" }, desc: { id: "Kelenjar kecil penghasil minyak alami (sebum) yang membuat rambut mengkilap.", en: "A small gland producing natural oil (sebum) that makes hair shiny." } }
    ],
    wowFactor: { id: "Jika tidak pernah dipotong sama sekali, rambut manusia bisa tumbuh hingga lebih dari 1 meter! Rekor dunia rambut terpanjang lebih dari 5 meter! 📏", en: "If never cut at all, human hair can grow to over 1 meter! The world record for longest hair is over 5 meters! 📏" },
    quranVerse: {
      arabic: "خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ وَصَوَّرَكُمْ فَأَحْسَنَ صُوَرَكُمْ",
      transliteration: "Khalaqas-samaawaati wal-arda bilhaqqi wasawwarakum fa-ahsana suwarakum",
      translation: { id: "Dia menciptakan langit dan bumi dengan hak. Dia membentuk rupamu dan dibaguskan-Nya rupamu itu.", en: "He created the heavens and earth in truth and formed you and perfected your forms." }
    },
    quiz: [
      {
        question: { id: "Apa yang menyebabkan ada rambut yang lurus dan ada rambut yang keriting?", en: "What causes some hair to be straight and some to be curly?" },
        options: [
          { text: { id: "Bentuk sisir yang dipakai", en: "The shape of the comb used" } },
          { text: { id: "Perbedaan bentuk folikel rambut", en: "Differences in hair follicle shapes" } },
          { text: { id: "Sering keramas atau tidak", en: "Whether washed often or not" } }
        ],
        answerIdx: 1
      }
    ]
  }
};