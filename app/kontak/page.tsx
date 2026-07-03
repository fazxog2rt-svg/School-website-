import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi MTsN 1 Probolinggo — alamat, telepon, email, dan media sosial resmi.",
};

const contactInfo = [
  { icon: MapPin, label: "Alamat", value: site.address },
  { icon: Phone, label: "Telepon", value: site.phone },
  { icon: Mail, label: "Email", value: site.email },
  { icon: Clock, label: "Jam Layanan", value: "Senin–Sabtu, 07.00–15.00 WIB" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: site.socials.instagram },
  { icon: Facebook, label: "Facebook", href: site.socials.facebook },
  { icon: Youtube, label: "YouTube", href: site.socials.youtube },
];

export default function KontakPage() {
  return (
    <>
      <PageHeader
        title="Hubungi Kami"
        description="Punya pertanyaan? Kami siap membantu. Sampaikan pesan Anda melalui kanal berikut."
        crumbs={[{ label: "Kontak" }]}
      />

      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <Reveal key={info.label} delay={i * 0.06}>
                <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                    <info.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {info.label}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {info.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="text-sm font-semibold text-foreground">
                  Ikuti Kami
                </p>
                <div className="mt-3 flex gap-3">
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white transition-transform hover:scale-105"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors hover:bg-emerald-600 hover:text-white"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Kirim Pesan
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Isi formulir di bawah, tim kami akan segera merespons.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <div className="container mt-10">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Peta Lokasi MTsN 1 Probolinggo"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.mapsQuery
                )}&output=embed`}
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
