import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import styles from './GamesPage.module.css';
import Game from 'components/Games/Game.model';
import GamesMarkdown from 'components/MarkdownComponents/GamesMarkdown/GamesMarkdown';
import GameInfo from './GameInfo';
import GameGallery from './GameGallery';
import GitHubRepository from 'components/GitHubRepository/GitHubRepository';
import ContentColor from 'components/Contents/ContentColor.model';
import GamesLocalProvider from 'components/Games/GamesLocalProvider';

const GamesPage = () => {
  const { gameSlug } = useParams();
  let [game, setGame] = useState(new Game({ slug: gameSlug }));
  const contentColor = new ContentColor("azure", "#69dada", "#1cadad")

  useEffect(() => {
    const gameProvider = new GamesLocalProvider()
    gameProvider
      .getBySlug(gameSlug)
      .then(res => {
        setGame(res)
      });
  }, [gameSlug]);

  return (
    <div
      style={contentColor.getStyle()}
      className={styles.gamesPage}
      data-testid="games-page"
    >
      <div className={styles.featuredImageHolder}>
        <img
          className={styles.featuredImage}
          src={game.featuredImage.path}
          alt={game.featuredImage.description}
        />
      </div>

      <div className={styles.content}>
        <div>
          <h2>About this game</h2>
          <GamesMarkdown text={game.description} />
          <GameInfo game={game} />
        </div>
        <div>
          <GameGallery game={game} />
        </div>
      </div>
      {
        game.repository &&
        <GitHubRepository
          owner={game.repository.owner}
          repository={game.repository.repositoryName}
          repositoryURL={game.repository.url}
        />
      }
    </div>
  );

}

GamesPage.defaultProps = {};

export default GamesPage;
