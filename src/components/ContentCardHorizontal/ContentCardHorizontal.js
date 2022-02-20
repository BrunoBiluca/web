import React from 'react';
import styles from './ContentCardHorizontal.module.css';
import placeholderImg from '../../images/placeholder.png';
import Category from '../Category/Category';
import { useHistory } from 'react-router';

const ContentCardHorizontal = (props) => {
  let history = useHistory();

  var content = props.content;
  var limitContentSummary = props.limitContentSummary ?? true;

  if (!content)
    return (
      <div
        style={{ ...props.style }}
        className={`${styles.contentCardHorizontal} ${styles.empty}`}
        data-testid="ContentCard"
      >
        {props.children}
      </div>
    );

  var featuredImage = content.featuredImage.thumbnail
    ? content.featuredImage.path
    : placeholderImg;

  function redirect() {
    history.push(content.link);
  }

  return (
    <div
      style={{ ...props.style }}
      className={styles.contentCardHorizontal}
      data-testid="ContentCard"
      onClick={redirect}
    >
      <div style={{width: props.imageWidth}} className={styles.cardHeader}>
        <img src={featuredImage} alt="placeholder" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTop}>
          <div className={styles.cardDate}>
            {content.publishedAt}
          </div>
        </div>
        <div className={styles.cardContentBody}>
          <h3>{content.title}</h3>
          <p>
            {
              limitContentSummary && content.contentSummary.length > 80
                ? content.contentSummary.substring(0, 80) + "..."
                : content.contentSummary
            }
          </p>
        </div>
        <div className={styles.cardContentFooter}>
          <div className={styles.cardCategories}>
            {
              content
                .categories
                .slice(0, 2)
                .map(c =>
                  <Category key={c.key} style={{ fontSize: "0.6em" }} category={c} />
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

ContentCardHorizontal.propTypes = {};

ContentCardHorizontal.defaultProps = {};

export default ContentCardHorizontal;
