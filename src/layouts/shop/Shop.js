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
  const [filteredPoducts, setfilteredPoducts] = useState([]);
  const [actualSearchedSize, setActualSearchedSize] = useState();

  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // const sortByPrice = (sign) => {
  //   let newProducts = products;
  //   for (let i = 0; i < newProducts.length; i++) {
  //     for (let j = 1; j < newProducts.length; j++) {
  //       if (eval(newProducts[j - 1].price + sign + newProducts[j].price)) {
  //         const temp = newProducts[j];
  //         newProducts[j] = newProducts[j - 1];
  //         newProducts[j - 1] = temp;
  //       }
  //     }
  //   }

  //   setfilteredPoducts(newProducts);
  //   renderProducts();
  // };

  const filter = (list) => {
    _.filters;
    // let newProducts = [];
    // for (let i = 0; i < products.length; i++) {
    //   for (let j = 0; j < products[i].varieties.length; j++) {
    //     for (let k = 0; k < products[i].varieties[j].sizes.length; k++) {
    //       if (products[i].varieties[j].sizes[k] === parseFloat(value)) {
    //         console.log(products[i]);
    //         newProducts.push(products[i]);
    //       }
    //     }
    //   }
    // }
    // setfilteredPoducts(newProducts);
  };

  const renderProducts = () => {
    return filter(filteredPoducts).map((product) => (
      <Product
        key={product.id}
        name={product.name}
        price={product.price}
        varieties={product.varieties}
      />
    ));
  };

  const setActiveFilter = (type) => {
    setFilters({ ...filters, type: true });
    size: {
      filter: () => {},
      activeSize: 
    }
  };

  return (
    <div>
      <Menu />
      <div className="shop-container">
        <div className="shop-left-side">
          <Filter />
          <ActiveFilters setActiveFilter={setActiveFilter} />
        </div>
        <div className="shop-right-side">
          {/* <ShopProductsHeader sortByPrice={sortByPrice} /> */}
          <div className="shop-products-container">{renderProducts()}</div>
        </div>
      </div>
      <button onClick={forceUpdate}>Click To Render</button>
    </div>
  );
};

export default Shop;
