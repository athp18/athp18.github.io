import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import styles from './Nav.module.css'

const links = [
  { to: '/',         label: 'About',    end: true  },
  { to: '/career',   label: 'Career',   end: false },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/writing',  label: 'Writing',  end: false },
  { to: '/contact',  label: 'Contact',  end: false },
]

export default function Nav({ dark, onToggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  const mobileLinkClass = ({ isActive }) =>
    isActive ? `${styles.mobileLink} ${styles.mobileLinkActive}` : styles.mobileLink

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <NavLink to="/" className={styles.brand}>Atharv Panditrao</NavLink>
        <div className={styles.right}>
          {/* Desktop links */}
          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={linkClass}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className={styles.themeToggle}
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          {/* Hamburger (mobile only) */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  )
}
