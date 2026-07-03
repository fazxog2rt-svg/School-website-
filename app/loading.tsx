import { GraduationCap } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <div className="h-16 w-16 animate-spin-slow rounded-full border-4 border-emerald-500/20 border-t-emerald-600" />
          <span className="absolute inset-0 flex items-center justify-center text-emerald-600">
            <GraduationCap className="h-7 w-7" />
          </span>
        </div>
        <p className="animate-pulse text-sm font-medium text-muted-foreground">
          Memuat MTsN 1 Probolinggo…
        </p>
      </div>
    </div>
  );
}
