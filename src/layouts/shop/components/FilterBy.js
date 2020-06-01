import React from "react";

const FilterBy = (props) => {
  const listItems = props.items.map((item, i) => (
    <span key={i} className="category-item" style={{ width: props.priceWidth }}>
      {item}
    </span>
  ));

  return (
    <div>
      <span className="category-header">
        <span>{props.header}</span>
        <span>-</span>
      </span>
      <div className="category-items-container">{listItems}</div>
      <hr />
    </div>
  );
};

export default FilterBy;
