import React from "react";


export const CompanyInfo = (props) => {

  let { company, companyUrl } = props;

  if (companyUrl === null)
    return (<span>{company}</span>);

  return (
    <a
      href={companyUrl}
      style={{ color: "#666", fontStyle: "italic" }}
      target="_blank"
      rel="noreferrer"
    >
      {company}
    </a>
  );
};
