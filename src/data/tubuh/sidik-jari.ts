import { ObjectData } from "../objects";

export const sidikJariData: ObjectData = {
  slug: "sidik-jari",
  name: { id: "Sidik Jari", en: "Fingerprint" },
  icon: "☝️",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Dermatoglyphics",
  surahName: "Al-Qiyamah",
  surahReference: "75:3-4",
  unlockedAtPoints: 40,
  kosakata: [
    { arab: "بَنَانٌ", latin: "banaanun", arti: "Ujung jari", artiEn: "Fingertip", contohAyat: "بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ" }
  ],
  balita: {
    text: { id: "Coba lihat ujung jarimu! Ada garis-garis muter lho! ☝️", en: "Look at your fingertips! There are swirly lines! ☝️" },
    audioTranscript: { id: "Garis-garis muter ini namanya sidik jari. Sidik jari kamu beda sama punya Ayah atau Ibu. Punya kamu khusus cuma satu di dunia!", en: "These swirly lines are called fingerprints. Yours are different from Dad's or Mom's. Yours are special and the only one in the world!" },
    quiz: {
      question: { id: "Apakah sidik jari kita sama dengan teman kita?", en: "Are our fingerprints the same as our friends'?" },
      options: [
        { text: { id: "Beda", en: "Different" } },
        { text: { id: "Sama persis", en: "Exactly the same" } },
        { text: { id: "Bisa ganti-ganti", en: "It changes" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Sidik jari kita dibentuk sejak kita masih ada di dalam perut ibu! Garis-garis ini fungsinya keren banget, bikin tangan kita ngga gampang kepleset pas pegang gelas atau mainan. Dan nggak ada satu orang pun di bumi yang sidik jarinya sama persis denganmu!", en: "Our fingerprints are formed when we are still in our mother's womb! These lines are awesome, they make sure our hands don't slip when holding a glass or toys. And there is not a single person on earth whose fingerprints are exactly like yours!" },
    facts: [
      { id: "Bahkan anak kembar identik punya sidik jari yang berbeda!", en: "Even identical twins have different fingerprints!" },
      { id: "Sidik jari tidak akan berubah seumur hidup kita.", en: "Fingerprints will never change throughout our lives." },
      { id: "Garis ini membantu kita merasakan tekstur barang.", en: "These lines help us feel the texture of objects." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Sidik jari (dermatoglyphics) adalah identitas paling akurat pada manusia. Baru pada akhir abad ke-19 sains menemukan bahwa sidik jari itu unik untuk tiap individu. Padahal 1400 tahun lalu, Al-Qur'an dengan luar biasa menyebutkan bahwa Allah mampu menyusun kembali ujung jari-jemari manusia dengan sempurna di hari kebangkitan!", en: "Fingerprints (dermatoglyphics) are the most accurate identity markers in humans. It was only in the late 19th century that science discovered fingerprints are unique to each individual. Yet 1400 years ago, the Quran astonishingly mentioned that Allah is able to reconstruct the very tips of human fingers perfectly on the Day of Resurrection!" },
    quranVerse: {
      arabic: "بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ",
      transliteration: "Balaa qaadiriina 'alaa an nusawwiya banaanah",
      translation: { id: "Bukan demikian, sebenarnya Kami kuasa menyusun (kembali) jari jemarinya dengan sempurna.", en: "Yes. [We are] Able [even] to proportion his fingertips." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
