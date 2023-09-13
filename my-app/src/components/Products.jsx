import styled from "styled-components";
import { useState, useEffect } from "react";
import Product from "../components/Product";
import axios from "axios";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { ContactSupportOutlined } from "@material-ui/icons";

const Container = styled.div`
    padding: 10%;
    margin-top: -10%;
    font-family: Segoe UI;
    display: flex;
    flex-wrap: wrap;
`;

const Button = styled.button`
    padding: 20px;
    margin-top: -50%;
    border: none;
    cursor: pointer;
    font-size: 15px;
    background-color: lightseagreen;
    margin-left: 47%;
    color: white;
`;


const Products = ({cat, filters, sort}) => {
  const navigate = useNavigate();
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  const goToHome = () =>{
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    navigate("/products/all/stone");
};
  //service to retrived data from backend
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat
          ? "http://localhost:5000/api/products?category="+ cat.toString()
          :"http://localhost:5000/api/products?category=")
        //console.log(res);

        //setProducts(res.data);
        setProducts(res.data)
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

//set type of product filter

  useEffect(() => {
    const filterType = () =>{
      //console.log("filters type ", filters);
      setFilteredProducts(
        (products).filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    }
    const allType = () => {
      //console.log("all type ", filters);
        setFilteredProducts(
          (products).filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value[0]) || item[key].includes(value[1]) ||
              item[key].includes(value[2]) || item[key].includes(value[3]) ||
              item[key].includes(value[4])
          )
        )
      );
    }

    if(filters && !Array.isArray(filters.type)){
      filterType();
    }
    else if(filters && Array.isArray(filters.type)){
      allType();
    }
}, [products, cat, filters]);
/*

useEffect(() => {
  if(filters && filters.type === "all"){
    console.log("pass filter loop all");
    filters.type = ["stone", "necklage", "piercing",
    "ring", "bracelet"];
      setFilteredProducts(
        (products).filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value[0]) || item[key].includes(value[1]) ||
            item[key].includes(value[2]) || item[key].includes(value[3]) ||
            item[key].includes(value[4])
        )
      )
    );
  }

}, [products, cat, filters]);
*/

 //sort products 
 
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div>
    <Container>
       {cat ? filteredProducts.map((item) =>
         <Product item={item} key={item._id} />): 

         products.map((item) => 
         <Product item={item} key={item._id} />)
        }
    </Container>
    <Button onClick={()=>goToHome()}>View More</Button>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
  );
};


export default Products
