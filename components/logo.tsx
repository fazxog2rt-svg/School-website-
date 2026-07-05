import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative flex size-9 items-center justify-center">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-90 shadow-[0_6px_20px_-6px_hsl(var(--primary)/0.7)]" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative size-5 text-primary-foreground"
          aria-hidden="true"
        >
          <path
            d="M6.5 16.5a3.5 3.5 0 0 1-.4-6.977A4.5 4.5 0 0 1 15 8.5a3.5 3.5 0 0 1 2.4 6.06"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12v5m0 0-2-2m2 2 2-2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
    </span>
  );
}
