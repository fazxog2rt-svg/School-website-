import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Achievement } from "@/lib/data/achievements";

const levelTone: Record<Achievement["level"], "emerald" | "gold" | "blue" | "muted"> = {
  Internasional: "gold",
  Nasional: "emerald",
  Provinsi: "blue",
  Kota: "muted",
};

export function AchievementCard({ item }: { item: Achievement }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft card-hover">
      <div className="relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={500}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <Badge tone={levelTone[item.level]} className="absolute left-3 top-3">
          {item.level}
        </Badge>
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-emerald-800 backdrop-blur">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-foreground">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {item.year}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {item.level}
          </span>
        </div>
      </div>
    </article>
  );
}
