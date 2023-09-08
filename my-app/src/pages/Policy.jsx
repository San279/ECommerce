import React from 'react'
import {useState}from 'react'
import styled from "styled-components";
import image from '../components/pexels-karolina-grabowska-4040644.jpg'
import Navbar from '../components/Navbar.jsx'
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/Footer';
import { useDispatch,useSelector } from 'react-redux';
import {login} from "../redux/apiCalls"


const Container = styled.div`
    flex: 1;
    width: 100vw;
    height: 100vh;
    font-family: Segoe UI;
    background: linear-gradient(
      rgba(255,255,255,0.4),
      rgba(255,255,255,0.4)
    ), url(${image}) center;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;

`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 36%;
    margin-top: -4%;
    height: 80%;
    opacity: 0.9;
    border-radius: 6px;
    background-color: lightgray;
    padding: 40px;
`;
const Body = styled.span` 
  padding: 10px;
  font-size: 18px;
`;

const LogoContainer = styled.div` 
  padding: 10px;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
`;


const StripeImage = styled.img`
  width: 85px;
  height: 40px;;
`;

const PayImage = styled.img`
  width: 100px;
  height: 30px;;
`;

const VisaImage = styled.img`
  width: 90px;
  height: 30px;;
`;

const MasterImage = styled.img`
  width: 80px;
  height: 50px;;
`;


const Policy = () => {
  return (
    <div>
    <Navbar/>
    <NavbarSecondary/>
    <Container>
      <Wrapper>
        <Title>Policy</Title>
        <Body>
          <br/>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          <br/>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          <br/>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Body>
        <br/>
        <br/>
        <LogoContainer>
          <StripeImage src = "data:image/png;base64,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"/>
          <PayImage src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"/>
          <VisaImage src = "https://www.visa.com/images/merchantoffers/2023-07/1689558445427.Visa_Brandmark_Blue_RGB_72ppi.png"/>
          <MasterImage src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/200px-Mastercard_2019_logo.svg.png"/>
        </LogoContainer>
      </Wrapper>
    </Container>
    <Footer/>
  </div>
  )
}

export default Policy
