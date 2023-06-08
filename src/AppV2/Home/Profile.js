import React from 'react';
import styles from './Profile.module.css'
import SocialMediaLinks from 'components/SocialMediaLinks/SocialMediaLinks';
import ProfileImage from './ProfileImage';

export default function Profile() {

  function animateBubbles() {
    const bubblesNumber = window.innerWidth < 600 ? 10 : 20;
    let bubbles = []
    for (let index = 0; index < bubblesNumber; index++) {
      let speed = Math.floor(Math.random() * 10) + 1
      bubbles.push(<span key={index} style={{ "--speed": speed }}></span>)
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
        <ProfileImage />
        <p><strong>Bruno Biluca</strong></p>
        <p>Programador e Pau pra toda obra!</p>
        <div style={{ margin: "15px 0" }}>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
}
