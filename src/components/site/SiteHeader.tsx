import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/talent-4-startups", label: "Talent 4 Startups" },
  { to: "/services", label: "Services" },
  { to: "/innovation-hub", label: "Innovation Hub" },
  { to: "/projects", label: "Projects" },
  { to: "/impact", label: "Impact" },
  { to: "/partners", label: "Partners" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-base font-bold tracking-tight">
          <span className="inline-block h-2 w-2 bg-accent" />
          Afrix Global
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className="inline-flex h-9 items-center px-4 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/programs"
            className="inline-flex h-9 items-center bg-foreground px-4 text-sm font-semibold text-background rounded-sm hover:bg-foreground/90 transition-colors"
          >
            Apply now
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-muted-foreground"
            >
              Contact
            </Link>
            <Link
              to="/programs"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-10 items-center justify-center bg-foreground text-sm font-semibold text-background rounded-sm"
            >
              Apply now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
