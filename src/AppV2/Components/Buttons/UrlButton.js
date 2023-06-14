import style from './Button.module.css';


export default function UrlButton({ label, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer"><button className={style.flatButton}>{label}</button></a>
  );
}
