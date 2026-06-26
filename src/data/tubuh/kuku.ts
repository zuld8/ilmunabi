import { ObjectData } from "../objects";

export const kukuData: ObjectData = {
  slug: "kuku",
  name: { id: "Kuku", en: "Nails" },
  icon: "💅",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Unguis",
  surahName: "Al-An'am",
  surahReference: "6:146",
  unlockedAtPoints: 5,
  kosakata: [
    { arab: "ظُفُرٌ", latin: "zhufurun", arti: "Kuku", artiEn: "Nail", contohAyat: "حَرَّمْنَا كُلَّ ذِي ظُفُرٍ" }
  ],
  balita: {
    text: { id: "Kuku kita ada di ujung jari! 💅", en: "Our nails are at the tip of our fingers! 💅" },
    audioTranscript: { id: "Kuku melindungi ujung jari kita yang lembut. Jangan lupa potong kuku kalau sudah panjang biar nggak ada kuman di dalamnya ya!", en: "Nails protect our soft fingertips. Don't forget to cut your nails when they grow long so there are no germs inside!" },
    quiz: {
      question: { id: "Apa yang harus kita lakukan jika kuku sudah panjang?", en: "What should we do if our nails are long?" },
      options: [
        { text: { id: "Dibiarkan saja", en: "Leave them alone" } },
        { text: { id: "Digigit", en: "Bite them" } },
        { text: { id: "Dipotong pakai potong kuku", en: "Cut them with nail clippers" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Kuku itu terbuat dari bahan yang sama dengan rambut kita lho, namanya keratin! Kuku di jari tangan tumbuh lebih cepat daripada kuku di jari kaki. Rasulullah ﷺ sunnahkan kita memotong kuku setiap hari Jumat supaya kita selalu bersih dan rapi!", en: "Nails are made from the same material as our hair, called keratin! Nails on fingers grow faster than toenails. The Prophet ﷺ recommended us to cut our nails every Friday so we are always clean and neat!" },
    facts: [
      { id: "Kuku tumbuh sekitar 3 milimeter setiap bulannya.", en: "Nails grow about 3 millimeters every month." },
      { id: "Kuku jari tengah biasanya tumbuh paling cepat.", en: "The middle fingernail usually grows the fastest." },
      { id: "Tanpa kuku, kita akan susah menggaruk kulit yang gatal!", en: "Without nails, we would have a hard time scratching itchy skin!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Kuku (unguis) melindungi saraf sensitif di ujung phalanx (tulang jari) dan membantu memberi tekanan counter saat kita memegang sesuatu. Memotong kuku adalah fitrah kebersihan dalam Islam. Dalam Al-Qur'an, kata kuku (zhufur) juga digunakan untuk menyebut hewan-hewan berkuku (seperti unta dan burung unta) yang sempat diharamkan bagi Bani Israil sebagai hukuman.", en: "Nails (unguis) protect sensitive nerves at the tips of phalanges (finger bones) and provide counter-pressure when grasping objects. Cutting nails is part of natural hygiene (fitrah) in Islam. In the Quran, the word for nail (zhufur) is also used for animals with claws or hooves (like camels and ostriches) which were once forbidden to the Children of Israel as a punishment." },
    quranVerse: {
      arabic: "وَعَلَى الَّذِينَ هَادُوا حَرَّمْنَا كُلَّ ذِي ظُفُرٍ",
      transliteration: "Wa 'alal-ladziina haaduu harramnaa kulla dzii zhufur",
      translation: { id: "Dan kepada orang-orang Yahudi, Kami haramkan segala binatang yang berkuku...", en: "And to those who are Jews We prohibited every animal of uncloven hoof..." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};