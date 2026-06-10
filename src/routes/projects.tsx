import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCTA } from "@/components/site/CTA";
import { useState } from "react";
import projectsImg from "@/assets/projects.jpg";
import innovationImg from "@/assets/innovation.jpg";
import programsImg from "@/assets/programs.jpg";
import talentImg from "@/assets/talent-startups.jpg";
import servicesImg from "@/assets/services.jpg";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Afrix Global Portfolio" },
      { name: "description", content: "Client work, student projects, startups and innovation prototypes built by African talent." },
      { property: "og:title", content: "Projects — Afrix Global" },
      { property: "og:image", content: projectsImg },
    ],
  }),
  component: ProjectsPage,
});

type Cat = "All" | "Client" | "Student" | "Startup" | "Innovation";
const cats: Cat[] = ["All", "Client", "Student", "Startup", "Innovation"];

const items: { title: string; cat: Exclude<Cat,"All">; client: string; year: string; img: string }[] = [
  { title: "Fintech platform for West African SMEs", cat: "Client", client: "Pan-African Bank", year: "2025", img: projectsImg },
  { title: "Logistics OS for last-mile delivery", cat: "Startup", client: "Baobab alumni venture", year: "2024", img: innovationImg },
  { title: "AI assistant for clinical workflows", cat: "Innovation", client: "Internal lab", year: "2025", img: programsImg },
  { title: "Conference platform for African startups", cat: "Client", client: "Digital Africa", year: "2024", img: talentImg },
  { title: "Design system for a continental NGO", cat: "Student", client: "Cohort 04 capstone", year: "2024", img: servicesImg },
  { title: "Marketplace for African creatives", cat: "Startup", client: "Hub portfolio", year: "2025", img: teamImg },
];

function ProjectsPage() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);
  return (
    <PageShell>
      <PageHero
        eyebrow="Portfolio"
        title={<>Real work, shipped by <span className="text-accent">African talent.</span></>}
        description="Client engagements, student capstones, startups born in the Hub, and innovation prototypes from our labs."
      />

      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`h-9 px-4 text-sm rounded-sm border transition-colors ${
                cat === c
                  ? "bg-foreground text-background border-foreground"
                  : "border-hairline text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {filtered.map((p) => (
            <article key={p.title} className="group">
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-hairline">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-wider">
                <span className="text-brand">{p.cat}</span>
                <span className="text-muted-foreground font-mono">{p.year}</span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA
        title="Have a project in mind?"
        description="Let's put the right team on it."
        primary={{ to: "/contact", label: "Start a project" }}
        secondary={{ to: "/services", label: "Our services" }}
      />
    </PageShell>
  );
}
