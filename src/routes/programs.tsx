import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FinalCTA } from "@/components/site/CTA";
import { Code2, Smartphone, Brain, Palette, Megaphone } from "lucide-react";
import programsImg from "@/assets/programs.jpg";
import studentsImg from "@/assets/students.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import codeImg from "@/assets/code.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Afrix Global Baobab Program" },
      { name: "description", content: "Bootcamps, mentorship, real projects and certification across web, mobile, data, AI, design and marketing." },
      { property: "og:title", content: "Programs — Afrix Global" },
      { property: "og:image", content: programsImg },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  { icon: Code2, title: "Web Development", duration: "16 weeks", desc: "Full-stack engineering with modern frameworks. Ship production systems from week one." },
  { icon: Smartphone, title: "Mobile Development", duration: "16 weeks", desc: "Native iOS, Android, and cross-platform with React Native and Flutter." },
  { icon: Brain, title: "Data & AI", duration: "20 weeks", desc: "Data engineering, ML pipelines and applied AI for real-world products." },
  { icon: Palette, title: "UI/UX Design", duration: "14 weeks", desc: "Product design, research, prototyping and design systems at scale." },
  { icon: Megaphone, title: "Digital Marketing", duration: "12 weeks", desc: "Growth, performance marketing, content and digital strategy." },
];

const methodology = [
  { k: "01", t: "Bootcamps", d: "Intensive, full-time programs led by working practitioners." },
  { k: "02", t: "Mentorship", d: "1:1 mentorship from senior engineers, designers and operators." },
  { k: "03", t: "Real projects", d: "Work shipped for real clients during the program — not exercises." },
  { k: "04", t: "Certification", d: "Industry-recognized certification on completion." },
];

function ProgramsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Baobab Program"
        title={<>Programs that build engineers, designers and operators — <span className="text-accent">ready to ship.</span></>}
        description="The Baobab Program is Afrix Global's flagship pathway: world-class technical training, paired with mentorship and real projects from week one."
        image={programsImg}
        imageAlt="Baobab program classroom"
      />

      <section className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="Tracks" title="Five tracks. One ecosystem." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {programs.map((p) => (
            <div key={p.title} className="bg-background p-8">
              <div className="flex items-start justify-between">
                <p.icon className="text-accent" size={26} />
                <span className="font-mono text-xs text-muted-foreground">{p.duration}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image gallery */}
      <section className="container-x pb-8">
        <div className="grid md:grid-cols-3 gap-4">
          {[studentsImg, mentorshipImg, codeImg].map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-md border border-hairline">
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface">
        <div className="container-x py-24 md:py-32">
          <SectionHeading eyebrow="Methodology" title="How we train." />
          <div className="mt-14 grid md:grid-cols-4 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
            {methodology.map((x) => (
              <div key={x.k} className="bg-background p-8">
                <div className="font-mono text-xs text-accent">{x.k}</div>
                <div className="mt-6 font-display text-xl font-bold">{x.t}</div>
                <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Applications open"
        title="Apply to the Baobab Program."
        description="Selective cohorts. Real projects. International deployment. Limited seats per intake."
        primary={{ to: "/contact", label: "Apply now" }}
        secondary={{ to: "/about", label: "Learn more" }}
      />
    </PageShell>
  );
}
