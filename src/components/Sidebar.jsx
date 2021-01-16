import { Component } from "react";
import { AiFillFolder, AiFillIdcard, AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {
    active: false,
  };

  toggleSidebar = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <div>
        {/* Button for small screens to make the sidebar appear */}
        <button
          onClick={this.toggleSidebar}
          className="btn btn-primary btn-block sidebar-btn"
        >
          MENU
        </button>

        {/* Sidebar starts */}
        <div className={"sidebar " + (this.state.active && " active")}>
          <div className="closing" onClick={this.toggleSidebar}>
            <AiOutlineClose />
          </div>

          {/* Logo & Brand name */}
          <div className="logo">
            <img src="https://libertypie.com/assets/img/logo.svg" alt="" />
            <span>LibertyPie</span>
          </div>
          {/* Logo & Brand name  END*/}

          {/* Profile details start */}
          <div className="profile">
            <img
              src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
              alt=""
            />
            <div className="details">
              <div className="name">Admin</div>
              <div className="adr">{this.props.account}</div>
            </div>
            {/* Profile details end */}

            {/* Link starts */}
            <div className="links">
              <Link to="/categories">
                <AiFillFolder />
                <span>Categories</span>
              </Link>

              <Link to="/permission-manager">
                <AiFillIdcard />
                <span>Permission Manager</span>
              </Link>
            </div>
            {/* Linnk Ends, */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { account, loading, error } = state.common;

  return {
    account,
    loading,
    error,
  };
};

export default connect(mapStateToProps, null)(Sidebar);
