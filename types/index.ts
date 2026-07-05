import type { LucideIcon } from "lucide-react";

export interface Plan {
  id: string;
  name: string;
  price: number;
  tagline: string;
  ram: string;
  cpu: string;
  storage: string;
  bandwidth: string;
  popular?: boolean;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export interface Step {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
