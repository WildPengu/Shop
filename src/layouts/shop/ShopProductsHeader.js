import React from "react";
import "../../styles/shop/ShopProductsHeader.css";

const ShopProductsHeader = (props) => {
  return (
    <div>
      <h2 className="section-header">
        Nowości <span>(59)</span>
      </h2>
      <div className="filters-in-header-container">
        <span>Sortuj</span>
        <div className="filter-header">Top Sellers</div>
        <div className="filter-header">New Arrivals</div>
        <div className="filter-header" onClick={() => props.sortByPrice(">")}>
          Price Low To High
        </div>
        <div className="filter-header" onClick={() => props.sortByPrice("<")}>
          Price High To Low
        </div>
      </div>
      <hr className="line-under-header" />
    </div>
  );
};

export default ShopProductsHeader;
