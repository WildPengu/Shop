import React from "react";
import "../../styles/shop/ProductColor.css";

const ProductColor = (props) => {
  const colors = props.colors.map((color, i) => (
    <div
      key={i}
      className="product-color"
      style={{ backgroundColor: color }}
    ></div>
  ));
  return (
    <div>
      <span className="category-header">
        <span>Kolor</span>
        <span>-</span>
      </span>
      <div className="product-color-container">{colors}</div>
      <hr />
    </div>
  );
};

export default ProductColor;
