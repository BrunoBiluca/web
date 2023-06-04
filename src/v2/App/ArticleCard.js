import Category from "components/Category/Category"
import style from "./ArticleCard.module.css"
import { getCategory } from "config/Categories"

import titlePattern from "./title_pattern.svg"

export default function ArticleCard() {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <div className={style.categories}>
          <Category category={getCategory("code")} />
        </div>
        <div className={style.featuredImage}>
          <img className={style.backgroundImage} src={titlePattern} />
        </div>
      </div>
      <div className={style.info}>
        <h1>Título do artigo</h1>
        <span>13/09/1992</span>
        <p>Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga.Quem num gosta di mé, boa gentis num é.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Viva Forevis aptent taciti sociosqu ad litora torquent.</p>
      </div>
    </div>
  )
}