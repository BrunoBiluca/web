import React from 'react';
import styles from './Footer.module.css';
import NewsLetterInput from '../NewsLetterInput/NewsLetterInput';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

const Footer = () => {
  return (
    <div className={styles.footer} data-testid="Footer">
      <div className={styles.footerBody}>
        <div className={styles.newsLetter}>
          <p>
            Hi, sign up for my newsletter to get game development and technology related content.
          </p>
          <NewsLetterInput />
        </div>
        <SocialMediaLinks style={{fontSize: "3em"}} />
      </div>
    </div>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
