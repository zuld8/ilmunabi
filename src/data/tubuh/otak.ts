import { ObjectData } from "../objects";

export const otakData: ObjectData = {
  slug: "otak",
  name: { id: "Otak", en: "Brain" },
  icon: "🧠",
  category: "tubuh",
  type: "tubuh",
  scientificName: "Cerebrum",
  surahName: "Al-Alaq",
  surahReference: "96:15-16",
  unlockedAtPoints: 50,
  kosakata: [
    { arab: "مُخٌّ", latin: "mukhkhun", arti: "Otak", artiEn: "Brain", contohAyat: "نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ" }
  ],
  balita: {
    text: { id: "Ini otak kita, letaknya di kepala! 🧠", en: "This is our brain, inside our head! 🧠" },
    audioTranscript: { id: "Otak adalah bos yang menyuruh tubuh kita bergerak. Mau melompat, nyanyi, atau makan, otak yang kasih perintah!", en: "The brain is the boss that tells our body to move. Want to jump, sing, or eat, the brain gives the order!" },
    quiz: {
      question: { id: "Di mana letak otak kita?", en: "Where is our brain located?" },
      options: [
        { text: { id: "Di perut", en: "In the stomach" } },
        { text: { id: "Di kaki", en: "In the foot" } },
        { text: { id: "Di kepala", en: "In the head" } }
      ],
      answerIdx: 2
    }
  },
  anak: {
    text: { id: "Otak itu superkomputer terhebat di dunia ciptaan Allah! Otak bisa menyimpan ingatan, bikin kita pintar, dan bisa bermimpi. Otak kita tidak pernah tidur lho, ia terus bekerja mengatur napas kita meski kita sedang terlelap!", en: "The brain is the greatest supercomputer in the world created by Allah! It stores memories, makes us smart, and helps us dream. Our brain never sleeps, it keeps working to control our breathing even when we're asleep!" },
    facts: [
      { id: "Otak menghasilkan listrik yang cukup untuk menyalakan lampu kecil!", en: "The brain generates enough electricity to power a small lightbulb!" },
      { id: "Informasi di otak bergerak lebih cepat dari mobil balap!", en: "Information in the brain travels faster than a race car!" },
      { id: "Otak kita terbentuk dari 73% air, jadi harus banyak minum!", en: "Our brain is made up of 73% water, so drink plenty!" }
    ],
    quranVerse: { arabic: "...", transliteration: "...", translation: { id: "...", en: "..." } },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  },
  explorer: {
    text: { id: "Otak terdiri dari milyaran sel neuron yang saling mengirim pesan seperti kilatan petir! Bagian depan otak (Nasiyah/Ubun-ubun) adalah pusat pengambil keputusan. Menakjubkannya, Al-Qur'an 1400 tahun lalu sudah menyoroti bagian 'ubun-ubun' sebagai sumber kebohongan dan keputusan, yang baru diakui sains modern sebagai korteks prefrontal!", en: "The brain consists of billions of neurons sending messages like lightning strikes! The front part of the brain (Nasiyah/Forelock) is the decision-making center. Amazingly, the Quran 1400 years ago highlighted the 'forelock' as the source of lies and decisions, which modern science just recognized as the prefrontal cortex!" },
    quranVerse: {
      arabic: "كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًا بِالنَّاصِيَةِ ۞ نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ",
      transliteration: "Kallaa la-in lam yantahi lanasfa'an bin-naasiyah, naasiyatin kaazibatin khaati'ah",
      translation: { id: "Sekali-kali tidak! Sungguh, jika dia tidak berhenti, niscaya Kami tarik ubun-ubunnya, (yaitu) ubun-ubun orang yang mendustakan dan durhaka.", en: "No! If he does not desist, We will surely drag him by the forelock - a lying, sinning forelock." }
    },
    anatomy: [{ part: { id: "Bagian", en: "Part" }, desc: { id: "Penjelasan", en: "Explanation" } }],
    wowFactor: { id: "Fakta menakjubkan!", en: "Amazing fact!" },
    quiz: { question: { id: "Pertanyaan?", en: "Question?" }, options: [{ text: { id: "A", en: "A" } }, { text: { id: "B", en: "B" } }, { text: { id: "C", en: "C" } }], answerIdx: 0 },
  }
};
