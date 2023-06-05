import React from 'react';
import styles from './SocialMediaLinks.module.css';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const SocialMediaLinks = (props) => {

  return (
    <div
      style={{ ...props.style }}
      className={styles.socialMediaLinks}
      data-testid="social-media-links"
    >
      <a
        href="https://github.com/BrunoBiluca"
        target="_blank"
        rel="noreferrer external"
        className={styles.glow}
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/bbdacosta/"
        target="_blank"
        rel="noreferrer external"
        className={styles.glow}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://discordapp.com/users/brunobiluca#4054"
        target="_blank"
        rel="noreferrer external"
        className={styles.glow}
      >
        <FaDiscord />
      </a>
    </div>
  );
}

SocialMediaLinks.propTypes = {};

SocialMediaLinks.defaultProps = {};

export default SocialMediaLinks;
