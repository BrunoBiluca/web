import style from './Button.module.css'

export default function ActionButton({ label, hide, onClick }) {
  return (
    <button
      style={{ display: hide ? "none" : "inline" }}
      className={style.flatButton}
      onClick={onClick}
    >
      {label}
    </button>
  )
}