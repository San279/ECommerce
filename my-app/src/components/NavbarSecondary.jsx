import React from 'react';
import styled from 'styled-components';
import { mobile } from "../pages/responsive";
import {Link, useNavigate} from "react-router-dom";


const Container = styled.div`
    height: 60px;
    background-color:white;
    letter-spacing: 2px;
    font-family: Segoe UI;
    color: dimgray;
    font-size: 18px;
    justify-content: center;
    ${mobile({backgroundColor: "red"})}
    }
`;

//making it horizontal
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex; 
    justify-content: space-between;
`;

const Input = styled.input``;

/////////////////////
const Center = styled.div`
    flex:1;
    display:flex;
    justify-content: center;
`;

const Market = styled.span`
   cursor: pointer;
   padding: 10px;
   &:hover{
    opacity: 0.4;
    }
`;

const Shipping= styled.span`
   cursor: pointer;
   padding: 10px;
   padding-left: 50px;
   &:hover{
    opacity: 0.4;
    }
`;

const Policy = styled.span`
   cursor: pointer;
   padding: 10px;
   padding-left: 50px;
   &:hover{
    opacity: 0.4;
}
`;

const Contact = styled.span`
   cursor: pointer;
   padding: 10px;
   padding-left: 50px;
   &:hover{
    opacity: 0.4;
}
`;



const NavbarSecondary = () => {
    
    const navigate = useNavigate();

  return (
    <Container>
        <Wrapper> 
            <Center>
                <Market onClick = {()=>navigate("/products/all/stone")}> Products </Market>
                <Shipping onClick = {()=>navigate("/shipping")}>Shipping </Shipping>
                <Policy onClick = {()=>navigate("/policy")}> Policy </Policy>
                <Contact onClick = {()=>navigate("/aboutus")}> About us </Contact>
            </Center>
        </Wrapper>
    </Container>
  )
}

export default NavbarSecondary
