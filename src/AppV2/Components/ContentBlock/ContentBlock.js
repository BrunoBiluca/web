import classNames from "helpers/ClassNames";
import styles from "./ContentBlock.module.css"

export default function ContentBlock({ style, className, children }) {
  return <div style={style} className={classNames(styles.block, className)}>
    {children}
  </div>
}