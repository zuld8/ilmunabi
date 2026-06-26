import { ObjectData } from "../objects";

export const gandumData: ObjectData = {
  slug: "gandum",
  name: { id: "Gandum", en: "Wheat" },
  icon: "🌾",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Triticum",
  surahName: "Al-Baqarah",
  surahReference: "2:261",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "حِنْطَة / قَمْح", latin: "Hinṭah / Qamh", arti: "Gandum", artiEn: "Wheat", contohAyat: "Roti dibuat dari tepung gandum." }
  ],
  balita: {
    text: { id: "Lihat ladang kuning itu! Gandum bergoyang ditiup angin. 🌾 Gandum adalah makanan kesukaan banyak orang karena bisa dibuat menjadi roti yang empuk!", en: "Look at that yellow field! Wheat swaying in the wind. 🌾 Wheat is many people's favorite food because it can be made into soft bread!" },
    audioTranscript: { id: "Tepung untuk membuat roti dan kue asalnya dari gandum.", en: "Flour to make bread and cake comes from wheat." },
    quiz: {
      question: { id: "Biji gandum bisa digiling dan diubah menjadi apa?", en: "Wheat grains can be ground and turned into what?" },
      options: [
        { text: { id: "Tepung untuk roti", en: "Flour for bread" } },
        { text: { id: "Air minum", en: "Drinking water" } },
        { text: { id: "Kertas", en: "Paper" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Gandum adalah tanaman yang ditanam oleh para petani. Setiap biji gandum yang ditanam bisa tumbuh dan menghasilkan banyak biji gandum baru! Di dalam Al-Qur'an, Allah mengumpamakan orang yang bersedekah itu seperti menanam sebutir gandum yang menumbuhkan ratusan biji baru. Subhanallah, kebaikan dilipatgandakan!", en: "Wheat is a plant grown by farmers. Every wheat grain planted can grow and produce many new wheat grains! In the Quran, Allah compares people who give charity to planting a grain of wheat that grows hundreds of new grains. Subhanallah, good deeds are multiplied!" },
    facts: [
      { id: "Gandum telah menjadi makanan manusia selama lebih dari 10.000 tahun.", en: "Wheat has been human food for over 10,000 years." },
      { id: "Pasta, mie, dan roti semuanya berawal dari tanaman rumput yang disebut gandum ini.", en: "Pasta, noodles, and bread all start from this grass plant called wheat." },
      { id: "Gandum adalah salah satu tanaman yang paling banyak ditanam di seluruh dunia.", en: "Wheat is one of the most widely grown crops worldwide." }
    ],
    quranVerse: {
      arabic: "مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ",
      transliteration: "Mathalu alladhīna yunfiqūna amwālahum fī sabīli Allāhi kamathali ḥabbatin anbatat sab‘a sanābila fī kulli sunbulatin mi'atu ḥabbatin",
      translation: { id: "Perumpamaan orang yang menafkahkan hartanya di jalan Allah adalah serupa dengan sebutir benih yang menumbuhkan tujuh bulir, pada tiap-tiap bulir seratus biji...", en: "The example of those who spend their wealth in the way of Allah is like a seed of grain which grows seven spikes; in each spike is a hundred grains..." },
      context: { id: "Allah melipatgandakan pahala bersedekah seperti gandum yang berlipat ganda tumbuhnya.", en: "Allah multiplies the reward of charity like wheat that grows abundantly." }
    },
    quiz: {
      question: { id: "Menurut perumpamaan di Al-Qur'an, orang yang bersedekah akan mendapat pahala yang dilipatgandakan seperti?", en: "According to the analogy in the Quran, people who give charity will get rewards multiplied like?" },
      options: [
        { text: { id: "Burung yang terbang bebas", en: "A bird flying free" } },
        { text: { id: "Sebutir benih (gandum) yang tumbuh menjadi sangat banyak", en: "A seed (of wheat) that grows into so many" } },
        { text: { id: "Batu yang diam", en: "A silent stone" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: { id: "Biji gandum memiliki struktur yang sempurna untuk memberi nutrisi kepada manusia. Ia terdiri dari tiga bagian utama: dedak (kulit luar), endosperma (bagian tengah penghasil tepung), dan lembaga (inti biji yang kaya vitamin). Desain ini menunjukkan bagaimana Allah, Ar-Razzaq (Maha Pemberi Rezeki), telah mengemas nutrisi lengkap dalam satu butir benih kecil.", en: "Wheat grains have a perfect structure to provide nutrition for humans. It consists of three main parts: bran (outer skin), endosperm (the starchy middle part), and germ (the vitamin-rich core). This design shows how Allah, Ar-Razzaq (The Provider), has packed complete nutrition into one small seed." },
    anatomy: [
      { part: { id: "Endosperma", en: "Endosperm" }, desc: { id: "Bagian putih paling besar di dalam gandum yang mengandung karbohidrat (tepung).", en: "The largest white part inside the wheat that contains carbohydrates (flour)." } },
      { part: { id: "Dedak (Bran)", en: "Bran" }, desc: { id: "Kulit luar gandum yang keras dan sangat kaya akan serat.", en: "The hard outer skin of the wheat that is very rich in fiber." } }
    ],
    wowFactor: { id: "Jika kita membariskan semua gandum yang ditanam di bumi, barisan itu bisa menutupi permukaan bulan sepenuhnya!", en: "If we lined up all the wheat grown on earth, the line could cover the surface of the moon entirely!" },
    quranVerse: {
      arabic: "وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ",
      transliteration: "Wa Allāhu yuḍā‘ifu liman yashā'u, wa Allāhu wāsi‘un ‘alīmun",
      translation: { id: "...Allah melipatgandakan (ganjaran) bagi siapa yang Dia kehendaki. Dan Allah Maha Luas (karunia-Nya) lagi Maha Mengetahui.", en: "...Allah multiplies [His reward] for whom He wills. And Allah is all-Encompassing and Knowing." }
    },
    quiz: [
      {
        question: { id: "Bagian dari gandum yang paling banyak diubah menjadi tepung putih adalah?", en: "Which part of wheat is mostly turned into white flour?" },
        options: [
          { text: { id: "Dedak (Bran)", en: "Bran" } },
          { text: { id: "Endosperma", en: "Endosperm" } },
          { text: { id: "Akar", en: "Root" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
