"use client";

import { motion } from "framer-motion";
import { Cpu, MemoryStick, Zap } from "lucide-react";
import { DiscordIcon, TelegramIcon, WhatsAppIcon } from "@/components/icons";

const line = (delay: number) => ({
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { delay, duration: 0.4 } },
});

/** Ilustrasi "server card" bergaya terminal — ringan, murni komponen. */
export function ServerIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Glow di belakang kartu */}
      <div className="absolute inset-0 -z-10 scale-90 rounded-[2rem] bg-gradient-to-br from-primary/40 to-accent/30 opacity-40 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="glass overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]"
      >
        {/* Titlebar */}
        <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-yellow-400/80" />
          <span className="size-3 rounded-full bg-green-400/80" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            nimbus@node-01: ~/bot
          </span>
        </div>

        {/* Terminal body */}
        <div className="space-y-2 px-4 py-4 font-mono text-[13px] leading-relaxed">
          <motion.p variants={line(0.5)} initial="hidden" animate="visible" className="text-muted-foreground">
            <span className="text-primary">$</span> npm start
          </motion.p>
          <motion.p variants={line(0.9)} initial="hidden" animate="visible">
            <span className="text-accent">✓</span> Bot terhubung ke gateway
          </motion.p>
          <motion.p variants={line(1.3)} initial="hidden" animate="visible">
            <span className="text-accent">✓</span> 3 module dimuat
          </motion.p>
          <motion.p variants={line(1.7)} initial="hidden" animate="visible" className="text-emerald-400">
            ● Online — uptime 100%
          </motion.p>
        </div>

        {/* Resource bar */}
        <div className="grid grid-cols-3 gap-px border-t border-border/70 bg-border/40">
          {[
            { icon: Cpu, label: "CPU", value: "12%" },
            { icon: MemoryStick, label: "RAM", value: "310MB" },
            { icon: Zap, label: "Ping", value: "42ms" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1 bg-card/70 px-3 py-3">
              <item.icon className="size-4 text-primary" />
              <span className="text-[11px] text-muted-foreground">{item.label}</span>
              <span className="text-sm font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Chip platform mengambang */}
      <FloatingChip className="-left-6 top-10" delay={0.9}>
        <DiscordIcon className="size-5 text-[#5865F2]" />
      </FloatingChip>
      <FloatingChip className="-right-5 top-24" delay={1.2}>
        <WhatsAppIcon className="size-5 text-[#25D366]" />
      </FloatingChip>
      <FloatingChip className="-bottom-4 left-10" delay={1.5}>
        <TelegramIcon className="size-5 text-[#229ED9]" />
      </FloatingChip>
    </div>
  );
}

function FloatingChip({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay, duration: 0.4 },
        scale: { delay, duration: 0.4 },
        y: { delay: delay + 0.4, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`glass absolute flex size-11 items-center justify-center rounded-xl shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
