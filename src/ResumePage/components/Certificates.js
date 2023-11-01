import React from "react";
import styles from "./Certificates.module.css";
import Section from "./Section";
import { loc } from "services/LocaleStringBuilder";
import Locale from "services/Locale";

const Certificates = (props) => {
  let { certificates } = props;

  let title = loc("Certificados", "Certificates")

  return (
    <Section title={title}>
      {certificates.map((c, i) => <Certificate key={i} certificate={c} />)}
    </Section>
  );
}

const Certificate = (props) => (
  <div className={styles.certificate}>
    <h4>
      <Locale str={props.certificate.title} />
    </h4>
    <p>
      <Locale str={props.certificate.description} />
    </p>
  </div>
)

export default Certificates;