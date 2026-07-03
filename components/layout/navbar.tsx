"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, GraduationCap, LogIn, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { CommandPalette } from "@/components/layout/command-palette";
import { academicLinks, navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [akademik, setAkademik] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong border-b shadow-soft"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4 md:h-18">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-soft transition-transform group-hover:scale-105">
            <GraduationCap className="h-6 w-6" />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gold-400 ring-2 ring-background" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight text-foreground">
              MTsN 1
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
              Probolinggo
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-emerald-700 dark:text-emerald-300"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-emerald-100 dark:bg-emerald-500/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}

          {/* Akademik dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAkademik(true)}
            onMouseLeave={() => setAkademik(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                akademik ? "text-emerald-700 dark:text-emerald-300" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Akademik
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", akademik && "rotate-180")} />
            </button>
            <AnimatePresence>
              {akademik && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="glass-strong absolute left-0 top-full w-56 rounded-2xl p-2 shadow-elevated"
                >
                  {academicLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      {l.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <CommandPalette />
          <ThemeToggle />
          <Link
            href="/login"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary sm:inline-flex"
            aria-label="Masuk / Portal"
            title="Masuk / Portal"
          >
            <LogIn className="h-[1.15rem] w-[1.15rem]" />
          </Link>
          <ButtonLink href="/ppdb" size="sm" className="hidden sm:inline-flex">
            PPDB Online
          </ButtonLink>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong overflow-hidden border-t lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {[...navLinks, ...academicLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <ButtonLink href="/login" variant="outline" className="w-full">
                  Masuk Portal
                </ButtonLink>
                <ButtonLink href="/ppdb" className="w-full">
                  PPDB Online
                </ButtonLink>
              </div>
              <p className="mt-3 px-4 text-xs text-muted-foreground">
                {site.address}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
