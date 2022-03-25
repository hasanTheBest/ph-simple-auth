import React from "react";
import "./CartSidebar.css";

const CartSidebar = ({ cartItems }) => {
  const { count, price, tax, shipping, total } = cartItems.reduce(
    (all, current) => {
      all.count += current.quantity;
      all.price += current.price * current.quantity;
      all.shipping += current.shipping;
      all.tax = all.price * 0.1;
      all.total = all.price + all.tax + all.shipping;

      return all;
    },
    { count: 0, price: 0, tax: 0, shipping: 0, total: 0 }
  );

  return (
    <div className="cart_sidebar">
      <h4>Your Purchases</h4>
      <p className="cart_sidebar-selectedItems">Added Items: {count}</p>
      <p className="cart_sidebar-price">Price: {price}</p>
      <p className="cart_sidebar-tax">Tax: {tax.toFixed(2)} (10% on price)</p>
      <p className="cart_sidebar-shippingCost">Shipping Cost: {shipping}</p>
      <p className="cart_sidebar-total">Total: {total.toFixed(2)}</p>
    </div>
  );
};

export default CartSidebar;
