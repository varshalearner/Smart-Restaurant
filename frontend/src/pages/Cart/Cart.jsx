import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./Cart.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const Cart = () => {
  const {
    food_list,
    cartItems,
    removeFromCart,
    addToCart,
    decreaseCountToCart,
    getTotalCartAmount
  } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p></p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img
                    src={"../../" + item.image}
                    className="cart-item-image"
                    alt=""
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <div className="cart-item-counter">
                    <img
                      src={assets.remove_icon_red}
                      onClick={() => decreaseCountToCart(item._id)}
                      alt=""
                    />
                    {cartItems[item._id]}
                    <img
                      src={assets.add_icon_green}
                      onClick={() => {
                        addToCart(item._id);
                      }}
                      alt=""
                    />
                   
                  </div>

                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cart-items-remove" onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>${getTotalCartAmount()===0?0:5}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b></div>
          </div>
          <Link to="/order"> 
          <button>Proceed to checkout</button>
          </Link>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
     {/* <Footer/> */}
    </div>
  );
};

export default Cart;
