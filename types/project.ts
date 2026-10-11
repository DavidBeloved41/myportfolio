export type ProjectStatus = "In development" | "Planned" | "Complete";

export type FeatureStatus = "Implemented" | "In development" | "Planned";

export type ProjectFeature = {
  name: string;
  status: FeatureStatus;
};

export type ProjectWorkflowStep = {
  title: string;
  description: string;
  status: FeatureStatus;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  implementationSummary: string;
  description: string;
  category: string;
  status: ProjectStatus;
  featured: boolean;
  visualVariant?: "ledger" | "recruitment";
  architectureDiagramId?: "job-search" | "ledgerflow";
  technologies: string[];
  problem?: string;
  intendedUsers?: string;
  solution?: string;
  intendedImpact?: string;
  features?: ProjectFeature[];
  workflow?: ProjectWorkflowStep[];
  architecture?: string;
  challenges?: string[];
  lessonsLearned?: string[];
  futureImprovements?: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: { src: string; alt: string }[];
};