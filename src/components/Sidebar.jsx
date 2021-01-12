import { Component } from "react";
import { AiFillFolder, AiFillIdcard } from "react-icons/ai";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <img src="https://libertypie.com/assets/img/logo.svg" alt="" />
          <span>LibertyPie</span>
        </div>

        <div className="profile">
          <img
            src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png"
            alt=""
          />
          <div className="details">
            <div className="name">Rahul</div>
            <div className="adr">0xf6f574224d28f52FeDE69...</div>
          </div>

          <div className="links">
            <a href="">
              <AiFillFolder />
              <span>Categories</span>
            </a>

            <a href="">
              <AiFillIdcard />
              <span>Permission Manager</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
