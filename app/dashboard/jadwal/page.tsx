"use client";

import { DashTitle } from "@/components/dashboard/ui";
import { ScheduleView } from "@/components/sections/schedule-view";

export default function JadwalDashboardPage() {
  return (
    <>
      <DashTitle title="Jadwal Pelajaran" subtitle="Lihat jadwal per kelas dan per hari." />
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
        <ScheduleView />
      </div>
    </>
  );
}
