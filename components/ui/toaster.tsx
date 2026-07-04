"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info, XCircle } from "lucide-react";
import * as React from "react";
import { onToast, type ToastPayload } from "@/lib/toast";
import { cn } from "@/lib/utils";

const icons = {
  success: CheckCircle2,
  info: Info,
  error: XCircle,
};

const tones = {
  success: "text-emerald-600",
  info: "text-sky-600",
  error: "text-rose-600",
};

export function Toaster() {
  const [toasts, setToasts] = React.useState<ToastPayload[]>([]);

  React.useEffect(() => {
    return onToast(({ message, type }) => {
      const id = Date.now() + Math.random();
      setToasts((t) => [...t, { id, message, type }]);
      setTimeout(() => {
        setToasts((t) => t.filter((x) => x.id !== id));
      }, 3800);
    });
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[200] flex w-full max-w-sm -translate-x-1/2 flex-col items-center gap-2 px-4">
      <AnimatePresence>
        {toasts.map((t) => {
          const Icon = icons[t.type];
          return (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="pointer-events-auto flex w-full items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-elevated"
            >
              <Icon className={cn("h-5 w-5 shrink-0", tones[t.type])} />
              <p className="text-sm font-medium text-foreground">{t.message}</p>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
