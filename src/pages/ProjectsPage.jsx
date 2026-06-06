import { useState } from 'react'
import styles from './ProjectsPage.module.css'
import TagFilter from '../components/TagFilter'
import projects from '../data/projects'

const allTags = [...new Set(projects.flatMap(p => p.tags))]

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState(null)
  const [expanded, setExpanded] = useState(null)

  const filtered = activeTag
    ? projects.filter(p => p.tags.includes(activeTag))
    : projects

  const toggle = (slug) => setExpanded(prev => prev === slug ? null : slug)

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className="navy-line" />
        <div className="section-heading">
          <h1>My Projects</h1>
        </div>

        <TagFilter tags={allTags} active={activeTag} onSelect={setActiveTag} />

        <div className={styles.grid}>
          {filtered.map(p => {
            const isOpen = expanded === p.slug
            return (
              <div key={p.slug} className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}>
                {/* ── Card header (always visible) ── */}
                <button className={styles.cardBtn} onClick={() => toggle(p.slug)} aria-expanded={isOpen}>
                  <div className={styles.cardIcon}>{p.icon}</div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardTop}>
                      <h3 className={styles.cardTitle}>{p.title}</h3>
                      <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>›</span>
                    </div>
                    <p className={styles.cardDesc}>{p.shortDesc}</p>
                    <p className={styles.cardStack}>{p.stack}</p>
                    <div className={styles.tagRow}>
                      {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                    </div>
                  </div>
                </button>

                {/* ── Expanded detail ── */}
                {isOpen && (
                  <div className={styles.detail}>
                    {p.images.length > 0 && (
                      <div className={styles.gallery}>
                        {p.images.map((src, i) => (
                          <img key={i} src={src} alt={`${p.title} screenshot ${i + 1}`} className={styles.galleryImg} />
                        ))}
                      </div>
                    )}

                    <div className={styles.detailSections}>
                      <div className={styles.detailSection}>
                        <h4>Overview</h4>
                        <p>{p.overview}</p>
                      </div>
                      <div className={styles.detailSection}>
                        <h4>Technical Details</h4>
                        <p>{p.technical}</p>
                      </div>
                    </div>

                    <div className={styles.detailLinks}>
                      <a href={p.github} target="_blank" rel="noreferrer" className={styles.btnOutline}>GitHub ↗</a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className={styles.btnPrimary}>Live Demo ↗</a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No projects match this filter.</p>
        )}
      </div>
    </div>
  )
}
