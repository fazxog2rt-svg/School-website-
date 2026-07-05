export const siteConfig = {
  name: "Nimbus",
  fullName: "Nimbus Bot Hosting",
  domain: "nimbushost.id",
  url: "https://nimbushost.id",
  description:
    "Hosting bot premium untuk Node.js dan Python. Jalankan bot Discord, WhatsApp, dan Telegram dengan uptime stabil 99.9% mulai Rp5.000/bulan.",
  tagline: "Hosting bot yang tenang, seperti awan.",
  whatsapp: {
    // E.164 tanpa tanda + untuk wa.me
    number: "6283876835629",
    display: "+62 838-7683-5629",
    defaultMessage: "Halo kak, saya ingin memesan Hosting Bot.",
  },
  email: "halo@nimbushost.id",
} as const;

export function waLink(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}

export const navLinks = [
  { label: "Paket", href: "#paket" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Order", href: "#cara-order" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
] as const;
