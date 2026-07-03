"use client";

import {
  Users,
  GraduationCap,
  Trophy,
  Wallet,
  BookOpen,
  ClipboardCheck,
  FileText,
  CalendarClock,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/auth/auth-context";
import { DashTitle, Panel, StatCard, StatusPill } from "@/components/dashboard/ui";
import { AreaTrend, BarSimple, DonutChart, GradeBars } from "@/components/dashboard/charts";
import {
  enrollmentTrend,
  genderSplit,
  gradeDistribution,
  activityLogs,
  studentGrades,
  progressTrend,
  attendanceSummary,
  bills,
} from "@/lib/data/dashboard";
import { assignments } from "@/lib/data/elearning";
import { formatRupiah } from "@/lib/utils";

function Greeting() {
  const { user } = useAuth();
  const hour = new Date().getHours();
  const salam =
    hour < 11 ? "Selamat pagi" : hour < 15 ? "Selamat siang" : hour < 18 ? "Selamat sore" : "Selamat malam";
  return (
    <p className="text-sm text-muted-foreground">
      {salam}, selamat datang kembali 👋
    </p>
  );
}

/* ---------------- ADMIN ---------------- */
export function AdminOverview() {
  return (
    <>
      <Greeting />
      <DashTitle title="Ringkasan Madrasah" subtitle="Pantau data & aktivitas secara real-time." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Siswa" value="1.240" icon={Users} trend={{ value: "2.5%", up: true }} />
        <StatCard label="Tenaga Pendidik" value="84" icon={GraduationCap} tone="blue" trend={{ value: "3", up: true }} />
        <StatCard label="Prestasi 2026" value="88" icon={Trophy} tone="gold" trend={{ value: "12%", up: true }} />
        <StatCard label="Pendaftar PPDB" value="480" icon={UserCheck} tone="rose" trend={{ value: "8%", up: true }} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Panel title="Tren Jumlah Siswa" className="lg:col-span-2">
          <AreaTrend data={enrollmentTrend} dataKey="siswa" xKey="year" />
        </Panel>
        <Panel title="Komposisi Gender">
          <DonutChart data={genderSplit} />
          <div className="mt-3 flex justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-600" /> Laki-laki
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-gold-500" /> Perempuan
            </span>
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title="Rata-rata Nilai per Kelas">
          <BarSimple data={gradeDistribution} dataKey="rata" xKey="kelas" />
        </Panel>
        <Panel
          title="Aktivitas Terbaru"
          action={
            <Link href="/dashboard/audit" className="text-sm font-semibold text-emerald-600">
              Lihat semua
            </Link>
          }
        >
          <ul className="space-y-3">
            {activityLogs.slice(0, 5).map((log) => (
              <li key={log.id} className="flex items-start gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <div>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">{log.user}</span> {log.action}
                  </p>
                  <p className="text-xs text-muted-foreground">{log.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  );
}

/* ---------------- GURU ---------------- */
export function GuruOverview() {
  return (
    <>
      <Greeting />
      <DashTitle title="Dashboard Guru" subtitle="Kelola pembelajaran & kelas Anda." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Kelas Diampu" value="4" icon={Users} />
        <StatCard label="Jam Mengajar / Minggu" value="24" icon={CalendarClock} tone="blue" />
        <StatCard label="Tugas Perlu Dinilai" value="18" icon={FileText} tone="gold" />
        <StatCard label="Materi Terunggah" value="32" icon={BookOpen} tone="rose" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Panel title="Rata-rata Nilai Kelas Ampuan" className="lg:col-span-2">
          <BarSimple data={gradeDistribution} dataKey="rata" xKey="kelas" />
        </Panel>
        <Panel title="Jadwal Hari Ini">
          <ul className="space-y-3">
            {[
              { t: "07.40", s: "Matematika 8A" },
              { t: "09.20", s: "Matematika 8B" },
              { t: "11.00", s: "Matematika 9A" },
            ].map((j) => (
              <li key={j.s} className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3">
                <span className="rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white">
                  {j.t}
                </span>
                <span className="text-sm font-medium text-foreground">{j.s}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-6">
        <Panel title="Tugas Terbaru untuk Dikoreksi">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Tugas</th>
                  <th className="pb-3 font-medium">Mapel</th>
                  <th className="pb-3 font-medium">Tenggat</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((a) => (
                  <tr key={a.id} className="border-b border-border last:border-0">
                    <td className="py-3 font-medium text-foreground">{a.title}</td>
                    <td className="py-3 text-muted-foreground">{a.subject}</td>
                    <td className="py-3 text-muted-foreground">{a.due}</td>
                    <td className="py-3"><StatusPill status={a.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </>
  );
}

/* ---------------- SISWA ---------------- */
export function SiswaOverview() {
  const avg = Math.round(studentGrades.reduce((s, g) => s + g.nilai, 0) / studentGrades.length);
  return (
    <>
      <Greeting />
      <DashTitle title="Dashboard Siswa" subtitle="Pantau perkembangan belajarmu." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Rata-rata Nilai" value={String(avg)} icon={GraduationCap} trend={{ value: "3 poin", up: true }} />
        <StatCard label="Kehadiran" value={`${attendanceSummary.hadir}%`} icon={ClipboardCheck} tone="blue" />
        <StatCard label="Tugas Aktif" value="2" icon={FileText} tone="gold" />
        <StatCard label="Peringkat Kelas" value="3" icon={Trophy} tone="rose" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Panel title="Nilai per Mata Pelajaran" className="lg:col-span-2">
          <GradeBars data={studentGrades} />
          <div className="mt-2 flex justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-gold-500" /> Nilai</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-slate-300" /> KKM</span>
          </div>
        </Panel>
        <Panel title="Tren Perkembangan">
          <AreaTrend data={progressTrend} dataKey="nilai" xKey="term" />
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title="Tugas Mendatang">
          <ul className="space-y-3">
            {assignments.filter((a) => a.status !== "Dinilai").map((a) => (
              <li key={a.id} className="flex items-center justify-between rounded-xl bg-secondary/60 p-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.subject} · tenggat {a.due}</p>
                </div>
                <StatusPill status={a.status} />
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Jadwal Hari Ini">
          <ul className="space-y-3">
            {[
              { t: "07.40", s: "Matematika", g: "Siti Nurhaliza" },
              { t: "09.20", s: "Bahasa Inggris", g: "M. Rizky" },
              { t: "11.00", s: "IPA Terpadu", g: "Budi Santoso" },
            ].map((j) => (
              <li key={j.s} className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3">
                <span className="rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white">{j.t}</span>
                <div>
                  <p className="text-sm font-medium text-foreground">{j.s}</p>
                  <p className="text-xs text-muted-foreground">{j.g}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  );
}

/* ---------------- ORANG TUA ---------------- */
export function OrangtuaOverview() {
  const unpaid = bills.filter((b) => !b.paid).reduce((s, b) => s + b.amount, 0);
  return (
    <>
      <Greeting />
      <DashTitle title="Dashboard Orang Tua" subtitle="Monitoring perkembangan ananda Rafi Pratama (8A)." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Rata-rata Nilai Anak" value="88" icon={GraduationCap} trend={{ value: "3 poin", up: true }} />
        <StatCard label="Kehadiran" value={`${attendanceSummary.hadir}%`} icon={ClipboardCheck} tone="blue" />
        <StatCard label="Tagihan Belum Lunas" value={formatRupiah(unpaid)} icon={Wallet} tone="rose" />
        <StatCard label="Peringkat Kelas" value="3" icon={Trophy} tone="gold" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Panel title="Grafik Perkembangan Nilai" className="lg:col-span-2">
          <AreaTrend data={progressTrend} dataKey="nilai" xKey="term" />
        </Panel>
        <Panel title="Ringkasan Presensi">
          <div className="space-y-3">
            {[
              { l: "Hadir", v: attendanceSummary.hadir, c: "bg-emerald-500" },
              { l: "Izin", v: attendanceSummary.izin, c: "bg-sky-500" },
              { l: "Sakit", v: attendanceSummary.sakit, c: "bg-amber-500" },
              { l: "Alpha", v: attendanceSummary.alpha, c: "bg-rose-500" },
            ].map((s) => (
              <div key={s.l}>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{s.l}</span>
                  <span className="font-semibold text-foreground">{s.v}%</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-secondary">
                  <div className={`h-full rounded-full ${s.c}`} style={{ width: `${s.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-6">
        <Panel title="Tagihan">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Keterangan</th>
                  <th className="pb-3 font-medium">Jumlah</th>
                  <th className="pb-3 font-medium">Jatuh Tempo</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {bills.map((b) => (
                  <tr key={b.id} className="border-b border-border last:border-0">
                    <td className="py-3 font-medium text-foreground">{b.label}</td>
                    <td className="py-3 text-muted-foreground">{formatRupiah(b.amount)}</td>
                    <td className="py-3 text-muted-foreground">{b.due}</td>
                    <td className="py-3">
                      <StatusPill status={b.paid ? "Lunas" : "Belum Bayar"} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </>
  );
}
