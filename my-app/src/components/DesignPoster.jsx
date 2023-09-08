import React from 'react'
import styled from "styled-components";
import { categories } from "../pages/data";
import { mobile } from "../pages/responsive";
import image from '../components/krystal-ng-1PlVbeOCd78-unsplash.jpg'
import {
  Link
} from "react-router-dom";

const Container = styled.div`
  display: flex;
  //margin-top: -8%;
  height: 26vh;
  font-family: Segoe UI;
  flex-wrap: wrap;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Title = styled.span`
  letter-spacing: 4px;
  justify-content: center;
`;


const Info = styled.div`
  opacity: 1;
  position: absolute;
  //top: 0;
  left: 0;
  width: 100%;
  height: 30%;
  z-index: 2;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Button = styled.button`
    padding: 15px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    color: black;
    font-size: 30px;
    opacity: 0.65;
    background-color: white;
    cursor: pointer;
    &:hover{
      opacity: 0.7;
      transform: scale(1.2);
  }
`;

const InfoContainer = styled.div`
  //flex: 1;
  //position: relative;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;


const DesignPoster = () => {
  return (
    <Container>
        <Image src={image}/>
        <InfoContainer>
          <Info>
            <Button>
              <Title>Custom-made</Title>
              </Button>
          </Info>
        </InfoContainer>

    </Container>
  )
}

export default DesignPoster
