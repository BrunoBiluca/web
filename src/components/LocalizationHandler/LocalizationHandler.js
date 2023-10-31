import React from 'react';
import styles from './LocalizationHandler.module.css';
import LocaleService from '../../services/LocaleService';
import brazilFlag from '../../images/brazil_flag.png';
import usFlag from '../../images/us_flag.png';
import classNames from 'helpers/ClassNames';


export const LocalizationDirection = {
  horizontal: 0,
  vertical: 1
}

const LocalizationHandler = (props) => {
  let { direction, height } = props;

  if (!height)
    height = "32px"

  let directionClass = styles.row;
  if (direction === LocalizationDirection.vertical)
    directionClass = styles.column;

  let containerClass = `${styles.localeContainer} ${directionClass}`;

  return (
    <div className={containerClass}>
      <LocaleButton locale={LocaleService.locales.ptBR} style={{ height: height }}>
        <img src={brazilFlag} alt="Brazil Flag" />
      </LocaleButton>
      <LocaleButton locale={LocaleService.locales.en} style={{ height: height }}>
        <img src={usFlag} alt="United States Flag" />
      </LocaleButton>
    </div>
  );
}

const LocaleButton = ({ locale, style, children }) => {
  let changeLocale = (locale) => {
    let oldLocale = LocaleService.getLocale();

    LocaleService.setLocale(locale);

    if (oldLocale !== locale.name) {
      window.location.reload();
    }
  }

  let active = LocaleService.isLocaleActive(locale) ? styles.active : ""

  return (
    <span
      style={style}
      className={classNames(styles.localeButton, active)}
      onClick={() => changeLocale(locale)}
    >
      {children}

    </span>
  )
}

export default LocalizationHandler;