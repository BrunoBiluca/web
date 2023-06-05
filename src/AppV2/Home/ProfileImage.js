import React from 'react';
import styles from './Profile.module.css';
import brunoPicture from 'images/bruno_picture.webp';

export default function ProfileImage() {
  return (
    <div className={styles.profileImage}>
      <img src={brunoPicture} alt="Bruno Biluca" />
    </div>
  )
}
