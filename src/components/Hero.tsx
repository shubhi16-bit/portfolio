import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-prompt">
        <span className="dot" />
        status: online &amp; actively learning
      </div>

      <h1 className="hero-name">
        Shubhi
        <span className="hero-name-outline">Agrawal</span>
      </h1>

      <p className="hero-role">
        <span className="bracket">[</span>
        &nbsp;B.Tech CSE '29 &nbsp;·&nbsp; Manipal University of Jaipur &nbsp;·&nbsp; MUJ ACM&nbsp;
        <span className="bracket">]</span>
        <span className="cursor" />
      </p>

      <p className="hero-bio">
        Hey, I’m Shubhi, from Dehradun and currently studying B.Tech in Computer Science at Manipal University Jaipur. I enjoy building websites, exploring creative ideas, and learning new things through projects and experiments. Most of the time, I’m either coding, designing something, or fixing bugs that somehow appeared out of nowhere.
Still learning, still improving, and enjoying the process one project at a time.
      </p>

      <div className="hero-ctas">
        <a href="#projects" className="btn btn-primary">→ View Projects</a>
        <a href="mailto:shubhi1604.agrawal@gmail.com" className="btn btn-outline">✉ Get in Touch</a>
      </div>
    </section>
  )
}
