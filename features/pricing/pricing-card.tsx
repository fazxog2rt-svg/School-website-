import { Check, Cpu, HardDrive, MemoryStick, Wifi } from "lucide-react";
import { Card } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { cn, formatRupiah } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import type { Plan } from "@/types";

const specIcons = [MemoryStick, Cpu, HardDrive, Wifi] as const;

export function PricingCard({ plan }: { plan: Plan }) {
  const specs = [plan.ram, plan.cpu, plan.storage, plan.bandwidth];
  const message = `${siteConfig.whatsapp.defaultMessage} Saya tertarik dengan paket ${plan.name} (${formatRupiah(
    plan.price
  )}/bulan).`;

  return (
    <Card
      className={cn(
        "relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5",
        plan.popular
          ? "border-primary/50 bg-card/80 shadow-[0_24px_60px_-24px_hsl(var(--primary)/0.55)]"
          : "hover:border-primary/30"
      )}
    >
      {plan.popular && (
        <>
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent" />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
            Paling Populer
          </span>
        </>
      )}

      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{plan.name}</h3>
        <p className="text-sm text-muted-foreground">{plan.tagline}</p>
      </div>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight">
          {formatRupiah(plan.price)}
        </span>
        <span className="text-sm text-muted-foreground">/bulan</span>
      </div>

      <ul className="mt-6 space-y-3 text-sm">
        {specs.map((spec, i) => {
          const Icon = specIcons[i];
          return (
            <li key={spec} className="flex items-center gap-3">
              <span className="flex size-6 items-center justify-center rounded-md bg-muted/70 text-primary">
                <Icon className="size-3.5" />
              </span>
              <span className="text-foreground/90">{spec}</span>
            </li>
          );
        })}
        <li className="flex items-center gap-3">
          <span className="flex size-6 items-center justify-center rounded-md bg-muted/70 text-primary">
            <Check className="size-3.5" />
          </span>
          <span className="text-foreground/90">Node.js &amp; Python</span>
        </li>
      </ul>

      <WhatsAppButton
        message={message}
        variant={plan.popular ? "default" : "outline"}
        className="mt-7 w-full"
      >
        Pilih {plan.name}
      </WhatsAppButton>
    </Card>
  );
}
