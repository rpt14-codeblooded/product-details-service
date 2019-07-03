import React from 'react';
import ProductNumberComponent from './ProductNumberComponent.jsx';
import styled from 'styled-components';
import { FaRegHeart, FaDollarSign } from 'react-icons/fa';

const BuyButton = styled.button`
  outline:none;
  border: none;
  background-image: linear-gradient(#0079bc 0%, #00509d 75%);
  border-radius: 3px;
  color: white;
  width: 140px;
  display: block;
  margin: 0;
  padding: 5px 25px;
  cursor: pointer;
  font-size: 1em;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 3px #aaaaaa;
  text-align: center;
  font-weight: bold;
`;

const AddButton = styled.button`
  outline:none;
  border: none;
  background-image: linear-gradient(#45aad6 0%, #2386c0 75%);
  border-radius: 3px;
  color: white;
  width: 140px;
  display: block;
  margin: 10px 0;
  padding: 5px 25px;
  cursor: pointer;
  font-size: 1em;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 3px #aaaaaa;
  text-align: center;
  font-weight: bold;
`;

const WishListButton = styled.button`
  outline: none;
  border: none;
  background: white;
  border-radius: 3px;
  color: blue;
  width: 140px;
  display: block;
  margin: 10px 0;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 0.7em;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 3px #aaaaaa;
  text-align: center;
`;

const PriceTag = styled.p`
margin: 0 auto;
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,400i,500i,600,700,800,900&display=swap');
font-family: 'Montserrat', sans-serif;
float: left;
`;

const DollarTag = styled.span`
margin-left: 20px;
font-size: 1em;
text-transform: uppercase;
font-weight: bold;
`;

const InnerButtonContainer = styled.span`
float: right;
`;

const ProdNumber = styled.div`
margin: auto;
float: left;
`;



const PriceComponent = (props) => {
  return (
    <div>
      <PriceTag>Price: <DollarTag>US ${props.prodDeets.price}</DollarTag></PriceTag>
      <InnerButtonContainer>
        <BuyButton>Buy It Now</BuyButton>
        <AddButton>Add to cart</AddButton>
        <WishListButton><FaRegHeart /> Add to watch list</WishListButton>
      </InnerButtonContainer>
      <ProdNumber>
        <ProductNumberComponent {...props}/>
      </ProdNumber>
    </div>
  )
};
export default PriceComponent;