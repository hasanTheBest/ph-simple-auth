import React from "react";
import "./Product.css";

const Product = ({ id, name, img, price, seller, ratings, category }) => {
  return (
    <div className="products_product">
      <div className="products_product-img">
        <img src={img} alt="" />
      </div>
      <div className="product_content">
        <h5 className="product_content-name">{name}</h5>
        <h6 className="product_content-price">Price: ${price}</h6>
        <small className="product_content-seller">Manufacturer: {seller}</small>
        <br />
        <small className="product_content-ratings">
          Ratings: {ratings} star
        </small>
      </div>

      <button className="products_product-cartBtn">Add to Cart</button>
    </div>
  );
};

export default Product;
