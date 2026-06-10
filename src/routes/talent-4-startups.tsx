import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCTA } from "@/components/site/CTA";
import talentImg from "@/assets/talent-startups.jpg";
import studentsImg from "@/assets/students.jpg";
import cityImg from "@/assets/city.jpg";

export const Route = createFileRoute("/talent-4-startups")({
  head: () => ({
    meta: [
      { title: "Talent 4 Startups — Afrix Global" },
      { name: "description", content: "Connecting African talent with startup opportunities and international projects." },
      { property: "og:title", content: "Talent 4 Startups — Afrix Global" },
      { property: "og:image", content: talentImg },
    ],
  }),
  component: T4SPage,
});

const steps = [
  { k: "01", t: "Apply", d: "Talent applies and is screened across skills, English and project experience." },
  { k: "02", t: "Match", d: "We match vetted talent to startup roles, contracts and international projects." },
  { k: "03", t: "Deploy", d: "Talent ships work — remote or on-site — with ongoing mentor support." },
  { k: "04", t: "Grow", d: "Career growth, repeat placements and pathways to founding teams." },
];

function T4SPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Talent 4 Startups"
        title={<>Connecting African talent with <span className="text-accent">startup opportunities</span> globally.</>}
        description="A cross-border platform that matches Afrix-trained engineers, designers and operators to startups and international projects worldwide."
        image={talentImg}
        imageAlt="Founders on stage"
      />

      <section className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="How it works" title="From application to deployment in weeks, not months." />
        <div className="mt-14 grid md:grid-cols-4 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {steps.map((s) => (
            <div key={s.k} className="bg-background p-8">
              <div className="font-mono text-xs text-brand">{s.k}</div>
              <div className="mt-6 font-display text-xl font-bold">{s.t}</div>
              <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x grid md:grid-cols-2 gap-6 pb-8">
        <div className="aspect-[16/10] overflow-hidden rounded-md border border-hairline">
          <img src={studentsImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-md border border-hairline">
          <img src={cityImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="border-y border-hairline bg-surface">
        <div className="container-x py-24 md:py-32 grid lg:grid-cols-2 gap-10">
          <div className="border border-hairline rounded-md p-10 bg-background">
            <div className="text-xs uppercase tracking-widest text-brand">For talent</div>
            <h3 className="mt-4 font-display text-3xl font-bold">Build a global career from Africa.</h3>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li>· Access to international startup roles</li>
              <li>· Competitive global compensation</li>
              <li>· Ongoing mentorship and community</li>
              <li>· Long-term career placement support</li>
            </ul>
          </div>
          <div className="border border-hairline rounded-md p-10 bg-background">
            <div className="text-xs uppercase tracking-widest text-brand">For startups</div>
            <h3 className="mt-4 font-display text-3xl font-bold">Hire pre-vetted, ship-ready talent.</h3>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li>· Engineers and designers screened on real projects</li>
              <li>· Faster time-to-hire with curated shortlists</li>
              <li>· Contract, full-time or embedded teams</li>
              <li>· Ongoing performance and retention support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="Success stories" title="Talent shipping for the world's startups." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { n: "Amina K.", r: "Frontend — Berlin SaaS", q: "Three months in and I'm shipping features used by 200k people." },
            { n: "Daniel O.", r: "Backend — Paris fintech", q: "Afrix didn't just place me. They prepared me to compete globally." },
            { n: "Fatou D.", r: "Designer — remote, 4 countries", q: "From no portfolio to a global client list in 18 months." },
          ].map((s) => (
            <figure key={s.n} className="border border-hairline rounded-md p-7">
              <blockquote className="font-display text-lg leading-snug">"{s.q}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-semibold">{s.n}</div>
                <div className="text-muted-foreground">{s.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <FinalCTA
        title="Join Talent 4 Startups."
        description="Whether you're talent looking for your next role or a startup ready to hire — we'll match you."
        primary={{ to: "/contact", label: "Apply as talent" }}
        secondary={{ to: "/contact", label: "Hire talent" }}
      />
    </PageShell>
  );
}
