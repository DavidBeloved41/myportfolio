import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

const explorations = ["AI", "Automation", "Cloud", "Developer tools"];

export function CurrentlyBuilding({ id = "currently-building" }: { id?: string }) {
  return (
    <section aria-labelledby="currently-building-heading" className="building-section" id={id}>
      <div className="container building-inner">
        <div className="building-heading">
          <p className="eyebrow">IN PROGRESS / ALWAYS LEARNING</p>
          <h2 id="currently-building-heading">Currently<br /><span>building.</span></h2>
          <p>LedgerFlow AI is still taking shape. The Job Search App has substantial workflows implemented in source.</p>
        </div>
        <div className="building-list">
          {featuredProjects.map((project, index) => (
            <Link className="building-project" href={`/projects/${project.slug}`} key={project.id}>
              <span className="building-index">0{index + 1}</span>
              <span className="building-project-copy"><strong>{project.title}</strong><small>{project.category}</small></span>
              <span className="building-status"><i />{project.status}</span>
              <ArrowUpRight aria-hidden="true" className="building-arrow" size={18} />
            </Link>
          ))}
          <div className="exploration-row"><span className="exploration-label">Exploring</span><ul>{explorations.map((area) => <li key={area}>{area}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}