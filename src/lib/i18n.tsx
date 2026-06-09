import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

type Dict = Record<string, string>;

const en: Dict = {
  // Nav
  "nav.about": "About",
  "nav.programs": "Programs",
  "nav.talent": "Talent 4 Startups",
  "nav.services": "Services",
  "nav.hub": "Innovation Hub",
  "nav.projects": "Projects",
  "nav.impact": "Impact",
  "nav.partners": "Partners",
  "nav.contact": "Contact",
  "nav.apply": "Apply now",

  // Footer
  "footer.tagline":
    "A Talent, Innovation & Opportunity Ecosystem training, deploying and monetizing African digital talent through real-world international projects.",
  "footer.slogan.train": "We train.",
  "footer.slogan.create": "We create.",
  "footer.slogan.connect": "We connect.",
  "footer.col.ecosystem": "Ecosystem",
  "footer.col.company": "Company",
  "footer.col.connect": "Connect",
  "footer.becomePartner": "Become a partner",
  "footer.rights": "All rights reserved.",

  // Home
  "home.eyebrow": "Talent · Innovation · Opportunity",
  "home.hero.title.a": "Building Africa's next generation of ",
  "home.hero.title.b": "digital talent",
  "home.hero.title.c": " & innovation.",
  "home.hero.desc":
    "Afrix Global is a Talent, Innovation & Opportunity Ecosystem that trains, creates, and connects African digital talent to global opportunities.",
  "home.cta.join": "Join Baobab Program",
  "home.cta.t4s": "Talent 4 Startups",
  "home.cta.hire": "Hire our talent",
  "home.metrics.youth": "Youth trained",
  "home.metrics.jobs": "Jobs created",
  "home.metrics.projects": "Projects delivered",
  "home.metrics.startups": "Startups launched",
  "home.metrics.countries": "Countries reached",
  "home.eco.eyebrow": "The ecosystem",
  "home.eco.title": "We don't only train talent. We deploy talent.",
  "home.eco.desc": "Three connected engines that take African talent from learning to earning to building.",
  "home.eco.train": "Train",
  "home.eco.train.desc": "World-class bootcamps and immersive programs in software, design, AI and growth.",
  "home.eco.create": "Create",
  "home.eco.create.desc": "We build digital products, startups and platforms with African talent as the engine.",
  "home.eco.connect": "Connect",
  "home.eco.connect.desc": "We deploy talent on international projects and connect them to global opportunities.",
  "home.programs.eyebrow": "Baobab Program",
  "home.programs.title": "Programs that build real engineers, designers and operators.",
  "home.programs.all": "All programs",
  "home.services.eyebrow": "Services",
  "home.services.title": "Digital execution powered by African talent.",
  "home.services.desc": "From websites to platforms, branding to digital transformation — we deliver work that scales.",
  "home.services.explore": "Explore services",
  "home.hub.eyebrow": "Innovation Hub",
  "home.hub.title": "A space where ideas become African startups.",
  "home.hub.desc": "A physical and digital ecosystem for incubation, hackathons, mentorship, investor networking and coworking.",
  "home.hub.join": "Join the Hub",
  "home.projects.eyebrow": "Featured projects",
  "home.projects.title": "Real work, shipped.",
  "home.projects.view": "View portfolio",
  "home.stories.eyebrow": "Success stories",
  "home.stories.title": "Talent that ships. Founders who build.",
  "home.partners.eyebrow": "Trusted by",
  "home.partners.all": "All partners",
  "home.final.title": "Africa's digital talent is ready. Are you?",
  "home.final.desc": "Apply to Baobab, hire our talent, or partner with the ecosystem building Africa's digital future.",
  "home.final.apply": "Apply to Baobab",
  "home.final.talk": "Talk to us",
};

