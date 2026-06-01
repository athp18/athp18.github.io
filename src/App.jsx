import './styles/global.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Writing from './components/Writing'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Writing />
      <Contact />
      <footer style={{
        background: 'var(--black)',
        padding: '28px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "'DM Mono', monospace",
        fontSize: '10px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--gray-4)',
        borderTop: '1px solid var(--gray-2)',
      }}>
        <span>© 2026 Atharv Panditrao</span>
        <span>Los Angeles, CA</span>
      </footer>
    </>
  )
}
