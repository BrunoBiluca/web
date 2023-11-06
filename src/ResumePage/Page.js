import styles from './ResumePage.module.css';
import bgImg from "./images/square_pattern.jpg";

export default function Page({ header, side, content }) {
  return (
    <div className={styles.page}>
      <img src={bgImg} className={styles.bgImg} alt="background" />
      <div className={styles.pageBody}>
        {header}
        <div className={styles.contentBody}>
          <div className={styles.sideContent}>
            {side}
          </div>
          <div className={styles.content}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}