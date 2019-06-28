import React from 'react';

const TitleComponent = (props) => {
  return (
    <div>
      <h1>{props.prodDeets.productTitle}</h1>
    </div>
  )
};

export default TitleComponent;