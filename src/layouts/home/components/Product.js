import React from "react";
import "../../../styles/home/Product.css";

const Product = () => {
  return (
    <div className="product-container">
      <img
        src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_230,h_230/global/372429/01/sv01/fnd/EEA/fmt/png/Buty-sportowe-RS-X%20230w"
        alt=""
      ></img>
      <hr className="line-product" />
      <span className="product-name">Buty sportowe RS-X </span>
      <span className="product-price">479,00</span>
    </div>
  );
};

export default Product;
