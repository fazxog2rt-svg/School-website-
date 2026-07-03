"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  CornerDownLeft,
  Home,
  Users,
  Trophy,
  Newspaper,
  Sparkles,
  Image as ImageIcon,
  Phone,
  Building2,
  GraduationCap,
  Moon,
  CalendarDays,
  Clock,
  Megaphone,
  BookOpen,
  Users2,
  LogIn,
  LayoutDashboard,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import * as React from "react";
import { cn } from "@/lib/utils";

type Command = {
  label: string;
  href?: string;
  action?: () => void;
  icon: React.ComponentType<{ className?: string }>;
  group: string;
  keywords?: string;
};

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const router = useRouter();
  const { setTheme } = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const commands = React.useMemo<Command[]>(
    () => [
      { label: "Beranda", href: "/", icon: Home, group: "Navigasi" },
      { label: "Profil Madrasah", href: "/profil", icon: Building2, group: "Navigasi" },
      { label: "Profil Guru", href: "/guru", icon: Users, group: "Navigasi" },
      { label: "Prestasi", href: "/prestasi", icon: Trophy, group: "Navigasi" },
      { label: "Berita", href: "/berita", icon: Newspaper, group: "Navigasi" },
      { label: "Ekstrakurikuler", href: "/ekstrakurikuler", icon: Sparkles, group: "Navigasi" },
      { label: "Galeri", href: "/galeri", icon: ImageIcon, group: "Navigasi" },
      { label: "Kontak", href: "/kontak", icon: Phone, group: "Navigasi" },
      { label: "Kalender Akademik", href: "/kalender", icon: CalendarDays, group: "Akademik" },
      { label: "Jadwal Pelajaran", href: "/jadwal", icon: Clock, group: "Akademik" },
      { label: "Pengumuman", href: "/pengumuman", icon: Megaphone, group: "Akademik" },
      { label: "Perpustakaan Digital", href: "/perpustakaan", icon: BookOpen, group: "Akademik" },
      { label: "Alumni", href: "/alumni", icon: Users2, group: "Akademik" },
      { label: "Masuk / Portal", href: "/login", icon: LogIn, group: "Portal", keywords: "login akun" },
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, group: "Portal" },
      { label: "Daftar PPDB Online", href: "/ppdb", icon: GraduationCap, group: "Aksi", keywords: "pendaftaran daftar" },
      {
        label: "Aktifkan Mode Gelap",
        action: () => setTheme("dark"),
        icon: Moon,
        group: "Preferensi",
        keywords: "dark tema",
      },
      {
        label: "Aktifkan Mode Terang",
        action: () => setTheme("light"),
        icon: Sparkles,
        group: "Preferensi",
        keywords: "light tema",
      },
    ],
    [setTheme]
  );

  const filtered = React.useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return commands;
    return commands.filter((c) =>
      (c.label + " " + (c.keywords ?? "")).toLowerCase().includes(q)
    );
  }, [commands, query]);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  React.useEffect(() => setActive(0), [query]);

  function run(cmd: Command) {
    setOpen(false);
    if (cmd.href) router.push(cmd.href);
    cmd.action?.();
  }

  function onListKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[active]) {
      e.preventDefault();
      run(filtered[active]);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Buka pencarian cepat"
        className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary md:inline-flex"
      >
        <Search className="h-4 w-4" />
        <span>Cari…</span>
        <kbd className="ml-2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-semibold">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-emerald-950/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.18 }}
              className="glass-strong relative w-full max-w-xl overflow-hidden rounded-2xl shadow-elevated"
              onKeyDown={onListKey}
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari halaman, aksi, atau preferensi…"
                  className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  ESC
                </kbd>
              </div>
              <div className="max-h-[50vh] overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                    Tidak ada hasil untuk “{query}”.
                  </p>
                )}
                {filtered.map((cmd, i) => (
                  <button
                    key={cmd.label}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => run(cmd)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                      i === active
                        ? "bg-emerald-600 text-white"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    <cmd.icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1">{cmd.label}</span>
                    <span
                      className={cn(
                        "text-[11px]",
                        i === active ? "text-white/70" : "text-muted-foreground"
                      )}
                    >
                      {cmd.group}
                    </span>
                    {i === active && <CornerDownLeft className="h-3.5 w-3.5" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
