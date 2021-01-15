import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/root";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// user redux thunk as a middleware for netwrok request
const store = createStore(reducer, {}, applyMiddleware(thunk));

// Scroll to top whenever page is changed
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};


ReactDOM.render(
   <Provider store={store}>
    <Router>
      <Route component={ScrollToTop}></Route>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
    </Provider>,
  document.getElementById('root')
);
