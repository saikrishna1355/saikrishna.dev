"use client";

const Arrow = () => <span className="arrow">↗</span>;
const Down = () => <div className="down">↓</div>;

function Flow({ items }: { items: string[] }) {
  return <div className="flow">{items.map((item, i) => <div key={item}><div className="flow-node">{item}</div>{i < items.length - 1 && <Down />}</div>)}</div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top">SAI KRISHNA MUPPURI<span>.</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#writing">Writing</a></div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <Arrow /></a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i /> AVAILABLE FOR SELECT OPPORTUNITIES</div>
          <p className="kicker">SAI KRISHNA MUPPURI</p>
          <h1>Senior Software<br /><em>Engineer.</em></h1>
          <p className="lede">Building AI Agents, Enterprise AI Platforms<br className="desktop" /> &amp; Full Stack Applications.</p>
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

      <section className="wrap intro" id="about"><span className="section-tag">02 / ABOUT ME</span><div className="intro-inner"><div className="intro-photo"><img src="/profile.jpg" alt="Sai Krishna Muppuri" /></div><div><h2>Building intelligent<br /><em>software for the modern web.</em></h2><p>Full Stack Software Engineer with 4+ years designing and building scalable web applications and integrating Generative AI into enterprise products. I specialize in React, Next.js, Node.js, TypeScript, PHP/Laravel, and AWS — with hands-on experience building AI agents, browser automation systems, LLM integrations, and REST APIs. From architecture to deployment, I deliver secure, production-ready solutions that create measurable business value.</p><div className="interests"><span>React.js</span><span>Next.js</span><span>Node.js</span><span>TypeScript</span><span>PHP / Laravel</span><span>MySQL</span><span>AWS</span><span>Generative AI</span><span>Claude API</span><span>OpenAI API</span><span>AI Agents</span><span>MCP</span><span>Browser Automation</span><span>Playwright</span><span>REST APIs</span><span>JWT / OAuth</span><span>Docker</span><span>GitHub Actions</span><span>CI/CD</span></div><div className="about-highlights"><div><b>3+</b><span>Years of Experience</span></div><div><b>20+</b><span>Projects Delivered</span></div><div><b>AI-First</b><span>Application Development</span></div><div><b>End-to-End</b><span>Architecture &amp; Deployment</span></div></div></div></div></section>

      <section className="projects wrap" id="work"><div className="section-head"><span className="section-tag">03 / SELECTED WORK</span><h2>Products with<br /><em>real leverage.</em></h2></div>
        <article className="project featured" id="architecture"><div className="project-content"><div className="project-number">01 <span>★★★★★</span></div><p className="project-type">ENTERPRISE BROWSER AUTOMATION</p><h3>Voice Controlled<br />AI Browser Agent</h3><p className="project-desc">A voice-first AI agent that understands intent, plans browser actions, fills insurance forms, and completes business workflows through the DOM.</p><div className="proof-strip"><span><b>Voice</b>conversation</span><span><b>DOM</b>aware</span><span><b>Workflow</b>automation</span></div><div className="feature-list"><span>✓ Voice Conversation</span><span>✓ AI Navigation</span><span>✓ Form Filling</span><span>✓ Insurance Journey Automation</span></div><div className="actions small"><a className="button primary" href="#architecture">Architecture <Arrow /></a><a className="text-link" href="#work">Try demo <Arrow /></a></div></div><div className="architecture mini agent-stack"><small>LIVE AGENT PATH</small><span>USER COMMAND</span><Down /><span>VOICE INTENT</span><Down /><span className="highlight">LLM + PLANNER</span><Down /><span>ACTION ENGINE</span><Down /><span>DOM WORKFLOW</span></div><div className="project-system"><div className="system-title"><h4>Execution pipeline</h4><p>From speech to verified browser actions, every step is observable and designed for enterprise workflows.</p></div><div className="system-flow"><div>Voice<span>capture</span></div><b>→</b><div>Speech<span>transcript</span></div><b>→</b><div className="lit">LLM<span>reasoning</span></div><b>→</b><div>Planner<span>steps</span></div><b>→</b><div>Action Engine<span>tools</span></div><b>→</b><div>Browser<span>DOM verify</span></div></div></div></article>
        <div className="project-grid">
          <article className="project card"><div className="project-number">02 <span>★★★★★</span></div><p className="project-type">KNOWLEDGE RETRIEVAL</p><h3>Vectorless RAG</h3><div className="horizontal-flow"><span>PDF</span><b>→</b><span>TREE STRUCTURE</span><b>→</b><span>RETRIEVER</span><b>→</b><span>LLM</span><b>→</b><span>ANSWER</span></div><p className="muted">A tree-based retrieval system that parses documents into navigable knowledge structures and answers queries without a vector database.</p><a className="text-link" href="#work">Explore architecture <Arrow /></a></article>
          <article className="project card optimizer"><div className="project-number">03</div><p className="project-type">PUBLISHED DEVELOPER INFRASTRUCTURE</p><h3>LLM Optimizer SDK</h3><div className="horizontal-flow"><span>Prompt</span><b>→</b><span>Optimizer</span><b>→</b><span>Cache</span><b>→</b><span>Response</span></div><p className="muted">A TypeScript monorepo for prompt cleanup, caching, provider routing, retries, validation, redaction, and analytics.</p><a className="text-link" href="https://github.com/saikrishna1355/llm-optimizer" target="_blank" rel="noreferrer">View on GitHub <Arrow /></a></article>
          <article className="project card observer"><div className="project-number">04</div><p className="project-type">AUTOMATED SITE TESTING &amp; AI MONITORING</p><h3>AI Live Website<br />Observer</h3><div className="horizontal-flow"><span>Sitemap</span><b>→</b><span>Crawl Pages</span><b>→</b><span>Capture Issues</span><b>→</b><span>Dashboard</span><b>→</b><span>AI Fix Alert</span></div><p className="muted">Crawls every page in a sitemap, captures broken images, console errors, and runtime failures, generates a report dashboard, and dispatches AI-powered fix alerts to agents.</p><a className="text-link" href="#contact">View case study <Arrow /></a></article>
        </div>
      </section>

      <section className="wrap lower"><div className="opensource"><span className="section-tag">05 / OPEN SOURCE</span><h2>Useful things,<br /><em>out in the world.</em></h2><div className="oss-stat"><b>9,350+</b><span>Total NPM Downloads</span></div><div className="oss-list"><div><span>📦</span><b>custom-rich-text-editor<small>Customizable React editor · v1.1.4</small></b><a href="https://www.npmjs.com/package/custom-rich-text-editor" target="_blank" rel="noreferrer">NPM <Arrow /></a></div><div><span>📦</span><b>create-nodejs-app<small>Node.js project scaffold · v2.1.7</small></b><a href="https://www.npmjs.com/package/@sai_krishna_m/create-nodejs-app" target="_blank" rel="noreferrer">NPM <Arrow /></a></div><div><span>⚡</span><b>LLM Optimizer packages<small>Core, CLI, provider clients, Redis &amp; memory cache</small></b><a href="https://www.npmjs.com/org/llm-optimize/" target="_blank" rel="noreferrer">NPM <Arrow /></a></div><div><span>🔁</span><b>duplicate-tab-detector<small>React hook that detects duplicated browser tabs and resets per-tab session ids</small></b><a href="https://www.npmjs.com/package/duplicate-tab-detector" target="_blank" rel="noreferrer">NPM <Arrow /></a></div></div></div><div className="skills"><span className="section-tag">06 / CAPABILITIES</span>{[["Frontend", "100%"],["Backend", "95%"],["Databases", "90%"],["Cloud / DevOps", "80%"],["AI Integration", "92%"],["Security", "85%"]].map(([name, width]) => <div className="skill" key={name}><span>{name}</span><i><b style={{ width }} /></i><small>{width}</small></div>)}</div></section>

      <section className="wrap timeline"><span className="section-tag">07 / EXPERIENCE</span><div className="timeline-grid"><div className="timeline-intro"><h2>From trainee to<br /><em>Senior Engineer.</em></h2><p>From trainee to Senior Engineer in three years. I've shipped insurance platforms, customer portals, and AI systems that handle real users, real data, and real stakes. Recognized with 3+ performance awards at Novac.</p></div><div className="timeline-list"><div><time>2025 — PRESENT</time><h3>Senior Software Engineer</h3><p>Novac Technology Solutions · React, Next.js, Node.js, AWS</p></div><div><time>2023 — 2025</time><h3>Software Engineer</h3><p>Novac · Travel Insurance Sales Platform &amp; Customer Portal / CRM</p></div><div><time>2022</time><h3>Programmer Analyst Trainee</h3><p>Cognizant · Enterprise application development</p></div></div></div></section>

      <section className="writing wrap" id="writing"><span className="section-tag">08 / FROM THE NOTEBOOK</span><div className="article"><span>01</span><h3>How I Built a Browser AI Agent</h3><a href="#contact"><Arrow /></a></div><div className="article"><span>02</span><h3>Why I Built Vectorless RAG</h3><a href="#contact"><Arrow /></a></div><div className="article"><span>03</span><h3>Building AI Applications without LangChain</h3><a href="#contact"><Arrow /></a></div></section>

      <footer id="contact"><div className="wrap"><span className="section-tag">09 / CONTACT</span><h2>From idea to<br /><em>AI-powered product.</em></h2><a className="email" href="mailto:saikrishna.dev2001@gmail.com">saikrishna.dev2001@gmail.com <Arrow /></a><div className="footer-bottom"><span>© 2026 SAI KRISHNA MUPPURI</span><span>BUILT WITH CURIOSITY + CODE</span><div><a href="https://github.com/saikrishna1355" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/muppuri-sai-krishna-94a812190" target="_blank" rel="noreferrer">LinkedIn</a></div></div></div></footer>
    </main>
  );
}
