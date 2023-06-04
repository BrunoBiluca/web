import Category from "components/Category/Category"
import style from "./GameCard.module.css"

import titlePattern from "./title_pattern.svg"
import { getCategory } from "config/Categories"

export default function GameCard() {
  return (
    <div className={style.card}>
      <div className={style.backgroundImageHolder}>
        <div className={style.backgroundImage}></div>
        {/* <img className={style.backgroundImage} src={titlePattern} /> */}
      </div>
      <div className={style.categories}>
        <Category category={getCategory("code")} />
        <Category category={getCategory("code")} />
        <Category category={getCategory("code")} />
        <Category category={getCategory("code")} />
        <Category category={getCategory("code")} />
      </div>
      <div className={style.info}>
        <h1>Título do jogo</h1>
        <span>13/09/1992</span>
      </div>
    </div>
  )
}