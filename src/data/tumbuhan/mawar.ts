import { ObjectData } from "../objects";

export const mawarData: ObjectData = {
  slug: "mawar",
  name: { id: "Mawar", en: "Rose" },
  icon: "🌹",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Rosa",
  surahName: "Al-Baqarah",
  surahReference: "2:164",
  unlockedAtPoints: 120,
  kosakata: [
    { arab: "وَرْدَةٌ", latin: "wardatun", arti: "Mawar", artiEn: "Rose", contohAyat: "Mawar merah merona." }
  ],
  balita: {
    text: { id: "Mawar yang merah, cantik dan sangat harum wanginya! 🌹", en: "Red roses, beautiful and very fragrant! 🌹" },
    audioTranscript: { id: "Bunga mawar warnanya sangat menyala! Tapi hati-hati ya, di batang bunga mawar ada duri-duri kecil yang tajam.", en: "Rose flowers are very bright in color! But be careful, on the stem of the rose there are small sharp thorns." },
    quiz: {
      question: { id: "Apa yang harus kita waspadai kalau mau memegang batang bunga mawar?", en: "What should we watch out for if we want to hold a rose stem?" },
      options: [
        { text: { id: "Daunnya", en: "Its leaves" } },
        { text: { id: "Durinya yang tajam", en: "Its sharp thorns" } },
        { text: { id: "Akarnya", en: "Its roots" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kenapa mawar punya duri? Duri mawar sebenarnya untuk melindungi diri dari hewan herbivora yang mau memakan bunganya! Mawar juga punya vitamin C di bagian 'rose hip'-nya lho.", en: "Why do roses have thorns? Rose thorns are actually to protect themselves from herbivorous animals that want to eat their flowers! Roses also have vitamin C in their 'rose hip'." },
    facts: [
      { id: "Mawar tertua di dunia tumbuh di Jerman dan berusia lebih dari 1.000 tahun!", en: "The oldest rose in the world grows in Germany and is over 1,000 years old!" },
      { id: "Ada ribuan jenis spesies mawar hasil persilangan di seluruh dunia.", en: "There are thousands of species of crossbred roses around the world." },
      { id: "Air mawar sering dipakai untuk campuran makanan karena harum.", en: "Rose water is often used for food mixtures because of its fragrance." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Keindahan mawar sangat termasyhur. Dalam Al-Qur'an, Allah mengumpamakan langit yang terbelah pada hari kiamat akan terlihat merah memukau bagaikan mawar (wardah) atau kilapan minyak. Sains pun menemukan fenomena nebula di luar angkasa yang mirip mawar raksasa mekar!", en: "The beauty of the rose is very famous. In the Quran, Allah compares the splitting of the sky on the day of judgment to look stunningly red like a rose (wardah) or gleaming oil. Science has even found a nebula phenomenon in space that looks like a giant blooming rose!" },
    quranVerse: {
      arabic: "فَإِذَا انْشَقَّتِ السَّمَاءُ فَكَانَتْ وَرْدَةً كَالدِّهَانِ",
      transliteration: "Fa-idhan shaqqatis-samā'u fakānat wardatan kaddihān",
      translation: { id: "Maka apabila langit telah terbelah dan menjadi merah mawar seperti (kilapan) minyak.", en: "And when the heaven is split open and becomes rose-colored like oil." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
