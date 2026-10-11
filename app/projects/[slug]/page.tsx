import { ArrowLeft, ArrowUpRight, Check, Code2, Globe2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDialog } from "@/components/projects/architecture-dialog";
import { ProjectVisual } from "@/components/projects/project-visual";
import { projects } from "@/data/projects";
import type { ProjectFeature } from "@/types/project";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return { title: "Project not found | David Atakpa" };
  return {
    title: `${project.title} | David Atakpa`,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      url: `/projects/${project.slug}`,
      title: `${project.title} | David Atakpa`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

function FeatureStatus({ feature }: { feature: ProjectFeature }) {
  return (
    <li className="feature-item">
      <span className={`feature-status feature-status-${feature.status.toLowerCase().replaceAll(" ", "-")}`}>
        {feature.status === "Implemented" ? <Check aria-hidden="true" size={13} /> : <i aria-hidden="true" />}
        {feature.status}
      </span>
      <span>{feature.name}</span>
    </li>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return (
    <main className="case-study" id="main-content">
      <section className="case-hero">
        <div className="container">
          <Link className="back-link" href="/projects"><ArrowLeft aria-hidden="true" size={15} /> All projects</Link>
          <div className="case-hero-grid">
            <div className="case-heading">
              <p className="eyebrow">{project.category}</p>
              <h1>{project.title}<span className="case-title-period">.</span></h1>
              <p className="case-lede">{project.description}</p>
              <span className="status-pill case-status"><i />{project.status}</span>
            </div>
            <ProjectVisual project={project} />
          </div>
          <div className="case-meta-row">
            <div><span>PROJECT</span><strong>{project.title}</strong></div>
            <div><span>FOCUS</span><strong>{project.category}</strong></div>
            <div><span>STATUS</span><strong>{project.status}</strong></div>
          </div>
        </div>
      </section>

      <div className="container case-content">
        <aside className="case-sidebar">
          <p className="eyebrow">ON THIS PAGE</p>
          <a href="#overview">Overview</a>
          {project.problem && <a href="#problem">Problem</a>}
          {project.intendedUsers && <a href="#users">Intended users</a>}
          {project.solution && <a href="#solution">Product direction</a>}
          <a href="#technology">Technology</a>
          {project.architecture && <a href="#architecture">Architecture</a>}
          {project.architectureDiagramId && <a href="#architecture-diagram">Architecture diagram</a>}
          {project.workflow && <a href="#workflow">How it works</a>}
          {project.features && <a href="#features">Features</a>}
          {project.challenges && project.challenges.length > 0 && <a href="#limitations">Limitations</a>}
          <a href="#current-status">Current status</a>
          {project.intendedImpact && <a href="#impact">Intended impact</a>}
          {project.futureImprovements && <a href="#next">Next steps</a>}
          <a href="#links">Links</a>
        </aside>
        <div className="case-sections">
          <section className="case-section" id="overview"><p className="eyebrow">01 / OVERVIEW</p><h2>What it is</h2><p>{project.shortDescription}</p></section>
          {project.problem && <section className="case-section" id="problem"><p className="eyebrow">02 / THE PROBLEM</p><h2>What needs to get easier.</h2><p>{project.problem}</p></section>}
          {project.intendedUsers && <section className="case-section" id="users"><p className="eyebrow">INTENDED USERS</p><h2>Who it is for</h2><p>{project.intendedUsers}</p></section>}
          {project.solution && <section className="case-section" id="solution"><p className="eyebrow">03 / PRODUCT DIRECTION</p><h2>A product direction for that work.</h2><p>{project.solution}</p></section>}
          <section className="case-section" id="technology"><p className="eyebrow">04 / TECHNOLOGY</p><h2>Tools behind the work.</h2><p className="case-section-intro">These are repository-listed technologies or current direction. Production use is not implied, and the project notes do not document selection rationale.</p><ul className="case-tech-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></section>
          {project.architecture && <section className="case-section" id="architecture"><p className="eyebrow">ENGINEERING / ARCHITECTURE</p><h2>Implementation shape</h2><p>{project.architecture}</p></section>}
          {project.architectureDiagramId && <ArchitectureDialog diagramId={project.architectureDiagramId} />}
          {project.workflow && <section className="case-section" id="workflow"><p className="eyebrow">05 / WORKFLOW</p><h2>Workflow status.</h2><p className="case-section-intro">Implemented means present in source code; it does not confirm successful testing or deployment. Planned items are unverified.</p><ol className="workflow-list">{project.workflow.map((step, index) => <li className="workflow-step" key={step.title}><span className="workflow-index">0{index + 1}</span><div><div className="workflow-title"><h3>{step.title}</h3><span className={`feature-status feature-status-${step.status.toLowerCase().replaceAll(" ", "-")}`}><i aria-hidden="true" />{step.status}</span></div><p>{step.description}</p></div></li>)}</ol></section>}
          {project.features && <section className="case-section" id="features"><p className="eyebrow">06 / IMPLEMENTATION STATUS</p><h2>Feature inventory</h2><p className="case-section-intro">Implemented describes source-level functionality only. Planned items have no confirmed implementation.</p><ul className="feature-list">{project.features.map((feature) => <FeatureStatus feature={feature} key={feature.name} />)}</ul></section>}
          {project.challenges && project.challenges.length > 0 && <section className="case-section" id="limitations"><p className="eyebrow">LIMITATIONS / VALIDATION</p><h2>What remains unverified</h2><ul className="case-bullet-list">{project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>}
          {project.lessonsLearned && project.lessonsLearned.length > 0 && <section className="case-section"><p className="eyebrow">WHAT I LEARNED</p><h2>Learning in the process.</h2><ul className="case-bullet-list">{project.lessonsLearned.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul></section>}
          <section className="case-status-section" id="current-status"><p className="eyebrow">09 / CURRENT STATUS</p><h2>{project.status}</h2><p>Implemented describes source-level functionality and does not imply successful testing or production deployment. Planned identifies functionality without confirmed implementation.</p></section>
          {project.intendedImpact && <section className="case-impact" id="impact"><p className="eyebrow">10 / INTENDED IMPACT</p><p>{project.intendedImpact}</p><span>Intended direction only; no outcome metrics are available.</span></section>}
          {project.futureImprovements && <section className="case-section" id="next"><p className="eyebrow">11 / NEXT STEPS</p><h2>Where it could go next.</h2><ul className="case-bullet-list">{project.futureImprovements.map((improvement) => <li key={improvement}>{improvement}</li>)}</ul></section>}
          <section className="case-links-section" id="links">
            <div><p className="eyebrow">PROJECT LINKS</p><h2>Follow the work.</h2></div>
            <div className="case-link-actions">
              {project.githubUrl && <a className="button button-outline" href={project.githubUrl} rel="noreferrer" target="_blank"><Code2 aria-hidden="true" size={16} /> GitHub <ArrowUpRight aria-hidden="true" size={14} /></a>}
              {project.liveUrl && <a className="button button-outline" href={project.liveUrl} rel="noreferrer" target="_blank"><Globe2 aria-hidden="true" size={16} /> Live demo <ArrowUpRight aria-hidden="true" size={14} /></a>}
              {!project.githubUrl && !project.liveUrl && <p className="unavailable-note">Public project links are not available yet.</p>}
            </div>
          </section>
        </div>
      </div>
      <section className="case-next-project"><div className="container"><Link className="text-link" href="/projects"><ArrowLeft aria-hidden="true" size={16} /> Back to all projects</Link></div></section>
    </main>
  );
}