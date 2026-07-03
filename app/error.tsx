"use client";

import { RotateCcw, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 px-6 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-emerald bg-[size:44px_44px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative">
        <p className="font-display text-[7rem] font-bold leading-none text-gold-300 sm:text-[10rem]">
          500
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
          Terjadi Kesalahan
        </h1>
        <p className="mx-auto mt-3 max-w-md text-emerald-50/80">
          Maaf, terjadi kendala pada sistem kami. Silakan coba muat ulang
          halaman atau kembali ke beranda.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={reset} variant="gold" size="lg">
            <RotateCcw className="h-5 w-5" /> Coba Lagi
          </Button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/20"
          >
            <Home className="h-4 w-4" /> Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
