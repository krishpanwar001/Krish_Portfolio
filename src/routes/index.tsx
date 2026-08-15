import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Certifications,
  Education,
  Experience,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Krish Panwar | Python Full Stack Developer & AI Developer";
const description =
  "Portfolio of Krish Panwar, a B.Tech Computer Science and Engineering student focused on Python Full Stack Development and Artificial Intelligence.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Krish Panwar",
          email: "mailto:krish.panwar9909@gmail.com",
          telephone: "9548249909",
          jobTitle: "Python Full Stack Developer & AI Developer",
          alumniOf: "Shri Ram Group of Colleges, Muzaffarnagar",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
