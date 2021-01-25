import { Component } from "react";

class BreadCrumb extends Component {
  state = {};
  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {this.props.currentPage}
          </li>
        </ol>
      </nav>
    );
  }
}

export default BreadCrumb;
