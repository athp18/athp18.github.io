import { useState } from 'react'
import styles from './WritingPage.module.css'
import TagFilter from '../components/TagFilter'

// Add posts here. Set href to a URL when the post is published, or null to show "Coming Soon".
const posts = [
  // {
  //   title: 'Building a Redis-Inspired KV Store in C++',
  //   date: 'Jun 2026',
  //   tags: ['Systems', 'C++'],
  //   desc: 'How I built a thread-safe key-value store with LRU eviction, an append-only log, and a custom TCP server — and what I learned along the way.',
  //   href: null,
  // },
]

const allTags = [...new Set(posts.flatMap(p => p.tags))]

export default function WritingPage() {
  const [activeTag, setActiveTag] = useState(null)

  const filtered = activeTag
    ? posts.filter(p => p.tags.includes(activeTag))
    : posts

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className="navy-line" />
        <div className="section-heading">
          <h1>Writing</h1>
        </div>

        {posts.length > 0 && (
          <TagFilter tags={allTags} active={activeTag} onSelect={setActiveTag} />
        )}

        {filtered.length === 0 ? (
          <p className={styles.empty}>Posts coming soon.</p>
        ) : (
          <div className={styles.list}>
            {filtered.map(post => (
              <PostRow key={post.title} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function PostRow({ post }) {
  const inner = (
    <div className={styles.item}>
      <div className={styles.itemLeft}>
        <div className={styles.tagRow}>
          {post.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.desc}>{post.desc}</p>
      </div>
      <div className={styles.itemRight}>
        <span className={styles.date}>{post.date}</span>
        {post.href && <span className={styles.arrow}>↗</span>}
      </div>
    </div>
  )

  if (!post.href) return <div className={styles.itemWrap}>{inner}</div>

  return (
    <a href={post.href} target="_blank" rel="noreferrer" className={`${styles.itemWrap} ${styles.itemLink}`}>
      {inner}
    </a>
  )
}
