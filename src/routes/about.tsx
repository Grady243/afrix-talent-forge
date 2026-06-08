import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCTA } from "@/components/site/CTA";
import teamImg from "@/assets/about-team.jpg";
import impactImg from "@/assets/impact.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Afrix Global" },
      { name: "description", content: "Our mission, vision and the team building Africa's leading ecosystem for digital talent, innovation and opportunity." },
      { property: "og:title", content: "About — Afrix Global" },
      { property: "og:description", content: "We don't only train talent. We deploy talent." },
      { property: "og:image", content: teamImg },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2021", title: "Founded", desc: "Afrix Global launches with a single mission — turn African talent into a global digital force." },
  { year: "2022", title: "Baobab Program", desc: "First cohort of full-stack engineers graduate and deploy on international projects." },
  { year: "2023", title: "Innovation Hub", desc: "Opening of the first physical hub for startup incubation and coworking." },
  { year: "2024", title: "Talent 4 Startups", desc: "Cross-border platform connecting African talent to global startup opportunities." },
  { year: "2025", title: "Scaling continent-wide", desc: "Active across 18 countries with 5,000+ trained and 40+ startups launched." },
];

const leaders = [
  { name: "Mariama Diallo", role: "Founder & CEO" },
  { name: "Kwame Mensah", role: "Head of Programs" },
  { name: "Aïssatou Bah", role: "Director, Innovation Hub" },
  { name: "Ahmed Toure", role: "Head of Talent Network" },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Afrix Global"
        title={<>A talent, innovation & opportunity ecosystem for <span className="text-accent">Africa.</span></>}
        description="We train digital professionals. We create real-world opportunities. We build and support startups. We connect African talent globally."
        image={teamImg}
        imageAlt="The Afrix Global team"
      />

      {/* Mission / Vision */}
      <section className="container-x py-24 md:py-32 grid md:grid-cols-2 gap-12">
        <div className="border border-hairline rounded-md p-10">
          <div className="text-xs uppercase tracking-widest text-accent">Mission</div>
          <h3 className="mt-4 font-display text-3xl font-bold">Train, create, connect.</h3>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li>· Train digital professionals.</li>
            <li>· Create real-world opportunities.</li>
            <li>· Build and support startups.</li>
            <li>· Connect African talent globally.</li>
          </ul>
        </div>
        <div className="border border-hairline rounded-md p-10 bg-surface">
          <div className="text-xs uppercase tracking-widest text-accent">Vision</div>
          <h3 className="mt-4 font-display text-3xl font-bold">Africa's leading digital ecosystem.</h3>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            To become Africa's leading ecosystem for digital talent, innovation and opportunity
            creation — a platform recognized globally for the quality of engineers, designers,
            founders and ideas it produces.
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="border-y border-hairline bg-surface">
        <div className="container-x py-24 md:py-32">
          <SectionHeading eyebrow="What makes us different" title="We don't only train. We deploy, build and ship." />
          <div className="mt-14 grid md:grid-cols-4 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
            {[
              { k: "01", t: "We deploy talent", d: "Graduates go straight into real, paid international projects." },
              { k: "02", t: "We build startups", d: "From idea to launch through our incubator." },
              { k: "03", t: "We execute globally", d: "Delivery teams serving NGOs, governments and companies." },
              { k: "04", t: "We connect continents", d: "African talent matched to global opportunity." },
            ].map((x) => (
              <div key={x.k} className="bg-background p-8">
                <div className="font-mono text-xs text-accent">{x.k}</div>
                <div className="mt-6 font-display text-xl font-bold">{x.t}</div>
                <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="Our journey" title="From a single cohort to a continental ecosystem." />
        <div className="mt-14 border-t border-hairline">
          {timeline.map((t) => (
            <div key={t.year} className="grid md:grid-cols-[140px_1fr] gap-6 py-8 border-b border-hairline">
              <div className="font-mono text-sm text-accent">{t.year}</div>
              <div>
                <div className="font-display text-xl font-bold">{t.title}</div>
                <div className="mt-2 text-muted-foreground">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="border-y border-hairline bg-surface">
        <div className="container-x py-24 md:py-32">
          <SectionHeading eyebrow="Leadership" title="The people behind the ecosystem." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((l) => (
              <div key={l.name} className="bg-background border border-hairline rounded-md overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-surface-elevated to-surface" />
                <div className="p-5">
                  <div className="font-display font-bold">{l.name}</div>
                  <div className="text-sm text-muted-foreground">{l.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact image */}
      <section className="container-x py-24">
        <div className="aspect-[16/7] overflow-hidden rounded-md border border-hairline">
          <img src={impactImg} alt="African city skyline" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>

      <FinalCTA
        title="Partner with the next generation of African talent."
        primary={{ to: "/partners", label: "Become a partner" }}
        secondary={{ to: "/contact", label: "Contact us" }}
      />
    </PageShell>
  );
}
