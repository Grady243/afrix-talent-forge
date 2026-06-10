import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { useState } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Afrix Global" },
      { name: "description", content: "Reach out to Afrix Global. Apply to programs, hire talent, become a partner, or start a project." },
      { property: "og:title", content: "Contact — Afrix Global" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="text-accent">talk.</span></>}
        description="Apply to programs. Hire our talent. Start a project. Or partner with the ecosystem."
      />

      <section className="container-x py-16 md:py-24 grid lg:grid-cols-[1.4fr_1fr] gap-12">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="border border-hairline rounded-md p-8 md:p-10 bg-surface"
        >
          {sent ? (
            <div className="py-16 text-center">
              <div className="font-display text-3xl font-bold">Thanks — we'll be in touch.</div>
              <p className="mt-3 text-muted-foreground">We typically reply within two business days.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Organization" name="org" />
                <Field label="Subject" name="subject" />
              </div>
              <div className="mt-5">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={6}
                  className="mt-2 w-full bg-background border border-hairline rounded-sm px-4 py-3 text-sm outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us a bit about what you're looking for…"
                />
              </div>
              <button
                type="submit"
                className="mt-8 inline-flex h-11 items-center gap-2 bg-foreground px-5 text-sm font-semibold text-background rounded-sm hover:bg-foreground/90 transition-colors"
              >
                Send message <ArrowUpRight size={16} />
              </button>
            </>
          )}
        </form>

        <aside className="space-y-6">
          <Card icon={Mail} title="Email" lines={["hello@afrixglobal.com", "talent@afrixglobal.com"]} />
          <Card icon={MapPin} title="Office" lines={["Innovation Hub", "Dakar · Lagos · Nairobi"]} />
          <div className="border border-hairline rounded-md p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Social</div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {["LinkedIn","X","Instagram","YouTube"].map((s) => (
                <a key={s} href="#" className="h-9 px-4 inline-flex items-center border border-hairline rounded-sm hover:border-foreground/30 transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full h-11 bg-background border border-hairline rounded-sm px-4 text-sm outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}

function Card({ icon: Icon, title, lines }: { icon: typeof Mail; title: string; lines: string[] }) {
  return (
    <div className="border border-hairline rounded-md p-6">
      <Icon className="text-brand" size={20} />
      <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      <div className="mt-2 space-y-1 text-sm">
        {lines.map((l) => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
}
