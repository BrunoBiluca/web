import Game from "components/Games/model/Game.model";
import { formatBytes } from "helpers/FormatBytes";
import styles from "./GamesPage.modules.css"
import unityLogo from "images/unity_logo_white.png";
import itchioLogo from "images/itchio_logo_white.png"

const GameInfo = (props) => {
  const game = { props }

  return (
    <div className={styles.gameInfo}>
      <div className={styles.gameMoreInfo}>
        <p>
          <strong>Gameplay duration: </strong>
          <span>{game.gameplayDuration}</span>
        </p>
        <p>
          <strong>Published date: </strong>
          <span>{game.publishedAt}</span>
        </p>
        <p>
          <strong>Game status: </strong>
          <span>{game.gameStatus}</span>
        </p>
        {
          game.gamePackage &&
          <p>
            <strong>Download size: </strong>
            <span>{formatBytes(game.gamePackage.size * 1000)}</span>
          </p>
        }
      </div>
      <div className={styles.gameDownloadSection}>
        <div hidden={!game.itchioLink}>
          <p>Download game on itch.io</p>
          <div className={styles.downloadButtonHolder}>
            <a
              className={styles.downloadButton}
              href={game.itchioLink}
              target="_blank"
              rel="noreferrer external"
            >
              <img src={itchioLogo} alt="Itch.io logo" />
              <span>Download Game</span>
            </a>
          </div>
        </div>
        <div hidden={!game.gamePlayLink}>
          <p>Try it online</p>
          <div className={styles.downloadButtonHolder}>
            <a
              className={styles.downloadButton}
              href={`${game.gamePlayLink}`}
              target="_blank"
              rel="noreferrer external"
            >
              <img src={unityLogo} alt="Unity engine logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

GameInfo.propsType = { game: Game };

GameInfo.defaultProps = {};

export default GameInfo