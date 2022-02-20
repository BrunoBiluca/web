import React from 'react';
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import styles from './NavBar.module.css';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import LocaleService from '../../services/LocaleService';

import brazilFlag from '../../images/brazil_flag.png';
import usFlag from '../../images/us_flag.png';

const NavBar = () => {

  let changeLocale = (locale) => {
    let oldLocale = LocaleService.getLocale();

    LocaleService.setLocale(locale);

    if (oldLocale !== locale.name) {
      window.location.reload();
    }
  }

  return (
    <div style={{ height: "68px" }}>
      <div className={styles.navBar} data-testid="NavBar">
        <div className={styles.navBarBody}>
          <div className={styles.navBarButton}>
            <Link to="/">{<FaHome />}</Link>
          </div>
          <div style={{ flex: 1 }}></div>
          <div className={styles.navBarButton}>
            <Link to="/games">Games</Link>
          </div>
          <div className={styles.navBarButton}>
            <Link to="/articles">Learn</Link>
          </div>
          <div className={styles.navBarButton}>
            <Link to="/resume">Resume</Link>
          </div>
          <div className={styles.localeContainer}>
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
          <div>
            <SocialMediaLinks style={{ borderLeft: "1px solid" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const randomGen = () => {

}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
