import React from "react";
import styles from "./WorkExperiences.module.css";
import { WorkExperienceTitle } from "./WorkExperienceTitle";

export const WorkExperience = (props) => {
  const workExperience = props.workExperience;

  return (
    <div className={styles.workExperience}>
      <div className={styles.workExperienceTitle}>
        <WorkExperienceTitle workExperience={workExperience} />
        <div>
          <p>{workExperience.period}</p>
          <p>{workExperience.location}</p>
        </div>
      </div>
      <div className={styles.workExperienceContent}>
        {workExperience.description.toString()}
      </div>
    </div>
  );
};
