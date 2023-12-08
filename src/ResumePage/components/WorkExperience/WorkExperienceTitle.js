import React from "react";
import { CompanyInfo } from "./CompanyInfo";

export const WorkExperienceTitle = (props) => {
  let { workExperience } = props;

  return (
    <h3>
      {workExperience.title.toString()}
      <CompanyInfo
        company={workExperience.company}
        companyUrl={workExperience.companyUrl}
      />
    </h3>
  );
};
