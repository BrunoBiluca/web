import React from "react";
import Section from "../Section/Section";
import styles from "./Education.module.css";
import { loc } from "services/LocaleStringBuilder";
import Locale from "services/Locale";

const Education = (props) => {
  let { educations } = props;
  let title = loc("Educação", "Education")

  return (
    <Section title={title}>
      <div className={styles.workExperience}>
        <div className={styles.workExperienceTitle}>
          <h3><Locale str={educations[0].title} /></h3>
          <div>
            <p>{educations[0].period}</p>
            <p>{educations[0].location}</p>
          </div>
        </div>
        {
          educations[0].activities
          &&
          <div className={styles.workExperienceContent}>
            <ul>
              {
                educations[0]
                  .activities
                  .map(v =>
                    <li key={v.toString()}><Locale str={v} /></li>
                  )
              }
            </ul>
          </div>
        }
      </div>
    </Section>
  );
}

export default Education;