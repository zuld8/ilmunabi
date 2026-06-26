// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const shalehAsData: NabiData = {
  slug: "shaleh-as",
  name: { id: "Nabi Shaleh AS", en: "Prophet Shaleh AS" },
  icon: "🐪",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Al-A'raf:73",
  storyShort: {
    id: "Nabi yang mengeluarkan unta betina dari dalam batu besar.",
    en: "The prophet who brought out a female camel from a large rock."
  },
  storyFull: {
    id: "Kaum Tsamud sangat ahli memahat gunung menjadi istana, tetapi mereka menyekutukan Allah. Ketika mereka meminta bukti kenabian, Allah mengabulkan doa Nabi Shaleh dengan memunculkan unta betina yang besar dari dalam batu. Sayangnya, kaum Tsamud malah menyembelih unta tersebut dan akhirnya dihancurkan oleh petir dan gempa bumi dahsyat.",
    en: "The Thamud people were highly skilled in carving mountains into palaces, but they associated partners with Allah. When they asked for proof of prophethood, Allah answered Prophet Shaleh's prayer by bringing forth a large female camel from a rock. Unfortunately, the Thamud people slaughtered the camel instead and were eventually destroyed by a devastating thunderbolt and earthquake."
  },
  miracles: [
    { id: "Mengeluarkan unta betina dari batu karang yang keras.", en: "Bringing forth a female camel from a hard rock." },
    { id: "Unta tersebut menghasilkan susu yang sangat banyak untuk seluruh kaum.", en: "The camel produced abundant milk for the whole tribe." }
  ],
  characterTraits: [
    { trait: { id: "Pemaaf", en: "Forgiving" }, desc: { id: "Tetap mendoakan kebaikan bagi kaumnya", en: "Kept praying for the good of his people" } },
    { trait: { id: "Penyayang Binatang", en: "Animal Lover" }, desc: { id: "Sangat peduli pada keselamatan unta mukjizatnya", en: "Deeply cared for the safety of his miraculous camel" } },
    { trait: { id: "Sabar", en: "Patient" }, desc: { id: "Sabar menghadapi kaum Tsamud yang keras kepala", en: "Patient in facing the stubborn Thamud people" } }
  ],
  timeline: [
    { yearOrAge: "Masa Dakwah", title: { id: "Dakwah ke Kaum Tsamud", en: "Preaching to Thamud" }, desc: { id: "Mengajak kembali menyembah Allah", en: "Calling them back to worship Allah" } },
    { yearOrAge: "Mukjizat", title: { id: "Unta dari Batu", en: "Camel from Rock" }, desc: { id: "Batu terbelah mengeluarkan unta besar", en: "The rock split, bringing forth a large camel" } },
    { yearOrAge: "Azab", title: { id: "Petir Dahsyat", en: "Devastating Thunderbolt" }, desc: { id: "Petir menghancurkan kaum Tsamud", en: "Thunderbolt destroyed the Thamud people" } }
  ],
  dailyLifeConnection: {
    id: "Kita harus menyayangi hewan ciptaan Allah dan tidak boleh menyakiti mereka! Hewan juga makhluk Allah yang harus dijaga.",
    en: "We must love the animals created by Allah and must not hurt them! Animals are also Allah's creatures that must be protected."
  }
};

