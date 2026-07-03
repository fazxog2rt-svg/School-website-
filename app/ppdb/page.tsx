import type { Metadata } from "next";
import { CalendarClock, FileCheck2, ShieldCheck, Wallet } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { PpdbForm } from "@/components/sections/ppdb-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "PPDB Online",
  description:
    "Pendaftaran Peserta Didik Baru MTsN 1 Probolinggo TA 2026/2027 — daftar online, mudah, cepat, dan transparan.",
};

const highlights = [
  { icon: FileCheck2, title: "Proses Online", desc: "Daftar dari mana saja tanpa antre." },
  { icon: CalendarClock, title: "Real-time Tracking", desc: "Pantau status pendaftaran kapan pun." },
  { icon: Wallet, title: "Gratis Pendaftaran", desc: "Tidak dipungut biaya pendaftaran." },
  { icon: ShieldCheck, title: "Data Aman", desc: "Privasi & keamanan data terjaga." },
];

export default function PpdbPage() {
  return (
    <>
      <PageHeader
        title="PPDB Online 2026/2027"
        description="Selangkah lagi menuju keluarga besar MTsN 1 Probolinggo. Lengkapi formulir berikut."
        crumbs={[{ label: "PPDB" }]}
      />

      <section className="section-pad">
        <div className="container">
          <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-semibold text-foreground">{h.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <PpdbForm />
        </div>
      </section>
    </>
  );
}
