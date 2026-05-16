import { useReveal } from '../hooks/useReveal'
import { projects, type Project } from '../data/data'
import './Projects.css'

export default function Projects() {
  const headerRef = useReveal()

  return (
    <section id="projects" className="section">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">02.</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project: p }: { project: Project }) {
  const ref = useReveal()
  return (
    <div className="project-card reveal" ref={ref}>
      <div className="project-top">
        <div className="project-name">{p.name}</div>
        <span className="project-badge">{p.badge}</span>
      </div>
      <p className="project-desc">{p.description}</p>
      <div className="project-stack">
        {p.stack.map(s => <span className="stack-tag" key={s}>{s}</span>)}
      </div>
      {(p.github || p.live) && (
        <div className="project-links">
          {p.github && <a href={p.github} className="project-link" target="_blank" rel="noopener noreferrer">↗ GitHub</a>}
          {p.live   && <a href={p.live}   className="project-link" target="_blank" rel="noopener noreferrer">↗ Live Demo</a>}
        </div>
      )}
    </div>
  )
}
