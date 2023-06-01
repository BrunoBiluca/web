import React from 'react';

import styles from './Home.module.css';

import BilucaIntroView from './BilucaIntroView'
import HomeContentView from './HomeContentView';

const Home = () => {
  return (
    <div className={styles.Home} data-testid="Home">
      <div>
        <BilucaIntroView />
      </div>

      <HomeContentView />
    </div>
  );
}

export default Home;