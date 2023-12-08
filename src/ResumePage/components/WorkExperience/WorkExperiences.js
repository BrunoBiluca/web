import React from "react";
import Section from "../Section/Section";
import LocaleStringBuilder from "services/LocaleStringBuilder";
import { WorkExperience } from "./WorkExperience";

const WorkExperiences = (props) => {
  let { workExperiences } = props;

  let title = new LocaleStringBuilder("Work Experience")
    .ptbr("Experiências mais relevantes")
    .en("Most relevant experiences")
    .build()

  return (
    <Section title={title}>
      {workExperiences.map((we, i) =>
        <div key={i}>
          <WorkExperience
            workExperience={we}
          />
        </div>
      )}
    </Section>
  );
}

export default WorkExperiences;