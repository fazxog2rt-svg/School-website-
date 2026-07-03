"use client";

import { Download, FileText, Film, Presentation, Upload } from "lucide-react";
import { useAuth } from "@/lib/auth/auth-context";
import { roleGroup } from "@/lib/auth/roles";
import { DashTitle, Panel } from "@/components/dashboard/ui";
import { materials } from "@/lib/data/elearning";
import { formatDate } from "@/lib/utils";

const typeIcon = { PDF: FileText, Video: Film, Slide: Presentation };
const typeColor = {
  PDF: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  Video: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
  Slide: "bg-gold-100 text-gold-700 dark:bg-gold-500/15 dark:text-gold-300",
};

export default function MateriPage() {
  const { user } = useAuth();
  const canUpload = user && (roleGroup(user.role) === "guru" || roleGroup(user.role) === "admin");

  return (
    <>
      <DashTitle title="Materi Pembelajaran" subtitle="Kumpulan materi ajar dalam berbagai format." />
      <Panel
        action={
          canUpload ? (
            <button className="inline-flex h-10 items-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700">
              <Upload className="h-4 w-4" /> Unggah Materi
            </button>
          ) : undefined
        }
        title="Daftar Materi"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {materials.map((m) => {
            const Icon = typeIcon[m.type];
            return (
              <div key={m.id} className="flex items-center gap-4 rounded-2xl border border-border p-4 transition-colors hover:bg-secondary/50">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${typeColor[m.type]}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-foreground">{m.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {m.subject} · {m.type} · {m.size}
                  </p>
                  <p className="text-xs text-muted-foreground">{formatDate(m.date)}</p>
                </div>
                <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary" aria-label="Unduh">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </Panel>
    </>
  );
}
