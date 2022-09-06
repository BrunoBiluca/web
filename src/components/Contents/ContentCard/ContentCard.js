import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import styles from './ContentCard.module.css';
import Category from '../../Category/Category';
import Image from 'components/Image/Image';
import Content from '../model/Content.model';


const ContentCard = ({style, content, onClick, children}) => {
  let history = useHistory();

  if (!content)
    return (
      <div
        style={{ ...style }}
        className={`${styles.contentCard} ${styles.empty}`}
        onClick={onClick}
        data-testid="ContentCard"
      >
        {children}
      </div>
    );

  function redirect() {
    history.push(content.link);
  }

  return (
    <div
      style={{
        ...content.contentColor.getStyle(),
        ...style
      }}
      className={styles.contentCard}
      data-testid="ContentCard"
      onClick={redirect}
    >
      <div className={styles.cardHeader}>
        <Image src={content.thumbnail} alt="" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTop}>
          <div className={styles.cardCategories}>
            {
              content
                .categories
                .slice(0, 2)
                .map(c => (
                  <Category
                    key={c.key}
                    style={{ fontSize: "0.6em" }}
                    category={c}
                  />
                ))
            }
          </div>
          <div className={styles.cardDate}>
            {content.publishedAt}
          </div>
        </div>
        <div className={styles.cardContentBody}>
          <h3>{content.title}</h3>
          <p>{content.contentSummary}</p>
        </div>
      </div>
    </div>
  );

}

ContentCard.propTypes = { content: PropTypes.instanceOf(Content) };

ContentCard.defaultProps = {};

export default ContentCard;
