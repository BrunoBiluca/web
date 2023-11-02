import React from "react";
import styles from "./Certificates.module.css";
import Locale from "services/Locale";

export const Certificate = (props) => (
  <div className={styles.certificate}>
    <h4>
      <Locale str={props.certificate.title} />
    </h4>
    <p>
      <Locale str={props.certificate.description} />
    </p>
  </div>
);
