import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SITE_URL, NAME, TITLE, DESCRIPTION, LINKS } from "@/lib/site";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

// Structured data so search engines understand who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "Senior Software Engineer",
  worksFor: { "@type": "Organization", name: "Novac Technology Solutions" },
  email: `mailto:${LINKS.email}`,
  sameAs: [LINKS.github, LINKS.linkedin],
  knowsAbout: ["AI Agents", "Browser Automation", "Retrieval-Augmented Generation", "LLM Infrastructure", "React", "Next.js", "Node.js", "TypeScript", "PHP", "Laravel", "AWS", "Application Security"],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["Sai Krishna Muppuri", "AI Software Engineer", "AI Engineer", "AI Agents", "Browser Automation", "Voice AI", "RAG", "Vectorless RAG", "Document Intelligence", "LLM Infrastructure", "LLM Optimizer", "AI Monitoring", "Application Security", "Dependency Scanning", "Senior Software Engineer", "React", "Next.js", "Node.js", "TypeScript", "Python", "Playwright"],
  authors: [{ name: NAME, url: LINKS.github }],
  creator: NAME,
  // og:image / twitter:image come from app/opengraph-image.tsx (1200x630).
  openGraph: {
    type: "profile",
    url: "/",
    title: TITLE,
    description: DESCRIPTION,
    siteName: `${NAME} Portfolio`,
    locale: "en_US",
    firstName: "Sai Krishna",
    lastName: "Muppuri",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
