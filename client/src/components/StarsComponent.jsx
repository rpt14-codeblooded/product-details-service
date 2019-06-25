import React from 'react';

const StarsComponent = (props) => {
  return (
    <div>
    {props.prodDeets.map((num) =>
      <p key={num._id} num={num}>{num.stars}</p>
    )}
    </div>
  )
};

export default StarsComponent;