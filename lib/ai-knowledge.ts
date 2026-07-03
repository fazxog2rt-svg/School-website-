import { site } from "@/lib/site";
import { teachers } from "@/lib/data/teachers";
import { extracurriculars } from "@/lib/data/extracurriculars";

export type AiReply = { text: string; suggestions?: string[] };

const academicCalendar = [
  "Awal Tahun Ajaran: 14 Juli 2026",
  "Penilaian Tengah Semester: 22–27 September 2026",
  "Libur Semester Ganjil: 22 Des 2026 – 3 Jan 2027",
  "Penilaian Akhir Semester Genap: Juni 2027",
];

/**
 * Rule-based assistant. Cocok untuk demo tanpa biaya API.
 * Untuk produksi, ganti fungsi ini dengan panggilan ke LLM
 * (mis. Anthropic Claude) melalui route handler `/api/assistant`.
 */
export function getAssistantReply(input: string): AiReply {
  const q = input.toLowerCase();

  if (/ppdb|daftar|pendaftaran|masuk/.test(q)) {
    return {
      text: "Pendaftaran Peserta Didik Baru (PPDB) MTsN 1 Probolinggo TA 2026/2027 sudah dibuka secara online. Anda dapat mengisi formulir, mengunggah dokumen, dan melacak status pendaftaran langsung di halaman PPDB. Butuh bantuan? Hubungi panitia via WhatsApp.",
      suggestions: ["Buka halaman PPDB", "Syarat pendaftaran", "Jadwal PPDB"],
    };
  }
  if (/jadwal|pelajaran|kelas/.test(q)) {
    return {
      text: "Jadwal pelajaran tersedia per kelas, per hari, dan per guru. Siswa dapat mengaksesnya melalui Dashboard Siswa, dan versi PDF dapat diunduh. Jam pembelajaran dimulai pukul 07.00 WIB.",
      suggestions: ["Kalender akademik", "Info guru", "Ekstrakurikuler"],
    };
  }
  if (/kalender|libur|semester|ujian/.test(q)) {
    return {
      text: "Beberapa agenda pada kalender akademik:\n• " + academicCalendar.join("\n• "),
      suggestions: ["Jadwal pelajaran", "Info PPDB"],
    };
  }
  if (/guru|pengajar|pendidik/.test(q)) {
    const list = teachers.slice(1, 4).map((t) => `${t.name} (${t.subject})`).join(", ");
    return {
      text: `MTsN 1 Probolinggo memiliki ${teachers.length}+ tenaga pendidik profesional dan bersertifikat. Contohnya: ${list}. Lihat profil lengkap di halaman Guru.`,
      suggestions: ["Buka profil guru", "Prestasi", "Ekstrakurikuler"],
    };
  }
  if (/ekskul|ekstrakurikuler|kegiatan/.test(q)) {
    const list = extracurriculars.slice(0, 4).map((e) => e.name).join(", ");
    return {
      text: `Tersedia ${extracurriculars.length} ekstrakurikuler, antara lain: ${list}, dan lainnya. Setiap ekskul dibimbing pembina berpengalaman.`,
      suggestions: ["Buka ekstrakurikuler", "Prestasi siswa"],
    };
  }
  if (/prestasi|juara|lomba/.test(q)) {
    return {
      text: "Alhamdulillah, siswa kami meraih puluhan prestasi tingkat kota hingga internasional — mulai dari OSN, MTQ, robotik, hingga olahraga. Kunjungi halaman Prestasi untuk detailnya.",
      suggestions: ["Buka halaman Prestasi", "Info ekstrakurikuler"],
    };
  }
  if (/kontak|alamat|lokasi|telepon|hubungi/.test(q)) {
    return {
      text: `Anda dapat menghubungi kami di:\n📍 ${site.address}\n📞 ${site.phone}\n✉️ ${site.email}`,
      suggestions: ["Buka halaman Kontak", "Chat WhatsApp"],
    };
  }
  if (/visi|misi|tentang|profil|sejarah/.test(q)) {
    return {
      text: `Visi kami: "${site.vision}" — Pelajari sejarah, nilai, dan budaya madrasah di halaman Profil.`,
      suggestions: ["Buka Profil", "Sambutan Kepala"],
    };
  }
  if (/assalam|halo|hai|hello|salam|pagi|siang/.test(q)) {
    return {
      text: "Waalaikumsalam wr. wb. 👋 Saya Asisten Digital MTsN 1 Probolinggo. Ada yang bisa saya bantu seputar PPDB, jadwal, guru, atau kegiatan sekolah?",
      suggestions: ["Info PPDB", "Jadwal pelajaran", "Ekstrakurikuler", "Prestasi"],
    };
  }
  if (/terima kasih|makasih|thanks/.test(q)) {
    return {
      text: "Sama-sama! Senang bisa membantu. Semoga harimu penuh berkah. 🌿",
      suggestions: ["Info PPDB", "Kontak"],
    };
  }

  return {
    text: "Maaf, saya belum sepenuhnya memahami pertanyaan itu. Saya bisa membantu soal PPDB, jadwal pelajaran, informasi guru, kalender akademik, ekstrakurikuler, prestasi, dan navigasi website. Silakan pilih topik di bawah 👇",
    suggestions: ["Info PPDB", "Jadwal pelajaran", "Info guru", "Ekstrakurikuler"],
  };
}

export const assistantGreeting: AiReply = {
  text: "Assalamualaikum wr. wb. 👋 Saya Asisten Digital MTsN 1 Probolinggo. Silakan tanyakan apa saja seputar sekolah — PPDB, jadwal, guru, ekstrakurikuler, dan lainnya.",
  suggestions: ["Info PPDB", "Jadwal pelajaran", "Prestasi", "Ekstrakurikuler"],
};
