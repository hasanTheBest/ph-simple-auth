import React, { useEffect, useState } from "react";
import { getItems, setItem } from "../../utilities/useLocalStorage";
import CartSidebar from "../CartSidebar/CartSidebar";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // fetch from local storage
  useEffect(() => {
    const storedCarts = getItems("ema-jhon-cart");
    let itemsToCart = [];

    if (storedCarts && products.length !== 0) {
      for (let id in storedCarts) {
        const item = products.find((product) => product.id === id);
        item.quantity = storedCarts[id];
        itemsToCart.push(item);
      }
    }
    setCartItems(itemsToCart);
  }, [products]);

  const handleAddCartBtnClick = (cartItem) => {
    // setCartItems([...cartItems, cartItem]);
    const alreadyAdded = cartItems.find((item) => item.id === cartItem.id);
    if (alreadyAdded) {
      alreadyAdded.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      cartItem.quantity = 1;
      setCartItems([...cartItems, cartItem]);
    }

    setItem("ema-jhon-cart", cartItem.id);
  };

  return (
    <div className="shop">
      <Products
        products={products}
        handleAddCartBtnClick={handleAddCartBtnClick}
      />
      <CartSidebar cartItems={cartItems} />
    </div>
  );
};

export default Shop;
