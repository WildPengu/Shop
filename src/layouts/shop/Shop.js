import React, { useState, useEffect } from "react";
import Menu from "../home/Menu";
import Filter from "./Filter";
import ActiveFilters from "./ActiveFilters";
import ShopProductsHeader from "./ShopProductsHeader";
import Product from "./components/Product";
import "../../styles/shop/Shop.css";

const Shop = () => {
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  });

  const [products, setProducts] = useState(0);

  let productsToRender = null;

  if (products.length > 0) {
    productsToRender = products.map((product) => (
      <Product
        key={product.id}
        name={product.name}
        price={product.price}
        varieties={product.varieties}
      />
    ));
  }

  return (
    <div>
      <Menu />
      <div className="shop-container">
        <div className="shop-left-side">
          <Filter />
          <ActiveFilters />
        </div>
        <div className="shop-right-side">
          <ShopProductsHeader />
          <div className="shop-products-container">{productsToRender}</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
