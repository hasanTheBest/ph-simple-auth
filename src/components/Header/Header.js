import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header_log">
          <img src={logo} alt="Site Logo" />
        </div>
        <div className="header_menu">
          <a className="active" href="/shop">
            Shop
          </a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
