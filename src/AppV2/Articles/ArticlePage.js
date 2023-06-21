import ContentBlock from "AppV2/Components/ContentBlock/ContentBlock";
import Article from "components/Articles/model/Article.model";
import ArticlesLocalProvider from "components/Articles/services/local/ArticlesLocalProvider";
import ArticleMarkdown from "components/MarkdownComponents/ArticleMarkdown/ArticleMarkdown";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import style from "./ArticlePage.module.css"
import ProfileImage from "AppV2/Home/ProfileImage";

export default function ArticlePage() {

  let { articleSlug } = useParams();
  const [article, setArticle] = useState(new Article({ slug: articleSlug }));

  useEffect(() => {
    const articlesProvider = new ArticlesLocalProvider()
    articlesProvider
      .getBySlug(articleSlug)
      .then(res => {
        setArticle(res)
      });
  }, [articleSlug]);

  return <>
    <ContentBlock>
      <div className={style.articleHeader}>
        <h1 style={{ textAlign: "center" }}>{article.title}</h1>
        <div className={style.subHeader}>
          <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
            <ProfileImage size={48} />
            <span>BrunoBiluca</span>
          </div>
          <div>Publicado em {article.publishedAt}</div>
        </div>
      </div>
    </ContentBlock>
    <div className={style.article}>
      <ArticleMarkdown
        content={article.content}
        imageBasePath={article.imageBasePath}
      />
    </div>
    <ContentBlock style={{ textAlign: "center" }}>
      Até a próxima e tenha um bom dia 🐶.
    </ContentBlock>
  </>;
}