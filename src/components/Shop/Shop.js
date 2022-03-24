import React, { useState } from "react";
import CartSidebar from "../CartSidebar/CartSidebar";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddCartBtnClick = (cartItem) => {
    setCartItems([...cartItems, cartItem]);
  };

  return (
    <div className="shop">
      <Products handleAddCartBtnClick={handleAddCartBtnClick} />
      <CartSidebar cartItems={cartItems} />
    </div>
  );
};

export default Shop;
