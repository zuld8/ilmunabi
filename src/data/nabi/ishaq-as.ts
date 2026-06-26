// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const ishaqAsData: NabiData = {
  slug: "ishaq-as",
  name: { id: "Nabi Ishaq AS", en: "Prophet Ishaq AS" },
  icon: "🐑",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "As-Saffat:112",
  storyShort: {
    id: "Nabi yang lahir dari ibu yang sudah sangat tua sebagai mukjizat.",
    en: "The prophet who was born to a very old mother as a miracle."
  },
  storyFull: {
    id: "Nabi Ishaq AS adalah putra kedua Nabi Ibrahim AS dari istrinya, Siti Sarah. Kelahirannya adalah mukjizat besar, karena ibunya sudah sangat tua dan sebelumnya tidak bisa memiliki anak. Nabi Ishaq tumbuh menjadi nabi yang memimpin kaumnya di Palestina dengan penuh kasih sayang dan kedamaian.",
    en: "Prophet Ishaq AS was the second son of Prophet Ibrahim AS from his wife, Siti Sarah. His birth was a great miracle, because his mother was very old and previously unable to have children. Prophet Ishaq grew up to be a prophet who led his people in Palestine with deep affection and peace."
  },
  miracles: [
    { id: "Lahir dari orang tua yang sudah sangat lanjut usia.", en: "Born to parents who were already very old." },
    { id: "Menjadi leluhur dari banyak nabi-nabi dari Bani Israil.", en: "Became the ancestor of many prophets from the Children of Israel." }
  ],
  characterTraits: [
    { trait: { id: "Penyayang", en: "Affectionate" }, desc: { id: "Sangat menyayangi keluarga dan umatnya", en: "Deeply cared for his family and his people" } },
    { trait: { id: "Sabar", en: "Patient" }, desc: { id: "Menghadapi berbagai ujian berumah tangga dengan sabar", en: "Faced various household tests patiently" } },
    { trait: { id: "Ahli Ibadah", en: "Devout Worshipper" }, desc: { id: "Selalu beribadah siang dan malam", en: "Always worshipped day and night" } }
  ],
  timeline: [
    { yearOrAge: "Kabar Gembira", title: { id: "Tamu Malaikat", en: "Angel Guests" }, desc: { id: "Malaikat membawa kabar kelahirannya", en: "Angels brought the news of his birth" } },
    { yearOrAge: "Masa Muda", title: { id: "Membantu Ayah", en: "Helping Father" }, desc: { id: "Belajar dakwah dari Nabi Ibrahim", en: "Learned preaching from Prophet Ibrahim" } },
    { yearOrAge: "Masa Tua", title: { id: "Mendidik Anak", en: "Educating Children" }, desc: { id: "Mendidik Yaqub menjadi nabi", en: "Educated Yaqub to become a prophet" } }
  ],
  dailyLifeConnection: {
    id: "Tidak ada yang mustahil bagi Allah! Teruslah berdoa dengan yakin, seperti doa Nabi Ibrahim yang dikabulkan.",
    en: "Nothing is impossible for Allah! Keep praying with certainty, like Prophet Ibrahim's prayer that was answered."
  }
};

