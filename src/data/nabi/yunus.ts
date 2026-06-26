// TODO: WAJIB REVIEW USTADZ SEBELUM PUBLISH
import { NabiData } from "../objects";

export const yunusData: NabiData = {
  slug: "nabi-yunus",
  name: {
    id: "Nabi Yunus A.S.",
    en: "Prophet Yunus A.S.",
  },
  icon: "🐋",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: 100,
  storyShort: {
    id: "Nabi yang pernah ditelan ikan paus raksasa dan bertaubat di dalam perutnya yang gelap.",
    en: "The Prophet who was swallowed by a giant whale and repented in its dark belly.",
  },
  storyFull: {
    id: "Nabi Yunus A.S. merasa putus asa karena kaumnya di Ninawa menolak dakwahnya. Beliau pergi meninggalkan mereka dan naik kapal. Saat terjadi badai, beliau melompat ke laut dan ditelan paus raksasa. Di dalam kegelapan perut paus, beliau sadar dan berdoa minta ampun, hingga akhirnya dimuntahkan dengan selamat.",
    en: "Prophet Yunus A.S. felt in despair because his people in Nineveh rejected his preaching. He left them and boarded a ship. During a storm, he jumped into the sea and was swallowed by a giant whale. In the darkness of the whale's belly, he realized his mistake and prayed for forgiveness, until he was safely spat out.",
  },
  miracles: [
    { id: "Bisa bertahan hidup di dalam perut ikan paus selama beberapa hari.", en: "Could survive inside the belly of a whale for several days." },
    { id: "Doanya di dalam kegelapan laut, perut paus, dan malam hari dikabulkan Allah.", en: "His prayer in the darkness of the sea, whale's belly, and night was answered by Allah." }
  ],
  characterTraits: [
    { trait: { id: "Cepat Bertaubat", en: "Quick to Repent" }, desc: { id: "Segera mengakui kesalahan dan beristighfar kepada Allah SWT.", en: "Immediately admitted his mistakes and asked forgiveness from Allah SWT." } },
    { trait: { id: "Bertanggung Jawab", en: "Responsible" }, desc: { id: "Rela dikorbankan ke laut agar penumpang kapal lain selamat dari badai.", en: "Willing to be sacrificed into the sea so other passengers survived the storm." } },
    { trait: { id: "Rajin Berdoa", en: "Prayer-focused" }, desc: { id: "Terus-menerus bertasbih walau berada di situasi paling menakutkan.", en: "Continuously glorified Allah even in the most terrifying situation." } }
  ],
  timeline: [
    { yearOrAge: "Kecewa", title: { id: "Meninggalkan Kaum", en: "Leaving the People" }, desc: { id: "Pergi diam-diam karena kaumnya tidak mau menyembah Allah.", en: "Left secretly because his people refused to worship Allah." } },
    { yearOrAge: "Ujian", title: { id: "Ditelan Paus", en: "Swallowed by Whale" }, desc: { id: "Terlempar dari kapal di tengah badai lalu ditelan ikan raksasa.", en: "Thrown from the ship in a storm and swallowed by a giant fish." } },
    { yearOrAge: "Kembali", title: { id: "Kaumnya Beriman", en: "His People Believed" }, desc: { id: "Kembali ke kaumnya dan mendapati 100 ribu orang telah beriman.", en: "Returned to his people and found 100,000 of them had believed." } }
  ],
  dailyLifeConnection: {
    id: "Jika kita berbuat salah, segeralah berdoa minta ampun. Tidak ada masalah yang terlalu besar jika Allah menolong kita.",
    en: "If we make a mistake, immediately pray for forgiveness. No problem is too big if Allah helps us.",
  },
  surahReference: "Al-Anbiya' 21:87-88",
};
