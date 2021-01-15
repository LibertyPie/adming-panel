import React, { Component } from "react";
import {
  BrowserRouter as Router,Redirect,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import { routes } from "./routes";
import { connectIfAuthorized } from "./actions/commonActions";
import { RouteWithSubRoutes } from "./helpers";
import "./styles/common.css";
import "./styles/card-1.css";
import "./styles/sidePanel.css";
import "./styles/catPanel.css";
import "./styles/mediaQueries.css";
import { GUEST_REDIRECT, USER_REDIRECT } from "./config";

class App extends Component {


  componentDidMount(){
    //on load check if user is already connected, if so load web3
    this.props.connectIfAuthorized();
  }

  render() {
    return (
      <div className="App">
        {/* Switch between routes */}
        <Switch>
          {/* Loop through routes defined under routes.js page */}
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} 
                // Logic to redirect users / guard logic
                  redirectTo={(route.auth == "guests" && this.props.web3)? USER_REDIRECT : ((route.auth == "users" && !this.props.web3)? GUEST_REDIRECT : false )}
                  />
              ))}
          </Switch>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { web3, account, loading, error } = state.common;

  return {
    web3,
    account,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    connectIfAuthorized: () => dispatch(connectIfAuthorized()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
