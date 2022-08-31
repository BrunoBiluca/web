import React from 'react';
import styles from './Category.module.css';

function Category(props) {
  let { category, style } = props;

  let categoryStyle = {
    "--bg-color": category.color,
    ...style
  }

  return (
    <span
      key={category.key}
      style={categoryStyle}
      className={styles.category}
    >
      {category.name}
    </span>
  );
}

export default Category;