// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const ismailAsData: NabiData = {
  slug: "ismail-as",
  name: { id: "Nabi Ismail AS", en: "Prophet Ismail AS" },
  icon: "💧",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "As-Saffat:102",
  storyShort: {
    id: "Nabi yang dari hentakan kakinya muncul mata air Zamzam yang tak pernah kering.",
    en: "The prophet from whose foot stomp appeared the Zamzam spring that never dries up."
  },
  storyFull: {
    id: "Ketika masih bayi, Ismail dan ibunya (Siti Hajar) ditinggalkan di gurun pasir Makkah yang gersang. Saat kehausan, dari hentakan kaki mungil bayi Ismail muncullah mata air Zamzam. Saat remaja, beliau dengan ikhlas mematuhi perintah Allah untuk disembelih oleh ayahnya (Nabi Ibrahim AS), namun Allah menggantinya dengan seekor domba besar.",
    en: "When he was a baby, Ismail and his mother (Siti Hajar) were left in the barren desert of Mecca. When thirsty, from the stomp of baby Ismail's tiny feet appeared the Zamzam spring. As a teenager, he willingly obeyed Allah's command to be sacrificed by his father (Prophet Ibrahim AS), but Allah replaced him with a large ram."
  },
  miracles: [
    { id: "Mata air Zamzam muncul dari bawah hentakan kakinya saat bayi.", en: "The Zamzam spring appeared from under his foot stomp when he was a baby." },
    { id: "Keselamatannya saat akan disembelih digantikan oleh domba dari surga.", en: "His safety when about to be sacrificed was replaced by a ram from heaven." }
  ],
  characterTraits: [
    { trait: { id: "Sabar", en: "Patient" }, desc: { id: "Rela berkorban untuk menjalankan perintah Allah", en: "Willing to sacrifice to carry out Allah's commands" } },
    { trait: { id: "Berbakti", en: "Filial" }, desc: { id: "Sangat taat kepada orang tua (Nabi Ibrahim dan Siti Hajar)", en: "Very obedient to his parents (Prophet Ibrahim and Siti Hajar)" } },
    { trait: { id: "Tawakkal", en: "Trust in Allah" }, desc: { id: "Yakin bahwa Allah selalu memberikan yang terbaik", en: "Believed that Allah always gives the best" } }
  ],
  timeline: [
    { yearOrAge: "Masa Bayi", title: { id: "Mata Air Zamzam", en: "Zamzam Spring" }, desc: { id: "Zamzam memancar di tengah gurun", en: "Zamzam gushed forth in the middle of the desert" } },
    { yearOrAge: "Masa Remaja", title: { id: "Ujian Qurban", en: "Test of Sacrifice" }, desc: { id: "Digantikan dengan domba (Idul Adha)", en: "Replaced with a ram (Eid al-Adha)" } },
    { yearOrAge: "Masa Dewasa", title: { id: "Membangun Ka'bah", en: "Building Kaaba" }, desc: { id: "Membantu ayahanda membangun Ka'bah", en: "Helped his father build the Kaaba" } }
  ],
  dailyLifeConnection: {
    id: "Kita harus patuh pada perintah Allah dan berbakti kepada orang tua, seperti Nabi Ismail yang sangat menurut pada ayahnya.",
    en: "We must obey Allah's commands and be filial to our parents, like Prophet Ismail who was very obedient to his father."
  }
};

