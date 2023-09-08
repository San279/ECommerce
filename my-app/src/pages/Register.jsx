import React from 'react'
import styled from "styled-components";
import image from '../components/pexels-karolina-grabowska-4040644.jpg'
import Navbar from '../components/Navbar.jsx'


const Container = styled.div`
    flex: 1;
    width: 100vw;
    height: 91vh;
    font-family: Segoe UI;
    background: linear-gradient(
      rgba(255,255,255,0.4),
      rgba(255,255,255,0.4)
    ), url(${image}) center;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Title = styled.h1`
`;
const Wrapper = styled.div`
    width: 30%;
    opacity: 0.8;
    background-color: lightgray;
    padding: 20px;
`;
const Form = styled.form` 
`;
const Input = styled.input` 
    flex: 1;
    min-width: 45%;
    padding: 6px;
    margin: 20px 10px 0px 0px;
  `;

const Agreement = styled.span `
    font-size: 15px;
    font-weight: bold;
`;
const Button = styled.button`
    padding: 10px;
    border: none;
    font-weight: bold;
    background-color: teal;
    border-radius: 7%;
    color: white;
    cursor:pointer;
    &:hover{
        transform: scale(1.3);
    }
`;


const Register = () => {
  return (
    <div>
      <Navbar/>
      <Container>
        <Wrapper>
          <Title>CREATE ACCOUNT</Title>
            <Form>
                <Input placeholder = "Name" />
                <Input placeholder = "Last Name" />
                <Input placeholder = "Email" />
                <Input placeholder = "Username" />
                <Input placeholder = "Password" />
                <Input placeholder = "Confirm password" />
                <br/>
                <br/>
                <br/>
                <Agreement>
                  I consent to use of my personal data in accordance with the 
                  PRIVACY POLICY
                </Agreement>
                <br/>
                <br/>
                <Button>Create</Button>
            </Form>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Register
