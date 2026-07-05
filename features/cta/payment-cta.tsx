import { MessageCircle } from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { Reveal } from "@/components/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { WhatsAppIcon } from "@/components/icons";
import { paymentSteps } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function PaymentCta() {
  return (
    <section id="pesan" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border p-8 sm:p-14">
          <AuroraBackground className="opacity-80" />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-1 text-xs font-medium text-[#1a9e4b] dark:text-[#4ade80]">
                <MessageCircle className="size-3.5" />
                Pembayaran via WhatsApp
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Siap menjalankan bot Anda 24 jam nonstop?
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="max-w-xl text-pretty text-muted-foreground">
                Tanpa payment gateway, tanpa proses berbelit. Cukup hubungi admin, pesan
                sudah otomatis terisi, dan server Anda segera diproses.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <WhatsAppButton variant="whatsapp" size="lg" className="mt-2">
                <WhatsAppIcon className="size-5" />
                Pesan Sekarang via WhatsApp
              </WhatsAppButton>
            </Reveal>

            <Reveal delay={4}>
              <p className="text-sm text-muted-foreground">
                Admin: <span className="font-medium text-foreground">{siteConfig.whatsapp.display}</span>
              </p>
            </Reveal>

            <Reveal delay={5}>
              <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {paymentSteps.map((step) => (
                  <li key={step.label} className="flex items-center gap-2">
                    <step.icon className="size-4 text-primary" />
                    {step.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
