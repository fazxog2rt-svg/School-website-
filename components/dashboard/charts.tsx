"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const EMERALD = "#059669";
const GOLD = "#c8912f";
const PIE_COLORS = ["#059669", "#c8912f", "#0ea5e9", "#8b5cf6"];

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.08)",
  background: "hsl(var(--card))",
  color: "hsl(var(--foreground))",
  fontSize: 12,
  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
};

export function AreaTrend({
  data,
  dataKey,
  xKey,
}: {
  data: any[];
  dataKey: string;
  xKey: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={EMERALD} stopOpacity={0.35} />
            <stop offset="100%" stopColor={EMERALD} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} fontSize={12} stroke="hsl(var(--muted-foreground))" />
        <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="hsl(var(--muted-foreground))" />
        <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: EMERALD, strokeOpacity: 0.2 }} />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={EMERALD}
          strokeWidth={2.5}
          fill="url(#areaFill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function BarSimple({
  data,
  dataKey,
  xKey,
  color = EMERALD,
}: {
  data: any[];
  dataKey: string;
  xKey: string;
  color?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} fontSize={12} stroke="hsl(var(--muted-foreground))" />
        <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="hsl(var(--muted-foreground))" />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(var(--secondary))" }} />
        <Bar dataKey={dataKey} fill={color} radius={[6, 6, 0, 0]} maxBarSize={44} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function DonutChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={62}
          outerRadius={92}
          paddingAngle={3}
          stroke="none"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function GradeBars({
  data,
}: {
  data: { subject: string; nilai: number; kkm: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <XAxis dataKey="subject" tickLine={false} axisLine={false} fontSize={11} stroke="hsl(var(--muted-foreground))" />
        <YAxis tickLine={false} axisLine={false} fontSize={12} stroke="hsl(var(--muted-foreground))" domain={[0, 100]} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "hsl(var(--secondary))" }} />
        <Bar dataKey="kkm" fill="#e2e8f0" radius={[6, 6, 0, 0]} maxBarSize={36} />
        <Bar dataKey="nilai" fill={GOLD} radius={[6, 6, 0, 0]} maxBarSize={36} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export const chartLegend = { EMERALD, GOLD, PIE_COLORS };
