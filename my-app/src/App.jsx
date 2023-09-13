import styled from "styled-components"
import Home from './pages/Home.jsx'
import ProductView from './pages/ProductView.jsx';
import ProductList from './pages/ProductList.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Cart from './pages/Cart.jsx';
import Success from "./pages/Success";
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector} from 'react-redux';
import ShippingPolicy from "./pages/ShippingPolicy.jsx";
import Policy from "./pages/Policy.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import OrderView from "./pages/OrderView";

const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return (
  <Router>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/products/:category/:type" element={<ProductList/>} />
      <Route path = "/product/:id" element={<ProductView/>} />
      <Route path = "/cart" element={<Cart/>} />
      <Route path = "/orders" element={<OrderView/>} />
      <Route path = "/shipping" element={<ShippingPolicy/>} />
      <Route path = "/policy" element={<Policy/>} />
      <Route path = "/aboutus" element={<AboutUs/>} />
      <Route path = "/success" element={<Success/>} />
      <Route path = "/login" element = {user ? <Navigate to = "/" /> : <Login/>}/>
      <Route path = "/register" element = {user ? <Navigate to = "/" /> : <Register/>}>
      </Route>
    </Routes>
  </Router>
  );
};

export default App;

