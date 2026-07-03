"use client";

import { MessagesSquare, Plus } from "lucide-react";
import Image from "next/image";
import { DashTitle, Panel } from "@/components/dashboard/ui";
import { forumThreads } from "@/lib/data/elearning";

export default function ForumPage() {
  return (
    <>
      <DashTitle title="Forum Diskusi" subtitle="Ruang tanya jawab dan diskusi antar siswa & guru." />
      <Panel
        title="Topik Diskusi"
        action={
          <button className="inline-flex h-10 items-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700">
            <Plus className="h-4 w-4" /> Buat Topik
          </button>
        }
      >
        <ul className="space-y-3">
          {forumThreads.map((t) => (
            <li key={t.id} className="flex gap-4 rounded-2xl border border-border p-4 transition-colors hover:bg-secondary/50">
              <Image src={t.avatar} alt={t.author} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              <div className="flex-1">
                <p className="font-semibold text-foreground">{t.title}</p>
                <p className="text-xs text-muted-foreground">
                  oleh {t.author} · {t.subject} · {t.lastActive}
                </p>
              </div>
              <span className="flex items-center gap-1.5 self-center rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground">
                <MessagesSquare className="h-3.5 w-3.5" /> {t.replies}
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
