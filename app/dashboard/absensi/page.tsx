"use client";

import { Save } from "lucide-react";
import * as React from "react";
import { useAuth } from "@/lib/auth/auth-context";
import { roleGroup } from "@/lib/auth/roles";
import { DashTitle, Panel } from "@/components/dashboard/ui";
import { classRoster, attendanceSummary, type StudentAttendance } from "@/lib/data/dashboard";
import { cn } from "@/lib/utils";
import { toast } from "@/lib/toast";

const options: StudentAttendance["status"][] = ["Hadir", "Izin", "Sakit", "Alpha"];
const optionColor: Record<string, string> = {
  Hadir: "bg-emerald-600 text-white",
  Izin: "bg-sky-500 text-white",
  Sakit: "bg-amber-500 text-white",
  Alpha: "bg-rose-500 text-white",
};

function GuruAbsensi() {
  const [roster, setRoster] = React.useState(classRoster);
  return (
    <Panel
      title="Absensi — Kelas 8A"
      action={
        <button
          onClick={() => {
            const hadir = roster.filter((r) => r.status === "Hadir").length;
            toast(`Absensi tersimpan — ${hadir}/${roster.length} siswa hadir.`);
          }}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          <Save className="h-4 w-4" /> Simpan Absensi
        </button>
      }
    >
      <ul className="space-y-2">
        {roster.map((s, i) => (
          <li key={s.id} className="flex flex-col gap-2 rounded-xl border border-border p-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-medium text-foreground">
              {i + 1}. {s.name}
            </span>
            <div className="flex gap-1.5">
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() =>
                    setRoster((p) => p.map((r) => (r.id === s.id ? { ...r, status: opt } : r)))
                  }
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors",
                    s.status === opt ? optionColor[opt] : "bg-secondary text-muted-foreground hover:bg-secondary/70"
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

function OrtuAbsensi() {
  const items = [
    { l: "Hadir", v: attendanceSummary.hadir, c: "bg-emerald-500" },
    { l: "Izin", v: attendanceSummary.izin, c: "bg-sky-500" },
    { l: "Sakit", v: attendanceSummary.sakit, c: "bg-amber-500" },
    { l: "Alpha", v: attendanceSummary.alpha, c: "bg-rose-500" },
  ];
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Panel title="Ringkasan Presensi Semester">
        <div className="space-y-4">
          {items.map((s) => (
            <div key={s.l}>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{s.l}</span>
                <span className="font-semibold text-foreground">{s.v}%</span>
              </div>
              <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-secondary">
                <div className={`h-full rounded-full ${s.c}`} style={{ width: `${s.v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Panel>
      <Panel title="Riwayat Kehadiran Terakhir">
        <ul className="space-y-2 text-sm">
          {[
            { d: "Senin, 30 Jun 2026", s: "Hadir" },
            { d: "Sabtu, 28 Jun 2026", s: "Hadir" },
            { d: "Jumat, 27 Jun 2026", s: "Izin" },
            { d: "Kamis, 26 Jun 2026", s: "Hadir" },
          ].map((r) => (
            <li key={r.d} className="flex items-center justify-between rounded-xl bg-secondary/60 px-3 py-2.5">
              <span className="text-foreground">{r.d}</span>
              <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold", optionColor[r.s])}>{r.s}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

export default function AbsensiPage() {
  const { user } = useAuth();
  if (!user) return null;
  const group = roleGroup(user.role);
  return (
    <>
      <DashTitle
        title={group === "orangtua" ? "Presensi Ananda" : "Absensi Kelas"}
        subtitle={group === "orangtua" ? "Pantau kehadiran anak Anda." : "Catat kehadiran siswa hari ini."}
      />
      {group === "orangtua" ? <OrtuAbsensi /> : <GuruAbsensi />}
    </>
  );
}
