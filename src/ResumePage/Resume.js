import React from "react";
import styles from './ResumePage.module.css';
import HeaderInfo from "./components/HeaderInfo";
import AdditionalInfo from "./components/AdditionalInfo";
import Languages from "./components/Languages";
import WorkExperiences from "./components/WorkExperiences";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Skills from "./components/Skills";
import bgImg from "./images/square_pattern.jpg";
import GamesInfo from "./components/GamesInfo";
import ResumePageService from "./ResumePageService";

export default function Resume() {
  let { main, workExperiences, certificates, languages, skills, educations, games } = ResumePageService.getContent();

  return (
    <div className={styles.page}>
      <img src={bgImg} className={styles.bgImg} alt="background" />
      <div style={{ position: "relative", zIndex: 1, padding: "0.8cm" }}>
        <HeaderInfo main={main} />
        <div className={styles.contentBody}>
          <div className={styles.sideContent}>
            <AdditionalInfo main={main} />
            <Languages languages={languages} />
            <Skills skills={skills} />
            {games && <GamesInfo games={games} />}
          </div>
          <div className={styles.content}>
            <WorkExperiences workExperiences={workExperiences} />
            <Certificates certificates={certificates} />
            <Education educations={educations} />
          </div>
        </div>
      </div>
    </div>
  )
}