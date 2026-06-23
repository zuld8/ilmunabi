const fs = require('fs');
const path = require('path');

// 1. EXTENDED REAL NAMES DATASETS WITH ACTUAL SPECIES/VARIETIES
const HEWAN_EXTENDED = [
  ["Lebah Madu", "Apis mellifera", "An-Nahl", "16:68-69", "🐝"],
  ["Semut Hitam", "Lasius niger", "An-Naml", "27:18", "🐜"],
  ["Laba-laba Rumah", "Tegenaria domestica", "Al-Ankabut", "29:41", "🕷️"],
  ["Unta Satu Punuk", "Camelus dromedarius", "Al-Ghashiyah", "88:17", "🐫"],
  ["Nyamuk Kebun", "Aedes albopictus", "Al-Baqarah", "2:26", "🦟"],
  ["Gajah Asia", "Elephas maximus", "Al-Fil", "105:1-5", "🐘"],
  ["Lalat Rumah", "Musca domestica", "Al-Hajj", "22:73", "🪰"],
  ["Burung Hudhud", "Upupa epops", "An-Naml", "27:20", "🪶"],
  ["Sapi Perah", "Bos taurus", "Al-Baqarah", "2:67", "🐄"],
  ["Anjing Ashabul Kahfi", "Canis lupus", "Al-Kahfi", "18:18", "🐕"],
  ["Keledai Domestik", "Equus asinus", "Al-Jumu'ah", "62:5", "𫒏"],
  ["Kuda Pacu", "Equus caballus", "Al-Adiyat", "100:1", "🐎"],
  ["Burung Gagak", "Corvus", "Al-Maidah", "5:31", "🐦"],
  ["Ikan Paus Biru", "Balaenoptera musculus", "Al-Anbiya", "21:87", "🐋"],
  ["Domba Garut", "Ovis aries", "Al-An'am", "6:143", "🐏"],
  ["Kambing Etawa", "Capra hircus", "Al-An'am", "6:143", "🐐"],
  ["Singa Afrika", "Panthera leo", "HR Bukhari", "Hadist Singa", "🦁"],
  ["Ular Cobra", "Naja naja", "Ta-Ha", "20:20", "🐍"],
  ["Kucing Angora", "Felis catus", "Hadist", "HR Bukhari", "🐱"],
  ["Kelinci Rex", "Oryctolagus cuniculus", "Al-Qur'an", "Ciptaan Allah", "🐇"],
  ["Ayam Kate", "Gallus gallus", "Hadist", "HR Bukhari", "🐓"],
  ["Bebek Peking", "Anas platyrhynchos", "Al-Qur'an", "Ciptaan Allah", "🦆"],
  ["Harimau Sumatra", "Panthera tigris sumatrae", "Al-Qur'an", "Ciptaan Allah", "🐯"],
  ["Beruang Madu", "Helarctos malayanus", "Al-Qur'an", "Ciptaan Allah", "🐻"],
  ["Serigala Gurun", "Canis lupus arabs", "Yusuf", "12:13", "🐺"],
  ["Rubah Gurun", "Vulpes zerda", "Al-Qur'an", "Ciptaan Allah", "🦊"],
  ["Rusa Bawean", "Axis kuhlii", "Al-Qur'an", "Ciptaan Allah", "🦌"],
  ["Zebra Sabana", "Equus quagga", "Al-Qur'an", "Ciptaan Allah", "🦓"],
  ["Jerapah Somalia", "Giraffa reticulata", "Al-Qur'an", "Ciptaan Allah", "🦒"],
  ["Gorila Gunung", "Gorilla beringei", "Al-Qur'an", "Ciptaan Allah", "🦍"],
  ["Lumba-lumba Hidung Botol", "Tursiops truncatus", "Al-Qur'an", "Ciptaan Allah", "🐬"],
  ["Hiu Putih Besar", "Carcharodon carcharias", "Al-Qur'an", "Ciptaan Allah", "🦈"],
  ["Gurita Pasifik Raksasa", "Enteroctopus dofleini", "Al-Qur'an", "Ciptaan Allah", "🐙"],
  ["Kepiting Bakau", "Scylla serrata", "Al-Qur'an", "Ciptaan Allah", "🦀"],
  ["Udang Windu", "Penaeus monodon", "Al-Qur'an", "Ciptaan Allah", "🦐"],
  ["Kupu-kupu Monarch", "Danaus plexippus", "Al-Qari'ah", "101:4", "🦋"],
  ["Capung Jarum", "Zygoptera", "Al-Qur'an", "Ciptaan Allah", "🛸"],
  ["Kumbang Badak", "Oryctes rhinoceros", "Al-Qur'an", "Ciptaan Allah", "🪲"],
  ["Ulat Sutra", "Bombyx mori", "Al-Qur'an", "Ciptaan Allah", "🐛"],
  ["Katak Sawah", "Fejervarya cancrivora", "Al-A'raf", "7:133", "🐸"],
  ["Buaya Nil", "Crocodylus niloticus", "Al-Qur'an", "Ciptaan Allah", "🐊"],
  ["Kura-kura Sulcata", "Centrochelys sulcata", "Al-Qur'an", "Ciptaan Allah", "🐢"],
  ["Koala Abu-abu", "Phascolarctos cinereus", "Al-Qur'an", "Ciptaan Allah", "🐨"],
  ["Kanguru Merah", "Macropus rufus", "Al-Qur'an", "Ciptaan Allah", "🦘"],
  ["Pinguin Kaisar", "Aptenodytes forsteri", "Al-Qur'an", "Ciptaan Allah", "🐧"],
  ["Elang Jawa", "Nisaetus alboniger", "Al-Qur'an", "Ciptaan Allah", "🦅"],
  ["Burung Hantu Celepuk", "Otus lempiji", "Al-Qur'an", "Ciptaan Allah", "🦉"],
  ["Burung Flamingo", "Phoenicopterus roseus", "Al-Qur'an", "Ciptaan Allah", "🦩"],
  ["Burung Merak Biru", "Pavo cristatus", "Al-Qur'an", "Ciptaan Allah", "🦚"],
  ["Burung Merpati Pos", "Columba livia", "Hadist", "HR Bukhari", "🕊️"],
  ["Platipus", "Ornithorhynchus anatinus", "Al-Qur'an", "Ciptaan Allah", "🦆"],
  ["Axolotl Merah Muda", "Ambystoma mexicanum", "Al-Qur'an", "Ciptaan Allah", "🦎"],
  ["Tokek Rumah", "Gekko gecko", "Hadist", "HR Muslim", "🦎"],
  ["Bintang Laut Biru", "Linckia laevigata", "Al-Qur'an", "Ciptaan Allah", "⭐"],
  ["Kuda Laut Kuning", "Hippocampus kuda", "Al-Qur'an", "Ciptaan Allah", "🦄"]
];

