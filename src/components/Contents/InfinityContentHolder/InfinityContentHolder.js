import React from 'react';
import ContentCard from "../ContentCard/ContentCard";
import Content from "../model/Content.model";

const style = {
  display: "inline-block",
  columnCount: 3
}

const cardStyle = {
  marginTop: "0px",
  marginBottom: "20px",
  marginLeft: "12px",
  marginRight: "12px"
}

const InfinityContentHolder = ({ contents }) => {
  if (!contents || contents.length === 0)
    return

  return (
    <div style={style} data-testid="infinity-content-holder">
      {
        contents.map(i => <ContentCard content={i} style={cardStyle} />)
      }
    </div>
  );
}

InfinityContentHolder.propTypes = { contents: Array[Content] };

InfinityContentHolder.defaultProps = {};

export default InfinityContentHolder;