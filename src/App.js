import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { routes } from "./routes";
import { RouteWithSubRoutes } from "./helpers";
import "./styles/common.css";
import "./styles/card-1.css";
import "./styles/sidePanel.css";
import "./styles/catPanel.css";
import "./styles/mediaQueries.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
          </Switch>
      </div>
    );
  }
}

export default App;
