import { useState } from 'react'
import styles from './ProjectsPage.module.css'
import TagFilter from '../components/TagFilter'
import projects from '../data/projects'
import { GitHubIcon } from '../components/Icons'

const allTags = [...new Set(projects.flatMap(p => p.tags))]

function renderText(text) {
  return text.split(/(`[^`]+`|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={i} className={styles.inlineCode}>{part.slice(1, -1)}</code>
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link)
      return <a key={i} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>
    return part
  })
}

function renderParagraph(text) {
  // Bold a leading label like "Stack:" or "Thread pool." if it's short (<= 40 chars)
  const m = text.match(/^([A-Z][A-Za-z /+]{0,38}[:.])\s/)
  if (m) {
    const label = m[1]
    const rest = text.slice(label.length + 1)
    return <><strong>{label}</strong>{' '}{renderText(rest)}</>
  }
  return renderText(text)
}

function renderParagraphs(text) {
  return text.split('\n\n').map((para, i) => (
    <p key={i}>{renderParagraph(para)}</p>
  ))
}

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
                  <div className={styles.cardIcon}><p.icon size={28} strokeWidth={1.5} color="var(--text)" /></div>
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
                        {renderParagraphs(p.overview)}
                      </div>
                      <div className={styles.detailSection}>
                        <h4>Technical Details</h4>
                        {renderParagraphs(p.technical)}
                      </div>
                    </div>

                    <div className={styles.detailLinks}>
                      <a href={p.github} target="_blank" rel="noreferrer" className={styles.btnOutline} aria-label="GitHub">
                        <GitHubIcon size={15} /> GitHub
                      </a>
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
