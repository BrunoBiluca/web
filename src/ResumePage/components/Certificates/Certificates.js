import React from "react";
import Section from "../Section/Section";
import { loc } from "services/LocaleStringBuilder";
import { Certificate } from "./Certificate";

const Certificates = (props) => {
  let { certificates } = props;

  let title = loc("Principais certificações", "Main certificates")

  return (
    <Section title={title}>
      {certificates.map((c, i) => <Certificate key={i} certificate={c} />)}
    </Section>
  );
}

export default Certificates;