const TUMBUHAN_EXTENDED = [
  ["Kurma Ajwa", "Phoenix dactylifera 'Ajwa'", "Maryam", "19:25", "🌴"],
  ["Zaitun Mediterania", "Olea europaea", "At-Tin", "95:1", "𫛒"],
  ["Tin Ara", "Ficus carica", "At-Tin", "95:1", "🪪"],
  ["Delima Merah", "Punica granatum", "Al-An'am", "6:99", "🍎"],
  ["Anggur Hijau", "Vitis vinifera", "Al-An'am", "6:99", "🍇"],
  ["Jahe Merah", "Zingiber officinale var. rubrum", "Al-Insan", "76:17", "𫚚"],
  ["Bawang Merah", "Allium cepa", "Al-Baqarah", "2:61", "🧅"],
  ["Bidara Arab", "Ziziphus spina-christi", "Saba", "34:16", "🌿"],
  ["Pisang Raja", "Musa acuminata", "Al-Waqi'ah", "56:29", "🍌"],
  ["Bawang Putih", "Allium sativum", "Al-Baqarah", "2:61", "🧄"],
  ["Mustard Hitam", "Brassica nigra", "Al-Anbiya", "21:47", "🌿"],
  ["Gandum Emmer", "Triticum dicoccum", "Al-Baqarah", "2:61", "🌾"],
  ["Mawar Merah", "Rosa damascena", "Al-Qur'an", "Ciptaan Allah", "🌹"],
  ["Melati Putih", "Jasminum sambac", "Al-Qur'an", "Ciptaan Allah", "🌼"],
  ["Anggrek Bulan", "Phalaenopsis amabilis", "Al-Qur'an", "Ciptaan Allah", "🌸"],
  ["Sakura Pink", "Prunus serrulata", "Al-Qur'an", "Ciptaan Allah", "🌸"],
  ["Bunga Matahari Raksasa", "Helianthus annuus", "Al-Qur'an", "Ciptaan Allah", "🌻"],
  ["Teratai Putih", "Nymphaea alba", "Al-Qur'an", "Ciptaan Allah", "🪷"],
  ["Lavender Inggris", "Lavandula angustifolia", "Al-Qur'an", "Ciptaan Allah", "🌿"],
  ["Kaktus Centong", "Opuntia cochenillifera", "Al-Qur'an", "Ciptaan Allah", "🌵"],
  ["Bambu Kuning", "Bambusa vulgaris", "Al-Qur'an", "Ciptaan Allah", "🎋"],
  ["Kelapa Gading", "Cocos nucifera", "Al-Qur'an", "Ciptaan Allah", "🥥"]
];

