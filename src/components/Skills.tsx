import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/data'
import './Skills.css'

export default function Skills() {
  const headerRef = useReveal()

  return (
    <section id="skills" className="section">
      <div className="section-header reveal visible" ref={headerRef}>
        <span className="section-num">01.</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <SkillCard key={i} label={group.label} tags={group.tags} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ label, tags }: { label: string; tags: string[] }) {
  const ref = useReveal()
  return (
    <div className="skill-group reveal" ref={ref}>
      <div className="skill-group-label">{label}</div>
      <div className="skill-tags">
        {tags.map(t => <span className="tag" key={t}>{t}</span>)}
      </div>
    </div>
  )
}
