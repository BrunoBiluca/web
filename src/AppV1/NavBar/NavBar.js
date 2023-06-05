import React from 'react';
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import styles from './NavBar.module.css';
import SocialMediaLinks from '../../components/SocialMediaLinks/SocialMediaLinks';
import LocalizationHandler from '../../components/LocalizationHandler/LocalizationHandler';
import RouteManager from 'services/RouteManager';

const NavBar = () => {
  return (
    <div data-testid="navbar">
      <div className={styles.navBar}>
        <div className={styles.navBarBody}>
          <div className={styles.navBarButton}>
            <Link to={RouteManager.toBase()}>{<FaHome />}</Link>
          </div>
          <div style={{ flex: 1 }}></div>
          <div className={styles.navBarButton}>
            <Link to="/resume">Resume</Link>
          </div>
          <LocalizationHandler />
          <div>
            <SocialMediaLinks style={{ borderLeft: "1px solid" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
