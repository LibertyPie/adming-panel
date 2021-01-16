import { Component } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Sidebar from "../components/Sidebar";

class PermissionManager extends Component {
  state = {};
  render() {
    return (
      <div className="outterPadding">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-5">
            <Sidebar />
          </div>
          {/* Change the layout in case side panel is active */}
          <div className="col-lg-9 col-md-6 col-sm-12 col-xs-12">
            <div className="p20px">
              {/* Breadcrumbs */}
              <BreadCrumb currentPage="Permission Manager" />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PermissionManager;
