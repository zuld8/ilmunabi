// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const musaData: NabiData = {
  slug: "nabi-musa",
  name: {
    id: "Nabi Musa A.S.",
    en: "Prophet Musa A.S.",
  },
  icon: "🌊",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Nabi yang berani melawan kesombongan Firaun dan membelah Laut Merah dengan izin Allah.",
    en: "The Prophet who bravely opposed Pharaoh's arrogance and split the Red Sea by Allah's permission.",
  },
  storyFull: {
    id: "Nabi Musa A.S. diselamatkan saat bayi oleh istri Firaun dari kekejaman Firaun. Setelah dewasa, beliau diutus Allah untuk membebaskan Bani Israil. Dengan mukjizat tongkatnya, beliau menghadapi para penyihir Firaun dan puncaknya membelah Laut Merah untuk menyelamatkan pengikutnya, sementara Firaun tenggelam.",
    en: "Prophet Musa A.S. was saved as a baby by Pharaoh's wife from Pharaoh's cruelty. As an adult, he was sent by Allah to free the Children of Israel. With his miraculous staff, he faced Pharaoh's magicians and eventually split the Red Sea to save his followers, while Pharaoh drowned.",
  },
  miracles: [
    { id: "Tongkat kayu berubah menjadi ular besar yang memakan ular-ular penyihir.", en: "His wooden staff turned into a giant snake that ate the magicians' snakes." },
    { id: "Membelah Laut Merah menjadi jalan kering untuk dilintasi Bani Israil.", en: "Split the Red Sea into a dry path for the Children of Israel to cross." }
  ],
  characterTraits: [
    { trait: { id: "Pemberani", en: "Brave" }, desc: { id: "Berani melawan Firaun yang sangat kejam demi menegakkan kebenaran.", en: "Bravely opposed the cruel Pharaoh to uphold the truth." } },
    { trait: { id: "Pembela Kaum Lemah", en: "Defender of the Weak" }, desc: { id: "Rela berjuang membebaskan Bani Israil dari penindasan.", en: "Willing to fight to free the Children of Israel from oppression." } },
    { trait: { id: "Teguh Pendirian", en: "Firm" }, desc: { id: "Tidak mudah goyah meski diancam oleh kekuatan besar.", en: "Not easily swayed even when threatened by great power." } }
  ],
  timeline: [
    { yearOrAge: "Bayi", title: { id: "Hanyut di Sungai", en: "Drifting in the River" }, desc: { id: "Dihanyutkan di Sungai Nil lalu dipungut oleh Asiyah, istri Firaun.", en: "Drifted in the Nile River and was picked up by Asiyah, Pharaoh's wife." } },
    { yearOrAge: "Dewasa", title: { id: "Mukjizat Tongkat", en: "Miracle of the Staff" }, desc: { id: "Menghadapi Firaun dan penyihirnya dengan tongkat yang berubah menjadi ular.", en: "Faced Pharaoh and his magicians with a staff that turned into a snake." } },
    { yearOrAge: "Akhir", title: { id: "Membelah Laut Merah", en: "Splitting the Red Sea" }, desc: { id: "Menyelamatkan Bani Israil dengan membelah laut, sementara Firaun tenggelam.", en: "Saved the Children of Israel by splitting the sea, while Pharaoh drowned." } }
  ],
  dailyLifeConnection: {
    id: "Kita harus berani membela teman yang diganggu dan tidak boleh bersikap sombong seperti Firaun.",
    en: "We must be brave in defending bullied friends and must not be arrogant like Pharaoh.",
  },
  surahReference: "Al-A'raf 7:103-136",
};
