import CodeMarkdown from "../CodeMarkdown/CodeMarkdown";

export function CodeBlock(props) {
  if (props.inline === "true") {
    return CodeInline(props)
  }

  if (isProgrammingLanguage(props.className, "mermaid")) {
    console.log(props)
    return CodeMermaid(props)
  }

  return <CodeMarkdown codeProps={props} />;
}


function CodeInline({ children, ...props }) {
  return <code
    style={{
      background: "rgb(40, 42, 54)",
      color: "rgb(241, 250, 140)",
      padding: "2px 8px",
      borderRadius: "5px"
    }}
    {...props}
  >
    {children}
  </code>
}

function CodeMermaid({className, children}) {
  return <code className={className}>{children}</code>
}

export function isProgrammingLanguage(className, language) {
  return className === `language-${language}`
}