import { ArrowRight, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 px-6 py-16 text-center shadow-elevated md:px-16 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-grid-emerald bg-[size:36px_36px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-200 backdrop-blur">
                PPDB 2026/2027 Telah Dibuka
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl balance">
                Wujudkan Masa Depan Gemilang Bersama Kami
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-emerald-50/85 md:text-lg balance">
                Bergabunglah dengan keluarga besar MTsN 1 Probolinggo. Daftar
                sekarang, prosesnya mudah, cepat, dan sepenuhnya online.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href="/ppdb" size="lg" variant="gold" className="w-full sm:w-auto">
                  Daftar Sekarang
                  <ArrowRight className="h-5 w-5" />
                </ButtonLink>
                <ButtonLink
                  href={`https://wa.me/${site.whatsapp}`}
                  size="lg"
                  className="w-full border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20 sm:w-auto"
                >
                  <Phone className="h-5 w-5" />
                  Konsultasi Gratis
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
