import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgText} aria-hidden="true">ATHARV</div>
      <div className={styles.content}>
        <p className={styles.label}>Software Engineer · Bay Area, CA</p>
        <h1 className={styles.name}>
          Atharv<br />
          <span>Panditrao</span>
        </h1>
        <p className={styles.sub}>
          CS @ UCLA. Interested in systems, ML infra, and fast, scalable products.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>View Work</a>
          <a href="#contact" className={styles.btnSecondary}>Get in Touch ↗</a>
        </div>
      </div>
      <span className={styles.scroll}>Scroll to explore</span>
    </section>
  )
}
