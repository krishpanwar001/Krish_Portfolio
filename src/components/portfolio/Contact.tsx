import { useState, type FormEvent } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { profile } from "@/data/profile";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio enquiry from ${String(data.get("name") ?? "")}`);
    const body = encodeURIComponent(
      `${String(data.get("message") ?? "")}\n\nReply to: ${String(data.get("email") ?? "")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Opening your email app…");
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        description="Available for internships, projects and collaboration in Python full-stack development and AI."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glass flex h-full flex-col gap-4 rounded-3xl p-7">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-secondary"
            >
              <span className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </span>
                <span className="block break-all text-sm font-medium">{profile.email}</span>
              </span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-secondary"
            >
              <span className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </span>
                <span className="block text-sm font-medium">{profile.phone}</span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                placeholder="Tell me about the opportunity…"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Send className="size-4" aria-hidden="true" />
              Send message
            </button>
            <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
              {sent ? "Your email app should have opened with the message ready to send." : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-lg font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">B.Tech CSE Student</p>
          <p className="text-sm text-muted-foreground">Python Full Stack Developer | AI Developer</p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
