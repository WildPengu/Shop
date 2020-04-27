import React from "react";
import "../styles/components/BlackButton.css";

const BlackButton = (props) => {
  return (
    <a href="https://google.com" className="black-button-link">
      <span
        className="black-button"
        style={{
          backgroundColor: props.buttonBackground,
          color: props.buttonFont,
        }}
      >
        {props.message}
      </span>
    </a>
  );
};

export default BlackButton;
