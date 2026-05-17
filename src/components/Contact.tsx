import { useReveal } from '../hooks/useReveal'
import { contact } from '../data/data'
import './Contact.css'

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
        Open to internships, collaborations, and learning opportunities!
      </p>
      <div className="contact-grid">
        {contact.map((item, i) => (
          
            key={i}
            href={item.href}
            className="contact-item reveal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className=