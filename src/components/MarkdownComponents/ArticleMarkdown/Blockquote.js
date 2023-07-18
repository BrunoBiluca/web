import style from "./Blockquote.module.css"

export default function Blockquote({children, ...props}){
  return <blockquote {...props} className={style.quote}>
    {children}
  </blockquote>
}