// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const ilyasData: NabiData = {
  slug: "nabi-ilyas",
  name: {
    id: "Nabi Ilyas A.S.",
    en: "Prophet Ilyas A.S.",
  },
  icon: "🏜️",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Nabi yang berdakwah di tengah kekeringan panjang karena kaumnya menyembah berhala Baal.",
    en: "The Prophet who preached during a long drought because his people worshipped the idol Baal.",
  },
  storyFull: {
    id: "Nabi Ilyas A.S. diutus kepada kaum Bani Israil yang menyembah berhala raksasa bernama Baal. Karena mereka sangat keras kepala, Allah mendatangkan kemarau dan kekeringan panjang. Setelah mereka bertaubat, Allah menurunkan hujan berkat doa Nabi Ilyas.",
    en: "Prophet Ilyas A.S. was sent to the Children of Israel who worshipped a giant idol named Baal. Because they were very stubborn, Allah brought a long drought and famine. After they repented, Allah sent down rain through the prayer of Prophet Ilyas.",
  },
  miracles: [
    { id: "Doanya menghentikan dan mendatangkan hujan atas izin Allah.", en: "His prayer stopped and brought rain by Allah's permission." },
    { id: "Diselamatkan Allah dari kejaran musuh dengan bersembunyi di dalam gua.", en: "Saved by Allah from enemy pursuit by hiding in a cave." }
  ],
  characterTraits: [
    { trait: { id: "Gagah Berani", en: "Brave" }, desc: { id: "Berani menasihati raja zhalim dan penyembah berhala terang-terangan.", en: "Bravely advised the unjust king and idol worshippers openly." } },
    { trait: { id: "Pantang Menyerah", en: "Relentless" }, desc: { id: "Terus berdakwah walau diancam dan diusir berkali-kali.", en: "Continued preaching despite being threatened and chased away repeatedly." } },
    { trait: { id: "Suka Menolong", en: "Helpful" }, desc: { id: "Mendoakan kaumnya agar selamat dari kekeringan saat mereka bertaubat.", en: "Prayed for his people to be saved from the drought when they repented." } }
  ],
  timeline: [
    { yearOrAge: "Dakwah", title: { id: "Menentang Baal", en: "Opposing Baal" }, desc: { id: "Menasihati kaumnya agar meninggalkan berhala Baal yang terbuat dari emas.", en: "Advised his people to abandon the idol Baal which was made of gold." } },
    { yearOrAge: "Ujian", title: { id: "Kemarau Panjang", en: "Long Drought" }, desc: { id: "Kaumnya ditimpa kekeringan bertahun-tahun sebagai peringatan dari Allah.", en: "His people suffered a drought for years as a warning from Allah." } },
    { yearOrAge: "Berkah", title: { id: "Hujan Turun", en: "Rain Falls" }, desc: { id: "Allah menurunkan hujan yang subur setelah kaumnya menyadari kesalahan.", en: "Allah sent down fertile rain after his people realized their mistakes." } }
  ],
  dailyLifeConnection: {
    id: "Kita harus selalu bersyukur atas air hujan, dan tidak boleh menyembah selain Allah SWT.",
    en: "We must always be grateful for rainwater, and must not worship anything other than Allah SWT.",
  },
  surahReference: "As-Saffat 37:123-132",
};
