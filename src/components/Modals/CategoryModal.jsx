import { Modal } from "react-bootstrap";
import { Component } from "react";
import { AiOutlinePlus } from "react-icons/ai";

class CategoryModal extends Component {
  state = {
    show: false,
  };

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <span>
        <span onClick={this.toggleModal}>{this.props.children}</span>
        <Modal
          show={this.state.show}
          onHide={this.toggleModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="catForm">
              <div className="img">
                <AiOutlinePlus />
              </div>
              <div className="name">
                <input type="text" placeholder="Category Name" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="link" onClick={this.toggleModal}>
              Save
            </div>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

export default CategoryModal;
