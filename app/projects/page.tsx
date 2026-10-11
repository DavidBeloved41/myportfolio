import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | David Atakpa",
  description: "Explore software products in development by David Atakpa, including LedgerFlow AI and the Job Search App.",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "Projects | David Atakpa",
    description: "Explore software products in development by David Atakpa, including LedgerFlow AI and the Job Search App.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="page-main" id="main-content">
      <section className="page-intro projects-intro">
        <div className="container page-intro-inner">
          <p className="eyebrow">PROJECTS / SELECTED WORK</p>
          <h1>Projects under development.</h1>
          <p className="page-lede">Two current projects at different stages, with case studies focused on scope and implementation.</p>
          <span className="project-count">{String(projects.length).padStart(2, "0")} PROJECTS · ALL IN PROGRESS</span>
        </div>
      </section>
      <section className="section projects-index-section">
        <div className="container">
          <SectionHeading eyebrow="CURRENT WORK" title="Scope and implementation status." description="Implemented refers to source code, not verified deployment. Planned work is labeled separately." />
          <div className="project-grid project-grid-index">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>
      <section className="projects-note-section">
        <div className="container projects-note">
          <span className="note-index">NOTE / 01</span>
          <p>Status labels distinguish implemented source from planned or unverified work.</p>
          <Link className="text-link" href="/contact">Email me about a project <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
      </section>
    </main>
  );
}