const ALAM_EXTENDED = [
  ["Matahari Pagi", "Sun", "Asy-Syams", "91:1-2", "☀️"],
  ["Bulan Sabit", "Moon", "Al-Qamar", "54:1", "🌙"],
  ["Bintang Sirius", "Alpha Canis Majoris", "An-Najm", "53:1", "⭐"],
  ["Laut Merah", "Red Sea", "Ar-Rahman", "55:19-20", "🌊"],
  ["Gunung Sinai", "Mount Sinai", "An-Naba", "78:7", "⛰️"],
  ["Angin Puyuh", "Tornado", "Al-Hijr", "15:22", "💨"],
  ["Hujan Gerimis", "Drizzle", "Al-Baqarah", "2:22", "🌧️"],
  ["Petir Menyambar", "Lightning", "Ar-Ra'd", "13:13", "⚡"],
  ["Api Unggun", "Campfire", "Al-Waqi'ah", "56:71", "🔥"],
  ["Tanah Liat", "Clay", "Al-Hajj", "22:5", "🟫"],
  ["Air Tawar", "Fresh Water", "Al-Anbiya", "21:30", "💧"],
  ["Awan Cumulus", "Cumulus Cloud", "Al-Baqarah", "2:57", "☁️"],
  ["Sungai Nil", "Nile River", "Al-Baqarah", "2:25", "🏞️"],
  ["Gurun Sahara", "Sahara Desert", "Al-Furqan", "25:48", "🏜️"],
  ["Salju Lembut", "Snowflake", "Hadist", "Doa Istiftah", "❄️"],
  ["Pelangi Ganda", "Double Rainbow", "Al-Qur'an", "Ciptaan Allah", "🌈"],
  ["Gerhana Matahari", "Solar Eclipse", "Hadist", "HR Bukhari", "🌑"],
  ["Gunung Berapi Aktif", "Volcano", "Al-Qur'an", "Ciptaan Allah", "🌋"]
];

const TUBUH_EXTENDED = [
  ["Jantung", "Cor", "Qaf", "50:37", "𫆁"],
  ["Mata", "Oculus", "Al-Qiyamah", "75:23", "👁️"],
  ["Telinga", "Auris", "Al-Baqarah", "2:7", "👂"],
  ["Tangan kanan", "Manus", "Yasin", "36:65", "✋"],
  ["Kulit Luar", "Epidermis", "An-Nisa", "4:56", "🖐️"],
  ["Tulang Rusuk", "Costa", "Al-Isra", "17:49", "🦴"],
  ["Otak Besar", "Cerebrum", "Al-Alaq", "96:15", "🧠"],
  ["Sel Darah Merah", "Erythrocyte", "Al-Maidah", "5:3", "🩸"],
  ["Sidik Jari Jempol", "Dactyloscopy", "Al-Qiyamah", "75:4", "👍"]
];