const fr: Dict = {
  "nav.about": "À propos",
  "nav.programs": "Programmes",
  "nav.talent": "Talent 4 Startups",
  "nav.services": "Services",
  "nav.hub": "Hub d'Innovation",
  "nav.projects": "Projets",
  "nav.impact": "Impact",
  "nav.partners": "Partenaires",
  "nav.contact": "Contact",
  "nav.apply": "Postuler",

  "footer.tagline":
    "Un écosystème de Talent, d'Innovation et d'Opportunités qui forme, déploie et monétise les talents numériques africains via des projets internationaux réels.",
  "footer.slogan.train": "Nous formons.",
  "footer.slogan.create": "Nous créons.",
  "footer.slogan.connect": "Nous connectons.",
  "footer.col.ecosystem": "Écosystème",
  "footer.col.company": "Société",
  "footer.col.connect": "Contact",
  "footer.becomePartner": "Devenir partenaire",
  "footer.rights": "Tous droits réservés.",

  "home.eyebrow": "Talent · Innovation · Opportunité",
  "home.hero.title.a": "Construire la nouvelle génération de ",
  "home.hero.title.b": "talents numériques",
  "home.hero.title.c": " et d'innovation en Afrique.",
  "home.hero.desc":
    "Afrix Global est un écosystème de Talent, d'Innovation et d'Opportunités qui forme, crée et connecte les talents numériques africains aux opportunités mondiales.",
  "home.cta.join": "Rejoindre Baobab",
  "home.cta.t4s": "Talent 4 Startups",
  "home.cta.hire": "Recruter nos talents",
  "home.metrics.youth": "Jeunes formés",
  "home.metrics.jobs": "Emplois créés",
  "home.metrics.projects": "Projets livrés",
  "home.metrics.startups": "Startups lancées",
  "home.metrics.countries": "Pays couverts",
  "home.eco.eyebrow": "L'écosystème",
  "home.eco.title": "Nous ne formons pas seulement les talents. Nous les déployons.",
  "home.eco.desc": "Trois moteurs connectés qui font passer le talent africain de l'apprentissage au revenu, puis à la création.",
  "home.eco.train": "Former",
  "home.eco.train.desc": "Des bootcamps de classe mondiale et des programmes immersifs en logiciel, design, IA et growth.",
  "home.eco.create": "Créer",
  "home.eco.create.desc": "Nous construisons produits, startups et plateformes avec le talent africain comme moteur.",
  "home.eco.connect": "Connecter",
  "home.eco.connect.desc": "Nous déployons les talents sur des projets internationaux et ouvrons les opportunités mondiales.",
  "home.programs.eyebrow": "Programme Baobab",
  "home.programs.title": "Des programmes qui forment de vrais ingénieurs, designers et opérateurs.",
  "home.programs.all": "Tous les programmes",
  "home.services.eyebrow": "Services",
  "home.services.title": "Exécution numérique portée par les talents africains.",
  "home.services.desc": "Du site web à la plateforme, du branding à la transformation digitale — un travail qui passe à l'échelle.",
  "home.services.explore": "Voir les services",
  "home.hub.eyebrow": "Hub d'Innovation",
  "home.hub.title": "Un espace où les idées deviennent des startups africaines.",
  "home.hub.desc": "Un écosystème physique et numérique pour l'incubation, les hackathons, le mentorat, le réseau d'investisseurs et le coworking.",
  "home.hub.join": "Rejoindre le Hub",
  "home.projects.eyebrow": "Projets phares",
  "home.projects.title": "Du vrai travail, livré.",
  "home.projects.view": "Voir le portfolio",
  "home.stories.eyebrow": "Témoignages",
  "home.stories.title": "Des talents qui livrent. Des fondateurs qui construisent.",
  "home.partners.eyebrow": "Ils nous font confiance",
  "home.partners.all": "Tous les partenaires",
  "home.final.title": "Le talent numérique africain est prêt. Et vous ?",
  "home.final.desc": "Postulez à Baobab, recrutez nos talents, ou devenez partenaire de l'écosystème qui construit le futur numérique de l'Afrique.",
  "home.final.apply": "Postuler à Baobab",
  "home.final.talk": "Nous contacter",
};

const dicts: Record<Lang, Dict> = { en, fr };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nCtx = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("afrix.lang") as Lang | null;
    if (saved === "en" || saved === "fr") setLangState(saved);
    else if (navigator.language?.toLowerCase().startsWith("fr")) setLangState("fr");
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("afrix.lang", l);
  }, []);

  const t = useCallback((key: string) => dicts[lang][key] ?? dicts.en[key] ?? key, [lang]);

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);
export const useT = () => useContext(I18nCtx).t;
