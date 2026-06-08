import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative border-b border-hairline">
      <div className="absolute inset-0 hairline-grid opacity-30 fade-mask-b" />
      <div className="container-x relative pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight max-w-5xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        {image && (
          <div className="mt-16 aspect-[16/8] overflow-hidden rounded-md border border-hairline">
            <img src={image} alt={imageAlt ?? ""} className="h-full w-full object-cover" loading="lazy" />
          </div>
        )}
      </div>
    </section>
  );
}
