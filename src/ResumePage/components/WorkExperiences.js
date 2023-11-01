import React from "react";
import Section from "./Section";
import styles from "./WorkExperiences.module.css";
import LocaleStringBuilder from "services/LocaleStringBuilder";

const WorkExperiences = (props) => {
  let { workExperiences } = props;

  let title = new LocaleStringBuilder("Work Experience")
    .ptbr("Experiência de trabalho")
    .en("Work Experience")
    .build()

  return (
    <Section title={title}>
      {workExperiences.map((we, i) =>
        <div key={i}>
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
}

const WorkExperienceTitle = (props) => {
  let { workExperience } = props
  let titlePreposition = LocaleStringBuilder
    .create()
    .ptbr("em")
    .en("at")
    .build()

  return (
    <h3>
      {workExperience.title.toString()}
      {` ${titlePreposition} `}
      <CompanyInfo
        company={workExperience.company}
        companyUrl={workExperience.companyUrl}
      />
    </h3>
  )
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