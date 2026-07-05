"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { WhatsAppIcon } from "@/components/icons";
import { ServerIllustration } from "./server-illustration";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28">
      <AuroraBackground />

      <div className="container-px mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6"
          >
            <motion.div variants={item}>
              <Badge className="border-primary/30 bg-primary/10 text-foreground">
                <Sparkles className="size-3.5 text-primary" />
                Mendukung Node.js &amp; Python
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]"
            >
              Hosting Bot Premium{" "}
              <span className="text-gradient">Mulai Rp5.000</span>
              <span className="text-muted-foreground">/bulan</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Jalankan bot Node.js dan Python dengan performa tinggi, uptime stabil, dan
              harga yang tetap terjangkau. Dibuat untuk developer Discord, WhatsApp, dan
              Telegram yang butuh bot online 24 jam.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#paket">
                  Lihat Paket
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <WhatsAppButton variant="outline" size="lg">
                <WhatsAppIcon className="size-4 text-[#25D366]" />
                Hubungi Admin
              </WhatsAppButton>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm"
            >
              {[
                ["99.9%", "Uptime target"],
                ["±60 detik", "Waktu deploy"],
                ["24/7", "Monitoring"],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col">
                  <dt className="text-base font-semibold">{value}</dt>
                  <dd className="text-muted-foreground">{label}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <div className="relative lg:pl-6">
            <ServerIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
