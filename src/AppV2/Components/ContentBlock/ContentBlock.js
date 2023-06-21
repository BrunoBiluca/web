import classNames from "helpers/ClassNames";
import style from "./ContentBlock.module.css"

export default function ContentBlock({ className, children }) {
  return <div className={classNames(style.block, className)}>
    {children}
  </div>
}