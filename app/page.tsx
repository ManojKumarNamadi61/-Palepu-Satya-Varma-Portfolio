'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Mail, Moon, Palette, Phone, Sun } from 'lucide-react'

const projects = [
  { number: '01', title: 'Nike Air Max Product Page', type: 'E-commerce UI', description: 'A focused product experience that brings together bold typography, product storytelling, pricing, and a clear conversion path.', tags: ['Figma', 'UI Design', 'Art Direction'], tone: 'from-slate-900 via-slate-800 to-black', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nike%20Air%20Max%2090%20Showcase-CR2aItFLN6kwsWGbCpaYzQvzx3Ujc4.png' },
  { number: '02', title: 'Apple Watch Interface', type: 'Wearable UI', description: 'Glanceable status and monitoring patterns shaped into a calm, readable interface for quick moments on the move.', tags: ['Figma', 'Interaction', 'UI Systems'], tone: 'from-cyan-400/80 via-blue-500/70 to-slate-950', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple%20Watch%20UI%20Showcase-d0KogVr8o7mGqKzic35uWtkEyCbfiR.png' },
  { number: '03', title: 'Fleet Agent Mobile Application', type: 'Fleet Management · Mobile UX/UI', description: 'A mobile operations system that helps fleet teams manage dispatches, vehicles, drivers, customers, and live delivery status from one clear workspace.', tags: ['Figma', 'Mobile UX', 'Product Design'], tone: 'from-emerald-500/80 via-green-600/70 to-slate-950', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fleet%20Agent%20App%20Showcase-SOOhQrWgmO1AsZn0XZyJ1UFcsIyJYN.png' },
  { number: '04', title: 'Food Ordering App', type: 'Mobile Product Design', description: 'A vibrant ordering flow designed to make browsing, choosing, and checking out food feel fast, clear, and enjoyable.', tags: ['Figma', 'Mobile UX', 'Visual Design'], tone: 'from-violet-500/80 via-purple-600/70 to-slate-950', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Premium%20Purple%20Food%20Delivery%20App%20Mockup-CFkA00hoP440FXiXZASBCGyCTa9pgL.png' },
]

const skillGroups = [
  ['Design', 'User-Centered Design', 'Wireframing', 'Prototyping', 'Visual Design', 'Design Systems', 'Responsive Design', 'Accessibility'],
  ['UX Process', 'User Flows', 'Basic UX Research', 'Usability Feedback', 'Iterative Design'],
  ['Tools', 'Figma', 'Framer AI', 'Adobe XD', 'Photoshop', 'Canva', 'React', 'Next.js'],
]

export default function Page() {
  const [dark, setDark] = useState(false)
  const theme = dark ? 'dark' : 'light'

  return (
    <main className={theme}>
      <div className="site-shell">
        <header className="nav-wrap">
          <a href="#home" className="brand" aria-label="Palepu Satya Varma home"><span className="brand-mark">PS</span><span>Satya Varma<span className="brand-dot">.</span></span></a>
          <div className="nav-actions">
            <button className="icon-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>
        </header>

        <section id="home" className="hero-section">
          <div className="hero-background-image" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" /><div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
          <div className="hero-copy reveal"><div className="eyebrow"><span className="status-dot" /> Available for select projects · 2026</div><h1>Designing digital<br /><em>experiences</em> that feel<br />effortless.</h1><p className="hero-lede">I&apos;m Satya, a UI/UX Designer and Web Designer turning complex ideas into clean, usable products.</p><div className="hero-actions"><a href="#projects" className="primary-button">Explore my work <ArrowUpRight size={17} /></a><a href="#about" className="text-link">More about me <span>↓</span></a></div></div>
          <div className="hero-side-note"><span>SCROLL TO EXPLORE</span><div className="scroll-line" /></div><div className="hero-bottom"><span>UI/UX DESIGNER<br />WEB DESIGNER</span><span>KAKINADA, INDIA<br />16° 59′ N · 82° 15′ E</span></div>
        </section>

        <section id="about" className="about-section section-pad"><div className="section-kicker">01 / About</div><div className="about-layout"><div className="about-heading"><span className="about-index">PSV / 2026</span><h2>I make the complex<br /><span>feel simple.</span></h2></div><div className="about-body"><p className="about-lead">A UI/UX and web designer creating clear digital experiences for people and the teams who build them.</p><p>I&apos;m based in Kakinada, India, with a background in Computer Science Engineering. I work across research, user flows, wireframes, visual design, and high-fidelity prototypes—always looking for the simplest useful answer.</p><div className="about-signature">PSV <span>·</span> Designing with intention</div></div></div></section>

        <section id="projects" className="projects-section section-pad"><div className="section-heading"><div><div className="section-kicker">02 / Selected work</div><h2>A few things I&apos;ve<br /><span>designed recently.</span></h2></div><p>Each project is a small study in making digital products clearer, more useful, and more human.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className={`project-visual bg-linear-to-br ${project.tone} ${project.image ? 'project-visual-image' : ''}`} style={project.image ? { backgroundImage: `linear-gradient(180deg, rgba(4, 35, 22, .04), rgba(4, 35, 22, .48)), url(${project.image})` } : undefined}><span className="project-number">{project.number}</span>{!project.image && <span className="project-visual-text">{project.visual.split('\n').map((line) => <span key={line}>{line}</span>)}</span>}<div className="visual-glow" /></div><div className="project-meta"><div><span className="project-type">{project.type}</span><h3>{project.title}</h3></div><ArrowUpRight className="project-arrow" size={22} /></div><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

        <section id="skills" className="skills-section section-pad"><div className="section-kicker">03 / Capabilities</div><div className="skills-layout"><div className="skills-intro"><span className="about-index">HOW I WORK</span><h2>From first thought<br /><span>to final form.</span></h2><p>I combine structure, curiosity, and visual craft to make products feel natural to use and easy to remember.</p></div><div className="skills-groups">{skillGroups.map((group, index) => <div className="skill-group" key={group[0]}><span className="skill-number">0{index + 1}</span><div><h3>{group[0]}</h3><div className="chip-list">{group.slice(1).map((skill) => <span key={skill}>{skill}</span>)}</div></div></div>)}</div></div></section>

        <section id="experience" className="experience-section section-pad"><div className="section-kicker">04 / Experience</div><div className="experience-layout"><h2>Where I&apos;ve<br /><span>learned by doing.</span></h2><div className="timeline"><div className="timeline-item"><div className="timeline-dot" /><div className="timeline-top"><span>Jan 2026 — Apr 2026</span><span>Remote</span></div><h3>UI/UX Designer Intern</h3><h4>To-Let Globe</h4><ul>{['Designed user-friendly web and mobile interfaces', 'Created wireframes, user flows, and high-fidelity designs in Figma', 'Built responsive layouts and prototypes for real-world projects', 'Collaborated with the team to improve UX and interface consistency', 'Incorporated feedback into design solutions'].map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul></div><div className="education-item"><span className="project-type">Education</span><div><strong>B.Tech — Computer Science & Engineering</strong><span>Adarsh College of Engineering · 2021–2024</span></div><div><strong>Diploma — Computer Engineering</strong><span>Andhra Polytechnic, Kakinada · 2017–2020</span></div></div></div></div></section>

        <section id="contact" className="contact-section"><div className="contact-card"><div className="contact-copy"><div className="section-kicker">05 / Start a conversation</div><h2>Have a project<br /><em>in mind?</em></h2><p>Let&apos;s make something thoughtful, useful, and a little bit unforgettable.</p><div className="contact-links"><a href="mailto:satyavarmapalepu@gmail.com"><Mail size={16} />satyavarmapalepu@gmail.com</a><a href="tel:+919966351329"><Phone size={16} />+91 9966351329</a></div><a className="primary-button contact-button" href="mailto:satyavarmapalepu@gmail.com">Let&apos;s talk <ArrowUpRight size={17} /></a></div><div className="contact-animation" aria-label="Abstract animated red design" role="img"><span /><span /><span /></div></div></section>

        <footer className="site-footer"><div className="footer-top"><div className="footer-brand-block"><a href="#home" className="brand"><span className="brand-mark">PS</span><span>Satya Varma<span className="brand-dot">.</span></span></a><p>UI/UX designer crafting clear, considered digital experiences.</p></div><div className="footer-availability"><span className="status-dot" />Available for select projects<span className="footer-year">2026</span></div><a href="#home" className="back-to-top" aria-label="Back to top">Back to top <ArrowUpRight size={16} /></a></div><div className="footer-rule" /><div className="footer-bottom"><span>© 2026 Palepu Satya Varma</span><nav aria-label="Footer navigation"><a href="#about">About</a><a href="#projects">Work</a><a href="#skills">Capabilities</a><a href="#contact">Contact</a></nav><div className="socials"><a href="https://www.linkedin.com/in/satya-varma-palepu-85030338b" aria-label="LinkedIn"><span aria-hidden="true" style={{fontSize: 12, fontWeight: 700}}>in</span></a><a href="https://www.behance.net/satyavarma2" aria-label="Behance"><Palette size={17} /></a><a href="https://github.com" aria-label="Github"><span aria-hidden="true" style={{fontSize: 13, fontWeight: 700}}>GH</span></a><a href="https://instagram.com" aria-label="Instagram"><span aria-hidden="true" style={{fontSize: 13, fontWeight: 700}}>IG</span></a></div></div></footer>
      </div>
    </main>
  )
}
