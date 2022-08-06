import React, { useEffect, useState } from 'react';
import styles from './ArticlesGrid.module.css';
import ContentCard from 'components/ContentCard/ContentCard';
import ContentCardHorizontal from 'components/ContentCardHorizontal/ContentCardHorizontal';
import FeaturesConfig from 'config/FeaturesConfig';

const ArticlesGrid = () => {
  const articlesProvider = FeaturesConfig.articles.provider();
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    articlesProvider
      .get()
      .then(res => setArticles(res));
  }, []);

  return (
    <div data-testid="articles-grid">
      <h2>Recent articles</h2>

      <div className={styles.contentGrid}>
        <div className={styles.contentHolder}>
          {
            articles[0] &&
            <ContentCard content={articles[0]} />
          }
        </div>
        <div className={styles.contentHolder}>
          {
            articles[1] &&
            <ContentCard content={articles[1]} />
          }
        </div>
        <div className={`${styles.contentHolder} ${styles.contentHolderVertical}`}>
          {
            articles[2] &&
            <div className={styles.flex1} style={{ marginBottom: "1em" }}>
              <ContentCardHorizontal content={articles[2]} />
            </div>
          }
          {
            articles[3] &&
            <div className={styles.flex1}>
              <ContentCardHorizontal content={articles[3]} />
            </div>
          }
        </div>
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
};

ArticlesGrid.propTypes = {};

ArticlesGrid.defaultProps = {};

export default ArticlesGrid;
