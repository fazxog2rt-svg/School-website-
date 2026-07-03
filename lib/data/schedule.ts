export type Lesson = {
  time: string;
  subject: string;
  teacher: string;
};

export type DaySchedule = {
  day: string;
  lessons: Lesson[];
};

export const classes = ["7A", "7B", "8A", "8B", "9A", "9B"] as const;
export const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"] as const;

// Jadwal contoh untuk kelas 8A (struktur sama dapat direplikasi per kelas)
export const scheduleByClass: Record<string, DaySchedule[]> = {
  "8A": [
    {
      day: "Senin",
      lessons: [
        { time: "07.00 – 07.40", subject: "Upacara", teacher: "-" },
        { time: "07.40 – 09.00", subject: "Matematika", teacher: "Siti Nurhaliza, M.Pd." },
        { time: "09.20 – 10.40", subject: "Bahasa Inggris", teacher: "Muhammad Rizky, S.Pd." },
        { time: "11.00 – 12.20", subject: "IPA Terpadu", teacher: "Budi Santoso, S.Si." },
      ],
    },
    {
      day: "Selasa",
      lessons: [
        { time: "07.00 – 08.20", subject: "Akidah Akhlak", teacher: "Hj. Fatimah Az-Zahra, M.Ag." },
        { time: "08.20 – 09.40", subject: "Bahasa Indonesia", teacher: "Dewi Anggraini, S.Pd." },
        { time: "10.00 – 11.20", subject: "Informatika", teacher: "Hendra Wijaya, S.Kom." },
        { time: "11.20 – 12.40", subject: "IPS Terpadu", teacher: "Nur Aisyah, M.Pd." },
      ],
    },
    {
      day: "Rabu",
      lessons: [
        { time: "07.00 – 08.20", subject: "Al-Qur'an Hadits", teacher: "Imam Syafi'i, M.Ag." },
        { time: "08.20 – 09.40", subject: "Matematika", teacher: "Siti Nurhaliza, M.Pd." },
        { time: "10.00 – 11.20", subject: "PJOK", teacher: "Agus Prasetyo, S.Pd." },
        { time: "11.20 – 12.40", subject: "Seni Budaya", teacher: "Yuni Kartika, S.Pd." },
      ],
    },
    {
      day: "Kamis",
      lessons: [
        { time: "07.00 – 08.20", subject: "IPA Terpadu", teacher: "Budi Santoso, S.Si." },
        { time: "08.20 – 09.40", subject: "Bahasa Inggris", teacher: "Muhammad Rizky, S.Pd." },
        { time: "10.00 – 11.20", subject: "Bahasa Arab", teacher: "Imam Syafi'i, M.Ag." },
        { time: "11.20 – 12.40", subject: "Bimbingan Konseling", teacher: "Rahmawati, S.Pd." },
      ],
    },
    {
      day: "Jumat",
      lessons: [
        { time: "07.00 – 08.20", subject: "Matematika", teacher: "Siti Nurhaliza, M.Pd." },
        { time: "08.20 – 09.40", subject: "Bahasa Indonesia", teacher: "Dewi Anggraini, S.Pd." },
        { time: "10.00 – 11.00", subject: "Tahfidz", teacher: "Imam Syafi'i, M.Ag." },
      ],
    },
    {
      day: "Sabtu",
      lessons: [
        { time: "07.00 – 08.20", subject: "IPS Terpadu", teacher: "Nur Aisyah, M.Pd." },
        { time: "08.20 – 09.40", subject: "Informatika", teacher: "Hendra Wijaya, S.Kom." },
        { time: "10.00 – 12.00", subject: "Ekstrakurikuler", teacher: "Pembina Ekskul" },
      ],
    },
  ],
};

// Untuk demo, kelas lain memakai pola yang sama
export function getSchedule(cls: string): DaySchedule[] {
  return scheduleByClass["8A"];
}
