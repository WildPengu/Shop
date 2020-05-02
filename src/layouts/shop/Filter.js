import React from "react";
import ProductsTypes from "./ProductsTypes";
import "../../styles/shop/Filter.css";

const Filter = () => {
  return (
    <div>
      <h2 className="section-header">Mężczyźni</h2>
      <ProductsTypes />
    </div>
  );
};

export default Filter;
