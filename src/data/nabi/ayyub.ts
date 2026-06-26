// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const ayyubData: NabiData = {
  slug: "nabi-ayyub",
  name: { id: "Nabi Ayyub AS", en: "Prophet Ayyub AS" },
  icon: "🏥",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Sad:41-42",
  storyShort: {
    id: "Nabi yang diuji dengan penyakit parah bertahun-tahun namun tetap bersabar.",
    en: "The prophet who was tested with a severe illness for years but remained patient."
  },
  storyFull: {
    id: "Nabi Ayyub AS awalnya sangat kaya, sehat, dan punya banyak anak. Lalu Allah mengujinya: hartanya habis, anak-anaknya meninggal, dan beliau terkena penyakit kulit parah selama belasan tahun. Semua orang menjauhinya kecuali istrinya. Nabi Ayyub tidak pernah mengeluh, hingga akhirnya Allah menyembuhkannya dengan air ajaib dari bawah kakinya.",
    en: "Prophet Ayyub AS was initially very rich, healthy, and had many children. Then Allah tested him: his wealth was gone, his children died, and he suffered from a severe skin disease for more than a decade. Everyone avoided him except his wife. Prophet Ayyub never complained, until finally Allah cured him with magical water from under his feet."
  },
  miracles: [
    { id: "Menyembuhkan penyakit parahnya dengan mandi dari air yang memancar dari hentakan kakinya.", en: "Cured his severe illness by bathing from the water that gushed from his foot stomp." },
    { id: "Kesabaran tanpa batas yang menjadi teladan bagi seluruh umat manusia.", en: "Limitless patience that became an example for all mankind." }
  ],
  characterTraits: [
    { trait: { id: "Sangat Sabar", en: "Very Patient" }, desc: { id: "Tidak pernah marah kepada Allah walau diuji sangat berat", en: "Never angry at Allah despite being tested very heavily" } },
    { trait: { id: "Bersyukur", en: "Grateful" }, desc: { id: "Tetap bersyukur karena hatinya masih bisa mengingat Allah", en: "Remained grateful because his heart could still remember Allah" } },
    { trait: { id: "Setia", en: "Loyal" }, desc: { id: "Istrinya juga sangat setia merawatnya saat semua orang pergi", en: "His wife was also very loyal in caring for him when everyone left" } }
  ],
  timeline: [
    { yearOrAge: "Masa Kaya", title: { id: "Berlimpah Harta", en: "Abundant Wealth" }, desc: { id: "Kaya raya dan banyak anak", en: "Very rich and had many children" } },
    { yearOrAge: "Masa Ujian", title: { id: "Sakit Parah", en: "Severe Illness" }, desc: { id: "Sakit kulit menular bertahun-tahun", en: "Contagious skin disease for years" } },
    { yearOrAge: "Kesembuhan", title: { id: "Mata Air Ajaib", en: "Magical Spring" }, desc: { id: "Sembuh total setelah mandi air mukjizat", en: "Fully recovered after bathing in miraculous water" } }
  ],
  dailyLifeConnection: {
    id: "Kalau kita sedang sakit, ingatlah kesabaran Nabi Ayyub. Terus berdoa dan jangan mengeluh berlebihan, pasti Allah beri kesembuhan!",
    en: "If we are sick, remember Prophet Ayyub's patience. Keep praying and don't complain excessively, Allah will surely give healing!"
  }
};

