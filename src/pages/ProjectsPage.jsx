import styles from './ProjectsPage.module.css'

const projects = [
  {
    title: 'KV Store',
    desc: 'Redis-inspired key-value store in C++ with thread pool, LRU eviction, and append-only log for crash recovery. Benchmarked at 15–17k cmd/s over TCP.',
    stack: 'C++ · Sockets · Pthreads',
    href: 'https://github.com/athp18/flashkv',
    icon: '🗄️',
  },
  {
    title: 'Bay Area Pathfinder',
    desc: 'Scalable web app on AWS EC2/ECS with React frontend and FastAPI backend. ETL pipelines on real-time traffic data; route accuracy improved 70%+ with GNNs and XGBoost.',
    stack: 'React · FastAPI · AWS · GNN · XGBoost',
    href: 'https://github.com/athp18/bay-area-pathfinder',
    icon: '🗺️',
  },
  {
    title: 'BrewBuddy',
    desc: 'Mobile app for discovering local coffee shops with a personalized recommendation engine using user preferences, ratings, and real-time location via Yelp API.',
    stack: 'React Native · MongoDB · Node.js',
    href: 'https://github.com/athp18/BrewBuddy',
    icon: '☕',
  },
]

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className="navy-line" />
        <div className="section-heading">
          <h1>My Projects</h1>
        </div>
        <div className={styles.grid}>
          {projects.map(p => (
            <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className={styles.card}>
              <div className={styles.cardIcon}>{p.icon}</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <p className={styles.cardStack}>{p.stack}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
