import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import styles from './GamesPage.module.css';
import GlobalConfig from 'config/GlobalConfig';
import Game from 'components/Games/model/Game.model';
import GamesMarkdown from 'components/MarkdownComponents/GamesMarkdown/GamesMarkdown';
import GameInfo from './GameInfo';
import GameGallery from './GameGallery';
import GitHubRepository from 'components/GitHubRepository/GitHubRepository';

const GamesPage = () => {
  const { gameSlug } = useParams();
  let [game, setGame] = useState(new Game({ slug: gameSlug }));
  const contentColor = GlobalConfig.games.color()

  useEffect(() => {
    const gameProvider = GlobalConfig.games.provider()
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
          repository={game.repository.name}
          repositoryURL={game.repository.url}
        />
      }
    </div>
  );

}

GamesPage.defaultProps = {};

export default GamesPage;
