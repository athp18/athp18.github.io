import { useReveal } from './useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className={styles.contact}>
      <div ref={ref} className={`reveal ${styles.inner}`}>
        <div className={styles.header}>
          <span className={styles.number}>05</span>
          <h2 className={styles.sectionTitle}>Contact</h2>
        </div>
        <div className={styles.headline}>Let's<br />Talk.</div>
        <p className={styles.sub}>
          Open to conversations about engineering, AI, or interesting problems.
        </p>
        <div className={styles.links}>
          <a href="mailto:atharvp8@gmail.com" className={styles.link}>Email</a>
          <a href="https://github.com/athp18" target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/atharv-panditrao-778828229/" target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
