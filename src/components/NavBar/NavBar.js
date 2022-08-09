import React from 'react';
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import styles from './NavBar.module.css';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import LocalizationHandler from '../LocalizationHandler/LocalizationHandler';

const NavBar = () => {
  return (
    <div style={{ height: "68px" }} data-testid="navbar">
      <div className={styles.navBar}>
        <div className={styles.navBarBody}>
          <div className={styles.navBarButton}>
            <Link to="/">{<FaHome />}</Link>
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
