import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <span className="inline-block h-px w-6 bg-brand" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
