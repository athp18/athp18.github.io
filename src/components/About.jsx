import { useReveal } from './useReveal'
import styles from './About.module.css'

export default function About() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section id="about" className={styles.about}>
      <div ref={leftRef} className={`reveal ${styles.left}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.number}>01</span>
          <h2 className={styles.title}>About</h2>
        </div>
      </div>
      <div ref={rightRef} className={`reveal ${styles.right}`}>
        <div className={styles.photoWrapper}>
          <img src="/Headshot.jpg" alt="Atharv Panditrao" className={styles.photo} />
        </div>
        <p>
          I'm a senior at UCLA studying <strong>Computer Science</strong>, graduating June 2026.
          I'm passionate about <strong> systems programming</strong>, <strong>ML infrastructure</strong>, and
          <strong> distributed systems</strong> — and how these come together to build
          products that are fast, reliable, and built to scale.
        </p>
        <div className={styles.details}>
          {[
            ['Education', 'UCLA, B.S. Computer Science'],
            ['Based in', 'Bay Area, CA'],
          ].map(([label, value]) => (
            <div key={label}>
              <div className={styles.detailLabel}>{label}</div>
              <div className={styles.detailValue}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
