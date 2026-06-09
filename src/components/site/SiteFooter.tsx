import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  const cols = [
    {
      title: t("footer.col.ecosystem"),
      links: [
        { to: "/programs", label: t("nav.programs") },
        { to: "/talent-4-startups", label: t("nav.talent") },
        { to: "/services", label: t("nav.services") },
        { to: "/innovation-hub", label: t("nav.hub") },
      ],
    },
    {
      title: t("footer.col.company"),
      links: [
        { to: "/about", label: t("nav.about") },
        { to: "/projects", label: t("nav.projects") },
        { to: "/impact", label: t("nav.impact") },
        { to: "/partners", label: t("nav.partners") },
      ],
    },
    {
      title: t("footer.col.connect"),
      links: [
        { to: "/contact", label: t("nav.contact") },
        { to: "/partners", label: t("footer.becomePartner") },
        { to: "/programs", label: t("nav.apply") },
      ],
    },
  ];

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
              {t("footer.tagline")}
            </p>
            <p className="mt-8 font-display text-2xl font-bold tracking-tight">
              {t("footer.slogan.train")}{" "}
              <span className="text-muted-foreground">{t("footer.slogan.create")}</span>{" "}
              <span className="text-foreground">{t("footer.slogan.connect")}</span>
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
          <div>© {new Date().getFullYear()} Afrix Global. {t("footer.rights")}</div>
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
