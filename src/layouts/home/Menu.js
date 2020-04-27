import React from "react";
import "../../styles/home/Menu.css";

const Menu = () => {
  return (
    <div className="header-container">
      <nav className="menu">
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Kobiety</span>
          </li>
          <li>
            <span>Mężczyźni</span>
          </li>
          <li>
            <span>Dziecięce</span>
          </li>
          <li>
            <span>Select</span>
          </li>
          <li>
            <span>Kolekcje</span>
          </li>
        </ul>
      </nav>
      <div className="header-bar-right">
        <div className="ui search">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="Szukaj" />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
        <span>
          <i className="shopping cart icon"></i>
        </span>
        <span>
          <i className="user icon"></i>
        </span>
      </div>
    </div>
  );
};

export default Menu;
