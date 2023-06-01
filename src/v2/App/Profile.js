import React from 'react';
import styles from './Profile.module.css'
import brunoPicture from 'images/bruno_picture.webp';
import SocialMediaLinks from 'components/SocialMediaLinks/SocialMediaLinks';

export default function Profile() {

  function animateBubbles() {
    let bubbles = []
    for (let index = 0; index < 20; index++) {
      let speed = Math.floor(Math.random() * 10) + 1
      bubbles.push(<span style={{ "--speed": speed }}></span>)
    }
    return bubbles;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profileBackground}>
        <div className={styles.bubbles}>
          {
            animateBubbles().map(b => b)
          }
        </div>
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.profileImage}>
          <img src={brunoPicture} alt="Bruno Biluca" />
        </div>
        <p><strong>Bruno Biluca</strong></p>
        <p>Programador e Pau pra toda obra!</p>
        <div style={{ margin: "15px 0" }}>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}
