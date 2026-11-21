// Shared site identity used by metadata, sitemap, robots and structured data.

// Absolute base URL. Set NEXT_PUBLIC_SITE_URL to your custom domain (e.g. https://saikrishna.dev).
// On Vercel it falls back to the project's production domain; locally to localhost.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export const NAME = "Sai Krishna Muppuri";
export const TITLE = `${NAME} | AI-Focused Software Engineer`;
export const DESCRIPTION =
  "AI-focused Software Engineer building browser AI agents, vectorless RAG, LLM infrastructure, AI website monitoring, and developer security tools.";

export const LINKS = {
  github: "https://github.com/saikrishna1355",
  linkedin: "https://linkedin.com/in/muppuri-sai-krishna-94a812190",
  email: "saikrishna.dev2001@gmail.com",
};
