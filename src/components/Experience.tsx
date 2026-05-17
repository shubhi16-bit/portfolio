import { useReveal } from '../hooks/useReveal'
import { experience, type Experience } from '../data/data'
import './Experience.css'

export default function Experience() {
  const headerRef = useReveal<HTMLDivElement>()
  return (
    <section id="experience" className="section">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">03.</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>
      <div className="timeline">
        {experience.map((e, i) => <TimelineItem key={i} item={e} />)}
      </div>
    </section>
  )
}

function TimelineItem({ item: e }: { item: Experience }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div className="timeline-item reveal" ref={ref}>
      <div className="timeline-date">{e.date}</div>
      <div className="timeline-role">{e.role}</div>
      <div className="timeline-org">{e.org}</div>
      <ul className="timeline-desc">
        {e.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  )
}