import React from "react";
import Section from "../Section/Section";
import LocaleStringBuilder from "services/LocaleStringBuilder";
import Locale from "services/Locale";

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
            <Locale str={l} />
          </p>
        )
      }
    </Section>
  );
}

export default Languages;