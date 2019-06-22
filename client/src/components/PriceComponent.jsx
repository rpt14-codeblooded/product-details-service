import React from 'react';

const PriceComponent = (props) => {
  return (
    <div>
    {props.price.map((cost) =>
      <p key={cost._id} cost={cost}>{cost.price}</p>
      // create a Buy It component so you can have buttons in it
    )}
      <div>
        <button>Buy It Now</button>
        <button>Add to cart</button>
        <button>Add to watch list</button>
      </div>
    </div>
  )
};
export default PriceComponent;