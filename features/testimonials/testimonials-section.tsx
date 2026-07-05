import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating ${rating} dari 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="flex h-full flex-col gap-4 p-6">
      <Stars rating={t.rating} />
      <p className="flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
        “{t.content}”
      </p>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-accent/70 text-sm font-semibold text-primary-foreground">
          {t.initials}
        </span>
        <div>
          <p className="text-sm font-medium">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimoni"
          title="Dipercaya oleh developer dan komunitas"
          description="Beberapa cerita nyata dari pengguna yang menjalankan botnya bersama kami."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i % 3}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
