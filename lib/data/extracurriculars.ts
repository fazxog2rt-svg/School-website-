export type Extracurricular = {
  id: string;
  name: string;
  category: "Keagamaan" | "Sains & Teknologi" | "Olahraga" | "Seni" | "Bela Diri" | "Kepanduan";
  coach: string;
  schedule: string;
  emoji: string;
  description: string;
  achievements: string[];
};

export const extracurriculars: Extracurricular[] = [
  {
    id: "e-01",
    name: "Tahfidz Al-Qur'an",
    category: "Keagamaan",
    coach: "Ustadz Imam Syafi'i, M.Ag.",
    schedule: "Senin & Rabu, 15.00 – 16.30",
    emoji: "📖",
    description:
      "Membina hafalan Al-Qur'an dengan metode mutqin serta pembinaan adab dan tajwid.",
    achievements: ["Juara Umum MTQ Pelajar Provinsi 2023"],
  },
  {
    id: "e-02",
    name: "Robotik & Coding",
    category: "Sains & Teknologi",
    coach: "Budi Santoso, S.Si.",
    schedule: "Selasa & Kamis, 15.00 – 17.00",
    emoji: "🤖",
    description:
      "Belajar merancang robot, pemrograman, dan berpikir komputasional untuk kompetisi nasional.",
    achievements: ["Juara 2 World Robot Olympiad 2023"],
  },
  {
    id: "e-03",
    name: "Futsal",
    category: "Olahraga",
    coach: "Agus Prasetyo, S.Pd.",
    schedule: "Rabu & Jumat, 15.30 – 17.00",
    emoji: "⚽",
    description:
      "Melatih teknik, strategi, dan sportivitas atlet muda untuk kompetisi antar sekolah.",
    achievements: ["Juara 1 POPDA Jatim 2023"],
  },
  {
    id: "e-04",
    name: "English Club",
    category: "Sains & Teknologi",
    coach: "Muhammad Rizky, S.Pd.",
    schedule: "Sabtu, 09.00 – 11.00",
    emoji: "🗣️",
    description:
      "Meningkatkan kemampuan public speaking, debat, dan komunikasi bahasa Inggris.",
    achievements: ["Juara 1 English Debate Championship 2023"],
  },
  {
    id: "e-05",
    name: "Pramuka",
    category: "Kepanduan",
    coach: "Kak Dewi & Kak Hendra",
    schedule: "Jumat, 14.00 – 16.00",
    emoji: "⛺",
    description:
      "Membangun karakter, kemandirian, dan jiwa kepemimpinan melalui kegiatan kepanduan.",
    achievements: ["Regu Berprestasi Jambore Nasional 2022"],
  },
  {
    id: "e-06",
    name: "PMR (Palang Merah Remaja)",
    category: "Kepanduan",
    coach: "Rahmawati, S.Pd.",
    schedule: "Kamis, 15.00 – 16.30",
    emoji: "⛑️",
    description:
      "Melatih keterampilan pertolongan pertama dan kepedulian sosial kemanusiaan.",
    achievements: ["Juara 2 Kompetisi PMR Wira Provinsi 2022"],
  },
  {
    id: "e-07",
    name: "Seni Hadrah & Banjari",
    category: "Seni",
    coach: "Yuni Kartika, S.Pd.",
    schedule: "Sabtu, 13.00 – 15.00",
    emoji: "🥁",
    description:
      "Mengembangkan bakat seni musik islami yang memadukan sholawat dan kreativitas.",
    achievements: ["Juara 1 Festival Banjari Kota 2023"],
  },
  {
    id: "e-08",
    name: "Pencak Silat",
    category: "Bela Diri",
    coach: "Pelatih Bersertifikat IPSI",
    schedule: "Selasa & Jumat, 15.30 – 17.00",
    emoji: "🥋",
    description:
      "Melestarikan seni bela diri tradisional sekaligus membentuk fisik dan mental tangguh.",
    achievements: ["Juara 3 Kejuaraan Silat Pelajar Provinsi 2023"],
  },
];

export const extracurricularCategories = [
  "Semua",
  "Keagamaan",
  "Sains & Teknologi",
  "Olahraga",
  "Seni",
  "Bela Diri",
  "Kepanduan",
] as const;
