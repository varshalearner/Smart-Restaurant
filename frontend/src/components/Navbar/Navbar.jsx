import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo " className="logo" />
      </Link>

      <ul className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
        <Link to="/">
          <li
            className={menu === "home" ? "active" : ""}
            onClick={() => {
              setMenu("home");
              setIsMenuOpen(false);
            }}
          >
            home
          </li>
        </Link>
        <a href="#menu">
          <li
            className={menu === "menu" ? "active" : ""}
            onClick={() => {
              setMenu("menu");
              setIsMenuOpen(false);
            }}
          >
            menu
          </li>
        </a>
        <li
          className={menu === "about" ? "active" : ""}
          onClick={() => {
            setMenu("about");
            setIsMenuOpen(false);
          }}
        >
          about
        </li>
        <li
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => {
            setMenu("contact-us");
            setIsMenuOpen(false);
          }}
        >
          contact us
        </li>
        <li>
          <p
            className=""
            onClick={() => {
              setShowLogin(true);
              setIsMenuOpen(false);
            }}
          >
            sign in
          </p>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
            <div className={getTotalCartAmount()>0?"dot":""}></div>
          </Link>
        </div>
        <button className="sign-in" onClick={() => setShowLogin(true)}>
          sign in
        </button>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
      </div>
    </div>
  );
};

export default Navbar;
