import { ObjectData } from "../objects";

export const jangkrikData: ObjectData = {
  slug: "jangkrik",
  name: { id: "Jangkrik", en: "Cricket" },
  scientificName: "Gryllidae",
  surahName: "Al-An'am",
  surahReference: "6:38",
  icon: "🦗",
  category: "hewan",
  type: "hewan",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "صَوْتٌ", latin: "Shawtun", arti: "Suara", artiEn: "Sound", contohAyat: "Luqman 31:19" },
    { arab: "لَيْلٌ", latin: "Lailun", arti: "Malam", artiEn: "Night", contohAyat: "Al-Baqarah 2:164" },
    { arab: "جَنَاحٌ", latin: "Janaahun", arti: "Sayap", artiEn: "Wing", contohAyat: "Al-An'am 6:38" },
    { arab: "تَسْبِيحٌ", latin: "Tasbiihun", arti: "Bertasbih/Memuji", artiEn: "Glorify", contohAyat: "Al-Isra 17:44" }
  ],
  balita: {
    text: {
      id: "Krik! Krik! Krik! Jangkrik suka bernyanyi di malam hari lho. 🦗",
      en: "Chirp! Chirp! Crickets love to sing at night. 🦗"
    },
    audioTranscript: {
      id: "Dengar suara jangkrik itu. Krik krik krik. Mereka bernyanyi memuji Allah di malam hari.",
      en: "Listen to the cricket's sound. Chirp chirp. They sing praising Allah at night."
    },
    quiz: {
      question: { id: "Kapan jangkrik biasanya bernyanyi?", en: "When do crickets usually sing?" },
      options: [
        { text: { id: "Siang hari", en: "Daytime" } },
        { text: { id: "Malam hari", en: "Nighttime" } },
        { text: { id: "Saat hujan", en: "When it rains" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: {
      id: "Jangkrik adalah pemusik malam yang handal! Tahukah kamu bahwa semua makhluk, termasuk jangkrik, bertasbih memuji Allah dengan cara mereka sendiri?",
      en: "Crickets are expert night musicians! Did you know that all creatures, including crickets, glorify Allah in their own way?"
    },
    facts: [
      { id: "Suara krik-krik berasal dari gesekan sayap mereka, bukan mulutnya!", en: "The chirping sound comes from rubbing their wings together, not their mouths!" },
      { id: "Telinga jangkrik terletak di kaki depannya.", en: "A cricket's ears are located on its front legs." },
      { id: "Jangkrik jantan bersuara untuk memanggil jangkrik betina.", en: "Male crickets chirp to call females." },
      { id: "Kamu bisa menghitung suhu udara dari kecepatan suara jangkrik.", en: "You can calculate air temperature from the speed of cricket chirps." },
      { id: "Hanya jangkrik jantan yang bisa 'bernyanyi' krik-krik.", en: "Only male crickets can 'sing' chirp-chirp." }
    ],
    quranVerse: {
      arabic: "تُسَبِّحُ لَهُ السَّمَاوَاتُ السَّبْعُ وَالْأَرْضُ وَمَن فِيهِنَّ ۚ وَإِن مِّن شَيْءٍ إِلَّا يُسَبِّحُ بِحَمْدِهِ",
      transliteration: "Tusabbiḥu lahus-samāwātus-sab'u wal-arḍu wa man fīhinn, wa im min syai'in illā yusabbiḥu biḥamdih",
      translation: {
        id: "Langit yang tujuh, bumi dan semua yang ada di dalamnya bertasbih kepada Allah. Dan tak ada suatupun melainkan bertasbih dengan memuji-Nya,",
        en: "The seven heavens and the earth and whatever is in them exalt Him. And there is not a thing except that it exalts [Allah] by His praise,"
      }
    },
    quiz: {
      question: { id: "Bagaimana cara jangkrik menghasilkan suara krik-krik?", en: "How do crickets produce the chirping sound?" },
      options: [
        { text: { id: "Bersiul dengan mulut", en: "Whistling with their mouth" } },
        { text: { id: "Menggesekkan sayapnya", en: "Rubbing their wings" } },
        { text: { id: "Menepuk kakinya", en: "Clapping their legs" } }
      ],
      answerIdx: 1
    }
  },
  explorer: {
    text: {
      id: "Sayap jangkrik memiliki gigi-gigi halus layaknya sisir (file) dan pengerik (scraper). Saat digesekkan (stridulasi), struktur ini menghasilkan frekuensi resonansi yang sangat nyaring!",
      en: "Cricket wings have fine teeth like a comb (file) and a scraper. When rubbed together (stridulation), this structure produces a very loud resonant frequency!"
    },
    anatomy: [
      { part: { id: "Stridulatory Organ", en: "Stridulatory Organ" }, desc: { id: "Alat penggesek di sayap untuk membuat suara.", en: "Rubbing tool on the wings to make sounds." } },
      { part: { id: "Tympanum", en: "Tympanum" }, desc: { id: "Gendang telinga yang berada di kaki depan.", en: "Eardrum located on the front legs." } }
    ],
    wowFactor: {
      id: "Hukum Dolbear membuktikan suhu berbanding lurus dengan detak jangkrik! Allah telah memasukkan rumus termodinamika alami ke dalam serangga sekecil ini. Masya Allah!",
      en: "Dolbear's Law proves temperature is directly proportional to cricket chirps! Allah has embedded a natural thermodynamic formula into such a tiny insect. Masya Allah!"
    },
    quranVerse: {
      arabic: "وَمَا مِن دَابَّةٍ فِي الْأَرْضِ وَلَا طَائِرٍ يَطِيرُ بِجَنَاحَيْهِ إِلَّا أُمَمٌ أَمْثَالُكُم",
      transliteration: "Wa mā min dābbatin fil-arḍi wa lā ṭā'iriy yaṭīru bijanāḥaihi illā umamun amsālukum",
      translation: { id: "Dan tiadalah binatang-binatang yang ada di bumi dan burung-burung yang terbang dengan kedua sayapnya, melainkan umat-umat (juga) seperti kamu.", en: "And there is no creature on [or within] the earth or bird that flies with its wings except [that they are] communities like you." },
      context: { id: "Sistem komunikasi jangkrik menunjukkan mereka adalah umat dengan cara hidup dan bahasa yang kompleks.", en: "The cricket communication system shows they are a community with complex lifestyles and languages." }
    },
    quiz: [
      {
        question: { id: "Telinga jangkrik terletak di bagian mana?", en: "Where are a cricket's ears located?" },
        options: [
          { text: { id: "Kepala", en: "Head" } },
          { text: { id: "Kaki depan", en: "Front legs" } },
          { text: { id: "Perut", en: "Belly" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Istilah untuk menghasilkan suara dengan menggesekkan bagian tubuh disebut?", en: "The term for producing sound by rubbing body parts is called?" },
        options: [
          { text: { id: "Ekolokasi", en: "Echolocation" } },
          { text: { id: "Stridulasi", en: "Stridulation" } },
          { text: { id: "Respirasi", en: "Respiration" } }
        ],
        answerIdx: 1
      },
      {
        question: { id: "Rumus sains apa yang berhubungan dengan jangkrik?", en: "What scientific formula is related to crickets?" },
        options: [
          { text: { id: "Hukum Newton", en: "Newton's Law" } },
          { text: { id: "Hukum Dolbear (Suhu udara)", en: "Dolbear's Law (Air temperature)" } },
          { text: { id: "Hukum Archimedes", en: "Archimedes' Principle" } }
        ],
        answerIdx: 1
      }
    ]
  }
};
