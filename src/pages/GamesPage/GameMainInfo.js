import Category from "components/Category/Category";
import styles from "./GamesPage.module.css"

const GameMainInfo = (props) => {
  const { game } = props;
  return (
    <div>
      <h1 className={styles.title}>{game.title}</h1>
      <div className={styles.subtitle}>
        <div className={styles.info}>
          <span>{game.author}</span>
        </div>

        <div className={styles.categories}>
          {
            game
              .categories
              .map(c => <Category key={c.key} category={c} />)
          }
        </div>
      </div>
    </div>
  )
}

export default GameMainInfo;