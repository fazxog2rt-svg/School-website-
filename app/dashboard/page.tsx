"use client";

import { useAuth } from "@/lib/auth/auth-context";
import { roleGroup } from "@/lib/auth/roles";
import {
  AdminOverview,
  GuruOverview,
  SiswaOverview,
  OrangtuaOverview,
} from "@/components/dashboard/overviews";

export default function DashboardPage() {
  const { user } = useAuth();
  if (!user) return null;

  const group = roleGroup(user.role);
  if (group === "admin") return <AdminOverview />;
  if (group === "guru") return <GuruOverview />;
  if (group === "siswa") return <SiswaOverview />;
  return <OrangtuaOverview />;
}
