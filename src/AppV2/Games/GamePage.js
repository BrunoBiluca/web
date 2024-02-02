import classNames from 'helpers/ClassNames'
import style from './GamePage.module.css'

import androidIcon from './android-icon.png'
import windowsIcon from './windows-icon.png'
import webIcon from './web-icon.png'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import Game from 'components/Games/model/Game.model';
import UrlButton from 'AppV2/Components/Buttons/UrlButton';
import ContentBlock from 'AppV2/Components/ContentBlock/ContentBlock'
import GamesLocalProvider from 'components/Games/services/local/GamesLocalProvider'

export default function GamePage() {
  const { gameSlug } = useParams();
  let [game, setGame] = useState(new Game({ slug: gameSlug }));

  let [gallery, setGallery] = useState([]);
  let [mainGallery, setMainGallery] = useState(<></>);

  useEffect(() => {
    const gameProvider = new GamesLocalProvider()
    gameProvider
      .getBySlug(gameSlug)
      .then(res => {
        document.title = res.title
        setGame(res)
        let g = res.gallery.map(g =>
          <img key={g.key} src={g.thumbnail} alt={g.alt} />
        )
        setGallery(g)
        setMainGallery(g[0])
      })
  }, [gameSlug]);

  function changeMainGallery(index) {
    setMainGallery(gallery[index])
  }

  return <>
    <ContentBlock className={classNames(style.twoColumnSection, style.gameMain)}>
      <div className={classNames(style.gallery, style.section)}>
        <div className={style.main}>
          {mainGallery}
        </div>
        <div className={style.secondary}>
          <div className={style.galleryImageHolder}>
            {gallery.map((galleryImage, i) =>
              <div
                key={galleryImage.key}
                className={style.item}
                onClick={() => changeMainGallery(i)}
              >
                {galleryImage}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={classNames(style.section)}>
        <div className={classNames(style.gameHeader)}>
          <h1>{game.title}</h1>
          <span>Lançamento: {game.publishedAt}</span>
        </div>
        <div>
          <p>{game.description}</p>
        </div>
      </div>
    </ContentBlock>

    <div className={classNames(style.twoColumnSection)}>
      <ContentBlock className={classNames(style.section, style.gameDownload)}>
        <div className={classNames(style.twoColumnSection)} style={{ alignItems: "center" }}>
          <h1>Jogar {game.title}</h1>
          <div className={style.platforms}>
            <span
              hidden={!game.platforms.includes("android")}
              className={style.platformIcon}
            >
              <img src={androidIcon} alt="Ícone do Android, jogo disponível para Android" />
            </span>
            <span
              hidden={!game.platforms.includes("windows")}
              className={style.platformIcon}
            >
              <img src={windowsIcon} alt="Ícone do Windows, jogo disponível para Windows" />
            </span>
            <span
              hidden={!game.platforms.includes("web")}
              className={style.platformIcon}
            >
              <img src={webIcon} alt="Ícone de Web, jogo disponível para navegadores" />
            </span>
          </div>
        </div>
        <div className={classNames(style.downloadActions)}>
          {game.playActions.map(action =>
            <UrlButton
              key={action.name}
              label={action.name}
              className={[style.downloadAction]}
              url={action.url}
            />
          )}
        </div>
      </ContentBlock>
      <ContentBlock className={classNames(style.gameInfoSecondary)}>
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
      </ContentBlock>
    </div>

    <ContentBlock className={style.section}>
      <h2>Sobre esse jogo</h2>
      <div>
        {game.contentSummary}
      </div>
    </ContentBlock>

    {
      game.repository &&
      <ContentBlock className={style.section}>
        <h2>Repositório de código</h2>
        <UrlButton label={game.repository.repositoryName} url={game.repository.url} />
      </ContentBlock>
    }
  </>
}