import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/icons";
import { siteConfig, waLink } from "@/lib/site";

const columns = [
  {
    title: "Produk",
    links: [
      { label: "Paket Hosting", href: "#paket" },
      { label: "Fitur", href: "#fitur" },
      { label: "Cara Order", href: "#cara-order" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#tentang" },
      { label: "Testimoni", href: "#testimoni" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "Kontak", href: waLink() },
      { label: "Kebijakan Privasi", href: "#kebijakan" },
      { label: "Syarat Layanan", href: "#syarat" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="tentang" className="relative border-t border-border">
      <div className="container-px mx-auto max-w-6xl py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Hosting bot premium untuk Node.js dan Python. Kami fokus pada uptime,
              kecepatan, dan dukungan yang jujur — supaya bot Anda tetap online tanpa
              drama.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <WhatsAppIcon className="size-4" />
              {siteConfig.whatsapp.display}
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}. Seluruh hak cipta
            dilindungi.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-flex size-2 rounded-full bg-[#25D366] shadow-[0_0_12px_2px_rgba(37,211,102,0.6)]" />
            Semua sistem beroperasi normal
          </p>
        </div>
      </div>
    </footer>
  );
}
