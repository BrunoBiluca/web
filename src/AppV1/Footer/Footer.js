import React from 'react';
import styles from './Footer.module.css';
import SocialMediaLinks from '../../components/SocialMediaLinks/SocialMediaLinks';

const Footer = () => {
  return (
    <div className={styles.footer} data-testid="Footer">
      <div className={styles.footerBody}>
        <SocialMediaLinks style={{ fontSize: "3em" }} />
      </div>
    </div>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;