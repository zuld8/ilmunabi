import { ObjectData } from "../objects";

export const nyamukData: ObjectData = {
  slug: "nyamuk",
  name: { id: "Nyamuk", en: "Mosquito" },
  icon: "🦟",
  category: "hewan",
  type: "hewan",
  scientificName: "Culicidae",
  surahName: "Al-Baqarah",
  surahReference: "2:26",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "بَعُوضَةٌ", latin: "ba'uudatun", arti: "Nyamuk", artiEn: "Mosquito", contohAyat: "مَثَلًا مَا بَعُوضَةً (suatu perumpamaan seekor nyamuk)" }
  ],
  balita: {
    text: { id: "Nguung... 🦟 Nyamuk itu kecil sekali dan suka menggigit. Kalau tidur, pakai selimut ya biar tidak digigit nyamuk!", en: "Bzzzz... 🦟 Mosquitoes are very small and love to bite. When sleeping, use a blanket so you don't get bitten!" },
    audioTranscript: { id: "Ngiiiiing... Hai! Aku nyamuk. Badanku sangat kecil. Kamu harus rajin membersihkan air genangan agar teman-temanku tidak bersarang di sana!", en: "Bzzzzz... Hi! I am a mosquito. My body is very small. You must regularly clean stagnant water so my friends don't nest there!" },
    quiz: {
      question: { id: "Di mana nyamuk biasanya suka bertelur?", en: "Where do mosquitoes usually like to lay their eggs?" },
      options: [
        { text: { id: "Di atas kasur", en: "On a bed" } },
        { text: { id: "Di air yang menggenang", en: "In stagnant water" } },
        { text: { id: "Di daun kering", en: "On dry leaves" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Tahukah kamu? Hanya nyamuk betina yang menggigit kita! Mereka butuh darah untuk memberi makan telur-telurnya. Sedangkan nyamuk jantan hanya makan sari bunga lho!", en: "Did you know? Only female mosquitoes bite us! They need blood to feed their eggs. Meanwhile, male mosquitoes only drink flower nectar!" },
    facts: [
      { id: "Nyamuk bisa mendeteksi karbon dioksida dari napas kita dari jarak 50 meter! 🌬️", en: "Mosquitoes can detect carbon dioxide from our breath from 50 meters away! 🌬️" },
      { id: "Sayap nyamuk mengepak hingga 1000 kali per detik! ⏱️", en: "Mosquito wings flap up to 1000 times per second! ⏱️" },
      { id: "Ada hewan yang lebih kecil lagi yang hidup di atas tubuh nyamuk lho! 🔬", en: "There are even smaller animals living on top of a mosquito's body! 🔬" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Meskipun sangat kecil, struktur tubuh nyamuk sangat rumit dan canggih! Allah berfirman dalam Al-Baqarah bahwa Dia tidak malu membuat perumpamaan berupa nyamuk atau yang lebih kecil dari itu (kutu di atas nyamuk). Ilmu pengetahuan modern baru membuktikan bahwa memang ada mikroorganisme yang menumpang hidup di atas tubuh nyamuk!", en: "Although very small, a mosquito's body structure is highly complex and advanced! Allah states in Al-Baqarah that He is not ashamed to present an example of a mosquito or what is smaller than it (mites on the mosquito). Modern science has only recently proven that there are indeed microorganisms living on a mosquito's body!" },
    quranVerse: {
      arabic: "إِنَّ اللَّهَ لَا يَسْتَحْيِي أَنْ يَضْرِبَ مَثَلًا مَا بَعُوضَةً فَمَا فَوْقَهَا",
      transliteration: "Innallaaha laa yastahyii an yadriba mathalan maa ba'uudatan famaa fawqahaa",
      translation: { id: "Sesungguhnya Allah tidak segan membuat perumpamaan berupa nyamuk atau yang lebih rendah dari itu.", en: "Indeed, Allah is not timid to present an example - that of a mosquito or what is smaller than it." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
