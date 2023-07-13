import Image from "components/Image/Image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeMarkdown from "../CodeMarkdown/CodeMarkdown";
import ImageMarkdown from "../ImageMarkdown/ImageMarkdown";
import PropTypes from 'prop-types';
import rehypeRaw from 'rehype-raw'
import { PenseComigo } from "./PenseComigo";

function CodeBlock(codeProps) {
  return <CodeMarkdown codeProps={codeProps} />
}

function ImageMD({ node, className, imageBasePath }) {
  function imagePath(image) {
    return `${imageBasePath}/${image}`
  }

  return (
    <Image className={className}
      src={imagePath(node.properties.src)}
      alt={node.properties.alt}
    />
  );
}

function Paragraph(pProps) {
  let { children, ...props } = pProps;
  if (children.length <= 2) {
    return <ImageMarkdown imageProps={pProps} />
  }
  return <p {...props}>
    {children}
  </p>
}

const ArticleMarkdown = ({ content, imageBasePath }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        "code": CodeBlock,
        "img": function ({ node, className }) { return ImageMD({ node, className, imageBasePath }) },
        "p": Paragraph,
        "pense-comigo": PenseComigo
      }}
    />
  )
}

ArticleMarkdown.propTypes = {
  content: PropTypes.string,
  imageBasePath: PropTypes.string
}

export default ArticleMarkdown;