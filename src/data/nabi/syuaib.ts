// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const syuaibData: NabiData = {
  slug: "nabi-syuaib",
  name: {
    id: "Nabi Syu'aib A.S.",
    en: "Prophet Shu'ayb A.S.",
  },
  icon: "🕌",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Nabi Syu'aib A.S. berdakwah kepada kaum Madyan agar berbuat jujur dalam berdagang dan tidak menipu timbangan.",
    en: "Prophet Shu'ayb A.S. preached to the people of Madyan to be honest in trade and not cheat in weights.",
  },
  storyFull: {
    id: "Nabi Syu'aib A.S. diutus kepada kaum Madyan yang gemar menipu dalam jual beli. Beliau menasihati mereka dengan penuh kesabaran agar menyembah Allah dan berlaku adil. Namun, kaumnya menolak dan mengejeknya. Akhirnya, Allah mendatangkan azab berupa gempa bumi dan awan panas kepada kaum yang zalim itu.",
    en: "Prophet Shu'ayb A.S. was sent to the people of Madyan who loved to cheat in commerce. He patiently advised them to worship Allah and be fair. However, his people rejected and mocked him. Finally, Allah sent a punishment of earthquakes and a hot cloud to the unjust people.",
  },
  miracles: [
    { id: "Kesabaran dan kefasihan luar biasa dalam berdakwah hingga dijuluki 'Khatibul Anbiya' (Ahli pidato para Nabi).", en: "Extraordinary patience and eloquence in preaching, earning him the title 'Khatibul Anbiya' (Orator of the Prophets)." },
    { id: "Diselamatkan Allah dari azab dahsyat yang menimpa kaum Madyan.", en: "Saved by Allah from the terrible punishment that befell the people of Madyan." }
  ],
  characterTraits: [
    { trait: { id: "Jujur & Adil", en: "Honest & Fair" }, desc: { id: "Selalu berbuat jujur dan tidak pernah menipu dalam hal apa pun.", en: "Always honest and never cheated in anything." } },
    { trait: { id: "Penyabar", en: "Patient" }, desc: { id: "Sangat sabar menghadapi kaumnya yang keras kepala dan suka mengejek.", en: "Very patient in dealing with his stubborn and mocking people." } },
    { trait: { id: "Pandai Berbicara", en: "Eloquent" }, desc: { id: "Berdakwah dengan kata-kata yang lembut, jelas, dan menyentuh hati.", en: "Preached with gentle, clear, and touching words." } }
  ],
  timeline: [
    { yearOrAge: "Awal", title: { id: "Diutus ke Madyan", en: "Sent to Madyan" }, desc: { id: "Mulai berdakwah kepada kaum Madyan agar tidak menyembah pohon Aikah.", en: "Started preaching to the people of Madyan not to worship the Aikah tree." } },
    { yearOrAge: "Dakwah", title: { id: "Melarang Kecurangan", en: "Forbidding Cheating" }, desc: { id: "Meminta kaumnya agar jujur dalam menimbang dan menakar barang dagangan.", en: "Asked his people to be honest in weighing and measuring merchandise." } },
    { yearOrAge: "Akhir", title: { id: "Azab Kaum Madyan", en: "Punishment of Madyan" }, desc: { id: "Kaum Madyan hancur oleh gempa dan awan panas karena menolak kebenaran.", en: "The people of Madyan were destroyed by earthquakes and hot clouds for rejecting the truth." } }
  ],
  dailyLifeConnection: {
    id: "Kita harus selalu jujur saat bermain atau jajan, dan tidak boleh curang atau mengambil hak orang lain.",
    en: "We must always be honest when playing or buying snacks, and never cheat or take what belongs to others.",
  },
  surahReference: "Hud 11:84-95",
};
