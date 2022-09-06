import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import Category from "components/Category/Category";
import remarkGfm from 'remark-gfm'

import './ArticlePage.css';
import CodeMarkdown from "components/MarkdownComponents/CodeMarkdown/CodeMarkdown";
import ImageMarkdown from "components/MarkdownComponents/ImageMarkdown/ImageMarkdown";
import { useParams } from "react-router";

import GlobalConfig from "config/GlobalConfig";
import Image from "components/Image/Image";
import Article from "components/Articles/model/Article.model";

function ArticlePage() {
  let { articleSlug } = useParams();
  const [article, setArticle] = useState(new Article({ slug: articleSlug }));

  useEffect(() => {
    const articlesProvider = GlobalConfig.articles.provider()
    articlesProvider
      .getBySlug(articleSlug)
      .then(res => setArticle(res));
  }, [articleSlug]);

  function imagePath(image) {
    return `${article.imageBasePath}/${image}`
  }

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

      <Image
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
      </div>
    </div>
  );
}

export default ArticlePage;
