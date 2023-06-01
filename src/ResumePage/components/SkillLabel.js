import React, { useState } from "react";
import styles from "./SkillLabel.module.css";

const SkillLabel = (props) => {
    let [currState, setCurrState] = useState(styles.skillLabel);
    return (
        <span
            onMouseEnter={() => setCurrState(styles.skillLabelHover)}
            onMouseLeave={() => setCurrState(styles.skillLabel)} 
            className={currState}
        >
            {props.skill}
        </span>
    )
}

export default SkillLabel;