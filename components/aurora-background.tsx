import { cn } from "@/lib/utils";

/**
 * Latar aurora yang lembut + grid halus. Murni CSS, tanpa cost render JS,
 * dan dinonaktifkan gerakannya lewat prefers-reduced-motion di globals.css.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[46rem] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.28),transparent_60%)] blur-3xl" />
      <div className="absolute -top-24 right-[8%] h-[28rem] w-[28rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.20),transparent_60%)] blur-3xl [animation-delay:-6s]" />
      <div className="absolute top-[20%] left-[2%] h-[24rem] w-[24rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,hsl(280_90%_60%/0.16),transparent_60%)] blur-3xl [animation-delay:-12s]" />
    </div>
  );
}
