export type Announcement = {
  id: string;
  title: string;
  body: string;
  category: "Akademik" | "PPDB" | "Kegiatan" | "Umum";
  date: string;
  deadline?: string;
  pinned?: boolean;
  hasPdf?: boolean;
};

export const announcements: Announcement[] = [
  {
    id: "an-01",
    title: "Pendaftaran Ulang Peserta Didik Baru 2026/2027",
    body: "Bagi calon peserta didik yang dinyatakan lulus seleksi, wajib melakukan daftar ulang dengan membawa berkas asli.",
    category: "PPDB",
    date: "2026-07-01",
    deadline: "2026-07-15T23:59:00",
    pinned: true,
    hasPdf: true,
  },
  {
    id: "an-02",
    title: "Jadwal Penilaian Akhir Semester Genap",
    body: "PAS Genap dilaksanakan mulai 8 Juni 2026. Siswa diharapkan mempersiapkan diri dan mengecek jadwal masing-masing.",
    category: "Akademik",
    date: "2026-06-01",
    deadline: "2026-07-10T17:00:00",
    pinned: true,
    hasPdf: true,
  },
  {
    id: "an-03",
    title: "Lomba Kebersihan Kelas dalam Rangka HUT Madrasah",
    body: "Seluruh kelas mengikuti lomba kebersihan dan dekorasi. Penilaian dilakukan oleh tim juri pada minggu terakhir Juli.",
    category: "Kegiatan",
    date: "2026-06-28",
    hasPdf: false,
  },
  {
    id: "an-04",
    title: "Libur Semester & Kegiatan Pesantren Kilat",
    body: "Informasi jadwal libur semester genap serta kegiatan pesantren kilat bagi siswa yang berminat.",
    category: "Umum",
    date: "2026-06-20",
    hasPdf: true,
  },
  {
    id: "an-05",
    title: "Pengumuman Beasiswa Prestasi",
    body: "Dibuka pendaftaran beasiswa bagi siswa berprestasi akademik dan tahfidz. Kuota terbatas.",
    category: "Akademik",
    date: "2026-06-15",
    deadline: "2026-07-05T23:59:00",
    hasPdf: true,
  },
];
