import type { ReactNode } from "react";

export default function ProjectsTemplate({ children }: { children: ReactNode }) {
  return <div className="project-page-transition">{children}</div>;
}