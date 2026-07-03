import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ScheduleView } from "@/components/sections/schedule-view";

export const metadata: Metadata = {
  title: "Jadwal Pelajaran",
  description:
    "Jadwal pelajaran MTsN 1 Probolinggo — dapat difilter per kelas dan per hari.",
};

export default function JadwalPage() {
  return (
    <>
      <PageHeader
        title="Jadwal Pelajaran"
        description="Lihat jadwal pelajaran lengkap untuk setiap kelas dan hari."
        crumbs={[{ label: "Jadwal" }]}
      />
      <section className="section-pad">
        <div className="container">
          <ScheduleView />
        </div>
      </section>
    </>
  );
}
