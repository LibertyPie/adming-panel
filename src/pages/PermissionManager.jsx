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

              <h3>Permission Manager</h3>

              <br />
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                  <div className="card-2">
                    <div className="float-right">MODERATOR</div>
                    <h4>Appoint Admin</h4>
                    <br />
                    <br />
                    <label htmlFor="addr">User Address</label>
                    <input
                      type="text"
                      id="addr"
                      placeholder="0xf6f574224d28f52FeDE69a68E3Cb63411640E011"
                    />
                    <div className="float-right">
                      <div className="connect-btn small">Save</div>
                    </div>
                    <div className="clear"></div>

                    <br />
                    <br />
                    <div className="point">
                      NOTE: You don't have permission to appoint admin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PermissionManager;
