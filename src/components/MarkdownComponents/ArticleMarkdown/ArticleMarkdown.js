import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PropTypes from 'prop-types';
import rehypeRaw from 'rehype-raw'
import { PenseComigo } from "./PenseComigo";
import { Paragraph } from "./Paragraph";
import { ImageMD } from "./ImageMD";
import { CodeBlock } from "./CodeBlock";
import Blockquote from "./Blockquote";

const ArticleMarkdown = ({ content, imageBasePath }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        "code": CodeBlock,
        "img": ({ node, className }) => ImageMD({ node, className, imageBasePath }),
        "p": Paragraph,
        "pense-comigo": PenseComigo,
        "blockquote": Blockquote
      }}
    />
  )
}

ArticleMarkdown.propTypes = {
  content: PropTypes.string,
  imageBasePath: PropTypes.string
}

export default ArticleMarkdown;