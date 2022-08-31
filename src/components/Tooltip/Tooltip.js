import styles from "./Tooltip.module.css"

const Tooltip = ({text, children}) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.text}>{text}</span>
    </div>
  );
}

export default Tooltip;