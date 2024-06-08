import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ item }) => {
  // Destructure the required values from the context
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  
  // Destructure item properties
  const { _id, name, price, description, image } = item;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
      </div>
      <div className="food-item-counter">
        {cartItems[_id] ? (
          <div className="food-item-Counter-scale">
            <img
              src={assets.remove_icon_red}
              onClick={() => {
                removeFromCart(_id);
              }}
              alt=""
            />
            <p>{cartItems[_id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => {
                addToCart(_id);
              }}
              alt=""
            />
          </div>
        ) : (
          <img
            className="food-item-add"
            onClick={() => {
              // Call addToCart with the item ID if not already in the cart
              addToCart(_id);
            }}
            src={assets.add_icon_white}
            alt=""
          />
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
