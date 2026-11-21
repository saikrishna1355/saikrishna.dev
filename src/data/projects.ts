// Featured projects shown in the "Selected Work" section.
// Order here is the display order. The first project renders as the flagship card.

export type DiagramKind = "agent" | "tree" | "router" | "crawler" | "deps";

export type ProjectLink = { label: string; href: string; external?: boolean };

export type Project = {
  id: string;
  title: string;
  role: string; // short positioning label, e.g. "Flagship AI Agent"
  categories: string[];
  summary: string;
  detail?: string;
  features: string[];
  pipeline: string[];
  pipelineLabel?: string;
  tech: string[];
  techLabel?: string;
  diagram: DiagramKind;
  links: ProjectLink[];
  roadmap?: string[]; // planned work, clearly labelled as not yet built
};

export const projects: Project[] = [
  {
    id: "voice-agent",
    title: "Voice Controlled AI Browser Agent",
    role: "Flagship AI Agent",
    categories: ["Enterprise Browser Automation", "AI Agents"],
    summary:
      "An intelligent browser automation agent that turns natural voice commands into executable browser workflows. It uses LLM-based reasoning and planning to understand intent, generate action sequences, interact with DOM elements, and automate complete business workflows.",
    detail:
      "Designed for enterprise scenarios such as insurance quotation, customer onboarding, automated form filling, and end-to-end purchase journeys without manual browser interaction.",
    features: [
      "Voice Conversation",
      "Speech-to-Text Processing",
      "LLM-Based Intent Recognition",
      "AI Planning & Reasoning",
      "DOM-Aware Browser Navigation",
      "Automated Form Filling",
      "Browser Action Execution",
      "Workflow Verification",
    ],
    pipeline: ["Voice Capture", "Speech Transcript", "LLM Reasoning", "Planner Steps", "Action Engine", "Browser DOM Verification"],
    tech: ["Python", "LLMs", "Playwright", "Browser Automation", "Voice AI"],
    diagram: "agent",
    links: [{ label: "Discuss this project", href: "#contact" }],
  },
  {
    id: "vectorless-rag",
    title: "Vectorless RAG",
    role: "AI Retrieval Architecture",
    categories: ["AI Knowledge Retrieval", "Document Intelligence"],
    summary:
      "A document question-answering system that retrieves information from PDFs without a vector database or embedding infrastructure.",
    detail:
      "Documents are transformed into structured, navigable trees, enabling structure-aware retrieval and contextual LLM-based answers.",
    features: [
      "PDF Document Parsing",
      "Hierarchical Tree-Based Representation",
      "Structure-Aware Retrieval",
      "Contextual Information Extraction",
      "LLM-Based Question Answering",
      "No Vector Database Dependency",
      "No Embedding Infrastructure Requirement",
    ],
    pipeline: ["PDF Documents", "Tree Structure", "Retrieval Engine", "LLM", "Contextual Answer"],
    tech: ["Python", "PDF Processing", "Tree-Based Retrieval", "LLM Integration"],
    diagram: "tree",
    links: [{ label: "Discuss this project", href: "#contact" }],
  },
  {
    id: "llm-optimizer",
    title: "LLM Optimizer SDK",
    role: "LLM Infrastructure",
    categories: ["Published Developer Infrastructure", "LLM Engineering"],
    summary:
      "An open-source Node.js SDK that optimizes LLM API usage, reduces redundant inference requests, and improves reliability through caching, prompt optimization, and multi-provider routing.",
    features: [
      "Prompt Deduplication",
      "Response Caching",
      "LLM Provider Routing",
      "Provider Failover",
      "Token Usage Optimization",
      "Token Redaction",
      "Redis & In-Memory Caching",
      "Plugin-Based Architecture",
      "CLI & SDK Integration",
    ],
    pipeline: ["User Prompt", "Optimizer", "Cache Layer", "Provider Router", "LLM Response"],
    tech: ["Ollama", "OpenAI", "Anthropic", "Gemini", "Redis", "Node.js"],
    techLabel: "Supported ecosystem",
    diagram: "router",
    links: [
      { label: "GitHub", href: "https://github.com/saikrishna1355/llm-optimizer", external: true },
      { label: "npm", href: "https://www.npmjs.com/org/llm-optimize", external: true },
    ],
  },
  {
    id: "website-observer",
    title: "AI Live Website Observer",
    role: "AI Monitoring & Testing",
    categories: ["Automated Site Testing", "AI Monitoring"],
    summary:
      "An AI-powered monitoring tool that crawls websites, identifies production issues, and generates diagnostic alerts.",
    detail:
      "It discovers pages through sitemap URLs, captures browser behavior, detects JavaScript runtime failures and console errors, and produces AI-assisted issue summaries to speed up debugging.",
    features: [
      "Automated Sitemap Discovery",
      "Website Crawling",
      "Page-Level Monitoring",
      "JavaScript Runtime Error Detection",
      "Browser Console Error Detection",
      "Broken Deployment Detection",
      "AI-Generated Issue Summaries",
      "Automated Fix Alerts",
    ],
    pipeline: ["Sitemap", "Crawl Pages", "Capture Issues", "Monitoring Dashboard", "AI Fix Alerts"],
    tech: ["Browser Automation", "JavaScript", "AI/LLM Integration", "Web Monitoring"],
    diagram: "crawler",
    links: [{ label: "Discuss this project", href: "#contact" }],
  },
  {
    id: "dependency-check",
    title: "Dependency Check",
    role: "Application Security",
    categories: ["Application Security", "Software Supply Chain Security"],
    summary:
      "A web-based dependency security analysis tool. Developers upload a package-lock.json or composer.lock file to find vulnerable third-party packages, see affected versions, review CVE details, and get available fixed versions.",
    features: [
      "Automated Dependency Analysis",
      "npm and Composer Package Scanning",
      "CVE Vulnerability Detection",
      "Affected Version Identification",
      "Fixed Version Recommendations",
      "Security Assessment Reports",
      "Developer-Friendly Vulnerability Insights",
    ],
    pipeline: [
      "Upload Dependency Files",
      "Parse Packages",
      "Retrieve Vulnerability Intelligence",
      "Identify Vulnerabilities",
      "Find Fixed Versions",
      "Generate Security Report",
    ],
    tech: ["package-lock.json (npm)", "composer.lock (Composer)", "CVE Data"],
    techLabel: "Supported inputs",
    diagram: "deps",
    links: [{ label: "Live project", href: "https://dependency-check.vercel.app/", external: true }],
    roadmap: ["AI-assisted vulnerability explanations", "Remediation recommendations", "Automated patch impact analysis"],
  },
];
