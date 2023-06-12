import classNames from 'helpers/ClassNames'
import style from './Button.module.css'

export default function ActionButton({ label, hide, onClick, className = [] }) {
  return (
    <button
      style={{ display: hide ? "none" : "inline" }}
      className={classNames(style.flatButton, ...className)}
      onClick={onClick}
    >
      {label}
    </button>
  )
}