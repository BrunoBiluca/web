import React, { useState } from 'react';
import styles from './Category.module.css';

function Category(props) {
  let [hover, setHover] = useState(false);
  let category = props.category;

  let style = props.style;
  style = {
    ...style,
    color: category.color,
    borderColor: category.color,
  };

  if (hover) {
    style = {
      ...style,
      color: "#fff",
      background: category.color,
      borderColor: category.color
    }
  }

  return (
    <span
      key={category.key}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.category}
      style={style}
    >
      {category.name}
    </span>
  );
}

export default Category;