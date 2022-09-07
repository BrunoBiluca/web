import Image from "components/Image/Image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeMarkdown from "../CodeMarkdown/CodeMarkdown";
import ImageMarkdown from "../ImageMarkdown/ImageMarkdown";
import PropTypes from 'prop-types';

const ArticleMarkdown = ({ content, imageBasePath }) => {

  function imagePath(image) {
    return `${imageBasePath}/${image}`
  }

  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      components={{
        code(codeProps) {
          return <CodeMarkdown codeProps={codeProps} />
        },
        img({ node, className }) {
          return (

            <Image className={className}
              src={imagePath(node.properties.src)}
              alt={node.properties.alt}
            />
          );
        },
        p(pProps) {
          let { children, ...props } = pProps;
          if (children.length <= 2) {
            return <ImageMarkdown imageProps={pProps} />
          }
          return <p {...props}>
            {children}
          </p>
        }
      }}
    />
  )
}

ArticleMarkdown.propTypes = {
  content: PropTypes.string,
  imageBasePath: PropTypes.string
}

export default ArticleMarkdown;