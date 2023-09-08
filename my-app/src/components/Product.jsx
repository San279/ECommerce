import React from 'react'
  import {useNavigate,Link,
    useLocation} from 'react-router-dom';

import styled from "styled-components"
import { addProduct } from '../redux/cartRedux';
import {addComma} from './utilties';


const ButtonsGroup = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 50.2, 50.2, 0.8);
  position: absolute;
  margin-left:-3px;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  border: 3px solid black;
  border-radius: 7px;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
`;


const Image = styled.img`
  //background-color: red;
  border-radius: 6px;
  height: 60%;
  width: 100%;
  margin-bottom: -17px;
`;

const Container = styled.div`
    flex: 1;
    margin: 25px;
    width: 240px;
    height: 320px;
    margin-bottom: 60px;
    justify-content: center;
    background-color: white;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    &:hover ${ButtonsGroup}{
        opacity: 0.2;
        transform: scale(1.05);
    }

    `;


const InfoContainer= styled.div`
    flex: 1;
    margin: 8px;
    width: 224px;
    justify-content: center;
    height: 70px;
    position: relative;
    background-color: transparent;
    
  }`;

const Title = styled.h4`
    color:black;
    margin-bottom: -12px;
    font-weight: normal;
`;


const Origin = styled.h5`
    padding: 5px;
    color:gray;
    font-weight: normal;
`;

const Price = styled.span`
    color:teal;
    //position:absolute;
    bottom:-80px;
`;

const Product = ({item}) => {
  let navigate = useNavigate();

  const goToProduct = (itemId) =>{
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    navigate("/product/" + itemId);
    window.location.reload();
};

  return (
    <div>
    <Container onClick={()=>goToProduct(item._id)}>
      <Image src = {item.image} />
      <ButtonsGroup>
      </ButtonsGroup>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Origin>{item.origin}</Origin>
        <Price>฿{addComma(item.price)}</Price>
      </InfoContainer>
    </Container>
    </div>
  )
}

export default Product
