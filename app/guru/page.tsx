import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { GuruDirectory } from "@/components/sections/guru-directory";
import { getTeachers } from "@/lib/db";

export const metadata: Metadata = {
  title: "Profil Guru",
  description:
    "Direktori tenaga pendidik profesional MTsN 1 Probolinggo — lengkap dengan pendidikan, sertifikasi, dan prestasi.",
};

export default async function GuruPage() {
  const teachers = await getTeachers();
  return (
    <>
      <PageHeader
        title="Tenaga Pendidik"
        description="Guru-guru profesional, bersertifikat, dan berdedikasi yang siap membimbing ananda meraih prestasi."
        crumbs={[{ label: "Guru" }]}
      />
      <section className="section-pad">
        <div className="container">
          <GuruDirectory teachers={teachers} />
        </div>
      </section>
    </>
  );
}
