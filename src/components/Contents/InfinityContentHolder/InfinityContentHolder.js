import React from 'react';
import ContentCard from "../ContentCard/ContentCard";
import Content from "../model/Content.model";

const style = {
  display: "inline-block",
  columnCount: 3,
  marginRight: "-8px",
  marginLeft: "-8px"
}

const cardStyle = {
  display: "inline-block",
  marginTop: "0px",
  marginBottom: "20px",
  marginLeft: "8px",
  marginRight: "8px"
}

const InfinityContentHolder = ({ contents }) => {
  if (!contents || contents.length === 0)
    return

  return (
    <div style={style} data-testid="infinity-content-holder">
      {
        contents.map(c => <ContentCard content={c} style={cardStyle} />)
      }
    </div>
  );
}

InfinityContentHolder.propTypes = { contents: Array[Content] };

InfinityContentHolder.defaultProps = {};

export default InfinityContentHolder;