import React from "react";
import CartSidebar from "../CartSidebar/CartSidebar";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <Products />
      <CartSidebar />
    </div>
  );
};

export default Shop;
