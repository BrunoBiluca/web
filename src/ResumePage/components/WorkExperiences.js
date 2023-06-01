import React from "react";
import Section from "./Section";
import stylesResumePage from "../ResumePage.module.css";
import styles from "./WorkExperiences.module.css";

const WorkExperiences = (props) => {
  let { workExperiences } = props;
  return (
    <Section title="Work Experience">
      {workExperiences.map((we, i) =>
        <div className={i > 2 ? stylesResumePage.noPrint : ""} key={i}>
          <WorkExperience
            workExperience={we}
          />
        </div>
      )}
    </Section>
  );
}

const WorkExperience = (props) => {
  const workExperience = props.workExperience;
  return (
    <div className={styles.workExperience}>
      <div className={styles.workExperienceTitle}>
        <h3>
          {workExperience.title}
          {" "}
          <CompanyInfo
            company={workExperience.company}
            companyUrl={workExperience.companyUrl}
          />
        </h3>
        <div>
          <p>{workExperience.period}</p>
          <p>{workExperience.location}</p>
        </div>
      </div>
      <div className={styles.workExperienceContent}>
        {workExperience.description}
      </div>
    </div>
  );
}

const CompanyInfo = (props) => {

  let { company, companyUrl } = props;

  if (companyUrl === null)
    return (<span>{company}</span>)

  return (
    <a
      href={companyUrl}
      style={{ color: "#666", fontStyle: "italic" }}
      target="_blank"
      rel="noreferrer"
    >
      {company}
    </a>
  )
}

export default WorkExperiences;