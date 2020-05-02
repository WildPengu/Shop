import React from "react";
import "../../styles/shop/CostSlider.css";
const CostSlider = (props) => {
  return (
    <div>
      <span className="category-header">
        <span>Cena</span>
        <span>-</span>
      </span>
      <div className="category-items-container">59,00 zł - 1.189,00 zł</div>
      <div className="cost-slider">
        <hr />
      </div>
      <div className="price-range-limits">
        <span>Min</span>
        <span>Max</span>
      </div>
      <hr />
    </div>
  );
};

export default CostSlider;
