import Game from "components/Games/model/Game.model";
import { formatBytes } from "helpers/FormatBytes";
import styles from "./GamesPage.module.css"
import unityLogo from "images/unity_logo_white.png";
import itchioLogo from "images/itchio_logo_white.png"
import Tooltip from "components/Tooltip/Tooltip";

const GameInfo = ({ game }) => {

  console.log(game)

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
          <Tooltip text="Download game">
            <div className={styles.downloadButtonHolder}>
              <a
                className={styles.downloadButton}
                href={game.itchioLink}
                target="_blank"
                rel="noreferrer external"
              >
                <img src={itchioLogo} alt="Itch.io logo" />
              </a>
            </div>
          </Tooltip>
        </div>
        <div hidden={!game.gamePlayLink}>
          <Tooltip text="Try it online">
            <div className={styles.downloadButtonHolder}>
              <a
                className={styles.downloadButton}
                href={game.gamePlayLink}
                target="_blank"
                rel="noreferrer external"
              >
                <img src={unityLogo} alt="Unity engine logo" />
              </a>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

GameInfo.propsType = { game: Game };

GameInfo.defaultProps = {};

export default GameInfo