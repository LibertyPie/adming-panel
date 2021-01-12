import { Component } from "react";
import Sidebar from "./Sidebar";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div className="outterPadding">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-5">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-8 col-sm7">
            <div className="p20px">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {this.props.page}
                  </li>
                </ol>
              </nav>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
