import React from 'react';
import brunoPicture from 'images/bruno_picture.webp';
import styles from './Home.module.css';
import HomeStrings from './Home.strings';

export default function BilucaIntro() {
  return <div className={styles.intro}>
    <div>
      <p>{HomeStrings.strings.intro_1.toString()}</p>
      <p>{HomeStrings.strings.intro_2.toString()}</p>
      <p>{HomeStrings.strings.intro_3.toString()}</p>
    </div>
    <div>
      <img src={brunoPicture} alt="Bruno Biluca" />
    </div>
    <div>
      <p>{HomeStrings.strings.intro_4.toString()}</p>
      <p>{HomeStrings.strings.intro_5.toString()}</p>
    </div>
  </div>;
}
