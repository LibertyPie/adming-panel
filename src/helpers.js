import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

// Handle nested routes and guards
export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        (route.redirectTo ? <Redirect to={route.redirectTo} /> :
        <route.component {...props} routes={route.routes} />)
      )}
    />
  );
}


// Conver a string to slug
export const slugToText = slug => {
  var words = slug.split("_");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(" ");
};


// Get query string of the url
export const getUrlVars = () => {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
};
