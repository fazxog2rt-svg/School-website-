import {
  Activity,
  CircuitBoard,
  Cpu,
  Gauge,
  HardDrive,
  Headphones,
  MemoryStick,
  Network,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Timer,
  Zap,
} from "lucide-react";
import type { FaqItem, Feature, Plan, Stat, Step, Testimonial } from "@/types";

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 5000,
    tagline: "Untuk bot kecil & proyek pertama",
    ram: "1 GB RAM",
    cpu: "1 vCPU",
    storage: "5 GB SSD NVMe",
    bandwidth: "Bandwidth Unlimited",
  },
  {
    id: "basic",
    name: "Basic",
    price: 8000,
    tagline: "Untuk bot yang mulai bertumbuh",
    ram: "2 GB RAM",
    cpu: "1 vCPU",
    storage: "10 GB SSD NVMe",
    bandwidth: "Bandwidth Unlimited",
  },
  {
    id: "standard",
    name: "Standard",
    price: 10000,
    tagline: "Untuk komunitas yang aktif",
    ram: "3 GB RAM",
    cpu: "2 vCPU",
    storage: "15 GB SSD NVMe",
    bandwidth: "Bandwidth Unlimited",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 15000,
    tagline: "Untuk bot skala besar & multi-guild",
    ram: "4 GB RAM",
    cpu: "2 vCPU",
    storage: "20 GB SSD NVMe",
    bandwidth: "Bandwidth Unlimited",
  },
];

export const features: Feature[] = [
  {
    icon: HardDrive,
    title: "SSD NVMe",
    description:
      "Penyimpanan NVMe berkecepatan tinggi agar bot melakukan booting dan membaca data dalam hitungan milidetik.",
  },
  {
    icon: Cpu,
    title: "CPU High Performance",
    description:
      "Prosesor generasi baru dengan clock tinggi untuk memproses event bot tanpa antre.",
  },
  {
    icon: MemoryStick,
    title: "RAM Dedicated",
    description:
      "Alokasi RAM khusus per instance. Tidak dibagi diam-diam dengan pengguna lain.",
  },
  {
    icon: Network,
    title: "Network Stabil",
    description:
      "Jaringan dengan latensi rendah dan rute yang dioptimalkan menuju server Discord & Telegram.",
  },
  {
    icon: RefreshCw,
    title: "Auto Restart",
    description:
      "Bot yang crash akan otomatis dinyalakan kembali, jadi layanan tetap berjalan tanpa Anda tunggui.",
  },
  {
    icon: Activity,
    title: "Monitoring 24/7",
    description:
      "Kesehatan server dipantau sepanjang waktu sehingga gangguan tertangani lebih awal.",
  },
  {
    icon: ShieldCheck,
    title: "DDoS Protection",
    description:
      "Proteksi lapis jaringan menyaring serangan sebelum menyentuh instance Anda.",
  },
  {
    icon: Rocket,
    title: "Deploy Cepat",
    description:
      "Server aktif tak lama setelah pembayaran terkonfirmasi. Tanpa antrean berhari-hari.",
  },
  {
    icon: CircuitBoard,
    title: "Support Node.js",
    description:
      "Kompatibel penuh dengan runtime Node.js modern untuk bot discord.js, Baileys, dan lainnya.",
  },
  {
    icon: Zap,
    title: "Support Python",
    description:
      "Jalankan bot berbasis discord.py, aiogram, atau Pyrogram dengan dependency lengkap.",
  },
  {
    icon: Gauge,
    title: "Uptime 99.9%",
    description:
      "Infrastruktur yang dirancang untuk tetap online, dengan target uptime 99.9% setiap bulan.",
  },
  {
    icon: Headphones,
    title: "Support Responsif",
    description:
      "Admin membantu langsung lewat WhatsApp tanpa tiket berlapis atau balasan robot.",
  },
];

export const stats: Stat[] = [
  { value: 99.9, suffix: "%", label: "Target Uptime", decimals: 1 },
  { value: 60, suffix: "s", label: "Rata-rata Deploy" },
  { value: 24, suffix: "/7", label: "Monitoring" },
  { value: 100, suffix: "%", label: "Resource Dedicated" },
];

