import Category from "components/Category/Category"
import style from "./ArticleCard.module.css"
import cardStyle from './ContentCard.module.css'
import classNames from "helpers/ClassNames"

export default function ArticleCard({ article }) {
  return (
    <div className={classNames(style.card, cardStyle.card)}>
      <div className={style.header}>
        <div className={style.categories}>
          {article.categories.map(c => <Category key={c.key} category={c} />)}
        </div>
        <div className={style.featuredImage}>
          <img
            className={style.backgroundImage}
            src={article.featuredImage.thumbnail}
            alt={article.featuredImage.description}
          />
        </div>
      </div>
      <div className={style.info}>
        <h1>{article.title}</h1>
        <span>{article.publishedAt}</span>
        <p>{article.contentSummary}</p>
      </div>
    </div>
  )
}