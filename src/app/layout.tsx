import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Krishna Muppuri | Senior Software Engineer",
  description: "Senior Software Engineer specializing in React, Next.js, Node.js, TypeScript, and AWS. Building AI agents, enterprise platforms, and full-stack applications.",
  keywords: ["Sai Krishna Muppuri", "Senior Software Engineer", "Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "AWS", "AI Agents", "Generative AI", "LLM", "Browser Automation"],
  authors: [{ name: "Sai Krishna Muppuri", url: "https://github.com/saikrishna1355" }],
  creator: "Sai Krishna Muppuri",
  openGraph: {
    type: "website",
    title: "Sai Krishna Muppuri | Senior Software Engineer",
    description: "Senior Software Engineer specializing in React, Next.js, Node.js, TypeScript, and AWS. Building AI agents, enterprise platforms, and full-stack applications.",
    siteName: "Sai Krishna Muppuri Portfolio",
    images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "Sai Krishna Muppuri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Krishna Muppuri | Senior Software Engineer",
    description: "Senior Software Engineer specializing in React, Next.js, Node.js, TypeScript, and AWS.",
    images: ["/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
