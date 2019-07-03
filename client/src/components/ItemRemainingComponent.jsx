import React from 'react';
import styled from 'styled-components';
import { FaFire } from 'react-icons/fa';

const FireIconContainer = styled.div`
  color: firebrick;
`

const ItemRemaining = styled.div`
  padding: 0;
  margin: 0;
`
const ItemRemainingComponent = (props) => {
  return (
    <div>
      {
        props.prodDeets.limitRemaining < 10 ? <ItemRemaining><FireIconContainer><FaFire /><FaFire /></FireIconContainer>{props.prodDeets.limitRemaining}</ItemRemaining> : <ItemRemaining>{props.prodDeets.limitRemaining}</ItemRemaining>
      }
    </div>
  )
};

export default ItemRemainingComponent;