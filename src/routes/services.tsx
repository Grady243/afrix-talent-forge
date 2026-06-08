import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCTA } from "@/components/site/CTA";
import servicesImg from "@/assets/services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Afrix Global" },
      { name: "description", content: "Digital execution powered by African talent — development, marketing, design and custom solutions." },
      { property: "og:title", content: "Services — Afrix Global" },
      { property: "og:image", content: servicesImg },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    letter: "A", title: "Digital Development",
    items: ["Websites & web apps", "Mobile applications", "Platforms & marketplaces", "Custom software"],
  },
  {
    letter: "B", title: "Digital Marketing",
    items: ["Social media management", "Digital campaigns", "Growth strategy", "Analytics & SEO"],
  },
  {
    letter: "C", title: "Design & Communication",
    items: ["Branding & identity", "Graphic design", "UI/UX design", "Digital content"],
  },
  {
    letter: "D", title: "Custom Solutions",
    items: ["Internal systems", "NGO digital solutions", "Enterprise platforms", "Digital transformation"],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title={<>Digital execution powered by <span className="text-accent">African talent.</span></>}
        description="From websites to platforms, branding to transformation — we build production-grade digital work for NGOs, companies, governments and international organizations."
        image={servicesImg}
        imageAlt="Designer working"
      />

      <section className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="What we do" title="Four practices. One delivery engine." />
        <div className="mt-14 grid md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-10">
              <div className="font-mono text-xs text-accent">PRACTICE {s.letter}</div>
              <h3 className="mt-4 font-display text-3xl font-bold">{s.title}</h3>
              <ul className="mt-6 grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
                {s.items.map((i) => <li key={i}>· {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface">
        <div className="container-x py-24 md:py-32">
          <SectionHeading eyebrow="Who we work with" title="Clients across sectors and continents." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
            {["NGOs","Companies","Governments","International organizations"].map((c) => (
              <div key={c} className="bg-background p-10 text-center">
                <div className="font-display text-xl font-bold">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Start your project with us."
        description="Tell us what you're building. We'll put the right team on it."
        primary={{ to: "/contact", label: "Start your project" }}
        secondary={{ to: "/projects", label: "See our work" }}
      />
    </PageShell>
  );
}
