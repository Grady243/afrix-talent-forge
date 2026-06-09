import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCTA } from "@/components/site/CTA";
import innovationImg from "@/assets/innovation.jpg";
import coworkingImg from "@/assets/coworking.jpg";
import foundersImg from "@/assets/founders.jpg";

export const Route = createFileRoute("/innovation-hub")({
  head: () => ({
    meta: [
      { title: "Innovation Hub — Afrix Global" },
      { name: "description", content: "A physical and digital ecosystem for innovation and African startups — incubation, hackathons, mentorship, investor networking and coworking." },
      { property: "og:title", content: "Innovation Hub — Afrix Global" },
      { property: "og:image", content: innovationImg },
    ],
  }),
  component: HubPage,
});

const activities = [
  { t: "Startup incubation", d: "From idea to first revenue with structured support." },
  { t: "Hackathons", d: "Solve real problems, ship in 48 hours, get hired or funded." },
  { t: "Mentorship", d: "Operators, founders and investors who've shipped at scale." },
  { t: "Investor network", d: "Direct introductions to angels and VCs across Africa, Europe and the US." },
  { t: "Coworking space", d: "A premium, quiet, focused environment for builders." },
  { t: "Prototyping labs", d: "Tools, infra and credits to ship your first version fast." },
];

function HubPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Innovation Hub"
        title={<>Where ideas become <span className="text-accent">African startups.</span></>}
        description="A physical and digital ecosystem for innovation and startups — built to turn ideas into scalable African companies."
        image={innovationImg}
        imageAlt="Innovation Hub workspace"
      />

      <section className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="What happens here" title="A complete startup environment." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {activities.map((a) => (
            <div key={a.t} className="bg-background p-8">
              <div className="font-display text-xl font-bold">{a.t}</div>
              <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-8 grid md:grid-cols-2 gap-6">
        <div className="aspect-[4/3] overflow-hidden rounded-md border border-hairline">
          <img src={coworkingImg} alt="Coworking space" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-md border border-hairline">
          <img src={foundersImg} alt="Founder on stage" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="border-y border-hairline bg-surface">
        <div className="container-x py-24 md:py-32 text-center">
          <SectionHeading
            align="center"
            eyebrow="The goal"
            title="Turn ideas into scalable African startups."
            description="Not toy projects. Real companies — with real customers, real revenue, and the ambition to compete globally."
          />
        </div>
      </section>

      <FinalCTA
        title="Join the Hub."
        description="Founders, builders and investors welcome."
        primary={{ to: "/contact", label: "Apply to join" }}
        secondary={{ to: "/partners", label: "Partner with us" }}
      />
    </PageShell>
  );
}
