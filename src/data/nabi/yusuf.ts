// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const yusufData: NabiData = {
  slug: "nabi-yusuf",
  name: { id: "Nabi Yusuf AS", en: "Prophet Yusuf AS" },
  icon: "👑",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  surahReference: "Yusuf:4",
  storyShort: {
    id: "Nabi tampan yang dibuang ke sumur lalu menjadi menteri di Mesir.",
    en: "The handsome prophet who was thrown into a well and then became a minister in Egypt."
  },
  storyFull: {
    id: "Nabi Yusuf AS dibuang ke sumur oleh kakak-kakaknya karena iri. Ia diselamatkan saudagar dan dijual sebagai budak di Mesir. Karena ketampanan dan kejujurannya, beliau malah difitnah dan dipenjara. Namun, karena kemampuannya menafsirkan mimpi Raja, beliau dibebaskan dan diangkat menjadi menteri keuangan Mesir yang menyelamatkan negara dari kelaparan.",
    en: "Prophet Yusuf AS was thrown into a well by his older brothers out of jealousy. He was rescued by merchants and sold as a slave in Egypt. Because of his handsomeness and honesty, he was slandered and imprisoned. However, because of his ability to interpret the King's dream, he was freed and appointed as Egypt's minister of finance, saving the country from famine."
  },
  miracles: [
    { id: "Diberikan ketampanan fisik separuh dari ketampanan seluruh manusia.", en: "Given half of the physical beauty of all mankind." },
    { id: "Mampu menafsirkan arti mimpi dengan sangat akurat.", en: "Able to interpret the meaning of dreams very accurately." }
  ],
  characterTraits: [
    { trait: { id: "Pemaaf", en: "Forgiving" }, desc: { id: "Memaafkan kakak-kakaknya yang dulu membuangnya", en: "Forgave his older brothers who had thrown him away" } },
    { trait: { id: "Jujur", en: "Honest" }, desc: { id: "Menjaga kehormatan dan tidak mau berbuat maksiat", en: "Kept his honor and refused to commit sin" } },
    { trait: { id: "Cerdas", en: "Smart" }, desc: { id: "Pintar mengatur ekonomi dan pertanian negara", en: "Smart in managing the country's economy and agriculture" } }
  ],
  timeline: [
    { yearOrAge: "Masa Kecil", title: { id: "Dibuang ke Sumur", en: "Thrown into Well" }, desc: { id: "Kakaknya iri padanya", en: "His brothers were jealous of him" } },
    { yearOrAge: "Masa Remaja", title: { id: "Masuk Penjara", en: "Imprisoned" }, desc: { id: "Difitnah melakukan kejahatan", en: "Slandered for committing a crime" } },
    { yearOrAge: "Masa Dewasa", title: { id: "Menjadi Menteri", en: "Becoming Minister" }, desc: { id: "Menyelamatkan Mesir dari kelaparan", en: "Saved Egypt from famine" } }
  ],
  dailyLifeConnection: {
    id: "Jadilah pemaaf walau disakiti orang lain! Dan ingat, kejujuran akan membawa kita pada kesuksesan yang luar biasa.",
    en: "Be forgiving even if hurt by others! And remember, honesty will lead us to extraordinary success."
  }
};

