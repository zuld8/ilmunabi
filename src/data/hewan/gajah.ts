import { ObjectData } from "../objects";

export const gajahData: ObjectData = {
  slug: "gajah",
  name: { id: "Gajah", en: "Elephant" },
  icon: "🐘",
  category: "hewan",
  type: "hewan",
  scientificName: "Elephantidae",
  surahName: "Al-Fil",
  surahReference: "105:1-5",
  unlockedAtPoints: 100,

  kosakata: [
    { arab: "فِيلٌ", latin: "Fiil", arti: "Gajah", artiEn: "Elephant", contohAyat: "Surah Al-Fil menceritakan tentang pasukan gajah." },
    { arab: "خُرْطُومٌ", latin: "Khurthuum", arti: "Belalai", artiEn: "Trunk", contohAyat: "Bagian tubuh unik gajah untuk bernapas dan makan." },
    { arab: "نَابٌ", latin: "Naab", arti: "Gading", artiEn: "Tusk", contohAyat: "Gajah memiliki gading yang kuat." },
    { arab: "أُذُنٌ", latin: "Udzun", arti: "Telinga", artiEn: "Ear", contohAyat: "Telinga gajah sangat besar seperti kipas." }
  ],

  balita: {
    text: { id: "Ini gajah! Gajah punya belalai panjang dan telinga lebar seperti kipas... 🐘", en: "This is an elephant! Elephants have long trunks and wide ears like fans... 🐘" },
    audioTranscript: { id: "Hei lihat! Ini gajah! Telinganya beesaar sekali buat kipas-kipas! Terus hidungnya panjaaaang banget, namanya belalai. Belalai itu bisa buat ambil makanan lho!", en: "Hey look! This is an elephant! Its ears are sooo big for fanning! And its nose is sooo long, it's called a trunk. The trunk can grab food, you know!" },
    quiz: {
      question: { id: "Hewan apa yang punya hidung panjang bernama belalai?", en: "Which animal has a long nose called a trunk?" },
      options: [
        { text: { id: "🐘 Gajah", en: "🐘 Elephant" } },
        { text: { id: "🐈 Kucing", en: "🐈 Cat" } },
        { text: { id: "🐫 Unta", en: "🐫 Camel" } }
      ],
      answerIdx: 0
    }
  },

  anak: {
    text: { id: "Gajah adalah hewan darat terbesar di dunia lho!", en: "Elephants are the largest land animals in the world!" },
    facts: [
      { id: "Gajah nggak bisa melompat! Wah, coba bayangkan gajah lompat tali ya.", en: "Elephants can't jump! Wow, imagine an elephant jumping rope." },
      { id: "Belalai gajah itu isinya gabungan hidung dan bibir atas yang punya lebih dari 40 ribu otot!", en: "An elephant's trunk is a combination of nose and upper lip with over 40 thousand muscles!" },
      { id: "Otak gajah sangat besar, makanya ingatannya super tajam. Gajah tidak pernah lupa!", en: "Elephant brains are very large, so their memory is super sharp. Elephants never forget!" },
      { id: "Mereka bisa berkomunikasi dengan suara gemuruh sangat rendah yang nggak bisa kita dengar.", en: "They can communicate with very low rumbling sounds that we can't hear." },
      { id: "Gajah takut sama lebah madu lho! HAH?! Besar-besar kok takut lebah?", en: "Elephants are scared of honey bees! WHAT?! So big but scared of bees?" }
    ],
    quranVerse: {
      arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
      transliteration: "Alam tara kayfa fa'ala rabbuka bi ashaabil fiil",
      translation: { id: "Tidakkah engkau (Muhammad) perhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?", en: "Have you not considered, [O Muhammad], how your Lord dealt with the companions of the elephant?" },
      context: { id: "Tau nggak? Gajah pernah dibawa oleh tentara jahat Abrahah untuk menghancurkan Ka'bah! Tapi Allah mengutus burung Ababil kecil untuk mengalahkan gajah-gajah besar itu. Hebat kan pertolongan Allah?", en: "Did you know? Elephants were once brought by Abrahah's evil army to destroy the Kaaba! But Allah sent small Ababil birds to defeat those big elephants. Isn't Allah's help amazing?" }
    },
    quiz: {
      question: { id: "Hewan kecil apa yang ditakuti oleh gajah?", en: "Which small animal are elephants afraid of?" },
      options: [
        { text: { id: "Semut", en: "Ant" } },
        { text: { id: "Lebah", en: "Bee" } },
        { text: { id: "Kupu-kupu", en: "Butterfly" } },
        { text: { id: "Nyamuk", en: "Mosquito" } }
      ],
      answerIdx: 1
    }
  },

  explorer: {
    text: { id: "Gajah memiliki otak terbesar dari mamalia darat manapun. Mereka menunjukkan perilaku luar biasa seperti empati, duka cita ketika ada kawan yang mati, bahkan bisa mengenali diri mereka di cermin!\n\nSebuah kelompok gajah dipimpin oleh gajah betina tertua (Matriark). Mereka bisa mengingat lokasi sumber air rahasia di musim kemarau meskipun jaraknya puluhan kilometer.\n\nLebih menakjubkan lagi, gajah bisa mendengar badai dari jarak 240 km. Mereka menangkap gelombang suara rendah dan getaran tanah melalui kaki mereka yang sensitif.", en: "Elephants have the largest brains of any land mammal. They show incredible behaviors like empathy, grieving when a friend dies, and can even recognize themselves in a mirror!\n\nAn elephant herd is led by the oldest female (Matriarch). They can remember secret water source locations during dry seasons even tens of kilometers away.\n\nEven more amazing, elephants can hear storms from 240 km away. They detect low sound waves and ground vibrations through their sensitive feet." },
    anatomy: [
      { part: { id: "Belalai", en: "Trunk" }, desc: { id: "Memiliki 40.000 otot, cukup kuat angkat pohon dan lembut memegang koin.", en: "Has 40,000 muscles, strong enough to lift trees and gentle to hold a coin." } },
      { part: { id: "Telinga", en: "Ears" }, desc: { id: "Penuh pembuluh darah untuk membuang panas tubuh.", en: "Full of blood vessels to release body heat." } }
    ],
    wowFactor: { id: "Sains menemukan fakta menarik bahwa gajah adalah salah satu makhluk darat yang paling stabil secara emosi namun rentan terhadap trauma. Kecerdasan mereka sangat tinggi sehingga mereka sangat patuh pada instruksi, seperti yang digunakan pasukan di masa lalu.\n\nAl-Qur'an menceritakan kisah Ashabul Fil (Pasukan Gajah). Menurut sejarah, gajah terbesar bernama Mahmud tiba-tiba berlutut menolak maju ke arah Ka'bah. Ini menunjukkan bahwa sehebat dan sebesar apa pun ciptaan, ia bisa tunduk pada perintah Allah SWT melebihi tuannya!", en: "Science found an interesting fact that elephants are among the most emotionally stable land creatures yet vulnerable to trauma. Their intelligence is so high they are very obedient to instructions, as used by armies in the past.\n\nThe Qur'an tells the story of Ashabul Fil (The Elephant Army). Historically, the biggest elephant named Mahmud suddenly knelt, refusing to advance towards the Kaaba. This shows that no matter how great and big a creation is, it can submit to Allah SWT's command over its master!" },
    quranVerse: {
      arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
      transliteration: "Alam tara kayfa fa'ala rabbuka bi ashaabil fiil",
      translation: { id: "Tidakkah engkau perhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?", en: "Have you not considered how your Lord dealt with the companions of the elephant?" }
    },
    quiz: [
      {
        question: { id: "Gajah berkomunikasi jarak jauh melalui getaran yang dirasakan oleh...", en: "Elephants communicate long distances via vibrations felt by..." },
        options: [{ text: { id: "Telinga", en: "Ears" } }, { text: { id: "Belalai", en: "Trunk" } }, { text: { id: "Telapak kaki", en: "Foot soles" } }, { text: { id: "Gading", en: "Tusks" } }],
        answerIdx: 2
      },
      {
        question: { id: "Surah di Al-Qur'an yang menceritakan gajah adalah...", en: "The surah in the Qur'an telling about elephants is..." },
        options: [{ text: { id: "Al-Baqarah", en: "Al-Baqarah" } }, { text: { id: "Al-Fil", en: "Al-Fil" } }, { text: { id: "An-Naml", en: "An-Naml" } }, { text: { id: "Al-Ankabut", en: "Al-Ankabut" } }],
        answerIdx: 1
      },
      {
        question: { id: "Pemimpin kawanan gajah disebut?", en: "What is the leader of an elephant herd called?" },
        options: [{ text: { id: "Patriark", en: "Patriarch" } }, { text: { id: "Matriark", en: "Matriarch" } }, { text: { id: "Raja", en: "King" } }, { text: { id: "Alpha", en: "Alpha" } }],
        answerIdx: 1
      }
    ]
  }
};
