import React from "react";
import "./Header.css";
// import "./Header.css";
const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-content">
        <h2>Order Your Favorite Dishes Today</h2>
        <p>
          Explore a wide selection of meals, each crafted with top-quality
          ingredients and exceptional culinary skills. We're here to fulfill
          your appetite and enhance your dining journey with every bite.
        </p>
        <button>Discover Our Menu</button>
      </div>
      <div id='menu'></div>
    </div>
  );
};

export default Header;
