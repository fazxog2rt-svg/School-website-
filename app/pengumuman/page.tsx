import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { AnnouncementsList } from "@/components/sections/announcements-list";

export const metadata: Metadata = {
  title: "Pengumuman",
  description:
    "Pengumuman resmi MTsN 1 Probolinggo — akademik, PPDB, kegiatan, dan informasi penting lainnya.",
};

export default function PengumumanPage() {
  return (
    <>
      <PageHeader
        title="Pengumuman"
        description="Informasi resmi dan penting dari madrasah — jangan sampai terlewat."
        crumbs={[{ label: "Pengumuman" }]}
      />
      <section className="section-pad">
        <div className="container">
          <AnnouncementsList />
        </div>
      </section>
    </>
  );
}
