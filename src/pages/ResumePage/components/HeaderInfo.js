import React from "react";
import styles from './HeaderInfo.module.css';
import brunoPicture from '../../../images/bruno_picture.jpg';


const HeaderInfo = (props) => {
    let { main } = props;
    return (
        <div className={styles.header}>
            <div className={styles.picture} >
                <img src={brunoPicture} />
            </div>
            <div className={styles.headerInfo}>
                <div className={styles.main}>
                    <h1>{main.name}</h1>
                    <p className={styles.goal}>{main.job}</p>
                </div>
                <p className={styles.mainDescription}>
                    {main.summary}
                </p>
            </div>
        </div>
    );
}

export default HeaderInfo;