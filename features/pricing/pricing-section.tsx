import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { plans } from "@/lib/data";
import { PricingCard } from "./pricing-card";

export function PricingSection() {
  return (
    <section id="paket" className="relative py-20 sm:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Paket Hosting"
          title="Harga jujur, tanpa biaya tersembunyi"
          description="Pilih paket sesuai skala bot Anda. Semua paket mendukung Node.js dan Python, dan bisa di-upgrade kapan saja."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={1}>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" />
            Pembayaran langsung ke admin lewat WhatsApp — transparan, tanpa payment
            gateway.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
