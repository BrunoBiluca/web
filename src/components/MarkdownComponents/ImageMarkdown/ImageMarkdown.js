import React from 'react';
import styles from './ImageMarkdown.module.css';

function ImageMarkdown(props) {
  let { node, className, children, ...otherProps } = props.imageProps;

  let elements = children;

  let lastChild = node.children.at(-1);
  if (lastChild && lastChild.type === "text") {
    let classNameAttr = lastChild
      .value
      .trim();

    if (
      classNameAttr.startsWith("{:")
      && classNameAttr.endsWith("}")
    ) {
      const match = classNameAttr.match(/\b(\w|')+\b/gim)

      let classes = match.map(element => {
        if (element === "markdowmImage")
          return styles.markdownImage;
        return element;
      });

      className = ' '.concat(classes).trim();
      elements = children.slice(0, children.length - 1);
    }
  }

  return <p className={className} {...otherProps}>
    {elements}
  </p>
}

export default ImageMarkdown;