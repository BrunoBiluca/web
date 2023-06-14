import classNames from 'helpers/ClassNames'
import style from './GamePage.module.css'
import ActionButton from 'AppV2/Components/Buttons/ActionButton'

import placeholder from './gameplay.png';
import androidIcon from './android-icon.png'
import windowsIcon from './windows-icon.png'
import webIcon from './web-icon.png'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import Game from 'components/Games/model/Game.model';
import GlobalConfig from 'config/GlobalConfig';
import UrlButton from 'AppV2/Components/Buttons/UrlButton';

export default function GamePage() {
  const { gameSlug } = useParams();
  let [game, setGame] = useState(new Game({ slug: gameSlug }));

  useEffect(() => {
    const gameProvider = GlobalConfig.games.provider()
    gameProvider
      .getBySlug(gameSlug)
      .then(res => {
        setGame(res)
        console.log(res)
      });
  }, [gameSlug]);

  return <>
    <div className={classNames(style.block, style.twoColumnSection, style.gameMain)}>
      <div className={classNames(style.gallery, style.section)}>
        <div className={style.main}>
          <img src={placeholder} />
        </div>
        <div className={style.secondary}>
          <div className={style.item}>
            <img src={placeholder} />
          </div>
          <div className={style.item}>
            <img src={placeholder} />
          </div>
          <div className={style.item}>
            <img src={placeholder} />
          </div>
          <div className={style.item}>
            <img src={placeholder} />
          </div>
        </div>
      </div>
      <div className={classNames(style.section)}>
        {/* Info */}
        <div className={classNames(style.gameHeader)}>
          <h1>{game.title}</h1>
          <span>Lançamento: {game.publishedAt}</span>
        </div>
        <div>
          <p>{game.description}</p>
        </div>
      </div>
    </div>

    <div className={classNames(style.twoColumnSection)}>
      <div className={classNames(style.block, style.section, style.gameDownload)}>
        <div className={classNames(style.twoColumnSection)} style={{ alignItems: "center" }}>
          <h1>Jogar {game.title}</h1>
          <div className={style.platforms}>
            <span className={style.platformIcon}><img src={androidIcon} alt="Ícone do Android, jogo disponível para Android" /></span>
            <span className={style.platformIcon}><img src={windowsIcon} alt="Ícone do Windows, jogo disponível para Windows" /></span>
            <span className={style.platformIcon}><img src={webIcon} alt="Ícone de Web, jogo disponível para navegadores" /></span>
          </div>
        </div>
        <div className={classNames(style.downloadActions)}>
          <ActionButton label="Play now" className={[style.downloadAction]} />
          <ActionButton label="itch.io" className={[style.downloadAction]} />
          <ActionButton label="Play Store" className={[style.downloadAction]} />
        </div>
      </div>
      <div className={classNames(style.block, style.gameInfoSecondary)}>
        <div className={classNames(style.section)}>
          <p><strong>Desenvolvedor:</strong> {game.author}</p>
          <p><strong>Lançamento:</strong> {game.publishedAt}</p>
          <p><strong>Tamanho:</strong> {game.packageSize}</p>
        </div>
        <div className={classNames(style.section)}>
          <h3>Categorias/Gênero</h3>
          <div className={style.categories}>
            {
              game.categories.map(c =>
                <span
                  key={c.key}
                  className={classNames(style.category)}
                >
                  {c.key}
                </span>
              )
            }
          </div>
        </div>
      </div>
    </div >

    <div className={classNames(style.block, style.section)}>
      <h2>Sobre esse jogo</h2>
      <div>
        {game.contentSummary}
      </div>
    </div>

    {
      game.repository &&
      <div className={classNames(style.block, style.section)}>
        <h2>Repositório de código</h2>
        <UrlButton label={game.repository.repositoryName} url={game.repository.url} />
      </div>
    }
  </>
}