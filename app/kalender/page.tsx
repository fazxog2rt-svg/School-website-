import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { AcademicCalendar } from "@/components/sections/academic-calendar";

export const metadata: Metadata = {
  title: "Kalender Akademik",
  description:
    "Kalender akademik interaktif MTsN 1 Probolinggo — agenda, ujian, libur, dan kegiatan sekolah.",
};

export default function KalenderPage() {
  return (
    <>
      <PageHeader
        title="Kalender Akademik"
        description="Agenda lengkap tahun ajaran 2026/2027 — dari ujian hingga kegiatan keagamaan."
        crumbs={[{ label: "Kalender" }]}
      />
      <section className="section-pad">
        <div className="container">
          <AcademicCalendar />
        </div>
      </section>
    </>
  );
}
