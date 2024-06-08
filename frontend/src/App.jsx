import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
const App = () => {
  const [showLogin, setShowLogin]= useState(false);
  return (
    <div className="app">
         {showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>}
      <Navbar className='navbar' setShowLogin={setShowLogin} />
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
  );
};

export default App;
