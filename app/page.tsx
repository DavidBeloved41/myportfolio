import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { CurrentlyBuilding } from "@/components/sections/currently-building";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-mark" /> SOFTWARE DEVELOPER · GHANA</p>
            <h1>Hi, I’m David. <span>I’m a Software Developer.</span></h1>
            <p className="hero-description">
              I build thoughtful digital products and reliable application systems across web, mobile, backend, and data-driven software. I value maintainable code, solving real problems, and continuing to grow as an engineer.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/projects">Explore My Work <ArrowRight aria-hidden="true" size={16} /></Link>
              <Link className="button button-outline" href="/about">About Me</Link>
              <Link className="text-link hero-contact-link" href="/contact">Get in Touch <ArrowUpRight aria-hidden="true" size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section selected-work" id="selected-work">
        <div className="container">
          <SectionHeading
            action={<Link className="text-link section-action" href="/projects">All projects <ArrowUpRight aria-hidden="true" size={16} /></Link>}
            description="Two projects at different stages of development."
            eyebrow="SELECTED WORK · 01 / 02"
            title="Software with a job to do."
          />
          <div className="project-grid">
            {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>

      <CurrentlyBuilding />

      <section className="home-about section">
        <div className="container home-about-inner">
          <p className="eyebrow">A PRACTICAL WAY OF THINKING</p>
          <p className="home-about-statement">Good software starts with <span>understanding the work</span> it needs to do.</p>
          <Link className="text-link" href="/about">A little more about me <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
      </section>

      <section className="contact-banner">
        <div className="container contact-banner-inner">
          <div><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s talk through it.</h2></div>
          <Link className="button button-accent" href="/contact">Get in touch <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
