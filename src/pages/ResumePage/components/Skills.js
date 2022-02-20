import React from "react";
import Section from "./Section";
import SkillLabel from "./SkillLabel";

const Skills = (props) => {
    let { skills } = props;
    return (
        <Section title="Skills">
            {skills.map((s, i) => <SkillLabel key={i} skill={s.label} />)}
        </Section>
    );
}

export default Skills;