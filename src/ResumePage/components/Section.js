import React from "react";
import styles from './Section.module.css';

const Section = (props) => (
  <div className={styles.section}>
    {
      props.title
      &&
      <h2>{props.title.toString().toUpperCase()}</h2>
    }
    <div className={styles.sectionContent}>
      {props.children}
    </div>
  </div>
)

export default Section;