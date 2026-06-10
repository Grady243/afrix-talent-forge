import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useT } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

const nav = [
  { to: "/about", key: "nav.about" },
  { to: "/programs", key: "nav.programs" },
  { to: "/talent-4-startups", key: "nav.talent" },
  { to: "/services", key: "nav.services" },
  { to: "/innovation-hub", key: "nav.hub" },
  { to: "/impact", key: "nav.impact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const t = useT();
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 font-display text-base font-bold tracking-tight">
          <span className="inline-block h-2 w-2 bg-brand" />
          Afrix Global
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {t(n.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle />
          <Link
            to="/contact"
            className="inline-flex h-9 items-center px-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t("nav.contact")}
          </Link>
          <Link
            to="/programs"
            className="inline-flex h-9 items-center bg-foreground px-4 text-sm font-semibold text-background rounded-sm hover:bg-foreground/90 transition-colors"
          >
            {t("nav.apply")}
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <LanguageToggle />
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center text-foreground"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-background">
          <nav className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground border-b border-hairline last:border-0"
                activeProps={{ className: "text-foreground" }}
              >
                {t(n.key)}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-muted-foreground"
            >
              {t("nav.contact")}
            </Link>
            <Link
              to="/programs"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-10 items-center justify-center bg-foreground text-sm font-semibold text-background rounded-sm"
            >
              {t("nav.apply")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
