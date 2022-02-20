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
                <h3>{workExperience.title}</h3>
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

export default WorkExperiences;