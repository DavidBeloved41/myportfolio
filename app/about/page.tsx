import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CurrentlyBuilding } from "@/components/sections/currently-building";

const skillGroups = [
  { title: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Mobile", items: ["Flutter", "Dart", "Android", "Java"] },
  { title: "Backend", items: ["Node.js", "Express", "Django", "Python", "FastAPI", "C#"] },
  { title: "Databases", items: ["PostgreSQL", "Supabase", "MySQL", "Firebase", "Redis", "SQL"] },
  { title: "Cloud & tools", items: ["Git", "GitHub", "Docker", "AWS"] },
  { title: "AI", items: ["AI APIs", "AI-powered applications", "Automation", "AI agents"] },
];

export const metadata = {
  title: "About | David Atakpa",
  description: "About David Atakpa, a Ghana-based software developer and product builder working across web, mobile, backend, and AI-powered products.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About | David Atakpa",
    description: "About David Atakpa, a Ghana-based software developer and product builder working across web, mobile, backend, and AI-powered products.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-intro">
        <div className="container page-intro-inner">
          <p className="eyebrow">ABOUT / DAVID ATAKPA</p>
          <h1>How I approach software.</h1>
          <p className="page-lede">I’m David Atakpa, a software developer and product builder in Ghana. I like making practical software for real workflows.</p>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="about-story-heading">
            <p className="eyebrow">WHO I AM</p>
            <h2>Good products begin with understanding the work.</h2>
            <p>I start by looking at the people involved and the steps they repeat. That context helps me decide what the software needs to do.</p>
          </div>
          <div className="about-narrative-grid">
            <section className="about-narrative-item"><span>01 / WHAT I BUILD</span><h3>Interfaces and the systems behind them.</h3><p>Web and mobile products, supported by APIs and databases. My current projects are a business management platform and a Flutter recruitment app.</p></section>
            <section className="about-narrative-item"><span>02 / HOW I WORK</span><h3>Start with the workflow.</h3><p>I try to understand who needs to do what before choosing the shape of the software. From there, I focus on a practical path and work through the product and engineering details.</p></section>
            <section className="about-narrative-item"><span>03 / WHAT INTERESTS ME</span><h3>AI that earns its place.</h3><p>I’m interested in AI when it helps with real tasks: clearer decisions, less repetitive work, or more useful ways to interact with a product.</p></section>
            <section className="about-narrative-item"><span>04 / CURRENTLY LEARNING</span><h3>AI, automation, and cloud.</h3><p>I keep exploring how these tools fit into practical applications, alongside developer tools that make building and maintaining software easier.</p></section>
          </div>
          <Link className="text-link about-project-link" href="/projects">See what I’m building <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
      </section>

      <CurrentlyBuilding id="about-currently-building" />

      <section className="about-opportunity section">
        <div className="container about-opportunity-inner">
          <div><p className="eyebrow">OPEN TO</p><h2>Early-career software opportunities.</h2></div>
          <div><p>Software engineering internships, junior developer roles, and project collaboration.</p><Link className="text-link" href="/contact">Contact me <ArrowUpRight aria-hidden="true" size={16} /></Link></div>
        </div>
      </section>

      <section className="skills-section section">
        <div className="container">
          <div className="skills-heading">
            <div><p className="eyebrow">TOOLS &amp; TECHNOLOGY</p><h2>Tools I work with.</h2></div>
            <p>Areas I work with and continue to explore. This is a snapshot of interests, not a ranking of expertise.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <section className="skill-group" key={group.title}>
                <div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.title}</h3></div>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="container contact-banner-inner">
          <div><p className="eyebrow">LET’S TALK</p><h2>What are you working on?</h2></div>
          <Link className="button button-accent" href="/contact">Contact me <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
      </section>
    </main>
  );
}