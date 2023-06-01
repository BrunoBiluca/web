import React from 'react';

import styles from './Home.module.css';

import BilucaIntro from './BilucaIntro'
import HomeContentView from './HomeContentView';

const Home = () => {
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