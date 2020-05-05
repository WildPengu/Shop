import React from "react";
import FilterBy from "./components/FilterBy";
import CostSlider from "./CostSlider";
import ProductColor from "./ProductColor";
import "../../styles/shop/ActiveFilters.css";

const ActiveFilters = (props) => {
  return (
    <div className="active-filters">
      <span className="filter-by">filtruj wg</span>
      <span className="delete-all-filters">Usuń Wszytkie Filtry</span>
      <FilterBy header={"category"} items={["Buty", "Odzież", "Akcesoria"]} />
      <FilterBy
        header={"Rodzaj produktu"}
        items={[
          "Tenisówki",
          "Buty do motosportu",
          "Sandały",
          "Buty piłkarskie",
        ]}
      />
      <CostSlider />
      <FilterBy
        setActiveFilter={props.setActiveFilter}
        header={"Rozmiar"}
        filterType="Size"
        priceWidth={"50px"}
        items={[
          "35.5",
          "36",
          "37",
          "37.5",
          "38",
          "38.5",
          "39",
          "40",
          "40.5",
          "41",
        ]}
      />

      <ProductColor
        colors={[
          "black",
          "gray",
          "blue",
          "green",
          "orange",
          "yellow",
          "red",
          "purple",
          "pink",
          "white",
        ]}
      />

      <FilterBy
        header={"Aktywność"}
        items={[
          "Sportowy styl",
          "Motosport",
          "Piłka nożna",
          "Trening",
          "Bieganie",
        ]}
      />
    </div>
  );
};

export default ActiveFilters;
