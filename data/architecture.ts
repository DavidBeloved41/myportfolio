export type ArchitectureStatus = "source" | "planned" | "unknown";

export type ArchitectureNode = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  status: ArchitectureStatus;
  lines: string[];
};

export type ArchitectureEdge = {
  id: string;
  path: string;
  label: string;
  labelX: number;
  labelY: number;
  direction?: "forward" | "both";
};

export type ArchitectureBoundary = {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
};

export type ArchitectureDiagramData = {
  id: "job-search" | "ledgerflow";
  title: string;
  summary: string;
  width: number;
  height: number;
  boundary?: ArchitectureBoundary;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  notes: string[];
};

export const architectureDiagrams: Record<ArchitectureDiagramData["id"], ArchitectureDiagramData> = {
  "job-search": {
    id: "job-search",
    title: "Job Search App architecture",
    summary: "Connections shown here are evidenced in the repository source. This does not verify deployed services or runtime behavior.",
    width: 1400,
    height: 720,
    boundary: {
      x: 315,
      y: 55,
      width: 735,
      height: 630,
      title: "SUPABASE PROJECT SERVICES",
    },
    nodes: [
      {
        id: "app",
        x: 30,
        y: 260,
        width: 235,
        height: 160,
        title: "Flutter app",
        status: "source",
        lines: ["Dart · supabase_flutter", "Auth · data · resume storage", "Job seeker · employer · admin"],
      },
      {
        id: "auth",
        x: 350,
        y: 100,
        width: 275,
        height: 95,
        title: "Supabase Auth",
        status: "source",
        lines: ["PKCE flow configured in app startup"],
      },
      {
        id: "postgres",
        x: 350,
        y: 255,
        width: 275,
        height: 140,
        title: "Supabase PostgreSQL",
        status: "source",
        lines: ["Profiles · jobs · applications", "Messages · notifications", "Queried through Supabase client"],
      },
      {
        id: "resumes",
        x: 350,
        y: 455,
        width: 275,
        height: 125,
        title: "Storage: resumes",
        status: "source",
        lines: ["Resume upload and delete code", "Per-user folder policies in SQL"],
      },
      {
        id: "ai-function",
        x: 700,
        y: 100,
        width: 300,
        height: 112,
        title: "ai-career-assistant",
        status: "source",
        lines: ["Invoked by Flutter functions.invoke", "Checks user auth; handles AI actions"],
      },
      {
        id: "outbox",
        x: 700,
        y: 270,
        width: 300,
        height: 116,
        title: "Notification outboxes",
        status: "source",
        lines: ["Email and SMS queue tables", "Notification insert triggers enqueue rows"],
      },
      {
        id: "email-worker",
        x: 700,
        y: 450,
        width: 145,
        height: 126,
        title: "Email worker",
        status: "source",
        lines: ["Edge Function", "Reads outbox", "Calls Resend"],
      },
      {
        id: "sms-worker",
        x: 855,
        y: 450,
        width: 145,
        height: 126,
        title: "SMS worker",
        status: "source",
        lines: ["Edge Function", "Reads outbox", "Calls Termii"],
      },
      {
        id: "openai",
        x: 1095,
        y: 100,
        width: 270,
        height: 112,
        title: "OpenAI API",
        status: "source",
        lines: ["Called by Edge Function code", "Requires server environment keys"],
      },
      {
        id: "resend",
        x: 1095,
        y: 280,
        width: 270,
        height: 95,
        title: "Resend",
        status: "source",
        lines: ["Email provider endpoint in worker code"],
      },
      {
        id: "termii",
        x: 1095,
        y: 465,
        width: 270,
        height: 95,
        title: "Termii",
        status: "source",
        lines: ["SMS provider endpoint in worker code"],
      },
    ],
    edges: [
      { id: "app-auth", path: "M265 295 H315 V148 H350", label: "", labelX: 0, labelY: 0 },
      { id: "app-db", path: "M265 335 H350", label: "", labelX: 0, labelY: 0 },
      { id: "app-storage", path: "M265 375 H315 V515 H350", label: "", labelX: 0, labelY: 0 },
      { id: "app-ai", path: "M265 400 V640 H675 V212 H700", label: "functions.invoke()", labelX: 450, labelY: 625 },
      { id: "ai-openai", path: "M1000 155 H1095", label: "", labelX: 0, labelY: 0 },
      { id: "db-outbox", path: "M625 325 H700", label: "TRIGGER", labelX: 628, labelY: 308 },
      { id: "email-outbox", path: "M772 450 V386", label: "", labelX: 0, labelY: 0, direction: "both" },
      { id: "sms-outbox", path: "M927 450 V386", label: "", labelX: 0, labelY: 0, direction: "both" },
      { id: "email-resend", path: "M845 480 V400 H1045 V328 H1095", label: "", labelX: 0, labelY: 0 },
      { id: "sms-termii", path: "M1000 510 H1095", label: "", labelX: 0, labelY: 0 },
    ],
    notes: [
      "Only the resumes bucket is named in source. The app requests a public URL, while the SQL migration says it does not make the bucket public; verify the deployed bucket configuration.",
      "Email and SMS worker handlers are in the repository. Their deployment and invocation schedule/caller were not found in the inspected source.",
    ],
  },
  ledgerflow: {
    id: "ledgerflow",
    title: "LedgerFlow AI architecture evidence",
    summary: "The public repository contains a README only. This diagram separates that verified repository state from portfolio-listed direction and planned scope; it does not infer architecture connections.",
    width: 1100,
    height: 560,
    boundary: {
      x: 50,
      y: 50,
      width: 1000,
      height: 470,
      title: "PUBLIC REPOSITORY AND PORTFOLIO NOTES",
    },
    nodes: [
      {
        id: "repository",
        x: 80,
        y: 115,
        width: 270,
        height: 330,
        title: "Public repository",
        status: "source",
        lines: ["LedgerFlow-AI", "README.md only (15 bytes)", "No application source or schema", "Architecture cannot be verified"],
      },
      {
        id: "technology",
        x: 390,
        y: 115,
        width: 280,
        height: 220,
        title: "Listed technology direction",
        status: "unknown",
        lines: ["React · TypeScript", "Django · Python", "Supabase · PostgreSQL", "Not verifiable against source"],
      },
      {
        id: "scope",
        x: 710,
        y: 115,
        width: 300,
        height: 220,
        title: "Planned product scope",
        status: "planned",
        lines: ["Sales and inventory", "Customer accounts", "Debt follow-up"],
      },
      {
        id: "integrations",
        x: 390,
        y: 370,
        width: 620,
        height: 100,
        title: "Planned integrations",
        status: "planned",
        lines: ["AI APIs · WhatsApp integration · no working connections verified"],
      },
    ],
    edges: [],
    notes: [
      "No arrows are drawn because the available public source does not establish component relationships, request paths, or data ownership.",
      "Share the complete application source or an architecture note to replace this evidence map with a verified system diagram.",
    ],
  },
};