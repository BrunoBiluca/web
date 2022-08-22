import React from 'react';
import ContentCard from "../ContentCard/ContentCard";
import Content from "../model/Content";

const InfinityContentHolder = (props) => {
  const { items } = props;
  if (!items || items.length === 0)
    return

  return (
    <div data-testid="infinity-content-holder">
      {items.map(i => <ContentCard content={i} />)}
    </div>
  );
}

InfinityContentHolder.propTypes = { items: Array[Content] };

InfinityContentHolder.defaultProps = {};

export default InfinityContentHolder;