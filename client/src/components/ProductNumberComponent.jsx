import React from 'react';

const ProductNumberComponent = (props) => {
  return (
    <div>
    productNum
    {props.productNum.map((prodnum) =>
      <p key={prodnum._id} prodnum={prodnum}>{prodnum.productNumber}</p>
    )}
    </div>
  )
};
export default ProductNumberComponent;