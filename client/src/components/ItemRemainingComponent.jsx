import React from 'react';

const ItemRemainingComponent = (props) => {
  return (
    <div>
      {props.prodDeets.map((limit) =>
        <p key={limit._id} limit={limit}>{limit.limitRemaining}</p>
        )}
    </div>
  )
};

export default ItemRemainingComponent;