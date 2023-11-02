import React from "react";
import styles from './HeaderInfo.module.css';
import brunoPicture from 'images/bruno_picture.webp';
import Locale from "services/Locale";

const HeaderInfo = (props) => {
  let { main } = props;
  return (
    <div className={styles.header} data-testid="header-info">
      <div className={styles.picture} >
        <img
          src={brunoPicture}
          alt="My profile, thanks for being here"
          data-testid="bruno-picture"
        />
      </div>
      <div className={styles.headerInfo}>
        <div className={styles.main}>
          <h1>{main.name}</h1>
          {
            main.job &&
            <p className={styles.goal} data-testid="goal">
              <Locale str={main.job} />
            </p>
          }
        </div>
        <p className={styles.mainDescription} data-testid="description">
          <Locale str={main.summary} />
        </p>
      </div>
    </div>
  );
}

export default HeaderInfo;