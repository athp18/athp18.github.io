import { useReveal } from './useReveal'
import styles from './Writing.module.css'

const posts = [
  {
    num: '01',
    tag: 'Technical',
    title: 'Coming Soon',
    desc: '',
    date: 'Coming soon',
  },
  {
    num: '02',
    tag: 'Research',
    title: 'Coming Soon',
    desc: '',
    date: 'Coming soon',
  },
  {
    num: '03',
    tag: 'Essay',
    title: 'Coming Soon',
    desc: '',
    date: 'Coming soon',
  },
]

export default function Writing() {
  const headerRef = useReveal()

  return (
    <section id="writing" className={styles.writing}>
      <div ref={headerRef} className={`reveal ${styles.header}`}>
        <span className={styles.number}>05</span>
        <h2 className={styles.title}>Writing</h2>
      </div>
      <div className={styles.list}>
        {posts.map(post => (
          <PostItem key={post.num} post={post} />
        ))}
      </div>
    </section>
  )
}

function PostItem({ post }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${styles.item}`}>
      <div className={styles.meta}>
        <div className={styles.tag}>{post.tag}</div>
        <div className={styles.date}>{post.date}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.postTitle}>{post.title}</div>
        <div className={styles.desc}>{post.desc}</div>
      </div>
      <div className={styles.arrow}>↗</div>
    </div>
  )
}