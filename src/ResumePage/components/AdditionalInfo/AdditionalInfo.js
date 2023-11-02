import React from "react";
import styles from "./AdditionalInfo.module.css";

import { GrMail } from 'react-icons/gr';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import Section from "../Section/Section";

const AdditionalInfo = (props) => {
  let { main } = props;
  return (
    <Section>
      <div className={styles.additionalInfo}>
        <GrMail />
        <ButtonMailto
          label={main.email}
          mailto={`mailto:${main.email}`}
        />
      </div>
      <div className={styles.additionalInfo}>
        <BsTelephoneFill />
        <p>{main.phone}</p>
      </div>
      <div className={styles.additionalInfo}>
        <ImLocation2 />
        <a href={main.locationMaps} target="_blank" rel="noreferrer">
          {main.location}
        </a>
      </div>
      <div className={styles.additionalInfo}>
        <FaLinkedin />
        <a href={main.linkedin} target="_blank" rel="noreferrer">{main.linkedin}</a>
      </div>
      <div className={styles.additionalInfo}>
        <FaGithub />
        <a href={main.github} target="_blank" rel="noreferrer">{main.github}</a>
      </div>
      <div className={styles.additionalInfo}>
        <FaGlobe />
        <a href={main.website} target="_blank" rel="noreferrer">{main.website}</a>
      </div>
    </Section>
  );
}

const ButtonMailto = ({ mailto, label }) => (
  <span style={{ cursor: "pointer", textDecorationLine: "underline", color: "#666" }}
    to='#'
    onClick={(e) => {
      window.location = mailto;
      e.preventDefault();
    }}
  >
    {label}
  </span>
);

export default AdditionalInfo;