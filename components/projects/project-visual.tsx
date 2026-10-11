import type { Project } from "@/types/project";

export function ProjectVisual({ project }: { project: Project }) {
  const scope = project.visualVariant === "ledger"
    ? { label: "Planned product scope", items: ["Sales and inventory", "Customer accounts", "Debt follow-up"] }
    : project.visualVariant === "recruitment"
      ? { label: "Workflows in source", items: ["Job seeker", "Employer", "Admin review"] }
      : { label: "Technology direction", items: project.technologies.slice(0, 3) };
  const variant = project.visualVariant === "ledger"
    ? "ledger"
    : project.visualVariant === "recruitment"
      ? "jobs"
      : "generic";

  return (
    <div className={`project-visual visual-${variant}`}>
      <div className="visual-topline">
        <span>{project.category}</span>
        <span className="visual-status"><i aria-hidden="true" />{project.status}</span>
      </div>
      <div className="visual-content">
        <p className="visual-index">PROJECT / {project.id.toUpperCase().replaceAll("-", " ")}</p>
        <p className="visual-title">{project.title}</p>
        <p className="visual-description">{project.shortDescription}</p>
      </div>
      <div className="visual-scope">
        <p>{scope.label}</p>
        <ul>{scope.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </div>
  );
}