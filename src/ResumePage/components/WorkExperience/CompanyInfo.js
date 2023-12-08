import { isNullOrEmpty } from "helpers/StringExtensions";
import React from "react";
import { loc } from "services/LocaleStringBuilder";


export const CompanyInfo = (props) => {

  let { company, companyUrl } = props;

  if (isNullOrEmpty(company))
    return <></>

  let titlePreposition = loc("em", "at")

  if (companyUrl === null)
    return (
      <>
        {` ${titlePreposition} `}
        <span>{company}</span>
      </>
    );

  return (
    <>
      {` ${titlePreposition} `}
      <a
        href={companyUrl}
        style={{ color: "#666", fontStyle: "italic" }}
        target="_blank"
        rel="noreferrer"
      >
        {company}
      </a>
    </>
  );
};
