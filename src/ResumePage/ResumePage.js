import React from "react";
import styles from './ResumePage.module.css';

import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import LocalizationHandler, { LocalizationDirection } from "components/LocalizationHandler/LocalizationHandler";
import ResumeView from "./ResumeView";

export default function ResumePage() {
  return (
    <div className={styles.resume} data-testid="resume-page">
      <div className={styles.resumeHelper}>
        <div className={styles.homeButton}>
          <Link to="/">{<FaHome />}</Link>
        </div>
        <LocalizationHandler direction={LocalizationDirection.vertical} height={"auto"} />
      </div>
      <ResumeView />
    </div>
  );
};
