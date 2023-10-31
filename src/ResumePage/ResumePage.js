import React from "react";
import styles from './ResumePage.module.css';

import HeaderInfo from "./components/HeaderInfo";
import AdditionalInfo from "./components/AdditionalInfo";
import Languages from "./components/Languages";
import WorkExperiences from "./components/WorkExperiences";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Skills from "./components/Skills";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import LocalizationHandler, { LocalizationDirection } from "components/LocalizationHandler/LocalizationHandler";
import ResumePageService from "./ResumePageService";
import bgImg from "./images/pattern.jpg";
import GamesInfo from "./components/GamesInfo";

const ResumePage = () => {

  let { main, workExperiences, certificates, languages, skills, educations, games }
    = ResumePageService.getContent();

  return (
    <div className={styles.resume} data-testid="resume-page">
      <div className={styles.resumeHelper}>
        <div className={styles.homeButton}>
          <Link to="/">{<FaHome />}</Link>
        </div>
        <LocalizationHandler direction={LocalizationDirection.vertical} />
      </div>
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
    </div>
  );
}

export default ResumePage;