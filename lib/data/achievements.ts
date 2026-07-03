export type Achievement = {
  id: string;
  title: string;
  category:
    | "Akademik"
    | "Non Akademik"
    | "Olahraga"
    | "Keagamaan"
    | "Sains"
    | "Robotik"
    | "Olimpiade"
    | "Pramuka"
    | "PMR";
  level: "Kota" | "Provinsi" | "Nasional" | "Internasional";
  year: number;
  description: string;
  image: string;
};

export const achievements: Achievement[] = [
  {
    id: "a-01",
    title: "Medali Perak OSN Matematika",
    category: "Olimpiade",
    level: "Nasional",
    year: 2023,
    description:
      "Ananda Rafi Pratama meraih Medali Perak pada Olimpiade Sains Nasional bidang Matematika.",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
  },
  {
    id: "a-02",
    title: "Juara 2 World Robot Olympiad",
    category: "Robotik",
    level: "Internasional",
    year: 2023,
    description:
      "Tim Robotik MTsN 1 Probolinggo menembus panggung internasional WRO di kategori RoboMission.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    id: "a-03",
    title: "Juara Umum MTQ Pelajar",
    category: "Keagamaan",
    level: "Provinsi",
    year: 2023,
    description:
      "Tim Tahfidz dan Tilawah meraih Juara Umum pada MTQ Pelajar tingkat Provinsi Jawa Timur.",
    image:
      "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&q=80",
  },
  {
    id: "a-04",
    title: "Juara 1 POPDA Futsal",
    category: "Olahraga",
    level: "Provinsi",
    year: 2023,
    description:
      "Tim Futsal putra menjuarai Pekan Olahraga Pelajar Daerah tingkat Provinsi.",
    image:
      "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=800&q=80",
  },
  {
    id: "a-05",
    title: "Juara 1 English Debate Championship",
    category: "Akademik",
    level: "Provinsi",
    year: 2023,
    description:
      "Tim debat bahasa Inggris memenangkan kompetisi debat antar madrasah se-Jawa Timur.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    id: "a-06",
    title: "Juara 1 Hackathon Pelajar",
    category: "Sains",
    level: "Nasional",
    year: 2023,
    description:
      "Coding Club membangun aplikasi solusi lingkungan dan meraih juara pertama nasional.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    id: "a-07",
    title: "Regu Berprestasi Jambore Nasional",
    category: "Pramuka",
    level: "Nasional",
    year: 2022,
    description:
      "Regu Pramuka penggalang terpilih sebagai regu berprestasi pada Jambore Nasional.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
  },
  {
    id: "a-08",
    title: "Juara 2 Kompetisi PMR Wira",
    category: "PMR",
    level: "Provinsi",
    year: 2022,
    description:
      "Unit PMR menorehkan prestasi pada lomba pertolongan pertama tingkat provinsi.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
];

export const achievementCategories = [
  "Semua",
  "Akademik",
  "Non Akademik",
  "Olahraga",
  "Keagamaan",
  "Sains",
  "Robotik",
  "Olimpiade",
  "Pramuka",
  "PMR",
] as const;
