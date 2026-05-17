import { useReveal } from '../hooks/useReveal'
import { contact } from '../data/data'
import './Contact.css'

interface ContactItem {
  icon: string
  label: string
  value: string
  href: string
}

export default function Contact() {
  const headerRef = useReveal()
  const introRef = useReveal()
  return (
    <section id="contact" className="section">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">05.</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>
      <p className="contact-intro reveal" ref={introRef}>
        Open to internships, collaborations, and learning opportunities. Feel free to reach out!
      </p>
      <div className="contact-grid">
        {contact.map((c, i) => (
          <ContactCard key={i} item={c} />
        ))}
      </div>
    </section>
  )
}

function ContactCard({ item: c }: { item: ContactItem }) {
  const ref = useReveal()
  const isExternal = c.href.startsWith('http')
  return (
    
      href={c.href}
      className="contact-item reveal"
      ref={ref}
      target={isExternal ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      <span className="contact-icon">{c.icon}</span>
      <div>
        <div className="contact-label">{c.label}</div>
        <div className="contact-value">{c.value}</div>
      </div>
    </a>
  )
}