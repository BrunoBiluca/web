import React, { useEffect, useState } from 'react';

import styles from './Home.module.css';

import BilucaIntro from './BilucaIntro'
import HomeContentView from './HomeContentView';

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

      <HomeContentView />
    </div>
  );
}

export default Home;