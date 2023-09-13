
import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar'
import NavbarSecondary from '../components/NavbarSecondary';
import DesignPoster from '../components/DesignPoster';
import Slider from '../components/Slider'
import Accessories from '../components/Accessories'
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useSelector,useDispatch } from 'react-redux';
import {getUserCart, loginGoogle} from "../redux/apiCalls"
import {useEffect} from 'react'
import ContactUs from "../components/ContactUs";


const TrendingTitle = styled.h1`
    display: flex;
    letter-spacing: 4px;
    color:teal;
    justify-content: center;
    margin-bottom: 10px;
    font-family: Segoe UI;
    padding: 30px;
    background-color: transparent;
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


const Home = () => {
  
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user.currentUser);
  if(user !== null){
    getUserCart(dispatch,user._id);
  }
  /*
  try{
    const user = useSelector(state=>state.user.currentUser);
    getUserCart(dispatch,user._id);
  }catch(err){}
  */

let userRes;
  useEffect(()=>{
    const getUser = async () => {
      fetch("http://localhost:5000/api/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          userRes = resObject;
          console.log(resObject);
          loginGoogle(dispatch, resObject);
          if(user !== null){
          getUserCart(dispatch,user._id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
  };

 user === null && getUser();
}, []);

//console.log(userRes);
return (
    <div>
      <Navbar/>
      <NavbarSecondary/>
      <Slider/>
      <Categories/>
      <Accessories/>
      <DesignPoster/>
      <TrendingTitle>TRENDING</TrendingTitle>
      <Products/>
      <br/><br/><br/>
      <ContactUsTitle>CONTACT US</ContactUsTitle>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
