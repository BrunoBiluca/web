import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import Category from "../../components/Category/Category";
import remarkGfm from 'remark-gfm'

import './ArticlePage.css';
import CodeMarkdown from "../../components/CodeMarkdown/CodeMarkdown";
import ImageMarkdown from "../../components/ImageMarkdown/ImageMarkdown";
import ArticlesRequest from "../../services/ArticlesRequest";
import { useParams } from "react-router";

import placeHolder from '../../images/placeholder.png';
import { storagePath } from "../../helpers/RemotePath";

function ArticlePage() {
  let { articleSlug } = useParams();
  const [article, setArticle] = useState({
    author: "",
    categories: [],
    content: "",
    featuredImage: {
      path: placeHolder,
      description: "description placeholder"
    },
    publishedAt: "",
    title: ""
  });

  useEffect(() => {
    new ArticlesRequest(true)
      .getBySlug(articleSlug)
      .then(res => setArticle(res));
  }, [articleSlug]);

  return (
    <div className="article">

      <div className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-subtitle">
          <div className="article-info">
            <span>{article.author}</span>
            <span>
              <strong>Posted on:</strong> {article.publishedAt}
            </span>          
          </div>

          <div className="article-categories">
            {
              article
                .categories
                .map(c => <Category key={c.key} category={c} />)
            }
          </div>
        </div>
      </div>

      <img
        className="article-featured-image"
        src={article.featuredImage.path}
        alt={article.featuredImage.description}
      />

      <div className="article-content">
        <ReactMarkdown
          children={article.content}
          remarkPlugins={[remarkGfm]}
          components={{
            code(codeProps) {
              return <CodeMarkdown codeProps={codeProps} />
            },
            img({ node, className, children, ...props }) {
              return (
                <img className={className}
                  src={storagePath(node.properties.src)}
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
      </div>
    </div>
  );
}

export default ArticlePage;
