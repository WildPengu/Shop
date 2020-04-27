import React from "react";
import Product from "./Product";
import "../../../styles/home/Products.css";

const Products = () => {
  return (
    <section className="products-container">
      <h2 className="products-topic">przeglądaj nowości</h2>
      <div className="products-navigation">
        <i className="angle left icon" id="products-arrow"></i>
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <i className="angle right icon products-arrow" id="products-arrow"></i>
      </div>
    </section>
  );
};

export default Products;
