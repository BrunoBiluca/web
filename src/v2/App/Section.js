import styles from './Section.module.css'

import titlePattern from "./title_pattern.svg"

export default function Section({ title, children }) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        <div className={styles.patternHolder}>
          <img src={titlePattern} alt="title pattern" />
        </div>
        <h1>{title}</h1>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}