"use client";

import { Award, Download, FileBadge } from "lucide-react";
import { DashTitle, Panel } from "@/components/dashboard/ui";
import { studentGrades } from "@/lib/data/dashboard";

const certificates = [
  { title: "Sertifikat Tahfidz Juz 30", date: "Juni 2026" },
  { title: "Juara 2 OSN Matematika Kota", date: "Mei 2026" },
  { title: "Peserta Kemah Kepramukaan", date: "April 2026" },
];

export default function RaporPage() {
  const avg = Math.round(studentGrades.reduce((s, g) => s + g.nilai, 0) / studentGrades.length);
  return (
    <>
      <DashTitle title="Rapor & Sertifikat Digital" subtitle="Unduh rapor dan kumpulan sertifikat prestasimu." />

      <div className="grid gap-6 lg:grid-cols-3">
        <Panel title="Rapor Semester Genap 2025/2026" className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Mata Pelajaran</th>
                  <th className="pb-3 font-medium">KKM</th>
                  <th className="pb-3 font-medium">Nilai</th>
                  <th className="pb-3 font-medium">Predikat</th>
                </tr>
              </thead>
              <tbody>
                {studentGrades.map((g) => (
                  <tr key={g.subject} className="border-b border-border last:border-0">
                    <td className="py-3 font-medium text-foreground">{g.subject}</td>
                    <td className="py-3 text-muted-foreground">{g.kkm}</td>
                    <td className="py-3 font-semibold text-emerald-600 dark:text-emerald-400">{g.nilai}</td>
                    <td className="py-3 text-muted-foreground">
                      {g.nilai >= 90 ? "A (Sangat Baik)" : g.nilai >= 80 ? "B (Baik)" : "C (Cukup)"}
                    </td>
                  </tr>
                ))}
                <tr className="font-semibold">
                  <td className="py-3 text-foreground">Rata-rata</td>
                  <td />
                  <td className="py-3 text-emerald-600 dark:text-emerald-400">{avg}</td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
          <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
            <Download className="h-4 w-4" /> Unduh Rapor (PDF)
          </button>
        </Panel>

        <Panel title="Sertifikat Digital">
          <ul className="space-y-3">
            {certificates.map((c) => (
              <li key={c.title} className="flex items-center gap-3 rounded-2xl border border-border p-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-700 dark:bg-gold-500/15 dark:text-gold-300">
                  <FileBadge className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-foreground">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.date}</p>
                </div>
                <Download className="h-4 w-4 text-muted-foreground" />
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            <Award className="h-4 w-4" /> Semua sertifikat terverifikasi digital.
          </div>
        </Panel>
      </div>
    </>
  );
}
