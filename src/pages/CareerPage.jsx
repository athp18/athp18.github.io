import styles from './CareerPage.module.css'

const jobs = [
  {
    company: 'Rivian VW Technologies',
    title: 'Software Engineering Intern - Data Platform & AI',
    date: 'Jun 2025 – Sep 2025',
    current: false,
    bullets: [
      'Built infrastructure observability tooling serving 50+ product services.',
      'Deployed KEDA autoscaling across QA and testing Kubernetes clusters.',
      'Contributed to an internal developer portal consolidating 50+ microservices.',
      'Designed and implemented a Crossplane-based solution to automate credential lifecycle management declaratively.',
    ],
    tags: ['Kubernetes', 'Kafka', 'Bash', 'AWS', 'Crossplane'],
  },
  {
    company: 'Stanford University - Llorente Lab',
    title: 'Research Assistant',
    date: 'Jun 2023 – Sep 2024',
    url: 'https://med.stanford.edu/llorente-lab.html',
    current: false,
    bullets: [
      "Reimplemented MoSeq's AR-HMM behavioral segmentation pipeline in JAX.",
      'Processed 300+ hours of behavioral video across 15+ experiments, handling MoSeq extraction, PCA, modeling, and downstream analysis.',
      'Implemented a plugin for synchronized Miniscope calcium imaging and behavioral recordings, enabling multimodal neural-behavioral analysis.',
      'Automated calcium imaging preprocessing (motion correction, CNMF-E source extraction, and HDF5 data management) across 30+ hours of recordings on Sherlock HPC using SLURM.',
      'Built a computer vision pipeline for automated novel object recognition analysis, reducing manual review time by 90%.',
    ],
    tags: ['JAX', 'C++', 'Python', 'PyTorch', 'SLURM', 'OpenCV', 'Docker', 'Pandas', 'NumPy'],
  },
]

const skills = {
  'Languages': ['Python', 'C++', 'Golang', 'Rust', 'Java', 'TypeScript', 'SQL', 'Bash', 'R', 'JavaScript', 'C', 'Ruby', 'Matlab'],
  'Frontend / Backend': ['React', 'Spring', 'FastAPI', 'Django', 'Flask', 'PostgreSQL', 'MongoDB', 'Node.js',],
  'DevOps / Infrastructure': ['Kubernetes', 'Docker', 'AWS', 'Kafka', 'Jenkins', 'GCP', 'Git'],
  'ML / Data': ['PyTorch', 'TensorFlow', 'JAX', 'Huggingface', 'NumPy', 'Pandas', 'OpenCV'],
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
                    <h3 className={styles.company}>{job.url ? <a href={job.url} target="_blank" rel="noopener noreferrer" className={styles.link}>{job.company}</a> : job.company}</h3>
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
