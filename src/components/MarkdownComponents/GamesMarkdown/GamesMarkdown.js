import { storagePath } from "helpers/RemotePath";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ImageMarkdown from "../ImageMarkdown/ImageMarkdown";

const GamesMarkdown = ({ text }) => {
  return (
    <ReactMarkdown
      children={text}
      remarkPlugins={[remarkGfm]}
      components={{
        img({ node, className }) {
          return (
            <img className={className}
              src={storagePath(node.properties.src)}
              alt={node.properties.alt}
            />
          );
        },
        p(pProps) {
          return (<ImageMarkdown imageProps={pProps} />);
        }
      }}
    />
  )
}

export default GamesMarkdown;