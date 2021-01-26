import { Component } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import { getRole, updateRole } from "../actions/permissionManagerActions";

class PermissionManager extends Component {
  state = {
    role: "",
    addr: "",
  };

  async componentDidMount() {
    await this.props.getRole(this.props.account, this.props.permissionManager);
  }

  /**
   * update role state
   * @param {*} event
   */
  updateRole = (event) => {
    this.setState({
      role: event.target.value,
    });
  };

  /**
   * update address state
   * @param {*} event
   */
  updateAddress = (event) => {
    this.setState({
      addr: event.target.value,
    });
  };

  /**
   * save role
   */
  saveRole = async () => {
    await this.props.updateRole(
      this.state.addr,
      this.state.role,
      this.props.contract
    );
  };

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
                    <div className="float-right">{this.props.role}</div>
                    <h4>Appoint Admin</h4>
                    <br />
                    <br />
                    <label htmlFor="addr">User Address</label>
                    <div className="role-selector">
                      <input
                        type="text"
                        id="addr"
                        placeholder="0xf6f574224d28f52FeDE69a68E3Cb63411640E011"
                        onChange={this.updateAddress}
                      />
                      <select onChange={this.updateRole}>
                        <option disabled>Roles</option>
                        <option value="SUPER ADMIN">SUPER ADMIN</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="MODERATOR">MODERATOR</option>
                      </select>
                    </div>
                    <div className="float-right">
                      <div
                        className="connect-btn small"
                        onClick={this.saveRole}
                      >
                        Save
                      </div>
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

const mapStateToProps = (state) => {
  const { contract, permissionManager, account, web3 } = state.common;
  const {
    role,
    updateLoading,
    updateError,
    loading,
    error,
  } = state.permissionManager;

  return {
    contract,
    permissionManager,
    account,
    web3,
    role,
    updateLoading,
    updateError,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRole: (addr, contract) => dispatch(getRole(addr, contract)),
    updateRole: (addr, web3, role, contract) =>
      dispatch(updateRole(addr, web3, role, contract)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PermissionManager);
