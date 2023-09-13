import React from 'react'
import styled from "styled-components";
import { categories } from "../pages/data";
import { mobile } from "../pages/responsive";
import {
  Link
} from "react-router-dom";

const Container = styled.div`
  display: flex;
  letter-spacing: 2px;
  padding: 10%;
  margin-top: -8%;
  font-family: Segoe UI;
  //justify-content: space-evenly;
  flex-wrap: wrap;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Title = styled.h1`
  display: flex;
  letter-spacing: 3px;
  justify-content: center;
  margin-top: -15px;
  margin-bottom: 30px;
`;

const InfoTitle = styled.h1`
  display: flex;
  justify-content: center;
  color:white;
`;


const Info = styled.div`
  border-radius: 8px;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);

`;

const CatContainer = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
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

const Line = styled.img`
  display: flex;
  width: 88%;
  margin-left: 5%;
  height: 110px;

`;


const Categories = () => {
  return (
    <div>
    <Title>Collections</Title>
    <Container>
      {categories.map((item) => (
        <CatContainer key={item.id} >
          <Link to ={`/products/${item.cat}/all`}> 
          <Image src={item.img} />
          <Info>
            <InfoTitle>{item.title}</InfoTitle>
          </Info>
          </Link>
        </CatContainer>
      ))}
    </Container>
    </div>
  )
}

export default Categories
