export type CalendarEvent = {
  id: string;
  title: string;
  date: string; // ISO
  endDate?: string;
  type: "Akademik" | "Libur" | "Ujian" | "Kegiatan" | "Keagamaan";
};

export const calendarEvents: CalendarEvent[] = [
  { id: "c1", title: "Awal Tahun Ajaran 2026/2027", date: "2026-07-14", type: "Akademik" },
  { id: "c2", title: "Masa Ta'aruf Siswa (MATSAMA)", date: "2026-07-14", endDate: "2026-07-16", type: "Kegiatan" },
  { id: "c3", title: "Peringatan Tahun Baru Hijriah", date: "2026-07-16", type: "Keagamaan" },
  { id: "c4", title: "HUT Kemerdekaan RI", date: "2026-08-17", type: "Kegiatan" },
  { id: "c5", title: "Penilaian Tengah Semester", date: "2026-09-22", endDate: "2026-09-27", type: "Ujian" },
  { id: "c6", title: "Maulid Nabi Muhammad SAW", date: "2026-08-25", type: "Keagamaan" },
  { id: "c7", title: "Class Meeting", date: "2026-12-15", endDate: "2026-12-19", type: "Kegiatan" },
  { id: "c8", title: "Penilaian Akhir Semester Ganjil", date: "2026-12-01", endDate: "2026-12-10", type: "Ujian" },
  { id: "c9", title: "Pembagian Rapor Semester Ganjil", date: "2026-12-20", type: "Akademik" },
  { id: "c10", title: "Libur Semester Ganjil", date: "2026-12-22", endDate: "2027-01-03", type: "Libur" },
];

export const eventTypeColors: Record<CalendarEvent["type"], string> = {
  Akademik: "bg-emerald-500",
  Libur: "bg-rose-500",
  Ujian: "bg-amber-500",
  Kegiatan: "bg-sky-500",
  Keagamaan: "bg-violet-500",
};
