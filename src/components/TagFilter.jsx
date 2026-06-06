import styles from './TagFilter.module.css'

export default function TagFilter({ tags, active, onSelect }) {
  return (
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
  )
}
