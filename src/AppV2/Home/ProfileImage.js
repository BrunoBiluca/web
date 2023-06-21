import React from 'react';
import styles from './Profile.module.css';
import brunoPicture from 'images/bruno_picture.webp';

export default function ProfileImage({ size }) {

  let style = {}
  if (size) {
    style = { width: size, height: size }
  }

  return (
    <div style={style} className={styles.profileImage}>
      <img src={brunoPicture} alt="Bruno Biluca" />
    </div>
  )
}
