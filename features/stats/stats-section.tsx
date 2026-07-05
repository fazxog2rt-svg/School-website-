import { Reveal } from "@/components/reveal";
import { stats } from "@/lib/data";
import { StatItem } from "./stat-item";

export function StatsSection() {
  return (
    <section className="relative border-y border-border bg-muted/30">
      <div className="container-px mx-auto max-w-6xl py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i}>
              <StatItem stat={stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
