"use client";

import { DashTitle, Panel } from "@/components/dashboard/ui";
import { AreaTrend, BarSimple, DonutChart } from "@/components/dashboard/charts";
import {
  enrollmentTrend,
  genderSplit,
  gradeDistribution,
  ppdbFunnel,
} from "@/lib/data/dashboard";

export default function AnalyticsPage() {
  return (
    <>
      <DashTitle title="Analytics" subtitle="Visualisasi data madrasah untuk pengambilan keputusan." />
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Pertumbuhan Siswa (6 Tahun)">
          <AreaTrend data={enrollmentTrend} dataKey="siswa" xKey="year" />
        </Panel>
        <Panel title="Funnel PPDB 2026">
          <BarSimple data={ppdbFunnel} dataKey="jumlah" xKey="tahap" color="#c8912f" />
        </Panel>
        <Panel title="Rata-rata Nilai per Kelas">
          <BarSimple data={gradeDistribution} dataKey="rata" xKey="kelas" />
        </Panel>
        <Panel title="Komposisi Gender">
          <DonutChart data={genderSplit} />
          <div className="mt-3 flex justify-center gap-6 text-sm">
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-emerald-600" /> Laki-laki</span>
            <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-gold-500" /> Perempuan</span>
          </div>
        </Panel>
      </div>
    </>
  );
}
