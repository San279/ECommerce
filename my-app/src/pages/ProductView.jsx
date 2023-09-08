import {AddOutlined,RemoveOutlined,ArrowLeftOutlined, 
    ArrowRightOutlined, RadioButtonCheckedRounded, RadioButtonUncheckedRounded, Add, LiveTv } from '@material-ui/icons';
import { mobile } from "./responsive";
import {addComma} from '../components/utilties';
import React from 'react'
import {useState, useEffect} from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import NavbarSecondary from '../components/NavbarSecondary';
import DesignPoster from '../components/DesignPoster';
import Footer from '../components/Footer'
import Products from '../components/Products';
import { publicRequest } from '../requestMethods';
import {useLocation} from "react-router-dom";
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from "react-redux";


const Container = styled.div`
    display: flex;
    padding: 15%;
    margin-top: -12%;
    //justify-content: center;
    ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 40%;
    display: flex;
    align-items: center;
    background-color: lightseagreen;
    color: black;
    justify-content: center;
    left: ${props => props.direction === "left" && "30px"};
    right: ${props => props.direction === "right" && "30px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.75;
    z-index: 2;
`;

const ImgContainer = styled.div`
    height: 500px;
    width: 600px;;
    padding: 30px;
`;

const ImgUiContainer = styled.div`  
    display: flex;
    //margin-right: 100px;
    padding: 60px;
`;

const RadioContainer = styled.div`  
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const Radio = styled.div` 
    width: 5px;
    height: 5px;
    padding: 20px;
    color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    cursor: pointer;

`;

const InfoContainer = styled.div`
    border-radius: 10px;
    width: 600px;
    background-color: lightgray;
    letter-spacing: 3px;
    font-family: Segoe UI;
    z-index: 2;
    display: wrap;
`;


const DescContainer = styled.div`
    font-family: Segoe UI;
    display: flex;
`;

const CartContainer = styled.div`
    padding: 20px;
    margin-left: 3%;
    font-family: Segoe UI;
`;


const InfoTitle = styled.h1`  
    z-index: 2;
    margin-top: -5px;
    padding: 30px;
`;


const InfoDesc = styled.div`  
    padding: 30px;
    margin-top: -40px;
    margin-left: 10px;
`;

const InfoName = styled.div`  
    padding: 30px;
    margin-top: -40px;
    margin-left: 10px;
    font-weight: bold;
`;

const ProductDesc= styled.div`  
    margin-top: -10%;
    margin-bottom: -8%;
    margin-left: 2%;
    padding: 30px;
`;

const AddRemoveContainer = styled.div` 
    display: flex;
    padding: 20px;
    justify-content: space-between;
    width: 100px;
`;

const AddIcon = styled.div` 
    cusor: pointer;
    &:hover{
        transform: scale(1.5);
    }
`;

const RemoveIcon = styled.div` 
    cusor: pointer; 
    &:hover{
        transform: scale(1.5);
    }
`;

const CartButton = styled.button`
    padding: 15px;
    font-family: Segoe UI;
    border: none;
    font-weight: bold;
    font-size: 20px;
    background-color: lightseagreen;
    border-radius: 10px;
    color: white;
    cursor:pointer;
    &:hover{
        transform: scale(1.3);
    }
`;

const PriceTitle = styled.h1`
`;

const SimilarProduct = styled.h2`
    display: flex;
    justify-content: center;
    letter-spacing: 3px;
    margin-top: -2%;
    font-family: Segoe UI; 
    font-weight: bold;
`;

const Img = styled.img ` 
    height: 100%;
    width: 100%;
    //border: 1.5px solid #555;
`;
const gallery = new Array();
const galleryLength = new Array();

const ProductView = () => {
    const[slideIndex, setSlideIndex] = useState(0);

    const handleDirection = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex > -1? slideIndex-1 : 3)
        }
        else{
                setSlideIndex(slideIndex < 4? slideIndex + 1: 0)
        }
        console.log(slideIndex);
    };

    const GoToSlide = (slides) =>{
        setSlideIndex(slides - 1); 
    };

    
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [image,setimage] = useState({});
    const dispatch = useDispatch();

    useEffect(()=>{
        async function makeGallery (response){
            for(let i = 0; i < response.album.length; i++){
                gallery.push(response.album[i].toString());
                galleryLength[i] = i + 1;
            }
            setimage(gallery);
        }
      const getProduct = async () =>{
        try{
          const res = await publicRequest.get("/products/find/" + id)  //fetch data from public request method file via axious
          await makeGallery(res.data);
          setProduct(res.data);
        }catch(err)
        {}
      };

      getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "desc") {
        quantity > 1 && setQuantity(quantity - 1);
        } else {
        setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(addProduct({...product, quantity}))
    };

  return (
    <div>
    <Navbar/>
    <NavbarSecondary/>
    <Container>
        <ImgContainer>
            <Img src = {product.album?.at(slideIndex)}/>
            <ImgUiContainer>
            <Arrow direction="left" onClick={()=>handleDirection ("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <RadioContainer>
            {galleryLength.map((item)=>(
                <Radio onClick ={()=>GoToSlide(item)}> 
                    {slideIndex === item - 1? <RadioButtonCheckedRounded /> : <RadioButtonUncheckedRounded/>}
                </Radio>
            ))}
            </RadioContainer>
            
            <Arrow direction="right" onClick={()=>handleDirection ("right")}>
                <ArrowRightOutlined/>
            </Arrow>
            </ImgUiContainer>
        </ImgContainer>
        <InfoContainer>
            <InfoTitle>{product.title}</InfoTitle>
            <DescContainer>
                <InfoName>
                        GemStone:
                        <br/>
                        <br/>
                        Origin:
                        <br/>
                        <br/>
                        Dimensions:
                        <br/>
                        <br/>
                        Certificate
                </InfoName>
                <InfoDesc>Ruby
                        <br/>
                        <br/>
                        {product.origin} 
                        <br/>
                        <br/>
                        {product.dimensions} 
                        <br/>
                        <br/>
                        IGI
                        <br/>
                        <br/>
                        <br/>      
                        </InfoDesc>
                </DescContainer>
                <ProductDesc>{product.desc}</ProductDesc>
                <CartContainer>
                    <PriceTitle>฿{addComma(product.price)}</PriceTitle>
                        <AddRemoveContainer>
                            <RemoveIcon onClick={() => handleQuantity("desc")} > <RemoveOutlined/> </RemoveIcon> 
                                {quantity}
                            <AddIcon onClick={() => handleQuantity("inc")} >  <AddOutlined/> </AddIcon>
                        </AddRemoveContainer>
                    <CartButton onClick={handleClick}> Add to Cart </CartButton>
                </CartContainer>
        </InfoContainer>
    </Container>
    <SimilarProduct>Similar Products</SimilarProduct>
    <Products/>
    <Footer/>
    </div>
  )
}

export default ProductView
