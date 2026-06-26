import { ObjectData } from "../objects";

export const lidahData: ObjectData = {
  slug: "lidah",
  name: { id: "Lidah", en: "Tongue" },
  icon: "👅",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Lingua",
  surahName: "Al-Balad",
  surahReference: "90:9",
  unlockedAtPoints: 10,
  kosakata: [
    { arab: "لِسَانٌ", latin: "lisaanun", arti: "Lidah", artiEn: "Tongue", contohAyat: "وَلِسَانًا وَشَفَتَيْنِ" }
  ],
  balita: {
    text: { id: "Nyam! Es krim ini rasanya manis! 👅", en: "Yum! This ice cream tastes sweet! 👅" },
    audioTranscript: { id: "Lidah ada di dalam mulut. Lidah bikin kita bisa merasakan manis, asin, dan asam. Lidah juga bantu kita bicara lho!", en: "The tongue is inside the mouth. The tongue makes us taste sweet, salty, and sour. The tongue also helps us talk!" },
    quiz: {
      question: { id: "Benda apa yang bisa kita rasakan manisnya pakai lidah?", en: "What thing can we taste its sweetness using our tongue?" },
      options: [
        { text: { id: "Batu", en: "Stone" } },
        { text: { id: "Permen", en: "Candy" } },
        { text: { id: "Kayu", en: "Wood" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Lidah adalah otot paling kuat dan paling lentur! Di atas lidah ada bintik-bintik kecil (papila) yang mendeteksi rasa manis, asin, asam, pahit, dan gurih (umami). Tanpa lidah, semua makanan rasanya akan tawar seperti air putih!", en: "The tongue is the strongest and most flexible muscle! On top of the tongue there are tiny bumps (papillae) that detect sweet, salty, sour, bitter, and savory (umami) flavors. Without a tongue, all food would taste bland like plain water!" },
    facts: [
      { id: "Sidik lidah tiap orang berbeda, sama seperti sidik jari!", en: "Every person's tongue print is different, just like a fingerprint!" },
      { id: "Lidah membantu menggulung makanan jadi bulat agar mudah ditelan.", en: "The tongue helps roll food into a ball to make it easy to swallow." },
      { id: "Lidah terdiri dari 8 otot yang saling bekerja sama.", en: "The tongue is made of 8 muscles working together." }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Lidah berfungsi utama dalam artikulasi (berbicara) dan mastikasi (mengunyah). Melalui saraf kranial, lidah mengirim sinyal rasa ke otak dengan kecepatan luar biasa. Allah mengingatkan kita dalam Al-Qur'an tentang nikmat lidah ini, sekaligus peringatan untuk selalu berkata yang baik!", en: "The tongue functions primarily in articulation (speaking) and mastication (chewing). Through cranial nerves, the tongue sends taste signals to the brain at incredible speeds. Allah reminds us in the Quran of the blessing of the tongue, as well as a warning to always speak good!" },
    quranVerse: {
      arabic: "وَلِسَانًا وَشَفَتَيْنِ",
      transliteration: "Wa lisaanan wa syafatayn",
      translation: { id: "Dan lidah dan dua buah bibir?", en: "And a tongue and two lips?" }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};