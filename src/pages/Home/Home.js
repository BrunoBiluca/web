import React, { useEffect, useState } from 'react';

import brunoPicture from 'images/bruno_picture.jpg'

import styles from './Home.module.css';

import GamesGrid from 'components/Games/GamesGrid/GamesGrid';
import ArticlesGrid from 'components/Articles/ArticlesGrid/ArticlesGrid';
import GamesCarrousel from 'components/Games/GamesCarrousel/GamesCarrousel';
import ArticlesCarrousel from 'components/Articles/ArticlesCarrousel/ArticlesCarrousel';
import HomeStrings from './Home.strings';

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
        <div className={styles.intro}>
          <div>
            <p>{HomeStrings.strings.intro_1.toString()}</p>
            <p>{HomeStrings.strings.intro_2.toString()}</p>
            <p>{HomeStrings.strings.intro_3.toString()}</p>
          </div>
          <div>
            <img src={brunoPicture} alt="Bruno Biluca"/>
          </div>
          <div>
            <p>{HomeStrings.strings.intro_4.toString()}</p>
            <p>{HomeStrings.strings.intro_5.toString()}</p>
          </div>
        </div>
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

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