export const steps: Step[] = [
  {
    title: "Pilih Paket",
    description:
      "Tentukan paket yang sesuai dengan kebutuhan bot Anda, dari Starter hingga Premium.",
  },
  {
    title: "Hubungi Admin",
    description:
      "Klik tombol WhatsApp. Pesan otomatis terisi, admin siap membantu memilih.",
  },
  {
    title: "Lakukan Pembayaran",
    description:
      "Transaksi transparan langsung ke admin. Tanpa payment gateway berbelit.",
  },
  {
    title: "Server Diproses",
    description:
      "Instance disiapkan, dikonfigurasi, dan diverifikasi agar siap menampung bot Anda.",
  },
  {
    title: "Hosting Siap Digunakan",
    description:
      "Kredensial dikirim. Unggah kode bot Anda dan nyalakan 24 jam nonstop.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Raka Pratama",
    role: "Developer Discord Bot",
    initials: "RP",
    content:
      "Sudah tiga bulan pakai dan belum sekalipun bot saya mati sendiri. Auto restart-nya benar-benar kepakai.",
    rating: 5,
  },
  {
    name: "Dinda Larasati",
    role: "Admin Komunitas",
    initials: "DL",
    content:
      "Awalnya ragu karena harganya murah, ternyata performanya jauh di atas ekspektasi. Support-nya juga cepat.",
    rating: 5,
  },
  {
    name: "Bagas Saputra",
    role: "Python Developer",
    initials: "BS",
    content:
      "Setup bot discord.py lancar, dependency tidak ada yang bentrok. Prosesnya jelas dari awal sampai aktif.",
    rating: 5,
  },
  {
    name: "Nadia Kusuma",
    role: "Pemilik Bot WhatsApp",
    initials: "NK",
    content:
      "Bot Baileys saya jalan stabil untuk 4 grup. Kalau ada kendala, admin bantu jawab dengan sabar.",
    rating: 4,
  },
  {
    name: "Fikri Ramadhan",
    role: "Freelance Bot Maker",
    initials: "FR",
    content:
      "Deploy-nya cepat, tinggal upload dan jalan. Klien saya senang karena botnya online terus.",
    rating: 5,
  },
  {
    name: "Salsa Maharani",
    role: "Admin Server Gaming",
    initials: "SM",
    content:
      "Latensi ke Discord terasa ringan, command bot langsung merespons. Worth it untuk komunitas yang ramai.",
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Apakah mendukung Node.js?",
    answer:
      "Ya. Kami mendukung penuh runtime Node.js modern, cocok untuk bot berbasis discord.js, Baileys (WhatsApp), Telegraf, dan library populer lainnya.",
  },
  {
    question: "Apakah mendukung Python?",
    answer:
      "Ya. Anda dapat menjalankan bot berbasis discord.py, aiogram, maupun Pyrogram beserta dependency yang dibutuhkan.",
  },
  {
    question: "Apakah uptime-nya stabil?",
    answer:
      "Ya. Infrastruktur kami dirancang dengan target uptime 99.9% per bulan, didukung monitoring 24/7 dan auto restart bila terjadi crash.",
  },
  {
    question: "Apakah bisa upgrade paket?",
    answer:
      "Bisa kapan saja. Cukup hubungi admin lewat WhatsApp dan kami bantu pindahkan bot Anda ke paket yang lebih besar tanpa ribet.",
  },
  {
    question: "Bagaimana kalau saya mengalami kendala?",
    answer:
      "Admin kami siap membantu langsung melalui WhatsApp. Tidak ada tiket berlapis maupun balasan otomatis yang bertele-tele.",
  },
  {
    question: "Bagaimana cara pembayarannya?",
    answer:
      "Semua transaksi dilakukan langsung melalui WhatsApp dengan admin. Kami tidak menggunakan payment gateway agar prosesnya sederhana dan transparan.",
  },
];

export const paymentSteps = [
  { icon: Timer, label: "Konfirmasi cepat" },
  { icon: ShieldCheck, label: "Transaksi transparan" },
  { icon: Rocket, label: "Langsung aktif" },
] as const;
