import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PrincipalSection } from "@/components/sections/principal";
import { timeline, schoolValues } from "@/lib/data/timeline";
import { site } from "@/lib/site";
import { Target, Eye, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Profil Madrasah",
  description:
    "Sejarah, visi misi, nilai, dan budaya MTsN 1 Probolinggo — madrasah unggul yang memadukan iman, ilmu, dan akhlak.",
};

export default function ProfilPage() {
  return (
    <>
      <PageHeader
        title="Profil Madrasah"
        description="Mengenal lebih dekat perjalanan, visi, dan nilai-nilai yang menjadi fondasi MTsN 1 Probolinggo."
        crumbs={[{ label: "Profil" }]}
      />

      {/* Vision & Mission */}
      <section className="section-pad">
        <div className="container grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-white shadow-elevated md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <Eye className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold">Visi</h2>
              <p className="mt-4 text-lg leading-relaxed text-emerald-50/90 balance">
                {site.vision}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-100 text-gold-700 dark:bg-gold-500/15 dark:text-gold-300">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
                Misi
              </h2>
              <ul className="mt-4 space-y-3">
                {site.missions.map((m, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* History timeline */}
      <section className="section-pad bg-secondary/40">
        <div className="container">
          <SectionHeading
            eyebrow="Perjalanan Kami"
            title="Sejarah & Tonggak Pencapaian"
            description="Lebih dari empat dekade mengabdi untuk pendidikan bangsa."
          />
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-emerald-500 via-emerald-400/50 to-transparent md:left-1/2" />
            <div className="space-y-10">
              {timeline.map((event, i) => (
                <Reveal key={event.year} delay={i * 0.05}>
                  <div
                    className={`relative flex flex-col gap-3 md:flex-row md:items-center ${
                      i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                    }`}
                  >
                    <div className="md:w-1/2 md:px-8">
                      <div className="ml-10 rounded-2xl border border-border bg-card p-5 shadow-soft md:ml-0">
                        <span className="font-display text-xl font-bold text-emerald-600 dark:text-emerald-400">
                          {event.year}
                        </span>
                        <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <span className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-gold-400 md:left-1/2 md:top-1/2 md:-translate-y-1/2" />
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="Nilai & Budaya"
            title="Karakter yang Kami Tanamkan"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {schoolValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-soft card-hover">
                  <span className="text-4xl">{value.emoji}</span>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PrincipalSection />
    </>
  );
}
