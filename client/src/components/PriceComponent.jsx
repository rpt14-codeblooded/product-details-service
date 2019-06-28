import React from 'react';

const PriceComponent = (props) => {
  return (
    <div>
      <p>Price: <span>US ${props.prodDeets.price}</span></p>
      <div>
        <button>Buy It Now</button>
        <button>Add to cart</button>
        <button>Add to watch list</button>
      </div>
    </div>
  )
};
export default PriceComponent;