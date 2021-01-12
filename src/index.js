import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};


ReactDOM.render(
    <Router>
      <Route component={ScrollToTop}></Route>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>,
  document.getElementById('root')
);
