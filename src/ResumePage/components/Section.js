import React from "react";
import styles from './Section.module.css';
import Locale from "services/Locale";

const Section = (props) => (
  <div className={styles.section}>
    {
      props.title
      &&
      <h2>
        <Locale str={props.title} upper/>
      </h2>
    }
    <div className={styles.sectionContent}>
      {props.children}
    </div>
  </div>
)

export default Section;