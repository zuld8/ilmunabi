import { ObjectData } from "../objects";

export const terataiData: ObjectData = {
  slug: "teratai",
  name: { id: "Teratai", en: "Lotus" },
  icon: "🪷",
  category: "tumbuhan",
  type: "tumbuhan",
  scientificName: "Nelumbo nucifera",
  surahName: "Al-Baqarah",
  surahReference: "2:164",
  unlockedAtPoints: 170,
  kosakata: [
    { arab: "لُوتَس", latin: "luutas", arti: "Teratai", artiEn: "Lotus", contohAyat: "Teratai di atas air." }
  ],
  balita: {
    text: { id: "Wah, bunganya mengapung di atas air! Daunnya lebar seperti piring! 🪷", en: "Wow, the flower floats on water! Its leaves are wide like a plate! 🪷" },
    audioTranscript: { id: "Katak suka melompat hop! hop! ke atas daun teratai. Bunga teratai mekar dengan sangat cantik dan wangi walau hidupnya di air yang berlumpur kotor.", en: "Frogs love to jump hop! hop! onto lotus leaves. Lotus flowers bloom very beautifully and fragrantly even though they live in dirty muddy water." },
    quiz: {
      question: { id: "Di manakah bunga teratai hidup?", en: "Where do lotus flowers live?" },
      options: [
        { text: { id: "Di gurun pasir", en: "In the desert" } },
        { text: { id: "Mengapung di atas air/kolam", en: "Floating on water/ponds" } },
        { text: { id: "Tumbuh menempel di dinding", en: "Growing attached to walls" } }
      ],
      answerIdx: 1
    }
  },
  anak: {
    text: { id: "Kok daun teratai tidak pernah basah kuyup meski terus-terusan di atas air? Itu karena daun teratai punya lapisan lilin super ajaib bernama 'Efek Lotus' yang membuat debu dan air langsung meluncur jatuh!", en: "How come lotus leaves never get soaking wet even though they're constantly on water? That's because lotus leaves have a super magical wax layer called the 'Lotus Effect' which makes dust and water instantly slide off!" },
    facts: [
      { id: "Akar teratai tertanam kuat di dasar lumpur, batangnya memanjang naik ke permukaan air.", en: "Lotus roots are firmly planted in the mud at the bottom, their stems stretch up to the water surface." },
      { id: "Biji teratai bisa bertahan hidup selama lebih dari ribuan tahun sebelum ditanam.", en: "Lotus seeds can survive for over thousands of years before being planted." },
      { id: "Akar teratai berongga dan bisa dimasak jadi sayur, rasanya renyah kress-kress!", en: "Lotus roots are hollow and can be cooked as vegetables, they taste crunchy crisp!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Para ilmuwan mencoba meniru 'Efek Lotus' pada daun teratai untuk membuat pakaian anti air dan cat anti kotor, ini namanya Biomimikri. Allah Yang Maha Mengetahui telah mendesain nanoteknologi canggih pada daun teratai sejak awal mula penciptaan. Masya Allah!", en: "Scientists try to imitate the 'Lotus Effect' on lotus leaves to make waterproof clothes and dirt-repellent paint, this is called Biomimicry. Allah the All-Knowing has designed advanced nanotechnology on lotus leaves since the beginning of creation. Masya Allah!" },
    quranVerse: {
      arabic: "هَذَا خَلْقُ اللَّهِ فَأَرُونِي مَاذَا خَلَقَ الَّذِينَ مِنْ دُونِهِ",
      transliteration: "Hādhā khalqullāhi fa-arūnī mādhā khalaqal-ladhīna min dūnih",
      translation: { id: "Inilah ciptaan Allah, maka perlihatkanlah olehmu kepadaku apa yang telah diciptakan oleh sembahan-sembahan(mu) selain Allah.", en: "This is the creation of Allah. So show Me what those other than Him have created." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
