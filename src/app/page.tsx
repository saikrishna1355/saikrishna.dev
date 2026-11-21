"use client";

import { useEffect, useState } from "react";
import ChatBot from "../components/ChatBot";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Arrow = () => <span className="arrow">↗</span>;

const REVEAL_SELECTOR = ".now, .intro, .section-head, .project, .opensource, .skills, .timeline-intro, .timeline-list > div, .article, footer h2, .email";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Reveal on scroll. Elements stay visible if JS or IntersectionObserver is unavailable.
    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io: IntersectionObserver | undefined;
    if (!reduce && "IntersectionObserver" in window) {
      els.forEach((el) => el.classList.add("reveal"));
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io?.unobserve(e.target);
          }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => io!.observe(el));
    }

    // Cursor spotlight on project cards.
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".project"));
    const onMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    cards.forEach((c) => c.addEventListener("pointermove", onMove));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
      cards.forEach((c) => c.removeEventListener("pointermove", onMove));
    };
  }, []);

  return (
    <main>
      <div className="bg-aurora" aria-hidden="true" />
      <div className={`nav-shell${scrolled ? " scrolled" : ""}`}>
      <nav className="nav wrap">
        <a className="brand" href="#top">SAI KRISHNA MUPPURI<span>.</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#writing">Writing</a></div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <Arrow /></a>
      </nav>
      </div>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i /> AVAILABLE FOR SELECT OPPORTUNITIES</div>
          <p className="kicker">SAI KRISHNA MUPPURI</p>
          <h1>Senior Software<br /><em>Engineer.</em></h1>
          <p className="lede">I build browser automation, insurance platforms,<br className="desktop" /> and developer tooling — all in production.</p>
          <div className="actions"><a className="button primary" href="#work">View projects <Arrow /></a><a className="button" href="/Sai-Krishna-Muppuri-Resume.pdf" download>Resume <span>↓</span></a></div>
          <div className="socials"><a href="https://github.com/saikrishna1355" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/muppuri-sai-krishna-94a812190" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:saikrishna.dev2001@gmail.com">Email</a></div>
        </div>
        <div className="agent-visual" aria-label="Animated browser agent diagram">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="browser-window">
            <div className="browser-bar"><span /><span /><span /><b>insure.co / quote</b></div>
            <div className="browser-body"><div className="form-line wide" /><div className="form-line" /><div className="form-line" /><button>Get quote</button></div>
          </div>
          <div className="agent-card"><div className="agent-title"><span className="pulse" /> AGENT ACTIVITY</div><p>Reading page structure</p><div className="scan-line" /><p>Filling personal details</p><p className="active">✓ Insurance purchased</p></div>
          <div className="floating-chip chip-one">VOICE INPUT <span>⌁</span></div><div className="floating-chip chip-two">DOM AWARE <span>●</span></div>
          <svg className="path" viewBox="0 0 500 500" aria-hidden="true"><path d="M37 383 C166 345 120 258 219 239 S340 134 451 73" /></svg>
        </div>
      </section>

      <section className="now wrap"><span className="section-tag">01 / CURRENTLY BUILDING</span><div className="now-list"><span>🚀 Browser AI Agent</span><span>📚 Vectorless RAG</span><span>⚡ LLM Optimizer SDK</span></div></section>

      <section className="wrap intro" id="about"><span className="section-tag">02 / ABOUT ME</span><div className="intro-inner"><div className="intro-photo"><img src="/profile.jpg" alt="Sai Krishna Muppuri" /></div><div><h2>Building intelligent software.<br /><em>Engineering real-world impact.</em></h2><p>I&apos;m a Full-Stack Software Engineer with 3+ years of experience building scalable web applications, AI-powered solutions, and enterprise platforms.</p><p>From developing a <strong>voice-controlled AI browser agent</strong> and a <strong>vectorless RAG system</strong> to building an <strong>LLM SDK</strong> and open-source packages with <strong>25,175+ npm downloads</strong>, I turn complex ideas into practical, production-ready software.</p><p>My experience spans enterprise insurance platforms supporting <strong>50K+ users</strong>, full-stack application development, browser automation, and AI integration.</p><p>I work across <strong>React, Next.js, Node.js, PHP/Laravel, and AWS</strong>, combining strong engineering fundamentals with modern AI capabilities to build software that is reliable, scalable, and genuinely useful.</p><div className="interests">{["React.js", "Next.js", "TypeScript", "Node.js", "PHP", "Laravel", "REST APIs", "MySQL", "AWS", "Docker", "LLMs", "Claude / OpenAI APIs", "MCP", "Playwright", "Browser Automation", "JWT / OAuth", "GitHub Actions", "CI/CD"].map((t) => <span key={t}>{t}</span>)}</div><div className="about-highlights"><div><b>3+</b><span>Years of Experience</span></div><div><b>20+</b><span>Projects Built</span></div><div><b>25K+</b><span>npm Downloads</span></div><div><b>50K+</b><span>Platform Users Supported</span></div></div></div></div></section>

      <section className="projects wrap" id="work">
        <div className="section-head"><span className="section-tag">03 / SELECTED WORK</span><h2>AI agents, retrieval<br /><em>&amp; LLM infrastructure.</em></h2></div>
        <ProjectCard project={projects[0]} index={0} featured />
        <div className="project-grid">
          {projects.slice(1).map((p, i) => <ProjectCard key={p.id} project={p} index={i + 1} />)}
        </div>
      </section>

      <section className="wrap lower"><div className="opensource"><span className="section-tag">05 / OPEN SOURCE</span><h2>Packages I&apos;ve published<br /><em>and maintain.</em></h2><div className="oss-stat"><b>25,175+</b><span>Total NPM Downloads</span></div><div className="oss-list"><div><span>📦</span><b>create-nodejs-app<small>Node.js project scaffold · v2.1.7</small></b><a href="https://www.npmjs.com/package/@sai_krishna_m/create-nodejs-app" target="_blank" rel="noreferrer">NPM <Arrow /></a></div><div><span>⚡</span><b>LLM Optimizer packages<small>Core, CLI, provider clients, Redis &amp; memory cache</small></b><a href="https://www.npmjs.com/org/llm-optimize/" target="_blank" rel="noreferrer">NPM <Arrow /></a></div><div><span>🛡️</span><b>bot-detection<small>Zero-config client bot detector that sets an isbot cookie · v0.2.4</small></b><a href="https://www.npmjs.com/package/bot-detection" target="_blank" rel="noreferrer">NPM <Arrow /></a></div><div><span>🔁</span><b>duplicate-tab-detector<small>React hook that detects duplicated browser tabs and resets per-tab session ids</small></b><a href="https://www.npmjs.com/package/duplicate-tab-detector" target="_blank" rel="noreferrer">NPM <Arrow /></a></div></div></div><div className="skills"><span className="section-tag">06 / CAPABILITIES</span>{[["Frontend", "100%"],["Backend", "95%"],["Databases", "90%"],["Cloud / DevOps", "80%"],["AI Integration", "92%"],["Security", "85%"]].map(([name, width]) => <div className="skill" key={name}><span>{name}</span><i><b style={{ width }} /></i><small>{width}</small></div>)}</div></section>

      <section className="wrap timeline"><span className="section-tag">07 / EXPERIENCE</span><div className="timeline-grid"><div className="timeline-intro"><h2>From trainee to<br /><em>Senior Engineer.</em></h2><p>From trainee to Senior Engineer in three years. I&apos;ve shipped insurance platforms, customer portals, and AI systems that handle real users, real data, and real stakes. Recognized with 3+ performance awards at Novac.</p></div><div className="timeline-list"><div><time>2025 — PRESENT</time><h3>Senior Software Engineer</h3><p>Novac Technology Solutions · React, Next.js, Node.js, AWS</p><ul className="timeline-built"><li>Architected micro-frontend modules with React &amp; Next.js for insurance platforms serving 50k+ users</li><li>Built and deployed Node.js microservices with PM2, Nginx reverse proxy.</li><li>Integrated third-party payment gateways and insurance provider APIs with JWT-secured REST endpoints</li><li>Led performance optimization — reduced page load by 40% through code splitting, caching &amp; CDN tuning</li></ul><div className="timeline-improved"><span>↑ System Performance</span><span>↑ API Reliability</span><span>↑ Deployment Speed</span></div></div><div><time>2023 — 2025</time><h3>Software Engineer</h3><p>Novac · Insurance &amp; Fintech</p><ul className="timeline-built"><li>Built Travel Insurance Sales Platform with dynamic quote engine, policy issuance &amp; payment flow</li><li>Developed Customer Portal &amp; CRM using PHP Laravel Lumen with MySQL &amp; Redis caching</li><li>Implemented OAuth 2.0 &amp; JWT auth across multiple client applications</li><li>Conducted VAPT audits and applied OWASP hardening across production APIs</li></ul><div className="timeline-improved"><span>↑ Sales Conversion</span><span>↑ Security Posture</span><span>↑ User Retention</span></div></div><div><time>2022</time><h3>Programmer Analyst Trainee</h3><p>Cognizant · Enterprise application development</p><ul className="timeline-built"><li>Developed enterprise web modules using Angular &amp; REST APIs</li><li>Worked on database design and query optimization with MySQL</li></ul></div></div></div></section>

      <section className="writing wrap" id="writing"><span className="section-tag">08 / FROM THE NOTEBOOK</span><div className="article"><span>01</span><h3>How I Built a Browser AI Agent</h3><a href="#contact"><Arrow /></a></div><div className="article"><span>02</span><h3>Why I Built Vectorless RAG</h3><a href="#contact"><Arrow /></a></div><div className="article"><span>03</span><h3>Building AI Applications without LangChain</h3><a href="#contact"><Arrow /></a></div></section>

      <footer id="contact"><div className="wrap"><span className="section-tag">09 / CONTACT</span><h2>Have a problem<br /><em>worth solving?</em></h2><a className="email" href="mailto:saikrishna.dev2001@gmail.com">saikrishna.dev2001@gmail.com <Arrow /></a><div className="footer-bottom"><span>© 2026 SAI KRISHNA MUPPURI</span><span>BUILT WITH CURIOSITY + CODE</span><div><a href="https://github.com/saikrishna1355" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/muppuri-sai-krishna-94a812190" target="_blank" rel="noreferrer">LinkedIn</a></div></div></div></footer>
      <ChatBot />
    </main>
  );
}
