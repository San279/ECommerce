import React from 'react'
import {useState}from 'react'
import styled from "styled-components";
import image from '../components/pexels-karolina-grabowska-4040644.jpg'
import Navbar from '../components/Navbar.jsx'
import NavbarSecondary from '../components/NavbarSecondary';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import { useDispatch,useSelector } from 'react-redux';
import {login} from "../redux/apiCalls"


const Container = styled.div`
    flex: 1;
    width: 100vw;
    font-family: Segoe UI;
    background: linear-gradient(
      rgba(255,255,255,0.4),
      rgba(255,255,255,0.4)
    ), url(${image}) center;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const TitleFirst = styled.h1`
    padding: 10px;
    display: flex;
    letter-spacing: 3px;
`;

const TitleSecond = styled.h1`
    padding: 10px;
    margin-left: 75%;
    display: flex-end;
    letter-spacing: 3px;
`;

const Wrapper = styled.div`
    margin-top: 2%;
    width: 75%;
    height: 100%;
    opacity: 0.9;
    border-radius: 6px;
    background-color: lightgray;
    padding: 30px;
`;
const Body = styled.div` 
  padding: 20px;
  display:flex;
  font-size: 19px;
  letter-spacing: 3px;
`;

const Image = styled.img`
  border-radius: 30px;
  padding: 20px;
  width: 50%;
  height: 400px;;
`;

const ContactUsTitle = styled.h1`
    display: flex;
    letter-spacing: 3px;
    color:teal;
    font-weight: normal;
    justify-content: center;
    font-family: Segoe UI;
    padding: 30px;
    background-color: transparent;
`;
const AboutUs = () => {


  return (
    <div>
    <Navbar/>
    <NavbarSecondary/>
    <Container>
      <Wrapper>
        <TitleFirst>Our Origin</TitleFirst>
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
        <Image src = "https://images.unsplash.com/photo-1542395975-d6d3ddf91d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
        </Body>
        <br/>
        <br/>
        <TitleSecond>Our Mission</TitleSecond>
        <Body>
        <Image src = "https://images.unsplash.com/photo-1652170236283-4b834ac81269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
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
        </Body>
        <br/>
        <br/>
        <br/>
        
      </Wrapper>
    </Container>
    <ContactUsTitle>CONTACT US</ContactUsTitle>
    <ContactUs/>
    <Footer/>
  </div>
  )
}

export default AboutUs
