// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const ishaqAsData: NabiData = {
  slug: "ishaq-as",
  name: { id: "Nabi Ishaq AS", en: "Prophet Ishaq AS" },
  icon: "🌟",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Hud:71",
  storyShort: { id: "Putra Nabi Ibrahim yang membawa kabar gembira.", en: "The son of Prophet Ibrahim who brought glad tidings." },
  storyFull: { id: "Nabi Ishaq AS adalah putra dari Nabi Ibrahim AS dan Siti Sarah. Kelahirannya adalah mukjizat besar, karena Siti Sarah sudah sangat tua ketika malaikat datang membawa kabar gembira bahwa ia akan melahirkan anak yang cerdas. Nabi Ishaq tumbuh menjadi rasul yang bijaksana dan melahirkan keturunan yang juga menjadi nabi, yaitu Nabi Yaqub AS. Beliau menyebarkan agama di wilayah Palestina.", en: "Prophet Ishaq AS is the son of Prophet Ibrahim AS and Siti Sarah. His birth was a great miracle, because Siti Sarah was very old when the angels came bringing the glad tidings that she would give birth to a smart child. Prophet Ishaq grew into a wise messenger and produced descendants who also became prophets, namely Prophet Yaqub AS. He spread religion in the Palestine region." },
  miracles: [
    { id: "Lahir dari ibu yang sudah sangat lanjut usia", en: "Born from a very elderly mother" }
  ],
  characterTraits: [
    { trait: { id: "Cerdas", en: "Smart" }, desc: { id: "Sangat pintar sejak kecil", en: "Very smart since childhood" } },
    { trait: { id: "Damai", en: "Peaceful" }, desc: { id: "Menyebarkan agama dengan kedamaian", en: "Spreading religion with peace" } }
  ],
  timeline: [
    { yearOrAge: "Kelahiran", title: { id: "Kabar Gembira", en: "Glad Tidings" }, desc: { id: "Lahir sebagai mukjizat", en: "Born as a miracle" } },
    { yearOrAge: "Dewasa", title: { id: "Berdakwah di Palestina", en: "Preaching in Palestine" }, desc: { id: "Melanjutkan dakwah ayahnya", en: "Continuing his father's preaching" } }
  ],
  dailyLifeConnection: { id: "Allah bisa mewujudkan apapun yang terlihat tidak mungkin. Teruslah berdoa dengan yakin!", en: "Allah can make anything happen even if it seems impossible. Keep praying with conviction!" }
};
