// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const luthAsData: NabiData = {
  slug: "luth-as",
  name: { id: "Nabi Luth AS", en: "Prophet Luth AS" },
  icon: "🌍",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Hud:81-82",
  storyShort: {
    id: "Nabi yang diutus ke kota Sodom yang masyarakatnya suka berbuat maksiat parah.",
    en: "The prophet sent to the city of Sodom whose people liked to commit severe immorality."
  },
  storyFull: {
    id: "Nabi Luth AS, keponakan Nabi Ibrahim AS, diutus ke kota Sodom. Penduduk Sodom melakukan perbuatan yang sangat menyimpang dan keji. Karena mereka tidak mau bertobat dan malah menantang Allah, kota mereka dibalikkan oleh Malaikat dan dihujani batu belerang yang panas.",
    en: "Prophet Luth AS, the nephew of Prophet Ibrahim AS, was sent to the city of Sodom. The people of Sodom committed very deviant and vile acts. Because they refused to repent and instead challenged Allah, their city was turned upside down by Angels and rained upon with hot brimstones."
  },
  miracles: [
    { id: "Diselamatkan Allah dari azab hujan batu belerang.", en: "Saved by Allah from the punishment of brimstone rain." },
    { id: "Malaikat penolong bertamu ke rumahnya dengan wujud pemuda tampan.", en: "Helper angels visited his house in the form of handsome youths." }
  ],
  characterTraits: [
    { trait: { id: "Tegar", en: "Resilient" }, desc: { id: "Tetap sabar di tengah lingkungan yang sangat buruk", en: "Remained patient amidst a very bad environment" } },
    { trait: { id: "Berani", en: "Brave" }, desc: { id: "Berani menentang perbuatan keji kaumnya", en: "Brave to oppose the vile acts of his people" } },
    { trait: { id: "Taat", en: "Obedient" }, desc: { id: "Segera meninggalkan kota saat diperintah Allah", en: "Immediately left the city when commanded by Allah" } }
  ],
  timeline: [
    { yearOrAge: "Masa Dakwah", title: { id: "Dakwah di Sodom", en: "Preaching in Sodom" }, desc: { id: "Melarang perbuatan keji", en: "Forbidding vile acts" } },
    { yearOrAge: "Kedatangan Malaikat", title: { id: "Tamu Misterius", en: "Mysterious Guests" }, desc: { id: "Malaikat memberi peringatan azab", en: "Angels gave warning of punishment" } },
    { yearOrAge: "Azab", title: { id: "Hujan Batu Belarang", en: "Brimstone Rain" }, desc: { id: "Kota Sodom dihancurkan", en: "The city of Sodom was destroyed" } }
  ],
  dailyLifeConnection: {
    id: "Kita harus selalu menjaga diri dari perbuatan buruk, meskipun banyak orang di sekitar kita melakukannya.",
    en: "We must always guard ourselves from bad deeds, even if many people around us do them."
  }
};

