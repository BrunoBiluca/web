import React from "react";
import styles from "./Certificates.module.css";
import Locale from "services/Locale";

export const Certificate = ({ certificate }) => (
  <div className={styles.certificate}>
    <div className={styles.header}>
      <a
        href={certificate.url}
        className={styles.title}
        target="_blank"
        rel="noreferrer"
      >
        <h4>{certificate.title}</h4>
      </a>
      <div className={styles.headerSide}>
        <p>{certificate.emission_date}</p>
        <p>{certificate.platform}</p>
      </div>
    </div>

    <p className={styles.description}>
      <Locale str={certificate.description} />
    </p>
  </div>
);
