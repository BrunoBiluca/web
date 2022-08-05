import React from 'react';
import styles from './Footer.module.css';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import NewsletterSubscribe from 'components/NewsLetter/NewsletterSubscribe/NewsletterSubscribe.js';

const Footer = () => {
  return (
    <div className={styles.footer} data-testid="Footer">
      <div className={styles.footerBody}>
        <NewsletterSubscribe />
        <SocialMediaLinks style={{ fontSize: "3em" }} />
      </div>
    </div>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;