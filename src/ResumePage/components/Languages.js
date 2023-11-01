import React from "react";
import Section from "./Section";
import LocaleStringBuilder from "services/LocaleStringBuilder";

const Languages = (props) => {
  let { languages } = props;

  let title = new LocaleStringBuilder("Languages")
    .ptbr("Línguas")
    .en("Languages")
    .build()

  return (
    <Section title={title}>
      {
        languages.map(l =>
          <p style={{ fontWeight: "bold" }} key={l.toString()}>
            {l.toString()}
          </p>
        )
      }
    </Section>
  );
}

export default Languages;