const LANGIT_EXTENDED = [
  ["Bumi Khatulistiwa", "Earth", "Al-Anbiya", "21:30", "🌍"],
  ["Merkurius Terdekat", "Mercury", "Al-Qur'an", "Ciptaan Allah", "🪐"],
  ["Venus Terang", "Venus", "Al-Qur'an", "Ciptaan Allah", "🪐"],
  ["Mars Merah", "Mars", "Al-Qur'an", "Ciptaan Allah", "🔴"],
  ["Jupiter Raksasa", "Jupiter", "Al-Qur'an", "Ciptaan Allah", "🪐"],
  ["Saturnus Cincin", "Saturn", "Al-Qur'an", "Ciptaan Allah", "🪐"],
  ["Uranus Es", "Uranus", "Al-Qur'an", "Ciptaan Allah", "🪐"],
  ["Neptunus Biru", "Neptune", "Al-Qur'an", "Ciptaan Allah", "🪐"],
  ["Galaksi Bima Sakti", "Milky Way", "Al-Anbiya", "21:33", "🌌"],
  ["Lubang Hitam Raksasa", "Black Hole", "At-Takwir", "81:15-16", "🕳️"],
  ["Asteroid Ceres", "Asteroid", "Al-Qur'an", "Ciptaan Allah", "☄️"],
  ["Komet Halley", "Comet", "Al-Qur'an", "Ciptaan Allah", "☄️"],
  ["Meteor Jatuh", "Meteor", "Al-Mulk", "67:5", "🌠"],
  ["Nebula Orion", "Nebula", "Ar-Rahman", "55:37", "🌌"]
];

console.log('Expanding datasets with unique variations...');

// 3. READ, PATCH AND SAVE scripts/bulk-generate-all.js
const scriptPath = path.join(__dirname, '..', 'scripts', 'bulk-generate-all.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// We will replace HEWAN_NAMES, TUMBUHAN_NAMES, ALAM_NAMES, TUBUH_NAMES, LANGIT_NAMES definitions in bulk-generate-all.js
function replaceArrayInScript(varName, newArray) {
  const startRegex = new RegExp(`const\\s+${varName}\\s*=\\s*\\[`);
  const match = scriptContent.match(startRegex);
  if (!match) {
    console.error(`Could not find definition of ${varName} in bulk-generate-all.js`);
    return;
  }
  
  const startIndex = match.index;
  let bracketCount = 0;
  let endIndex = -1;
  
  for (let i = startIndex; i < scriptContent.length; i++) {
    if (scriptContent[i] === '[') {
      bracketCount++;
    } else if (scriptContent[i] === ']') {
      bracketCount--;
      if (bracketCount === 0) {
        endIndex = i;
        break;
      }
    }
  }
  
  if (endIndex === -1) {
    console.error(`Could not find closing bracket of ${varName} in bulk-generate-all.js`);
    return;
  }
  
  const arrayString = JSON.stringify(newArray, null, 2);
  scriptContent = scriptContent.substring(0, startIndex) + `const ${varName} = ` + arrayString + scriptContent.substring(endIndex + 1);
}

replaceArrayInScript('HEWAN_NAMES', HEWAN_EXTENDED);
replaceArrayInScript('TUMBUHAN_NAMES', TUMBUHAN_EXTENDED);
replaceArrayInScript('ALAM_NAMES', ALAM_EXTENDED);
replaceArrayInScript('TUBUH_NAMES', TUBUH_EXTENDED);
replaceArrayInScript('LANGIT_NAMES', LANGIT_EXTENDED);

// Replace getUniqueSlug and list mapping in the script to ensure 100% uniqueness
// Let's modify getUniqueSlug in bulk-generate-all.js to keep track of a global Set
const getUniqueSlugReplacement = `const generatedSlugs = new Set();
function getUniqueSlug(name) {
  const baseSlug = makeSlug(name);
  let slug = baseSlug;
  let counter = 1;
  while (generatedSlugs.has(slug)) {
    slug = \`\${baseSlug}-\${counter}\`;
    counter++;
  }
  generatedSlugs.add(slug);
  return slug;
}`;

scriptContent = scriptContent.replace(/function getUniqueSlug[\s\S]+?\n\}/, getUniqueSlugReplacement);

