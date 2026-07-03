import Image from "next/image";
import { Clock, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { NewsItem } from "@/lib/data/news";
import { formatDate } from "@/lib/utils";

export function NewsCard({ item, featured }: { item: NewsItem; featured?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft card-hover ${
        featured ? "md:flex-row" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "md:w-1/2" : ""}`}>
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={500}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            featured ? "h-56 md:h-full" : "aspect-[16/10]"
          }`}
        />
        <Badge className="absolute left-3 top-3">{item.category}</Badge>
        {item.trending && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-gold-500 px-2.5 py-1 text-[11px] font-bold text-white">
            <TrendingUp className="h-3 w-3" /> Trending
          </span>
        )}
      </div>
      <div className={`flex flex-1 flex-col p-5 ${featured ? "md:justify-center md:p-8" : ""}`}>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{formatDate(item.date)}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {item.readingTime} mnt baca
          </span>
        </div>
        <h3
          className={`mt-2 font-display font-bold leading-snug text-foreground transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400 ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
