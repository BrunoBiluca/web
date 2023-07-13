import ContentBlock from "AppV2/Components/ContentBlock/ContentBlock";
import PenseComigoStyle from "./PenseComigo.module.css";
import { useState } from "react";

export function PenseComigo({ children }) {
  const [isOpen, setOpen] = useState(true);

  var question = children.filter(elem => elem.type === "pergunta")[0].props.children[0].trim();
  var discussion = children.filter(elem => elem.type === "discussao")[0].props.children;

  return <>
    <ContentBlock className={PenseComigoStyle.penseComigo}>
      <h3 onClick={() => setOpen(!isOpen)}>
        <span>🐶 Pense comigo: </span>
        <span style={{ fontWeight: "normal" }}>{question}</span>
      </h3>
      <div hidden={!isOpen}>
        {discussion}
      </div>
    </ContentBlock>
  </>;
}
