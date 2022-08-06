import React, { useEffect, useState } from 'react';
import ContentCard from 'components/ContentCard/ContentCard';
import ContentCardHorizontal from 'components/ContentCardHorizontal/ContentCardHorizontal';
import styles from './GamesGrid.module.css';
import FeaturesConfig from 'config/FeaturesConfig';

const GamesGrid = () => {
  const gamesProvider = FeaturesConfig.games.provider();

  let [games, setGames] = useState([]);

  useEffect(() => {
    gamesProvider
      .get()
      .then(res => setGames(res));
  }, []);

  return (
    <div data-testid="games-grid">
      <h2>Games</h2>
      <div className={styles.contentGrid}>
        <div
          style={{ flex: 4 }}
          className={`${styles.contentHolder} ${styles.contentHolderVertical}`}
        >
          <div className={styles.flex1} style={{ marginBottom: "1em" }}>
            <ContentCardHorizontal content={games[2]}>
              <p style={{ color: "#888" }}>Coming soon</p>
            </ContentCardHorizontal>
          </div>
          <div className={styles.flex1}>
            <ContentCardHorizontal content={games[3]}>
              <p style={{ color: "#888" }}>Coming soon</p>
            </ContentCardHorizontal>
          </div>
        </div>
        <div style={{ flex: 5 }} className={styles.contentHolder}>
          <ContentCard content={games[0]}>
            <p style={{ color: "#888" }}>Coming soon</p>
          </ContentCard>
        </div>
        <div style={{ flex: 3 }} className={styles.contentHolder}>
          <ContentCard content={games[1]}>
            <p style={{ color: "#888" }}>Coming soon</p>
          </ContentCard>
        </div>
      </div>
      <div>
        <ContentCard>
          <a href="/games" className={styles.contentSeeMore}>
            See more...
          </a>
        </ContentCard>
      </div>
    </div>
  );
}

GamesGrid.propTypes = {};

GamesGrid.defaultProps = {};

export default GamesGrid;