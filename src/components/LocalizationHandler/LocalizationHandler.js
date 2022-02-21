import React from 'react';
import styles from './LocalizationHandler.module.css';
import LocaleService from '../../services/LocaleService';
import brazilFlag from '../../images/brazil_flag.png';
import usFlag from '../../images/us_flag.png';


export const LocalizationDirection = {
    horizontal: 0,
    vertical: 1
}

const LocalizationHandler = (props) => {
    let { direction } = props;

    let directionClass = styles.row;
    if(direction == LocalizationDirection.vertical)
        directionClass = styles.column;

    let containerClass = `${styles.localeContainer} ${directionClass}`;

    let changeLocale = (locale) => {
        let oldLocale = LocaleService.getLocale();

        LocaleService.setLocale(locale);

        if (oldLocale !== locale.name) {
            window.location.reload();
        }
    }

    return (
        <div className={containerClass}>
            <span
                className={styles.localeButton}
                onClick={() => changeLocale(LocaleService.locales.ptBR)}
            >
                <img src={brazilFlag} alt="Brazil Flag" />
            </span>
            <span
                className={styles.localeButton}
                onClick={() => changeLocale(LocaleService.locales.en)}
            >
                <img src={usFlag} alt="United States Flag" />
            </span>
        </div>
    );
}

export default LocalizationHandler;