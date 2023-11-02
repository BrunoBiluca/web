import React from "react";
import Section from "../Section/Section";
import SkillLabel from "./SkillLabel";
import { loc } from "services/LocaleStringBuilder";

const Skills = (props) => {
  let { skills } = props;

  let title = loc("Habilidades", "Skills")

  return (
    <Section title={title}>
      {
        skills.map((s, i) =>
          <SkillLabel key={i} skill={s.label} />
        )
      }
    </Section>
  );
}

export default Skills;