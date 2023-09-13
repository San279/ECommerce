import React from 'react';
import {useState,useEffect} from 'react';
import Navbar from '../components/Navbar'
import NavbarSecondary from '../components/NavbarSecondary';
import Footer from '../components/Footer'
import styled from 'styled-components'
import { AddOutlined,RemoveOutlined, RadioButtonCheckedRounded, RadioButtonUnchecked, Add, SignalCellular0Bar, CardTravelSharp } from '@material-ui/icons';
import { mobile } from "./responsive";
import LineImg from "../components/linebrk.PNG";
import EmptyCartImg from "../components/EmptyCart.png"
import {addComma} from '../components/utilties';
import { useSelector,useDispatch } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import {userRequest, publicRequest} from "../requestMethods";
import { useNavigate} from "react-router";
import { deleteProduct, addProductfromCart,deleteProductAfterOrder, clearCart} from '../redux/cartRedux';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
    flex: 1;
    display: flex;
    min-height: 59vh;
    overflow: hidden;
    width: 99vw;
    //align-items: center;
    justify-content: center;
`;

const ItemsContainer = styled.div`
    width: 44%;
    padding: 30px;
    margin-top: 2%;
    border-radius: 5px;
    margin-bottom: 2%;
    margin-left: -400px;
    justify-content: center;
`;

const SummaryContainer = styled.div`
    width: 330px;
    border: 1px solid cyan;
    height: 250px;
    background-color: aliceblue;
    border-radius: 5px;
    padding: 30px;
    top: 10px;
    margin-right: -900px;
    margin-top: 180px;
    position: absolute;
`;

const SummaryTitle = styled.h2`
    margin-top: -2px;
    display: flex;
    margin-left: 37%;
`;

const Wrapper = styled.div`
    flex: 1;
    display: flex;
`;

const SummaryDesc = styled.span`
    font-size: 15px;
    flex:1;
`;

const SummaryValues = styled.span`
    font-size: 15px;
    flex:2;
`;


const Desc= styled.h3`
    font-weight: normal;
`;

const Values= styled.h3`
    margin-left: 60%;
`;

const Total= styled.h2`
    margin-left: 55%;
`;

const Item = styled.div`
    flex: 1;
    padding: 5px;
    border-bottom: 1px solid lightseagreen;
    height: 150px;
    margin-top: 15px;
    display: flex;
`;

const Left = styled.div`
    align-items: start;
    flex:1;
    display: flex;
`;

const Right = styled.div`
    flex: 0.5;
    display:flex end;
`;


const AddRemoveContainer = styled.h2` 
    display: flex;
    width: 100px;
`;

const AddIcon = styled.div` 
    cusor: pointer;
    margin-right: 15px;
    &:hover{
        transform: scale(1.2);
    }
`;

const RemoveIcon = styled.div` 
    cusor: pointer;
    margin-left: 10px;
    &:hover{
        transform: scale(1.2);
    }
`;


const ItemName = styled.h4`
`;

const ItemDimen = styled.span`
    color: gray;
    font-size: 14px;
    font-weight: normal;
`;

const ItemOrigin = styled.span`
    color: gray;
    font-size: 14px;
    font-weight: normal;
    margin-top: -20px;
`;


const ItemPrice = styled.p`
    display: flex;
    font-size: 20px;
    margin-left:15px;
    font-weight: normal;
    //justify-content: center;
`;

const Img = styled.img `
    padding: 16px;
    height: 80%;
    width: 155px;
    //border: 1.5px solid #555;
`;

const Radio = styled.div`  
    width: 5px;
    height: 5px;
    color: teal;
    padding: 50px;
    display: flex;
    margin-top: 12px;
    cursor: pointer;
`;

const Line = styled.img `
    padding: 16px;
    height: 80%;
    width: 70%;
`;


const CheckoutButton = styled.button` 
    cusor: pointer;
    width: 60%;
    height: 50px;
    border-radius: 5px;
    border: none;
    margin-top: 15px;
    background-color: teal;
    margin-left: 20%;
    font-size: 16px;
    color: white;
    &:hover{
        transform: scale(1.1);
    }
