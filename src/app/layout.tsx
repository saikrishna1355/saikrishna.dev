import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

// Absolute base URL for Open Graph / Twitter images. Set NEXT_PUBLIC_SITE_URL to your
// custom domain; on Vercel it falls back to the project's production domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

const TITLE = "Sai Krishna Muppuri | AI-Focused Software Engineer";
const DESCRIPTION =
  "AI-focused Senior Software Engineer building voice-driven browser agents, vectorless RAG for document intelligence, LLM infrastructure SDKs, AI website monitoring, and dependency security tools.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["Sai Krishna Muppuri", "AI Software Engineer", "AI Engineer", "AI Agents", "Browser Automation", "Voice AI", "RAG", "Vectorless RAG", "Document Intelligence", "LLM Infrastructure", "LLM Optimizer", "AI Monitoring", "Application Security", "Dependency Scanning", "Senior Software Engineer", "React", "Next.js", "Node.js", "TypeScript", "Python", "Playwright"],
  authors: [{ name: "Sai Krishna Muppuri", url: "https://github.com/saikrishna1355" }],
  creator: "Sai Krishna Muppuri",
  openGraph: {
    type: "website",
    url: "/",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Sai Krishna Muppuri Portfolio",
    images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "Sai Krishna Muppuri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "AI agents, document intelligence, LLM infrastructure, AI monitoring, and developer security tools.",
    images: ["/profile.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body className="min-h-full flex flex-col">{children}<Analytics /></body>
    </html>
  );
}
