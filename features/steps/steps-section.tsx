import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/data";

export function StepsSection() {
  return (
    <section id="cara-order" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Cara Order"
          title="Dari pilih paket ke bot online dalam lima langkah"
          description="Prosesnya sengaja dibuat sederhana. Tidak perlu akun rumit atau verifikasi berhari-hari."
        />

        <ol className="relative mt-16 space-y-8">
          {/* Garis vertikal timeline */}
          <span
            aria-hidden="true"
            className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent"
          />

          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i} as="li">
              <div className="relative flex gap-5">
                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card text-sm font-semibold text-primary shadow-[0_0_0_5px_hsl(var(--background))]">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
