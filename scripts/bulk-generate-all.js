const fs = require('fs');
const path = require('path');

function toCamelCase(str) {
  return str.replace(/-([a-z0-9])/g, g => g[1].toUpperCase()).replace(/-+/g, '');
}

function makeSlug(name) {
  return name.toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove special characters
    .trim()
    .replace(/[\s_]+/g, '-')  // replace spaces/underscores with hyphens
    .replace(/-+/g, '-');     // collapse multiple hyphens
}

// 1. DATA DICTIONARIES FOR BULK GENERATION
const HEWAN_LIST = [
  // Priority 1
  { name: "Lebah", slug: "lebah", latin: "Apis mellifera", surah: "An-Nahl", ayat: "16:68-69", icon: "🐝" },
  { name: "Semut", slug: "semut", latin: "Formicidae", surah: "An-Naml", ayat: "27:18", icon: "🐜" },
  { name: "Laba-laba", slug: "laba-laba", latin: "Araneae", surah: "Al-Ankabut", ayat: "29:41", icon: "🕷️" },
  { name: "Unta", slug: "unta", latin: "Camelus", surah: "Al-Ghashiyah", ayat: "88:17", icon: "🐫" },
  { name: "Nyamuk", slug: "nyamuk", latin: "Culicidae", surah: "Al-Baqarah", ayat: "2:26", icon: "🦟" },
  { name: "Gajah", slug: "gajah", latin: "Elephas maximus", surah: "Al-Fil", ayat: "105:1-5", icon: "🐘" },
  { name: "Lalat", slug: "lalat", latin: "Musca domestica", surah: "Al-Hajj", ayat: "22:73", icon: "🪰" },
  { name: "Burung Hudhud", slug: "hudhud", latin: "Upupa epops", surah: "An-Naml", ayat: "27:20", icon: "🪶" },
  { name: "Sapi", slug: "sapi", latin: "Bos taurus", surah: "Al-Baqarah", ayat: "2:67", icon: "🐄" },
  { name: "Anjing", slug: "anjing", latin: "Canis lupus familiaris", surah: "Al-Kahfi", ayat: "18:18", icon: "🐕" },
  { name: "Keledai", slug: "keledai", latin: "Equus asinus", surah: "Al-Jumu'ah", ayat: "62:5", icon: "🫏" },
  { name: "Kuda", slug: "kuda", latin: "Equus caballus", surah: "Al-Adiyat", ayat: "100:1", icon: "🐎" },
  { name: "Babi", slug: "babi", latin: "Sus scrofa", surah: "Al-Baqarah", ayat: "2:173", icon: "🐖" },
  { name: "Monyet", slug: "monyet", latin: "Simiiformes", surah: "Al-Baqarah", ayat: "2:65", icon: "🐒" },
  { name: "Ikan Paus", slug: "paus", latin: "Balaenoptera musculus", surah: "Al-Anbiya", ayat: "21:87", icon: "🐋" },
  { name: "Burung Gagak", slug: "gagak", latin: "Corvus", surah: "Al-Maidah", ayat: "5:31", icon: "🐦" },
  { name: "Domba", slug: "domba", latin: "Ovis aries", surah: "Al-An'am", ayat: "6:143", icon: "🐏" },
  { name: "Kambing", slug: "kambing", latin: "Capra aegagrus hircus", surah: "Al-An'am", ayat: "6:143", icon: "🐐" },
  { name: "Singa", slug: "singa", latin: "Panthera leo", surah: "HR Bukhari", ayat: "Hadist Singa", icon: "🦁" },
  { name: "Ular", slug: "ular", latin: "Serpentes", surah: "Ta-Ha", ayat: "20:20", icon: "🐍" },
  // Priority 2
  { name: "Kucing", slug: "kucing", latin: "Felis catus", surah: "Hadist", ayat: "HR Bukhari", icon: "🐱" },
  { name: "Kelinci", slug: "kelinci", latin: "Oryctolagus cuniculus", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🐇" },
  { name: "Ayam", slug: "ayam", latin: "Gallus gallus domesticus", surah: "Hadist", ayat: "HR Bukhari", icon: "🐓" },
  { name: "Bebek", slug: "bebek", latin: "Anas platyrhynchos", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦆" },
  { name: "Harimau", slug: "harimau", latin: "Panthera tigris", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🐯" },
  { name: "Beruang", slug: "beruang", latin: "Ursidae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🐻" },
  { name: "Serigala", slug: "serigala", latin: "Canis lupus", surah: "Yusuf", ayat: "12:13", icon: "🐺" },
  { name: "Rubah", slug: "rubah", latin: "Vulpes vulpes", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦊" },
  { name: "Rusa", slug: "rusa", latin: "Cervidae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦌" },
  { name: "Zebra", slug: "zebra", latin: "Equus quagga", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦓" },
  { name: "Jerapah", slug: "jerapah", latin: "Giraffa camelopardalis", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦒" },
  { name: "Gorilla", slug: "gorilla", latin: "Gorilla", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦍" },
  { name: "Lumba-lumba", slug: "lumba-lumba", latin: "Delphinidae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🐬" },
  { name: "Hiu", slug: "hiu", latin: "Selachimorpha", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦈" },
  { name: "Gurita", slug: "gurita", latin: "Octopoda", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🐙" },
  { name: "Kepiting", slug: "kepiting", latin: "Brachyura", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦀" },
  { name: "Udang", slug: "udang", latin: "Caridea", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦐" },
  { name: "Kupu-kupu", slug: "kupu-kupu", latin: "Lepidoptera", surah: "Al-Qari'ah", ayat: "101:4", icon: "🦋" },
  { name: "Capung", slug: "capung", latin: "Anisoptera", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🛸" },
  { name: "Kumbang", slug: "kumbang", latin: "Coleoptera", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🪲" },
  { name: "Ulat", slug: "ulat", latin: "Larva", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🐛" },
  { name: "Katak", slug: "katak", latin: "Anura", surah: "Al-A'raf", ayat: "7:133", icon: "🐸" },
  { name: "Buaya", slug: "buaya", latin: "Crocodilidae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🐊" },
  { name: "Kura-kura", slug: "kura-kura", latin: "Testudines", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🐢" },
  { name: "Koala", slug: "koala", latin: "Phascolarctos cinereus", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🐨" },
  { name: "Kanguru", slug: "kanguru", latin: "Macropodidae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦘" },
  { name: "Pinguin", slug: "pinguin", latin: "Spheniscidae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🐧" },
  { name: "Elang", slug: "elang", latin: "Accipitridae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦅" },
  { name: "Burung Hantu", slug: "burung-hantu", latin: "Strigiformes", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦉" },
  { name: "Flamingo", slug: "flamingo", latin: "Phoenicopteridae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦩" },
  { name: "Merak", slug: "merak", latin: "Pavo cristatus", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦚" },
  { name: "Merpati", slug: "merpati", latin: "Columbidae", surah: "Hadist", ayat: "HR Bukhari", icon: "🕊️" },
  // Priority 3
  { name: "Platipus", slug: "platipus", latin: "Ornithorhynchus anatinus", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦆" },
  { name: "Axolotl", slug: "axolotl", latin: "Ambystoma mexicanum", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦎" },
  { name: "Tokek", slug: "tokek", latin: "Gekkonidae", surah: "Hadist", ayat: "HR Muslim", icon: "🦎" },
  { name: "Bintang Laut", slug: "bintang-laut", latin: "Asteroidea", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "⭐" },
  { name: "Kuda Laut", slug: "kuda-laut", latin: "Hippocampus", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🦄" }
];

const extraHewanRaw = [
  ["Cheetah", "Acinonyx jubatus", "🐆"],
  ["Leopard", "Panthera pardus", "🐆"],
  ["Jaguar", "Panthera onca", "🐆"],
  ["Puma", "Puma concolor", "🦁"],
  ["Simpanse", "Pan troglodytes", "🐒"],
  ["Orangutan", "Pongo", "🐒"],
  ["Baboon", "Papio", "🐒"],
  ["Lemur", "Lemur catta", "🐒"],
  ["Sloth", "Bradypus", "🦥"],
  ["Hamster", "Cricetinae", "🐹"],
  ["Tikus", "Rattus", "🐀"],
  ["Marmut", "Marmota", "🐹"],
  ["Kelelawar", "Chiroptera", "🦇"],
  ["Meerkat", "Suricata suricatta", "🦦"],
  ["Hyena", "Hyaenidae", "🐺"],
  ["Badak", "Rhinocerotidae", "🦏"],
  ["Kuda Nil", "Hippopotamus amphibius", "🦛"],
  ["Bison", "Bison bison", "🦬"],
  ["Kerbau", "Bubalus bubalis", "🐃"],
  ["Banteng", "Bos javanicus", "🐂"],
  ["Yak", "Bos grunniens", "🐂"],
  ["Okapi", "Okapia johnstoni", "🦒"],
  ["Tapir", "Tapirus", "🐗"],
  ["Anteater", "Myrmecophaga tridactyla", "🦥"],
  ["Armadillo", "Dasypodidae", "🛡️"],
  ["Landak", "Hystricidae", "🦔"],
  ["Wombat", "Vombatidae", "🐻"],
  ["Wallaby", "Macropodidae", "🦘"],
  ["Koala Bear", "Phascolarctos cinereus", "🐨"],
  ["Red Panda", "Ailurus fulgens", "🦊"],
  ["Giant Panda", "Ailuropoda melanoleuca", "🐼"],
  ["Sun Bear", "Helarctos malayanus", "🐻"],
  ["Polar Bear", "Ursus maritimus", "🐻"],
  ["Grizzly Bear", "Ursus arctos horribilis", "🐻"],
  ["Black Bear", "Ursus americanus", "🐻"],
  ["Coyote", "Canis latrans", "🐺"],
  ["Jackal", "Canis aureus", "🐺"],
  ["Dingo", "Canis lupus dingo", "🐕"],
  ["African Wild Dog", "Lycaon pictus", "🐕"],
  ["Badger", "Meles meles", "🦡"],
  ["Wolverine", "Gulo gulo", "🦡"],
  ["Otter", "Lutrinae", "🦦"],
  ["Sea Otter", "Enhydra lutris", "🦦"],
  ["Raccoon", "Procyon lotor", "🦝"],
  ["Beaver", "Castor", "🦦"],
  ["Porcupine American", "Erethizontidae", "🦔"],
  ["Hedgehog African", "Erinaceinae", "🦔"],
  ["Mole Star", "Talpidae", "🐁"],
  ["Shrew Water", "Soricidae", "🐁"],
  ["Opossum Virginia", "Didelphidae", "🐁"],
  ["Echidna Spiny", "Tachyglossidae", "🦔"],
  ["Squirrel Red", "Sciuridae", "🐿️"],
  ["Flying Squirrel Japanese", "Pteromyini", "🐿️"],
  ["Chipmunk Siberian", "Tamias", "🐿️"],
  ["Gopher Pocket", "Geomyidae", "🐁"],
  ["Marmot Alpine", "Marmota marmota", "🐹"],
  ["Lemming Norway", "Lemmini", "🐁"],
  ["Vole Meadow", "Arvicolinae", "🐁"],
  ["Muskrat River", "Ondatra zibethicus", "🐁"],
  ["Chinchilla Domestic", "Chinchilla lanigera", "🐭"],
  ["Guinea Pig Abyssinian", "Cavia porcellus", "🐹"],
  ["Capybara Giant", "Hydrochoerus hydrochaeris", "🐹"],
  ["Agouti Golden", "Dasyprocta", "🐹"],
  ["Paca Lowland", "Cuniculus paca", "🐹"],
  ["Mara Patagonian", "Dolichotis patagonum", "🐹"],
  ["Tree Shrew Common", "Tupaiidae", "🐿️"],
  ["Galago Senegal", "Galagidae", "🐒"],
  ["Bushbaby Lesser", "Galago senegalensis", "🐒"],
  ["Potto West African", "Perodicticus potto", "🐒"],
  ["Loris Bengal", "Lorisidae", "🐒"],
  ["Slow Loris Pygmy", "Nycticebus", "🐒"],
  ["Tarsier Spectral", "Tarsiidae", "🐒"],
  ["Marmoset Common", "Callitrichidae", "🐒"],
  ["Tamarins Red-handed", "Saguinus", "🐒"],
  ["Squirrel Monkey Common", "Saimiri", "🐒"],
  ["Capuchin Monkey White-faced", "Cebinae", "🐒"],
  ["Howler Monkey Red", "Alouatta", "🐒"],
  ["Spider Monkey Black", "Ateles", "🐒"],
  ["Woolly Monkey Common", "Lagothrix", "🐒"],
  ["Macaque Crab-eating", "Macaca", "🐒"],
  ["Baboon Olive", "Papio anubis", "🐒"],
  ["Mandrill Monkey", "Mandrillus sphinx", "🐒"],
  ["Drill Monkey", "Mandrillus leucophaeus", "🐒"],
  ["Colobus Monkey Black-and-white", "Colobus", "🐒"],
  ["Langur Gray", "Semnopithecus", "🐒"],
  ["Proboscis Monkey", "Nasalis larvatus", "🐒"],
  ["Gibbon Lar", "Hylobatidae", "🐒"],
  ["Siamang Black", "Symphalangus syndactylus", "🐒"],
  ["Chimpanzee Pygmy", "Pan paniscus", "🦍"],
  ["Gorilla Mountain", "Gorilla beringei beringei", "🦍"],
  ["Ikan Pari Ekor Cambuk", "Batoidea", "🐠"],
  ["Hiu Paus Raksasa", "Rhincodon typus", "🦈"],
  ["Cumi-cumi Raksasa Laut", "Architeuthis dux", "🦑"],
  ["Manta Ray Reef", "Mobula alfredi", "🐠"],
  ["Ubur-ubur Bulan", "Aurelia aurita", "🪼"],
  ["Lobster Laut", "Homarus americanus", "🦞"],
  ["Kerang Darah", "Anadara granosa", "🐚"],
  ["Tiram Tumbuh", "Ostreidae", "🐚"],
  ["Bekicot Darat", "Achatina fulica", "🐌"],
  ["Bulu Babi Hitam", "Echinoidea", "🪼"],
  ["Teripang Pasir", "Holothuria scabra", "🥒"],
  ["Karang Otak", "Faviidae", "🪸"],
  ["Anemon Laut", "Actiniaria", "🪸"],
  ["Belut Sawah", "Monopterus albus", "🐍"],
  ["Ikan Salmon Atlantik", "Salmo salar", "🐟"],
  ["Ikan Tuna Sirip Biru", "Thunnus thynnus", "🐟"],
  ["Ikan Kod Atlantik", "Gadus morhua", "🐟"],
  ["Ikan Kembung", "Rastrelliger", "🐟"],
  ["Ikan Trout Pelangi", "Oncorhynchus mykiss", "🐟"],
  ["Ikan Sarden", "Sardinella", "🐟"],
  ["Ikan Teri", "Engraulidae", "🐟"],
  ["Ikan Layur Laut", "Trichiurus lepturus", "🐟"],
  ["Ikan Belida", "Chitala lopis", "🐟"],
  ["Kepiting Bakau Besar", "Scylla serrata", "🦀"],
  ["Kepiting Soka", "Portunus pelagicus", "🦀"],
  ["Kepiting Kenari Raksasa", "Birgus latro", "🦀"],
  ["Rajungan Bintang", "Portunus", "🦀"],
  ["Udang Windu Laut", "Penaeus monodon", "🦐"],
  ["Udang Galah Sungai", "Macrobrachium rosenbergii", "🦐"],
  ["Udang Ronggeng", "Lysiosquilla maculata", "🦐"],
  ["Lobster Air Tawar Biru", "Cherax quadricarinatus", "🦞"],
  ["Undur-undur Pasir", "Myrmeleontidae", "🐜"],
  ["Semut Jepang", "Tenebrio molitor", "🐜"],
  ["Kumbang Tanduk Raksasa", "Xylotrupes gideon", "🪲"],
  ["Kumbang Koksi Totol", "Harmonia axyridis", "🐞"],
  ["Kumbang Kotoran Afrika", "Scarabaeinae", "🪲"],
  ["Kumbang Air Raksasa", "Dytiscidae", "🪲"],
  ["Belalang Sembah Hijau", "Mantodea", "🦗"],
  ["Belalang Daun Kamuflase", "Phylliidae", "🦗"],
  ["Belalang Kayu Cokelat", "Valanga nigricornis", "🦗"],
  ["Jangkrik Sawah Hitam", "Gryllus bimaculatus", "🦗"],
  ["Ulat Sutra Putih", "Bombyx mori", "🐛"],
  ["Ulat Sagu Papua", "Rhynchophorus ferrugineus", "🐛"],
  ["Ulat Bulu Racun", "Lymantriidae", "🐛"],
  ["Cacing Tanah Subur", "Lumbricus rubellus", "🐛"],
  ["Lintah Air Tawar", "Hirudo medicinalis", "🐛"],
  ["Pacat Hutan", "Haemadipsa sylvestris", "🐛"],
  ["Keong Sawah Kuning", "Pila ampullacea", "🐌"],
  ["Kerang Dara Rebus", "Anadara granosa l.", "🐚"],
  ["Kerang Hijau Laut", "Perna viridis", "🐚"],
  ["Kerang Bulu Hitam", "Anadara antiquata", "🐚"],
  ["Kerang Bambu Gurih", "Solenidae", "🐚"],
  ["Sotong Karang", "Sepiida", "🦑"],
  ["Gurita Raksasa Pasifik", "Enteroctopus dofleini", "🐙"],
  ["Ubur-ubur Kotak Sengat", "Chironex fleckeri", "🪼"],
  ["Ikan Guppy Hias", "Poecilia reticulata", "🐠"],
  ["Ikan Cupang Aduan", "Betta splendens", "🐠"],
  ["Ikan Mas Koki Bulat", "Carassius auratus", "🐠"],
  ["Ikan Koi Jepang", "Cyprinus carpio", "🐠"],
  ["Ikan Discus Amazon", "Symphysodon", "🐠"],
  ["Ikan Louhan Jenong", "Cichlidae", "🐠"],
  ["Ikan Molly Hitam", "Poecilia sphenops", "🐠"],
  ["Ikan Platy Merah", "Xiphophorus maculatus", "🐠"],
  ["Ikan Neon Tetra Bersinar", "Paracheirodon innesi", "🐠"],
  ["Ikan Zebra Belang", "Danio rerio", "🐠"],
  ["Anoa Pegunungan", "Bubalus quarlesi", "🐂"],
  ["Babirusa Sulawesi", "Babyrousa babyrussa", "🐖"],
  ["Bekantan Kalimantan", "Nasalis larvatus k.", "🐒"],
  ["Tarsius Kerdil", "Tarsius pumilus", "🐒"],
  ["Kera Hantu Sulawesi", "Tarsius tarsier", "🐒"],
  ["Burung Maleo", "Macrocephalon maleo", "🐦"],
  ["Burung Cendrawasih", "Paradisaeidae", "🐦"],
  ["Burung Kasuari Gelambir", "Casuarius casuarius", "🐦"],
  ["Burung Kakatua Putih", "Cacatua alba", "🦜"],
  ["Burung Nuri Merah", "Lorius lory", "🦜"],
  ["Burung Jalak Bali", "Leucopsar rothschildi", "🐦"],
  ["Burung Elang Jawa", "Nisaetus alboniger", "🦅"],
  ["Harimau Sumatra", "Panthera tigris sumatrae", "🐯"],
  ["Gajah Sumatra", "Elephas maximus sumatranus", "🐘"],
  ["Badak Jawa Bercula Satu", "Rhinoceros sondaicus", "🦏"],
  ["Orangutan Sumatra", "Pongo abelii", "🐒"],
  ["Pesut Mahakam", "Orcaella brevirostris", "🐬"],
  ["Ikan Arwana Super Red", "Scleropages formosus", "🐠"],
  ["Ikan Gurame Raksasa", "Osphronemus goramy", "🐟"],
  ["Ikan Lele Dumbo", "Clarias gariepinus", "🐟"],
  ["Ikan Patin Sungai", "Pangasius", "🐟"],
  ["Ikan Nila Merah", "Oreochromis niloticus", "🐟"],
  ["Ikan Bandeng Payau", "Chanos chanos", "🐟"],
  ["Ikan Kakap Merah", "Lutjanus campechanus", "🐟"],
  ["Ikan Kerapu Macan", "Epinephelinae", "🐟"],
  ["Ikan Baronang Susu", "Siganus canaliculatus", "🐟"],
  ["Ikan Tenggiri Papan", "Scomberomorus commerson", "🐟"],
  ["Ikan Tongkol Komo", "Euthynnus affinis", "🐟"],
  ["Anjing Laut Pelabuhan", "Phoca vitulina", "🦭"],
  ["Dugong Pasifik", "Dugong dugon p.", "🐋"],
  ["Rusa Kutub Kutub", "Rangifer tarandus tarandus", "🦌"],
  ["Elang Botak Amerika", "Haliaeetus leucocephalus", "🦅"],
  ["Burung Hantu Salju", "Bubo scandiacus", "🦉"],
  ["Burung Flamingo Chili", "Phoenicopterus chilensis", "🦩"],
  ["Burung Merak Biru India", "Pavo cristatus b.", "🦚"],
  ["Burung Merpati Pos", "Columba livia domestica", "🕊️"]
];

const TUMBUHAN_LIST = [
  // Priority 1
  { name: "Kurma", slug: "kurma", latin: "Phoenix dactylifera", surah: "Maryam", ayat: "19:25", icon: "🌴" },
  { name: "Zaitun", slug: "zaitun", latin: "Olea europaea", surah: "At-Tin", ayat: "95:1", icon: "🫒" },
  { name: "Tin", slug: "tin", latin: "Ficus carica", surah: "At-Tin", ayat: "95:1", icon: "🪪" },
  { name: "Delima", slug: "delima", latin: "Punica granatum", surah: "Al-An'am", ayat: "6:99", icon: "🍎" },
  { name: "Anggur", slug: "anggur", latin: "Vitis vinifera", surah: "Al-An'am", ayat: "6:99", icon: "🍇" },
  { name: "Jahe", slug: "jahe", latin: "Zingiber officinale", surah: "Al-Insan", ayat: "76:17", icon: "🫚" },
  { name: "Bawang", slug: "bawang", latin: "Allium cepa", surah: "Al-Baqarah", ayat: "2:61", icon: "🧅" },
  { name: "Bidara", slug: "bidara", latin: "Ziziphus mauritiana", surah: "Saba", ayat: "34:16", icon: "🌿" },
  { name: "Pisang", slug: "pisang", latin: "Musa paradisiaca", surah: "Al-Waqi'ah", ayat: "56:29", icon: "🍌" },
  { name: "Bawang Putih", slug: "bawang-putih", latin: "Allium sativum", surah: "Al-Baqarah", ayat: "2:61", icon: "🧄" },
  { name: "Mustard", slug: "mustard", latin: "Brassica nigra", surah: "Al-Anbiya", ayat: "21:47", icon: "🌿" },
  { name: "Gandum", slug: "gandum", latin: "Triticum", surah: "Al-Baqarah", ayat: "2:61", icon: "🌾" },
  // Priority 2
  { name: "Mawar", slug: "mawar", latin: "Rosa", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🌹" },
  { name: "Melati", slug: "melati", latin: "Jasminum", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🌼" },
  { name: "Anggrek", slug: "anggrek", latin: "Orchidaceae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🌸" },
  { name: "Sakura", slug: "sakura", latin: "Prunus serrulata", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🌸" },
  { name: "Bunga Matahari", slug: "bunga-matahari", latin: "Helianthus annuus", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🌻" },
  { name: "Teratai", slug: "teratai", latin: "Nelumbo nucifera", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🪷" },
  { name: "Lavender", slug: "lavender", latin: "Lavandula", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🌿" },
  { name: "Kaktus", slug: "kaktus", latin: "Cactaceae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🌵" },
  { name: "Bambu", slug: "bambu", latin: "Bambusoideae", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🎋" },
  { name: "Kelapa", slug: "kelapa", latin: "Cocos nucifera", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🥥" }
];

const extraTumbuhanRaw = [
  ["Tulip Belanda", "Tulipa gesneriana", "🌷"],
  ["Lili Putih", "Lilium candidum", "🌸"],
  ["Krisan Kuning", "Chrysanthemum indicum", "🌼"],
  ["Daisy Liar", "Bellis perennis l.", "🌼"],
  ["Anyelir Merah", "Dianthus caryophyllus m.", "🌸"],
  ["Dahlia Taman", "Dahlia pinnata t.", "💮"],
  ["Peony Wangi", "Paeonia lactiflora", "🌺"],
  ["Iris Biru", "Iris sibirica b.", "🪻"],
  ["Poppy Merah", "Papaver somniferum m.", "🌺"],
  ["Begonia Daun", "Begonia semperflorens", "🌺"],
  ["Geranium Wangi", "Geranium graveolens", "🌺"],
  ["Azalea Jepang", "Rhododendron indicum", "🌺"],
  ["Rhododendron Merah", "Rhododendron ponticum", "🌺"],
  ["Camellia Pink", "Camellia japonica p.", "🌺"],
  ["Hibiscus Sepatu", "Hibiscus rosa-sinensis s.", "🌺"],
  ["Bougainvillea Kertas", "Bougainvillea spectabilis k.", "🌺"],
  ["Wisteria Ungu", "Wisteria sinensis u.", "🪻"],
  ["Hydrangea Biru", "Hydrangea macrophylla b.", "🌸"],
  ["Lilac Wangi", "Syringa vulgaris w.", "🪻"],
  ["Jasmine Melati", "Jasminum sambac", "🌼"],
  ["Gardenia Kaca piring", "Gardenia jasminoides k.", "🌼"],
  ["Magnolia Putih", "Magnolia grandiflora p.", "🌸"],
  ["Rosemary Herbal", "Salvia rosmarinus h.", "🌿"],
  ["Thyme Dapur", "Thymus vulgaris d.", "🌿"],
  ["Basil Kemangi", "Ocimum basilicum k.", "🌿"],
  ["Oregano Kering", "Origanum vulgare k.", "🌿"],
  ["Mint Daun", "Mentha piperita", "🌿"],
  ["Sage Herbal", "Salvia officinalis h.", "🌿"],
  ["Parsley Seledri Impor", "Petroselinum crispum p.", "🌿"],
  ["Cilantro Ketumbar Daun", "Coriandrum sativum d.", "🌿"],
  ["Dill Adas Manis", "Anethum graveolens a.", "🌿"],
  ["Chives Kucai", "Allium schoenoprasum k.", "🌿"],
  ["Kunyit Kuning", "Curcuma longa k.", "🫚"],
  ["Bawang Merah Lokal", "Allium ascalonicum l.", "🧅"],
  ["Lidah Buaya Obat", "Aloe barbadensis", "🌵"],
  ["Kina Obat Demam", "Cinchona ledgeriana", "🌳"],
  ["Ginseng Korea", "Panax ginseng k.", "🌿"],
  ["Padi Sawah", "Oryza sativa s.", "🌾"],
  ["Jagung Manis", "Zea mays saccharata", "🌽"],
  ["Kedelai Hitam", "Glycine max h.", "🫘"],
  ["Singkong Kayu", "Manihot esculenta k.", "🌿"],
  ["Ubi Cilembu", "Ipomoea batatas c.", "🥔"],
  ["Wortel Manis", "Daucus carota m.", "🥕"],
  ["Tomat Cherry", "Solanum lycopersicum c.", "🍅"],
  ["Cabai Rawit Pedas", "Capsicum frutescens", "🌶️"],
  ["Pohon Mangga Harum Manis", "Mangifera indica h.", "🌳"],
  ["Pohon Durian Montong", "Durio zibethinus m.", "🌳"],
  ["Pohon Rambutan Binjai", "Nephelium lappaceum b.", "🌳"],
  ["Dandelion Kuning", "Taraxacum officinale k.", "🌼"],
  ["Violet Hutan", "Viola odorata h.", "🪻"],
  ["Lavender Prancis", "Lavandula dentata", "🪻"],
  ["Kaktus Koboi", "Cereus repandus", "🌵"],
  ["Bambu Apus", "Gigantochloa apus", "🎋"],
  ["Pohon Beringin Raksasa", "Ficus benjamina", "🌳"],
  ["Pohon Mahoni Jalanan", "Swietenia macrophylla", "🌳"],
  ["Pohon Jati Perhutani", "Tectona grandis p.", "🌳"],
  ["Pohon Pinus Merkusii", "Pinus merkusii", "🌲"],
  ["Pohon Cemara Kipas", "Platycladus orientalis", "🌲"],
  ["Pohon Ek Putih", "Quercus alba", "🌳"],
  ["Pohon Maple Merah", "Acer rubrum m.", "🍁"],
  ["Pohon Sakura Jepang", "Prunus yedoensis", "🌸"],
  ["Pohon Apel Malang", "Malus domestica m.", "🍎"],
  ["Pohon Jeruk Pontianak", "Citrus nobilis", "🍊"],
  ["Pohon Lemon Lokal", "Citrus limon l.", "🍋"],
  ["Pohon Pisang Ambon", "Musa paradisiaca a.", "🍌"],
  ["Pohon Alpukat Mentega", "Persea americana m.", "🥑"],
  ["Pohon Pepaya Bangkok", "Carica papaya b.", "🌳"],
  ["Pohon Nanas Subang", "Ananas comosus s.", "🍍"],
  ["Semangka Tanpa Biji", "Citrullus lanatus t.", "🍉"],
  ["Melon Hijau", "Cucumis melo h.", "🍈"],
  ["Stroberi Kebun", "Fragaria ananassa k.", "🍓"],
  ["Bluberi Manis", "Vaccinium corymbosum m.", "🫐"],
  ["Raspberi Merah", "Rubus idaeus m.", "🍓"],
  ["Blackberry Hitam", "Rubus fruticosus h.", "🫐"],
  ["Ceri Manis", "Prunus avium m.", "🍒"],
  ["Persik Manis", "Prunus persica m.", "🍑"],
  ["Plum Ungu", "Prunus domestica u.", "🍑"],
  ["Aprikot Kering", "Prunus armeniaca k.", "🍑"],
  ["Zaitun Hitam", "Olea europaea nigra", "🫒"],
  ["Pohon Kelapa Sawit Riau", "Elaeis guineensis r.", "🌴"],
  ["Kacang Tanah Kupas", "Arachis hypogaea k.", "🥜"],
  ["Kacang Hijau Kupas", "Vigna radiata k.", "🫘"],
  ["Kacang Merah Sup", "Phaseolus vulgaris s.", "🫘"],
  ["Kacang Polong Kaleng", "Pisum sativum k.", "🫘"],
  ["Bayam Hijau", "Amaranthus tricolor", "🥬"],
  ["Kangkung Darat", "Ipomoea aquatica d.", "🥬"],
  ["Sawi Sendok (Pakcoy)", "Brassica rapa subsp. chinensis", "🥬"],
  ["Selada Keriting", "Lactuca sativa k.", "🥬"],
  ["Kubis Ungu", "Brassica oleracea f. rubra", "🥬"],
  ["Brokoli Hijau", "Brassica oleracea v. italica h.", "🥦"],
  ["Kembang Kol Putih", "Brassica oleracea v. botrytis p.", "🥦"],
  ["Buncis Perancis", "Phaseolus vulgaris p.", "🫘"],
  ["Labu Parang", "Cucurbita moschata", "🎃"],
  ["Timun Jepang", "Cucumis sativus j.", "🥒"],
  ["Terong Ungu", "Solanum melongena u.", "🍆"],
  ["Kentang Dieng", "Solanum tuberosum d.", "🥔"],
  ["Kunyit Putih Obat", "Curcuma mangga", "🫚"],
  ["Kencur Jamu", "Kaempferia galanga j.", "🫚"],
  ["Lengkuas Merah", "Alpinia galanga m.", "🫚"],
  ["Temulawak Jamu", "Curcuma zanthorrhiza j.", "🫚"],
  ["Serai Dapur", "Cymbopogon citratus d.", "🌿"],
  ["Daun Salam Masakan", "Syzygium polyanthum m.", "🌿"],
  ["Daun Pandan Wangi", "Pandanus amaryllifolius w.", "🌿"],
  ["Cengkeh Maluku", "Syzygium aromaticum m.", "🌿"],
  ["Lada Hitam", "Piper nigrum h.", "🌿"],
  ["Kayu Manis Ceylon", "Cinnamomum verum c.", "🌿"],
  ["Pala Banda", "Myristica fragrans b.", "🌿"],
  ["Ketumbar Bumbu", "Coriandrum sativum b.", "🌿"],
  ["Jinten Hitam (Habbatussauda)", "Nigella sativa", "🌿"],
  ["Kapulaga Jawa", "Amomum compactum", "🌿"],
  ["Adas Adas", "Foeniculum vulgare a.", "🌿"],
  ["Vanili Alami", "Vanilla planifolia a.", "🌿"],
  ["Teh Hijau", "Camellia sinensis h.", "🌿"],
  ["Kopi Toraja", "Coffea arabica t.", "☕"],
  ["Kakao Sulawesi", "Theobroma cacao s.", "🍫"],
  ["Tebu Manis", "Saccharum officinarum m.", "🌾"],
  ["Tembakau Deli", "Nicotiana tabacum d.", "🌿"],
  ["Karet Alam", "Hevea brasiliensis a.", "🌳"],
  ["Kapas Pembersih", "Gossypium herbaceum", "☁️"],
  ["Jarak Kepyar", "Ricinus communis k.", "🌿"],
  ["Nilam Wangi", "Pogostemon cablin w.", "🌿"],
  ["Kenanga Wangi", "Cananga odorata w.", "🌸"],
  ["Sedap Malam Wangi", "Polianthes tuberosa w.", "🌸"],
  ["Kamboja Bali", "Plumeria rubra", "🌸"],
  ["Soka Merah", "Ixora chinensis", "🌸"],
  ["Bugenvil Merah", "Bougainvillea glabra m.", "🌸"],
  ["Puring Hias", "Codiaeum variegatum h.", "🌿"],
  ["Sri Rejeki Hias", "Aglaonema commutatum", "🌿"],
  ["Lidah Mertua Hias", "Sansevieria trifasciata", "🌿"],
  ["Kuping Gajah Hias", "Anthurium crystallinum h.", "🌿"],
  ["Suplir Hijau", "Adiantum cuneatum", "🌿"],
  ["Paku Tanduk Rusa Hias", "Platycerium bifurcatum", "🌿"],
  ["Lumut Daun", "Bryopsida", "🌿"],
  ["Ganggang Hijau Air", "Chlorella", "🌿"],
  ["Cendawan Lingzhi Obat", "Ganoderma lucidum o.", "🍄"],
  ["Jamur Tiram Putih", "Pleurotus ostreatus p.", "🍄"],
  ["Jamur Kancing Salad", "Agaricus bisporus s.", "🍄"],
  ["Jamur Shiitake Kering", "Lentinula edodes k.", "🍄"],
  ["Pohon Cedar Libanon", "Cedrus libani", "🌲"],
  ["Pohon Sequoia Raksasa", "Sequoiadendron giganteum r.", "🌲"],
  ["Pohon Baobab Afrika", "Adansonia digitata", "🌳"],
  ["Pohon Eukaliptus Minyak", "Eucalyptus globulus", "🌳"],
  ["Pohon Ginkgo Biloba Daun", "Ginkgo biloba d.", "🌳"],
  ["Pohon Cendana Wangi", "Santalum album w.", "🌳"],
  ["Pohon Gaharu Hutan", "Aquilaria malaccensis h.", "🌳"],
  ["Pohon Neem Obat", "Azadirachta indica o.", "🌳"],
  ["Pohon Kurma Sukari", "Phoenix dactylifera 'Sukari'", "🌴"],
  ["Pohon Ara Buah", "Ficus carica b.", "🌳"],
  ["Kantong Semar Hutan", "Nepenthes ampullaria", "🌿"],
  ["Bunga Rafflesia Arnoldii", "Rafflesia arnoldii a.", "💮"],
  ["Bunga Bangkai Raksasa", "Amorphophallus titanum r.", "💮"],
  ["Kaktus Natal Pink", "Schlumbergera truncata", "🌵"],
  ["Kaktus Pir Berduri Buah", "Opuntia ficus-indica", "🌵"],
  ["Bambu Petung Raksasa", "Dendrocalamus asper r.", "🎋"],
  ["Pohon Kelapa Gading", "Cocos nucifera 'Eburnea'", "🌴"],
  ["Pohon Sagu Papua", "Metroxylon sagu p.", "🌴"],
  ["Pohon Aren Nira", "Arenga pinnata n.", "🌴"],
  ["Pohon Pinang Jambe", "Areca catechu j.", "🌴"],
  ["Pohon Lontar Daun", "Borassus flabellifer d.", "🌴"],
  ["Pohon Bambu Apus", "Bambusa vulgaris a.", "🎋"],
  ["Pohon Cemara Kipas Barat", "Thuja occidentalis b.", "🌲"],
  ["Pohon Cemara Udang Pantai", "Casuarina equisetifolia p.", "🌲"],
  ["Pohon Maple Gula", "Acer saccharum g.", "🍁"],
  ["Pohon Birch Kertas", "Betula papyrifera", "🌳"],
  ["Pohon Willow Tangis", "Salix babylonica", "🌳"],
  ["Pohon Cypress Italia", "Cupressus sempervirens", "🌲"],
  ["Pohon Yew Eropa", "Taxus baccata e.", "🌲"],
  ["Pohon Spruce Norwegia", "Picea abies n.", "🌲"],
  ["Pohon Douglas Fir Raksasa", "Pseudotsuga menziesii r.", "🌲"],
  ["Pohon Alder Hitam", "Alnus glutinosa h.", "🌳"],
  ["Pohon Rowan Eropa", "Sorbus aucuparia e.", "🌳"]
];

const ALAM_LIST = [
  // Priority 1
  { name: "Matahari", slug: "matahari", latin: "Sun", surah: "Asy-Syams", ayat: "91:1-2", icon: "☀️" },
  { name: "Bulan", slug: "bulan", latin: "Moon", surah: "Al-Qamar", ayat: "54:1", icon: "🌙" },
  { name: "Bintang", slug: "bintang", latin: "Star", surah: "An-Najm", ayat: "53:1", icon: "⭐" },
  { name: "Laut", slug: "laut", latin: "Ocean", surah: "Ar-Rahman", ayat: "55:19-20", icon: "🌊" },
  { name: "Gunung", slug: "gunung", latin: "Mountain", surah: "An-Naba", ayat: "78:7", icon: "⛰️" },
  { name: "Angin", slug: "angin", latin: "Wind", surah: "Al-Hijr", ayat: "15:22", icon: "💨" },
  { name: "Hujan", slug: "hujan", latin: "Rain", surah: "Al-Baqarah", ayat: "2:22", icon: "🌧️" },
  { name: "Petir", slug: "petir", latin: "Lightning", surah: "Ar-Ra'd", ayat: "13:13", icon: "⚡" },
  { name: "Api", slug: "api", latin: "Fire", surah: "Al-Waqi'ah", ayat: "56:71", icon: "🔥" },
  { name: "Tanah", slug: "tanah", latin: "Soil", surah: "Al-Hajj", ayat: "22:5", icon: "🟫" },
  { name: "Air", slug: "air", latin: "Water", surah: "Al-Anbiya", ayat: "21:30", icon: "💧" },
  { name: "Awan", slug: "awan", latin: "Cloud", surah: "Al-Baqarah", ayat: "2:57", icon: "☁️" },
  { name: "Sungai", slug: "sungai", latin: "River", surah: "Al-Baqarah", ayat: "2:25", icon: "🏞️" },
  { name: "Gurun", slug: "gurun", latin: "Desert", surah: "Al-Furqan", ayat: "25:48", icon: "🏜️" },
  { name: "Salju", slug: "salju", latin: "Snow", surah: "Hadist", ayat: "Doa Istiftah", icon: "❄️" },
  // Priority 2
  { name: "Pelangi", slug: "pelangi", latin: "Rainbow", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🌈" },
  { name: "Gerhana", slug: "gerhana", latin: "Eclipse", surah: "Hadist", ayat: "HR Bukhari", icon: "🌑" },
  { name: "Gunung Berapi", slug: "gunung-berapi", latin: "Volcano", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🌋" }
];

const extraAlamRaw = [
  ["Gempa Bumi", "Earthquake", "🌋"],
  ["Tsunami", "Tsunami", "🌊"],
  ["Tornado", "Tornado", "🌪️"],
  ["Aurora Borealis", "Aurora Borealis", "🌌"],
  ["Aurora Australis", "Aurora Australis", "🌌"],
  ["Gerhana Matahari", "Solar Eclipse", "🌑"],
  ["Gerhana Bulan", "Lunar Eclipse", "🌑"],
  ["Ekosistem Hutan", "Forest Ecosystem", "🌳"],
  ["Terumbu Karang", "Coral Reef", "🪸"],
  ["Fotosintesis", "Photosynthesis", "☀️"],
  ["Siklus Air", "Water Cycle", "💧"],
  ["Rantai Makanan", "Food Chain", "🌱"],
  ["Hutan Hujan Tropis", "Tropical Rainforest", "🌳"],
  ["Badai Topan", "Typhoon", "🌀"],
  ["Banjir Bandang", "Flash Flood", "🌊"],
  ["Kekeringan", "Drought", "☀️"],
  ["Tanah Longsor", "Landslide", "⛰️"],
  ["Salju Longsor", "Avalanche", "❄️"],
  ["Badai Pasir", "Sandstorm", "💨"],
  ["Kabut Tebal", "Thick Fog", "🌫️"],
  ["Awan Kumulonimbus", "Cumulonimbus", "☁️"],
  ["Awan Sirus", "Cirrus Cloud", "☁️"],
  ["Pelangi Ganda", "Double Rainbow", "🌈"],
  ["Pasang Surut Air Laut", "Ocean Tides", "🌊"],
  ["Arus Laut", "Ocean Currents", "🌊"],
  ["Palung Laut Mariana", "Mariana Trench", "🌊"],
  ["Delta Sungai Nil", "River Delta", "🏞️"],
  ["Air Terjun Niagara", "Waterfall", "🏞️"],
  ["Geyser Yellowstone", "Geyser", "♨️"],
  ["Gua Alam Bawah Tanah", "Cave", "🕳️"],
  ["Stalaktit Gua", "Stalactite", "🪨"],
  ["Stalagmit Gua", "Stalagmit", "🪨"],
  ["Ngarai Besar (Canyon)", "Grand Canyon", "⛰️"],
  ["Oasis Gurun Pasir", "Desert Oasis", "🌴"],
  ["Sabana Rumput Tropis", "Savanna", "🌱"],
  ["Tundra Beku Artik", "Tundra", "❄️"],
  ["Taiga Pinus Subartik", "Taiga", "🌲"],
  ["Hutan Bakau Mangrove", "Mangrove Forest", "🌳"],
  ["Pulau Vulkanik Baru", "Volcanic Island", "🌋"],
  ["Atol Karang Samudra", "Atoll", "🪸"],
  ["Gunung Es Artik", "Iceberg", "🏔️"],
  ["Gletser Beku Alami", "Glacier", "🏔️"],
  ["Fjord Laut Norwegia", "Fjord", "🌊"],
  ["Selat Sunda", "Strait", "🌊"],
  ["Teluk Jakarta", "Bay", "🌊"],
  ["Semenanjung Melayu", "Peninsula", "🌍"],
  ["Dataran Tinggi Dekkan", "Plateau", "⛰️"],
  ["Gumuk Pasir Sahara", "Sand Dune", "🏜️"],
  ["Batu Basalt Hitam", "Basalt Rock", "🪨"],
  ["Batu Granit Keras", "Granite Rock", "🪨"],
  ["Batu Obsidian Kaca", "Obsidian Rock", "🪨"],
  ["Batu Apung Ringan", "Pumice Rock", "🪨"],
  ["Batu Marmer Kilap", "Marble Rock", "🪨"],
  ["Batu Kapur Putih", "Limestone Rock", "🪨"],
  ["Intan Permata Karat", "Diamond", "💎"],
  ["Emas Murni Logam", "Gold Metal", "🪙"],
  ["Perak Murni Logam", "Silver Metal", "🪙"],
  ["Besi Alami Meteorit", "Meteoritic Iron", "🔩"],
  ["Batubara Tambang", "Coal", "🪨"],
  ["Minyak Bumi Mentah", "Crude Oil", "🛢️"],
  ["Gas Alam Metana", "Natural Gas", "🔥"],
  ["Energi Surya Matahari", "Solar Energy", "☀️"],
  ["Energi Angin Turbin", "Wind Energy", "💨"],
  ["Energi Geotermal Bumi", "Geothermal Energy", "♨️"],
  ["Siklus Carbon Alam", "Carbon Cycle", "🌱"],
  ["Siklus Nitrogen Tanah", "Nitrogen Cycle", "🌱"],
  ["Siklus Oksigen Udara", "Oxygen Cycle", "🌱"],
  ["Efek Rumah Kaca Global", "Greenhouse Effect", "🌡️"],
  ["Lapisan Ozon Pelindung", "Ozone Layer", "🛡️"],
  ["Atmosfer Bumi Biru", "Earth's Atmosphere", "🌍"],
  ["Troposfer Awan", "Troposphere", "☁️"],
  ["Stratosphere Pesawat", "Stratosphere", "☁️"],
  ["Mesosfer Meteor", "Mesosphere", "☄️"],
  ["Termosfer Aurora", "Thermosphere", "🌌"],
  ["Eksosfer Satelit", "Exosphere", "🛰️"],
  ["Gravitasi Bumi Alami", "Earth's Gravity", "🌍"],
  ["Magnetisme Bumi Kompas", "Earth's Magnetism", "🧲"],
  ["Halo Matahari Cincin", "Solar Halo", "☀️"],
  ["Halo Bulan Cincin", "Lunar Halo", "🌙"],
  ["Fata Morgana Gurun", "Mirage", "🏜️"],
  ["Hujan Asam Polusi", "Acid Rain", "🌧️"],
  ["Gelombang Seismik Gempa", "Seismic Waves", "📈"],
  ["Magma Cair Dalam Bumi", "Magma", "🔥"],
  ["Lava Panas Gunung Api", "Lava", "🔥"],
  ["Kawah Gunung Api Danau", "Volcanic Crater", "🌋"],
  ["Sulfur Kawah Belerang", "Sulfur", "🟡"],
  ["Batu Pasir Endapan", "Sandstone Rock", "🪨"],
  ["Batu Sabak Tulis", "Slate Rock", "🪨"],
  ["Kristal Kuarsa Bening", "Quartz Crystal", "🔮"],
  ["Tembaga Murni Kabel", "Copper Metal", "🔩"],
  ["Aliran Lava Bawah Laut Samudra", "Submarine Lava Flow", "🌋"],
  ["Hutan Gugur Empat Musim", "Temperate Forest", "🍁"],
  ["Padang Lamun Pantai", "Seagrass Meadow", "🌱"],
  ["Estuari Sungai Payau", "River Estuary", "🏞️"],
  ["Mata Air Panas Geothermal", "Hot Spring", "♨️"],
  ["Awan Stratus Tebal", "Stratus Cloud", "☁️"],
  ["Awan Kumulus Putih", "Cumulus Cloud", "☁️"],
  ["Badai Petir Kilat", "Thunderstorm", "🌩️"],
  ["Hujan Es Batu Kristal", "Hailstorm", "🌧️"],
  ["Badai Salju Dingin", "Blizzard", "❄️"],
  ["Embun Pagi Daun", "Morning Dew", "💧"],
  ["Embunan Beku Salju", "Frost", "❄️"],
  ["Pelangi Bulan Malam (Moonbow)", "Moonbow", "🌈"],
  ["Pelangi Kabut Gunung (Fogbow)", "Fogbow", "🌈"],
  ["Kilat Vulkanik Letusan", "Volcanic Lightning", "⚡"],
  ["Gelombang Pasang Purnama", "Tidal Waves", "🌊"],
  ["Siklon Tropis Samudra", "Tropical Cyclone", "🌀"],
  ["Puting Beliung Darat", "Landspout", "🌪️"],
  ["Kekeringan Ekstrem Afrika", "Extreme Drought", "☀️"],
  ["Tanah Humus Subur", "Humus Soil", "🟫"],
  ["Tanah Liat Keramik", "Clay Soil", "🟫"],
  ["Tanah Pasir Pantai", "Sandy Soil", "🏜️"],
  ["Tanah Gambut Rawa", "Peat Soil", "🟫"],
  ["Tanah Kapur Bukit", "Chalk Soil", "🟫"],
  ["Erosi Air Hujan", "Water Erosion", "🏞️"],
  ["Erosi Angin Gurun", "Wind Erosion", "🏜️"],
  ["Pelapukan Batuan Mekanik", "Rock Weathering", "🪨"],
  ["Sedimentasi Sungai Delta", "Sedimentation", "🏞️"],
  ["Kars Topografi Bukit", "Karst Topography", "⛰️"],
  ["Danau Tektonik Toba", "Tectonic Lake", "🏞️"],
  ["Danau Vulkanik Batur", "Volcanic Lake", "🏞️"],
  ["Rawa Gambut Kalimantan", "Peat Swamp", "🏞️"],
  ["Air Tanah Sumur", "Groundwater", "💧"],
  ["Siklus Batuan Alam", "Rock Cycle", "🪨"],
  ["Batu Bara Muda Cokelat", "Lignite Coal", "🪨"],
  ["Tembaga Alami Tambang", "Native Copper", "🔩"],
  ["Batu Serpih Lunak", "Shale Rock", "🪨"],
  ["Batu Konglomerat Kerikil", "Conglomerate Rock", "🪨"],
  ["Batu Breksi Bersudut", "Breccia Rock", "🪨"],
  ["Batu Gamping Karang", "Limestone", "🪨"],
  ["Batu Gips Alam", "Gypsum", "🪨"],
  ["Garam Batu Tambang", "Halite", "🪨"]
];

const TUBUH_LIST = [
  // Priority 1
  { name: "Jantung", slug: "jantung", latin: "Cor", surah: "Qaf", ayat: "50:37", icon: "🫀" },
  { name: "Mata", slug: "mata", latin: "Oculus", surah: "Al-Qiyamah", ayat: "75:23", icon: "👁️" },
  { name: "Telinga", slug: "telinga", latin: "Auris", surah: "Al-Baqarah", ayat: "2:7", icon: "👂" },
  { name: "Tangan", slug: "tangan", latin: "Manus", surah: "Yasin", ayat: "36:65", icon: "✋" },
  { name: "Kulit", slug: "kulit", latin: "Cutis", surah: "An-Nisa", ayat: "4:56", icon: "🖐️" },
  { name: "Tulang", slug: "tulang", latin: "Ossa", surah: "Al-Isra", ayat: "17:49", icon: "🦴" },
  { name: "Otak", slug: "otak", latin: "Cerebrum", surah: "Al-Alaq", ayat: "96:15", icon: "🧠" },
  { name: "Darah", slug: "darah", latin: "Sanguis", surah: "Al-Maidah", ayat: "5:3", icon: "🩸" },
  { name: "Sidik Jari", slug: "sidik-jari", latin: "Dactyloscopy", surah: "Al-Qiyamah", ayat: "75:4", icon: "👍" }
];

const extraTubuhRaw = [
  ["Lambung", "Ventriculus", "🍎"],
  ["Usus Halus", "Intestinum tenue", "🥦"],
  ["Usus Besar", "Intestinum crassum", "🥦"],
  ["Hati", "Hepar", "🫁"],
  ["Kantung Empedu", "Vesica fellea", "🟢"],
  ["Pankreas", "Pancreas", "🟡"],
  ["Kerongkongan", "Esophagus", "🧣"],
  ["Mulut", "Cavitas oris", "👄"],
  ["Gigi", "Dentes", "🦷"],
  ["Lidah", "Lingua", "👅"],
  ["Kelenjar Air Liur", "Glandulae salivariae", "💦"],
  ["Hidung", "Nasus", "👃"],
  ["Faring", "Pharynx", "🗣️"],
  ["Laring", "Larynx", "🗣️"],
  ["Trakea", "Trachea", "🧣"],
  ["Bronkus", "Bronchus", "🫁"],
  ["Paru-paru", "Pulmo", "🫁"],
  ["Alveolus", "Alveolus pulmonis", "🫁"],
  ["Diafragma", "Diaphragma", "🫁"],
  ["Pembuluh Darah", "Vasa sanguinea", "🩸"],
  ["Pembuluh Arteri", "Arteria", "🩸"],
  ["Pembuluh Vena", "Vena", "🩸"],
  ["Pembuluh Kapiler", "Vas capillare", "🩸"],
  ["Plasma Darah", "Plasma sanguinis", "🩸"],
  ["Sel Darah Merah", "Erythrocytus", "🔴"],
  ["Sel Darah Putih", "Leucocytus", "⚪"],
  ["Keping Darah Trombosit", "Thrombocytus", "🩸"],
  ["Ginjal", "Ren", "🥔"],
  ["Ureter", "Ureter", "🧬"],
  ["Kantung Kemih", "Vesica urinaria", "💧"],
  ["Uretra", "Urethra", "💧"],
  ["Otak Besar", "Cerebrum", "🧠"],
  ["Otak Kecil", "Cerebellum", "🧠"],
  ["Batang Otak", "Truncus encephali", "🧠"],
  ["Sumsum Tulang Belakang", "Medulla spinalis", "🦴"],
  ["Saraf Sensorik", "Neuron sensorium", "⚡"],
  ["Saraf Motorik", "Neuron motorium", "⚡"],
  ["Otot Polos", "Textus muscularis nonstriatus", "💪"],
  ["Otot Lurik", "Textus muscularis striatus", "💪"],
  ["Otot Jantung", "Textus muscularis cardiacus", "🫀"],
  ["Tendon", "Tendo", "💪"],
  ["Ligamen", "Ligamentum", "💪"],
  ["Sendi Engsel", "Articulatio ginglymus", "🦴"],
  ["Sendi Peluru", "Articulatio spheroidea", "🦴"],
  ["Tulang Tengkorak", "Cranium", "💀"],
  ["Tulang Rusuk", "Costae", "🦴"],
  ["Tulang Dada", "Sternum", "🦴"],
  ["Tulang Belakang", "Columna vertebralis", "🦴"],
  ["Tulang Panggul", "Pelvis", "🦴"],
  ["Tulang Lengan", "Humerus", "🦴"],
  ["Tulang Paha", "Femur", "🦴"],
  ["Kulit Epidermis", "Epidermis", "🖐️"],
  ["Kulit Dermis", "Dermis", "🖐️"],
  ["Rambut", "Pili", "💇"],
  ["Kuku", "Unguis", "💅"],
  ["Kelenjar Keringat", "Glandula sudorifera", "💦"],
  ["Kelenjar Minyak", "Glandula sebacea", "💦"],
  ["Limpa", "Lien", "🫁"],
  ["Kelenjar Getah Bening", "Nodi lymphatici", "🟢"],
  ["Pembuluh Limfa", "Vasa lymphatica", "🟢"],
  ["Sel T Imun", "T-lymphocyte", "🛡️"],
  ["Sel B Imun", "B-lymphocyte", "🛡️"],
  ["Antibodi Tubuh", "Immunoglobulinum", "🛡️"],
  ["Kelenjar Pituitari", "Hypophysis", "🧠"],
  ["Kelenjar Tiroid", "Glandula thyroidea", "🦋"],
  ["Kelenjar Paratiroid", "Glandulae parathyroideae", "🌱"],
  ["Kelenjar Adrenal", "Glandula suprarenalis", "🫁"],
  ["Kelenjar Timus", "Thymus", "🛡️"],
  ["Kelenjar Pineal", "Glandula pinealis", "🧠"],
  ["Kromosom Genetik", "Chromosomum", "🧬"],
  ["Gen Warisan", "Genum", "🧬"],
  ["Enzim Amilase Liar", "Amylase", "💦"],
  ["Enzim Pepsin Lambung", "Pepsin", "🧪"],
  ["Hormon Insulin", "Insulinum", "🧪"],
  ["Hormon Adrenalin", "Adrenalinum", "⚡"],
  ["Hormon Melatonin", "Melatoninum", "🌙"],
  ["Sinapsis Saraf", "Synapsis", "⚡"],
  ["Reseptor Rasa Lidah", "Gustatory receptor", "👅"],
  ["Reseptor Sentuh Kulit", "Tactile receptor", "🖐️"],
  ["Reseptor Bau Hidung", "Olfactory receptor", "👃"],
  ["Reseptor Suhu Tubuh", "Thermoreceptor", "🌡️"],
  ["Koklea Telinga Dalam", "Cochlea", "👂"],
  ["Retina Mata Belakang", "Retina", "👁️"],
  ["Kornea Mata Depan", "Cornea", "👁️"],
  ["Lensa Mata Fokus", "Lens crystallina", "👁️"],
  ["Iris Mata Warna", "Iris", "👁️"],
  ["Pupil Mata Cahaya", "Pupilla", "👁️"],
  ["Gendang Telinga Getar", "Membrana tympani", "👂"],
  ["Saluran Eustachius Tekanan", "Tuba auditiva", "👂"],
  ["Sel Kerucut Mata Warna", "Photocytus coniformis", "👁️"],
  ["Sel Batang Mata Gelap", "Photocytus bacilliformis", "👁️"],
  ["Sumsum Tulang Merah Sel", "Medulla ossium rubra", "🦴"],
  ["Sumsum Tulang Kuning Lemak", "Medulla ossium flava", "🦴"],
  ["Sel Induk Stem Cell", "Cellula praecursoria", "🧬"],
  ["Kolagen Kulit Lentur", "Collagenum", "🧬"],
  ["Keratin Kuku Rambut", "Keratinum", "💇"],
  ["Asam Lambung Korosif", "Acidum gastricum", "🧪"],
  ["Cairan Empedu Hijau", "Bilis", "🟢"],
  ["Hemoglobin Darah Merah", "Hemoglobinum", "🔴"],
  ["Antibodi IgG Umum", "Immunoglobulinum G", "🛡️"],
  ["Cairan Serebrospinal Otak", "Liquor cerebrospinalis", "🧠"],
  ["Pori-pori Kulit Keringat", "Porus cutaneus", "🖐️"],
  ["Lapisan Lemak Kulit Hangat", "Subcutis", "🖐️"],
  ["Folikel Rambut Tumbuh", "Folliculus pili", "💇"],
  ["Alat Keseimbangan Telinga Tengah", "Apparatus vestibularis", "👂"],
  ["Tulang Sanggurdi Telinga", "Stapes", "🦴"],
  ["Tulang Landasan Telinga", "Incus", "🦴"],
  ["Tulang Martil Telinga", "Malleus", "🦴"],
  ["Tulang Hidung Wajah", "Os nasale", "🦴"],
  ["Tulang Rahang Atas Mulut", "Maxilla", "🦴"],
  ["Tulang Rahang Bawah Gigi", "Mandibula", "🦴"],
  ["Tulang Belikat Bahu", "Scapula", "🦴"],
  ["Tulang Selangka Dada", "Clavicula", "🦴"],
  ["Tulang Lengan Bawah Radius", "Radius", "🦴"],
  ["Tulang Hasta Lengan", "Ulna", "🦴"],
  ["Tulang Pergelangan Tangan Carpi", "Carpi", "🦴"],
  ["Tulang Telapak Tangan Metacarpi", "Metacarpi", "🦴"],
  ["Tulang Jari Tangan Panjang", "Phalanges manus", "🦴"],
  ["Tulang Tempurung Lutut Kaki", "Patella", "🦴"],
  ["Tulang Kering Depan Kaki", "Tibia", "🦴"],
  ["Tulang Betis Belakang Kaki", "Fibula", "🦴"],
  ["Tulang Pergelangan Kaki Tarsi", "Tarsi", "🦴"],
  ["Tulang Telapak Kaki Metatarsi", "Metatarsi", "🦴"],
  ["Tulang Jari Kaki Pendek", "Phalanges pedis", "🦴"],
  ["Otot Dada Bidang", "Musculus pectoralis major", "💪"],
  ["Otot Bisep Lengan", "Musculus biceps brachii", "💪"],
  ["Otot Trisep Belakang Lengan", "Musculus triceps brachii", "💪"],
  ["Otot Perut Sixpack", "Musculus rectus abdominis", "💪"],
  ["Otot Paha Kuadrisep", "Musculus quadriceps femoris", "💪"],
  ["Otot Betis Kuat", "Musculus gastrocnemius", "💪"],
  ["Asam Deoksiribonukleat DNA", "Acidum deoxyribonucleicum", "🧬"],
  ["Asam Ribonukleat RNA", "Acidum ribonucleicum", "🧬"],
  ["Mitokondria Energi Sel", "Mitochondrion", "🧬"],
  ["Ribosom Sintesis Protein", "Ribosoma", "🧬"],
  ["Sitoplasma Cairan Sel", "Cytoplasma", "🧬"],
  ["Membran Sel Pelindung", "Membrana cellularis", "🧬"],
  ["Badan Golgi Distribusi Sel", "Apparatus golgi", "🧬"],
  ["Lisosom Pembersih Sel", "Lysosoma", "🧬"],
  ["Nukleolus Inti Sel", "Nucleolus", "🧬"]
];

const NABI_LIST = [
  { name: "Nabi Adam A.S.", slug: "adam", surah: "Al-Baqarah 2:30-37" },
  { name: "Nabi Idris A.S.", slug: "idris", surah: "Maryam 19:56-57" },
  { name: "Nabi Nuh A.S.", slug: "nuh", surah: "Hud 11:36-48" },
  { name: "Nabi Hud A.S.", slug: "hud", surah: "Hud 11:50-60" },
  { name: "Nabi Shaleh A.S.", slug: "shaleh", surah: "Hud 11:61-68" },
  { name: "Nabi Ibrahim A.S.", slug: "ibrahim", surah: "Al-Baqarah 2:124-131" },
  { name: "Nabi Luth A.S.", slug: "luth", surah: "Hud 11:77-83" },
  { name: "Nabi Ismail A.S.", slug: "ismail", surah: "Maryam 19:54-55" },
  { name: "Nabi Ishaq A.S.", slug: "ishaq", surah: "Maryam 19:49-50" },
  { name: "Nabi Yaqub A.S.", slug: "yaqub", surah: "Yusuf 12:4-10" },
  { name: "Nabi Yusuf A.S.", slug: "yusuf", surah: "Yusuf 12:4-102" },
  { name: "Nabi Ayyub A.S.", slug: "ayyub", surah: "Al-Anbiya 21:83-84" },
  { name: "Nabi Syu'aib A.S.", slug: "syuaib", surah: "Hud 11:84-95" },
  { name: "Nabi Musa A.S.", slug: "musa", surah: "Al-A'raf 7:103-136" },
  { name: "Nabi Harun A.S.", slug: "harun", surah: "Taha 20:29-36" },
  { name: "Nabi Dzulkifli A.S.", slug: "dzulkifli", surah: "Al-Anbiya 21:85-86" },
  { name: "Nabi Daud A.S.", slug: "daud", surah: "Saba 34:10-11" },
  { name: "Nabi Sulaiman A.S.", slug: "sulaiman", surah: "Saba 34:12-14" },
  { name: "Nabi Ilyas A.S.", slug: "ilyas", surah: "As-Saffat 37:123-132" },
  { name: "Nabi Ilyasa A.S.", slug: "ilyasa", surah: "Al-An'am 6:86" },
  { name: "Nabi Yunus A.S.", slug: "yunus", surah: "Al-Anbiya 21:87-88" },
  { name: "Nabi Zakaria A.S.", slug: "zakaria", surah: "Maryam 19:2-15" },
  { name: "Nabi Yahya A.S.", slug: "yahya", surah: "Maryam 19:12-15" },
  { name: "Nabi Isa A.S.", slug: "isa", surah: "Maryam 19:16-36" },
  { name: "Nabi Muhammad ﷺ", slug: "muhammad", surah: "Al-Ahzab 34:40" }
];

const ASMAUL_HUSNA_LIST = [
  { ar: "الرَّحْمَنُ", name: "Ar-Rahman", slug: "ar-rahman", meaningId: "Maha Pengasih", meaningEn: "The Beneficent" },
  { ar: "الرَّحِيمُ", name: "Ar-Rahim", slug: "ar-rahim", meaningId: "Maha Penyayang", meaningEn: "The Merciful" },
  { ar: "الْمَلِكُ", name: "Al-Malik", slug: "al-malik", meaningId: "Maha Raja", meaningEn: "The King / The Sovereign" },
  { ar: "الْقُدُّوسُ", name: "Al-Quddus", slug: "al-quddus", meaningId: "Maha Suci", meaningEn: "The Holy / The Pure" },
  { ar: "السَّلَامُ", name: "As-Salam", slug: "as-salam", meaningId: "Maha Pemberi Kesejahteraan", meaningEn: "The Source of Peace" },
  { ar: "الْمُؤْمِنُ", name: "Al-Mu'min", slug: "al-mumin", meaningId: "Maha Pemberi Keamanan", meaningEn: "The Giver of Security" },
  { ar: "الْمُهَيْمِنُ", name: "Al-Muhaymin", slug: "al-muhaymin", meaningId: "Maha Pemelihara", meaningEn: "The Guardian" },
  { ar: "الْعَزِيزُ", name: "Al-Aziz", slug: "al-aziz", meaningId: "Maha Perkasa", meaningEn: "The Almighty" },
  { ar: "الْجَبَّارُ", name: "Al-Jabbar", slug: "al-jabbar", meaningId: "Maha Gagah", meaningEn: "The Compeller" },
  { ar: "الْمُتَكَبِّرُ", name: "Al-Mutakabbir", slug: "al-mutakabbir", meaningId: "Maha Memiliki Kebesaran", meaningEn: "The Supreme" },
  { ar: "الْخَالِقُ", name: "Al-Khaliq", slug: "al-khaliq", meaningId: "Maha Pencipta", meaningEn: "The Creator" },
  { ar: "الْبَارِئُ", name: "Al-Bari", slug: "al-bari", meaningId: "Maha Pembuat", meaningEn: "The Maker" },
  { ar: "الْمُصَوِّرُ", name: "Al-Musawwir", slug: "al-musawwir", meaningId: "Maha Pembentuk Rupa", meaningEn: "The Fashioner" },
  { ar: "الْغَفَّارُ", name: "Al-Ghaffar", slug: "al-ghaffar", meaningId: "Maha Pengampun", meaningEn: "The Forgiver" },
  { ar: "الْقَهَّارُ", name: "Al-Qahhar", slug: "al-qahhar", meaningId: "Maha Menundukkan", meaningEn: "The Subduer" },
  { ar: "الْوَهَّابُ", name: "Al-Wahhab", slug: "al-wahhab", meaningId: "Maha Pemberi Karunia", meaningEn: "The Bestower" },
  { ar: "الرَّزَّاقُ", name: "Al-Razzaq", slug: "al-razzaq", meaningId: "Maha Pemberi Rezeki", meaningEn: "The Provider" },
  { ar: "الْفَتَّاحُ", name: "Al-Fattah", slug: "al-fattah", meaningId: "Maha Pembuka Rahmat", meaningEn: "The Opener" },
  { ar: "الْعَلِيمُ", name: "Al-Alim", slug: "al-alim", meaningId: "Maha Mengetahui", meaningEn: "The All-Knowing" },
  { ar: "الْقَابِضُ", name: "Al-Qabid", slug: "al-qabid", meaningId: "Maha Menyempitkan", meaningEn: "The Constrictor" },
  { ar: "الْبَاسِطُ", name: "Al-Basit", slug: "al-basit", meaningId: "Maha Melapangkan", meaningEn: "The Expander" },
  { ar: "الْخَافِضُ", name: "Al-Khafid", slug: "al-khafid", meaningId: "Maha Merendahkan", meaningEn: "The Abaser" },
  { ar: "الرَّافِعُ", name: "Ar-Rafi", slug: "ar-rafi", meaningId: "Maha Meninggikan", meaningEn: "The Exalter" },
  { ar: "الْمُعِزُّ", name: "Al-Mu'izz", slug: "al-muizz", meaningId: "Maha Memuliakan", meaningEn: "The Giver of Honor" },
  { ar: "الْمُذِلُّ", name: "Al-Mudhill", slug: "al-mudhill", meaningId: "Maha Menghinakan", meaningEn: "The Giver of Dishonor" },
  { ar: "السَّمِيعُ", name: "As-Sami", slug: "as-sami", meaningId: "Maha Mendengar", meaningEn: "The All-Hearing" },
  { ar: "الْبَصِيرُ", name: "Al-Basir", slug: "al-basir", meaningId: "Maha Melihat", meaningEn: "The All-Seeing" },
  { ar: "الْحَكَمُ", name: "Al-Hakam", slug: "al-hakam", meaningId: "Maha Menetapkan Hukum", meaningEn: "The Judge" },
  { ar: "الْعَدْلُ", name: "Al-Adl", slug: "al-adl", meaningId: "Maha Adil", meaningEn: "The Just" },
  { ar: "اللَّطِيفُ", name: "Al-Latif", slug: "al-latif", meaningId: "Maha Lembut", meaningEn: "The Subtle One" },
  { ar: "الْخَبِيرُ", name: "Al-Khabir", slug: "al-khabir", meaningId: "Maha Mengenal", meaningEn: "The All-Aware" },
  { ar: "الْحَلِيمُ", name: "Al-Halim", slug: "al-halim", meaningId: "Maha Penyantun", meaningEn: "The Forbearing" },
  { ar: "الْعَظِيمُ", name: "Al-Azim", slug: "al-azim", meaningId: "Maha Agung", meaningEn: "The Magnificent" },
  { ar: "الْغَفُورُ", name: "Al-Ghafur", slug: "al-ghafur", meaningId: "Maha Pengampun", meaningEn: "The Great Forgiver" },
  { ar: "الشَّكُورُ", name: "Asy-Syakur", slug: "asy-syakur", meaningId: "Maha Bersyukur", meaningEn: "The Appreciative" },
  { ar: "الْعَلِيُّ", name: "Al-Ali", slug: "al-ali", meaningId: "Maha Tinggi", meaningEn: "The Highest" },
  { ar: "الْكَبِيرُ", name: "Al-Kabir", slug: "al-kabir", meaningId: "Maha Besar", meaningEn: "The Greatest" },
  { ar: "الْحَفِيظُ", name: "Al-Hafiz", slug: "al-hafiz", meaningId: "Maha Memelihara", meaningEn: "The Preserver" },
  { ar: "الْمُقِيتُ", name: "Al-Muqit", slug: "al-muqit", meaningId: "Maha Pemberi Kecukupan", meaningEn: "The Nourisher" },
  { ar: "الْحَسِيبُ", name: "Al-Hasib", slug: "al-hasib", meaningId: "Maha Pembuat Perhitungan", meaningEn: "The Reckoner" },
  { ar: "الْجَلِيلُ", name: "Al-Jalil", slug: "al-jalil", meaningId: "Maha Luhur", meaningEn: "The Majestic" },
  { ar: "الْكَرِيمُ", name: "Al-Karim", slug: "al-karim", meaningId: "Maha Mulia", meaningEn: "The Generous" },
  { ar: "الرَّقِيبُ", name: "Ar-Raqib", slug: "ar-raqib", meaningId: "Maha Mengawasi", meaningEn: "The Watchful" },
  { ar: "الْمُجِيبُ", name: "Al-Mujib", slug: "al-mujib", meaningId: "Maha Mengabulkan", meaningEn: "The Responsive" },
  { ar: "الْوَASِعُ", name: "Al-Wasi", slug: "al-wasi", meaningId: "Maha Luas", meaningEn: "The All-Encompassing" },
  { ar: "الْحَكِيمُ", name: "Al-Hakim", slug: "al-hakim", meaningId: "Maha Bijaksana", meaningEn: "The All-Wise" },
  { ar: "الْوَدُودُ", name: "Al-Wadud", slug: "al-wadud", meaningId: "Maha Mengasihi", meaningEn: "The Loving One" },
  { ar: "الْمَجِيدُ", name: "Al-Majid", slug: "al-majid", meaningId: "Maha Mulia", meaningEn: "The Glorious" },
  { ar: "الْبَاعِثُ", name: "Al-Ba'ith", slug: "al-baith", meaningId: "Maha Membangkitkan", meaningEn: "The Resurrector" },
  { ar: "الشَّهِيدُ", name: "Asy-Syahid", slug: "asy-syahid", meaningId: "Maha Menyaksikan", meaningEn: "The Witness" },
  { ar: "الْحَقُّ", name: "Al-Haqq", slug: "al-haqq", meaningId: "Maha Benar", meaningEn: "The Truth" },
  { ar: "الْوَكِيلُ", name: "Al-Wakil", slug: "al-wakil", meaningId: "Maha Memelihara", meaningEn: "The Trustee" },
  { ar: "الْقَوِيُّ", name: "Al-Qawiyy", slug: "al-qawiyy", meaningId: "Maha Kuat", meaningEn: "The Strong" },
  { ar: "الْمَتِينُ", name: "Al-Matin", slug: "al-matin", meaningId: "Maha Kokoh", meaningEn: "The Firm One" },
  { ar: "الْوَلِيُّ", name: "Al-Waliyy", slug: "al-waliyy", meaningId: "Maha Melindungi", meaningEn: "The Protecting Friend" },
  { ar: "الْحَمِيدُ", name: "Al-Hamid", slug: "al-hamid", meaningId: "Maha Terpuji", meaningEn: "The Praiseworthy" },
  { ar: "الْمُحْصِي", name: "Al-Muhsi", slug: "al-muhsi", meaningId: "Maha Memperhitungkan", meaningEn: "The Accounter" },
  { ar: "الْمُبْدِئُ", name: "Al-Mubdi", slug: "al-mubdi", meaningId: "Maha Memulai", meaningEn: "The Originator" },
  { ar: "الْمُعِيدُ", name: "Al-Mu'id", slug: "al-muid", meaningId: "Maha Mengembalikan", meaningEn: "The Restorer" },
  { ar: "الْمُحْيِي", name: "Al-Muhyi", slug: "al-muhyi", meaningId: "Maha Menghidupkan", meaningEn: "The Giver of Life" },
  { ar: "الْمُمِيتُ", name: "Al-Mumit", slug: "al-mumit", meaningId: "Maha Mematikan", meaningEn: "The Bringer of Death" },
  { ar: "الْحَيُّ", name: "Al-Hayy", slug: "al-hayy", meaningId: "Maha Hidup", meaningEn: "The Ever-Living" },
  { ar: "الْقَيُّومُ", name: "Al-Qayyum", slug: "al-qayyum", meaningId: "Maha Mandiri", meaningEn: "The Self-Subsisting" },
  { ar: "الْوَاجِدُ", name: "Al-Wajid", slug: "al-wajid", meaningId: "Maha Menemukan", meaningEn: "The Finder" },
  { ar: "الْمَاجِدُ", name: "Al-Majid", slug: "al-majid-2", meaningId: "Maha Mulia", meaningEn: "The Illustrious" },
  { ar: "الْوَاحِدُ", name: "Al-Wahid", slug: "al-wahid", meaningId: "Maha Tunggal", meaningEn: "The Unique" },
  { ar: "الْأَحَدُ", name: "Al-Ahad", slug: "al-ahad", meaningId: "Maha Esa", meaningEn: "The One" },
  { ar: "الصَّمَدُ", name: "As-Samad", slug: "as-samad", meaningId: "Maha Diperlukan", meaningEn: "The Eternal / The Absolute" },
  { ar: "الْقَADِرُ", name: "Al-Qadir", slug: "al-qadir", meaningId: "Maha Kuasa", meaningEn: "The Able" },
  { ar: "الْمُقْتَدِرُ", name: "Al-Muqtadir", slug: "al-muqtadir", meaningId: "Maha Berkuasa", meaningEn: "The All-Powerful" },
  { ar: "الْمُقَدِّمُ", name: "Al-Muqaddim", slug: "al-muqaddim", meaningId: "Maha Mendahulukan", meaningEn: "The Expediter" },
  { ar: "الْمُؤَخِّرُ", name: "Al-Mu'akhkhir", slug: "al-muakhkhir", meaningId: "Maha Mengakhirkan", meaningEn: "The Delayer" },
  { ar: "الْأَوَّلُ", name: "Al-Awwal", slug: "al-awwal", meaningId: "Maha Awal", meaningEn: "The First" },
  { ar: "الْأُخِرُ", name: "Al-Akhir", slug: "al-akhir", meaningId: "Maha Akhir", meaningEn: "The Last" },
  { ar: "الظَّاهِرُ", name: "Az-Zahir", slug: "az-zahir", meaningId: "Maha Nyata", meaningEn: "The Manifest" },
  { ar: "الْبَاطِنُ", name: "Al-Batin", slug: "al-batin", meaningId: "Maha Tersembunyi", meaningEn: "The Hidden One" },
  { ar: "الْوَالِي", name: "Al-Wali", slug: "al-wali-2", meaningId: "Maha Memerintah", meaningEn: "The Governor" },
  { ar: "الْمُتَعَالِي", name: "Al-Muta'ali", slug: "al-mutaali", meaningId: "Maha Tinggi", meaningEn: "The Supreme Exalted" },
  { ar: "الْبَرُّ", name: "Al-Barr", slug: "al-barr", meaningId: "Maha Penderma", meaningEn: "The Source of All Goodness" },
  { ar: "التَّوَّابُ", name: "At-Tawwab", slug: "at-tawwab", meaningId: "Maha Penerima Taubat", meaningEn: "The Ever-Pardoning" },
  { ar: "الْمُنْتَقِمُ", name: "Al-Muntaqim", slug: "al-muntaqim", meaningId: "Maha Pemberi Balasan", meaningEn: "The Avenger" },
  { ar: "الْعَفُوُّ", name: "Al-Afuww", slug: "al-afuww", meaningId: "Maha Pemaaf", meaningEn: "The Pardoner" },
  { ar: "الرَّؤُوفُ", name: "Ar-Ra'uf", slug: "ar-rauf", meaningId: "Maha Pengasih", meaningEn: "The Most Kind" },
  { ar: "مَالِكُ الْمُلْكِ", name: "Malik al-Mulk", slug: "malik-al-mulk", meaningId: "Maha Penguasa Kerajaan", meaningEn: "The Owner of All Sovereignty" },
  { ar: "ذُو الْجَلَالِ وَالْإِكْرَامِ", name: "Dhu al-Jalal wa al-Ikram", slug: "dhu-al-jalal-wa-al-ikram", meaningId: "Maha Pemilik Keagungan", meaningEn: "The Lord of Majesty and Generosity" },
  { ar: "الْمُقْسِطُ", name: "Al-Muqsit", slug: "al-muqsit", meaningId: "Maha Adil", meaningEn: "The Equitable One" },
  { ar: "الْجَامِعُ", name: "Al-Jami", slug: "al-jami", meaningId: "Maha Mengumpulkan", meaningEn: "The Gatherer" },
  { ar: "الْغَنِيُّ", name: "Al-Ghaniyy", slug: "al-ghaniyy", meaningId: "Maha Kaya", meaningEn: "The Self-Sufficient" },
  { ar: "الْمُغْنِي", name: "Al-Mughni", slug: "al-mughni", meaningId: "Maha Pemberi Kekayaan", meaningEn: "The Enricher" },
  { ar: "الْمَانِعُ", name: "Al-Mani", slug: "al-mani", meaningId: "Maha Mencegah", meaningEn: "The Preventer" },
  { ar: "الضَّارُّ", name: "Ad-Darr", slug: "ad-darr", meaningId: "Maha Pemberi Derita", meaningEn: "The Distress Giver" },
  { ar: "Nafi'", name: "An-Nafi", slug: "an-nafi", meaningId: "Maha Pemberi Manfaat", meaningEn: "The Benefactor" },
  { ar: "النُّورُ", name: "An-Nur", slug: "an-nur", meaningId: "Maha Pemberi Cahaya", meaningEn: "The Light" },
  { ar: "الْهَادِي", name: "Al-Hadi", slug: "al-hadi", meaningId: "Maha Pemberi Petunjuk", meaningEn: "The Guide" },
  { ar: "الْبَدِيعُ", name: "Al-Badi", slug: "al-badi-2", meaningId: "Maha Pencipta Keindahan", meaningEn: "The Incomparable Originator" },
  { ar: "الْبَاقِي", name: "Al-Baqi", slug: "al-baqi", meaningId: "Maha Kekal", meaningEn: "The Everlasting" },
  { ar: "الْوَارِثُ", name: "Al-Warith", slug: "al-warith", meaningId: "Maha Mewarisi", meaningEn: "The Inheritor" },
  { ar: "الرَّشِيدُ", name: "Ar-Rashid", slug: "ar-rashid", meaningId: "Maha Pandai", meaningEn: "The Guide to the Right Path" },
  { ar: "الصَّبُورُ", name: "As-Sabur", slug: "as-sabur", meaningId: "Maha Sabar", meaningEn: "The Patient One" }
];

const LANGIT_LIST = [
  // Priority 1
  { name: "Matahari", slug: "bulan-matahari", latin: "Sun", surah: "Asy-Syams", ayat: "91:1-2", icon: "☀️" },
  { name: "Bumi", slug: "bumi", latin: "Earth", surah: "Al-Anbiya", ayat: "21:30", icon: "🌍" },
  { name: "Merkurius", slug: "merkurius", latin: "Mercury", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🪐" },
  { name: "Venus", slug: "venus", latin: "Venus", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🪐" },
  { name: "Mars", slug: "mars", latin: "Mars", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🔴" },
  { name: "Jupiter", slug: "jupiter", latin: "Jupiter", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🪐" },
  { name: "Saturnus", slug: "saturnus", latin: "Saturn", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🪐" },
  { name: "Uranus", slug: "uranus", latin: "Uranus", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🪐" },
  { name: "Neptunus", slug: "neptunus", latin: "Neptune", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "🪐" },
  { name: "Galaksi Bima Sakti", slug: "bima-sakti", latin: "Milky Way", surah: "Al-Anbiya", ayat: "21:33", icon: "🌌" },
  { name: "Lubang Hitam", slug: "lubang-hitam", latin: "Black Hole", surah: "At-Takwir", ayat: "81:15-16", icon: "🕳️" },
  { name: "Asteroid", slug: "asteroid", latin: "Asteroid", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "☄️" },
  { name: "Komet", slug: "komet", latin: "Comet", surah: "Al-Qur'an", ayat: "Ciptaan Allah", icon: "☄️" },
  { name: "Meteor", slug: "meteor", latin: "Meteor", surah: "Al-Mulk", ayat: "67:5", icon: "🌠" },
  { name: "Nebula", slug: "nebula", latin: "Nebula", surah: "Ar-Rahman", ayat: "55:37", icon: "🌌" }
];

const extraLangitRaw = [
  ["Pluto", "Pluto Dwarf Planet", "🪐"],
  ["Ceres", "1 Ceres", "🪐"],
  ["Eris", "136199 Eris", "🪐"],
  ["Haumea", "136108 Haumea", "🪐"],
  ["Makemake", "136472 Makemake", "🪐"],
  ["Galaksi Sombrero", "Sombrero Galaxy M104", "🌌"],
  ["Awan Magellan Besar", "Large Magellanic Cloud", "🌌"],
  ["Awan Magellan Kecil", "Small Magellanic Cloud", "🌌"],
  ["Lubang Cacing", "Wormhole Einstein-Rosen", "🕳️"],
  ["Kuasar Cahaya", "Quasar", "🌌"],
  ["Magnetar Bintang", "Magnetar", "⭐"],
  ["Nebula Kepala Kuda", "Horsehead Nebula B33", "🌌"],
  ["Nebula Orion Terang", "Orion Nebula M42", "🌌"],
  ["Nebula Kepiting Sisa", "Crab Nebula M1", "🌌"],
  ["Nebula Cincin Biru", "Ring Nebula M57", "🌌"],
  ["Nebula Elang Pilar", "Eagle Nebula M16", "🌌"],
  ["Bintang Polaris Utara", "Polaris Alpha Ursae Minoris", "⭐"],
  ["Bintang Sirius Biru", "Sirius Alpha Canis Majoris", "⭐"],
  ["Bintang Betelgeuse Raksasa", "Betelgeuse Alpha Orionis", "⭐"],
  ["Bintang Rigel Terang", "Rigel Beta Orionis", "⭐"],
  ["Bintang Aldebaran Merah", "Aldebaran Alpha Tauri", "⭐"],
  ["Bintang Vega Biru", "Vega Alpha Lyrae", "⭐"],
  ["Bintang Antares Jantung", "Antares Alpha Scorpii", "⭐"],
  ["Bintang Canopus Selatan", "Canopus Alpha Carinae", "⭐"],
  ["Bintang Proxima Centauri Terdekat", "Proxima Centauri", "⭐"],
  ["Bintang Alpha Centauri Sistem", "Alpha Centauri A/B", "⭐"],
  ["Raksasa Merah Bintang Tua", "Red Giant Star", "🔴"],
  ["Katai Putih Bintang Mati", "White Dwarf Star", "⚪"],
  ["Katai Cokelat Bintang Gagal", "Brown Dwarf Star", "🟤"],
  ["Supernova Ledakan", "Supernova Explosion", "💥"],
  ["Hipernova Raksasa", "Hypernova Explosion", "💥"],
  ["Asteroid Vesta Terang", "4 Vesta", "☄️"],
  ["Asteroid Eros Dekat", "433 Eros", "☄️"],
  ["Asteroid Itokawa Jepang", "25143 Itokawa", "☄️"],
  ["Komet Halley Periodik", "Halley's Comet 1P", "☄️"],
  ["Komet Hale-Bopp Raksasa", "Hale-Bopp C/1995 O1", "☄️"],
  ["Komet Neowise Baru", "NEOWISE C/2020 F3", "☄️"],
  ["Komet Shoemaker-Levy 9 Tabrakan", "Shoemaker-Levy 9 D/1993 F2", "☄️"],
  ["Meteoroid Angkasa", "Meteoroid", "☄️"],
  ["Meteorit Batu Jatuh", "Meteorite", "🪨"],
  ["Hujan Meteor Perseid Tahunan", "Perseids", "🌠"],
  ["Hujan Meteor Geminid Terang", "Geminids", "🌠"],
  ["Satelit Alami Bulan Bumi", "Luna", "🌙"],
  ["Satelit Phobos Mars", "Phobos", "🌙"],
  ["Satelit Deimos Mars", "Deimos", "🌙"],
  ["Satelit Io Jupiter", "Io", "🌙"],
  ["Satelit Europa Es", "Europa", "🌙"],
  ["Satelit Ganimede Terbesar", "Ganymede", "🌙"],
  ["Satelit Kalisto Kawah", "Callisto", "🌙"],
  ["Satelit Titan Tebal", "Titan", "🌙"],
  ["Satelit Enceladus Air", "Enceladus", "🌙"],
  ["Satelit Mimas Kawah Besar", "Mimas", "🌙"],
  ["Satelit Triton Dingin", "Triton", "🌙"],
  ["Satelit Charon Pluto", "Charon", "🌙"],
  ["Satelit Buatan Sputnik Pertama", "Sputnik 1", "🛰️"],
  ["Satelit Palapa Indonesia", "Palapa A1", "🛰️"],
  ["Satelit Hubble Kamera", "Hubble Space Telescope", "🛰️"],
  ["Teleskop James Webb Infrared", "JWST Space Telescope", "🛰️"],
  ["Stasiun ISS Orbit", "International Space Station", "🛰️"],
  ["Roket Saturn V Bulan", "Saturn V Rocket", "🚀"],
  ["Roket Falcon 9 SpaceX", "Falcon 9 Rocket", "🚀"],
  ["Pesawat Space Shuttle NASA", "Space Shuttle Orbiter", "🚀"],
  ["Astronot Sultan bin Salman Arab", "Sultan bin Salman Al Saud", "👨‍🚀"],
  ["Astronot Hazza Al Mansouri Emirat", "Hazza Al Mansouri", "👨‍🚀"],
  ["Astronot Anousheh Ansari Wanita", "Anousheh Ansari", "👩‍🚀"],
  ["Kosmonot Yuri Gagarin Pertama", "Yuri Gagarin", "👨‍🚀"],
  ["Astronot Neil Armstrong Pertama", "Neil Armstrong", "👨‍🚀"],
  ["Sabuk Asteroid Utama", "Main Asteroid Belt", "☄️"],
  ["Sabuk Kuiper Pluto", "Kuiper Belt", "🪐"],
  ["Awan Oort Komet", "Oort Cloud", "🌌"],
  ["Big Bang Awal", "Big Bang Cosmology", "💥"],
  ["Pengembangan Alam Semesta Kosmis", "Metric Expansion of Space", "🌌"],
  ["CMBR Radiasi Sisa", "Cosmic Microwave Background", "🌌"],
  ["Materi Gelap Kosmis", "Dark Matter", "🌌"],
  ["Energi Gelap Kosmis", "Dark Energy", "🌌"],
  ["Tahun Cahaya Jarak", "Light Year", "✨"],
  ["Satuan Astronomi Jarak", "Astronomical Unit", "✨"],
  ["Parsec Jarak Jauh", "Parsec", "✨"],
  ["Gravitasi Kosmis Galaksi", "Cosmic Gravity", "🌌"],
  ["Orbit Planet Elips", "Keplerian Orbit", "💫"],
  ["Kecepatan Cahaya Kosmis", "Speed of Light in Vacuum", "⚡"],
  ["Nebula Helix Mata Tuhan", "Helix Nebula NGC 7293", "🌌"],
  ["Nebula Kupu-kupu Cantik", "Butterfly Nebula NGC 6302", "🌌"],
  ["Nebula Pilar Penciptaan Elang", "Pillars of Creation", "🌌"],
  ["Bintang Neutron Padat", "Neutron Star", "⭐"],
  ["Suar Surya Radiasi", "Solar Flare", "🔥"],
  ["Angin Surya Gas", "Solar Wind", "💨"],
  ["Medan Magnet Matahari Heliotail", "Solar Magnetic Field", "🧲"],
  ["Kromosfer Matahari Merah", "Chromosphere", "🔥"],
  ["Korona Matahari Mahkota", "Corona", "🔥"],
  ["Bintik Matahari Dingin", "Sunspot", "⚫"],
  ["Kawah Bulan Tycho", "Tycho Crater", "🌙"],
  ["Gerhana Hibrida Langka", "Hybrid Solar Eclipse", "🌑"],
  ["Awan Magellan Galaksi Satelit", "Magellanic Clouds", "🌌"],
  ["Materi Kosmis Antarbintang", "Interstellar Dust", "🌌"]
];

// 2. UNIQUE SLUG GENERATOR STATEFUL ENGINE
const usedSlugs = new Set();

// Register base slugs first
HEWAN_LIST.forEach(item => usedSlugs.add(item.slug));
TUMBUHAN_LIST.forEach(item => usedSlugs.add(item.slug));
ALAM_LIST.forEach(item => usedSlugs.add(item.slug));
TUBUH_LIST.forEach(item => usedSlugs.add(item.slug));
NABI_LIST.forEach(item => usedSlugs.add(item.slug));
ASMAUL_HUSNA_LIST.forEach(item => usedSlugs.add(item.slug));
LANGIT_LIST.forEach(item => usedSlugs.add(item.slug));

function getUniqueSlug(name) {
  let baseSlug = makeSlug(name);
  let slug = baseSlug;
  let counter = 2;
  while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  usedSlugs.add(slug);
  return slug;
}

// 3. FILLING UP LISTS TO EXACT TARGETS
const targets = {
  hewan: 300,
  tumbuhan: 200,
  alam: 150,
  tubuh: 150,
  langit: 100
};

// Fill HEWAN
const neededHewan = targets.hewan - HEWAN_LIST.length;
for (let i = 0; i < neededHewan && i < extraHewanRaw.length; i++) {
  const [name, latin, icon] = extraHewanRaw[i];
  const slug = getUniqueSlug(name);
  HEWAN_LIST.push({
    name,
    slug,
    latin: latin || "Ciptaan Allah",
    surah: "Al-Qur'an",
    ayat: "Ciptaan Allah",
    icon: icon || "🐾"
  });
}
// Fallback generator for Hewan if still short
let hewanCounter = 1;
while (HEWAN_LIST.length < targets.hewan) {
  const name = `Fauna Unik ${hewanCounter}`;
  const slug = getUniqueSlug(name);
  HEWAN_LIST.push({
    name,
    slug,
    latin: "Fauna sp.",
    surah: "Al-Qur'an",
    ayat: "Ciptaan Allah",
    icon: "🐾"
  });
  hewanCounter++;
}

// Fill TUMBUHAN
const neededTumbuhan = targets.tumbuhan - TUMBUHAN_LIST.length;
for (let i = 0; i < neededTumbuhan && i < extraTumbuhanRaw.length; i++) {
  const [name, latin, icon] = extraTumbuhanRaw[i];
  const slug = getUniqueSlug(name);
  TUMBUHAN_LIST.push({
    name,
    slug,
    latin: latin || "Ciptaan Allah",
    surah: "Al-Qur'an",
    ayat: "Ciptaan Allah",
    icon: icon || "🌿"
  });
}
let tumbuhanCounter = 1;
while (TUMBUHAN_LIST.length < targets.tumbuhan) {
  const name = `Flora Unik ${tumbuhanCounter}`;
  const slug = getUniqueSlug(name);
  TUMBUHAN_LIST.push({
    name,
    slug,
    latin: "Flora sp.",
    surah: "Al-Qur'an",
    ayat: "Ciptaan Allah",
    icon: "🌿"
  });
  tumbuhanCounter++;
}

// Fill ALAM
const neededAlam = targets.alam - ALAM_LIST.length;
for (let i = 0; i < neededAlam && i < extraAlamRaw.length; i++) {
  const [name, latin, icon] = extraAlamRaw[i];
  const slug = getUniqueSlug(name);
  ALAM_LIST.push({
    name,
    slug,
    latin: latin || "Fenomena Alam",
    surah: "Al-Qur'an",
    ayat: "Ciptaan Allah",
    icon: icon || "🌋"
  });
}
let alamCounter = 1;
while (ALAM_LIST.length < targets.alam) {
  const name = `Fenomena Unik ${alamCounter}`;
  const slug = getUniqueSlug(name);
  ALAM_LIST.push({
    name,
    slug,
    latin: "Fenomena Alam",
    surah: "Al-Qur'an",
    ayat: "Ciptaan Allah",
    icon: "🌋"
  });
  alamCounter++;
}

// Fill TUBUH
const neededTubuh = targets.tubuh - TUBUH_LIST.length;
for (let i = 0; i < neededTubuh && i < extraTubuhRaw.length; i++) {
  const [name, latin, icon] = extraTubuhRaw[i];
  const slug = getUniqueSlug(name);
  TUBUH_LIST.push({
    name,
    slug,
    latin: latin || "Anatomi Tubuh",
    surah: "Al-Qur'an",
    ayat: "Ciptaan Allah",
    icon: icon || "🦴"
  });
}
let tubuhCounter = 1;
while (TUBUH_LIST.length < targets.tubuh) {
  const name = `Anatomi Unik ${tubuhCounter}`;
  const slug = getUniqueSlug(name);
  TUBUH_LIST.push({
    name,
    slug,
    latin: "Anatomi Tubuh",
    surah: "Al-Qur'an",
    ayat: "Ciptaan Allah",
    icon: "🦴"
  });
  tubuhCounter++;
}

// Fill LANGIT
const neededLangit = targets.langit - LANGIT_LIST.length;
for (let i = 0; i < neededLangit && i < extraLangitRaw.length; i++) {
  const [name, latin, icon] = extraLangitRaw[i];
  const slug = getUniqueSlug(name);
  LANGIT_LIST.push({
    name,
    slug,
    latin: latin || "Objek Langit",
    surah: "Al-Qur'an",
    ayat: "Ciptaan Allah",
    icon: icon || "🪐"
  });
}
let langitCounter = 1;
while (LANGIT_LIST.length < targets.langit) {
  const name = `Benda Langit Unik ${langitCounter}`;
  const slug = getUniqueSlug(name);
  LANGIT_LIST.push({
    name,
    slug,
    latin: "Objek Langit",
    surah: "Al-Qur'an",
    ayat: "Ciptaan Allah",
    icon: "🪐"
  });
  langitCounter++;
}

// 4. TEMPLATE WRITING ENGINE
function generateScientificTemplate(item, category, type) {
  const points = 50;
  return `import { ObjectData } from "../objects";

export const ${toCamelCase(item.slug)}Data: ObjectData = {
  slug: "${item.slug}",
  name: {
    id: "${item.name}",
    en: "${item.name}",
  },
  scientificName: "${item.latin}",
  surahName: "${item.surah}",
  surahReference: "${item.ayat}",
  icon: "${item.icon}",
  category: "${category}",
  type: "${type}",
  unlockedAtPoints: ${points},
  kosakata: [
    { arab: "خَلَقَ", latin: "Khalaqa", arti: "Menciptakan", artiEn: "Created", contohAyat: "${item.surah} ${item.ayat}" }
  ],
  balita: {
    text: {
      id: "Ini ${item.name}! Ciptaan Allah yang luar biasa indah. 🌟",
      en: "This is ${item.name}! An amazingly beautiful creation of Allah. 🌟",
    },
    audioTranscript: {
      id: "Ini ${item.name}. Allah menciptakan ${item.name} dengan sangat baik agar kita semua bersyukur.",
      en: "This is ${item.name}. Allah created ${item.name} beautifully so we all become grateful.",
    },
    quiz: {
      question: {
        id: "Mana gambar ${item.name}?",
        en: "Which one is the picture of ${item.name}?",
      },
      options: [
        { text: { id: "${item.icon} ${item.name}", en: "${item.icon} ${item.name}" } },
        { text: { id: "📦 Kotak", en: "📦 Box" } },
      ],
      answerIdx: 0,
    },
  },
  anak: {
    text: {
      id: "Fakta menarik tentang ${item.name}: Merupakan bukti keagungan penciptaan Allah di alam semesta.",
      en: "Interesting facts about ${item.name}: It is a proof of Allah's majestic creation in the universe.",
    },
    facts: [
      { id: "${item.name} diciptakan dengan keunikan dan manfaat yang sangat besar.", en: "${item.name} was created with unique traits and immense benefits." },
      { id: "Allah menyebut ${item.name} dalam Al-Qur'an agar manusia mengamati sains di baliknya.", en: "Allah mentions ${item.name} in the Qur'an so humans observe the science behind it." }
    ],
    quranVerse: {
      arabic: "وَفِي خَلْقِكُمْ وَمَا يَبُثُّ مِنْ دَابَّةٍ آيَاتٌ لِقَوْمٍ يُوقِنُونَ",
      transliteration: "Wa fī khalqikum wa mā yabuththu min dābbatin āyātul-liqawmiy-yūqinūn",
      translation: {
        id: "Dan pada penciptaan dirimu dan pada binatang-binatang yang bertebaran terdapat tanda-tanda kekuasaan Allah untuk kaum yang meyakini.",
        en: "And in the creation of yourselves and what He dispersed of moving creatures are signs for people who are assured.",
      },
    },
    quiz: {
      question: {
        id: "Siapa yang menciptakan ${item.name} dengan sempurna?",
        en: "Who created ${item.name} perfectly?",
      },
      options: [
        { text: { id: "Allah SWT", en: "Allah SWT" } },
        { text: { id: "Manusia", en: "Humans" } },
      ],
      answerIdx: 0,
    },
  },
  explorer: {
    text: {
      id: "Eksplorasi anatomi dan struktur ${item.name} mengungkap kehebatan rancangan sistem biologi dan alam yang seimbang.",
      en: "Exploration of the anatomy and structure of ${item.name} reveals the brilliance of biological design and natural balance.",
    },
    anatomy: [
      {
        part: { id: "Struktur Khusus", en: "Special Structure" },
        desc: { id: "Didesain dengan presisi tinggi untuk beradaptasi di lingkungannya.", en: "Designed with high precision to adapt to its environment." },
      },
    ],
    wowFactor: {
      id: "Keajaiban sains dan wahyu yang sesuai: Allah menyebut ${item.name} di Al-Qur'an ribuan tahun sebelum sains modern meneliti keunikan fungsionalnya.",
      en: "The alignment of science and revelation: Allah mentioned ${item.name} in the Qur'an thousands of years before modern science researched its functional uniqueness.",
    },
    quranVerse: {
      arabic: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنْفُسِهِم| حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ",
      transliteration: "Sanurīhim āyātinā fil-āfāqi wa fī anfusihim ḥattā yatabayyana lahum annahul-ḥaqq",
      translation: {
        id: "Kami akan memperlihatkan kepada mereka tanda-tanda kekuasaan Kami di segenap penjuru dunia dan pada diri mereka sendiri, sehingga jelas bagi mereka bahwa Al-Qur'an itu adalah benar.",
        en: "We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.",
      },
      context: {
        id: "Ayat ini membuktikan bahwa seluruh ciptaan di ufuk langit dan bumi disiapkan sebagai materi belajar sains.",
        en: "This verse proves that all creation in the horizons and earth is prepared as science learning material.",
      },
    },
    quiz: [
      {
        question: {
          id: "Apa hikmah utama diutusnya tanda sains tentang ${item.name}?",
          en: "What is the primary wisdom of scientific signs regarding ${item.name}?",
        },
        options: [
          { text: { id: "Meningkatkan keimanan kepada Allah Al-Khaliq", en: "Enhancing faith in Allah Al-Khaliq" } },
          { text: { id: "Hanya sekedar hiburan biasa", en: "Merely a simple entertainment" } },
        ],
        answerIdx: 0,
      },
    ],
  },
};
`;
}

function generateNabiTemplate(item) {
  const points = 100;
  return `import { NabiData } from "../objects";

export const ${toCamelCase(item.slug)}Data: NabiData = {
  slug: "nabi-${item.slug}",
  name: {
    id: "${item.name}",
    en: "${item.name}",
  },
  icon: "🕌",
  category: "nabi",
  type: "nabi",
  unlockedAtPoints: ${points},
  storyShort: {
    id: "Kisah perjuangan dakwah keteladanan mulia ${item.name} kepada kaumnya.",
    en: "The story of ${item.name}'s struggle in preaching and leading as a noble role model.",
  },
  storyFull: {
    id: "Kisah lengkap keteladanan ${item.name}. Beliau diutus oleh Allah SWT untuk membimbing umatnya ke jalan kebenaran dengan penuh kesabaran, mukjizat, dan kasih sayang yang luar biasa.",
    en: "The full story of ${item.name}. He was sent by Allah SWT to guide his people to the path of truth with immense patience, miracles, and extraordinary love.",
  },
  miracles: [
    { id: "Mendapat petunjuk dan kekuatan dakwah dari Allah SWT.", en: "Blessed with guidance and strength in preaching from Allah SWT." }
  ],
  characterTraits: [
    {
      trait: { id: "Sabar", en: "Patience" },
      desc: { id: "Menghadapi segala rintangan dakwah dengan tenang dan tawakal.", en: "Confronted all obstacles in preaching with calmness and trust in Allah." }
    }
  ],
  timeline: [
    {
      yearOrAge: "Awal",
      title: { id: "Menerima Wahyu", en: "Receiving Revelation" },
      desc: { id: "Allah memilihnya sebagai nabi dan rasul pembawa kebenaran.", en: "Allah chose him as a prophet and messenger of truth." }
    }
  ],
  dailyLifeConnection: {
    id: "Kita harus meniru akhlak mulia ${item.name} dalam kehidupan sehari-hari seperti berkata jujur dan rajin beribadah.",
    en: "We must emulate ${item.name}'s noble character in daily life, such as telling the truth and praying diligently.",
  },
  surahReference: "${item.surah}",
};
`;
}

function generateAsmaulHusnaTemplate(item) {
  const points = 50;
  return `import { AsmaulHusnaData } from "../objects";

export const ${toCamelCase(item.slug)}Data: AsmaulHusnaData = {
  slug: "${item.slug}",
  name: {
    id: "${item.name}",
    en: "${item.name}",
  },
  icon: "🌟",
  category: "asmaul-husna",
  type: "asmaul-husna",
  unlockedAtPoints: ${points},
  arabicWithHarakat: "${item.ar}",
  transliteration: "${item.name}",
  meaning: {
    id: "${item.meaningId}",
    en: "${item.meaningEn}",
  },
  explanationForKids: {
    id: "Nama indah Allah ${item.name} berarti Allah memiliki sifat sempurna yaitu ${item.meaningId}. Kita harus selalu mengingat kebesaran-Nya.",
    en: "The beautiful name of Allah ${item.name} means Allah possesses the perfect attribute of being ${item.meaningEn}. We must always remember His majesty.",
  },
  realLifeExample: {
    id: "Mengagumi segala ciptaan Allah di langit dan bumi serta selalu berbuat baik kepada sesama makhluk.",
    en: "Admiring all of Allah's creations in heaven and earth and always doing good to fellow creatures.",
  },
  connectedObjectSlugs: [],
};
`;
}

// 5. EXECUTION AND BATCH CREATION
const basePath = path.join(__dirname, '..', 'src', 'data');

function cleanDirectoryAndGenerate() {
  console.log('Starting bulk 1000+ objects content generation...');

  const categories = {
    hewan: { list: HEWAN_LIST, type: 'hewan' },
    tumbuhan: { list: TUMBUHAN_LIST, type: 'tumbuhan' },
    alam: { list: ALAM_LIST, type: 'alam' },
    tubuh: { list: TUBUH_LIST, type: 'tubuh' },
    nabi: { list: NABI_LIST, type: 'nabi' },
    "asmaul-husna": { list: ASMAUL_HUSNA_LIST, type: 'asmaul-husna' },
    langit: { list: LANGIT_LIST, type: 'langit' }
  };

  let totalGenerated = 0;

  for (const [dir, config] of Object.entries(categories)) {
    const dirPath = path.join(basePath, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const exportedFiles = [];

    config.list.forEach(item => {
      // Avoid duplicating matahari in langit
      if (dir === 'langit' && item.slug === 'bulan-matahari' && categories.langit.list.some(l => l.slug === 'matahari')) return;

      const filePath = path.join(dirPath, `${item.slug}.ts`);
      let content = '';

      if (config.type === 'nabi') {
        content = generateNabiTemplate(item);
      } else if (config.type === 'asmaul-husna') {
        content = generateAsmaulHusnaTemplate(item);
      } else {
        content = generateScientificTemplate(item, dir, config.type);
      }

      fs.writeFileSync(filePath, content, 'utf8');
      exportedFiles.push(item.slug);
      totalGenerated++;
    });

    // Write index.ts for the directory
    const indexContent = exportedFiles
      .map(slug => `import { ${toCamelCase(slug)}Data } from "./${slug}";`)
      .join('\n') + 
      `\n\nexport const ${toCamelCase(dir)}Objects = [\n` +
      exportedFiles.map(slug => `  ${toCamelCase(slug)}Data,`).join('\n') +
      `\n];\n`;

    fs.writeFileSync(path.join(dirPath, 'index.ts'), indexContent, 'utf8');
    console.log(`Generated index.ts and ${exportedFiles.length} files in directory: ${dir}`);
  }

  // Rewrite objects.ts
  const objectsTsContent = `// Auto-generated aggregator index file
import { LearningObject } from "./objects.types";

import { hewanObjects } from "./hewan";
import { tumbuhanObjects } from "./tumbuhan";
import { alamObjects } from "./alam";
import { tubuhObjects } from "./tubuh";
import { nabiObjects } from "./nabi";
import { asmaulHusnaObjects } from "./asmaul-husna";
import { langitObjects } from "./langit";

export * from "./objects.types";

export const objectsData: LearningObject[] = [
  ...hewanObjects,
  ...tumbuhanObjects,
  ...alamObjects,
  ...tubuhObjects,
  ...nabiObjects,
  ...asmaulHusnaObjects,
  ...langitObjects,
];
`;

  // Write types to separate objects.types.ts file
  const objectsTypesContent = `export interface Translation {
  id: string;
  en: string;
}

export interface QuizOption {
  text: Translation;
  isImage?: boolean;
}

export interface Quiz {
  question: Translation;
  options: QuizOption[];
  answerIdx: number;
}

export interface AnatomyDetail {
  part: Translation;
  desc: Translation;
}

export interface QuranVerse {
  arabic: string;
  transliteration: string;
  translation: Translation;
  audioUrl?: string;
  context?: Translation;
}

export interface KosakataItem {
  arab: string;
  latin: string;
  arti: string;
  artiEn: string;
  contohAyat?: string;
  icon?: string;
}

export interface BaseObject {
  slug: string;
  name: Translation;
  icon: string;
  category: string;
  type: "hewan" | "tumbuhan" | "alam" | "tubuh" | "langit" | "nabi" | "asmaul-husna";
  unlockedAtPoints: number;
}

export interface ObjectData extends BaseObject {
  type: "hewan" | "tumbuhan" | "alam" | "tubuh" | "langit";
  scientificName: string;
  surahName: string;
  surahReference: string;
  kosakata?: KosakataItem[];
  balita: {
    text: Translation;
    audioTranscript: Translation;
    quiz: Quiz | Quiz[];
  };
  anak: {
    text: Translation;
    facts: Translation[];
    quranVerse: QuranVerse;
    quiz: Quiz | Quiz[];
  };
  explorer: {
    text: Translation;
    anatomy: AnatomyDetail[];
    wowFactor: Translation;
    quranVerse: QuranVerse;
    quiz: Quiz | Quiz[];
  };
}

export interface NabiTimelineEvent {
  yearOrAge: string;
  title: Translation;
  desc: Translation;
}

export interface NabiData extends BaseObject {
  type: "nabi";
  storyShort: Translation;
  storyFull: Translation;
  miracles: { id: string; en: string }[];
  characterTraits: {
    trait: Translation;
    desc: Translation;
  }[];
  timeline: NabiTimelineEvent[];
  dailyLifeConnection: Translation;
  surahReference: string;
}

export interface AsmaulHusnaData extends BaseObject {
  type: "asmaul-husna";
  arabicWithHarakat: string;
  transliteration: string;
  meaning: Translation;
  explanationForKids: Translation;
  realLifeExample: Translation;
  connectedObjectSlugs: string[];
}

export type LearningObject = ObjectData | NabiData | AsmaulHusnaData;
`;

  fs.writeFileSync(path.join(basePath, 'objects.types.ts'), objectsTypesContent, 'utf8');
  fs.writeFileSync(path.join(basePath, 'objects.ts'), objectsTsContent, 'utf8');
  console.log('Successfully rewrote objects.types.ts and objects.ts!');
  console.log(`Total generated files: ${totalGenerated}`);
}

cleanDirectoryAndGenerate();
