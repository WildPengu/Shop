import React from "react";
import BlackButton from "../../../components/BlackButton";
import "../../../styles/components/Sales.css";

const Sales = (props) => {
  return (
    <section
      className="sales-container"
      style={{ backgroundImage: "url(" + props.image + ")" }}
    >
      <div className="sales-describe">
        <span className="sales-topic" style={{ color: props.fontColor }}>
          {props.message}
        </span>
        <span className="code-container">
          <span style={{ color: props.fontColor }}>
            Użyj kodu: <span>KIDS10</span>
          </span>
        </span>
        <div className="sales-button-container">
          <BlackButton
            buttonFont={props.buttonFont}
            buttonBackground={props.buttonBackground}
            message={props.firstButtonMessage}
          />
          <BlackButton
            buttonBackground={props.buttonBackground}
            buttonFont={props.buttonFont}
            message={props.secondButtonMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default Sales;
