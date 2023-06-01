import React from 'react';
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import styles from './NavBar.module.css';
import SocialMediaLinks from 'components/SocialMediaLinks/SocialMediaLinks';
import LocalizationHandler from 'components/LocalizationHandler/LocalizationHandler';
import RouteManager from 'services/RouteManager';


export function NavBar() {
  return (
    <div className={styles.navBar} data-testid="navbar">
      <div className={styles.navBarBody}>
        <div className={styles.navBarButton}>
          <Link to={RouteManager.toBase()}>{<FaHome />} Biluca Portal</Link>
        </div>
        <div style={{ display: "inline-flex" }}>
          <LocalizationHandler />
          <SocialMediaLinks style={{ borderLeft: "1px solid" }} />
        </div>
      </div>
    </div>
  );
}
