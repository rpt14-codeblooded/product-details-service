import React from 'react';

const PriceComponent = (props) => {
  return (
    <div>
      <p>{props.prodDeets.price}</p>
      <div>
        <button>Buy It Now</button>
        <button>Add to cart</button>
        <button>Add to watch list</button>
      </div>
    </div>
  )
};
export default PriceComponent;