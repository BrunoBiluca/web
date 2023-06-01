import React from 'react';
import brunoPicture from 'images/bruno_picture.webp';
import styles from './Home.module.css';
import BilucaIntro from './BilucaIntro.strings';

export default function BilucaIntroView() {
  return <div className={styles.intro}>
    <div>
      <p>{BilucaIntro.strings.intro_1.toString()}</p>
      <p>{BilucaIntro.strings.intro_2.toString()}</p>
      <p>{BilucaIntro.strings.intro_3.toString()}</p>
    </div>
    <div>
      <img src={brunoPicture} alt="Bruno Biluca" />
    </div>
    <div>
      <p>{BilucaIntro.strings.intro_4.toString()}</p>
      <p>{BilucaIntro.strings.intro_5.toString()}</p>
    </div>
  </div>;
}
