import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import remarkGfm from 'remark-gfm';

import Category from '../../components/Category/Category';
import ImageMarkdown from '../../components/ImageMarkdown/ImageMarkdown';
import { formatBytes } from '../../helpers/FormatBytes';

import unityLogo from '../../images/unity_logo_white.png'
import GamesRequests from '../../components/Games/services/GamesRequests';
import styles from './GamesPage.module.css';
import { storagePath } from '../../helpers/RemotePath';

const GamesPage = () => {
  let { gameSlug } = useParams();
  let [game, setGame] = useState(GamesRequests.emptyGame);

  useEffect(() => {
    new GamesRequests().getBySlug(gameSlug)
      .then(res => setGame(res));
  }, [gameSlug]);

  return (
    <div className={styles.gamesPage} data-testid="games-page">
      <div className={styles.header}>
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

      <div>
        <img
          className={styles.featuredImage}
          src={game.featuredImage.path}
          alt={game.featuredImage.description}
        />
      </div>

      <div className={styles.content}>
        <div>
          <h2>About this game</h2>
          <ReactMarkdown
            children={game.description}
            remarkPlugins={[remarkGfm]}
            components={{
              img({ node, className }) {
                return (
                  <img className={className}
                    src={storagePath(node.properties.src)}
                    alt={node.properties.alt}
                  />
                );
              },
              p(pProps) {
                return (<ImageMarkdown imageProps={pProps} />);
              }
            }}
          />
        </div>
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
              <strong>Platforms: </strong>
              <span></span>
            </p>
            <p>
              <strong>Game status: </strong>
              <span>{game.gameStatus}</span>
            </p>
            <p>
              <strong>Last version: </strong>
              <span></span>
            </p>
            <p>
              <strong>Last version release date: </strong>
              <span></span>
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
            {/* <div hidden={!game.gamePackage.url}>
              <p>Download game</p>
              <div className={styles.downloadButtonHolder}>
                <a
                  className={styles.downloadButton}
                  href={game.gamePackage.url}
                  download
                >
                  <span>Download Game</span>
                </a>
              </div>
            </div> */}
            <div hidden={!game.itchioLink}>
              <p>Download game on itch.io</p>
              <div className={styles.downloadButtonHolder}>
                <a
                  className={styles.downloadButton}
                  href={game.itchioLink}
                  target="_blank"
                  rel="noreferrer external"
                >
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
        <div>
          <h2>How to Play</h2>
          <ul>
            {
              game.howToPlay
                .map(h =>
                  <li key={h.id}>
                    <strong>{h.input} </strong>
                    <span>{h.action}</span>
                  </li>
                )
            }
          </ul>
        </div>
        <div>
          <h2>Gallery</h2>
          <div className={styles.gallery}>
            {
              game
                .gallery
                .map(g =>
                  <div key={g.key} className={styles.galleryItem}>
                    <a
                      href={g.path}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={g.thumbnail} alt={g.name} />
                    </a>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </div>
  );

}

GamesPage.defaultProps = {};

export default GamesPage;
