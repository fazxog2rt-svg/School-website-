import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { AcademicCalendar } from "@/components/sections/academic-calendar";
import { getCalendarEvents } from "@/lib/db";

export const metadata: Metadata = {
  title: "Kalender Akademik",
  description:
    "Kalender akademik interaktif MTsN 1 Probolinggo — agenda, ujian, libur, dan kegiatan sekolah.",
};

export default async function KalenderPage() {
  const events = await getCalendarEvents();
  return (
    <>
      <PageHeader
        title="Kalender Akademik"
        description="Agenda lengkap tahun ajaran 2026/2027 — dari ujian hingga kegiatan keagamaan."
        crumbs={[{ label: "Kalender" }]}
      />
      <section className="section-pad">
        <div className="container">
          <AcademicCalendar events={events} />
        </div>
      </section>
    </>
  );
}
