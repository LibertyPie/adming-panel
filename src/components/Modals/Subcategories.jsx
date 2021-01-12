import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

class Subcategories extends Component {
  state = {
    show: true,
  };
  render() {
    return (
      <div className="sub-panel">
        <div className="float-right link">
          <AiOutlineClose onClick={this.props.close} />
        </div>
        <div className="">Bank with a long name</div>
      </div>
    );
  }
}

export default Subcategories;
