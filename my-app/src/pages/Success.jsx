import { useEffect, useState } from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import {useNavigate} from 'react-router-dom';
import {addComma} from '../components/utilties';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from '../components/pexels-karolina-grabowska-4040644.jpg'


const Container = styled.div`
    flex: 1;
    width: 100vw;
    //height: 100vh;
    font-family: Segoe UI;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const OrderContainer = styled.div`
    //margin-top: 5%;
    padding-top: 20%;
    border-radius: 5px;
    background-color: lightgray;
    padding: 40px;
`;

const BigIcon = styled.span`
    display: flex;
    justify-content: center;
    color: green;
`;

const OrderTitle= styled.h2`
    padding: 15px;
    color: green;
    display: flex;
    justify-content: center;
`;

const OrderId= styled.span`
    font-weight: bold;
    display: flex;
    justify-content: center;
`;


const ShippingContainer = styled.div`
    display: flex;
    //align-items: center;
    justify-content: space-between;
    //padding: 10px;
`;


const AdressTitle = styled.span`
   font-size: 16px;
   font-weight: bold;
   padding:7px;
   margin-bottom: 50%;

`;


const Adress = styled.div`
    padding:4px;
    width: 45%;
    //border: 1px solid teal;
    border-radius: 5px;
    padding: 20px;
`;

const MethodTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  padding:7px;
`;


const Method = styled.div`
    padding:7px;
    width: 40%;
    border-radius: 5px;
    //border: 1px solid teal;
    padding: 20px;
`;

const OrderItem = styled.span`
    display: flex;
    justify-content: center;
    font-size: 20px;

`;


const Item = styled.div`
    //border: 1px solid green;
    height: 150px;
    width: 600px;
    background-color: white;
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    //align-items: center;
`;

const Left = styled.div`
    //background-color: green;
    align-items: start;
    flex:1;
    display: flex;
`;

const Right = styled.div`
    flex: 0.5;
    display:flex end;
   // background-color:blue;
`;

const ItemName = styled.span`
  padding: 16px;
  font-weight: bold;
`;

const ItemDimen = styled.span`
    padding: 10px;
    font-size: 13px;
    color: gray;
    font-weight: normal;
`;

const ItemOrigin = styled.span`
padding: 10px;
    color: gray;
    font-size: 13px;
    font-weight: normal;
`;


const ItemPrice = styled.p`
    padding: 4px;
    display: flex;
    font-size: 15px;
    //margin-left:15px;
    font-weight: normal;
`;

const Img = styled.img `
    padding: 16px;
    height: 80%;
    width: 155px;
    //border: 1.5px solid #555;
`;

const Icon = styled.div `
    padding: 16px;
    color: green;
`;

const Button = styled.button `
    display: flex;
    padding: 15px;
    border: none;
    width: 150px;
    border-radius: 5px;
    background-color: green;
    color: white;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin-left: 38%;
`;



const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)

  const data = location.state.stripeData;
  const cart = location.state.products;
  console.log(data.billing_details);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    //data && createOrder();
  }, [cart, data, currentUser]);  

  return (
    <div>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Container>
      <OrderContainer>
        <BigIcon>
            <CheckCircleIcon fontSize="large"/>
        </BigIcon>
        <OrderTitle>
           Order placed successfully   
        </OrderTitle>
        <OrderId>
          ID dsadqweqwsad536565564
        </OrderId>
        <br/>
        <br/>
         <ShippingContainer>
          <Adress>
            <AdressTitle>Address </AdressTitle> <HomeWorkIcon/>
            <br/>
            <br/>
            {data.billing_details.name}
            <br/>
            {data.billing_details.address.country}
            <br/>
            {data.billing_details.address.city}
            <br/>
            {data.billing_details.address.line1}
            <br/>
            {data.billing_details.address.postal_code}
            <br/>
            </Adress>
          
          <Method>
            <MethodTitle>Shipping</MethodTitle> <LocalShippingIcon/>
            <br/>
            <br/>
            Kerry express Special delivery 188
          </Method>
          </ShippingContainer>
        <br/>
      {cart.products?.map((product) => (
      <Item key = {product._id}>
          <Left>
              <Img src = {product?.image}/>
              <ItemName>
              {product?.title}  <span> x {product?.quantity} </span>      
              <br/>
              <br/>
              <ItemDimen>{product?.dimensions}</ItemDimen>
              <br/>
              <ItemOrigin>{product?.origin}</ItemOrigin>
              </ItemName> 
          </Left>
          <Right>
          <ItemPrice>฿{addComma(product?.price*product?.quantity)}</ItemPrice>
          <Icon>
            <DoneAllIcon/>
          </Icon>
          </Right>
      </Item>
    ))}
    <br/>
    <br/>
    <Button onClick={()=>navigate("/")}>Go to Homepage</Button>
    </OrderContainer>
</Container>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>
  );
};

export default Success;