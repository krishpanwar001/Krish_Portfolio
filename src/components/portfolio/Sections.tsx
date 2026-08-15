import { motion } from "motion/react";
import {
  Award,
  BadgeCheck,
  Braces,
  Bot,
  ExternalLink,
  Github,
  GraduationCap,
  Sparkles,
  Wrench,
  Layers,
} from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Reveal";
import {
  about,
  certifications,
  education,
  experience,
  profile,
  project,
  skillGroups,
  stats,
} from "@/data/profile";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="A focused start, built on fundamentals." />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {about.map((p, i) => (
          <Reveal key={p} delay={i * 0.08} className="md:col-span-2 md:first:col-span-3">
            <p className="glass rounded-3xl p-7 text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          </Reveal>
        ))}
        <Reveal delay={0.2}>
          <div className="glass h-full rounded-3xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Career goals
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              {profile.goals.map((g) => (
                <li key={g} className="flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" aria-hidden="true" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic background." />
      <ol className="mt-12 space-y-4">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.08}>
            <li className="glass group relative flex flex-col gap-3 rounded-3xl p-7 transition-colors hover:bg-secondary/50 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{e.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                </div>
              </div>
              <div className="sm:text-right">
                {e.period ? <p className="text-sm text-muted-foreground">{e.period}</p> : null}
                <p className="text-sm font-semibold text-primary">{e.detail}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title={experience.heading} description={experience.summary} />
      <Reveal delay={0.1} className="mt-12">
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Layers className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Python Full Stack Development & Artificial Intelligence
                </p>
              </div>
            </div>
            <span className="glass rounded-full px-4 py-1.5 text-xs font-semibold text-primary">
              {experience.period}
            </span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Projects" title="Selected work." />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="glass relative h-full overflow-hidden rounded-3xl p-8 sm:p-10"
          >
            <div
              className="pointer-events-none absolute inset-x-0 -top-24 h-56 bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
            <p className="relative text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Featured
            </p>
            <h3 className="relative mt-4 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
            <p className="relative mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.description}
            </p>
            <ul className="relative mt-7 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-foreground/85"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href={project.githubUrl || "#projects"}
                target={project.githubUrl ? "_blank" : undefined}
                rel={project.githubUrl ? "noopener noreferrer" : undefined}
                title={project.githubUrl || "GitHub repository"}
                aria-label="GitHub repository"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Github className="size-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={project.liveUrl || "#home"}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                Live Demo
              </a>
            </div>
          </motion.article>
        </Reveal>

        <div className="grid gap-4">
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-7">
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Overview
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A premium personal portfolio website showcasing education, technical skills, career
                goals, certifications, and professional profile.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="glass grid grid-cols-2 gap-3 rounded-3xl p-7">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-semibold">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

const groupIcon: Record<string, typeof Braces> = {
  Programming: Braces,
  AI: Bot,
  Tools: Wrench,
  "Focus Area": Sparkles,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="Tools and technologies." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = groupIcon[group.category] ?? Braces;
          return (
            <Reveal key={group.category} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="glass h-full rounded-3xl p-7"
              >
                <span className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-base font-medium text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading eyebrow="Certifications" title="Verified learning." />
      <ol className="relative mt-12 space-y-4 border-l border-border pl-6 sm:pl-10">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <li className="relative">
              <motion.span
                aria-hidden="true"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, type: "spring", stiffness: 300, damping: 18 }}
                className="absolute -left-[1.9rem] top-8 size-3 rounded-full bg-primary sm:-left-[2.9rem]"
              />
              <div className="glass flex items-start gap-4 rounded-3xl p-7 transition-colors hover:bg-secondary/50">
                <span className="rounded-2xl bg-primary/10 p-3 text-primary">
                  {i === 0 ? (
                    <Award className="size-5" aria-hidden="true" />
                  ) : (
                    <BadgeCheck className="size-5" aria-hidden="true" />
                  )}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
