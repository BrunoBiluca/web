import React, { useEffect, useState } from 'react';
import ContentCard from 'components/Contents/ContentCard/ContentCard';
import styles from './ArticlesCarrousel.module.css';
import FeaturesConfig from 'config/FeaturesConfig';

const ArticlesCarrousel = () => {
  const articlesProvider = FeaturesConfig.articles.provider();
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    articlesProvider
      .get()
      .then(res => setArticles(res));
  }, []);

  return (
    <div data-testid="articles-carrousel">
      <h2>Recent articles</h2>
      <div className={styles.articlesCarrousel}>
        {
          articles.map(g => {
            return (
              <ContentCard
                style={{
                  width: "75%",
                  height: "440px",
                  display: "inline-block",
                  margin: "0 1em"
                }}
                content={g}
              />
            );
          })
        }
      </div>
      <div>
        <ContentCard>
          <a href="/articles" className={styles.contentSeeMore}>
            See more...
          </a>
        </ContentCard>
      </div>
    </div>
  );
}

ArticlesCarrousel.propTypes = {};

ArticlesCarrousel.defaultProps = {};

export default ArticlesCarrousel;
