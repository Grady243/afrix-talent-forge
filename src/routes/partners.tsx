import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Afrix Global" },
      { name: "description", content: "Digital Africa, NGOs, tech companies, institutions and foundations supporting Africa's digital transformation." },
      { property: "og:title", content: "Partners — Afrix Global" },
    ],
  }),
  component: PartnersPage,
});

const groups = [
  { title: "Digital Africa", desc: "Strategic ecosystem partner across the continent." },
  { title: "NGOs", desc: "International and pan-African NGOs working with our delivery teams." },
  { title: "Tech companies", desc: "Global tech employers hiring our talent and sponsoring cohorts." },
  { title: "Institutions", desc: "Universities, agencies and public institutions investing in African talent." },
  { title: "Foundations", desc: "Mission-aligned funders scaling access and impact." },
];

const logos = [
  "Digital Africa", "Orange", "AfDB", "GIZ", "World Bank",
  "Mastercard Foundation", "UNDP", "AFD", "EU", "GSMA", "Meta", "Google for Startups",
];

function PartnersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Partners"
        title={<>Building Africa's digital future, <span className="text-accent">together.</span></>}
        description="We partner with foundations, governments, NGOs and global tech companies to scale opportunity across the continent."
      />

      <section className="container-x py-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {logos.map((l) => (
            <div key={l} className="bg-background flex items-center justify-center h-24 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-center px-3">
              {l}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface">
        <div className="container-x py-24 md:py-32">
          <SectionHeading eyebrow="Who we work with" title="Five categories of partners." />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
            {groups.map((g) => (
              <div key={g.title} className="bg-background p-8">
                <div className="font-display text-xl font-bold">{g.title}</div>
                <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Become a partner."
        description="Support Africa's digital transformation. Help us train, deploy and build the next generation."
        primary={{ to: "/contact", label: "Become a partner" }}
      />
    </PageShell>
  );
}