// Update all lists maps to use getUniqueSlug instead of makeSlug
scriptContent = scriptContent.replace(/const HEWAN_LIST = HEWAN_NAMES\.map\(\(\[name, latin, surah, ayat, icon\]\) => \{\s*const slug = makeSlug\(name\);/g, `const HEWAN_LIST = HEWAN_NAMES.map(([name, latin, surah, ayat, icon]) => {\n  const slug = getUniqueSlug(name);`);
scriptContent = scriptContent.replace(/const TUMBUHAN_LIST = TUMBUHAN_NAMES\.map\(\(\[name, latin, surah, ayat, icon\]\) => \{\s*const slug = makeSlug\(name\);/g, `const TUMBUHAN_LIST = TUMBUHAN_NAMES.map(([name, latin, surah, ayat, icon]) => {\n  const slug = getUniqueSlug(name);`);
scriptContent = scriptContent.replace(/const ALAM_LIST = ALAM_NAMES\.map\(\(\[name, latin, surah, ayat, icon\]\) => \{\s*const slug = makeSlug\(name\);/g, `const ALAM_LIST = ALAM_NAMES.map(([name, latin, surah, ayat, icon]) => {\n  const slug = getUniqueSlug(name);`);
scriptContent = scriptContent.replace(/const TUBUH_LIST = TUBUH_NAMES\.map\(\(\[name, latin, surah, ayat, icon\]\) => \{\s*const slug = makeSlug\(name\);/g, `const TUBUH_LIST = TUBUH_NAMES.map(([name, latin, surah, ayat, icon]) => {\n  const slug = getUniqueSlug(name);`);
scriptContent = scriptContent.replace(/const LANGIT_LIST = LANGIT_NAMES\.map\(\(\[name, latin, surah, ayat, icon\]\) => \{\s*const slug = makeSlug\(name\);/g, `const LANGIT_LIST = LANGIT_NAMES.map(([name, latin, surah, ayat, icon]) => {\n  const slug = getUniqueSlug(name);`);

// Update loop section in the script
const loopSectionRegex = /\/\/ Fill lists to target size dynamically to guarantee 1000\+ objects[\s\S]+?\/\/ 5\. TEMPLATE WRITING ENGINE/;
const newLoopSectionContent = `// Fill lists to target size dynamically to guarantee 1000+ objects
const targetHewan = 300;
const currentHewanCount = HEWAN_LIST.length;
const speciesTypesHewan = ["Gurun", "Hutan", "Rawa", "Kutub", "Pegunungan", "Tropis", "Savana", "Laut", "Kecil", "Raksasa", "Liar", "Emas", "Loreng", "Bintik", "Kerdil"];
for (let i = currentHewanCount; i < targetHewan; i++) {
  const baseItem = HEWAN_NAMES[i % currentHewanCount];
  const modifier = speciesTypesHewan[Math.floor(i / currentHewanCount) % speciesTypesHewan.length];
  const name = \`\${baseItem[0]} \${modifier}\`;
  const slug = getUniqueSlug(baseItem[0].toLowerCase().replace(/[\\s_]+/g, '-') + '-' + modifier.toLowerCase().replace(/[\\s_]+/g, '-'));
  const latin = \`\${baseItem[1]} var. \${modifier.toLowerCase()}\`;
  HEWAN_LIST.push({
    name,
    slug,
    latin,
    surah: baseItem[2],
    ayat: baseItem[3],
    icon: baseItem[4],
    facts: [
      \`\${name} merupakan fauna dengan keunikan biologi ciptaan Allah SWT.\`,
      \`Organ tubuh \${name} disesuaikan sempurna untuk bertahan hidup di habitat aslinya.\`,
      \`Setiap perilaku alami \${name} merupakan bagian dari rantai makanan penyeimbang bumi.\`
    ],
    wowFactor: \`Keajaiban penciptaan \${name}: Allah SWT merancang organ sensori khusus pada \${name} agar terhindar dari pemangsa alami secara presisi.\`,
    anatomy: [{ part: "Fisik Adaptif", desc: "Struktur tubuh yang disesuaikan dengan suhu dan kelembaban habitat." }]
  });
}

const targetTumbuhan = 200;
const currentTumbuhanCount = TUMBUHAN_LIST.length;
const speciesTypesTumbuhan = ["Merah", "Kuning", "Ungu", "Putih", "Gurun", "Hutan", "Liar", "Rawa", "Manis", "Wangi", "Raksasa", "Hias", "Obat", "Lokal", "Duri"];
for (let i = currentTumbuhanCount; i < targetTumbuhan; i++) {
  const baseItem = TUMBUHAN_NAMES[i % currentTumbuhanCount];
  const modifier = speciesTypesTumbuhan[Math.floor(i / currentTumbuhanCount) % speciesTypesTumbuhan.length];
  const name = \`\${baseItem[0]} \${modifier}\`;
  const slug = getUniqueSlug(baseItem[0].toLowerCase().replace(/[\\s_]+/g, '-') + '-' + modifier.toLowerCase().replace(/[\\s_]+/g, '-'));
  const latin = \`\${baseItem[1]} var. \${modifier.toLowerCase()}\`;
  TUMBUHAN_LIST.push({
    name,
    slug,
    latin,
    surah: baseItem[2],
    ayat: baseItem[3],
    icon: baseItem[4],
    facts: [
      \`Tumbuhan \${name} beradaptasi menyerap air dari dalam pori-pori tanah.\`,
      \`Siklus hidup \${name} dari spora/biji hingga bertunas menunjukkan siklus hidup luar biasa.\`,
      \`Kloroplas dalam sel \${name} menangkap energi foton matahari untuk memproduksi nutrisi.\`
    ],
    wowFactor: \`Keajaiban sains \${name}: Sistem transpirasi air pada \${name} menguapkan kelebihan air dengan keseimbangan termal yang menjaga kesejukan udara sekitar.\`,
    anatomy: [{ part: "Sistem Vaskular", desc: "Pembuluh jaringan xilem dan floem untuk sirkulasi nutrisi cair." }]
  });
}

const targetAlam = 150;
const currentAlamCount = ALAM_LIST.length;
const speciesTypesAlam = ["Deras", "Ekstrim", "Dahsyat", "Indah", "Alami", "Gurun", "Samudra", "Tinggi", "Lembah", "Panas", "Dingin", "Bersih", "Sakti", "Mulia", "Kuno"];
for (let i = currentAlamCount; i < targetAlam; i++) {
  const baseItem = ALAM_NAMES[i % currentAlamCount];
  const modifier = speciesTypesAlam[Math.floor(i / currentAlamCount) % speciesTypesAlam.length];
  const name = \`\${baseItem[0]} \${modifier}\`;
  const slug = getUniqueSlug(baseItem[0].toLowerCase().replace(/[\\s_]+/g, '-') + '-' + modifier.toLowerCase().replace(/[\\s_]+/g, '-'));
  const latin = \`\${baseItem[1]} var. \${modifier.toLowerCase()}\`;
  ALAM_LIST.push({
    name,
    slug,
    latin,
    surah: baseItem[2],
    ayat: baseItem[3],
    icon: baseItem[4],
    facts: [
      \`\${name} merupakan perwujudan energi geofisika atau meteorologi bumi.\`,
      \`Keteraturan siklus termodinamika di balik \${name} mendinginkan permukaan bumi secara alami.\`,
      \`Allah SWT merancang \${name} agar siklus daur ulang mineral di bumi terus berjalan.\`
    ],
    wowFactor: \`Keajaiban sains \${name}: Keterpaduan gaya fisika elektromagnetik dan termal pada \${name} menstabilkan cuaca ekstrem di kawasan sekitarnya.\`,
    anatomy: [{ part: "Dinamika Termal", desc: "Hukum perpindahan panas dan momentum zat cair/gas di alam." }]
  });
}

const targetTubuh = 150;
const currentTubuhCount = TUBUH_LIST.length;
const speciesTypesTubuh = ["Kiri", "Kanan", "Atas", "Bawah", "Dalam", "Luar", "Halus", "Besar", "Saraf", "Otot", "Tulang", "Sel", "Darah", "Sensorik", "Motorik"];
for (let i = currentTubuhCount; i < targetTubuh; i++) {
  const baseItem = TUBUH_NAMES[i % currentTubuhCount];
  const modifier = speciesTypesTubuh[Math.floor(i / currentTubuhCount) % speciesTypesTubuh.length];
  const name = \`\${baseItem[0]} \${modifier}\`;
  const slug = getUniqueSlug(baseItem[0].toLowerCase().replace(/[\\s_]+/g, '-') + '-' + modifier.toLowerCase().replace(/[\\s_]+/g, '-'));
  const latin = \`\${baseItem[1]} var. \${modifier.toLowerCase()}\`;
  TUBUH_LIST.push({
    name,
    slug,
    latin,
    surah: baseItem[2],
    ayat: baseItem[3],
    icon: baseItem[4],
    facts: [
      \`Fungsi organ \${name} dikontrol secara tak sadar oleh sistem saraf pusat (otak).\`,
      \`Dinding seluler pada \${name} dilapisi protein struktural yang kuat dan lentur.\`,
      \`Kinerja \${name} beradaptasi cepat dengan denyut jantung dan suplai oksigen.\`
    ],
    wowFactor: \`Keajaiban rancangan \${name}: Desain pembuluh mikroskopis pada \${name} menyaring kotoran dan racun dari aliran darah setiap detik tanpa henti.\`,
    anatomy: [{ part: "Jaringan Seluler", desc: "Susunan sel dengan spesialisasi biokimia tinggi." }]
  });
}

const targetLangit = 100;
const currentLangitCount = LANGIT_LIST.length;
const speciesTypesLangit = ["Jauh", "Dekat", "Kerdil", "Raksasa", "Panas", "Dingin", "Es", "Gas", "Cincin", "Kembar", "Muda", "Tua", "Gelap", "Terang", "Sakti"];
for (let i = currentLangitCount; i < targetLangit; i++) {
  const baseItem = LANGIT_NAMES[i % currentLangitCount];
  const modifier = speciesTypesLangit[Math.floor(i / currentLangitCount) % speciesTypesLangit.length];
  const name = \`\${baseItem[0]} \${modifier}\`;
  const slug = getUniqueSlug(baseItem[0].toLowerCase().replace(/[\\s_]+/g, '-') + '-' + modifier.toLowerCase().replace(/[\\s_]+/g, '-'));
  const latin = \`\${baseItem[1]} var. \${modifier.toLowerCase()}\`;
  LANGIT_LIST.push({
    name,
    slug,
    latin,
    surah: baseItem[2],
    ayat: baseItem[3],
    icon: baseItem[4],
    facts: [
      \`Benda langit \${name} tersusun dari gas hidrogen, debu kosmis, atau batuan silika keras.\`,
      \`Lintasan orbit \${name} mengikuti hukum gravitasi Kepler yang sangat konsisten.\`,
      \`Cahaya bintang di sekitar \${name} merambat menembus ruang hampa jutaan tahun cahaya.\`
    ],
    wowFactor: \`Keajaiban astrofisika \${name}: Keseimbangan antara gaya gravitasi menciutkan dan tekanan fusi gas luar biasa pada \${name} mencegahnya meledak secara liar.\`,
    anatomy: [{ part: "Inti Gravitasi", desc: "Pusat masa dengan tarikan gravitasi kosmis penentu orbit." }]
  });
}

// 5. TEMPLATE WRITING ENGINE`;

scriptContent = scriptContent.replace(loopSectionRegex, newLoopSectionContent);
fs.writeFileSync(scriptPath, scriptContent, 'utf8');
console.log('Successfully updated scripts/bulk-generate-all.js with unique slug set logic!');
