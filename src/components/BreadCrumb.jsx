import { Component } from "react";

class BreadCrumb extends Component {
  state = {};
  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {this.props.currentPage}
          </li>
        </ol>
      </nav>
    );
  }
}

export default BreadCrumb;
