import React from 'react'
import {useState}from 'react'
import styled from "styled-components";
import image from '../components/pexels-karolina-grabowska-4040644.jpg';
//import image from '../components/krystal-ng-1PlVbeOCd78-unsplash.jpg'
import Navbar from '../components/Navbar.jsx'
import NavbarSecondary from '../components/NavbarSecondary';
import { useDispatch,useSelector } from 'react-redux';
import {login} from "../redux/apiCalls"
import {
  Google,
  Facebook,
} from "@mui/icons-material";


const Container = styled.div`
    flex: 1;
    width: 100vw;
    height: 84vh;
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
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 20%;
    opacity: 0.9;
    border-radius: 2%;
    background-color: lightgray;
    padding: 20px;
`;
const Form = styled.form` 
`;
const Input = styled.input` 
    flex: 1;
    min-width: 90%;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin: 20px 10px 0px 0px;
  `;

const Button = styled.button`
    padding: 14px;
    border: none;
    margin-left: 16%;
    width: 260px;
    font-size: 14px;
    font-weight: Bold;
    background-color: teal;
    border-radius: 4px;
    color: white;
    cursor:pointer;
    &:hover{
        transform: scale(1.3);
    }
    &:disabled{
      color:green;
      cursor:not-allowed;
    }
`;

const GoogleButton = styled.button`
    width: 260px;
    height: 40px;
    border: none;
    margin-left: 16%;
    color: white;
    border-radius: 4px;
    cursor:pointer;
    display: flex;
    align-items: center;
    padding: 25px;
    background-color: #${(props) => props.color};
    &:hover{
        transform: scale(1.1);
    }
    &:disabled{
      color:green;
      cursor:not-allowed;
    }
`;

const SocialText = styled.a `
    font-size: 15px;
    color: white;
    padding: 50px;
    position: absolute;
`;


const FacebookButton = styled.button`
    width: 260px;
    height: 40px;
    border: none;
    margin-left: 16%;
    border-radius: 4px;
    color: white;
    cursor:pointer;
    display: flex;
    align-items: center;
    padding: 25px;
    background-color: #${(props) => props.color};
    &:hover{
        transform: scale(1.1);
    }
    &:disabled{
      color:green;
      cursor:not-allowed;
    }
`;

const LinkForgot = styled.a `
    font-size: 14px;
    cursor: pointer;
    color: dimgrey;
`;

const Error = styled.span` 
    font-size: 15px;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector((state) => state.user);

  const handleClick=(e) =>{
    e.preventDefault();
    login(dispatch, {username,password});
  }


  const google = () => {
    window.open("http://localhost:5000/api/auth/google", "_self")
  }


  return (
    <div>
    <Navbar/>
    <NavbarSecondary/>
    <Container>
      <Wrapper>
        <Title>Login</Title>
          <Form>
              <Input placeholder = "Username" 
                onChange={(e)=>setUsername(e.target.value)}
              />
              <br/>
              <Input placeholder = "Password"
                type="password" 
                onChange={(e)=>setPassword(e.target.value)}
              />
              <br/>
              <br/>
              <LinkForgot>Forget password?</LinkForgot>
              <br/>
              <br/>
              <Button onClick={handleClick}>LOGIN</Button>
              <br/>
              <br/>
              {error && <Error>Check Username and/or Password</Error>}
          </Form>
          <br/>
            <GoogleButton onClick={google} color = "FF3E30">
                <Google/> <SocialText>Login with Google</SocialText>
            </GoogleButton>
            <br/>
            <FacebookButton color = "3B5999">
                <Facebook/>  <SocialText>Login with Facebook</SocialText>
            </FacebookButton>
          <br/>
      </Wrapper>
    </Container>
  </div>
  )
}

export default Login
