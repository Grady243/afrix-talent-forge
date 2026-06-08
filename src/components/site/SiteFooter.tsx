import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Ecosystem",
    links: [
      { to: "/programs", label: "Programs" },
      { to: "/talent-4-startups", label: "Talent 4 Startups" },
      { to: "/services", label: "Services" },
      { to: "/innovation-hub", label: "Innovation Hub" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/projects", label: "Projects" },
      { to: "/impact", label: "Impact" },
      { to: "/partners", label: "Partners" },
    ],
  },
  {
    title: "Connect",
    links: [
      { to: "/contact", label: "Contact" },
      { to: "/partners", label: "Become a partner" },
      { to: "/programs", label: "Apply now" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="inline-block h-2 w-2 bg-accent" />
              Afrix Global
            </Link>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A Talent, Innovation & Opportunity Ecosystem training, deploying and
              monetizing African digital talent through real-world international projects.
            </p>
            <p className="mt-8 font-display text-2xl font-bold tracking-tight">
              We train. <span className="text-muted-foreground">We create.</span>{" "}
              <span className="text-accent">We connect.</span>
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-hairline flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Afrix Global. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="mailto:hello@afrixglobal.com" className="hover:text-foreground">hello@afrixglobal.com</a>
            <a href="#" className="hover:text-foreground">LinkedIn</a>
            <a href="#" className="hover:text-foreground">X</a>
            <a href="#" className="hover:text-foreground">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
