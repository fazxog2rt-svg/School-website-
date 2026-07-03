import { Award, GraduationCap, Mail } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Teacher } from "@/lib/data/teachers";

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft card-hover">
      <div className="relative overflow-hidden">
        <Image
          src={teacher.photo}
          alt={teacher.name}
          width={400}
          height={400}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Badge tone="gold" className="absolute left-3 top-3">
          {teacher.category}
        </Badge>
        <a
          href={`mailto:${teacher.email}`}
          aria-label={`Email ${teacher.name}`}
          className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white/90 text-emerald-700 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-tight text-foreground">
          {teacher.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
          {teacher.subject}
        </p>

        <div className="mt-4 space-y-2.5 border-t border-border pt-4 text-sm text-muted-foreground">
          <p className="flex items-start gap-2">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            <span>{teacher.education}</span>
          </p>
          <p className="flex items-start gap-2">
            <Award className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
            <span>{teacher.achievements[0]}</span>
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {teacher.certifications.map((c) => (
            <span
              key={c}
              className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground/80">
          Pengalaman mengajar {teacher.experience}
        </p>
      </div>
    </article>
  );
}
