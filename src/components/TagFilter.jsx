import styles from './TagFilter.module.css'

export default function TagFilter({ groups }) {
  return (
    <div className={styles.filterSection}>
      {groups.map(({ label, tags, active, onSelect }) => (
        <div key={label} className={styles.filterGroup}>
          <span className={styles.groupLabel}>{label}</span>
          <div className={styles.filters}>
            <button
              className={active === null ? `${styles.btn} ${styles.active}` : styles.btn}
              onClick={() => onSelect(null)}
            >
              All
            </button>
            {tags.map(tag => (
              <button
                key={tag}
                className={active === tag ? `${styles.btn} ${styles.active}` : styles.btn}
                onClick={() => onSelect(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
