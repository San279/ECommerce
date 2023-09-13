import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../pages/responsive";
import { useSelector } from 'react-redux';
import { useNavigate} from "react-router-dom";
import { logout} from '../redux/userRedux';
import Collapsible from 'react-collapsible';
import { logoutCart} from '../redux/cartRedux';
import { useDispatch } from "react-redux";


const Container = styled.div`
    height: 90px;
    letter-spacing: 4px;
    background-color:lightseagreen;
    font-family: Segoe UI;
    justify-content: center;
    color:white;
    ${mobile({backgroundColor: "red"})}
    }
`;

//making it horizontal
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex; 
    justify-content: space-between;
`;

//divide 3 sides
const Left = styled.div`
    flex:1;
    display: flex;
    margin-top: -10px;
    align-items: center;
`;
const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
`;

/////////////////////
const Center = styled.div`
    flex:1;
    display:flex;
`;


const Name = styled.h2`
    font-weight: normal;
    color:khaki;
    text-align: center;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`;


const Logo = styled.img`
    padding: 20px;
    margin-left: 150px;
    margin-top: -12px;
    height: 50px;
    width: 65px;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }

`;

/////////////////////

const Right = styled.div`
    flex: 1;
    display: flex;
    padding: 10px;
    justify-content: flex-end;
`;

const Registertem = styled.div`
   font-size: 18px;
   cursor: pointer;
   padding: 10px;
   margin-left: 30px;
`;

const CollaspContainer= styled.div`
   opacity: 0.85;
   border: 1px solid lightseagreen;
   background-color:white;
   cursor: pointer;
   justify-content: center;
`;


const CollaspText= styled.span`
   display: flex;
   font-size: 15px;
   cursor: pointer;
   color: black;
   padding: 10px;
   justify-content: center;
   &:hover{
    transform: scale(1.05);
    color: lightseagreen;
}

`;

const LoginItem = styled.div`
   font-size: 18px;
   cursor: pointer;
   padding: 10px;
   margin-left: 30px;
`;

const CartItem = styled.div`
   cursor: pointer;
   padding: 10px;
   margin-left: 30px;
   color: gold;
`;

const Text = styled.span`
`;

const Navbar = () => {
    const cart = useSelector(state=>state.cart)
    const user = useSelector(state=>state.user.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Logout=() =>{
        dispatch(logout());
        dispatch(logoutCart());
        window.location.replace("http://localhost:5000/api/auth/logout");
        //logoutGoogle(dispatch,user);
      }
    

  return (
    <Container>
        <Wrapper> 
            <Left> 
                <Language>En</Language>   
            </Left>
            <Center>
                <Logo src={require('./logo.png')} onClick = {()=>navigate("/")}></Logo>
                <Name onClick = {()=>navigate("/")}>GEMSTORY</Name>
            </Center>

            <Right>           
                <LoginItem>
                    {user === null?
                    <Text onClick = {()=>navigate("/login")}>Login</Text> 
                    :
                    <Collapsible trigger= {user.username} >
                        <CollaspContainer>
                            <CollaspText onClick = {()=>navigate("/orders")}>Orders</CollaspText>
                            <CollaspText onClick = {()=>Logout()}>Logout</CollaspText>
                        </CollaspContainer>
                    </Collapsible>
                    }
                </LoginItem>
                
                <CartItem onClick = {()=>navigate("/cart")}> 
                    <Badge overlap = "rectangular" badgeContent={cart.quantity} color="secondary">
                    <ShoppingCartOutlined />
                    </Badge>
                </CartItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
