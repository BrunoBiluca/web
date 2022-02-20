import React from "react";
import Section from "./Section";
import styles from "./Education.module.css";

const Education = (props) => {
    let { educations } = props;
    return (
        <Section title="Education">
            <div className={styles.workExperience}>
                <div className={styles.workExperienceTitle}>
                    <h3>{educations[0].title}</h3>
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
                            {educations[0].activities.map(v => <li key={v}>{v}</li>)}
                        </ul>
                    </div>
                }
            </div>
        </Section>
    );
}

export default Education;