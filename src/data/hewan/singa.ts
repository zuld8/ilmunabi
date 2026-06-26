import { ObjectData } from "../objects";

export const singaData: ObjectData = {
  slug: "singa",
  name: { id: "Singa", en: "Lion" },
  icon: "🦁",
  category: "hewan",
  type: "hewan",
  scientificName: "Panthera leo",
  surahName: "Al-Muddaththir",
  surahReference: "74:51",
  unlockedAtPoints: 80,

  kosakata: [
    { arab: "أَسَدٌ", latin: "Asad", arti: "Singa", artiEn: "Lion", contohAyat: "Hewan buas yang sangat kuat." },
    { arab: "قَسْوَرَةٌ", latin: "Qaswarah", arti: "Singa / Pemburu", artiEn: "Lion / Hunter", contohAyat: "Disebut dalam surah Al-Muddaththir, lari dari singa." },
    { arab: "زَئِيرٌ", latin: "Za'iir", arti: "Auman", artiEn: "Roar", contohAyat: "Auman singa terdengar sangat jauh." },
    { arab: "غَابَةٌ", latin: "Ghaabah", arti: "Hutan", artiEn: "Jungle", contohAyat: "Singa dijuluki raja hutan." }
  ],

  balita: {
    text: { id: "Rooaaarr! Ini Singa! Singa jantan punya rambut tebal di lehernya. 🦁", en: "Rooaaarr! This is a Lion! Male lions have thick hair on their necks. 🦁" },
    audioTranscript: { id: "Rooaaarr! Wah, siapa tuh yang mengaum keras sekali? Itu Singa, si raja hutan! Coba lihat lehernya, ada rambutnya yang tebal banget, namanya surai. Singa itu super kuat lho!", en: "Rooaaarr! Wow, who is roaring so loudly? It's the Lion, the king of the jungle! Look at its neck, it has really thick hair, called a mane. Lions are super strong!" },
    quiz: {
      question: { id: "Hewan apa yang dijuluki raja hutan dan mengaum keras?", en: "Which animal is dubbed the king of the jungle and roars loudly?" },
      options: [
        { text: { id: "🐈 Kucing", en: "🐈 Cat" } },
        { text: { id: "🦁 Singa", en: "🦁 Lion" } },
        { text: { id: "🐑 Domba", en: "🐑 Sheep" } }
      ],
      answerIdx: 1
    }
  },

  anak: {
    text: { id: "Singa dijuluki 'Raja Hutan', padahal mereka kebanyakan hidup di padang rumput savana lho!", en: "Lions are dubbed 'King of the Jungle', even though they mostly live in the savanna grasslands!" },
    facts: [
      { id: "Auman singa sangat keras, bisa terdengar dari jarak 8 kilometer! Hah?! Jauh banget!", en: "A lion's roar is so loud, it can be heard from 8 kilometers away! What?! So far!" },
      { id: "Singa betina adalah pemburu utama, sementara singa jantan menjaga wilayah keluarga.", en: "Female lions are the main hunters, while male lions protect the family territory." },
      { id: "Rambut tebal (surai) singa jantan melindunginya dari gigitan saat bertarung.", en: "The thick hair (mane) of male lions protects them from bites during fights." },
      { id: "Singa tidur sangat lama, bisa sampai 20 jam sehari! Wah pemalas juga ya?", en: "Lions sleep for a very long time, up to 20 hours a day! Wow, lazy too?" },
      { id: "Singa punya lidah seperti ampelas kasar untuk mengikis daging dari tulang mangsanya.", en: "Lions have tongues like rough sandpaper to scrape meat off prey's bones." }
    ],
    quranVerse: {
      arabic: "فَرَّتْ مِن قَسْوَرَةٍ",
      transliteration: "Farrat min qaswarah",
      translation: { id: "Mereka lari dari singa.", en: "Fleeing from a lion." },
      context: { id: "Tau nggak? Di Al-Qur'an, Allah menyindir orang-orang yang sombong menolak kebenaran. Mereka lari terbirit-birit saat dinasihati, persis seperti keledai liar ketakutan yang lari dikejar singa buas (qaswarah)!", en: "Did you know? In the Qur'an, Allah satirizes arrogant people who reject the truth. They run away terrified when advised, exactly like frightened wild donkeys running chased by a fierce lion (qaswarah)!" }
    },
    quiz: {
      question: { id: "Siapa yang biasanya pergi berburu makanan di keluarga Singa?", en: "Who usually goes hunting for food in the Lion family?" },
      options: [
        { text: { id: "Singa Jantan", en: "Male Lion" } },
        { text: { id: "Singa Betina", en: "Female Lion" } },
        { text: { id: "Anak Singa", en: "Lion Cub" } },
        { text: { id: "Kakek Singa", en: "Grandpa Lion" } }
      ],
      answerIdx: 1
    }
  },

  explorer: {
    text: { id: "Singa adalah satu-satunya spesies kucing besar yang sangat sosial. Mereka hidup berkelompok yang disebut 'pride'. Satu pride bisa berisi puluhan ekor singa yang saling bekerja sama membesarkan anak dan berburu mangsa besar seperti kerbau afrika.\n\nPenglihatan malam singa 6 kali lebih tajam dari manusia. Hal ini karena ada lapisan pemantul cahaya di belakang mata mereka (tapetum lucidum) yang membuat mata mereka menyala dalam gelap.\n\nKekuatan gigitan singa luar biasa, dengan taring sepanjang 8 cm yang bisa menembus kulit paling tebal sekalipun.", en: "Lions are the only big cat species that are highly social. They live in groups called 'prides'. One pride can contain dozens of lions working together to raise cubs and hunt large prey like cape buffaloes.\n\nA lion's night vision is 6 times sharper than a human's. This is because there is a light-reflecting layer behind their eyes (tapetum lucidum) that makes their eyes glow in the dark.\n\nA lion's bite force is incredible, with 8 cm long fangs that can pierce even the thickest skin." },
    anatomy: [
      { part: { id: "Pita Suara Bentuk Persegi", en: "Square-shaped Vocal Cords" }, desc: { id: "Memungkinkan udara lewat lebih bebas untuk auman super keras.", en: "Allows air to pass more freely for super loud roars." } },
      { part: { id: "Tapetum Lucidum", en: "Tapetum Lucidum" }, desc: { id: "Lapisan cermin di mata untuk penglihatan malam hari.", en: "Mirror layer in the eye for night vision." } }
    ],
    wowFactor: { id: "Sains tentang rantai makanan menunjukkan bahwa singa (predator puncak/apex) bertugas menjaga keseimbangan populasi hewan herbivora. Tanpa singa, hewan herbivora akan overpopulasi dan menghabiskan semua tumbuhan yang berujung pada kerusakan ekosistem.\n\nAl-Qur'an menggunakan kata 'Qaswarah' (Singa / Pemanah Pemburu) di surat Al-Muddaththir dengan perumpamaan sangat kuat. 'Seakan-akan mereka keledai liar yang lari terkejut, lari daripada singa'. Ini adalah metafora dahsyat: kebenaran ilahi itu sangat kuat seperti auman singa, namun jiwa yang berpenyakit malah lari darinya karena ketakutan tanpa alasan!", en: "Science regarding food chains shows that lions (apex predators) are tasked with maintaining the balance of herbivore populations. Without lions, herbivores would overpopulate and consume all plants leading to ecosystem destruction.\n\nThe Qur'an uses the word 'Qaswarah' (Lion / Hunter Archer) in Surah Al-Muddaththir with a very strong allegory. 'As if they were alarmed donkeys, fleeing from a lion'. This is a powerful metaphor: divine truth is very strong like a lion's roar, but diseased souls run away from it out of baseless fear!" },
    quranVerse: {
      arabic: "كَأَنَّهُمْ حُمُرٌ مُّسْتَنفِرَةٌ * فَرَّتْ مِن قَسْوَرَةٍ",
      transliteration: "Ka-annahum humurun mustanfirah. Farrat min qaswarah.",
      translation: { id: "Seakan-akan mereka keledai liar yang lari terkejut, lari dari singa.", en: "As if they were alarmed donkeys. Fleeing from a lion." }
    },
    quiz: [
      {
        question: { id: "Berapa jarak auman singa bisa terdengar oleh manusia?", en: "From what distance can a lion's roar be heard by humans?" },
        options: [{ text: { id: "1 kilometer", en: "1 kilometer" } }, { text: { id: "8 kilometer", en: "8 kilometers" } }, { text: { id: "100 meter", en: "100 meters" } }, { text: { id: "20 kilometer", en: "20 kilometers" } }],
        answerIdx: 1
      },
      {
        question: { id: "Dalam Al-Muddaththir, orang kafir yang lari dari peringatan Al-Qur'an disamakan dengan...", en: "In Al-Muddaththir, disbelievers fleeing from Qur'an warnings are likened to..." },
        options: [{ text: { id: "Monyet lari dari pisang", en: "Monkeys fleeing from bananas" } }, { text: { id: "Keledai ketakutan dikejar singa", en: "Terrified donkeys chased by lions" } }, { text: { id: "Domba dikejar serigala", en: "Sheep chased by wolves" } }, { text: { id: "Burung lari dari elang", en: "Birds fleeing from eagles" } }],
        answerIdx: 1
      },
      {
        question: { id: "Lapisan di belakang mata singa yang membuat penglihatan malamnya tajam disebut?", en: "The layer behind a lion's eyes that makes its night vision sharp is called?" },
        options: [{ text: { id: "Retina", en: "Retina" } }, { text: { id: "Pupil", en: "Pupil" } }, { text: { id: "Tapetum Lucidum", en: "Tapetum Lucidum" } }, { text: { id: "Kornea", en: "Cornea" } }],
        answerIdx: 2
      }
    ]
  }
};
