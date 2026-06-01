import { useReveal } from './useReveal'
import styles from './Skills.module.css'

const categories = [
  {
    label: 'Languages',
    skills: ['Python', 'C++', 'Java', 'TypeScript', 'SQL', 'Bash', 'R'],
  },
  {
    label: 'Frontend / Backend',
    skills: ['React', 'FastAPI', 'Django', 'Flask', 'PostgreSQL', 'MongoDB', 'Node.js'],
  },
  {
    label: 'Infrastructure',
    skills: ['Kubernetes', 'Docker', 'AWS', 'Kafka', 'Jenkins', 'GCP', 'KEDA'],
  },
  {
    label: 'ML / Data',
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Scanpy'],
  },
]

export default function Skills() {
  const headerRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="skills" className={styles.skills}>
      <div ref={headerRef} className={`reveal ${styles.header}`}>
        <span className={styles.number}>02</span>
        <h2 className={styles.title}>Skills</h2>
      </div>
      <div ref={gridRef} className={`reveal ${styles.grid}`}>
        {categories.map(cat => (
          <div key={cat.label} className={styles.category}>
            <div className={styles.catLabel}>{cat.label}</div>
            <ul className={styles.list}>
              {cat.skills.map(s => (
                <li key={s} className={styles.tag}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
