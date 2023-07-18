import ImageMarkdown from "../ImageMarkdown/ImageMarkdown";

export function Paragraph(pProps) {
  let { children, ...props } = pProps;
  if (children.length <= 2) {
    return <ImageMarkdown imageProps={pProps} />;
  }
  return <p {...props}>
    {children}
  </p>;
}