`;

const Text = styled.span` 
`;

const EmptyImg = styled.img `
    display: flex;
    justify-content: center;
    padding: 5%;
    height: 60%;
    width: 80%;
`;

const EmptyCartText = styled.span` 
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    letter-spacing: 2px;
    color: gray;
`;

const GoToProduct = styled.button` 
    font-size: 15px;
    padding: 28px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    letter-spacing: 2px;
    margin-left: 25%;
    display: flex;
    justify-content: center;
    color: white;
    background-color:lightseagreen;
    &:hover{
        transform: scale(1.3);
    }
`;


const Cart = () => {
    const cart = useSelector((state)=>state.cart);
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const deleteItem = (item) =>{
        dispatch(deleteProduct(item)); //redux
    };

    const addItem = (item) =>{
        dispatch(addProductfromCart(item)); //redux
    };

    const onToken = (token)=>{
        setStripeToken(token);
    }

    useEffect(() =>{
        const makeRequest = async ()=>{
            try{ //axious request
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                //console.log(res.data);
                navigate("/success", {state: {stripeData: res.data, products: cart}});
                dispatch(clearCart());
            }catch{
                alert("failed to pay")
            }
        };
        stripeToken && cart.total >= 1 && makeRequest();
    }, [stripeToken, cart.total, navigate])

  return (
    <div>
    <Navbar/>
    <NavbarSecondary/>
        <Container>
        {cart.quantity === 0?
            <div>
                <br/>
                <EmptyCartText>Cart's Empty</EmptyCartText>
                <br/>
                <EmptyImg src={EmptyCartImg}/>
                <br/>
                <GoToProduct onClick={()=>navigate("/products/all/stone")}>Add products</GoToProduct>
                <br/>
                <br/>
            </div> :
        <ItemsContainer>
            {cart.products?.map((product) => (
            <Item key = {product._id}>
                <Left>
                    <Img src = {product?.image}/>
                    <ItemName>
                    {product?.title}       
                    <br/>
                    <ItemDimen>{product?.dimensions}</ItemDimen>
                    <br/>
                    <ItemOrigin>{product?.origin}</ItemOrigin>
                    </ItemName> 
                </Left>
                <Right>
                    <AddRemoveContainer>
                        <AddIcon onClick={()=>addItem(product)}>
                            <AddOutlined/>
                        </AddIcon>
                        <span> {product?.quantity} </span>
                        <RemoveIcon onClick={()=>deleteItem(product)}>
                            <RemoveOutlined/>
                        </RemoveIcon>
                    </AddRemoveContainer>
                    <ItemPrice>฿{addComma(product?.price*product?.quantity)}</ItemPrice>
                </Right>
                </Item>
                ))}
            </ItemsContainer>
            }
            {cart.quantity === 0? <Text></Text> :
            <SummaryContainer>
                <SummaryTitle>Summary</SummaryTitle>
                <Wrapper>
                    <SummaryDesc>
                        <Desc>Cost{cart.quantity === 1? <Text>({cart.quantity} item)</Text>:<Text>({cart.quantity} items)</Text>}</Desc>
                        <Desc>Shipping fees</Desc>
                        <Desc>Total Cost</Desc>
                    </SummaryDesc>
                    <SummaryValues>
                        <Values>฿{addComma(cart.total)}</Values>
                        <Values>฿105</Values>
                        <Total>฿{addComma(cart.total + 105)}</Total>
                    </SummaryValues>
                </Wrapper>
                <StripeCheckout 
                    name = "Gem story"
                    image src={require('../components/logo.png')} 
                    billingAddress
                    shippingAddress
                    description={`Your total is ฿${cart.total}`}
                    amount={cart.total*100}
                    token = {onToken}
                    stripeKey={KEY}
                >
                    <CheckoutButton> CHECKOUT </CheckoutButton>
                </StripeCheckout>
            </SummaryContainer>
            }
      </Container>
      <Footer/>
    </div>
  )
}

export default Cart
