import React from "react";
import Section from "./Section";
import styles from "./WorkExperiences.module.css";

const WorkExperiences = (props) => {
    let { workExperiences } = props;
    return (
        <Section title="Work Experience">
            {workExperiences.map(
                (we, i) => <WorkExperience key={i} workExperience={we} />
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
            target="_blank">
            {company}
        </a>
    )
}

export default WorkExperiences;