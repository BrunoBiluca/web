import React from "react";
import Section from "./Section";
import SkillLabel from "./SkillLabel";
import LocaleStringBuilder from "services/LocaleStringBuilder";

const Skills = (props) => {
  let { skills } = props;

  let title = new LocaleStringBuilder("Skills")
    .ptbr("Habilidades")
    .en("Skills")
    .build()

  return (
    <Section title={title}>
      {
        skills.map((s, i) =>
          <SkillLabel key={i} skill={s.label} />
        )}
    </Section>
  );
}

export default Skills;