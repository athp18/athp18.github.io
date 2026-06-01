import { useReveal } from './useReveal'
import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    title: 'KV Store',
    desc: 'Redis-inspired key-value store in C++ with thread pool, LRU eviction, and append-only log for crash recovery. Benchmarked at 15–17k cmd/s over TCP.',
    stack: 'C++ · Sockets · Pthreads',
    href: 'https://github.com/athp18/flashkv',
  },
  {
    num: '02',
    title: 'Bay Area Pathfinder',
    desc: 'Scalable web app on AWS EC2/ECS using a React frontend and FastAPI backend. ETL pipelines process real-time traffic data; route accuracy improved 70%+ using Graph Neural Networks and XGBoost.',
    stack: 'React · FastAPI · AWS · GNN · XGBoost',
    href: 'https://github.com/athp18/bay-area-pathfinder',
  },
  {
    num: '03',
    title: 'BrewBuddy',
    desc: 'Mobile app for discovering local coffee shops. Personalized recommendation engine using user preferences, ratings, and real-time location via Yelp API.',
    stack: 'React Native · MongoDB · Node.js',
    href: 'https://github.com/athp18/BrewBuddy',
  },
]

export default function Projects() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="projects" className={styles.projects}>
      <div ref={headerRef} className={`reveal ${styles.header}`}>
        <span className={styles.number}>04</span>
        <h2 className={styles.title}>Projects</h2>
      </div>
      <div ref={gridRef} className={`reveal ${styles.grid}`}>
        {projects.map(p => (
          <a key={p.num} href={p.href} target="_blank" rel="noreferrer" className={styles.card}>
            <div className={styles.cardNum}>{p.num}</div>
            <div className={styles.cardTitle}>{p.title}</div>
            <div className={styles.cardDesc}>{p.desc}</div>
            <div className={styles.cardStack}>{p.stack}</div>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
