export type Book = {
  id: string;
  title: string;
  author: string;
  category: "Agama" | "Sains" | "Fiksi" | "Sejarah" | "Bahasa" | "Referensi";
  rating: number;
  year: number;
  cover: string;
  available: boolean;
  synopsis: string;
};

export const books: Book[] = [
  {
    id: "b-01",
    title: "Sejarah Peradaban Islam",
    author: "Dr. Badri Yatim",
    category: "Sejarah",
    rating: 4.8,
    year: 2018,
    cover: "#065f46",
    available: true,
    synopsis:
      "Menelusuri perjalanan peradaban Islam dari masa Rasulullah hingga era modern.",
  },
  {
    id: "b-02",
    title: "Fisika untuk Madrasah",
    author: "Tim MGMP IPA",
    category: "Sains",
    rating: 4.5,
    year: 2021,
    cover: "#0369a1",
    available: true,
    synopsis: "Konsep fisika dasar yang aplikatif dan mudah dipahami siswa.",
  },
  {
    id: "b-03",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    category: "Fiksi",
    rating: 4.9,
    year: 2005,
    cover: "#b07726",
    available: false,
    synopsis:
      "Kisah inspiratif tentang perjuangan anak-anak meraih pendidikan.",
  },
  {
    id: "b-04",
    title: "Tafsir Al-Qur'an Juz Amma",
    author: "Prof. Quraish Shihab",
    category: "Agama",
    rating: 4.9,
    year: 2019,
    cover: "#047857",
    available: true,
    synopsis: "Tafsir kontekstual Juz Amma dengan bahasa yang membumi.",
  },
  {
    id: "b-05",
    title: "English Grammar in Use",
    author: "Raymond Murphy",
    category: "Bahasa",
    rating: 4.7,
    year: 2019,
    cover: "#7c3aed",
    available: true,
    synopsis: "Panduan tata bahasa Inggris paling populer untuk pelajar.",
  },
  {
    id: "b-06",
    title: "Ensiklopedia Sains Bergambar",
    author: "DK Publishing",
    category: "Referensi",
    rating: 4.6,
    year: 2020,
    cover: "#be123c",
    available: true,
    synopsis: "Referensi sains visual yang kaya untuk menumbuhkan rasa ingin tahu.",
  },
  {
    id: "b-07",
    title: "Matematika Kreatif",
    author: "Prof. Iwan Pranoto",
    category: "Sains",
    rating: 4.4,
    year: 2022,
    cover: "#0f766e",
    available: true,
    synopsis: "Pendekatan menyenangkan untuk memahami logika matematika.",
  },
  {
    id: "b-08",
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    category: "Fiksi",
    rating: 4.8,
    year: 1980,
    cover: "#92400e",
    available: true,
    synopsis: "Roman sejarah pergerakan bangsa yang menggugah nasionalisme.",
  },
];

export const bookCategories = [
  "Semua",
  "Agama",
  "Sains",
  "Fiksi",
  "Sejarah",
  "Bahasa",
  "Referensi",
] as const;

export type BorrowRecord = {
  id: string;
  title: string;
  borrowedAt: string;
  dueAt: string;
  status: "Dipinjam" | "Dikembalikan" | "Terlambat";
};

export const borrowHistory: BorrowRecord[] = [
  { id: "r1", title: "Laskar Pelangi", borrowedAt: "2026-06-10", dueAt: "2026-06-24", status: "Dipinjam" },
  { id: "r2", title: "Fisika untuk Madrasah", borrowedAt: "2026-05-20", dueAt: "2026-06-03", status: "Dikembalikan" },
  { id: "r3", title: "English Grammar in Use", borrowedAt: "2026-05-01", dueAt: "2026-05-15", status: "Terlambat" },
];
