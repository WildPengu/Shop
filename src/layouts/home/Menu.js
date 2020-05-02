import React from "react";
import "../../styles/home/Menu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="header-container">
      <nav className="menu">
        <ul>
          <li>
            <span>
              <Link to="/">Home </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/kobiety">Kobiety </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/mezczyzni">Mężczyźni </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/dzieciece">Dzięcięce </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/select">Select </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/kolekcje">Kolekcje </Link>
            </span>
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
