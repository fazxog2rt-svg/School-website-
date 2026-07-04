"use client";

import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { DashTitle, Panel } from "@/components/dashboard/ui";
import { news as allNews } from "@/lib/data/news";
import { formatDate } from "@/lib/utils";
import { toast } from "@/lib/toast";

export default function BeritaAdminPage() {
  const [news, setNews] = React.useState(allNews);

  function removeNews(id: string, title: string) {
    setNews((p) => p.filter((n) => n.id !== id));
    toast(`Berita "${title.slice(0, 24)}…" dihapus.`, "info");
  }

  return (
    <>
      <DashTitle title="Manajemen Berita" subtitle="Buat, edit, dan publikasikan berita madrasah." />
      <Panel
        action={
          <button
            onClick={() => toast("Editor berita akan terhubung ke CMS/backend.", "info")}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            <Plus className="h-4 w-4" /> Tulis Berita
          </button>
        }
        title="Daftar Berita"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 font-medium">Judul</th>
                <th className="pb-3 font-medium">Kategori</th>
                <th className="pb-3 font-medium">Tanggal</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {news.map((n) => (
                <tr key={n.id} className="border-b border-border last:border-0">
                  <td className="max-w-xs py-3">
                    <p className="truncate font-medium text-foreground">{n.title}</p>
                  </td>
                  <td className="py-3 text-muted-foreground">{n.category}</td>
                  <td className="py-3 text-muted-foreground">{formatDate(n.date)}</td>
                  <td className="py-3">
                    <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                      Publish
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link href="/berita" className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary" aria-label="Lihat"><Eye className="h-4 w-4" /></Link>
                      <button onClick={() => toast(`Mengedit "${n.title.slice(0, 20)}…" (demo).`, "info")} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-emerald-600" aria-label="Edit"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => removeNews(n.id, n.title)} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-rose-500/15" aria-label="Hapus"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </>
  );
}
