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

// set cookie for x number of days
// cname: name of the cookie
// cvlue: value of the cookie
// exdays: number of days
export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// set a json cookie
// cname: name of the cookie
// cvlue: value of the cookie
// exdays: number of days
export function setJsonCookie(cname, cvalue, exdays) {
  setCookie(cname, JSON.stringify(cvalue), exdays);
}

// get cookies saved in the browser for name
// cname: name of the cookie
export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// get json cookies saved in the browser for name
// cname: name of the cookie
export function getJsonCookie(cname) {
  return JSON.parse(getCookie(cname));
}


// check if cookies exist
export function checkCookie(cname) {
  var user = getCookie(cname);
  if (user != "") {
    return true;
  }

  return false;
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
