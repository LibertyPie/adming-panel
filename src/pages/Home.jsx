import { Component } from "react";
import { connect } from "react-redux";
import { connectWallet } from "../actions/commonActions";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <div class="row justify-content-center">
          <div class="col-6 text-center">
            <div className="connect-btn" onClick={this.props.connectWallet}>
              Connect
            </div>
          </div>
        </div>
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
    connectWallet: () => dispatch(connectWallet()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
