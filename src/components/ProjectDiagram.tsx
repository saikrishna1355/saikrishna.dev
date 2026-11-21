import type { DiagramKind } from "@/data/projects";

// CSS-only architecture illustrations. These are schematic diagrams of each
// system's data flow, not screenshots of the products.

const Down = () => <div className="down" aria-hidden="true">↓</div>;

function Agent() {
  return (
    <div className="architecture mini agent-stack">
      <small>LIVE AGENT PATH</small>
      <span>VOICE</span><Down />
      <span className="highlight">LLM</span><Down />
      <span>PLANNER</span><Down />
      <span>BROWSER ACTIONS</span>
    </div>
  );
}

function Tree() {
  return (
    <div className="dg dg-tree">
      <span className="dg-node">PDF</span>
      <div className="dg-branches">
        {[["§1", false], ["§2", true], ["§3", false]].map(([label, hit]) => (
          <div key={label as string} className={`dg-branch${hit ? " hit" : ""}`}>
            <span className="dg-node">{label}</span>
            <div className="dg-leaves"><i /><i className={hit ? "hit" : ""} /></div>
          </div>
        ))}
      </div>
      <div className="dg-row"><span className="dg-node">RETRIEVAL</span><b>→</b><span className="dg-node lit">LLM</span></div>
    </div>
  );
}

function Router() {
  return (
    <div className="dg dg-router">
      <div className="dg-row">
        <span className="dg-node">PROMPT</span><b>→</b>
        <span className="dg-node">OPTIMIZER</span><b>→</b>
        <span className="dg-node">CACHE</span>
      </div>
      <div className="dg-split"><span className="dg-tag">HIT · return cached</span><span className="dg-tag">MISS · route ↓</span></div>
      <span className="dg-node lit">PROVIDER ROUTER</span>
      <div className="dg-fan">
        {["OpenAI", "Anthropic", "Gemini", "Ollama"].map((p) => <span key={p}>{p}</span>)}
      </div>
    </div>
  );
}

function Crawler() {
  const pages = [false, false, true, false, false, false, true, false];
  return (
    <div className="dg dg-crawler">
      <div className="dg-row"><span className="dg-node">SITEMAP</span><b>→</b><span className="dg-node">CRAWLER</span></div>
      <div className="dg-pages">
        {pages.map((issue, i) => <i key={i} className={issue ? "issue" : ""} />)}
      </div>
      <div className="dg-row"><span className="dg-node">ISSUE DETECTION</span><b>→</b><span className="dg-node lit">AI ALERTS</span></div>
    </div>
  );
}

function Deps() {
  return (
    <div className="dg dg-deps">
      <div className="dg-files"><span>package-lock.json</span><span>composer.lock</span></div>
      <Down />
      <div className="dg-row"><span className="dg-node">PACKAGE ANALYSIS</span><b>→</b><span className="dg-node">CVE INTELLIGENCE</span></div>
      <Down />
      <div className="dg-versions">
        <span className="bad">affected version</span><b>→</b><span className="good">fixed version</span>
      </div>
    </div>
  );
}

const LABELS: Record<DiagramKind, string> = {
  agent: "Voice to LLM to planner to browser actions",
  tree: "PDF parsed into a hierarchical tree, retrieved by structure, answered by an LLM",
  router: "Prompt passes through optimizer and cache, then a provider router selects an LLM",
  crawler: "Sitemap feeds a crawler, issues are detected per page and sent as AI alerts",
  deps: "Dependency files are analysed against CVE data to find fixed versions",
};

export default function ProjectDiagram({ kind }: { kind: DiagramKind }) {
  const body = { agent: <Agent />, tree: <Tree />, router: <Router />, crawler: <Crawler />, deps: <Deps /> }[kind];
  return <figure className="dg-figure" role="img" aria-label={`Architecture diagram: ${LABELS[kind]}`}>{body}</figure>;
}
