export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Prestasi" | "Kegiatan" | "Pengumuman" | "Akademik" | "Keagamaan";
  date: string;
  author: string;
  readingTime: number;
  image: string;
  featured?: boolean;
  trending?: boolean;
  tags: string[];
};

export const news: NewsItem[] = [
  {
    id: "n-01",
    slug: "raih-medali-perak-osn-matematika-2023",
    title: "Siswa MTsN 1 Probolinggo Raih Medali Perak OSN Matematika",
    excerpt:
      "Prestasi membanggakan kembali ditorehkan di ajang Olimpiade Sains Nasional bidang Matematika tahun ini.",
    category: "Prestasi",
    date: "2026-06-24",
    author: "Humas Madrasah",
    readingTime: 4,
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1000&q=80",
    featured: true,
    trending: true,
    tags: ["OSN", "Matematika", "Prestasi"],
  },
  {
    id: "n-02",
    slug: "pembukaan-ppdb-tahun-ajaran-2026-2027",
    title: "Pembukaan PPDB Tahun Ajaran 2026/2027 Resmi Dimulai",
    excerpt:
      "Pendaftaran Peserta Didik Baru dibuka secara online dengan sistem yang lebih modern dan transparan.",
    category: "Pengumuman",
    date: "2026-06-18",
    author: "Panitia PPDB",
    readingTime: 3,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=80",
    featured: true,
    trending: true,
    tags: ["PPDB", "Pendaftaran"],
  },
  {
    id: "n-03",
    slug: "peringatan-tahun-baru-hijriah",
    title: "Semarak Peringatan Tahun Baru Hijriah di Madrasah",
    excerpt:
      "Rangkaian kegiatan religius dan sosial digelar untuk memperingati datangnya tahun baru Islam.",
    category: "Keagamaan",
    date: "2026-06-10",
    author: "OSIS",
    readingTime: 5,
    image:
      "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=1000&q=80",
    trending: true,
    tags: ["Keagamaan", "Kegiatan"],
  },
  {
    id: "n-04",
    slug: "workshop-guru-penggerak-kurikulum-adaptif",
    title: "Workshop Guru Penggerak: Menuju Kurikulum yang Adaptif",
    excerpt:
      "Para pendidik mengikuti pelatihan intensif untuk meningkatkan kualitas pembelajaran abad 21.",
    category: "Akademik",
    date: "2026-05-30",
    author: "Waka Kurikulum",
    readingTime: 4,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&q=80",
    tags: ["Guru", "Kurikulum"],
  },
  {
    id: "n-05",
    slug: "juara-2-world-robot-olympiad",
    title: "Tim Robotik Melangkah ke Panggung World Robot Olympiad",
    excerpt:
      "Inovasi dan kerja keras tim robotik mengantar madrasah meraih prestasi tingkat internasional.",
    category: "Prestasi",
    date: "2026-05-22",
    author: "Coding & Robotik",
    readingTime: 6,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000&q=80",
    tags: ["Robotik", "Internasional"],
  },
  {
    id: "n-06",
    slug: "bakti-sosial-ramadhan",
    title: "Bakti Sosial Ramadhan: Berbagi Kebahagiaan dengan Sesama",
    excerpt:
      "Siswa dan guru bergotong royong menyalurkan bantuan kepada masyarakat sekitar madrasah.",
    category: "Kegiatan",
    date: "2026-05-12",
    author: "OSIS",
    readingTime: 3,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=80",
    tags: ["Sosial", "Ramadhan"],
  },
];

export const newsCategories = [
  "Semua",
  "Prestasi",
  "Kegiatan",
  "Pengumuman",
  "Akademik",
  "Keagamaan",
] as const;
