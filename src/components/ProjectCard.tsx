import type { Project } from "@/data/projects";
import ProjectDiagram from "./ProjectDiagram";

const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

function Links({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.links.map((l) => (
        <a
          key={l.href}
          className="text-link"
          href={l.href}
          {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {l.label} <Arrow />
          {l.external && <span className="sr-only"> (opens in a new tab)</span>}
        </a>
      ))}
    </div>
  );
}

function Tech({ project }: { project: Project }) {
  return (
    <div className="project-tech">
      <small>{project.techLabel ?? "Technologies"}</small>
      <ul>{project.tech.map((t) => <li key={t}>{t}</li>)}</ul>
    </div>
  );
}

function Header({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <div className="project-number">{String(index + 1).padStart(2, "0")} <span className="project-role">{project.role}</span></div>
      <p className="project-type">{project.categories.join(" · ").toUpperCase()}</p>
      <h3>{project.title}</h3>
    </>
  );
}

function Pipeline({ project, variant }: { project: Project; variant: "system" | "inline" }) {
  if (variant === "system") {
    return (
      <div className="project-system">
        <div className="system-title">
          <h4>Execution pipeline</h4>
          <p>Each stage hands a structured result to the next.</p>
        </div>
        <ol className="system-flow">
          {project.pipeline.map((step, i) => (
            <li key={step} className={/\bLLM\b/.test(step) ? "lit" : ""}>
              <span className="step-no">{String(i + 1).padStart(2, "0")}</span>{step}
            </li>
          ))}
        </ol>
      </div>
    );
  }
  return (
    <div className="project-pipeline">
      <small>Execution pipeline</small>
      <ol className="horizontal-flow">
        {project.pipeline.map((step) => <li key={step}><span>{step}</span></li>)}
      </ol>
    </div>
  );
}

export default function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  if (featured) {
    return (
      <article className={`project featured p-${project.id}`} id={project.id}>
        <div className="project-content">
          <Header project={project} index={index} />
          <p className="project-desc">{project.summary}</p>
          {project.detail && <p className="project-desc project-detail">{project.detail}</p>}
          <ul className="feature-list">{project.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
          <Tech project={project} />
          <Links project={project} />
        </div>
        <ProjectDiagram kind={project.diagram} />
        <Pipeline project={project} variant="system" />
      </article>
    );
  }

  return (
    <article className={`project card p-${project.id}`} id={project.id}>
      <Header project={project} index={index} />
      <ProjectDiagram kind={project.diagram} />
      <p className="project-desc">{project.summary}</p>
      {project.detail && <p className="muted">{project.detail}</p>}
      <ul className="feature-list compact">{project.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
      <Pipeline project={project} variant="inline" />
      {project.roadmap && (
        <div className="project-roadmap">
          <small>Planned enhancements</small>
          <ul>{project.roadmap.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      )}
      <Tech project={project} />
      <Links project={project} />
    </article>
  );
}
