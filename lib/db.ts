import { getSupabaseServer } from "@/lib/supabase/server";
import { teachers as mockTeachers, type Teacher } from "@/lib/data/teachers";
import { achievements as mockAchievements, type Achievement } from "@/lib/data/achievements";
import { news as mockNews, type NewsItem } from "@/lib/data/news";
import { announcements as mockAnnouncements, type Announcement } from "@/lib/data/announcements";
import { extracurriculars as mockEkskul, type Extracurricular } from "@/lib/data/extracurriculars";
import { alumni as mockAlumni, type Alumnus } from "@/lib/data/alumni";
import { books as mockBooks, type Book } from "@/lib/data/library";
import { calendarEvents as mockCalendar, type CalendarEvent } from "@/lib/data/calendar";

/**
 * Lapisan akses data. Bila Supabase dikonfigurasi, data diambil dari
 * database; jika tidak, memakai data contoh (mock) sebagai fallback.
 * Semua fungsi aman dipanggil dari Server Component.
 */

export async function getTeachers(): Promise<Teacher[]> {
  const sb = getSupabaseServer();
  if (!sb) return mockTeachers;
  const { data, error } = await sb.from("teachers").select("*").order("created_at");
  if (error || !data?.length) return mockTeachers;
  return data.map((t: any) => ({
    id: t.id,
    name: t.name,
    subject: t.subject,
    category: t.category,
    education: t.education ?? "",
    experience: t.experience ?? "",
    certifications: t.certifications ?? [],
    achievements: t.achievements ?? [],
    photo: t.photo ?? "",
    email: t.email ?? "",
  }));
}

export async function getAchievements(): Promise<Achievement[]> {
  const sb = getSupabaseServer();
  if (!sb) return mockAchievements;
  const { data, error } = await sb.from("achievements").select("*").order("year", { ascending: false });
  if (error || !data?.length) return mockAchievements;
  return data as Achievement[];
}

export async function getNews(): Promise<NewsItem[]> {
  const sb = getSupabaseServer();
  if (!sb) return mockNews;
  const { data, error } = await sb.from("news").select("*").order("date", { ascending: false });
  if (error || !data?.length) return mockNews;
  return data.map((n: any) => ({
    id: n.id,
    slug: n.slug,
    title: n.title,
    excerpt: n.excerpt ?? "",
    category: n.category,
    date: n.date,
    author: n.author ?? "",
    readingTime: n.reading_time ?? 3,
    image: n.image ?? "",
    featured: n.featured ?? false,
    trending: n.trending ?? false,
    tags: n.tags ?? [],
  }));
}

export async function getAnnouncements(): Promise<Announcement[]> {
  const sb = getSupabaseServer();
  if (!sb) return mockAnnouncements;
  const { data, error } = await sb.from("announcements").select("*").order("date", { ascending: false });
  if (error || !data?.length) return mockAnnouncements;
  return data.map((a: any) => ({
    id: a.id,
    title: a.title,
    body: a.body ?? "",
    category: a.category,
    date: a.date,
    deadline: a.deadline ?? undefined,
    pinned: a.pinned ?? false,
    hasPdf: a.has_pdf ?? false,
  }));
}

export async function getExtracurriculars(): Promise<Extracurricular[]> {
  const sb = getSupabaseServer();
  if (!sb) return mockEkskul;
  const { data, error } = await sb.from("extracurriculars").select("*").order("created_at");
  if (error || !data?.length) return mockEkskul;
  return data.map((e: any) => ({
    id: e.id,
    name: e.name,
    category: e.category,
    coach: e.coach ?? "",
    schedule: e.schedule ?? "",
    emoji: e.emoji ?? "✨",
    description: e.description ?? "",
    achievements: e.achievements ?? [],
  }));
}

export async function getAlumni(): Promise<Alumnus[]> {
  const sb = getSupabaseServer();
  if (!sb) return mockAlumni;
  const { data, error } = await sb.from("alumni").select("*").order("graduation_year", { ascending: false });
  if (error || !data?.length) return mockAlumni;
  return data.map((a: any) => ({
    id: a.id,
    name: a.name,
    graduationYear: a.graduation_year,
    status: a.status,
    detail: a.detail ?? "",
    testimonial: a.testimonial ?? undefined,
    avatar: a.avatar ?? "",
  }));
}

export async function getBooks(): Promise<Book[]> {
  const sb = getSupabaseServer();
  if (!sb) return mockBooks;
  const { data, error } = await sb.from("books").select("*").order("created_at");
  if (error || !data?.length) return mockBooks;
  return data.map((b: any) => ({
    id: b.id,
    title: b.title,
    author: b.author ?? "",
    category: b.category,
    rating: Number(b.rating),
    year: b.year ?? 0,
    cover: b.cover ?? "#065f46",
    available: b.available ?? true,
    synopsis: b.synopsis ?? "",
  }));
}

export async function getCalendarEvents(): Promise<CalendarEvent[]> {
  const sb = getSupabaseServer();
  if (!sb) return mockCalendar;
  const { data, error } = await sb.from("calendar_events").select("*").order("date");
  if (error || !data?.length) return mockCalendar;
  return data.map((c: any) => ({
    id: c.id,
    title: c.title,
    date: c.date,
    endDate: c.end_date ?? undefined,
    type: c.type,
  }));
}
