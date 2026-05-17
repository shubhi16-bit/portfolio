import { contact } from '../data/data'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <span className="section-num">05.</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>
      <p className="contact-intro">
        Open to internships, collaborations, and learning opportunities!
      </p>
      <div className="contact-grid">
        {contact.map((item, i) => (
          <a key={i} href={item.href} className="contact-item" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">{item.icon}</span>
            <div>
              <div className="contact-label">{item.label}</div>
              <div className="contact-value">{item.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}