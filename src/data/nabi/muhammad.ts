// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const muhammadData: NabiData = {
  slug: "nabi-muhammad",
  name: {
    id: "Nabi Muhammad SAW",
    en: "Prophet Muhammad PBUH",
  },
  icon: "🌙",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Nabi terakhir, manusia paling mulia yang membawa Al-Qur'an sebagai rahmat seluruh alam.",
    en: "The last Prophet, the most noble human who brought the Qur'an as a mercy to all worlds.",
  },
  storyFull: {
    id: "Nabi Muhammad SAW adalah penutup para nabi. Sejak kecil terkenal sangat jujur hingga diberi gelar Al-Amin (Dapat Dipercaya). Beliau membawa ajaran Islam yang penuh kedamaian dan menyempurnakan akhlak manusia. Mukjizat terbesarnya adalah kitab suci Al-Qur'an yang berlaku hingga akhir zaman.",
    en: "Prophet Muhammad PBUH is the seal of the prophets. Since childhood, he was known for being very honest, earning the title Al-Amin (The Trustworthy). He brought the peaceful teachings of Islam and perfected human character. His greatest miracle is the holy book Al-Qur'an which remains valid until the end of time.",
  },
  miracles: [
    { id: "Al-Qur'an, kitab suci dengan keindahan dan mukjizat sains yang tak tertandingi.", en: "The Qur'an, a holy book with unmatched beauty and scientific miracles." },
    { id: "Isra' Mi'raj, perjalanan malam hari ke langit ketujuh untuk menerima perintah shalat 5 waktu.", en: "Isra' Mi'raj, a night journey to the seventh heaven to receive the command of 5 daily prayers." }
  ],
  characterTraits: [
    { trait: { id: "Al-Amin (Terpercaya)", en: "Al-Amin (Trustworthy)" }, desc: { id: "Tidak pernah berbohong seumur hidupnya, bahkan musuh pun percaya padanya.", en: "Never lied in his life, even enemies trusted him." } },
    { trait: { id: "Rahmatan Lil 'Alamin", en: "Mercy to the Worlds" }, desc: { id: "Penuh kasih sayang kepada anak-anak, hewan, tanaman, dan semua makhluk.", en: "Full of compassion for children, animals, plants, and all creatures." } },
    { trait: { id: "Pemaaf", en: "Forgiving" }, desc: { id: "Memaafkan penduduk Thaif yang melemparinya batu, malah mendoakan mereka.", en: "Forgave the people of Ta'if who threw stones at him, and prayed for them instead." } }
  ],
  timeline: [
    { yearOrAge: "Muda", title: { id: "Gelar Al-Amin", en: "Title of Al-Amin" }, desc: { id: "Menjadi pedagang yang paling jujur dan dipercaya seluruh kota Mekah.", en: "Became the most honest and trusted merchant in the whole city of Mecca." } },
    { yearOrAge: "Wahyu", title: { id: "Gua Hira", en: "Cave of Hira" }, desc: { id: "Menerima wahyu pertama (Iqra') dari Malaikat Jibril di usia 40 tahun.", en: "Received the first revelation (Iqra') from Angel Jibril at age 40." } },
    { yearOrAge: "Hijrah", title: { id: "Hijrah ke Madinah", en: "Migration to Medina" }, desc: { id: "Berpindah ke kota Madinah untuk membangun masyarakat Islam yang kuat.", en: "Moved to the city of Medina to build a strong Islamic society." } }
  ],
  dailyLifeConnection: {
    id: "Nabi Muhammad SAW adalah idola terbaik kita! Yuk kita ikuti sifat jujurnya dan rajin membaca shalawat.",
    en: "Prophet Muhammad PBUH is our best role model! Let's follow his honesty and diligently recite salawat.",
  },
  surahReference: "Al-Ahzab 33:21",
};
