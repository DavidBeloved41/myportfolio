import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "ledgerflow-ai",
    slug: "ledgerflow-ai",
    title: "LedgerFlow AI",
    shortDescription:
      "SME operations platform in development; the public repository is incomplete.",
    implementationSummary:
      "Core foundations are partial. The public repository does not contain the complete application source.",
    description:
      "LedgerFlow AI is in development, with some implementation underway. The public repository does not yet contain the complete application source. Its intended scope includes SME sales, inventory, customer accounts, and debt follow-up; these capabilities remain planned or unverified here.",
    category: "Business software · AI",
    status: "In development",
    featured: true,
    visualVariant: "ledger",
    architectureDiagramId: "ledgerflow",
    githubUrl: "https://github.com/DavidBeloved41/LedgerFlow-AI",
    technologies: [
      "React",
      "TypeScript",
      "Django",
      "Python",
      "Supabase",
      "PostgreSQL",
      "AI APIs",
      "WhatsApp integration",
    ],
    problem:
      "SMEs may track sales, stock, and customer debts across separate tools or manual records. LedgerFlow AI is intended to bring those workflows into one place.",
    intendedUsers:
      "Small and medium-sized businesses managing sales, inventory, customer accounts, and debt follow-up.",
    solution:
      "The product direction combines an operations dashboard with sales, inventory, and customer-account workflows, alongside AI assistance and messaging integrations as the platform develops.",
    intendedImpact:
      "Give SMEs a clearer place to manage everyday operations and customer follow-up.",
    architecture:
      "The public LedgerFlow-AI repository contains only a 15-byte README.md and no application source. React, TypeScript, Django, Python, Supabase, PostgreSQL, AI APIs, and WhatsApp integration appear in the portfolio project notes, but no components, connections, or working integrations can be verified.",
    challenges: [
      "The incomplete public repository prevents review of the full application and its planned workflows.",
      "Feature behavior, testing, and deployment have not been verified.",
    ],
    workflow: [
      {
        title: "Business activity",
        description: "Bring sales and inventory workflows into a business dashboard.",
        status: "Planned",
      },
      {
        title: "Customer accounts",
        description: "Keep customer and debtor records alongside debt tracking.",
        status: "Planned",
      },
      {
        title: "Follow-up support",
        description: "Explore AI assistance, multilingual communication, and WhatsApp reminders.",
        status: "Planned",
      },
    ],
    features: [
      { name: "Core application foundations (partial implementation)", status: "In development" },
      { name: "Business dashboard", status: "Planned" },
      { name: "Sales tracking", status: "Planned" },
      { name: "Inventory management", status: "Planned" },
      { name: "Customer and debtor management", status: "Planned" },
      { name: "Automated debt reminders", status: "Planned" },
      { name: "WhatsApp interaction", status: "Planned" },
      { name: "AI assistance and multilingual communication", status: "Planned" },
    ],
    futureImprovements: [
      "Develop and validate the planned sales, inventory, and customer-account workflows.",
      "Explore AI-assisted and multilingual communication for business operations.",
    ],
  },
  {
    id: "job-search-app",
    slug: "job-search-app",
    title: "Job Search App",
    shortDescription:
      "Flutter recruitment app with substantial Supabase-backed workflows implemented in source.",
    implementationSummary:
      "Source includes substantial workflows. Runtime behavior, deployment, and external-service delivery are unverified.",
    description:
      "The Job Search App is a cross-platform Flutter application with substantial source implementation for Supabase authentication and data access, job seeker and employer workflows, applications, saved jobs, messaging, offline caching and synchronization, and AI integration code. It remains in development; this describes source code, not verified test results, deployed services, or production behavior.",
    category: "Mobile · Recruitment",
    status: "In development",
    featured: true,
    visualVariant: "recruitment",
    architectureDiagramId: "job-search",
    githubUrl: "https://github.com/DavidBeloved41/jobsearch_app",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    problem:
      "Job seekers need to find roles and track applications; employers need to post jobs and manage candidates. The product scope addresses both sides.",
    intendedUsers:
      "Job seekers and employers, with an administrator workflow for reviewing job posts.",
    solution:
      "The repository contains distinct job seeker and employer workflows, Supabase-backed authentication and data access, and an admin job-review flow. It also includes messaging, offline synchronization, and AI integration code. Runtime behavior, deployed services, and external-provider delivery have not been verified.",
    intendedImpact:
      "Make job discovery and recruitment easier to coordinate for job seekers and employers.",
    architecture:
      "Flutter initializes supabase_flutter with PKCE authentication and uses the Supabase client for Auth, Postgres-backed queries, resume storage, and an invocation of the ai-career-assistant Edge Function. That function validates the signed-in user and calls OpenAI. SQL migrations define per-user folder policies for the resumes bucket and notification email/SMS outboxes. Separate HTTP worker functions query those outboxes and contain Resend and Termii calls; no worker deployment or invocation schedule was found in the repository.",
    challenges: [
      "Runtime behavior across job-seeker, employer, and administrator workflows has not been verified.",
      "The app requests a public resume URL, while the storage migration does not make the resumes bucket public; deployed bucket visibility needs verification.",
      "Worker deployment and invocation schedule, Supabase configuration, offline synchronization, and external provider delivery remain unverified.",
    ],
    workflow: [
      {
        title: "Job seeker",
        description: "Source includes job discovery, saved jobs, profile and resume management, and application tracking.",
        status: "Implemented",
      },
      {
        title: "Employer",
        description: "Source includes job posting, employer dashboards, and candidate/application management.",
        status: "Implemented",
      },
      {
        title: "Admin",
        description: "Source includes an admin job-review workflow; deployed authorization is not verified.",
        status: "Implemented",
      },
    ],
    features: [
      { name: "Flutter cross-platform application", status: "Implemented" },
      { name: "Supabase authentication and role-based routing", status: "Implemented" },
      { name: "Job seeker and employer workflows", status: "Implemented" },
      { name: "Job posts, applications, and saved jobs", status: "Implemented" },
      { name: "Candidate and employer management", status: "Implemented" },
      { name: "Realtime messaging and in-app notification code", status: "Implemented" },
      { name: "Offline caching and queued-change synchronization", status: "Implemented" },
      { name: "Profile and resume management", status: "Implemented" },
      { name: "AI Edge Function integration code", status: "Implemented" },
      { name: "Email/SMS notification worker code; delivery unverified", status: "Implemented" },
      { name: "Admin job-review workflow", status: "Implemented" },
    ],
    futureImprovements: [
      "Validate the recruitment workflows for job seekers, employers, and administrators.",
      "Refine smart job-related features around practical user needs.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);