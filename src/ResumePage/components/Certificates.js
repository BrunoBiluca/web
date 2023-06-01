import React from "react";
import styles from "./Certificates.module.css";
import Section from "./Section";

const Certificates = (props) => {
    let { certificates } = props;
    return (
        <Section title="Certificates">
            {certificates.map((c, i) => <Certificate key={i} certificate={c} />)}
        </Section>
    );
}

const Certificate = (props) => (
    <div className={styles.certificate}>
        <h4>{props.certificate.title}</h4>
        <p>{props.certificate.description}</p>
    </div>
)

export default Certificates;