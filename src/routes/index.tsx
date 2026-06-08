import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading, Eyebrow } from "@/components/site/SectionHeading";
import { PrimaryCTA, SecondaryCTA, GhostCTA, FinalCTA } from "@/components/site/CTA";
import { ArrowUpRight, Code2, Smartphone, Brain, Palette, Megaphone, Building2, Users, Rocket, GraduationCap, Globe2 } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import programsImg from "@/assets/programs.jpg";
import innovationImg from "@/assets/innovation.jpg";
import projectsImg from "@/assets/projects.jpg";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afrix Global — Building Africa's Next Generation of Digital Talent" },
      { name: "description", content: "A Talent, Innovation & Opportunity Ecosystem training, deploying and monetizing African digital talent through real-world international projects." },
      { property: "og:title", content: "Afrix Global" },
      { property: "og:description", content: "We train. We create. We connect." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const metrics = [
  { value: "5,000+", label: "Youth trained" },
  { value: "1,200+", label: "Jobs created" },
  { value: "350+", label: "Projects delivered" },
  { value: "40+", label: "Startups launched" },
  { value: "18", label: "Countries reached" },
];

const ecosystem = [
  { icon: GraduationCap, title: "Train", desc: "World-class bootcamps and immersive programs in software, design, AI and growth." },
  { icon: Rocket, title: "Create", desc: "We build digital products, startups and platforms with African talent as the engine." },
  { icon: Globe2, title: "Connect", desc: "We deploy talent on international projects and connect them to global opportunities." },
];

const programs = [
  { icon: Code2, title: "Web Development", desc: "Full-stack engineering, modern frameworks, production systems." },
  { icon: Smartphone, title: "Mobile Development", desc: "Native and cross-platform mobile applications." },
  { icon: Brain, title: "Data & AI", desc: "Data engineering, ML pipelines and applied AI." },
  { icon: Palette, title: "UI/UX Design", desc: "Product design, research, prototyping and design systems." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Growth, performance marketing and digital strategy." },
];

const services = [
  { title: "Digital Development", items: ["Websites", "Mobile apps", "Platforms", "Custom software"] },
  { title: "Digital Marketing", items: ["Social media", "Campaigns", "Growth strategy"] },
  { title: "Design & Communication", items: ["Branding", "Graphic design", "UI/UX", "Content"] },
  { title: "Custom Solutions", items: ["Internal systems", "NGO solutions", "Enterprise", "Transformation"] },
];

const projects = [
  { tag: "Client project", title: "Fintech platform for West African SMEs", img: projectsImg },
  { tag: "Startup", title: "Logistics OS launched by Baobab alumni", img: innovationImg },
  { tag: "Innovation", title: "AI assistant for clinical workflows", img: programsImg },
];

const stories = [
  { name: "Amina K.", role: "Frontend Engineer — deployed to a Berlin SaaS", quote: "Afrix didn't just teach me to code. They put me on a real project, with real users, on day 90." },
  { name: "Tunde A.", role: "Founder, Logistics OS", quote: "From Baobab to building a company. The ecosystem gave me mentors, my first hires and my first investor." },
  { name: "Fatou D.", role: "Product Designer — freelance, 4 countries", quote: "I went from no portfolio to working across three continents in eighteen months." },
];

const partners = ["Digital Africa", "Orange", "AfDB", "GIZ", "World Bank", "Mastercard Foundation", "UNDP", "AFD"];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 hairline-grid opacity-30 fade-mask-b" />
        <div className="container-x relative pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-end">
            <div>
              <Eyebrow>Talent · Innovation · Opportunity</Eyebrow>
              <h1 className="mt-6 font-display text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight text-balance">
                Building Africa's next generation of{" "}
                <span className="text-accent">digital talent</span> & innovation.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Afrix Global is a Talent, Innovation & Opportunity Ecosystem that trains,
                creates, and connects African digital talent to global opportunities.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <PrimaryCTA to="/programs">Join Baobab Program</PrimaryCTA>
                <SecondaryCTA to="/talent-4-startups">Talent 4 Startups</SecondaryCTA>
                <SecondaryCTA to="/services">Hire our talent</SecondaryCTA>
              </div>
            </div>
            <div className="flex lg:justify-end">
              <div className="font-display text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
                We train.<br />
                <span className="text-muted-foreground">We create.</span><br />
                <span className="text-accent">We connect.</span>
              </div>
            </div>
          </div>

          <div className="mt-16 aspect-[16/7] overflow-hidden rounded-md border border-hairline">
            <img src={heroImg} alt="African developer at work" className="h-full w-full object-cover" width={1920} height={840} />
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-b border-hairline">
        <div className="container-x py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-hairline">
            {metrics.map((m) => (
              <div key={m.label} className="px-6 first:pl-0 py-4">
                <div className="font-display text-3xl md:text-4xl font-bold tracking-tight">{m.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="container-x py-24 md:py-32">
        <SectionHeading
          eyebrow="The ecosystem"
          title="We don't only train talent. We deploy talent."
          description="Three connected engines that take African talent from learning to earning to building."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {ecosystem.map((e) => (
            <div key={e.title} className="bg-background p-8 md:p-10">
              <e.icon className="text-accent" size={28} />
              <h3 className="mt-6 font-display text-2xl font-bold">{e.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS OVERVIEW */}
      <section className="border-y border-hairline bg-surface">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <SectionHeading
              eyebrow="Baobab Program"
              title="Programs that build real engineers, designers and operators."
            />
            <GhostCTA to="/programs">All programs</GhostCTA>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
            {programs.map((p) => (
              <div key={p.title} className="bg-background p-6">
                <p.icon className="text-accent" size={22} />
                <h4 className="mt-5 font-display text-base font-bold">{p.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1 aspect-[5/4] overflow-hidden rounded-md border border-hairline">
            <img src={teamImg} alt="Team at work" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Services"
              title="Digital execution powered by African talent."
              description="From websites to platforms, branding to digital transformation — we deliver work that scales."
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.title} className="border border-hairline rounded-md p-5">
                  <div className="font-display font-bold">{s.title}</div>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {s.items.map((i) => <li key={i}>· {i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8"><GhostCTA to="/services">Explore services</GhostCTA></div>
          </div>
        </div>
      </section>

      {/* INNOVATION HUB */}
      <section className="border-y border-hairline">
        <div className="container-x py-24 md:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              eyebrow="Innovation Hub"
              title="A space where ideas become African startups."
              description="A physical and digital ecosystem for incubation, hackathons, mentorship, investor networking and coworking."
            />
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {["Startup incubation","Hackathons","Mentorship","Investor network","Coworking","Prototyping"].map((x) => (
                <div key={x} className="flex items-center gap-2 text-foreground/80">
                  <span className="inline-block h-1 w-1 bg-accent" />{x}
                </div>
              ))}
            </div>
            <div className="mt-10"><PrimaryCTA to="/innovation-hub">Join the Hub</PrimaryCTA></div>
          </div>
          <div className="aspect-[5/4] overflow-hidden rounded-md border border-hairline">
            <img src={innovationImg} alt="Innovation Hub" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-x py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow="Featured projects" title="Real work, shipped." />
          <GhostCTA to="/projects">View portfolio</GhostCTA>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link key={p.title} to="/projects" className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-md border border-hairline">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-wider text-accent">{p.tag}</div>
              <div className="mt-2 font-display text-lg font-bold flex items-start justify-between gap-3">
                {p.title}
                <ArrowUpRight size={18} className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="border-y border-hairline bg-surface">
        <div className="container-x py-24 md:py-32">
          <SectionHeading eyebrow="Success stories" title="Talent that ships. Founders who build." />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <figure key={s.name} className="border border-hairline rounded-md p-7 bg-background flex flex-col">
                <blockquote className="font-display text-lg leading-snug">"{s.quote}"</blockquote>
                <figcaption className="mt-auto pt-6 text-sm">
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-muted-foreground">{s.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="container-x py-24">
        <div className="flex items-center justify-between mb-8">
          <Eyebrow>Trusted by</Eyebrow>
          <GhostCTA to="/partners">All partners</GhostCTA>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-hairline border border-hairline rounded-md overflow-hidden">
          {partners.map((p) => (
            <div key={p} className="bg-background flex items-center justify-center h-20 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {p}
            </div>
          ))}
        </div>
      </section>

      <FinalCTA
        title="Africa's digital talent is ready. Are you?"
        description="Apply to Baobab, hire our talent, or partner with the ecosystem building Africa's digital future."
        primary={{ to: "/programs", label: "Apply to Baobab" }}
        secondary={{ to: "/contact", label: "Talk to us" }}
      />
    </PageShell>
  );
}
