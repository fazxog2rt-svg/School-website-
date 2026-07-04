"use client";

import { Download, Save } from "lucide-react";
import * as React from "react";
import { useAuth } from "@/lib/auth/auth-context";
import { roleGroup } from "@/lib/auth/roles";
import { DashTitle, Panel } from "@/components/dashboard/ui";
import { GradeBars } from "@/components/dashboard/charts";
import { studentGrades, classRoster } from "@/lib/data/dashboard";
import { toast, downloadFile } from "@/lib/toast";

function GuruInput() {
  const [scores, setScores] = React.useState<Record<string, string>>({});
  const filled = Object.values(scores).filter((v) => v !== "").length;
  return (
    <Panel
      title="Input Nilai — Matematika Kelas 8A"
      action={
        <button
          onClick={() => toast(`Nilai tersimpan untuk ${filled} siswa.`)}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          <Save className="h-4 w-4" /> Simpan
        </button>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th className="pb-3 font-medium">No</th>
              <th className="pb-3 font-medium">Nama Siswa</th>
              <th className="pb-3 font-medium">Nilai (0–100)</th>
            </tr>
          </thead>
          <tbody>
            {classRoster.map((s, i) => (
              <tr key={s.id} className="border-b border-border last:border-0">
                <td className="py-2.5 text-muted-foreground">{i + 1}</td>
                <td className="py-2.5 font-medium text-foreground">{s.name}</td>
                <td className="py-2.5">
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={scores[s.id] ?? ""}
                    onChange={(e) => setScores((p) => ({ ...p, [s.id]: e.target.value }))}
                    placeholder="—"
                    className="h-9 w-24 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

function SiswaView({ owner }: { owner: "siswa" | "orangtua" }) {
  const avg = Math.round(studentGrades.reduce((s, g) => s + g.nilai, 0) / studentGrades.length);
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Panel title="Nilai per Mata Pelajaran" className="lg:col-span-2">
        <GradeBars data={studentGrades} />
      </Panel>
      <Panel title="Rekap">
        <div className="space-y-3">
          <div className="rounded-xl bg-emerald-600 p-4 text-white">
            <p className="text-sm text-emerald-100">Rata-rata Keseluruhan</p>
            <p className="font-display text-3xl font-bold">{avg}</p>
          </div>
          {studentGrades.map((g) => (
            <div key={g.subject} className="flex items-center justify-between rounded-xl bg-secondary/60 px-3 py-2">
              <span className="text-sm text-foreground">{g.subject}</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">{g.nilai}</span>
            </div>
          ))}
          <button
            onClick={() => {
              const csv =
                "Mata Pelajaran,KKM,Nilai\n" +
                studentGrades.map((g) => `${g.subject},${g.kkm},${g.nilai}`).join("\n") +
                `\nRata-rata,,${avg}`;
              downloadFile("rekap-nilai.csv", csv, "text/csv;charset=utf-8");
              toast("Rekap nilai berhasil diunduh.");
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            <Download className="h-4 w-4" /> Unduh Rekap Nilai
          </button>
        </div>
      </Panel>
    </div>
  );
}

export default function NilaiPage() {
  const { user } = useAuth();
  if (!user) return null;
  const group = roleGroup(user.role);

  return (
    <>
      <DashTitle
        title={group === "guru" || group === "admin" ? "Input & Rekap Nilai" : group === "orangtua" ? "Nilai Ananda" : "Nilai Saya"}
        subtitle={group === "guru" || group === "admin" ? "Masukkan dan kelola nilai siswa." : "Rekap nilai semester berjalan."}
      />
      {group === "guru" || group === "admin" ? <GuruInput /> : <SiswaView owner={group === "orangtua" ? "orangtua" : "siswa"} />}
    </>
  );
}
