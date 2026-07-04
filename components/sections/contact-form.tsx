"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { getSupabaseBrowser } from "@/lib/supabase/client";
import { toast } from "@/lib/toast";

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    setLoading(true);

    const sb = getSupabaseBrowser();
    if (sb) {
      const { error } = await sb.from("contact_messages").insert({
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        subject: String(fd.get("subject") ?? ""),
        message: String(fd.get("message") ?? ""),
      });
      if (error) {
        toast("Gagal mengirim pesan: " + error.message, "error");
        setLoading(false);
        return;
      }
    } else {
      await new Promise((r) => setTimeout(r, 700));
    }

    setLoading(false);
    setSent(true);
    formEl.reset();
    setTimeout(() => setSent(false), 5000);
  }

  const field =
    "h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Nama Lengkap
          </label>
          <input name="name" required placeholder="Nama Anda" className={field} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            name="email"
            required
            type="email"
            placeholder="email@contoh.com"
            className={field}
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Subjek
        </label>
        <input name="subject" required placeholder="Perihal pesan" className={field} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Pesan
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tulis pesan Anda…"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? "Mengirim…" : "Kirim Pesan"}
        {!loading && <Send className="h-4 w-4" />}
      </Button>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 z-[120] flex -translate-x-1/2 items-center gap-3 rounded-full border border-emerald-600/30 bg-card px-5 py-3 shadow-elevated"
          >
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <p className="text-sm font-medium text-foreground">
              Pesan terkirim! Kami akan segera membalas.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
