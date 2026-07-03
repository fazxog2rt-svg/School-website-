import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { schoolValues } from "@/lib/data/timeline";
import { site } from "@/lib/site";
import { Check } from "lucide-react";

export function ValuesSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-secondary/40">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Visi & Misi"
              title="Fondasi Menuju Insan Paripurna"
              description={site.vision}
            />
            <ul className="mt-8 space-y-4">
              {site.missions.map((mission, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <li className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                      {mission}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {schoolValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft card-hover">
                  <span className="text-3xl">{value.emoji}</span>
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
      </div>
    </section>
  );
}
