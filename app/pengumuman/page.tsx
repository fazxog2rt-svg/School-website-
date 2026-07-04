import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { AnnouncementsList } from "@/components/sections/announcements-list";
import { getAnnouncements } from "@/lib/db";

export const metadata: Metadata = {
  title: "Pengumuman",
  description:
    "Pengumuman resmi MTsN 1 Probolinggo — akademik, PPDB, kegiatan, dan informasi penting lainnya.",
};

export default async function PengumumanPage() {
  const announcements = await getAnnouncements();
  return (
    <>
      <PageHeader
        title="Pengumuman"
        description="Informasi resmi dan penting dari madrasah — jangan sampai terlewat."
        crumbs={[{ label: "Pengumuman" }]}
      />
      <section className="section-pad">
        <div className="container">
          <AnnouncementsList announcements={announcements} />
        </div>
      </section>
    </>
  );
}
