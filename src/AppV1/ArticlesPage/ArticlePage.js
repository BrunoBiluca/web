import React, { useEffect, useState } from "react";
import Category from "components/Category/Category";

import styles from './ArticlePage.module.css';
import { useParams } from "react-router";

import Image from "components/Image/Image";
import Article from "components/Articles/model/Article.model";
import ArticleMarkdown from "components/MarkdownComponents/ArticleMarkdown/ArticleMarkdown";
import ContentColor from "components/Contents/ContentColor.model";
import ArticlesLocalProvider from "components/Articles/services/local/ArticlesLocalProvider";

function ArticlePage() {
  let { articleSlug } = useParams();
  const [article, setArticle] = useState(new Article({ slug: articleSlug }));
  const articleColor = new ContentColor("beige", "#dddd99", "#c6c61e")

  useEffect(() => {
    const articlesProvider = new ArticlesLocalProvider()
    articlesProvider
      .getBySlug(articleSlug)
      .then(res => {
        setArticle(res)
      });
  }, [articleSlug]);

  return (
    <div
      style={{ ...articleColor.getStyle() }}
      className={styles.article}
    >
      <div className={styles.header}>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.subtitle}>
          <div className={styles.info}>
            <span>{article.author}</span>
            <span>
              <strong>Posted on:</strong> {article.publishedAt}
            </span>
          </div>

          <div className={styles.categories}>
            {
              article
                .categories
                .map(c => <Category key={c.key} category={c} />)
            }
          </div>
        </div>
      </div>
      <div className={styles.featuredImageHolder}>
        <Image
          className={styles.featuredImage}
          src={article.featuredImage.path}
          alt={article.featuredImage.description}
        />
      </div>

      <div className={styles.content}>
        <ArticleMarkdown 
          content={article.content} 
          imageBasePath={article.imageBasePath} 
        />
      </div>
    </div>
  );
}

export default ArticlePage;
