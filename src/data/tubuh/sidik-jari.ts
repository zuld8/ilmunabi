import { ObjectData } from "../objects";

export const sidikJariData: ObjectData = {
  slug: "sidik-jari",
  name: { id: "Sidik Jari", en: "Fingerprint" },
  icon: "🖐️",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Dermatoglyphics",
  surahName: "Al-Qiyamah",
  surahReference: "75:3-4",
  unlockedAtPoints: 50,
  
  kosakata: [
    { arab: "بَنَانٌ", latin: "Banaan", arti: "Ujung Jari", artiEn: "Fingertip", contohAyat: "Allah menyusun kembali ujung jari." },
    { arab: "بَصْمَةٌ", latin: "Basmah", arti: "Sidik (Jari)", artiEn: "Print / Mark", contohAyat: "Sidik jari sebagai identitas." },
    { arab: "يَدٌ", latin: "Yad", arti: "Tangan", artiEn: "Hand", contohAyat: "Jari ada di tangan." },
    { arab: "خَلْقٌ", latin: "Khalq", arti: "Ciptaan", artiEn: "Creation", contohAyat: "Penciptaan manusia yang sempurna." }
  ],
  
  balita: {
    text: { id: "Coba lihat ujung jarimu... ada garis-garis berputar! Itulah sidik jari! 🖐️", en: "Look at your fingertips... there are swirling lines! That's a fingerprint! 🖐️" },
    audioTranscript: { id: "Wah! Garis di jarimu itu unik lho! Tidak ada yang punya garis sama persis sepertimu di seluruh dunia. Kamu sangat spesial!", en: "Wow! The lines on your finger are unique! No one in the whole world has the exact same lines as you. You are very special!" },
    quiz: {
      question: { id: "Di mana kita bisa melihat sidik jari?", en: "Where can we see fingerprints?" },
      options: [
        { text: { id: "Di rambut", en: "In hair" } },
        { text: { id: "Di ujung jari 🖐️", en: "On fingertips 🖐️" } },
        { text: { id: "Di lutut", en: "On knees" } }
      ],
      answerIdx: 1
    }
  },
  
  anak: {
    text: { id: "Sidik jari adalah pola garis-garis halus di kulit ujung jari yang membentuk pusaran atau lengkungan.", en: "Fingerprints are the patterns of fine lines on the skin of the fingertips forming whorls or loops." },
    facts: [
      { id: "Sidik jarimu sudah terbentuk sejak kamu masih berada di perut ibu (usia 6 bulan).", en: "Your fingerprints are formed since you were in your mother's womb (at 6 months)." },
      { id: "Tidak ada dua orang di bumi yang punya sidik jari sama, bahkan anak kembar identik sekalipun!", en: "No two people on earth have the same fingerprints, even identical twins!" },
      { id: "Garis-garis di jari ini sebenarnya berfungsi agar barang yang kita pegang tidak mudah licin/jatuh.", en: "The lines on the fingers actually function to prevent things we hold from slipping/falling." },
      { id: "Koala adalah hewan yang punya sidik jari sangat mirip dengan manusia.", en: "Koalas are animals that have fingerprints very similar to humans." },
      { id: "Polisi menggunakan sidik jari untuk menangkap penjahat karena tidak bisa dipalsukan.", en: "Police use fingerprints to catch criminals because they cannot be faked." }
    ],
    quranVerse: {
      arabic: "أَيَحْسَبُ الْإِنسَانُ أَلَّن نَّجْمَعَ عِظَامَهُ ﴿٣﴾ بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ",
      transliteration: "Ayahsabul-insanu allan najma'a 'izamah. Bala qadirina 'ala an nusawwiya bananah.",
      translation: { id: "Apakah manusia mengira bahwa Kami tidak akan mengumpulkan (kembali) tulang-belulangnya? Bahkan Kami mampu menyusun (kembali) jari-jemarinya dengan sempurna.", en: "Does man think that We will not assemble his bones? Yes. We are Able to put together in perfect order the very tips of his fingers." },
      context: { id: "Tau nggak? Dulu orang kafir tidak percaya manusia bisa dihidupkan lagi setelah hancur jadi tanah. Lalu Allah menjawab, bukan cuma tulangnya, bahkan garis-garis di ujung jarinya pun bisa Allah cetak kembali sama persis!", en: "Did you know? In the past, disbelievers didn't believe humans could be resurrected after turning to dust. Then Allah answered, not just the bones, even the lines on the fingertips can be perfectly recreated by Allah!" }
    },
    quiz: {
      question: { id: "Apakah ada dua orang di dunia yang punya sidik jari sama persis?", en: "Are there two people in the world who have exactly the same fingerprints?" },
      options: [
        { text: { id: "Ada, kalau mereka teman baik", en: "Yes, if they are best friends" } },
        { text: { id: "Ada, kalau kembar", en: "Yes, if they are twins" } },
        { text: { id: "Tidak ada sama sekali", en: "No, none at all" } },
        { text: { id: "Ada banyak sekali", en: "Yes, there are many" } }
      ],
      answerIdx: 2
    }
  },
  
  explorer: {
    text: { id: "Sidik jari bukan cuma gambar yang unik, tapi juga semacam 'barcode' alami buatan Tuhan.\n\nPola sidik jarimu tidak akan pernah berubah dari kamu bayi sampai kakek-nenek, kecuali kamu mengalami luka bakar yang sangat parah.\n\nMakanya sekarang sidik jari dipakai untuk membuka layar HP, membuat KTP, dan paspor di seluruh dunia.", en: "Fingerprints are not just unique drawings, but also a kind of natural 'barcode' made by God.\n\nYour fingerprint pattern will never change from when you were a baby to when you become a grandparent, unless you suffer severe burns.\n\nThat's why fingerprints are now used to unlock phone screens, make ID cards, and passports worldwide." },
    anatomy: [
      { part: { id: "Whorl (Pusaran)", en: "Whorl" }, desc: { id: "Pola sidik jari yang melingkar bulat seperti obat nyamuk.", en: "Fingerprint pattern that spirals circularly." } },
      { part: { id: "Loop (Sengkelit)", en: "Loop" }, desc: { id: "Pola yang melengkung dan mengarah ke satu sisi.", en: "A curved pattern that points to one side." } }
    ],
    wowFactor: { id: "Pada abad ke-7, tidak ada yang tahu mengapa Allah secara khusus menyebut 'Banaan' (ujung jari) dalam Surah Al-Qiyamah.\n\nBaru pada tahun 1880, Sir Francis Galton membuktikan secara ilmiah bahwa tidak ada dua manusia yang memiliki sidik jari sama. Sejak saat itu dunia sadar bahwa ujung jari adalah identitas paling mutlak dari seorang manusia!\n\nAllah menantang manusia dengan menyatakan kemampuan-Nya menyusun kembali detail terkecil dan terunik dari kita.", en: "In the 7th century, no one knew why Allah specifically mentioned 'Banaan' (fingertips) in Surah Al-Qiyamah.\n\nIt wasn't until 1880 that Sir Francis Galton scientifically proved that no two humans have the same fingerprints. Since then, the world realized that fingertips are the most absolute identity of a human!\n\nAllah challenged humanity by declaring His ability to reconstruct the smallest and most unique detail of us." },
    quranVerse: {
      arabic: "بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ",
      transliteration: "Bala qadirina 'ala an nusawwiya bananah",
      translation: { id: "Bahkan Kami mampu menyusun (kembali) jari-jemarinya dengan sempurna.", en: "Yes. We are Able to put together in perfect order the very tips of his fingers." }
    },
    quiz: [
      {
        question: { id: "Kapan sidik jari manusia mulai terbentuk?", en: "When do human fingerprints start forming?" },
        options: [{ text: { id: "Saat usia 5 tahun", en: "At age 5" } }, { text: { id: "Saat masih di dalam kandungan ibu", en: "While still in the mother's womb" } }, { text: { id: "Saat mulai sekolah", en: "When starting school" } }, { text: { id: "Saat belajar berjalan", en: "When learning to walk" } }],
        answerIdx: 1
      },
      {
        question: { id: "Mengapa Al-Qur'an secara spesifik menyebut 'ujung jari' saat membahas hari kebangkitan?", en: "Why does the Qur'an specifically mention 'fingertips' when discussing the day of resurrection?" },
        options: [{ text: { id: "Karena jari itu panjang", en: "Because fingers are long" } }, { text: { id: "Karena ujung jari adalah identitas paling unik setiap manusia", en: "Because fingertips are the most unique identity of every human" } }, { text: { id: "Karena jari dipakai untuk makan", en: "Because fingers are used to eat" } }, { text: { id: "Karena ujung jari paling sering terluka", en: "Because fingertips get injured most often" } }],
        answerIdx: 1
      },
      {
        question: { id: "Apa fungsi alami dari garis sidik jari?", en: "What is the natural function of fingerprint lines?" },
        options: [{ text: { id: "Membuat benda yang dipegang tidak licin (anti slip)", en: "Making held objects non-slip" } }, { text: { id: "Untuk menangkap serangga", en: "To catch insects" } }, { text: { id: "Untuk merasakan suhu panas", en: "To feel hot temperatures" } }, { text: { id: "Agar jari terlihat cantik", en: "So fingers look pretty" } }],
        answerIdx: 0
      }
    ]
  }
};
