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
  unlockedAtPoints: 140,
  kosakata: [
    { arab: "بَصْمَةٌ", latin: "Basmatun", arti: "Sidik Jari", artiEn: "Fingerprint", contohAyat: "Balaa qaadireena 'alaa an nusawwiya banaanah (Bahkan Kami mampu menyusun (kembali) ujung jari-jarinya dengan sempurna)." }
  ],
  balita: {
    text: { id: "Coba lihat ujung jarimu dari dekat! Ada garis-garis muter seperti labirin kecil. Itu namanya sidik jari. Lucu sekali ya gambarnya! 🔍🖐️", en: "Try looking at your fingertips closely! There are swirling lines like a little maze. That's called a fingerprint. The picture is so cute! 🔍🖐️" },
    audioTranscript: { id: "Setiap orang punya sidik jari. Sidik jari itu seperti stempel rahasia milikmu.", en: "Everyone has a fingerprint. A fingerprint is like your secret stamp." },
    quiz: {
      question: { id: "Bentuk sidik jari mirip seperti apa?", en: "What does a fingerprint pattern look like?" },
      options: [
        { text: { id: "Kotak catur", en: "Chessboard" } },
        { text: { id: "Garis muter/labirin", en: "Swirling lines/maze" } },
        { text: { id: "Segitiga besar", en: "Big triangle" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Garis-garis halus di ujung jari kita (sidik jari) sangat spesial. Gunanya agar benda yang kita pegang tidak gampang licin dan jatuh. Hebatnya lagi, setiap manusia di bumi punya gambar sidik jari yang berbeda-beda! Bukti kebesaran Allah yang menciptakan miliaran manusia tanpa ada satupun yang sama. 🌍✨", en: "Did you know? The fine lines on our fingertips (fingerprints) are very special. Their use is so the things we hold don't slip and fall easily. Even more amazing, every human on earth has a different fingerprint picture! A proof of Allah's greatness who created billions of humans without a single one being the same. 🌍✨" },
    facts: [
      { id: "Bahkan anak kembar identik yang wajahnya sangat mirip, sidik jarinya tetap BERBEDA! 👯‍♂️", en: "Even identical twins whose faces look exactly alike, their fingerprints are still DIFFERENT! 👯‍♂️" },
      { id: "Sidik jari terbentuk saat bayi masih berada di dalam perut ibu (rahim). 🤰", en: "Fingerprints are formed while the baby is still inside the mother's belly (womb). 🤰" },
      { id: "Sidik jari tidak akan pernah berubah bentuknya seumur hidup kita. 🕰️", en: "Fingerprints will never change their shape our entire lifetime. 🕰️" }
    ],
    quranVerse: {
      arabic: "بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ",
      transliteration: "Balaa qaadireena 'alaa an nusawwiya banaanah",
      translation: { id: "Bukan demikian, sebenarnya Kami kuasa menyusun (kembali) ujung jari-jarinya dengan sempurna.", en: "Yes. [We are] Able [even] to proportion his fingertips." },
      context: { id: "Al-Qur'an secara ajaib menyebutkan tentang ujung jari manusia berabad-abad sebelum ilmu sidik jari ditemukan.", en: "The Quran miraculously mentioned human fingertips centuries before fingerprint science was discovered." }
    },
    quiz: {
      question: { id: "Apakah ada dua orang di dunia ini yang sidik jarinya sama persis?", en: "Are there two people in this world with exactly the same fingerprints?" },
      options: [
        { text: { id: "Ya, anak kembar", en: "Yes, twins" } },
        { text: { id: "Tidak ada", en: "No one" } },
        { text: { id: "Ya, ayah dan anak", en: "Yes, father and child" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Dulu, orang mengira ujung jari tidak punya arti khusus. Tapi pada tahun 1800-an, sains menemukan bahwa tidak ada dua sidik jari yang identik. Padahal 14 abad yang lalu, Allah SWT menantang manusia di dalam Al-Qur'an: bahwa kelak di hari kebangkitan, Allah mampu menyusun kembali tubuh manusia, bahkan sampai ke detail ujung jari-jarinya (banaanah)! Maha Suci Allah Al-Alim (Maha Mengetahui) atas desain biometrik tercanggih ini, yang sekarang kita gunakan untuk membuka layar HP. 📱🔍", en: "In the past, people thought fingertips had no special meaning. But in the 1800s, science discovered that no two fingerprints are identical. Yet 14 centuries ago, Allah SWT challenged humans in the Quran: that on the day of resurrection, Allah is able to reconstruct the human body, even down to the detail of his fingertips (banaanah)! Glory to Allah Al-Alim (The All-Knowing) for this most advanced biometric design, which we now use to unlock our phone screens. 📱🔍" },
    anatomy: [
      { part: { id: "Pola Loop (Sengkelit)", en: "Loop Pattern" }, desc: { id: "Pola melengkung seperti tetesan air. Paling umum dimiliki manusia.", en: "Curved pattern like a water drop. Most commonly had by humans." } },
      { part: { id: "Pola Whorl (Pusaran)", en: "Whorl Pattern" }, desc: { id: "Pola yang melingkar-lingkar seperti pusaran air di tengah.", en: "A pattern that circles around like a whirlpool in the center." } },
      { part: { id: "Pola Arch (Busur)", en: "Arch Pattern" }, desc: { id: "Pola bergelombang mirip seperti bentuk bukit atau gunung kecil.", en: "A wavy pattern resembling the shape of a small hill or mountain." } }
    ],
    wowFactor: { id: "Koala adalah hewan yang memiliki sidik jari sangat mirip dengan manusia, bahkan ilmuwan harus menggunakan mikroskop khusus untuk membedakannya! 🐨", en: "Koalas are animals that have fingerprints very similar to humans, even scientists must use special microscopes to tell them apart! 🐨" },
    quranVerse: {
      arabic: "أَيَحْسَبُ الْإِنسَانُ أَلَّن نَّجْمَعَ عِظَامَهُ ۝ بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ",
      transliteration: "Ayahsabul insaanu allan najma'a 'izaamah. Balaa qaadireena 'alaa an nusawwiya banaanah.",
      translation: { id: "Apakah manusia mengira, bahwa Kami tidak akan mengumpulkan (kembali) tulang belulangnya? Bukan demikian, sebenarnya Kami kuasa menyusun (kembali) ujung jari-jarinya dengan sempurna.", en: "Does man think that We will not assemble his bones? Yes. [We are] Able [even] to proportion his fingertips." }
    },
    quiz: [
      {
        question: { id: "Ayat Al-Qur'an (Al-Qiyamah) secara ajaib menyoroti bagian tubuh mana yang sangat detail?", en: "The Quran verse (Al-Qiyamah) miraculously highlights which highly detailed body part?" },
        options: [
          { text: { id: "Ujung Rambut", en: "Hair ends" } },
          { text: { id: "Ujung Jari (Banaanah)", en: "Fingertips (Banaanah)" } },
          { text: { id: "Kelopak Mata", en: "Eyelids" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
