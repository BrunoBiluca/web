import React from "react";
import Section from "./Section";

const Languages = (props) => {
    let { languages } = props;

    return (
        <Section title="Languages">
            {languages.map(l => <p style={{ fontWeight: "bold" }} key={l}>{l}</p>)}
        </Section>
    );
}

export default Languages;