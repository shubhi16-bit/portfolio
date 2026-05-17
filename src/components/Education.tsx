import { useReveal } from '../hooks/useReveal'
import { education, type Education } from '../data/data'
import './Education.css'

export default function Education() {
  const headerRef = useReveal()
  return (
    <section id="education" className="section">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">04.</span>
        <h2 className="section-title">Education</h2>
        <div className="section-line" />
      </div>
      <div className="edu-grid">
        {education.map((e, i) => <EduCard key={i} item={e} />)}
      </div>
    </section>
  )
}

function EduCard({ item: e }: { item: Education }) {
  const ref = useReveal()
  return (
    <div className="edu-card reveal" ref={ref}>
      <div>
        <div className="edu-name">{e.name}</div>
        <div className="edu-detail">{e.detail}</div>
      </div>
      <div className="edu-year">{e.year}</div>
    </div>
  )
}