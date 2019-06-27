import React from 'react';
import TitleComponent from './TitleComponent.jsx';
import StarsComponent from './StarsComponent.jsx';
import ProductNumberComponent from './ProductNumberComponent.jsx';
import PriceComponent from './PriceComponent.jsx';
import ItemRemainingComponent from './ItemRemainingComponent.jsx';
import ConditionComponent from './ConditionComponent.jsx';

const ProductDetailsComponent = (props) => {
    return (
      <div>
        <TitleComponent {...props} />
        <StarsComponent {...props}/>
        <ProductNumberComponent {...props}/>
        <PriceComponent {...props}/>
        <ItemRemainingComponent {...props}/>
        <ConditionComponent {...props}/>
      </div>
    )
  }


export default ProductDetailsComponent;