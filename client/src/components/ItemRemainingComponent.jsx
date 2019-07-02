import React from 'react';

const ItemRemainingComponent = (props) => {
  return (
    <div>
        <p>{props.prodDeets.limitRemaining}</p>
    </div>
  )
};

export default ItemRemainingComponent;