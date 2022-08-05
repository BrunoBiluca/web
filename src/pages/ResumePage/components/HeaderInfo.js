import React from "react";
import styles from './HeaderInfo.module.css';
import brunoPicture from '../../../images/bruno_picture.jpg';

const HeaderInfo = (props) => {
    let { main } = props;
    return (
        <div className={styles.header} data-testid="header-info">
            <div className={styles.picture} >
                <img src={brunoPicture} data-testid="bruno-picture"/>
            </div>
            <div className={styles.headerInfo}>
                <div className={styles.main}>
                    <h1>{main.name}</h1>
                    <p className={styles.goal} data-testid="goal">{main.job}</p>
                </div>
                <p className={styles.mainDescription} data-testid="description">
                    {main.summary}
                </p>
            </div>
        </div>
    );
}

export default HeaderInfo;