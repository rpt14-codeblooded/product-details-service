import React from 'react';
import styled from 'styled-components';

const ItemRemaining = styled.p`
  padding: 0;
  margin: 0;
`
const ItemRemainingComponent = (props) => {
  return (
    <div>
        <ItemRemaining>{props.prodDeets.limitRemaining}</ItemRemaining>
    </div>
  )
};

export default ItemRemainingComponent;