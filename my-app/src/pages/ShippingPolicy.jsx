import React from 'react'
import {useState}from 'react'
import styled from "styled-components";
import image from '../components/pexels-karolina-grabowska-4040644.jpg'
import Navbar from '../components/Navbar.jsx'
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/Footer';
import { useDispatch,useSelector } from 'react-redux';
import {login} from "../redux/apiCalls"
import {
  Google,
  Facebook,
} from "@mui/icons-material";


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
    height: 70%;
    opacity: 0.9;
    margin-top: -7%;
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


const FedImage = styled.img`
  width: 85px;
  height: 40px;;
`;

const UpsImage = styled.img`
  width: 50px;
  height: 60px;;
`;

const KerryImage = styled.img`
  width: 70px;
  height: 60px;;
`;

const PostImage = styled.img`
  width: 90px;
  height: 60px;;
`;

const JtImage = styled.img`
  width: 90px;
  height: 25px;;
`;

const ShippingPolicy = () => {

  return (
    <div>
    <Navbar/>
    <NavbarSecondary/>
    <Container>
      <Wrapper>
        <Title>Shipping Policy</Title>
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
        </Body>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <LogoContainer>
          <FedImage src = "https://www.pngmart.com/files/15/Fedex-Logo-PNG-Free-Download.png"/>
          <UpsImage src = "https://www.ups.com/assets/resources/webcontent/images/ups-logo.svg"/>
          <KerryImage src = "data:image/png;base64,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"/>
          <PostImage src = "https://upload.wikimedia.org/wikipedia/en/3/36/ThailandPost_Logo.png"/>
          <JtImage src = "https://www.jtexpress.co.th/img/2023%20Logo-02.d770cbc7.png"/>

        </LogoContainer>
      </Wrapper>
    </Container>
    <Footer/>
  </div>
  )
}

export default ShippingPolicy
