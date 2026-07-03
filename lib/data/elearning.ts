export type Material = {
  id: string;
  title: string;
  subject: string;
  type: "PDF" | "Video" | "Slide";
  size: string;
  date: string;
  teacher: string;
};

export const materials: Material[] = [
  { id: "m1", title: "Bab 5 — Sistem Persamaan Linear", subject: "Matematika", type: "PDF", size: "2.4 MB", date: "2026-06-20", teacher: "Siti Nurhaliza, M.Pd." },
  { id: "m2", title: "Tenses & Conditional Sentences", subject: "Bahasa Inggris", type: "Slide", size: "5.1 MB", date: "2026-06-18", teacher: "Muhammad Rizky, S.Pd." },
  { id: "m3", title: "Fotosintesis (Video Pembelajaran)", subject: "IPA Terpadu", type: "Video", size: "48 MB", date: "2026-06-15", teacher: "Budi Santoso, S.Si." },
  { id: "m4", title: "Tajwid — Hukum Nun Mati", subject: "Al-Qur'an Hadits", type: "PDF", size: "1.8 MB", date: "2026-06-12", teacher: "Imam Syafi'i, M.Ag." },
  { id: "m5", title: "Sejarah Kerajaan Islam Nusantara", subject: "IPS Terpadu", type: "Slide", size: "6.7 MB", date: "2026-06-10", teacher: "Nur Aisyah, M.Pd." },
  { id: "m6", title: "Algoritma & Pemrograman Dasar", subject: "Informatika", type: "PDF", size: "3.2 MB", date: "2026-06-08", teacher: "Hendra Wijaya, S.Kom." },
];

export type Assignment = {
  id: string;
  title: string;
  subject: string;
  due: string;
  status: "Belum" | "Dikerjakan" | "Dinilai";
  score?: number;
};

export const assignments: Assignment[] = [
  { id: "as1", title: "Latihan Soal SPLDV", subject: "Matematika", due: "2026-07-08", status: "Belum" },
  { id: "as2", title: "Essay: My Holiday Plan", subject: "Bahasa Inggris", due: "2026-07-06", status: "Dikerjakan" },
  { id: "as3", title: "Laporan Praktikum Fotosintesis", subject: "IPA Terpadu", due: "2026-07-02", status: "Dinilai", score: 88 },
  { id: "as4", title: "Hafalan Surat Ad-Dhuha", subject: "Al-Qur'an Hadits", due: "2026-07-10", status: "Belum" },
  { id: "as5", title: "Membuat Program Kalkulator", subject: "Informatika", due: "2026-06-28", status: "Dinilai", score: 95 },
];

export type ForumThread = {
  id: string;
  title: string;
  author: string;
  avatar: string;
  replies: number;
  lastActive: string;
  subject: string;
};

export const forumThreads: ForumThread[] = [
  { id: "f1", title: "Bagaimana cara menentukan variabel pada SPLDV?", author: "Rafi Pratama", avatar: "https://i.pravatar.cc/80?img=57", replies: 12, lastActive: "2 jam lalu", subject: "Matematika" },
  { id: "f2", title: "Diskusi: perbedaan Simple Past vs Present Perfect", author: "Salsa Nabila", avatar: "https://i.pravatar.cc/80?img=44", replies: 8, lastActive: "5 jam lalu", subject: "Bahasa Inggris" },
  { id: "f3", title: "Tanya jawab materi fotosintesis", author: "Dimas Aji", avatar: "https://i.pravatar.cc/80?img=33", replies: 20, lastActive: "1 hari lalu", subject: "IPA Terpadu" },
  { id: "f4", title: "Tips menghafal tajwid dengan mudah", author: "Aisyah Putri", avatar: "https://i.pravatar.cc/80?img=25", replies: 15, lastActive: "1 hari lalu", subject: "Al-Qur'an Hadits" },
];
