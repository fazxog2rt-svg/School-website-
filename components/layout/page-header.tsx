import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Crumb = { label: string; href?: string };

export function PageHeader({
  title,
  description,
  crumbs = [],
}: {
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 pt-28 pb-16 text-white md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-emerald bg-[size:40px_40px] opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-gold-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="container relative">
        <Reveal>
          <nav className="flex items-center gap-1.5 text-sm text-emerald-100/70">
            <Link href="/" className="hover:text-white">
              Beranda
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl balance">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg text-emerald-50/80 balance">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
