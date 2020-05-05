import React from "react";

const FilterBy = ({
  items,
  setActiveFilter,
  priceWidth,
  header,
  filterType,
}) => {
  const listItems = items.map((item, i) => (
    <span
      key={i}
      onClick={() => setActiveFilter(filterType)}
      className="category-item"
      style={{ width: priceWidth }}
    >
      {item}
    </span>
  ));

  return (
    <div>
      <span className="category-header">
        <span>{header}</span>
        <span>-</span>
      </span>
      <div className="category-items-container">{listItems}</div>
      <hr />
    </div>
  );
};

export default FilterBy;
