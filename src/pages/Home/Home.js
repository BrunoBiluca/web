import React, { useEffect, useState } from 'react';

import styles from './Home.module.css';

import GamesGrid from 'components/Games/GamesGrid/GamesGrid';
import ArticlesGrid from 'components/Articles/ArticlesGrid/ArticlesGrid';
import GamesCarrousel from 'components/Games/GamesCarrousel/GamesCarrousel';
import ArticlesCarrousel from 'components/Articles/ArticlesCarrousel/ArticlesCarrousel';
import BilucaIntro from './BilucaIntro'

const Home = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1400);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className={styles.Home} data-testid="Home">
      <div>
        <BilucaIntro />
      </div>

      {
        isDesktop ?
          (
            <div>
              <GamesGrid />
              <ArticlesGrid />
            </div>
          )
          :
          (
            <div>
              <GamesCarrousel />
              <ArticlesCarrousel />
            </div>
          )
      }
    </div>
  );
}

export default Home;