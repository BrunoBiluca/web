import classNames from 'helpers/ClassNames';
import style from './Button.module.css';


export default function UrlButton({ label, url, className }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <button className={classNames(style.flatButton, className)}>{label}</button>
    </a>
  );
}
