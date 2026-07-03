import Link from "next/link";
import { Home, Search } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 px-6 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-emerald bg-[size:44px_44px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold-400/15 blur-3xl" />
      <div className="relative">
        <p className="font-display text-[7rem] font-bold leading-none text-gold-300 sm:text-[10rem]">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mx-auto mt-3 max-w-md text-emerald-50/80">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Mari kembali ke jalur yang benar.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" variant="gold" size="lg">
            <Home className="h-5 w-5" /> Kembali ke Beranda
          </ButtonLink>
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
          >
            <Search className="h-4 w-4" /> Jelajahi Berita
          </Link>
        </div>
      </div>
    </div>
  );
}
