import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCTA } from "@/components/site/CTA";
import impactImg from "@/assets/impact.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Afrix Global" },
      { name: "description", content: "Youth trained, jobs created, startups launched, countries reached — the measurable impact of the Afrix Global ecosystem." },
      { property: "og:title", content: "Impact — Afrix Global" },
      { property: "og:image", content: impactImg },
    ],
  }),
  component: ImpactPage,
});

const metrics = [
  { v: "5,000+", l: "Youth trained" },
  { v: "1,200+", l: "Jobs created" },
  { v: "850+",  l: "Freelancers active" },
  { v: "350+", l: "Projects delivered" },
  { v: "40+", l: "Startups launched" },
  { v: "18", l: "Countries reached" },
];

const stories = [
  { name: "Amina K.", role: "Frontend Engineer", q: "From a Baobab cohort to shipping features for 200k European users." },
  { name: "Tunde A.", role: "Founder, Logistics OS", q: "Raised our pre-seed inside the Hub. Hired our first three engineers from Afrix." },
  { name: "Fatou D.", role: "Product Designer", q: "Working with clients in four countries. Built it all from Dakar." },
];

function ImpactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Impact"
        title={<>Numbers that <span className="text-accent">change lives.</span></>}
        description="Measurable outcomes across talent, jobs, projects and startups — across the continent."
        image={impactImg}
        imageAlt="African city skyline"
      />

      <section className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="The numbers" title="An ecosystem operating at scale." />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {metrics.map((m) => (
            <div key={m.l} className="bg-background p-10">
              <div className="font-display text-5xl md:text-6xl font-bold tracking-tight">{m.v}</div>
              <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface">
        <div className="container-x py-24 md:py-32">
          <SectionHeading eyebrow="Alumni & founders" title="The people behind the numbers." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <figure key={s.name} className="bg-background border border-hairline rounded-md p-7">
                <blockquote className="font-display text-lg leading-snug">"{s.q}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-muted-foreground">{s.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Multiply our impact."
        description="Partners and funders help us scale across more countries, cohorts and startups."
        primary={{ to: "/partners", label: "Become a partner" }}
        secondary={{ to: "/contact", label: "Contact" }}
      />
    </PageShell>
  );
}
