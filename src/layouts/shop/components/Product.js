import React from "react";
import "../../../styles/components/Product.css";

const Product = (props) => {
  return (
    <div className="shop-product">
      <img src={props.varieties[0].image} alt=""></img>
      <div className="product-active-color-container">
        <div className="product-active-color"></div>
        <div className="product-active-color"></div>
      </div>
      <span className="shop-product-name">{props.name}</span>
      <span className="shop-product-price">{props.price} zł</span>
    </div>
  );
};

export default Product;
