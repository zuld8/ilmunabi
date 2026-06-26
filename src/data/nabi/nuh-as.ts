// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const nuhAsData: NabiData = {
  slug: "nuh-as",
  name: { id: "Nabi Nuh AS", en: "Prophet Nuh AS" },
  icon: "🚢",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Nuh:1",
  storyShort: {
    id: "Nabi yang membangun kapal raksasa untuk selamat dari banjir besar.",
    en: "The prophet who built a giant ship to survive a great flood."
  },
  storyFull: {
    id: "Nabi Nuh AS berdakwah selama 950 tahun, tapi sangat sedikit yang mau beriman. Ketika kaumnya semakin durhaka, Allah memerintahkan Nabi Nuh membuat kapal besar di atas bukit. Saat banjir bandang yang sangat besar datang, hanya pengikut Nabi Nuh dan hewan-hewan yang naik kapal yang selamat.",
    en: "Prophet Nuh AS preached for 950 years, but very few believed. When his people became more disobedient, Allah commanded Prophet Nuh to build a large ship on a hill. When the massive flash flood came, only the followers of Prophet Nuh and the animals that boarded the ship survived."
  },
  miracles: [
    { id: "Membangun kapal raksasa yang sangat kuat dengan panduan Allah.", en: "Building a very strong giant ship with Allah's guidance." },
    { id: "Selamat dari banjir bandang terbesar yang menutupi bumi.", en: "Surviving the greatest flash flood that covered the earth." }
  ],
  characterTraits: [
    { trait: { id: "Pekerja Keras", en: "Hardworking" }, desc: { id: "Membuat kapal raksasa tanpa kenal lelah", en: "Tirelessly built the giant ship" } },
    { trait: { id: "Pantang Menyerah", en: "Never Gives Up" }, desc: { id: "Berdakwah selama 950 tahun", en: "Preached for 950 years" } },
    { trait: { id: "Taat Perintah", en: "Obedient" }, desc: { id: "Melaksanakan perintah Allah meski diejek kaumnya", en: "Carried out Allah's command despite being mocked by his people" } }
  ],
  timeline: [
    { yearOrAge: "Awal Berdakwah", title: { id: "Dakwah Tanpa Henti", en: "Relentless Preaching" }, desc: { id: "Berdakwah siang malam", en: "Preached day and night" } },
    { yearOrAge: "Masa Pembuatan Kapal", title: { id: "Membuat Bahtera", en: "Building the Ark" }, desc: { id: "Membuat kapal raksasa di atas bukit", en: "Built a giant ship on a hill" } },
    { yearOrAge: "Banjir Besar", title: { id: "Banjir Bandang", en: "The Great Flood" }, desc: { id: "Bumi tenggelam oleh air", en: "The earth was drowned by water" } }
  ],
  dailyLifeConnection: {
    id: "Tetaplah berbuat baik dan taat kepada Allah, walaupun ada teman yang mengejek kita. Kesabaran Nabi Nuh luar biasa!",
    en: "Keep doing good and obey Allah, even if friends mock us. Prophet Nuh's patience was extraordinary!"
  }
};

