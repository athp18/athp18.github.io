import { useState } from 'react'
import styles from './ProjectsPage.module.css'
import TagFilter from '../components/TagFilter'

const projects = [
  {
    title: 'KV Store',
    desc: 'Redis-inspired key-value store in C++ with thread pool, LRU eviction, and append-only log for crash recovery. Benchmarked at 15–17k cmd/s over TCP.',
    stack: 'C++ · Sockets · Pthreads',
    tags: ['Systems', 'C++'],
    href: 'https://github.com/athp18/flashkv',
    icon: '',
  },
  {
    title: 'Bay Area Pathfinder',
    desc: 'Scalable web app on AWS EC2/ECS with React frontend and FastAPI backend. ETL pipelines on real-time traffic data; route accuracy improved 70%+ with GNNs and XGBoost.',
    stack: 'React · FastAPI · AWS · GNN · XGBoost',
    tags: ['Web', 'AI/ML'],
    href: 'https://github.com/athp18/bay-area-pathfinder',
    icon: '',
  },
  {
    title: 'BrewBuddy',
    desc: 'Mobile app for discovering local coffee shops with an AI-integrated recommendation engine using user preferences, ratings, and real-time location.',
    stack: 'React Native · MongoDB · Node.js',
    tags: ['Mobile', 'Full Stack', 'Web'],
    href: 'https://github.com/athp18/BrewBuddy',
    icon: '',
  },
  {
    title: 'Competitive Intelligence',
    desc: 'A signal ingestion and multi-agent query platform that continuously searches targets by crawling job boards, news, and developer platforms, extracts structured intelligence via LLM, and lets you query the accumulated knowledge base in plain English.',
    stack: 'FastAPI · PostgreSQL/pgvector · Celery · Next.js · Claude API · Voyage AI',
    tags: ['AI/ML', 'Full Stack'],
    href: 'https://github.com/athp18/competitive-intelligence',
    icon: '',
  },
  {                         
    title: 'Distributed LLM Benchmark',
    desc: 'A fine-tuning benchmark harness that sweeps training configurations across single-GPU and multi-GPU FSDP setups, measuring throughput, peak memory, and step latency. Covers sharding strategies, gradient checkpointing, and mixed-precision dtypes, with per-step metrics collected at runtime.',                                                                                                                                 
    stack: 'PyTorch · FSDP · TinyLlama · torchrun · Chart.js',                                                                                                        
    tags: ['AI/ML', 'Systems'],                             
    href: 'https://github.com/athp18/llm_bench',                                                                                                                      
    icon: '',
  },           
]

const allTags = [...new Set(projects.flatMap(p => p.tags))]

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState(null)

  const filtered = activeTag
    ? projects.filter(p => p.tags.includes(activeTag))
    : projects

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className="navy-line" />
        <div className="section-heading">
          <h1>My Projects</h1>
        </div>

        <TagFilter tags={allTags} active={activeTag} onSelect={setActiveTag} />

        <div className={styles.grid}>
          {filtered.map(p => (
            <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className={styles.card}>
              <div className={styles.cardIcon}>{p.icon}</div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <span className={styles.arrow}>↗</span>
                </div>
                <p className={styles.cardDesc}>{p.desc}</p>
                <p className={styles.cardStack}>{p.stack}</p>
                <div className={styles.tagRow}>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No projects match this filter.</p>
        )}
      </div>
    </div>
  )
}
