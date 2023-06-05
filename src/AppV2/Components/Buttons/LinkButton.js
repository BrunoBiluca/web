import { Link } from "react-router-dom";
import style from './Button.module.css'

export default function LinkButton({ label, link }) {
  return (
    <Link to={link}><button className={style.flatButton}>{label}</button></Link>
  )
}