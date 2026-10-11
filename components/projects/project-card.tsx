import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectVisual } from "@/components/projects/project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        aria-label={`View ${project.title} case study`}
        className="project-card-visual-link"
        href={`/projects/${project.slug}`}
      >
        <ProjectVisual project={project} />
      </Link>
      <div className="project-card-content">
        <div className="project-card-heading">
          <div>
            <p className="eyebrow project-category">{project.category}</p>
            <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
          </div>
          <span className="status-pill"><i />{project.status}</span>
        </div>
        <p className="project-description">{project.shortDescription}</p>
        <p className="project-implementation">{project.implementationSummary}</p>
        <p className="eyebrow technology-label">TECHNOLOGY DIRECTION</p>
        <ul aria-label={`${project.title} technology direction`} className="technology-list">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <Link className="text-link project-card-link" href={`/projects/${project.slug}`}>
          View case study <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}