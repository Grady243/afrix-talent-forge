import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function PrimaryCTA({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex h-11 items-center gap-2 bg-foreground px-5 text-sm font-semibold text-background rounded-sm hover:bg-foreground/90 transition-colors"
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function SecondaryCTA({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex h-11 items-center gap-2 border border-hairline bg-surface px-5 text-sm font-medium text-foreground rounded-sm hover:border-foreground/30 hover:bg-surface-elevated transition-colors"
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function GhostCTA({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex h-11 items-center gap-2 px-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function FinalCTA({
  eyebrow = "Get involved",
  title,
  description,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="relative overflow-hidden border border-hairline bg-surface p-10 md:p-16 rounded-md">
        <div className="absolute inset-0 hairline-grid opacity-40" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</div>
          <h3 className="mt-4 font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
            {title}
          </h3>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
          )}
          <div className="mt-10 flex flex-wrap gap-3">
            <PrimaryCTA to={primary.to}>{primary.label}</PrimaryCTA>
            {secondary && <SecondaryCTA to={secondary.to}>{secondary.label}</SecondaryCTA>}
          </div>
        </div>
      </div>
    </section>
  );
}
