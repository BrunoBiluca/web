import React from "react";
import LocaleStringBuilder from "services/LocaleStringBuilder";
import { CompanyInfo } from "./CompanyInfo";

export const WorkExperienceTitle = (props) => {
  let { workExperience } = props;
  let titlePreposition = LocaleStringBuilder
    .create()
    .ptbr("em")
    .en("at")
    .build();

  return (
    <h3>
      {workExperience.title.toString()}
      {` ${titlePreposition} `}
      <CompanyInfo
        company={workExperience.company}
        companyUrl={workExperience.companyUrl} />
    </h3>
  );
};
