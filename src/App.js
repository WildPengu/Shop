import React from "react";
import "./styles/App.css";
import Home from "./layouts/home/Home.js";
import Shop from "./layouts/shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/mezczyzni">
            <Shop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
