import Category from "components/Category/Category"
import style from "./GameCard.module.css"
import cardStyle from '../Components/ContentCard/ContentCard.module.css'
import classNames from "helpers/ClassNames"

export default function GameCard({ game }) {
  return (
    <div className={classNames(style.card, cardStyle.card)}>
      <div className={style.backgroundImageHolder}>
        <img
          className={style.backgroundImage}
          src={game.featuredImage.thumbnail}
          alt={game.featuredImage.description}
        />
      </div>
      <div className={style.categories}>
        {game.categories.map(c => <Category key={c.key} category={c} />)}
      </div>
      <div className={style.info}>
        <h1>{game.title}</h1>
        <span>{game.publishedAt}</span>
      </div>
    </div>
  )
}