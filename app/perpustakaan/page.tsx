import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { LibraryGrid } from "@/components/sections/library-grid";
import { getBooks } from "@/lib/db";

export const metadata: Metadata = {
  title: "Perpustakaan Digital",
  description:
    "Koleksi buku dan ebook MTsN 1 Probolinggo — cari, baca, dan pinjam secara digital.",
};

export default async function PerpustakaanPage() {
  const books = await getBooks();
  return (
    <>
      <PageHeader
        title="Perpustakaan Digital"
        description="Jelajahi ribuan koleksi buku dan ebook untuk menemani perjalanan belajar."
        crumbs={[{ label: "Perpustakaan" }]}
      />
      <section className="section-pad">
        <div className="container">
          <LibraryGrid books={books} />
        </div>
      </section>
    </>
  );
}
