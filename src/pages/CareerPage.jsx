import styles from './CareerPage.module.css'

const jobs = [
  {
    company: 'Rivian VW Technologies',
    title: 'Software Engineering Intern - Data Platform & AI',
    date: 'Jun 2025 – Sep 2025',
    current: true,
    bullets: [
      'Built infrastructure observability tooling serving 50+ product services.',
      'Deployed KEDA autoscaling across QA and testing Kubernetes clusters.',
      'Contributed to an internal developer portal consolidating 50+ microservices.',
    ],
    tags: ['Kubernetes', 'Kafka', 'Datadog', 'AWS', 'KEDA'],
  },
  {
    company: 'Stanford University - Llorente Lab',
    title: 'Research Assistant',
    date: 'Jun 2023 – Sep 2024',
    current: false,
    bullets: [
      'Reimplemented MoSeq\'s AR-HMM behavioral segmentation pipeline in JAX, achieving 4–7× inference speedup over NumPy across 70+ sessions and 2.6M+ frames.',
      'Automated calcium imaging workflows on Sherlock HPC via SLURM — motion correction, CNMF-E source extraction, and HDF5 data management across 500+ hours of recordings.',
      'Built a computer vision pipeline for automated behavioral analysis, cutting manual review time by 90%.',
    ],
    tags: ['JAX', 'SLURM', 'HPC', 'PyTorch', 'OpenCV', 'Docker'],
  },
]

const skills = {
  'Languages': ['Python', 'C++', 'Java', 'TypeScript', 'SQL', 'Bash', 'R', 'JavaScript', 'C', 'Ruby', 'Matlab'],
  'Frontend / Backend': ['React', 'Spring', 'FastAPI', 'Django', 'Flask', 'PostgreSQL', 'MongoDB', 'Node.js',],
  'Infrastructure': ['Kubernetes', 'Docker', 'AWS', 'Kafka', 'Jenkins', 'GCP', 'Git'],
  'ML / Data': ['PyTorch', 'TensorFlow', 'JAX', 'NumPy', 'Pandas', 'OpenCV'],
}

export default function CareerPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* Experience */}
        <div className="navy-line" />
        <div className="section-heading">
          <h1>My Career</h1>
        </div>

        <div className={styles.timeline}>
          {jobs.map((job, i) => (
            <div key={job.company} className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <div className={job.current ? styles.iconDotActive : styles.iconDot} />
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.contentHeader}>
                  <div>
                    <h3 className={styles.company}>{job.company}</h3>
                    <p className={styles.role}>{job.title}</p>
                  </div>
                  <span className={styles.date}>{job.date}</span>
                </div>
                <ul className={styles.bullets}>
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className={styles.tags}>
                  {job.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="navy-line" />
        <div className="section-heading">
          <h1>Skills</h1>
        </div>

        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([cat, list]) => (
            <div key={cat} className={styles.skillCard}>
              <h3>{cat}</h3>
              <ul className={styles.skillList}>
                {list.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
