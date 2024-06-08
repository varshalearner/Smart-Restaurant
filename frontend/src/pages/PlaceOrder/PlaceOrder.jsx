import React from "react";
import "./PlaceOrder.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="order">
      <div className="margin"></div>
      <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="field">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" name="" id="" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="field">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="field">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="tel" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total cart-total-for-payment">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
              </b>
            </div>
          </div>
          {/* <Link to="/order"> */}
            <button>Proceed to Payment</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlaceOrder;
