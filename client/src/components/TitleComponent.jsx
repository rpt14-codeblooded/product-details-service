import React from 'react';

const TitleComponent = (props) => {
  return (
    <div>
    {props.prodDeets.map((header) =>
      <h1 key={header._id} header={header}>{header.productTitle}</h1>
    )}
    </div>
  )
};

export default TitleComponent;