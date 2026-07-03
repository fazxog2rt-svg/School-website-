import Link from "next/link";
import { cn } from "@/lib/utils";
import * as React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-emerald-600 text-white shadow-soft hover:bg-emerald-700 hover:shadow-glow",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/70",
  outline:
    "border border-emerald-600/30 bg-transparent text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-500/10",
  ghost: "bg-transparent hover:bg-secondary text-foreground",
  gold: "bg-gold-500 text-white shadow-soft hover:bg-gold-600",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base py-3.5",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

type ButtonLinkProps = {
  variant?: Variant;
  size?: Size;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  const classes = cn(base, variants[variant], sizes[size], className);
  if (isExternal) {
    return <a href={href} className={classes} {...props} />;
  }
  return <Link href={href} className={classes} {...props} />;
}
