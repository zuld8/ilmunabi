import { ObjectData } from "../objects";

export const tulangData: ObjectData = {
  slug: "tulang",
  name: { id: "Tulang", en: "Bone" },
  icon: "🦴",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Os / Osteon",
  surahName: "Al-Mu'minun",
  surahReference: "23:14",
  unlockedAtPoints: 50,
  
  kosakata: [
    { arab: "عَظْمٌ", latin: "'Azm", arti: "Tulang", artiEn: "Bone", contohAyat: "Tulang dibalut dengan daging." },
    { arab: "لَحْمٌ", latin: "Lahm", arti: "Daging / Otot", artiEn: "Flesh / Muscle", contohAyat: "Daging membungkus tulang." },
    { arab: "هَيْكَلٌ", latin: "Haykal", arti: "Rangka", artiEn: "Skeleton", contohAyat: "Rangka tubuh manusia." },
    { arab: "مَفْصِلٌ", latin: "Mafsil", arti: "Sendi", artiEn: "Joint", contohAyat: "Pertemuan dua tulang." }
  ],
  
  balita: {
    text: { id: "Di dalam tubuhmu ada yang keras, namanya tulang! 🦴", en: "Inside your body there is something hard, it's called bone! 🦴" },
    audioTranscript: { id: "Coba pegang lengan atau lututmu! Keras kan? Itu namanya tulang! Tulang bikin kita bisa berdiri tegak dan tidak meleyot seperti jeli.", en: "Try touching your arm or knee! Hard isn't it? That's called bone! Bones make us stand straight and not wobbly like jelly." },
    quiz: {
      question: { id: "Kenapa kita bisa berdiri tegak?", en: "Why can we stand up straight?" },
      options: [
        { text: { id: "Karena kita punya tulang 🦴", en: "Because we have bones 🦴" } },
        { text: { id: "Karena kita makan permen 🍬", en: "Because we eat candy 🍬" } },
        { text: { id: "Karena kita minum jus 🧃", en: "Because we drink juice 🧃" } }
      ],
      answerIdx: 0
    }
  },
  
  anak: {
    text: { id: "Rangka tubuhmu terdiri dari banyak tulang yang saling bersambung seperti mainan balok susun!", en: "Your skeleton consists of many bones connected to each other like building blocks!" },
    facts: [
      { id: "Saat bayi kamu punya 300 tulang, tapi saat dewasa tinggal 206 tulang karena beberapa tulang menyatu.", en: "As a baby you have 300 bones, but as an adult you only have 206 because some bones fuse together." },
      { id: "Tulangmu lebih kuat dari beton, tapi jauh lebih ringan!", en: "Your bone is stronger than concrete, but much lighter!" },
      { id: "Tulang paha adalah tulang terpanjang dan terkuat di tubuhmu.", en: "The femur (thigh bone) is the longest and strongest bone in your body." },
      { id: "Gigi sebenarnya adalah bagian dari sistem kerangka, tapi tidak dihitung sebagai tulang.", en: "Teeth are actually part of the skeletal system, but are not counted as bones." },
      { id: "Di dalam tulangmu ada sumsum tulang yang memproduksi sel darah merah baru.", en: "Inside your bones is bone marrow which produces new red blood cells." }
    ],
    quranVerse: {
      arabic: "فَخَلَقْنَا الْمُضْغَةَ عِظَامًا فَكَسَوْنَا الْعِظَامَ لَحْمًا",
      transliteration: "Fakhalaqnal-mudghata 'izaman fakasawnal-'izama lahman",
      translation: { id: "Lalu segumpal daging itu Kami jadikan tulang belulang, lalu tulang belulang itu Kami bungkus dengan daging.", en: "Then We made the morsel of flesh into bones, then We covered the bones with flesh." },
      context: { id: "Tau nggak? Al-Qur'an menjelaskan bahwa saat bayi tumbuh di dalam perut ibu, tulang terbentuk lebih dulu, baru kemudian dibungkus oleh otot (daging). Fakta ini baru diketahui ilmuwan modern lewat alat USG lho!", en: "Did you know? The Qur'an explains that when a baby grows in the mother's womb, bones form first, then covered by muscles (flesh). This fact was only known by modern scientists through ultrasound!" }
    },
    quiz: {
      question: { id: "Berapa banyak tulang yang dimiliki manusia dewasa?", en: "How many bones does an adult human have?" },
      options: [
        { text: { id: "300 tulang", en: "300 bones" } },
        { text: { id: "206 tulang", en: "206 bones" } },
        { text: { id: "50 tulang", en: "50 bones" } },
        { text: { id: "1000 tulang", en: "1000 bones" } }
      ],
      answerIdx: 1
    }
  },
  
  explorer: {
    text: { id: "Tulang manusia adalah struktur yang sangat canggih. Bagian luarnya padat dan keras (tulang kompak), sedangkan bagian dalamnya berongga seperti spons (tulang spons) untuk membuatnya tetap ringan.\n\nGabungan antara tulang, sendi, dan otot memungkinkan kita melompat, menari, dan berlari.\n\nTahukah kamu bahwa tulang adalah jaringan hidup yang punya aliran darah dan sel saraf sendiri? Itulah sebabnya tulang yang patah bisa menyambung kembali!", en: "Human bone is a very advanced structure. The outer part is dense and hard (compact bone), while the inside is hollow like a sponge (spongy bone) to keep it light.\n\nThe combination of bones, joints, and muscles allows us to jump, dance, and run.\n\nDid you know that bone is living tissue that has its own blood flow and nerve cells? That's why broken bones can heal themselves!" },
    anatomy: [
      { part: { id: "Tulang Paha (Femur)", en: "Femur" }, desc: { id: "Tulang terkuat dan terpanjang di kaki kita.", en: "The strongest and longest bone in our leg." } },
      { part: { id: "Sumsum Tulang", en: "Bone Marrow" }, desc: { id: "Pabrik di dalam tulang yang membuat jutaan darah setiap hari.", en: "The factory inside the bone that makes millions of blood cells every day." } }
    ],
    wowFactor: { id: "Profesor Keith Moore, seorang ilmuwan embriologi terkenal di dunia, sangat takjub ketika membaca Surah Al-Mu'minun ayat 14.\n\nSelama ribuan tahun, manusia tidak tahu tahap perkembangan bayi. Al-Qur'an secara akurat menyebutkan urutannya: dari nutfah, segumpal darah, segumpal daging, pembentukan tulang, lalu tulang itu dibungkus otot.\n\nUrutan presisi ini mustahil diketahui 1400 tahun lalu tanpa mikroskop dan USG!", en: "Professor Keith Moore, a world-renowned embryologist, was amazed when reading Surah Al-Mu'minun verse 14.\n\nFor thousands of years, humans didn't know the stages of baby development. The Qur'an accurately states the order: from a drop, to a clot of blood, to a lump of flesh, bone formation, then the bones are clothed with muscles.\n\nThis precise order was impossible to know 1400 years ago without microscopes and ultrasounds!" },
    quranVerse: {
      arabic: "فَخَلَقْنَا الْمُضْغَةَ عِظَامًا فَكَسَوْنَا الْعِظَامَ لَحْمًا ثُمَّ أَنشَأْنَاهُ خَلْقًا آخَرَ ۚ فَتَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ",
      transliteration: "Fakhalaqnal-mudghata 'izaman fakasawnal-'izama lahman thumma ansha'nahu khalqan akhara, fatabarakallahu ahsanul-khaliqin",
      translation: { id: "Lalu tulang belulang itu Kami bungkus dengan daging. Kemudian Kami jadikan dia makhluk yang (berbentuk) lain. Maka Mahasuci Allah, Pencipta Yang Paling Baik.", en: "Then We covered the bones with flesh; then We developed him into another creation. So blessed is Allah, the best of creators." }
    },
    quiz: [
      {
        question: { id: "Menurut Al-Qur'an dan sains modern, manakah yang terbentuk lebih dulu di dalam kandungan?", en: "According to the Qur'an and modern science, which forms first in the womb?" },
        options: [{ text: { id: "Otot/Daging", en: "Muscle/Flesh" } }, { text: { id: "Tulang", en: "Bone" } }, { text: { id: "Rambut", en: "Hair" } }, { text: { id: "Kulit", en: "Skin" } }],
        answerIdx: 1
      },
      {
        question: { id: "Tulang terpanjang dan terkuat di tubuh manusia adalah...", en: "The longest and strongest bone in the human body is..." },
        options: [{ text: { id: "Tulang lengan", en: "Arm bone" } }, { text: { id: "Tulang rusuk", en: "Rib" } }, { text: { id: "Tulang tengkorak", en: "Skull bone" } }, { text: { id: "Tulang paha (Femur)", en: "Femur" } }],
        answerIdx: 3
      },
      {
        question: { id: "Apa fungsi sumsum tulang yang berada di bagian tengah tulang kita?", en: "What is the function of the bone marrow located in the middle of our bones?" },
        options: [{ text: { id: "Membuat otot", en: "Making muscles" } }, { text: { id: "Menyimpan air", en: "Storing water" } }, { text: { id: "Memproduksi sel darah", en: "Producing blood cells" } }, { text: { id: "Menghancurkan kuman", en: "Destroying germs" } }],
        answerIdx: 2
      }
    ]
  }
};
