import { ObjectData } from "../objects";

export const paruParuData: ObjectData = {
  slug: "paru-paru",
  name: { id: "Paru-Paru", en: "Lungs" },
  icon: "🫁",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Pulmo",
  surahName: "Al-An'am",
  surahReference: "6:125",
  unlockedAtPoints: 20,
  kosakata: [
    { arab: "صَدْرٌ", latin: "shadrun", arti: "Dada", artiEn: "Chest", contohAyat: "يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا" }
  ],
  balita: {
    text: { id: "Tarik napas... Fuh! Paru-paru kita membesar seperti balon! 🎈🫁", en: "Breathe in... Phew! Our lungs expand like balloons! 🎈🫁" },
    audioTranscript: { id: "Di dalam dada kita ada paru-paru. Saat kita menghirup udara, dia mengembang. Saat kita meniup, dia mengempis!", en: "Inside our chest are lungs. When we breathe in air, they expand. When we blow, they shrink!" },
    quiz: {
      question: { id: "Apa yang kita hirup dengan paru-paru?", en: "What do we breathe in with our lungs?" },
      options: [
        { text: { id: "Air", en: "Water" } },
        { text: { id: "Udara", en: "Air" } },
        { text: { id: "Tanah", en: "Dirt" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Paru-paru menyerap oksigen dari udara supaya tubuh kita punya energi. Di dalam paru-paru, ada jutaan kantong kecil seperti anggur yang bertukar gas kotor dengan gas bersih. Keren banget mesin oksigen ciptaan Allah ini!", en: "Lungs absorb oxygen from the air so our bodies have energy. Inside the lungs, there are millions of tiny sacs like grapes that exchange dirty gas for clean gas. This oxygen machine created by Allah is so cool!" },
    facts: [
      { id: "Paru-paru kiri kita sedikit lebih kecil dari paru-paru kanan untuk memberi ruang bagi jantung.", en: "Our left lung is slightly smaller than the right one to make room for the heart." },
      { id: "Kita bernapas sekitar 20.000 kali setiap hari!", en: "We breathe about 20,000 times a day!" },
      { id: "Kalau dibentangkan, luas permukaan paru-paru bisa seluas lapangan tenis!", en: "If flattened out, the surface area of the lungs could be as large as a tennis court!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Paru-paru berisi alveolus untuk pertukaran oksigen. Semakin tinggi kita naik ke atas gunung, semakin tipis oksigennya, membuat dada kita terasa sesak karena paru-paru bekerja ekstra keras. Masya Allah, fakta sains tentang sesaknya dada di tempat tinggi ini sudah disebutkan dalam Al-Qur'an 1400 tahun lalu!", en: "Lungs contain alveoli for oxygen exchange. The higher we climb a mountain, the thinner the oxygen, making our chests feel tight because our lungs work extra hard. Mashallah, this scientific fact about chest tightness at high altitudes was mentioned in the Quran 1400 years ago!" },
    quranVerse: {
      arabic: "وَمَن يُرِدْ أَن يُضِلَّهُ يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ",
      transliteration: "Wa may yurid an yudhillahuu yaj'al shadrahuu dhayyiqan harajan ka annamaa yashsha'adu fis-samaa'",
      translation: { id: "...dan barangsiapa yang dikehendaki Allah kesesatannya, niscaya Allah menjadikan dadanya sesak lagi sempit, seolah-olah ia sedang mendaki langit.", en: "...and whoever He wants to misguide - He makes his breast tight and constricted as though he were climbing into the sky." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};