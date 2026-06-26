import { ObjectData } from "../objects";

export const darahData: ObjectData = {
  slug: "darah",
  name: { id: "Darah", en: "Blood" },
  icon: "🩸",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Sanguis",
  surahName: "Al-Alaq",
  surahReference: "96:2",
  unlockedAtPoints: 30,
  kosakata: [
    { arab: "دَمٌ", latin: "damun", arti: "Darah", artiEn: "Blood", contohAyat: "خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ" }
  ],
  balita: {
    text: { id: "Darah warnanya merah mengalir di tubuh kita! 🩸", en: "Blood is red and flows in our body! 🩸" },
    audioTranscript: { id: "Kalau kamu luka, darah keluar, tapi nanti akan sembuh sendiri dan tertutup, hebat ya tubuh kita!", en: "If you get a cut, blood comes out, but it will heal itself and close up, our body is amazing!" },
    quiz: {
      question: { id: "Apa warna darah kita?", en: "What color is our blood?" },
      options: [
        { text: { id: "Merah", en: "Red" } },
        { text: { id: "Biru", en: "Blue" } },
        { text: { id: "Kuning", en: "Yellow" } }
      ],
      answerIdx: 0
    }
  },
  anak: {
    text: { id: "Darah itu seperti truk pengantar barang! Ia mengantar oksigen ke seluruh tubuh supaya kita kuat. Kalau ada kuman masuk, sel darah putih akan berubah jadi tentara super yang akan melawan mereka!", en: "Blood is like a delivery truck! It delivers oxygen all over the body so we stay strong. If germs enter, white blood cells turn into super soldiers to fight them!" },
    facts: [
      { id: "Tubuh anak-anak memiliki sekitar 2-3 liter darah.", en: "A child's body has about 2-3 liters of blood." },
      { id: "Sel darah merah kita berumur 120 hari lalu diganti baru.", en: "Our red blood cells live for 120 days then get replaced." },
      { id: "Jantung memompa darah ke seluruh tubuh tanpa henti!", en: "The heart pumps blood throughout the body endlessly!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Di dalam darah terdapat sel darah merah (eritrosit) yang membawa oksigen, sel darah putih (leukosit) sebagai antibodi, dan keping darah (trombosit) yang menutup luka! Allah menjelaskan dalam Al-Qur'an bahwa manusia diciptakan dari segumpal darah (Alaq), fakta embriologi yang terbukti kebenarannya ratusan tahun setelahnya!", en: "Inside the blood are red blood cells (erythrocytes) carrying oxygen, white blood cells (leukocytes) as antibodies, and platelets (thrombocytes) closing wounds! Allah explains in the Quran that humans were created from a clinging clot of blood (Alaq), an embryological fact proven true hundreds of years later!" },
    quranVerse: {
      arabic: "خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ",
      transliteration: "Khalaqal insaana min 'alaq",
      translation: { id: "Dia telah menciptakan manusia dari segumpal darah.", en: "Created man from a clinging substance." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
