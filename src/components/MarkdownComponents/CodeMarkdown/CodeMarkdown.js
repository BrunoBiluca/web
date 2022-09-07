import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'


function CodeMarkdown(codeProps) {
  let { node, inline, className, children, ...props } = codeProps.codeProps;
  const match = /language-(\w+)/.exec(className || '')

  if (!inline && match) {
    return <SyntaxHighlighter
      children={String(children).replace(/\n$/, '')}
      style={dracula}
      language={match[1]}
      PreTag="div"
      {...props}
    />;
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

export default CodeMarkdown;