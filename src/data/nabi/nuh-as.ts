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
  storyShort: { id: "Nabi yang membangun bahtera raksasa untuk menyelamatkan makhluk hidup dari banjir besar.", en: "The prophet who built a giant ark to save living creatures from a great flood." },
  storyFull: { id: "Nabi Nuh AS berdakwah selama 950 tahun, tapi sangat sedikit yang mau mendengarkan. Atas perintah Allah, beliau membuat kapal raksasa di atas bukit, yang diejek oleh orang-orang. Saat banjir besar yang dahsyat datang, hanya mereka yang beriman dan sepasang hewan dari setiap jenis yang selamat di dalam kapal. Ini mengajarkan pentingnya kesabaran luar biasa dan ketaatan kepada Allah.", en: "Prophet Nuh AS preached for 950 years, but very few listened. By Allah's command, he built a giant ship on a hill, which people mocked. When the devastating great flood came, only the believers and a pair of each kind of animal were saved in the ship. This teaches the importance of extraordinary patience and obedience to Allah." },
  miracles: [
    { id: "Membangun kapal raksasa tanpa teknologi modern", en: "Building a giant ship without modern technology" },
    { id: "Selamat dari banjir bandang seluruh bumi", en: "Surviving a global flash flood" }
  ],
  characterTraits: [
    { trait: { id: "Sabar", en: "Patient" }, desc: { id: "Terus berdakwah meski diejek", en: "Kept preaching despite being mocked" } },
    { trait: { id: "Pekerja Keras", en: "Hard worker" }, desc: { id: "Membangun kapal besar tanpa lelah", en: "Built a large ship tirelessly" } }
  ],
  timeline: [
    { yearOrAge: "Berdakwah", title: { id: "Berdakwah 950 Tahun", en: "Preaching for 950 Years" }, desc: { id: "Mengajak umatnya menyembah Allah", en: "Inviting his people to worship Allah" } },
    { yearOrAge: "Membangun", title: { id: "Membuat Bahtera", en: "Building the Ark" }, desc: { id: "Membuat kapal sesuai petunjuk Allah", en: "Built a ship according to Allah's guidance" } },
    { yearOrAge: "Banjir", title: { id: "Banjir Besar", en: "Great Flood" }, desc: { id: "Banjir menyapu bersih orang yang ingkar", en: "A flood wiped out the disbelievers" } }
  ],
  dailyLifeConnection: { id: "Kalau kita melakukan kebaikan tapi diejek teman, jangan menyerah! Tetaplah sabar seperti Nabi Nuh.", en: "If we do good but are mocked by friends, don't give up! Stay patient like Prophet Nuh." }
};
