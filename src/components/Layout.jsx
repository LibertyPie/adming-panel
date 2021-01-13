import { Component } from "react";
import Sidebar from "./Sidebar";

class Layout extends Component {
  state = {};
  render() {
    return <div className="outterPadding">{this.props.children}</div>;
  }
}

export default Layout;
