"use client";

import { motion } from "framer-motion";
import { Quote, PlayCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { teachers } from "@/lib/data/teachers";

export function PrincipalSection() {
  const principal = teachers[0];

  return (
    <section className="section-pad">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr]">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 to-gold-400/20 blur-xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-elevated">
                <Image
                  src={principal.photo}
                  alt={principal.name}
                  width={520}
                  height={620}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/90 to-transparent p-6 pt-16">
                  <p className="font-display text-lg font-bold text-white">
                    {principal.name}
                  </p>
                  <p className="text-sm text-gold-200">Kepala Madrasah</p>
                </div>
                <button className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-emerald-800 backdrop-blur transition-transform hover:scale-105">
                  <PlayCircle className="h-4 w-4" />
                  Video Sambutan
                </button>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                Sambutan Kepala Madrasah
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <Quote className="mt-6 h-10 w-10 text-emerald-500/30" />
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="mt-2 font-display text-2xl font-medium leading-snug text-foreground md:text-[1.7rem] balance">
                Selamat datang di MTsN 1 Probolinggo. Kami berkomitmen mencetak
                generasi yang{" "}
                <span className="text-gradient">cerdas intelektual</span>, matang
                spiritual, dan siap berkontribusi bagi umat dan bangsa.
              </blockquote>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Dengan dukungan tenaga pendidik profesional, kurikulum adaptif,
                dan lingkungan yang religius, kami hadir sebagai rumah kedua yang
                menumbuhkan potensi terbaik setiap ananda. Mari bersama-sama
                mewujudkan pendidikan bermutu yang berlandaskan iman dan takwa.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <motion.div className="mt-8">
                <ButtonLink href="/profil" variant="outline">
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
