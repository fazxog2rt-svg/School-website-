import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { LibraryGrid } from "@/components/sections/library-grid";

export const metadata: Metadata = {
  title: "Perpustakaan Digital",
  description:
    "Koleksi buku dan ebook MTsN 1 Probolinggo — cari, baca, dan pinjam secara digital.",
};

export default function PerpustakaanPage() {
  return (
    <>
      <PageHeader
        title="Perpustakaan Digital"
        description="Jelajahi ribuan koleksi buku dan ebook untuk menemani perjalanan belajar."
        crumbs={[{ label: "Perpustakaan" }]}
      />
      <section className="section-pad">
        <div className="container">
          <LibraryGrid />
        </div>
      </section>
    </>
  );
}
