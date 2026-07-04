"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bell, GraduationCap, LogOut, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { useAuth } from "@/lib/auth/auth-context";
import { roleLabels } from "@/lib/auth/roles";
import { getDashboardNav } from "@/lib/dashboard-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { toast } from "@/lib/toast";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { user, ready, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (ready && !user) router.replace("/login");
  }, [ready, user, router]);

  React.useEffect(() => setMobileOpen(false), [pathname]);

  if (!ready || !user) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin-slow rounded-full border-4 border-emerald-500/20 border-t-emerald-600" />
      </div>
    );
  }

  const navItems = getDashboardNav(user.role);

  const SidebarContent = (
    <div className="flex h-full flex-col">
      <Link href="/" className="flex items-center gap-3 px-6 py-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
          <GraduationCap className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="font-display text-sm font-bold text-foreground">MTsN 1</p>
          <p className="text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Dashboard
          </p>
        </div>
      </Link>

      <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-2">
        {navItems.map((item) => {
          const active =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-emerald-600 text-white shadow-soft"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className="h-[18px] w-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3">
          <Image
            src={user.avatar}
            alt={user.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">
              {user.name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {roleLabels[user.role]}
            </p>
          </div>
          <button
            onClick={() => {
              logout();
              router.push("/login");
            }}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-rose-500/15"
            aria-label="Keluar"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-dvh bg-secondary/30">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-border bg-card lg:block">
        {SidebarContent}
      </aside>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-emerald-950/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-card lg:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute right-3 top-4 flex h-8 w-8 items-center justify-center rounded-lg hover:bg-secondary"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>
              {SidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-border bg-card/80 px-4 backdrop-blur-xl md:px-8">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="relative hidden max-w-xs flex-1 sm:block">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Cari…"
              className="h-10 w-full rounded-full border border-border bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => toast("Anda memiliki 3 notifikasi baru.", "info")}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary"
            >
              <Bell className="h-[18px] w-[18px]" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-gold-400" />
            </button>
            <ThemeToggle />
          </div>
        </header>

        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
