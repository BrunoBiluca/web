import React from "react";
import styles from './ResumePage.module.css';

import HeaderInfo from "./components/HeaderInfo";
import AdditionalInfo from "./components/AdditionalInfo";
import Languages from "./components/Languages";
import WorkExperiences from "./components/WorkExperiences";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Skills from "./components/Skills";

import { main, workExperiences, certificates, languages, educations, skills } from "./ResumeData.en";

const ResumePage = () => {
    return (
        <div className={styles.resume}>
            <div data-testid="ResumePage" className={styles.page}>
                <HeaderInfo main={main} />
                <div className={styles.contentBody}>
                    <div className={styles.sideContent}>
                        <AdditionalInfo main={main} />
                        <Languages languages={languages} />
                        <Skills skills={skills} />
                    </div>
                    <div className={styles.content}>
                        <WorkExperiences workExperiences={workExperiences} />
                        <Certificates certificates={certificates} />
                        <Education educations={educations} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumePage;