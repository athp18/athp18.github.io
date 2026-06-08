import styles from './Home.module.css'
import { GitHubIcon, LinkedInIcon, GmailIcon } from '../components/Icons'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/athp18',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/atharv-panditrao-778828229/',
    Icon: LinkedInIcon,
  },
  {
    label: 'Gmail',
    href: 'mailto:atharvp8@gmail.com',
    Icon: GmailIcon,
  },
]

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Hero banner */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <img src="/images/Headshot.jpg" alt="Atharv Panditrao" className={styles.avatar} />
          <h1 className={styles.heroName}>Atharv Panditrao</h1>
          <p className={styles.heroTitle}>Software Engineer · CS @ UCLA</p>
          <div className={styles.heroSocials}>
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className={styles.heroSocialLink}
                aria-label={label}
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* About section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className="navy-line" />
          <div className="section-heading">
            <h1>About Me</h1>
          </div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <h3>Who am I?</h3>
              <p>
                I'm a senior at UCLA studying Computer Science, graduating June 2026.
                I'm interested in ML infrastructure and distributed system, and how these come together to build products that are fast and
                built to scale.
              </p>
              <p>
                Previously interned at <strong>Rivian VW Technologies</strong> (Data Platform &amp; AI)
                and worked as a research assistant at <strong>Stanford University's Llorente Lab</strong>,
                where I built ML pipelines for neuroscience research.
              </p>
            </div>
            <div className={styles.aboutRight}>
              <h3>Details</h3>
              <ul className={styles.detailList}>
                <li><span className={styles.detailKey}>Education</span> UCLA, B.S. Computer Science</li>
                <li><span className={styles.detailKey}>Graduation</span> June 2026</li>
                <li><span className={styles.detailKey}>Location</span> Bay Area, CA</li>
                <li><span className={styles.detailKey}>Email</span> <a href="mailto:atharvp8@gmail.com">atharvp8@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
