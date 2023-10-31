import React from 'react';
import Section from './Section';

import stylesResumePage from "../ResumePage.module.css";
import styles from './GamesInfo.module.css';
import { FaGithub } from 'react-icons/fa';
import LocaleStringBuilder from 'services/LocaleStringBuilder';

const GamesInfo = (props) => {

  let title = new LocaleStringBuilder("My Games")
    .ptbr("Meus jogos")
    .en("My Games")
    .build()

  return (
    <Section title={title}>
      {
        props.games.map((g, i) =>
          <div className={i > 1 ? stylesResumePage.noPrint : ""} key={g.description}>
            <GameInfo game={g} key={g.description} />
          </div>
        )
      }
    </Section>
  );
}

const GameInfo = (props) => {
  let { game } = props;
  return (
    <a
      className={styles.gameContainer}
      href={game.repo}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.imgHolder}>
        <img src={require(`../images/${game.screenshoot}`).default} alt="game" />
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