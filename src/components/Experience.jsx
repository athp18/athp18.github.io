import { useReveal } from './useReveal'
import styles from './Experience.module.css'

const jobs = [
  {
    date: 'Jun 2025 – Sep 2025',
    company: 'Rivian VW Technologies',
    role: 'Software Engineering Intern — Data Platform & AI',
    desc: 'Built infrastructure observability tooling serving 50+ product services, deployed KEDA autoscaling across QA & testing Kubernetes clusters, and contributed to an internal developer portal consolidating 50+ microservices.',
    tags: ['Kubernetes', 'Kafka', 'Datadog', 'AWS', 'KEDA'],
  },
  {
    date: 'Jun 2023 – Sep 2024',
    company: 'Stanford University',
    role: 'Research Assistant — Llorente Lab',
    desc: 'Reimplemented MoSeq\'s AR-HMM behavioral segmentation pipeline in JAX, achieving 4–7x inference speedup over the original NumPy implementation across 70+ sessions and 2.6M+ frames. Automated calcium imaging workflows on Stanford\'s Sherlock HPC cluster via SLURM, handling motion correction, CNMF-E source extraction, and HDF5 data management across 500+ hours of miniscope recordings. Built a custom computer vision pipeline from scratch for automated behavioral analysis across 500+ hours of research footage, reducing manual review time by 90%.',
    tags: ['JAX', 'SLURM', 'HPC', 'PyTorch', 'OpenCV', 'Docker'],
  },
]

export default function Experience() {
  const headerRef = useReveal()

  return (
    <section id="experience" className={styles.experience}>
      <div ref={headerRef} className={`reveal ${styles.header}`}>
        <span className={styles.number}>03</span>
        <h2 className={styles.title}>Experience</h2>
      </div>
      <div className={styles.list}>
        {jobs.map((job, i) => (
          <ExpItem key={i} job={job} />
        ))}
      </div>
    </section>
  )
}

function ExpItem({ job }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${styles.item}`}>
      <div className={styles.meta}>
        <div className={styles.date}>{job.date}</div>
        <div className={styles.company}>{job.company}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.role}>{job.role}</div>
        <div className={styles.desc}>{job.desc}</div>
        <div className={styles.tags}>
          {job.tags.map(t => (
            <span key={t} className={styles.tag}>#{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
