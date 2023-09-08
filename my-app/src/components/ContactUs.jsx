import React from 'react'
import styled from "styled-components";
//import image from '../components/pexels-karolina-grabowska-4040644.jpg'
import image from '../components/aleksandr-buynitskiy-cOiEJ9aupbU-unsplash.jpg'
import Navbar from '../components/Navbar.jsx'


const Container = styled.div`
    flex: 1;
    width: 100vw;
    height: 50vh;
    font-family: Segoe UI;
    background: linear-gradient(
      rgba(255,255,255,0.4),
      rgba(255,255,255,0.4)
    ), url(${image}) center;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Wrapper = styled.div`
    width: 60%;
    border-radius: 10px;
    opacity: 0.9;
    background-color: lightgray;
    padding: 10px;
`;
const Form = styled.form` 
    margin-left: 5%;
`;

const Title= styled.form` 
  display:flex;
  justify-content: center;
`;

const InputName = styled.input` 
    flex: 1;
    min-width: 45%;
    padding: 6px;
    margin: 20px 10px 0px 0px;
  `;

const InputEmail= styled.input` 
  flex: 1;
  width: 45.7%;
  padding: 6px;
  margin: 20px 10px 0px 0px;
`;

const InputPhone= styled.input` 
  display:flex;
  justify-content:center;
  width: 93%;
  padding: 6px;
  margin: 20px 10px 0px 0px;
`;


const InputMessage= styled.input` 
  flex: 1;
  padding: 6px;
  margin: 10px 10px 0px 0px;
  width: 93%;
  height: 150px;
`;


const Button = styled.button`
    display: flex;
    padding: 10px;
    border: none;
    margin-left: 37%;
    width: 20%;
    justify-content: center;
    font-weight: bold;
    background-color: teal;
    border-radius: 5px;
    color: white;
    cursor:pointer;
    &:hover{
        transform: scale(1.3);
    }
`;


const Register = () => {
  return (
    <div>
      <Container>
        <Wrapper>
            <Form>
                <InputName placeholder = "Name" />
                <InputEmail placeholder = "Email" />
                <InputPhone placeholder = "Phone Number" />
                <br/>
                <InputMessage placeholder = "Message" />
                <br/>
                <br/>
                <Button>Send</Button>
            </Form>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Register
