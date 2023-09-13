import { useEffect, useState } from "react";
import styled from 'styled-components'
import { useSelector } from "react-redux";
import {extractDate, addComma, extractTime, addDays} from "../components/utilties";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Collapsible from 'react-collapsible';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Linebreak from '../components/linebrk.PNG';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Navbar from "../components/Navbar";
import NavbarSecondary from "../components/NavbarSecondary";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";


const Container = styled.div`
    flex: 1;
    min-width: 100vw;
    min-height: 100vh;
    //margin-top: -3%;
    font-family: Segoe UI;
    justify-content: center;
    `;

const OrdersContainer = styled.div`
    //margin-top: 5%;
    margin-left: 19%;
    border-radius: 5px;
`;

const PageTitle = styled.h1`
    display:flex;
    font-weight: normal;
    color: teal;
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 21%;
    letter-spacing: 3px;
`;

const Orders = styled.div`
    width: 70%;
    padding: 30px;
`;

const FirstRow = styled.div`
    padding: 5px;
    letter-spacing: 2px;
    margin-left: 10%;
    display: flex;
    justify-content: space-around;
`;
const Title = styled.span`
  font-size: 18px;
  color: teal;
`;

const InvisTitle = styled.span`
  font-size: 18px;
  color: white;
`;

const SecondRow = styled.div`
    padding: 6px;
    letter-spacing: 2px;
    display: flex;
    margin-left: 8%;
    justify-content: space-around;
`;

const Info = styled.span`
  font-size: 23px;
`;

const InfoId = styled.span`
  font-size: 18px;
`;


const Address= styled.span`
    margin-top: 5%;
    margin-left: 1%;
    padding: 20px;
`;

const Method = styled.span`
    //margin-top: 5%;
    margin-left: 5%;
    padding: 20px;
`;

const Status = styled.span`
    font-size: 22px;
    color: red;
    margin-left: 13%;
    padding: 8px;
`;


const FourthRow = styled.div`
    letter-spacing: 2px;
    padding: 35px;
`;


const EstimatedDelivery = styled.span`
    color: teal;
    margin-left: 35%;
    font-size: 20px;
`;

const Amount = styled.span`
    color: teal;
    font-weight: bold;
    margin-left: 13%;
    font-size: 25px;
`;

const ViewText = styled.span`
    display: flex;
    justify-content: center;
    color: teal;
    margin-left: 9%;
    font-size: 25px;
`;

const Item = styled.div`
    border: 1px solid green;
    height: 150px;
    width: 600px;
    background-color: white;
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    margin-left: 22%;
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

const LineImg= styled.img `
    padding-top: 50px;
    width: 98%;
    display: flex;
    justify-content: center;
`;

const Icon = styled.div `
    padding: 16px;
    color: green;
`;


const ContactTitle = styled.h1`
    display:flex;
    font-weight: normal;
    color: teal;
    justify-content: center;
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 2%;
    letter-spacing: 3px;
`;


const OrderView = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/orders/user/"+ currentUser._id.toString()) 
        setOrders(res.data)
        console.log(res.data);
      } catch (err) {}
    };
    currentUser && getOrders();
  }, []);

  return (
    <div>
    <Navbar/>
    <NavbarSecondary/>
    <Container>
      <PageTitle>PURCHASE HISTORY</PageTitle>
      <OrdersContainer>
        {orders?.map((item) =>(
        <Orders key = {item._id}>
          <FirstRow>
            <InvisTitle> asdsadsdaasdsadsadqweWS </InvisTitle>
            <Title>Ordered Date</Title>
            <Title>Ordered time </Title>
          </FirstRow>
          <SecondRow>
            <InfoId>{item._id}</InfoId>
            <Info>{extractDate(item.createdAt)}</Info>
            <Info>{extractTime(item.createdAt)}</Info>
          </SecondRow>
          <br/>
            <Address> {item.address.line1} , {item.address.city} , {item.address.country} , {item.address.postal_code} </Address>
            <Method>Kerry Special Delivery</Method>
            <Status>{item.status}</Status>
          <FourthRow>
            <EstimatedDelivery>Estimated Arival: {addDays(item.createdAt, 3)}</EstimatedDelivery>
          <Amount>฿{addComma(item.amount)}</Amount>
          </FourthRow>
          <Collapsible trigger = "<< View Items >>" >
            {item.products?.map((product) => (
            <Item key = {product.productId}>
                <Left>
                    <Img src = {product?.productImg}/>
                    <ItemName>
                    {product?.productName}  <span> x {product?.quantity} </span>      
                    <br/>
                    <br/>
                    <ItemDimen>{product?.productDimension}</ItemDimen>
                    <br/>
                    </ItemName> 
                </Left>
                <Right>
                <ItemPrice>฿{addComma(product?.productPrice*product?.quantity)}</ItemPrice>
                <Icon>
                  <DoneAllIcon/>
                </Icon>
                </Right>
            </Item>
          ))}
          </Collapsible>
        <LineImg src = {Linebreak}/>
        </Orders>
      ))}
      </OrdersContainer>
    </Container>
    <ContactTitle>ANY ISSUES? CONTACT US</ContactTitle>
    <ContactUs/>
    <Footer/>
</div>
  );
};

export default OrderView;