import React, { useState, useEffect } from "react";
import Menu from "../home/Menu";
import Filter from "./Filter";
import ActiveFilters from "./ActiveFilters";
import ShopProductsHeader from "./ShopProductsHeader";
import Product from "./components/Product";
import "../../styles/shop/Shop.css";

const useForceUpdate = () => useState()[1];

const Shop = () => {
  const forceUpdate = useForceUpdate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const ascending = (newProducts, j) => {
    if (newProducts[j - 1].price < newProducts[j].price) {
      const temp = newProducts[j - 1];
      newProducts[j - 1] = newProducts[j];
      newProducts[j] = temp;
    }
  };

  const descending = (newProducts, j) => {
    if (newProducts[j - 1].price > newProducts[j].price) {
      const temp = newProducts[j - 1];
      newProducts[j - 1] = newProducts[j];
      newProducts[j] = temp;
    }
  };

  const sort = (comp) => {
    let newProducts = products;
    for (let i = 1; i < newProducts.length; i++) {
      for (let j = 1; j < newProducts.length; j++) {
        comp(newProducts, j);
      }
    }
    setProducts(newProducts);
  };

  let productsToRender = null;

  const renderProducts = () => {
    productsToRender = products.map((product) => (
      <Product
        key={product.id}
        name={product.name}
        price={product.price}
        varieties={product.varieties}
      />
    ));
  };

  if (products.length > 0) {
    renderProducts();
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
          <ShopProductsHeader
            sort={sort}
            ascending={ascending}
            descending={descending}
          />
          <div className="shop-products-container">{productsToRender}</div>
        </div>
      </div>
      <button onClick={forceUpdate}>Click To Render</button>
    </div>
  );
};

export default Shop;
