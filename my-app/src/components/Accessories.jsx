import React from 'react'
import styled from "styled-components";
import { accessories } from "../pages/data";
import { mobile } from "../pages/responsive";
import {
  Link
} from "react-router-dom";


const Container = styled.div`
  display: flex;
  padding: 10%;
  font-family: Segoe UI;
  //justify-content: space-evenly;
  flex-wrap: wrap;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Title = styled.h2`
  letter-spacing: 2px;
  margin-top: -3%;
  display: flex;
  justify-content: center;
  color:black;
  margin-bottom: -5%;
`;


const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);

`;

const Access = styled.div`
  flex: 1;
  margin: 3px;
  //height: 60vh;
  width: 50%;
  //display: flex;
  position: relative;
  transition: all 0.5 ease;
  &:hover ${Info}{
    opacity: 1;
}
`;


const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;



const Accessories = () => {
  return (
    <div>
      <Title>Accessories</Title>
    <Container>
      {accessories.map((item) => (
        <Access key = {item.id}>
        <Link to ={`/products/all/${item.filters}`}> 
          <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
      </Info>
      </Link>
        </Access>
      ))}
    </Container>
    </div>
  )
}

export default Accessories
