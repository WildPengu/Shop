import React from "react";
import Menu from "./Menu";
import Sales from "./components/Sales";
import Trending from "./Trending";
import Products from "./components/Products";

const Home = () => {
  return (
    <div>
      <Menu />
      <Sales
        image={
          "https://images.puma.com/image/upload/q_auto,w_1440/regional/~regional~EEA~others~KOP~Full-Bleed-Hero~Desktop~Tall_1440x500~EEA-20SS_ECOM_MF_SP_Spring_FullBleedHero_Desktop_1440x500_3.jpg"
        }
        fontColor={"black"}
        buttonFont={"white"}
        buttonBackground={"black"}
        message={
          <span>
            kids styles <br /> 10% zniżki <br /> na wszystko
          </span>
        }
        firstButtonMessage={"przeglądaj dla dziewczynek"}
        secondButtonMessage={"przeglądaj dla chłopców"}
      />
      <Trending />
      <Products />
      <Sales
        image={
          "https://images.puma.com/image/upload/q_auto,w_1440/regional/%7Eregional%7EEEA%7Eothers%7EKOP%7EFull-Bleed-Hero%7EDesktop%7ETall_1440x500%7EEEA-20SS_Ecom_MF_GE_Sale_FullBleedHero_Large_Mid-Season_Desktop_1440x500_1.jpg/fmt/jpg"
        }
        fontColor={"white"}
        buttonFont={"black"}
        buttonBackground={"white"}
        message={
          <span>
            nawet <br /> 50% zniżki
          </span>
        }
        firstButtonMessage={"przeglądaj wyprzedaż artykułów męskich"}
        secondButtonMessage={"przeglądaj wyprzedaż artykułów damskich"}
      />
      <Products />
    </div>
  );
};

export default Home;
