import React from 'react';
import styles from './SocialMediaLinks.module.css';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const SocialMediaLinks = (props) => {

  return (
    <div 
      style={{...props.style}} 
      className={styles.socialMediaLinks}
    >
      <a
        href="https://github.com/BrunoBiluca"
        target="_blank"
        rel="noreferrer external"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/bbdacosta/"
        target="_blank"
        rel="noreferrer external">
        <FaLinkedin />
      </a>
      <a
        href="https://discordapp.com/users/brunobiluca#4054"
        target="_blank"
        rel="noreferrer external">
        <FaDiscord />
      </a>
    </div>
  );
}

SocialMediaLinks.propTypes = {};

SocialMediaLinks.defaultProps = {};

export default SocialMediaLinks;
