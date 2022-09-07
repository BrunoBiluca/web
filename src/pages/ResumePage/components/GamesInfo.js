import React from 'react';
import Section from './Section';

import styles from './GamesInfo.module.css';
import { FaGithub } from 'react-icons/fa';

const GamesInfo = (props) => {
  return (
    <Section title="My Games">
      {
        props.games.map(g => <GameInfo game={g} />)
      }
    </Section>
  );
}

const GameInfo = (props) => {
  let { game } = props;
  let screenshootPath = `images/resume/${game.screenshoot}`;

  return (
    <a
      className={styles.gameContainer}
      href={game.repo}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.imgHolder}>
        <img src={screenshootPath} alt="game" />
      </div>
      <div>
        <p className={styles.title}>
          <span>{game.name}</span>
          {
            game.repo
            &&
            <span style={{ float: "right", display: "flex" }}><FaGithub /></span>
          }
        </p>
        <p className={styles.description}>{game.description}</p>
        <p className={styles.description}>{game.role}</p>
      </div>
    </a>
  );
}

export default GamesInfo;