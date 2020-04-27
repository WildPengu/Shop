import React from "react";
import "../../styles/home/Trending.css";
import BlackButton from "../../components/BlackButton";

const Trending = () => {
  return (
    <section>
      <div className="trending-pictures-container">
        <div className="trending-picture left-picture"></div>
        <div className="trending-picture right-picture"></div>
      </div>
      <div className="picture-describe-container">
        <div className="picture-describe">
          <h2>home sweat home</h2>
          <span>Męskie Treningowe</span>
          <div>
            <BlackButton
              message={"przeglądaj"}
              fontColor={"black"}
              buttonFont={"white"}
              buttonBackground={"black"}
            />
          </div>
        </div>
        <div className="picture-describe">
          <h2>trenuj w domu</h2>
          <span>Damskie Treningowe</span>
          <div>
            <BlackButton
              message={"przeglądaj"}
              fontColor={"black"}
              buttonFont={"white"}
              buttonBackground={"black"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
