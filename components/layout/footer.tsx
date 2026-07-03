import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { academicLinks, navLinks, site } from "@/lib/site";

const quickLinks = [
  { label: "PPDB Online", href: "/ppdb" },
  { label: "Masuk Portal", href: "/login" },
  ...academicLinks,
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-emerald-950 text-emerald-50">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(52,211,153,0.5), transparent 40%), radial-gradient(circle at 80% 0%, rgba(214,169,75,0.4), transparent 35%)",
        }}
      />
      <div className="container relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-bold">MTsN 1</p>
                <p className="text-xs uppercase tracking-[0.18em] text-gold-300">
                  Probolinggo
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-emerald-100/80">
              {site.motto}. Madrasah unggul yang memadukan keimanan, ilmu, dan
              akhlak mulia.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Instagram, href: site.socials.instagram },
                { icon: Facebook, href: site.socials.facebook },
                { icon: Youtube, href: site.socials.youtube },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100/15 bg-emerald-100/5 transition-colors hover:bg-emerald-600"
                  aria-label="Media sosial"
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-300">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-emerald-100/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-300">
              Tautan Cepat
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-emerald-100/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-300">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-emerald-100/75">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-gold-300" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold-300" />
                <span>{site.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold-300" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-emerald-100/10 pt-8 text-sm text-emerald-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Seluruh hak cipta
            dilindungi.
          </p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan
            <span className="text-gold-300">♥</span>
            untuk pendidikan yang lebih baik.
          </p>
        </div>
      </div>
    </footer>
  );
}
