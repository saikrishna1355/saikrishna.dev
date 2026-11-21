// Everything the chatbot knows. Edit this file to change what it says.
// - keywords: important words that strongly signal this topic (weight x3)
// - examples: sample questions people might ask (weight x1)
// - answer: first-person Markdown. Supports **bold**, "- " bullets and [text](url).

export type Entry = {
  id: string;
  keywords: string[];
  examples: string[];
  answer: string;
};

export const FALLBACK =
  "I don't have an answer for that yet. You can ask me about my **name**, **current work**, **projects**, **skills**, **open source**, **experience**, or **how to contact me**.";

export const knowledge: Entry[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "hii", "namaste"],
    examples: ["hi there", "hello", "good morning", "good evening"],
    answer:
      "Hi! I'm Sai Krishna. Ask me about my work, projects, skills, or how to reach me.",
  },
  {
    id: "name",
    keywords: ["name", "called", "who"],
    examples: [
      "what is your name",
      "whats your name",
      "who are you",
      "introduce yourself",
      "tell me about yourself",
      "about you",
    ],
    answer:
      "My name is **Sai Krishna Muppuri**. I'm a Senior Software Engineer who loves building AI-powered products and developer tools.",
  },
  {
    id: "current-work",
    keywords: ["currently", "now", "present", "current", "doing", "working"],
    examples: [
      "what are you currently working on",
      "what are you working on now",
      "what do you do",
      "current role",
      "current job",
      "where do you work",
      "which company",
    ],
    answer:
      "I'm a **Senior Software Engineer at Novac Technology Solutions** (2025 to present). Lately I've been focused on AI products and developer tools, such as:\n- **LLM Optimizer SDK** for prompt optimization, caching and provider routing\n- **AI Live Website Observer** for monitoring sites and sending AI fix alerts\n- **Voice Controlled AI Browser Agent**",
  },
  {
    id: "experience",
    keywords: ["experience", "career", "background", "years", "history", "previous", "before", "past", "cognizant", "novac", "award", "awards"],
    examples: [
      "how many years of experience do you have",
      "tell me about your experience",
      "previous companies",
      "work history",
      "where did you work before",
    ],
    answer:
      "I have **3+ years of experience** and have delivered **20+ projects**.\n- **Senior Software Engineer**, Novac Technology Solutions (2025 to present)\n- **Software Engineer**, Novac Technology Solutions (2023 to 2025)\n- **Programmer Analyst Trainee**, Cognizant (2022)\n\nI've also received 3+ performance awards at Novac.",
  },
  {
    id: "projects",
    keywords: ["projects", "project", "built", "built", "portfolio", "made", "created", "build"],
    examples: [
      "what projects have you built",
      "tell me about your projects",
      "show me your work",
      "what have you made",
    ],
    answer:
      "Here are my main projects:\n- **Voice Controlled AI Browser Agent**: a voice-first agent that fills insurance forms and completes workflows through the DOM\n- **Vectorless RAG**: tree-based retrieval that answers queries without a vector database\n- **LLM Optimizer SDK**: a TypeScript monorepo for prompt optimization, caching, provider routing, retries and analytics\n- **AI Live Website Observer**: crawls sitemaps, captures broken images and console errors, builds dashboards and sends AI fix alerts\n- **Dependency Check**: scans package-lock.json and composer.lock files for vulnerable packages and recommends fixed versions ([live](https://dependency-check.vercel.app/))",
  },
  {
    id: "project-dependency",
    keywords: ["dependency", "dependencies", "vulnerability", "vulnerabilities", "cve", "composer", "lock", "supply", "chain", "scan", "scanner"],
    examples: ["tell me about dependency check", "do you have a security project", "vulnerability scanner"],
    answer:
      "**Dependency Check** is a web tool I built for dependency security. You upload a **package-lock.json** or **composer.lock** file, and it finds vulnerable packages, shows affected versions and CVE details, and recommends fixed versions.\n\nTry it here: [dependency-check.vercel.app](https://dependency-check.vercel.app/)\n\nAI-assisted vulnerability explanations are on my roadmap.",
  },
  {
    id: "project-voice",
    keywords: ["voice", "browser", "agent", "insurance", "dom"],
    examples: ["tell me about the voice controlled ai browser agent", "voice agent"],
    answer:
      "The **Voice Controlled AI Browser Agent** is a voice-first AI agent. You speak, and it fills insurance forms and completes workflows by working directly with the page DOM.",
  },
  {
    id: "project-rag",
    keywords: ["rag", "vectorless", "retrieval", "vector"],
    examples: ["tell me about vectorless rag", "what is vectorless rag", "do you know rag"],
    answer:
      "**Vectorless RAG** is a tree-based retrieval system. It answers queries without needing a vector database.",
  },
  {
    id: "project-llm",
    keywords: ["optimizer", "sdk", "llm", "prompt", "caching", "monorepo"],
    examples: ["tell me about llm optimizer sdk", "what is the llm optimizer"],
    answer:
      "**LLM Optimizer SDK** is a TypeScript monorepo. It handles prompt optimization, caching, provider routing, retries and analytics. The packages are published on npm.",
  },
  {
    id: "project-observer",
    keywords: ["observer", "website", "crawl", "crawler", "sitemap", "monitor", "monitoring"],
    examples: ["tell me about ai live website observer", "website monitoring project"],
    answer:
      "**AI Live Website Observer** crawls sitemaps, captures broken images and console errors, generates dashboards, and sends AI fix alerts.",
  },
  {
    id: "skills",
    keywords: ["skills", "skill", "tech", "stack", "technologies", "technology", "languages", "tools", "expertise"],
    examples: [
      "what is your tech stack",
      "what technologies do you know",
      "what are your skills",
      "which languages do you use",
    ],
    answer:
      "My tech stack:\n- **Frontend:** React.js, Next.js, Angular, TypeScript\n- **Backend:** Node.js, PHP, Laravel Lumen\n- **Databases:** MySQL, MongoDB, Redis\n- **Cloud:** AWS (EC2, S3, RDS, CloudWatch)\n- **AI:** Claude API, OpenAI API, AI agents, MCP, browser automation, Playwright\n- **DevOps:** Docker, GitHub Actions, CI/CD, Nginx, PM2\n- **Security:** JWT, OAuth, OWASP, VAPT",
  },
  {
    id: "frontend",
    keywords: ["frontend", "react", "nextjs", "next", "angular", "typescript", "javascript"],
    examples: ["do you know react", "do you know angular", "frontend skills"],
    answer:
      "On the frontend I work with **React.js, Next.js, Angular and TypeScript**.",
  },
  {
    id: "backend",
    keywords: ["backend", "node", "nodejs", "php", "laravel", "lumen", "api", "mysql", "mongodb", "redis", "database"],
    examples: ["backend skills", "which databases do you use", "do you know node"],
    answer:
      "On the backend I use **Node.js, PHP and Laravel Lumen**, with **MySQL, MongoDB and Redis** for data.",
  },
  {
    id: "ai",
    keywords: ["ai", "claude", "openai", "mcp", "playwright", "automation", "llm", "gpt"],
    examples: ["what ai experience do you have", "do you work with llms", "ai skills"],
    answer:
      "I build AI products with the **Claude API and OpenAI API**, plus **AI agents, MCP and browser automation with Playwright**.",
  },
  {
    id: "devops",
    keywords: ["devops", "docker", "aws", "cloud", "cicd", "nginx", "pm2", "deploy", "deployment", "github"],
    examples: ["do you know docker", "cloud experience", "devops skills", "do you know aws"],
    answer:
      "For cloud and DevOps I use **AWS (EC2, S3, RDS, CloudWatch), Docker, GitHub Actions, CI/CD, Nginx and PM2**.",
  },
  {
    id: "security",
    keywords: ["security", "jwt", "oauth", "owasp", "vapt", "secure"],
    examples: ["security skills", "do you know owasp", "do you do vapt"],
    answer:
      "On security I work with **JWT, OAuth, OWASP practices and VAPT**.",
  },
  {
    id: "opensource",
    keywords: ["open", "source", "opensource", "npm", "package", "packages", "downloads", "library", "libraries"],
    examples: [
      "do you do open source",
      "what npm packages have you published",
      "open source contributions",
    ],
    answer:
      "My open source work has **25,175+ npm downloads**:\n- **create-nodejs-app**\n- **LLM Optimizer packages**\n- **duplicate-tab-detector**\n- **bot-detection**: a zero-config client bot detector ([npm](https://www.npmjs.com/package/bot-detection))",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "mail", "reach", "linkedin", "github", "connect", "phone"],
    examples: [
      "how can i contact you",
      "what is your email",
      "how do i reach you",
      "your linkedin",
      "your github",
    ],
    answer:
      "You can reach me here:\n- **Email:** [saikrishna.dev2001@gmail.com](mailto:saikrishna.dev2001@gmail.com)\n- **GitHub:** [github.com/saikrishna1355](https://github.com/saikrishna1355)\n- **LinkedIn:** [linkedin.com/in/muppuri-sai-krishna-94a812190](https://linkedin.com/in/muppuri-sai-krishna-94a812190)",
  },
  {
    id: "availability",
    keywords: ["notice", "hire", "hiring", "available", "availability", "join", "opportunity", "opportunities", "freelance", "job"],
    examples: [
      "what is your notice period",
      "are you available for hire",
      "when can you join",
      "open to opportunities",
    ],
    answer:
      "My notice period is **90 days**. If you'd like to talk about an opportunity, email me at [saikrishna.dev2001@gmail.com](mailto:saikrishna.dev2001@gmail.com).",
  },
  {
    id: "hobbies",
    keywords: ["hobby", "hobbies", "interests", "interest", "free", "fun", "passion", "passionate", "like"],
    examples: [
      "what are your hobbies",
      "what do you do for fun",
      "what are you passionate about",
      "what do you like",
    ],
    answer:
      "I enjoy:\n- Building AI-powered products and developer tools\n- Exploring new LLM capabilities and browser automation\n- Open source, clean code and shipping real products\n- Problem solving and learning new tech",
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank", "thankyou", "bye", "goodbye", "cheers"],
    examples: ["thank you", "thanks a lot", "bye"],
    answer: "You're welcome! Feel free to ask anything else about my work.",
  },
];
