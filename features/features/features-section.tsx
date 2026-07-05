import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { features } from "@/lib/data";

export function FeaturesSection() {
  return (
    <section id="fitur" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Kenapa Nimbus"
          title="Infrastruktur yang dirancang untuk bot yang serius"
          description="Setiap paket berjalan di atas perangkat keras cepat dengan resource yang benar-benar dialokasikan untuk Anda — bukan janji di brosur."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i % 3}>
              <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/80">
                <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-muted/60 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
