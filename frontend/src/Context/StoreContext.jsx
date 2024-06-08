import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  //key will be the _id and value will be the qty of prod in cart
  const [cartItems, setCartItems] = useState({});

  const addToCart = (ItemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
    
      if (updatedCart[ItemId]) {
        updatedCart[ItemId] += 1;
      } else {
        updatedCart[ItemId] = 1; 
      }
      return updatedCart;
    });
  };
  const decreaseCountToCart = (ItemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
    
      if (updatedCart[ItemId]) {
        updatedCart[ItemId] -= 1;
      } 
      return updatedCart;
    });
  };

  const removeFromCart = (ItemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[ItemId]) {
        delete updatedCart[ItemId];
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product) => product._id === item);
            totalAmount += itemInfo.price * cartItems[item];
        }
    }
    return totalAmount;
}
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    decreaseCountToCart,
    getTotalCartAmount
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]); 

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
